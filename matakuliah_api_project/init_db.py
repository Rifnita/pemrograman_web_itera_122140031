from sqlalchemy import create_engine
from matakuliah_api.models import Base

engine = create_engine('sqlite:///matakuliah.db')
Base.metadata.create_all(engine)

print("✅ Database berhasil dibuat: matakuliah.db")
