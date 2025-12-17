from fastapi import APIRouter, Depends
from auth.dependencias import verificar_token
from sqlalchemy.orm import Session
from database import SessionLocal
from models.localizacao import Localizacao

router = APIRouter(prefix="/dashboard")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/localizacoes")
def obter_localizacoes(
    db: Session = Depends(get_db),
    token=Depends(verificar_token)
):
    return db.query(Localizacao).all()

@router.get("/resumo")
def resumo_pagamentos():
    return {
        "total": db.query(Pagamento).count(),
        "pagos": db.query(Pagamento).filter_by(status="pago").count()
    }
