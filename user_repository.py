from db import Database
from typing import List, Dict, Optional, Any

class UserRepository:
    def __init__(self, db: Database):
        self.db = db

    def update_contact(self, name: str, email: str, message: str) -> None:
        self.db.execute("INSERT INTO contact_tbl(name, email, message) VALUES (?, ?, ?)", [name, email, message])

    def update_signup(self, name: str, email: str, password: str, contact: str, birthdate: str) -> None:
        self.db.execute(
            "INSERT INTO registration_tbl(name, email, password, contact, birthdate, gender, otp) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [name, email, password, contact, birthdate, 'N/A', '000000']
        )


    def get_users(self) -> List[Dict[str, Any]]:
        return self.db.select("SELECT * FROM registration_tbl WHERE isverify=1")

    

    def update_otp(self, otp: str, email: str) -> None:
        self.db.execute('UPDATE registration_tbl SET otp=? WHERE email=?', [otp, email])

    def update_ask_tbl(self, email: str, contact: str, question: str) -> None:
        self.db.execute("INSERT INTO ask_question_tbl(email, contact, message) VALUES (?, ?, ?)", [email, contact, question])

    def update_name(self, name: str, email: str) -> None:
        self.db.execute("UPDATE registration_tbl SET name=? WHERE email=?", [name, email])

    def update_dob(self, dob: str, email: str) -> None:
        self.db.execute("UPDATE registration_tbl SET birthdate=? WHERE email=?", [dob, email])

    def update_phone(self, phone: str, email: str) -> None:
        self.db.execute("UPDATE registration_tbl SET contact=? WHERE email=?", [phone, email])

    def update_password(self, email: str, password: str) -> None:
        self.db.execute("UPDATE registration_tbl SET password=? WHERE email=?", [password, email])

    def update_verify(self, email: str) -> None:
        self.db.execute("UPDATE registration_tbl SET isverify=? WHERE email=?", [1, email])

    def get_otp(self, email: str) -> Optional[str]:
        data = self.db.select('SELECT otp FROM registration_tbl WHERE email=?', [email])
        return data[0]['otp'] if data else None

    def get_user(self, email: str) -> Optional[Dict[str, Any]]:
        data = self.db.select("SELECT * FROM registration_tbl WHERE email=?", [email])
        return data[0] if data else None
