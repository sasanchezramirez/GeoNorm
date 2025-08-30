
### **Prompt para la Generación del Frontend de GeoNorm API**

**Rol y Objetivo:**

Actúa como un desarrollador de software Full-Stack experto, especializado en la creación de interfaces de usuario (UI) y experiencias de usuario (UX) para productos de Datos como Servicio (DaaS) y plataformas para desarrolladores. Tu objetivo es crear el código completo para la página web de marketing y el portal de usuario del producto "GeoNorm API".

El sitio web debe ser profesional, moderno, rápido y centrado en la conversión de desarrolladores visitantes en usuarios registrados.

**Contexto del Proyecto:**

* **Producto:** GeoNorm API, una API RESTful para la estandarización, validación y enriquecimiento de direcciones postales, comenzando con soporte para Colombia.
* **Público Objetivo:** Desarrolladores y equipos técnicos en sectores como E-commerce, Fintech, y Marketing.
* **Puntos Clave de Venta:** Alta precisión, baja latencia, arquitectura escalable (serverless), facilidad de integración y seguridad desde el diseño.
* **Modelo de Negocio:** Basado en suscripciones con un nivel gratuito para desarrolladores. La gestión de pagos y suscripciones se delega completamente en Stripe.

**Stack Tecnológico del Frontend:**

* **Framework:** Next.js (usando App Router)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS
* **Componentes UI:** Utiliza Shadcn/UI para componentes base como botones, inputs, cards, etc., para asegurar la accesibilidad y un diseño consistente.
* **Autenticación:** Utiliza NextAuth.js o Clerk para gestionar el flujo de registro e inicio de sesión.
* **Librería de Peticiones HTTP:** `axios` o `fetch` nativo.

**Estructura del Sitio Web y Requisitos por Página:**

Debes generar el código para las siguientes páginas, organizadas en una estructura de archivos lógica de Next.js (`app/page.tsx`, `app/pricing/page.tsx`, etc.).

**1. Página de Inicio (`/`) - Landing Page:**

* **Hero Section:**
    * Título llamativo: "La API de Direcciones que tus Aplicaciones Necesitan".
    * Subtítulo: "Estandariza, valida y enriquece direcciones postales en Colombia con una API simple, rápida y confiable."
    * Llamada a la Acción (CTA) principal: Un botón grande que diga "Obtén tu API Key Gratis".
    * Debajo del botón, un texto pequeño: "No se requiere tarjeta de crédito".
* **Componente Interactivo de Demostración:**
    * Un área destacada con dos paneles.
    * **Panel Izquierdo:** Un campo de texto (`<input>`) donde el usuario puede escribir una dirección. Debe tener un placeholder con el ejemplo del `openapi.yaml`: `"carrera 4 # 10-20, apto 301, Bogota"`.
    * **Panel Derecho:** Un bloque de código (`<pre><code>`) que mostrará la respuesta JSON del endpoint `/validate-full`. Inicialmente, debe mostrar una respuesta de ejemplo. Cuando el usuario escriba en el input y presione un botón "Normalizar", debe simular una llamada a la API y mostrar el resultado formateado y con resaltado de sintaxis.
* **Sección de Características ("¿Por qué GeoNorm?"):**
    * Usa un layout de cards para destacar 4 características clave, basadas en los endpoints de la API:
        1.  **Normalización Simple:** (Endpoint `/normalize`) "Convierte direcciones caóticas en un formato estándar y limpio."
        2.  **Puntaje de Confianza:** (Endpoint `/confidence`) "Obtén un puntaje de confianza para cada dirección y toma decisiones informadas."
        3.  **Geolocalización Precisa:** (Endpoint `/geolocate`) "Enriquece tus datos con coordenadas de latitud y longitud exactas."
        4.  **Validación Completa:** (Endpoint `/validate-full`) "Accede a un objeto de datos completo con todos los detalles de la dirección."
* **Sección de Casos de Uso:**
    * Un carrusel o una sección de pestañas para "E-commerce", "Fintech" y "Marketing", explicando brevemente el beneficio para cada sector.
* **Sección de "Cómo Empezar" (3 Pasos):**
    1.  **Crea tu Cuenta:** Regístrate en menos de un minuto.
    2.  **Obtén tu API Key:** Copia tu clave desde el dashboard de desarrollador.
    3.  **Haz tu Primera Llamada:** Integra la API con nuestros ejemplos de código listos para usar.
* **Sección de Stack Tecnológico (Construido para Escalar):**
    * Menciona las tecnologías clave de la arquitectura (`AWS Lambda`, `FastAPI`, `PostgreSQL`, `Redis`) para generar confianza técnica.
* **Footer:**
    * Enlaces a "Precios", "Documentación", "Contacto", "Términos de Servicio", "Política de Privacidad".

**2. Página de Precios (`/pricing`):**

* Debe mostrar un layout de 3 columnas para los planes de suscripción:
    * **Developer (Gratis):** 500 peticiones/mes, Acceso a todos los endpoints, Soporte comunitario. Botón CTA: "Empezar Gratis".
    * **Startup (Pago):** 10,000 peticiones/mes, Soporte por email. Botón CTA: "Elegir Plan".
    * **Enterprise (Contacto):** Peticiones personalizadas, Soporte prioritario, SLA. Botón CTA: "Contactar a Ventas".
* Cada plan debe enlazar a un flujo de registro que eventualmente redirigirá a Stripe para los planes de pago.

**3. Página de Documentación (`/docs`):**

* Esta es la página más importante para los desarrolladores. Usa un layout de dos columnas: barra lateral de navegación a la izquierda y contenido a la derecha.
* **Sección de "Autenticación":**
    * Explica claramente que la autenticación se realiza mediante una API Key.
    * Muestra cómo pasar la clave en el header, como se define en `securitySchemes` del `openapi.yaml`: `X-API-Key`.
* **Sección de "Endpoints":**
    * Crea una sección para cada endpoint: `/normalize`, `/confidence`, `/geolocate`, `/validate-full`.
    * Para cada endpoint, muestra:
        * El método HTTP (`POST`) y la ruta.
        * La descripción del endpoint (tomada del campo `summary` o `description`).
        * Un ejemplo del cuerpo de la petición (`Request Body`) usando el `AddressRequest` schema.
        * Un ejemplo de la respuesta exitosa (`200 OK`) usando los schemas de respuesta correspondientes (`NormalizedStringResponse`, `FullValidationResponse`, etc.).
* **Ejemplos de Código:**
    * Provee fragmentos de código listos para copiar y pegar en `cURL`, `Python (requests)`, y `JavaScript (fetch)`.

**4. Flujo de Autenticación y Dashboard de Usuario:**

* **Registro (`/sign-up`):** Página simple con campos para email y contraseña.
* **Inicio de Sesión (`/login`):** Página simple con campos para email y contraseña.
* **Dashboard (`/dashboard`):**
    * Esta es la página principal para un usuario que ha iniciado sesión.
    * **Sección de API Keys:**
        * Debe mostrar la API Key del usuario (inicialmente oculta, con un botón para revelarla y copiarla).
        * Debe haber un botón para "Regenerar API Key" (con una advertencia de confirmación).
    * **Sección de Uso de la API:**
        * Muestra un resumen simple: "Has utilizado X de Y peticiones este mes".
    * **Sección de Facturación:**
        * Un botón que diga "Gestionar Suscripción" que redirija al portal de cliente de Stripe.

**Instrucciones de Salida:**

* Genera el código completo para cada archivo, incluyendo `app/layout.tsx`, `tailwind.config.ts`, y la estructura de componentes (`components/ui`, `components/shared`).
* Usa comentarios en el código para explicar las partes complejas.
* Asegúrate de que el código sea limpio, legible y siga las mejores prácticas de React y Next.js.
* Comienza generando el archivo `package.json` con todas las dependencias necesarias (`next`, `react`, `tailwindcss`, `shadcn-ui`, `next-auth`, `axios`, etc.).