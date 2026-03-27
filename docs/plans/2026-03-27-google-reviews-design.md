# Google Reviews Design

**Goal:** Convertir la prueba social de Google en un activo visual y comercial de alto impacto, manteniendo la estetica premium del sitio y mejorando la claridad de reputacion para usuarios nuevos.

## Decision

- Mantener en `src/components/Autoridad.tsx` un bloque compacto de confianza con `4.9` y cantidad de reseñas verificadas.
- Reposicionar `src/components/Testimonios.tsx` como la seccion principal de social proof, unificando videos reales y Google Reviews dentro de una narrativa mas fuerte.
- Evitar duplicacion competitiva: `Autoridad` valida rapido; `Testimonios` desarrolla la prueba.

## Why This Direction

- SEO/semantica: una seccion clara y fuerte de testimonios reales ayuda a que la prueba social no quede dispersa ni diluida.
- CRO: mostrar primero score, fuente y volumen, y despues opiniones humanas, reduce friccion y acelera confianza.
- Brand fit: el sitio ya trabaja un lenguaje black-and-gold cinematografico; la seccion de reviews debe sentirse editorial y viva, no como un plugin generico.

## UX Structure

### 1. `Autoridad` keeps the trust badge

- Conservar una card breve de `Google Reviews` junto al bloque de Forbes.
- Ajustar jerarquia para que funcione como sello rapido de validacion, no como destino principal de lectura.
- Mantener el `4.9`, estrellas, cantidad de reseñas y una rotacion simple de una opinion corta.

### 2. `Testimonios` becomes the review hub

- Encabezado principal con identidad Google visible:
  - `Google Reviews`
  - `4.9` mucho mas protagonista
  - `87 reseñas verificadas`
  - `Opiniones reales de nuestros pacientes`
- Debajo del encabezado, mantener los videos reales como primera prueba audiovisual.
- Luego, reemplazar el grid estatico por una experiencia dinamica de reviews en movimiento.

### 3. Dynamic review system

- Implementar una franja horizontal tipo marquee/carrusel continuo con pausa al hover.
- Usar cards mas anchas y respiradas, no tarjetas chicas de grid.
- Aplicar fade lateral para que el movimiento se vea premium y no agresivo.
- Incluir al menos una review destacada mas grande, mas emocional, como ancla de lectura.

## Visual Direction

**Aesthetic:** luxury editorial proof

**Differentiation anchor:** una franja de reputacion premium donde el `4.9` y las opiniones reales se sienten como evidencia viva, no como un slider SaaS estandar.

## Visual System

- Mantener `Manrope` + `Cormorant` para continuidad con el sitio.
- `4.9` en gran escala como pieza heroica dentro de la seccion.
- Etiquetas y metadata en mayusculas pequenas con tracking amplio.
- Estrellas, badge Google y microdetalles de verificacion integrados al sistema negro/dorado.
- Brillos suaves, bordes delicados y masks laterales para dar sensacion de movimiento editorial.

## Content Hierarchy

1. Fuente de confianza: Google Reviews
2. Score: `4.9`
3. Volumen: `87 reseñas verificadas`
4. Humanidad: nombres, tratamientos y citas reales
5. Profundidad: videos de pacientes reales

## Behavior

- Auto-scroll continuo y lento para transmitir abundancia de reviews.
- Pausa al hover para mejorar lectura.
- En mobile, convertir el movimiento en carrusel mas contenido o una sola fila horizontal para no saturar.
- Mantener accesibilidad: contenido legible sin depender exclusivamente del movimiento.

## SEO / Trust Notes

- La seccion debe nombrar claramente `Google Reviews` y `opiniones reales de pacientes` en el copy visible.
- Conviene mantener nombres, tratamientos y lenguaje autentico para reforzar E-E-A-T y credibilidad percibida.
- No esconder toda la prueba social dentro de una animacion; parte del contenido debe quedar claramente renderizado y legible.

## Files Expected To Change

- Modify: `src/components/Autoridad.tsx`
- Modify: `src/components/Testimonios.tsx`
- Modify: `src/app/globals.css`

## Success Criteria

- El bloque de Google Reviews se percibe inmediatamente como mas importante y mas premium.
- La parte escrita deja de sentirse estatica o secundaria.
- La prueba social queda organizada en dos niveles claros: validacion rapida y evidencia desarrollada.
- La seccion funciona bien en desktop y mobile sin perder legibilidad ni ritmo.
