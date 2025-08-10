from fastapi.testclient import TestClient
from src.api.app import app

# Creamos un cliente de prueba que habla con nuestra app
client = TestClient(app)

def test_normalize_endpoint_success():
    """
    Prueba el "camino feliz" del endpoint /normalize.
    Verifica que devuelve un código 200 y que la respuesta tiene la estructura correcta.
    """
    # 1. Arrange: Preparamos los datos de la petición
    request_data = {
        "address_string": "carrera 4 # 10-20"
    }

    # 2. Act: Hacemos la petición a la API (en memoria)
    response = client.post("/v1/normalize", json=request_data)

    # 3. Assert: Verificamos el resultado
    assert response.status_code == 200
    response_json = response.json()
    assert "normalizedString" in response_json
    assert response_json["normalizedString"] == "Formatted: carrera 4 # 10-20"

def test_normalize_endpoint_missing_data():
    """
    Prueba el "camino triste".
    Verifica que la API responde con un error si los datos son incorrectos.
    """
    # 1. Arrange: Datos inválidos (un campo con el nombre incorrecto)
    request_data = {
        "bad_address_field": "carrera 4 # 10-20"
    }

    # 2. Act: Hacemos la petición
    response = client.post("/v1/normalize", json=request_data)

    # 3. Assert: FastAPI debería devolver automáticamente un error 422
    assert response.status_code == 422