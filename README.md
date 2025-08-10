# GeoNorm

GeoNorm es un API  de tipo "Datos como Servicio" (DaaS) diseñada para resolver el costoso problema de los datos de dirección inconsistentes y de baja calidad en Latinoamérica. Mediante un motor de reglas y validación hiperlocalizado, GeoNorm transforma direcciones caóticas en datos estructurados, precisos y fiables. El modelo de negocio se basa en una suscripción de bajo contacto.

## Work flow

-Para desarrollar y probar tu API (90% del tiempo):

    Usa uvicorn src.api.app:app --reload.

    Es más rápido y te da acceso a tu documentación.

    Envía tus peticiones de Postman a http://127.0.0.1:8000/v1/normalize.

-Para una prueba de integración final antes de desplegar:

    Usa sam local start-api.

    Esto te permite verificar que tu aplicación funciona correctamente dentro del contexto de simulación de Lambda, aunque no puedas ver los docs.

-Para testear: ejecutar pytest en el directorio root

-Para construir el paquete de despliegue: sam build --use-container

-Para desplegar: sam deploy
