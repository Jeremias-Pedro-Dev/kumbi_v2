from datetime import datetime, timedelta
from jose import jwt

SECRET_KEY = "KUMBI_SUPER_SECRETA"
ALGORITHM = "HS256"
EXPIRA_MIN = 60

def criar_token(dados: dict):
    dados = dados.copy()
    expire = datetime.utcnow() + timedelta(minutes=EXPIRA_MIN)
    dados.update({"exp": expire})
    return jwt.encode(dados, SECRET_KEY, algorithm=ALGORITHM)
