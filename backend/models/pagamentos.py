from sqlalchemy import Column, Integer, Numeric, String
from database import Base

class Pagamento(Base):
    __tablename__ = "pagamento"

    id = Column(Integer, primary_key=True)
    corrida_id = Column(Integer)
    valor = Column(Numeric(10, 2))
    metodo = Column(String(30))
    status = Column(String(30))
