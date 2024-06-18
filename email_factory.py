from flask_mail import Mail
from email_service import EmailService

class EmailServiceFactory:
    @staticmethod
    def create_email_service(app, db):
        mail = Mail(app)
        return EmailService(app, db, mail)