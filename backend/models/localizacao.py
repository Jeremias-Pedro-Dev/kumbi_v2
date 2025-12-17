from sqlalchemy import Column, Integer, Float, DateTime
from database import Base
from datetime import datetime

class Localizacao(Base):
    __tablename__ = "localizacao"

    id = Column(Integer, primary_key=True)
    latitude = Column(Float)
    longitude = Column(Float)
    atualizado_em = Column(DateTime, default=datetime.utcnow)
