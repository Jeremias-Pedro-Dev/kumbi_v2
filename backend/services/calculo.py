def calcular_valor(distancia_km: float):
    preco_base = 500   # Kz
    preco_km = 200     # Kz
    return preco_base + (distancia_km * preco_km)
