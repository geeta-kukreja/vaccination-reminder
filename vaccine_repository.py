from db import Database
from typing import List, Dict, Optional, Any
from datetime import date, datetime, timedelta

class VaccineRepository:
    def __init__(self, db: Database):
        self.db = db
        
    def create_vaccine_schedule(self, email: str, contact: str) -> None:
        self.db.execute("INSERT INTO vaccine_schedule_tbl(email, contact) VALUES (?, ?)", [email, contact])

    def update_vaccine_status(self, vaccine: str, status: str, email: str) -> None:
        self.db.execute(f"UPDATE vaccine_schedule_tbl SET {vaccine}=? WHERE email=?", [status, email])

    def get_vaccine_dates(self, date_format: str, birthdate: str) -> List[str]:
        date_of_birth = datetime.strptime(birthdate, "%d/%m/%Y")
        reminders = self.get_reminders()
        vaccine_dates = [datetime.strftime(date_of_birth + timedelta(days=day), date_format) for day, _ in reminders]
        return vaccine_dates
    
    def get_vaccines_status(self, email: str) -> Optional[Dict[str, str]]:
        data = self.db.select("SELECT * FROM vaccine_schedule_tbl WHERE email=?", [email])
        if data:
            vaccines = data[0]
            return {key: vaccines[key] for key in vaccines if key not in ['email', 'contact']}
        return None

    def get_reminders(self) -> List[tuple]:
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
