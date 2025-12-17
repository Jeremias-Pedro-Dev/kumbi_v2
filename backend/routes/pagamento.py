from fastapi import APIRouter
from database import SessionLocal
from models.pagamento import Pagamento
from services.calculo import calcular_valor
from realtime.websocket import gerenciador

router = APIRouter(prefix="/pagamento")

@router.post("/criar")
def criar_pagamento(corrida_id: int, distancia_km: float):
    db = SessionLocal()

    valor = calcular_valor(distancia_km)

    pagamento = Pagamento(
        corrida_id=corrida_id,
        valor=valor,
        metodo="simulado",
        status="pendente"
    )

    db.add(pagamento)
    db.commit()

    # tempo real
    import asyncio
    asyncio.create_task(
        gerenciador.enviar_para_todos({
            "tipo": "pagamento_criado",
            "corrida_id": corrida_id,
            "valor": float(valor)
        })
    )

    return {"valor": valor}

@router.post("/pagar")
def pagar(pagamento_id: int):
    db = SessionLocal()
    pagamento = db.query(Pagamento).get(pagamento_id)
    pagamento.status = "pago"
    db.commit()

    import asyncio
    asyncio.create_task(
        gerenciador.enviar_para_todos({
            "tipo": "pagamento_confirmado",
            "pagamento_id": pagamento_id
        })
    )

    return {"msg": "Pagamento confirmado"}
