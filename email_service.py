from flask_mail import Message
from datetime import datetime, timedelta
import os

class EmailService:
    def __init__(self, app, db, mail):
        self.app = app
        self.db = db
        self.mail = mail
        self.subject = 'Vaccine Reminder'
        self.sender = os.getenv('MAIL_USERNAME')

    def send_reminder_email(self):
        with self.app.app_context():
            users = self.db.get_users()
            for user in users:
                today = datetime.today()
                birthdate = datetime.strptime(user['birthdate'], "%d/%m/%Y")
                for days, message in self.get_reminders():
                    if today == birthdate + timedelta(days=days):
                        self._send_email(user['email'], user['name'], birthdate, days, message)

    def _send_email(self, email: str, name: str, birthdate: datetime, days: int, message: str) -> None:
        msg = Message(subject=self.subject, sender=self.sender, recipients=[email])
        msg.body = f"Dear Parents,\nOn {datetime.strftime(birthdate + timedelta(days=days+1), '%d/%m/%Y')} or tomorrow your child, {name} should be vaccinated using the following vaccines:\n{message}"
        self.mail.send(msg)
        
    def send_otp_email(self, email: str, otp: str) -> None:
        msg = Message(subject="OTP", sender=self.sender, recipients=[email])
        msg.body = f"Your OTP is: {otp}"
        self.mail.send(msg)

    def send_question_email(self, user_email: str, user_name: str, user_contact: str, question: str) -> None:
        msg = Message(subject="Question raised by patient", sender=self.sender, recipients=["doctoratvaccinereminder@gmail.com"])
        msg.body = (f"Dear Doctor,\n\nYou have received a new question from {user_name}.\n\n"
                    f"Question: {question}\n\n"
                    f"Contact Details:\nName: {user_name}\nEmail: {user_email}\nPhone: {user_contact}")
        self.mail.send(msg)

    def get_reminders(self):
        return [
            (41, "HEP B Vaccine - Dose 2\nOPV Vaccine - Dose 2\nDPT Vaccine - Dose 1"),
            (44, "IPV Vaccine - Dose 1\nPNEUMOCOCCAL Vaccine - Dose 1"),
            (59, "ROTAVIRUS Vaccine - Dose 1"),
            (69, "OPV Vaccine - Dose 3\nDPT Vaccine - Dose 2"),
            (75, "IPV Vaccine - Dose 2\nPNEUMOCOCCAL Vaccine - Dose 2"),
            (97, "OPV Vaccine - Dose 4\nDPT Vaccine - Dose 3"),
            (106, "IPV Vaccine - Dose 3\nPNEUMOCOCCAL Vaccine - Dose 3"),
            (119, "HIB Vaccine - Dose 1"),
            (144, "ROTAVIRUS Vaccine - Dose 2"),
            (154, "OPV Vaccine - Dose 5")
        ]

