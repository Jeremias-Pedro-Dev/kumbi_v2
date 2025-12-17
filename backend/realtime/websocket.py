from fastapi import WebSocket, WebSocketDisconnect
from typing import List

class GerenciadorConexoes:
    def __init__(self):
        self.conexoes: List[WebSocket] = []

    async def conectar(self, websocket: WebSocket):
        await websocket.accept()
        self.conexoes.append(websocket)

    def desconectar(self, websocket: WebSocket):
        self.conexoes.remove(websocket)

    async def enviar_para_todos(self, mensagem: dict):
        for conexao in self.conexoes:
            await conexao.send_json(mensagem)

gerenciador = GerenciadorConexoes()
