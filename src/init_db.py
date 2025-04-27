import sqlite3

conn = sqlite3.connect('accounts.db')
cur = conn.cursor()

table = """ CREATE TABLE IF NOT EXISTS account (
            user_name   TEXT    PRIMARY KEY,
            password    TEXT,
            age         TEXT
        );
        """

cur.execute(table)

cur.close()
conn.close()