from flask import Flask, g, jsonify, redirect, render_template, request, session, flash
from email_factory import EmailServiceFactory
from passlib.hash import pbkdf2_sha256
from db import Database
import os
from user_repository import UserRepository
from vaccine_repository import VaccineRepository
from user_service import UserService
from datetime import date, datetime, timedelta
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)


app.secret_key = os.getenv('SECRET_KEY')
DATABASE_PATH = os.getenv('DATABASE_PATH')
app.config["MAIL_SERVER"] = os.getenv('MAIL_SERVER')
app.config["MAIL_PORT"] = os.getenv('MAIL_PORT')
app.config["MAIL_USERNAME"] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS').lower() in ['true', '1', 't']
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL').lower() in ['true', '1', 't']
GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')


def get_db():
    if 'db' not in g:
        g.db = Database(DATABASE_PATH)
    return g.db

def get_user_service():
    if 'user_service' not in g:
        g.user_service = UserService(UserRepository(get_db()), EmailServiceFactory, app)
    return g.user_service

def get_vaccine_repository():
    if 'vaccine_repository' not in g:
        g.vaccine_repository = VaccineRepository(get_db())
    return g.vaccine_repository

@app.teardown_appcontext
def close_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/nearby_hospitals')
def nearby_hospitals():
    return render_template('nearby_hospitals.html', header='Nearby Hospitals', GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY)

@app.route('/contact', methods=['POST', 'GET'])
def contact():
    if request.method == 'POST':
        name = request.form['Name']
        email = request.form['Email']
        message = request.form['Message']
        get_user_service().user_repository.update_contact(name, email, message)
    return render_template('contact.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
    message = None
    if request.method == 'POST':
        email = request.form.get('email')
        typed_password = request.form.get('password')
        if email and typed_password:
            user = get_user_service().authenticate_user(email, typed_password)
            if user:
                session['user'] = user
                return redirect('/vaccine-schedule')
            else:
                message = "Incorrect email or password, please try again"
        else:
            message = "Missing email or password, please try again"
    return render_template('login.html', message=message)

@app.route('/verify', methods=['POST', 'GET'])
def verify():
    message = None
    if request.method == 'POST':
        form_otp = ''.join([request.form[f'digit{i}'] for i in range(1, 7)])
        print("form")
        print(form_otp)
        if get_user_service().verify_user(session['email'], form_otp):
            print("success")
            session.pop('user', None)
            return redirect('/login')
        else:
            message = "Incorrect OTP! Please try again."
    return render_template('otp_verification.html', message=message)

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        confirmPassword = request.form['confirm password']
        phone = request.form['phone']
        birthday = request.form['birthday']
        if password != confirmPassword:
            error_msg = "Passwords do not match."
            return render_template('signup.html', error_msg=error_msg)
        elif name and email and password:
            encrypted_password = get_user_service().register_user(name, email, password, phone, birthday)
            get_vaccine_repository().create_vaccine_schedule(email, phone)
            get_user_service().send_otp(email)
            session['email'] = email
            return redirect('/verify')
    return render_template('signup.html')

@app.route('/forgot-password', methods=['POST', 'GET'])
def forgot_password():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        confirmPassword = request.form['confirm password']
        if password != confirmPassword:
            error_msg = "Passwords do not match."
            return render_template('reset-password.html', error_msg=error_msg)
        elif email and password:
            encrypted_password = get_user_service().update_password(email, password)
            session['email'] = email
            return redirect('/login')
    return render_template('reset-password.html')

@app.route('/reset-password', methods=['POST', 'GET'])
def reset_password():
    message = None
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        confirmPassword = request.form['confirm password']
        if password != confirmPassword:
            error_msg = "Passwords do not match."
            return render_template('reset-password.html', error_msg=error_msg)
        elif email and password:
            encrypted_password = get_user_service().update_password(email, password)
            session['email'] = email
            return render_template('contact.html')
    return render_template('reset-password.html')

def get_vaccine_dates(dateFormat):
    vaccineDates = []
    dateOfBirth = datetime.strptime(session['user']['birthdate'], "%d/%m/%Y")
    vaccineDates.extend([
        datetime.strftime(dateOfBirth + timedelta(days=days), dateFormat)
        for days in [0, 42, 45, 60, 70, 76, 98, 107, 120, 145, 155, 180, 240, 275, 365, 400, 500, 545, 610, 665, 730, 1825, 3650]
    ])
    return vaccineDates

@app.route('/api/get_vaccine_dates', methods=['GET'])
def get_vaccinations_dates():
    return jsonify(get_vaccine_dates('%d/%m/%Y'))

@app.route('/api/update_vaccine_status', methods=['POST'])
def update_vaccination_status():
    vaccine = request.form.get('vaccine')
    status = request.form.get('status')
    get_vaccine_repository().update_vaccine_status(vaccine, status, session['user']['email'])
    return redirect('/vaccine-schedule')

@app.route('/api/get_vaccine_status', methods=['GET'])
def get_vaccinations_status():
    vaccinesStatus = get_vaccine_repository().get_vaccines_status(session['user']['email'])
    return jsonify(vaccinesStatus)

@app.route('/vaccine-schedule')
def vaccine_schedule():
    if 'user' in session:
        vaccineDates = get_vaccine_dates("%d/%m/%Y")
        return render_template('vaccine-schedule.html', header='Vaccine Schedule', vaccineDates=vaccineDates)
    else:
        return redirect('/login')

@app.route('/calendar-schedule')
def calendar_schedule():
    if 'user' in session:
        today = datetime.today().strftime("%d %B, %Y")
        vaccineDates = get_vaccine_dates("%d %B, %Y")
        return render_template('calendar-schedule.html', header='Calendar Schedule', vaccineDates=vaccineDates, today=today)
    else:
        return redirect('/login')

@app.route('/vaccine-details')
def vaccine_details():
    if 'user' in session:
        return render_template('vaccine-details.html', header='Vaccine Details')
    else:
        return redirect('/login')

@app.route('/vaccine-details/<vaccine>')
def vaccine(vaccine):
    if 'user' in session:
        return render_template(f'{vaccine}.html', header=f'{vaccine.replace("-", " ").capitalize()} Vaccine')
    else:
        return redirect('/login')

@app.route('/ask-question', methods=['POST', 'GET'])
def ask_question():
    if 'user' in session:
        if request.method == 'POST':
            question = request.form['question']
            if question:
                if get_user_service().submit_question(session['user']['email'], question):
                    flash('Your question was successfully sent to the doctor!')
        return render_template('ask-question.html', header='Ask Question')
    else:
        return redirect('/login')


@app.route('/profile', methods=['POST', 'GET'])
def profile_question():
    if 'user' in session:
        if request.method == 'POST':
            if 'name' in request.form:
                name = request.form['name']
                if name:
                    get_user_service().user_repository.update_name(name, session['user']['email'])
                    session['user']['name'] = name
            if 'dob' in request.form:
                dob = request.form['dob']
                if dob:
                    get_user_service().user_repository.update_dob(dob, session['user']['email'])
                    session['user']['birthdate'] = dob
            if 'contact' in request.form:
                contact = request.form['contact']
                if contact:
                    get_user_service().user_repository.update_phone(contact, session['user']['email'])
                    session['user']['contact'] = contact
            if 'currentpassword' in request.form and 'newpassword' in request.form and 'confirmnewpassword' in request.form:
                currentpassword = request.form['currentpassword']
                newpassword = request.form['newpassword']
                confirmnewpassword = request.form['confirmnewpassword']
                if currentpassword and newpassword and confirmnewpassword:
                    if pbkdf2_sha256.verify(currentpassword, session['user']['password']):
                        encrypted_password = pbkdf2_sha256.hash(newpassword)
                        get_user_service().user_repository.update_password(session['user']['email'], encrypted_password)
                        session['user']['encrypted_password'] = encrypted_password
            session.modified = True
        return render_template('profile.html', header='Profile')
    else:
        return redirect('/login')

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect('/login')

if __name__ == '__main__':
    app.run(host='localhost', port=8082, debug=True)
