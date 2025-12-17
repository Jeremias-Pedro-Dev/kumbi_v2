from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class Cliente(Base):
    __tablename__ = "cliente"

    id = Column(Integer, primary_key=True)
    nome = Column(String(100))
    email = Column(String(100), unique=True)
    senha = Column(String(255))
    criado_em = Column(DateTime, default=datetime.utcnow)
