# Documento de Arquitectura - GeoNorm API

*Última actualización: 2025-08-10*

## 1. Visión del Producto

GeoNorm API es un producto de Datos como Servicio (DaaS) que proporciona una solución para la estandarización, validación y enriquecimiento de direcciones postales a través de una API RESTful. El objetivo es ofrecer datos de alta calidad y confianza para mercados verticales como E-commerce, Fintech y Marketing.

---

## 2. Principios de Arquitectura

Las siguientes son las filosofías que guían nuestras decisiones técnicas:

* **Serverless-First:** Priorizamos el uso de servicios gestionados y computación sin servidor (AWS Lambda) para minimizar la gestión operativa.
* **API-First:** El contrato de la API (OpenAPI) se diseña antes que la implementación, sirviendo como la única fuente de verdad.
* **Seguridad desde el Diseño:** Las consideraciones de seguridad se integran en cada fase, no se añaden al final.
* **Automatización Completa (CI/CD):** Los despliegues y pruebas se automatizan para garantizar la fiabilidad y velocidad.
* **Bajo Mantenimiento Operativo:** El sistema debe ser resiliente y requerir una mínima intervención una vez desplegado.

---

## 3. Modelo C4 - Nivel 1: Diagrama de Contexto

Este diagrama muestra cómo GeoNorm API interactúa con sus usuarios y otros sistemas.

* **Usuario Principal:** Un **Cliente de la API** (desarrollador) que consume el servicio.
* **Sistema:** El **Sistema GeoNorm API**, construido en AWS.
* **Sistemas Externos:**
  * **Stripe:** Para la gestión de suscripciones y claves de API.
  * **Proveedor de Datos Externos:** Fuentes de datos geográficos (ej. OpenStreetMap, datos gubernamentales) para la validación y enriquecimiento.
  * **AWS:** La plataforma en la nube donde reside todo el sistema.

---

## 4. Modelo C4 - Nivel 2: Diagrama de Contenedores

El "Sistema GeoNorm API" se compone de los siguientes bloques tecnológicos principales:

* **API Gateway:** La puerta de entrada pública que gestiona las peticiones, la autenticación y el throttling.
* **Función Lambda (Core):** El cerebro del sistema, escrito en Python con FastAPI. Contiene toda la lógica de negocio.
* **Base de Datos Geoespacial (PostgreSQL/PostGIS):** Almacén principal para datos de referencia geográficos complejos (mapas, límites, etc.).
* **Caché de Reglas (Redis):** Almacén de clave-valor para acceso de ultra baja latencia a reglas de estandarización (ej. `cll` -> `Calle`).

---

## 5. Pila Tecnológica (Tech Stack)

* **Computación:** AWS Lambda
* **Framework de API:** Python con FastAPI
* **Infraestructura como Código (IaC):** AWS SAM
* **Base de Datos Primaria:** PostgreSQL (gestionado)
* **Caché:** Redis (gestionado)
* **API Gateway:** Amazon API Gateway
* **Autenticación/Pagos:** Stripe
