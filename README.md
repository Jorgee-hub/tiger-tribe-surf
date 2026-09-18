# 🏄 Tiger Tribe Surf School

Sitio web oficial de **Tiger Tribe Surf School**, una escuela de surf ubicada en Tamarindo, Guanacaste, Costa Rica.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=flat)](https://tiger-tribe-surf.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

---

## 🎯 Sobre el proyecto

Sitio web desarrollado como **proyecto freelance** para una escuela de surf real. El objetivo principal es mostrar las lecciones y surf trips de la escuela y **convertir visitantes en reservas directas por WhatsApp**, eliminando la fricción del proceso de contacto.

🌐 **Ver en vivo:** [tiger-tribe-surf.vercel.app](https://tiger-tribe-surf.vercel.app)

---

## ✨ Features

- 🏄 **Hero animado** con video de fondo y título palabra por palabra
- 📚 **Páginas de lecciones** — Private & Group con detalle completo
- 🗺️ **Surf Trips** — Witch's Rock, Playa Avellanas y Playa Grande
- 📸 **Galería** con 18 fotos optimizadas
- 👤 **Página About** con bio del instructor y carrusel de fotos automático
- 💬 **Integración de WhatsApp** con mensajes pre-cargados según el servicio
- 🎨 **Sistema de diseño centralizado** para consistencia visual
- ⚡ **Performance optimizado** — assets comprimidos al 89%
- 🔍 **SEO técnico** — títulos únicos, meta descriptions y JSON-LD
- 📱 **100% responsive** — móvil, tablet y desktop
- ♿ **Accesible** — respeta `prefers-reduced-motion`
- 🚫 **Página 404 personalizada**

---

## 🛠️ Tecnologías

**Frontend:**
- ⚛️ **React 18** — Componentes funcionales y hooks (`useState`, `useEffect`, `useRef`)
- ⚡ **Vite** — Build tool y dev server
- 🧭 **React Router v6** — Navegación SPA con layout routes anidadas
- 🎨 **Bootstrap 5** — Grid y utilidades responsive
- 💅 **CSS3** — Estilos personalizados
- 🎬 **GSAP** — Animaciones (timelines, ScrollTrigger, split text)

**SEO & Metadata:**
- 🔍 **React Helmet Async** — Títulos y meta descriptions únicos por página
- 📋 **JSON-LD** — Datos estructurados (`SportsActivityLocation`)

**Herramientas:**
- 🎥 **FFmpeg** — Compresión del video del Hero
- 🖼️ **iLoveIMG** — Compresión de imágenes
- 🚀 **Vercel** — Hosting, CDN global y SSL automático
- 📦 **Git + GitHub** — Control de versiones

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Layout.jsx
│   ├── LessonCard.jsx
│   ├── Navbar.jsx
│   ├── ScrollToTop.jsx
│   └── TripCard.jsx
├── pages/
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── GroupLesson.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── PrivateLesson.jsx
├── styles/
│   └── theme.js
├── img/
│   ├── about/
│   ├── gallery/
│   ├── lessons/
│   └── trips/
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚡ Performance

El sitio fue optimizado para cargar rápido incluso en conexiones móviles:

| Asset | Antes | Después | Reducción |
|-------|-------|---------|-----------|
| 🎬 Video del Hero | 98 MB | 11 MB | **89%** |
| 🖼️ Galería (18 fotos) | 31 MB | 3.3 MB | **89%** |
| 👤 Fotos del instructor (6) | 12 MB | 4 MB | **67%** |
| **Total** | **~141 MB** | **~18 MB** | **87%** |

**Optimizaciones aplicadas:**
- ✅ Compresión de video con FFmpeg (CRF 24, 720p, 30fps)
- ✅ Compresión de imágenes con iLoveIMG
- ✅ `loading="lazy"` en imágenes de la galería
- ✅ `willChange` para animaciones en GPU

---

## 🚀 Cómo correrlo en local

### Requisitos
- Node.js 18+
- npm

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Jorgee-hub/tiger-tribe-surf.git

# 2. Entrar al proyecto
cd tiger-tribe-surf

# 3. Instalar dependencias
npm install

# 4. Correr el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en el navegador.

### Build para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para deploy.

---

## 📄 Páginas del sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Home — Hero, About, Lessons, Trips, Reviews |
| `/gallery` | Galería con 18 fotos |
| `/lessons/private` | Detalle y reserva de clase privada |
| `/lessons/group` | Detalle y reserva de clase grupal |
| `/about` | Bio del instructor con carrusel de fotos |
| `*` | Página 404 personalizada |

---

## 💬 Integración de WhatsApp

Cada botón de reserva abre WhatsApp con un **mensaje contextual pre-cargado**, según el servicio:

```js
const WHATSAPP_URL = `https://wa.me/50664787288?text=${encodeURIComponent(
  "Hi! I found you through your website and I'd like to book a surf lesson."
)}`;
```

**Diferentes mensajes según la página:**
- Clase privada → "book a private surf lesson"
- Clase grupal → "book a group surf lesson"
- Surf trips → "book a surf trip"

**Esto elimina la fricción del proceso de reserva** — el cliente solo presiona "enviar".

---

## 🔍 SEO Implementado

- ✅ **Títulos únicos por página** con React Helmet Async
- ✅ **Meta descriptions** específicas por página
- ✅ **JSON-LD** con datos del negocio (`SportsActivityLocation`)
- ✅ **Open Graph** para compartir en WhatsApp/Facebook
- ✅ **Estructura semántica** (`<h1>`, `<h2>`, `<nav>`, `<main>`)
- ✅ **Alt text** descriptivo en todas las imágenes

---

## 🎨 Sistema de Diseño

Colores centralizados en `src/styles/theme.js` para mantener consistencia visual:

```js
export const colores = {
  oceano: "#0E3B43",   // Fondo principal
  papaya: "#FF6F3C",   // Acento naranja
  espuma: "#7FD8C9",   // Turquesa
  arena: "#E8DCC4",    // Beige
  blanco: "#FFFFFF",   // Blanco
  cielo: "#AED8F2",    // Celeste
};
```

**Todos los componentes importan desde este archivo.** Cambiar un color acá lo actualiza en todo el sitio.

---

## 👨‍💻 Autor

**Jorge Montiel Espinoza**
Full Stack Developer · Costa Rica

- 📧 Email: [Jorgee-hub@outlook.com](mailto:Jorgee-hub@outlook.com)
- 💼 LinkedIn: [linkedin.com/in/jorgee-hub](https://linkedin.com/in/jorgee-hub)
- 🐙 GitHub: [@Jorgee-hub](https://github.com/Jorgee-hub)

---

## 📄 Licencia

Este proyecto fue desarrollado como **freelance** para **Tiger Tribe Surf School**. El código es de uso libre con fines educativos y de portafolio.

---

⭐ **Si te gustó el proyecto, considerá darle una estrella al repositorio.**
