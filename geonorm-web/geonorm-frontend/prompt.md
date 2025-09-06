Prompt para la Generación del Frontend de GeoNorm API con Angular
Rol y Objetivo:

Actúa como un desarrollador de software Full-Stack experto, especializado en la creación de Single-Page Applications (SPAs) robustas y escalables con Angular. Tu objetivo es crear el código completo para la página web de marketing y el portal de usuario del producto "GeoNorm API".

El sitio web debe ser profesional, moderno, rápido y centrado en la conversión de desarrolladores visitantes en usuarios registrados, siguiendo las mejores prácticas y patrones de diseño de Angular.

Contexto del Proyecto:

Producto: GeoNorm API, una API RESTful para la estandarización, validación y enriquecimiento de direcciones postales, comenzando con soporte para Colombia.

Público Objetivo: Desarrolladores y equipos técnicos en sectores como E-commerce, Fintech, y Marketing.

Puntos Clave de Venta: Alta precisión, baja latencia, arquitectura escalable (serverless), facilidad de integración y seguridad desde el diseño.

Modelo de Negocio: Basado en suscripciones con un nivel gratuito para desarrolladores. La gestión de pagos y suscripciones se delega completamente en Stripe.

Stack Tecnológico del Frontend:

Framework: Angular (última versión estable, usando Signals).

Lenguaje: TypeScript.

Estilos: Tailwind CSS, configurado para funcionar con Angular.

Componentes UI: Utiliza Angular Material para componentes base como botones, inputs, cards, menús, etc., para asegurar la accesibilidad y un diseño consistente.

Gestión de Estado (Opcional): Para el estado simple, utiliza servicios de Angular con Signals. Si se requiere algo más complejo, considera NgRx.

Autenticación: Implementa un flujo de autenticación basado en JWT. Crea un AuthService y un HttpInterceptor para adjuntar automáticamente el token a las peticiones salientes.

Peticiones HTTP: Usa el HttpClientModule nativo de Angular.

Estructura del Proyecto Angular:

Debes generar el código organizado en una estructura modular y escalable.

app-routing.module.ts: Definirá todas las rutas principales.

core/: Contendrá servicios singleton (AuthService), interceptores y guardias de ruta (AuthGuard).

shared/: Contendrá componentes, pipes y directivas reutilizables.

Módulos por Funcionalidad (Feature Modules):

home/: Para la landing page.

pricing/: Para la página de precios.

docs/: Para la documentación.

dashboard/: Para el portal de usuario (protegido por un AuthGuard).

Requisitos Detallados por Componente/Página:
1. Página de Inicio (HomePageComponent):

Hero Section:

Título llamativo: "La API de Direcciones que tus Aplicaciones Necesitan".

Subtítulo: "Estandariza, valida y enriquece direcciones postales en Colombia con una API simple, rápida y confiable."

Llamada a la Acción (CTA) principal: Un botón de Angular Material (mat-raised-button) que diga "Obtén tu API Key Gratis".

Debajo del botón, un texto pequeño: "No se requiere tarjeta de crédito".

Componente Interactivo de Demostración (DemoComponent):

Un área destacada con dos paneles.

Panel Izquierdo: Un campo de texto de Angular Material (mat-form-field) donde el usuario puede escribir una dirección. Usa [(ngModel)] o FormControl para el binding. Debe tener un placeholder con el ejemplo del openapi.yaml: "carrera 4 # 10-20, apto 301, Bogota".

Panel Derecho: Un bloque de código (<pre><code>) que mostrará la respuesta JSON del endpoint /validate-full. Al hacer clic en un botón "Normalizar", debe simular una llamada a la API y mostrar el resultado formateado.

Sección de Características ("¿Por qué GeoNorm?"):

Usa un layout de mat-card para destacar 4 características clave, basadas en los endpoints de la API:

Normalización Simple: (Endpoint /normalize) "Convierte direcciones caóticas en un formato estándar y limpio."

Puntaje de Confianza: (Endpoint /confidence) "Obtén un puntaje de confianza para cada dirección."

Geolocalización Precisa: (Endpoint /geolocate) "Enriquece tus datos con coordenadas exactas."

Validación Completa: (Endpoint /validate-full) "Accede a un objeto de datos completo."

Footer (FooterComponent):

Enlaces (usando routerLink) a "Precios", "Documentación", "Contacto", etc.

2. Página de Precios (PricingPageComponent):

Debe mostrar un layout de 3 mat-card para los planes de suscripción:

Developer (Gratis): 500 peticiones/mes, Acceso a todos los endpoints, Soporte comunitario. Botón CTA: "Empezar Gratis".

Startup (Pago): 10,000 peticiones/mes, Soporte por email. Botón CTA: "Elegir Plan".

Enterprise (Contacto): Peticiones personalizadas, Soporte prioritario, SLA. Botón CTA: "Contactar a Ventas".

Cada botón debe navegar (router.navigate) al flujo de registro.

3. Página de Documentación (DocsPageComponent):

Usa un componente de mat-sidenav de Angular Material para el layout de dos columnas.

Sección de "Autenticación":

Explica claramente cómo pasar la API Key en el header X-API-Key.

Sección de "Endpoints":

Crea una sección para cada endpoint: /normalize, /confidence, /geolocate, /validate-full.

Para cada uno, muestra el método HTTP, la ruta, la descripción y ejemplos de la petición y la respuesta.

Ejemplos de Código:

Provee fragmentos de código listos para copiar y pegar en cURL, Python (requests), y TypeScript (Angular HttpClient).

4. Flujo de Autenticación y Dashboard (DashboardModule):

LoginComponent y RegisterComponent:

Formularios reactivos (ReactiveForms) con validadores para email y contraseña.

Al tener éxito, el AuthService guarda el JWT en localStorage y redirige al dashboard.

DashboardComponent (protegido por AuthGuard):

Sección de API Keys:

Llama a un servicio (ApiService) para obtener la clave del usuario.

Usa *ngIf para mostrar/ocultar la clave.

Usa el ClipboardModule de Angular CDK para el botón de "Copiar".

Sección de Uso de la API:

Muestra un resumen simple: "Has utilizado X de Y peticiones este mes".

Sección de Facturación:

Un botón que diga "Gestionar Suscripción" que redirija al portal de cliente de Stripe.

Instrucciones de Salida:
Genera el código completo para cada archivo (.ts, .html, .css), organizado en la estructura de carpetas y módulos descrita.

Usa comentarios en el código para explicar la lógica de los servicios, interceptores y guardias.

Asegúrate de que el código sea limpio, siga la guía de estilo de Angular y esté correctamente tipado con TypeScript.

Comienza generando los comandos de Angular CLI necesarios para crear el proyecto y los módulos/componentes (ng new..., ng generate module..., ng generate component...), y luego proporciona el contenido de cada archivo.