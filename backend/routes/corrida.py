from fastapi import APIRouter, Depends
from database import SessionLocal
from models.corrida import Corrida

router = APIRouter(prefix="/corrida")

@router.post("/criar")
def criar_corrida(cliente_id: int, origem_lat: float, origem_lng: float,
                  destino_lat: float, destino_lng: float):
    db = SessionLocal()
    corrida = Corrida(
        cliente_id=cliente_id,
        origem_lat=origem_lat,
        origem_lng=origem_lng,
        destino_lat=destino_lat,
        destino_lng=destino_lng,
        status="pendente"
    )
    db.add(corrida)
    db.commit()
    return {"msg": "Corrida criada"}

@router.post("/aceitar")
def aceitar_corrida(corrida_id: int, motorista_id: int):
    db = SessionLocal()
    corrida = db.query(Corrida).get(corrida_id)
    corrida.motorista_id = motorista_id
    corrida.status = "em_andamento"
    db.commit()
    return {"msg": "Corrida aceite"}

@router.post("/finalizar")
def finalizar_corrida(corrida_id: int):
    db = SessionLocal()
    corrida = db.query(Corrida).get(corrida_id)
    corrida.status = "finalizada"
    db.commit()
    return {"msg": "Corrida finalizada"}

await gerenciador.enviar_para_todos({
    "tipo": "nova_corrida",
    "dados": corrida.id
})

@router.get("/resumo")
def resumo():
    return {
        "motoristas": db.query(Motorista).count(),
        "corridas": db.query(Corrida).count()
    }

