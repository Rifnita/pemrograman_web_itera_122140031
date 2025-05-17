import sqlite3

# Hubungkan ke file database
conn = sqlite3.connect('matakuliah.db')
cursor = conn.cursor()

# Tampilkan daftar tabel
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Daftar tabel:", tables)

# Kalau tabel 'matakuliah' ada, cek datanya
if ('matakuliah',) in tables:
    cursor.execute("SELECT * FROM matakuliah")
    rows = cursor.fetchall()
    print("Isi tabel matakuliah:")
    for row in rows:
        print(row)

conn.close()
