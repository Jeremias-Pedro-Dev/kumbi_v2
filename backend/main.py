from fastapi import FastAPI
from database import Base, engine
from routes import admin
from routes import dashboard, localizacao

Base.metadata.create_all(bind=engine)

app = FastAPI(title="KUMBI BACKEND")

app.include_router(admin.router)
app.include_router(dashboard.router)
app.include_router(localizacao.router)
app.include_router(cliente.router)
app.include_router(motorista.router)
app.include_router(pagamento.router)

