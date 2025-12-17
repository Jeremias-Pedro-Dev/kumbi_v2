from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from realtime.websocket import gerenciador
from database import SessionLocal
from models.localizacao import Localizacao

router = APIRouter()

@router.websocket("/ws/localizacao")
async def websocket_localizacao(websocket: WebSocket):
    await gerenciador.conectar(websocket)
    db = SessionLocal()

    try:
        while True:
            dados = await websocket.receive_json()

            local = Localizacao(
                latitude=dados["latitude"],
                longitude=dados["longitude"]
            )
            db.add(local)
            db.commit()

            await gerenciador.enviar_para_todos(dados)

    except WebSocketDisconnect:
        gerenciador.desconectar(websocket)
        db.close()
