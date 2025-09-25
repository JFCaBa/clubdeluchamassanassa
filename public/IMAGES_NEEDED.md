# Imágenes necesarias para el sitio web del Club de Lucha Massanassa

## Hero Section (Imagen de fondo principal)
- `/images/hero-background.jpg` - Imagen de fondo para la sección de inicio (recomendado: 1440x720px o superior, panorámico)
- `/images/hero-background-option2.jpg` - Opción alternativa: Entrenamiento en equipo (1440x720px)
- `/images/hero-background-option3.jpg` - Opción alternativa: Celebración de victoria (1440x720px)

**Nota**: Tienes 3 opciones de placeholder generadas por IA para usar mientras encuentras la imagen definitiva. Para cambiar entre ellas, modifica el src en el archivo `src/app/page.tsx`.

## Logo y Branding
- `/images/club-logo.png` - Logo principal del club (recomendado: 500x500px, fondo transparente)

## Sección "Nosotros"
- `/images/club-facility.jpg` - Foto de las instalaciones del club (recomendado: 800x600px)

## Sección "Disciplinas"
- `/images/jiujitsu-brasileno.jpg` - Jiujitsu Brasileno (recomendado: 400x300px)
- `/images/capoeira.jpg` - Capoeira (recomendado: 400x300px)
- `/images/kick-boxing.jpg` - Kick Boxing (recomendado: 400x300px)
- `/images/mma.jpg` - MMA (recomendado: 400x300px)
- `/images/grappling.jpg` - Grappling (recomendado: 400x300px)
- `/images/musculacion.jpg` - Sala de Musculación y Fitness (recomendado: 400x300px)
- `/images/infantil.jpg` - Clases Infantiles (recomendado: 400x300px)

## Sección "Video de Instalaciones"
- `/images/video-thumbnail.jpg` - Thumbnail para el video del dron (recomendado: 1440x720px, panorámico)
- `/videos/instalaciones-drone.mp4` - Video del dron con recorrido por las instalaciones (recomendado: MP4, 1080p o 4K)

**Nota**: El video placeholder debe ser reemplazado con el video real grabado con dron. El thumbnail puede ser un fotograma del video o una imagen representativa.

## Sección "Galería"
- `/images/gallery-1.jpg` - Entrenamiento general 1 (recomendado: 300x300px)
- `/images/gallery-2.jpg` - Competición 1 (recomendado: 300x300px)
- `/images/gallery-3.jpg` - Entrenamiento general 2 (recomendado: 300x300px)
- `/images/gallery-4.jpg` - Competición 2 (recomendado: 300x300px)
- `/images/gallery-5.jpg` - Foto del equipo completo 1 (recomendado: 300x300px)
- `/images/gallery-6.jpg` - Foto del equipo completo 2 (recomendado: 300x300px)
- `/images/gallery-7.jpg` - Medallas y trofeos 1 (recomendado: 300x300px)
- `/images/gallery-8.jpg` - Medallas y trofeos 2 (recomendado: 300x300px)

## Notas importantes:
1. Todas las imágenes deben estar en formato JPG o PNG
2. Se recomienda optimizar las imágenes para web (calidad 80-90%)
3. Los nombres de archivo deben ser exactamente como se indican arriba
4. Las imágenes deben ser apropiadas para un club de artes marciales y deportes de combate
5. Se recomienda incluir fotos reales del club, entrenadores y alumnos cuando sea posible
6. **Importante**: Las imágenes de fondo hero deben ser de alta calidad y resolución para verse bien en pantallas grandes
7. **Placeholder**: Las imágenes hero-background-option2.jpg y hero-background-option3.jpg son opciones adicionales generadas por IA
8. **Disciplinas**: Las imágenes de disciplinas ya han sido generadas con IA y están listas para usar
9. **Video**: El archivo `/videos/instalaciones-drone.mp4` debe ser creado manualmente con el video real del dron

## Ruta de las imágenes:
Todas las imágenes deben colocarse en el directorio: `/public/images/`

## Ruta del video:
El video debe colocarse en: `/public/videos/instalaciones-drone.mp4`

Ejemplo de estructura final:
```
public/
├── images/
│   ├── hero-background.jpg        # Imagen de fondo principal (actual)
│   ├── hero-background-option2.jpg # Opción alternativa 2
│   ├── hero-background-option3.jpg # Opción alternativa 3
│   ├── club-logo.png
│   ├── club-facility.jpg
│   ├── jiujitsu-brasileno.jpg    # Disciplina 1
│   ├── capoeira.jpg              # Disciplina 2
│   ├── kick-boxing.jpg           # Disciplina 3
│   ├── mma.jpg                   # Disciplina 4
│   ├── grappling.jpg             # Disciplina 5
│   ├── musculacion.jpg           # Disciplina 6 - Sala de musculación
│   ├── infantil.jpg              # Clases para niños
│   ├── video-thumbnail.jpg       # Thumbnail para video del dron
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   ├── gallery-6.jpg
│   ├── gallery-7.jpg
│   └── gallery-8.jpg
├── videos/
│   └── instalaciones-drone.mp4   # Video real del dron (por crear)
├── js/
│   └── main.js
└── ... otros archivos
```

## Instrucciones para el Video:
1. **Crear el directorio**: `mkdir -p public/videos`
2. **Subir el video**: Colocar el archivo `instalaciones-drone.mp4` en `public/videos/`
3. **Actualizar el código**: Cuando tengas el video real, deberás actualizar el código en `src/app/page.tsx` para reemplazar el placeholder con el reproductor de video real
4. **Formato recomendado**: MP4, resolución 1080p o 4K, duración óptima 2-4 minutos