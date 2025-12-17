from sqlalchemy import Column, Integer, String, Boolean, DateTime
from database import Base
from datetime import datetime

class Motorista(Base):
    __tablename__ = "motorista"

    id = Column(Integer, primary_key=True)
    nome = Column(String(100))
    email = Column(String(100), unique=True)
    senha = Column(String(255))
    online = Column(Boolean, default=False)
    criado_em = Column(DateTime, default=datetime.utcnow)
