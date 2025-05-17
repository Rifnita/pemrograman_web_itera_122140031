from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Matakuliah(Base):
    __tablename__ = 'matakuliah'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(String(10), unique=True)
    nama_mk = Column(String(100))
    sks = Column(Integer)
    semester = Column(Integer)
