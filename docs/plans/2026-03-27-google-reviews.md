# Google Reviews Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redisenar la prueba social de Google para que `Autoridad` funcione como trust badge y `Testimonios` se convierta en la seccion protagonista de Google Reviews con movimiento, mejor jerarquia y look premium.

**Architecture:** La implementacion mantiene la distribucion de prueba social en dos niveles. `src/components/Autoridad.tsx` conserva una version compacta del score para confianza inmediata. `src/components/Testimonios.tsx` pasa a concentrar la experiencia principal de reviews con un header fuerte, cards dinamicas y un sistema de desplazamiento continuo soportado por estilos globales. La logica de animacion debe ser simple, liviana y basada en CSS siempre que sea posible.

**Tech Stack:** Next.js App Router, React client components, TypeScript, Tailwind CSS v4, CSS global animations en `src/app/globals.css`

---

### Task 1: Auditar y definir el contenido final de Google Reviews

**Files:**
- Modify: `src/components/Testimonios.tsx`
- Modify: `src/components/Autoridad.tsx`

**Step 1: Identificar el contenido actual que se conserva**

- Revisar los arrays `REVIEWS`, `testimoniosEscritos` y `videosTestimonios`.
- Elegir que reseñas van al bloque compacto de `Autoridad` y cuales pasan al hub principal de `Testimonios`.
- Marcar una reseña emocional para usar como destacada.

**Step 2: Definir la metadata comun**

- Normalizar textos de apoyo: `Google Reviews`, `4.9`, `87 reseñas verificadas`, `Opiniones reales de nuestros pacientes`.
- Si hace falta, agregar un campo opcional como `origen` o `destacada` al array de testimonios escritos.

**Step 3: Verificar que el contenido siga siendo autentico y breve**

Run: inspeccion visual del archivo en editor
Expected: textos cortos, legibles y consistentes con tono premium

### Task 2: Reducir `Autoridad` a trust badge de alta claridad

**Files:**
- Modify: `src/components/Autoridad.tsx`

**Step 1: Simplificar la card de Google Reviews**

- Mantener estrellas, `4.9` y `87 reseñas verificadas`.
- Reducir peso del review rotativo para que no compita con la futura seccion principal.
- Conservar el lenguaje visual premium existente y bajar complejidad si hace falta.

**Step 2: Ajustar copy y jerarquia**

- Cambiar el copy para que funcione como validacion rapida.
- Asegurarse de que Forbes siga siendo el otro eje de autoridad.

**Step 3: Verificar layout desktop/mobile**

Run: `npm run lint`
Expected: sin errores de sintaxis o tipos por cambios en JSX

### Task 3: Rehacer el header de `Testimonios` como hero de reputacion

**Files:**
- Modify: `src/components/Testimonios.tsx`

**Step 1: Reemplazar el encabezado actual**

- Crear un nuevo bloque superior con:
  - etiqueta `Google Reviews`
  - score `4.9` de gran escala
  - estrellas visibles
  - `87 reseñas verificadas`
  - subtitulo `Opiniones reales de nuestros pacientes`

**Step 2: Integrar el mensaje con los videos reales**

- Mantener los videos debajo del nuevo header.
- Ajustar espaciados para que videos y reviews se lean como una sola narrativa de prueba social.

**Step 3: Verificar legibilidad del hero**

Run: `npm run lint`
Expected: componente compila y el markup queda limpio

### Task 4: Reemplazar el grid estatico por una franja dinamica de reviews

**Files:**
- Modify: `src/components/Testimonios.tsx`
- Modify: `src/app/globals.css`

**Step 1: Crear estructura de marquee/carrusel continuo**

- Duplicar la lista de testimonios si hace falta para scroll infinito visual.
- Usar una fila horizontal con overflow hidden y track interno animado por CSS.
- Mantener pausa al hover para lectura.

**Step 2: Disenar las cards nuevas**

- Cards mas anchas con:
  - estrellas
  - nombre
  - tratamiento
  - quote corta
  - detalles visuales de confianza
- Evitar el aspecto de grid generico actual.

**Step 3: Agregar una review destacada fija o de mayor tamano**

- Colocar una card anchor mas grande debajo o integrada a la franja.
- Esa card debe actuar como punto de lectura profundo mientras el resto transmite volumen.

**Step 4: Crear estilos globales necesarios**

- Agregar `@keyframes` para marquee.
- Agregar utilidades opcionales para mask lateral o pausa por hover si es necesario.

**Step 5: Verificar movimiento y performance**

Run: `npm run lint`
Expected: sin errores y animaciones definidas sin clases muertas

### Task 5: Optimizar comportamiento responsive

**Files:**
- Modify: `src/components/Testimonios.tsx`
- Modify: `src/app/globals.css`

**Step 1: Ajustar mobile**

- Reducir tamano del `4.9` en pantallas chicas.
- Hacer que la franja de reviews no se vuelva ilegible ni demasiado rapida.
- Si es necesario, usar una sola fila en mobile.

**Step 2: Ajustar desktop grande**

- Aprovechar ancho para que la seccion respire.
- Revisar que los fades laterales no corten contenido importante.

**Step 3: Verificar experiencia responsive**

Run: `npm run dev`
Expected: revisar manualmente desktop y mobile sin overflow roto ni cards cortadas

### Task 6: Validacion final de calidad

**Files:**
- Modify: `src/components/Autoridad.tsx`
- Modify: `src/components/Testimonios.tsx`
- Modify: `src/app/globals.css`

**Step 1: Ejecutar control de calidad**

Run: `npm run lint`
Expected: PASS

**Step 2: Ejecutar build**

Run: `npm run build`
Expected: build exitosa sin errores

**Step 3: Verificacion visual final**

- Confirmar:
  - `Autoridad` queda mas compacto
  - `Testimonios` gana protagonismo
  - `Google Reviews` se identifica al instante
  - la seccion ya no se siente muerta

**Step 4: Commit**

```bash
git add src/components/Autoridad.tsx src/components/Testimonios.tsx src/app/globals.css docs/plans/2026-03-27-google-reviews-design.md docs/plans/2026-03-27-google-reviews.md
git commit -m "feat: elevate google reviews social proof"
```
