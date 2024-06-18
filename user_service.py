from typing import Any, Dict, Optional
from passlib.hash import pbkdf2_sha256
from random import randint
from user_repository import UserRepository

class UserService:
    def __init__(self, user_repository: UserRepository, email_service_factory, app):
        self.user_repository = user_repository
        self.email_service_factory = email_service_factory
        self.app = app

    def generate_otp(self) -> str:
        return str(randint(100000, 999999))

    def register_user(self, name: str, email: str, password: str, contact: str, birthdate: str) -> str:
        encrypted_password = pbkdf2_sha256.hash(password)
        self.user_repository.update_signup(name, email, encrypted_password, contact, birthdate)
        otp = self.generate_otp()
        self.user_repository.update_otp(otp, email)
        return encrypted_password

    def send_otp(self, email: str) -> bool:
        email_service = self.email_service_factory.create_email_service(self.app, self.user_repository.db)
        otp = self.generate_otp()
        self.user_repository.update_otp(otp, email)
        email_service.send_otp_email(email, otp)
        return True

    def verify_user(self, email: str, otp: str) -> bool:
        stored_otp = self.user_repository.get_otp(email)
        if str(stored_otp) == otp:
            self.user_repository.update_verify(email)
            return True
        return False

    def update_password(self, email: str, password: str) -> str:
        encrypted_password = pbkdf2_sha256.hash(password)
        self.user_repository.update_password(email, encrypted_password)
        return encrypted_password

    def authenticate_user(self, email: str, typed_password: str) -> Optional[Dict[str, Any]]:
        user = self.user_repository.get_user(email)
        if user and pbkdf2_sha256.verify(typed_password, user['password']):
            return user
        return None

    def submit_question(self, email: str, question: str) -> bool:
        user = self.user_repository.get_user(email)
        if user:
            self.user_repository.update_ask_tbl(email, user['contact'], question)
            email_service = self.email_service_factory.create_email_service(self.app, self.user_repository.db)
            email_service.send_question_email(email, user['name'], user['contact'], question)
            return True
        return False
