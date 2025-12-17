from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.admin import Admin
from auth.security import hash_senha, verificar_senha
from auth.jwt import criar_token

router = APIRouter(prefix="/admin")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(empresa_nome: str, email: str, senha: str, db: Session = Depends(get_db)):
    admin = Admin(
        empresa_nome=empresa_nome,
        email=email,
        senha=hash_senha(senha)
    )
    db.add(admin)
    db.commit()
    return {"msg": "Empresa cadastrada com sucesso"}

@router.post("/login")
def login(email: str, senha: str, db: Session = Depends(get_db)):
    admin = db.query(Admin).filter(Admin.email == email).first()

    if not admin or not verificar_senha(senha, admin.senha):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    token = criar_token({"sub": admin.email})
    return {"access_token": token}
