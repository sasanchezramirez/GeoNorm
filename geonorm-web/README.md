# GeoNorm Web - Frontend

Portal web y dashboard de desarrollador para la API de GeoNorm. Una aplicación Next.js moderna que proporciona una experiencia completa para desarrolladores que desean integrar servicios de normalización de direcciones.

## 🚀 Características

- **Landing Page**: Página de inicio moderna con demo interactivo de la API
- **Página de Precios**: Planes de suscripción transparentes (Developer, Startup, Enterprise)
- **Documentación Completa**: Guías detalladas con ejemplos de código en múltiples lenguajes
- **Autenticación**: Registro e inicio de sesión con validación
- **Dashboard de Desarrollador**: Gestión de API Keys, monitoreo de uso y facturación
- **Responsive**: Diseño completamente adaptativo para móviles y desktop
- **Componentes UI**: Basado en Shadcn/UI para máxima accesibilidad

## 🛠 Stack Tecnológico

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: Shadcn/UI + Radix UI
- **Iconos**: Lucide React
- **Herramientas de Desarrollo**: ESLint, TypeScript compiler

## 📁 Estructura del Proyecto

```
geonorm-web/
├── app/                          # App Router de Next.js
│   ├── globals.css              # Estilos globales y variables CSS
│   ├── layout.tsx               # Layout raíz de la aplicación
│   ├── page.tsx                 # Página de inicio (Landing)
│   ├── pricing/page.tsx         # Página de precios
│   ├── docs/page.tsx            # Documentación de la API
│   ├── sign-up/page.tsx         # Registro de usuarios
│   ├── login/page.tsx           # Inicio de sesión
│   └── dashboard/page.tsx       # Dashboard de desarrollador
├── components/
│   ├── ui/                      # Componentes UI base (Shadcn/UI)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── separator.tsx
│   └── shared/                  # Componentes compartidos
│       ├── navbar.tsx           # Navegación principal
│       ├── footer.tsx           # Footer del sitio
│       ├── api-demo.tsx         # Demo interactivo de la API
│       └── code-block.tsx       # Componente para mostrar código
├── lib/
│   └── utils.ts                 # Utilidades (función cn para clases)
└── [archivos de configuración]
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Paso a Paso

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd GeoNorm/geonorm-web
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Instalar dependencia faltante para animaciones**
```bash
npm install tailwindcss-animate
# o
yarn add tailwindcss-animate
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir en el navegador**
   
   Visita http://localhost:3000 para ver la aplicación.

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 🎨 Decisiones de Desarrollo

### Arquitectura y Framework

**Next.js 14 con App Router**: Elegido por su arquitectura moderna, SSR/SSG nativo, y mejor organización de rutas. El App Router ofrece mejor rendimiento y developer experience comparado con Pages Router.

**TypeScript**: Implementado para mayor seguridad de tipos, mejor IntelliSense y reducción de bugs en tiempo de desarrollo.

### Estilos y UI

**Tailwind CSS**: Seleccionado por su enfoque utility-first que permite desarrollo rápido, bundle size optimizado, y mantenimiento sencillo. Las variables CSS personalizadas permiten temas consistentes.

**Shadcn/UI**: Sistema de componentes moderno basado en Radix UI que garantiza:
- Accesibilidad nativa (ARIA, navegación por teclado)
- Componentes sin estilos predefinidos (headless)
- Compatibilidad total con Tailwind CSS
- Personalización completa

### Estructura de Componentes

**Separación clara entre UI y lógica**:
- `components/ui/`: Componentes base reutilizables
- `components/shared/`: Componentes específicos del negocio
- Cada componente es autocontenido con sus propios tipos

### Gestión de Estado

**Estado local con React Hooks**: Para esta aplicación, el estado local es suficiente. Se evitó agregar complejidad innecesaria con librerías de estado global.

**Simulación de API**: Los componentes incluyen simulaciones de llamadas a la API para demostrar funcionalidad completa sin dependencias externas.

### Experiencia de Usuario

**Navegación Responsiva**: Menú hamburguesa en móviles, navegación completa en desktop.

**Feedback Visual**: 
- Estados de carga en formularios y demos
- Animaciones sutiles con Tailwind
- Indicadores visuales para acciones del usuario (copiado, éxito/error)

**Demo Interactivo**: La landing page incluye un demo funcional que simula respuestas reales de la API, permitiendo a los usuarios experimentar el valor del producto inmediatamente.

### Accesibilidad

**Estándares WCAG**: Todos los componentes siguen las mejores prácticas:
- Contraste de colores adecuado
- Navegación por teclado
- Etiquetas semánticas
- Estados de foco visibles

### SEO y Performance

**Metadata Optimizada**: Cada página incluye meta tags apropiados para SEO.

**Imágenes y Assets**: Preparado para optimización de imágenes con Next.js Image component.

**Bundle Optimization**: Tree-shaking automático y code splitting por rutas.

### Seguridad

**Validación de Formularios**: Validación tanto client-side como preparación para server-side.

**Sanitización**: Preparado para sanitización de inputs del usuario.

**API Keys**: Implementación segura para mostrar/ocultar claves sensibles.

## 🔧 Personalización

### Colores y Temas

Los colores se definen en `app/globals.css` usando variables CSS. Para cambiar la paleta:

```css
:root {
  --primary: 221.2 83.2% 53.3%;        /* Color primario */
  --secondary: 210 40% 96%;            /* Color secundario */
  /* ... otros colores */
}
```

### Componentes

Para añadir nuevos componentes UI:

1. Usar el patrón de Shadcn/UI
2. Implementar forwarding de refs
3. Incluir variantes con `class-variance-authority`
4. Mantener compatibilidad con Tailwind

### Rutas

Añadir nuevas páginas en el directorio `app/` siguiendo la convención del App Router:

```
app/
├── nueva-pagina/
│   └── page.tsx
└── pagina-con-params/
    └── [id]/
        └── page.tsx
```

## 📝 Próximos Pasos

### Integraciones Pendientes

1. **NextAuth.js**: Implementar autenticación real con providers (Google, GitHub)
2. **Stripe**: Integración completa para manejo de suscripciones
3. **API Real**: Conectar con endpoints reales de GeoNorm
4. **Base de Datos**: Persistencia de datos de usuario y uso de API
5. **Analytics**: Google Analytics o alternativa para monitoreo
6. **Monitoring**: Sentry o similar para error tracking

### Mejoras Técnicas

1. **Testing**: Jest + Testing Library para pruebas unitarias
2. **E2E Testing**: Playwright o Cypress
3. **CI/CD**: GitHub Actions para deployment automático
4. **Performance**: Implementar métricas Core Web Vitals
5. **PWA**: Service Workers para funcionalidad offline

### Funcionalidades

1. **Dashboard Avanzado**: Gráficos de uso histórico
2. **Webhooks**: Configuración de notificaciones
3. **Team Management**: Gestión de equipos y permisos
4. **API Playground**: Editor interactivo en el browser
5. **Documentación Interactiva**: OpenAPI Swagger integrado

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia Apache 2.0. Ver `LICENSE` para más detalles.

---

**Construido con ❤️ para desarrolladores de América Latina**