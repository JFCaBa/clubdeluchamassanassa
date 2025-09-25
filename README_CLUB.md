# Club de Lucha Massanassa - Sitio Web Moderno

## Resumen del Proyecto

He creado un sitio web moderno y responsivo para el Club de Lucha Massanassa utilizando HTML, CSS y JavaScript básico, integrado en un proyecto Next.js con Tailwind CSS. Todo el contenido está en español y el sitio es completamente funcional sin necesidad de backend.

## Características Implementadas

### 1. Estructura del Sitio
- **Header**: Navegación fija con menú responsive para móviles
- **Hero Section**: Sección principal con llamada a la acción
- **Nosotros**: Información sobre el club con estadísticas
- **Actividades**: Programas para diferentes grupos de edad
- **Galería**: Cuadrícula de imágenes del club
- **Contacto**: Formulario de contacto e información de contacto
- **Footer**: Enlaces rápidos y redes sociales

### 2. Funcionalidades JavaScript
- **Menú móvil responsive**: Toggle para mostrar/ocultar menú en dispositivos móviles
- **Scroll suave**: Navegación suave entre secciones
- **Validación de formulario**: Validación básica del formulario de contacto
- **Efectos de scroll**: Header con sombra al hacer scroll
- **Navegación activa**: Resaltado de enlaces según la sección visible

### 3. Diseño Responsivo
- **Mobile-first**: Diseño optimizado para móviles primero
- **Breakpoints**: Adaptación para tablets y escritorio
- **Interfaz táctil**: Elementos interactivos con tamaño adecuado para táctil

### 4. Imágenes Generadas
Se han generado 12 imágenes placeholder utilizando IA:
- **Logo del club**: `/images/club-logo.png`
- **Instalaciones**: `/images/club-facility.jpg`
- **Actividades**: 
  - `/images/kids-wrestling.jpg`
  - `/images/youth-wrestling.jpg`
  - `/images/adult-wrestling.jpg`
- **Galería**: 8 imágenes de entrenamientos y competiciones

## Estructura de Archivos

```
/home/z/my-project/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal del sitio
│   │   ├── layout.tsx        # Layout con metadata y scripts
│   │   └── globals.css       # Estilos globales
│   └── lib/
│       └── utils.ts          # Utilidades (existente)
├── public/
│   ├── images/               # Directorio de imágenes
│   │   ├── club-logo.png      # Logo del club
│   │   ├── club-facility.jpg # Instalaciones
│   │   ├── kids-wrestling.jpg # Lucha infantil
│   │   ├── youth-wrestling.jpg # Lucha juvenil
│   │   ├── adult-wrestling.jpg # Lucha adultos
│   │   ├── gallery-1.jpg     # Galería 1
│   │   ├── gallery-2.jpg     # Galería 2
│   │   ├── gallery-3.jpg     # Galería 3
│   │   ├── gallery-4.jpg     # Galería 4
│   │   ├── gallery-5.jpg     # Galería 5
│   │   ├── gallery-6.jpg     # Galería 6
│   │   ├── gallery-7.jpg     # Galería 7
│   │   └── gallery-8.jpg     # Galería 8
│   ├── js/
│   │   └── main.js           # Funcionalidades JavaScript
│   ├── IMAGES_NEEDED.md      # Documentación de imágenes necesarias
│   └── logo.svg              # Logo existente (no se usa)
└── package.json              # Dependencias del proyecto
```

## Tecnologías Utilizadas

- **Next.js 15**: Framework de React con App Router
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework de CSS para estilos rápidos
- **JavaScript Vanilla**: Para interactividad básica
- **IA para generación de imágenes**: Imágenes placeholder generadas con Z-AI

## Cómo Usar el Sitio

### 1. Acceso al Sitio
El sitio está disponible en `http://localhost:3000` cuando el servidor de desarrollo está en ejecución.

### 2. Navegación
- **Menú principal**: Enlaces a todas las secciones del sitio
- **Menú móvil**: Icono de hamburguesa en dispositivos móviles
- **Scroll suave**: Click en cualquier enlace de navegación para desplazamiento suave

### 3. Formulario de Contacto
- **Campos requeridos**: Nombre, Email y Mensaje
- **Validación**: Email debe tener formato válido
- **Submit**: Muestra mensaje de éxito (simulado, sin backend)

### 4. Diseño Responsivo
- **Móvil**: Menú colapsable, diseño de una columna
- **Tablet**: Diseño de dos columnas en algunas secciones
- **Escritorio**: Diseño completo con múltiples columnas

## Personalización

### 1. Reemplazar Imágenes
Las imágenes actuales son placeholders generadas por IA. Para reemplazarlas:

1. Crear imágenes con los nombres exactos especificados en `public/IMAGES_NEEDED.md`
2. Colocarlas en el directorio `public/images/`
3. Las imágenes se mostrarán automáticamente en el sitio

### 2. Modificar Contenido
- **Texto**: Editar directamente en `src/app/page.tsx`
- **Estilos**: Modificar clases de Tailwind CSS en el mismo archivo
- **Colores**: Los colores principales son:
  - Rojo: `text-red-600`, `bg-red-600`
  - Gris: `text-gray-900`, `bg-gray-100`, `bg-gray-800`
  - Blanco: `text-white`, `bg-white`

### 3. Agregar Funcionalidades
- **JavaScript**: Editar `public/js/main.js`
- **Nuevas secciones**: Agregar nuevas secciones en `src/app/page.tsx`
- **Estilos adicionales**: Agregar clases de Tailwind CSS según sea necesario

## Consideraciones Técnicas

### 1. Rendimiento
- **Imágenes optimizadas**: Generadas en tamaño adecuado para web
- **CSS minimalista**: Solo clases necesarias de Tailwind
- **JavaScript ligero**: Solo funcionalidades esenciales

### 2. Accesibilidad
- **HTML semántico**: Uso de etiquetas `<header>`, `<nav>`, `<section>`, `<footer>`
- **Navegación por teclado**: Todos los elementos interactivos son accesibles
- **Alt text**: Todas las imágenes tienen descripciones adecuadas

### 3. SEO
- **Metadata optimizada**: Títulos, descripciones y keywords en español
- **Open Graph**: Configurado para compartir en redes sociales
- **Estructura semántica**: Buena estructura para motores de búsqueda

## Próximos Pasos Opcionales

1. **Reemplazar imágenes**: Usar fotos reales del club y actividades
2. **Agregar backend**: Implementar envío real de correos desde el formulario
3. **Blog/Noticias**: Agregar sección de noticias del club
4. **Calendario**: Agregar calendario de eventos y competiciones
5. **Galería dinámica**: Implementar galería con lightbox
6. **Inscripciones**: Sistema de inscripción en línea para actividades

## Contacto

Si necesitas ayuda adicional o quieres personalizar alguna funcionalidad, no dudes en solicitarlo.

---

**Nota**: Este sitio web es completamente funcional y listo para usar. Las imágenes actuales son placeholders y deben ser reemplazadas con fotos reales del club para una implementación final.