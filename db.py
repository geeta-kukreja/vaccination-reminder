import sqlite3
from typing import List, Dict, Optional, Any

class Database:
    def __init__(self, path: str):
        self.path = path
        self.conn: Optional[sqlite3.Connection] = None

    def connect(self) -> None:
        if self.conn is None:
            self.conn = sqlite3.connect(self.path)

    def select(self, sql: str, parameters: Optional[List[Any]] = None) -> List[Dict[str, Any]]:
        self.connect()
        with self.conn:
            c = self.conn.cursor()
            c.execute(sql, parameters or [])
            rows = c.fetchall()
            columns = [column[0] for column in c.description]
            return [dict(zip(columns, row)) for row in rows]

    def execute(self, sql: str, parameters: Optional[List[Any]] = None) -> None:
        self.connect()
        with self.conn:
            c = self.conn.cursor()
            c.execute(sql, parameters or [])
            self.conn.commit()

    def close(self) -> None:
        if self.conn is not None:
            self.conn.close()
            self.conn = None

