from fastapi import FastAPI, APIRouter
from mangum import Mangum
from aws_lambda_powertools import Logger

from src.api.models import AddressRequest, NormalizedStringResponse

logger = Logger()


app = FastAPI(
    title="GeoNorm API",
    docs_url="/docs", 
    redoc_url="/redoc"
)

router_v1 = APIRouter(prefix="/v1")

@router_v1.post('/normalize',
          response_model=NormalizedStringResponse,
          tags=["Endpoints de Procesamiento de Direcciones"]
        )
def get_normalized_string(request: AddressRequest):
        logger.info(f"Request v1 recibido para normalizar: {request.address_string}")
        return { "normalizedString": f"Formatted: {request.address_string}" }

app.include_router(router_v1)

handler = Mangum(app)
handler = logger.inject_lambda_context(handler, log_event=True)

