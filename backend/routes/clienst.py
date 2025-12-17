from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.cliente import Cliente
from auth.security import hash_senha, verificar_senha
from auth.jwt import criar_token

router = APIRouter(prefix="/cliente")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(nome: str, email: str, senha: str, db: Session = Depends(get_db)):
    cliente = Cliente(nome=nome, email=email, senha=hash_senha(senha))
    db.add(cliente)
    db.commit()
    return {"msg": "Cliente criado"}

@router.post("/login")
def login(email: str, senha: str, db: Session = Depends(get_db)):
    cliente = db.query(Cliente).filter(Cliente.email == email).first()
    if not cliente or not verificar_senha(senha, cliente.senha):
        raise HTTPException(status_code=401)
    return {"token": criar_token({"sub": cliente.email, "tipo": "cliente"})}
