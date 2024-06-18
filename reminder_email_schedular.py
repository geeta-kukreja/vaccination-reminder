from apscheduler.schedulers.background import BackgroundScheduler
from email_service import EmailService
from email_factory import EmailServiceFactory
from db import Database
from flask import Flask
import os

DATABASE_PATH = os.getenv('DATABASE_PATH')

def create_app():
    app = Flask(__name__)
    app.config["MAIL_SERVER"] = os.getenv('MAIL_SERVER')
    app.config["MAIL_PORT"] = os.getenv('MAIL_PORT')
    app.config["MAIL_USERNAME"] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS').lower() in ['true', '1', 't']
    app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL').lower() in ['true', '1', 't']
    return app

def start_scheduler():
    app = create_app()
    
    with app.app_context():
        db = Database(DATABASE_PATH)
        email_service_factory = EmailServiceFactory()
        email_service = email_service_factory.create_email_service(app, db)
        
        scheduler = BackgroundScheduler()
        scheduler.add_job(email_service.send_reminder_email, 'cron', hour=6, minute=0)
        scheduler.start()

if __name__ == '__main__':
    start_scheduler()
