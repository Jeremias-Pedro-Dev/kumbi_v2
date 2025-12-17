from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.motorista import Motorista
from auth.security import hash_senha, verificar_senha
from auth.jwt import criar_token

router = APIRouter(prefix="/motorista")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(nome: str, email: str, senha: str, db: Session = Depends(get_db)):
    motorista = Motorista(nome=nome, email=email, senha=hash_senha(senha))
    db.add(motorista)
    db.commit()
    return {"msg": "Motorista criado"}

@router.post("/login")
def login(email: str, senha: str, db: Session = Depends(get_db)):
    motorista = db.query(Motorista).filter(Motorista.email == email).first()
    if not motorista or not verificar_senha(senha, motorista.senha):
        raise HTTPException(status_code=401)
    return {"token": criar_token({"sub": motorista.email, "tipo": "motorista"})}
