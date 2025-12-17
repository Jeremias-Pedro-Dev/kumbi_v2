from sqlalchemy import Column, Integer, Float, String
from database import Base

class Corrida(Base):
    __tablename__ = "corrida"

    id = Column(Integer, primary_key=True)
    cliente_id = Column(Integer)
    motorista_id = Column(Integer, nullable=True)
    origem_lat = Column(Float)
    origem_lng = Column(Float)
    destino_lat = Column(Float)
    destino_lng = Column(Float)
    status = Column(String(30))
