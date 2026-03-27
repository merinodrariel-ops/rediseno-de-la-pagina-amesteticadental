# SEO Landings Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Crear 4 landings SEO dentro del dominio principal para posicionar y convertir mejor en estetica dental, diseno de sonrisa, carillas dentales y alineadores invisibles.

**Architecture:** Se agregan 4 rutas nuevas en App Router bajo `src/app/`, compartiendo el lenguaje visual premium actual pero con contenido, metadata y FAQs especificos por intencion. Se reutilizan componentes existentes cuando aporten consistencia y se crean componentes SEO/CRO nuevos solo si evitan duplicacion torpe entre paginas.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, metadata API de Next.js, JSON-LD schema.

---

### Task 1: Inventariar componentes reutilizables y huecos reales

**Files:**
- Review: `src/app/page.tsx`
- Review: `src/components/Hero.tsx`
- Review: `src/components/Autoridad.tsx`
- Review: `src/components/FAQ.tsx`
- Review: `src/components/Contacto.tsx`
- Review: `src/components/Tratamientos.tsx`

**Step 1: Revisar la home actual**

- Identificar que componentes sirven como base visual.
- Marcar cuales no sirven para paginas SEO por ser demasiado especificos de la home.

**Step 2: Hacer una lista corta de reutilizacion**

- Reutilizar solo componentes que mantengan consistencia sin forzar copy duplicado.
- Marcar si `FAQ` y `Contacto` necesitan volverse configurables por props.

**Step 3: Decidir si conviene crear componentes seccionales nuevos**

- Si hay bloques repetibles entre landings, planear una carpeta como `src/components/seo/`.
- Evitar abstraer antes de tiempo.

### Task 2: Definir la estrategia de contenido por URL

**Files:**
- Review: `docs/plans/2026-03-27-seo-landings-design.md`

**Step 1: Fijar keyword principal y secundarias por landing**

- `/estetica-dental`: keyword principal `estetica dental`
- `/diseno-de-sonrisa`: keyword principal `diseno de sonrisa`
- `/carillas-dentales`: keyword principal `carillas dentales`
- `/alineadores-invisibles`: keyword principal `alineadores invisibles`

**Step 2: Fijar propuesta de valor por landing**

- Cada una debe responder una intencion distinta.
- Evitar claims identicos en todas.

**Step 3: Confirmar CTAs**

- CTA primario: WhatsApp.
- CTA secundario: agendar consulta.

### Task 3: Crear la ruta de estetica dental

**Files:**
- Create: `src/app/estetica-dental/page.tsx`
- Create: `src/app/estetica-dental/head.tsx` or page metadata strategy
- Create: `src/components/seo/` components only if needed

**Step 1: Escribir el contenido minimo de la pagina**

- Hero con H1 especifico.
- Seccion de que incluye la estetica dental.
- Seccion de problemas que resuelve.
- Seccion de tratamientos relacionados con links a las otras landings.
- FAQ y CTA final.

**Step 2: Agregar metadata unica**

- `title`: `Estetica Dental en Puerto Madero | AM Estetica Dental`
- `description`: resumir propuesta, ubicacion y CTA.

**Step 3: Agregar schema contextual si aporta valor**

- Reusar schema global y sumar FAQ schema si la pagina incluye preguntas reales.

**Step 4: Validar que no duplique la home**

- La home vende marca.
- Esta landing vende el universo estetico y deriva a tratamientos.

### Task 4: Crear la ruta de diseno de sonrisa

**Files:**
- Create: `src/app/diseno-de-sonrisa/page.tsx`
- Create: metadata inline or dedicated file compatible with App Router

**Step 1: Escribir hero y propuesta**

- H1 centrado en diseno de sonrisa digital.
- Subcopy centrado en simulacion, armonia y personalizacion.

**Step 2: Escribir secciones clave**

- Que es.
- Como funciona la simulacion digital.
- Que tratamientos puede incluir.
- Para quien conviene.
- FAQ.

**Step 3: Integrar autoridad visual y CTA**

- Reutilizar o adaptar bloques de autoridad existentes sin copiar la home completa.

**Step 4: Validar el angulo premium**

- Debe sentirse mas aspiracional que tecnica.

### Task 5: Crear la ruta de carillas dentales

**Files:**
- Create: `src/app/carillas-dentales/page.tsx`
- Create: metadata inline or dedicated file compatible with App Router

**Step 1: Escribir hero y objecion principal**

- H1 centrado en mejorar forma, color y armonia.
- Subcopy centrado en naturalidad y criterio clinico.

**Step 2: Escribir secciones de conversion**

- Que corrigen.
- Tipos de carillas.
- Proceso.
- Duracion y cuidados.
- Cuando convienen y cuando no.

**Step 3: Agregar FAQ de alta intencion**

- Duracion.
- Si desgastan.
- Diferencia entre resina y porcelana.
- Si duelen.

**Step 4: Validar diferenciacion**

- Debe ser mas clara y mas honesta que las paginas competidoras revisadas.

### Task 6: Crear la ruta de alineadores invisibles

**Files:**
- Create: `src/app/alineadores-invisibles/page.tsx`
- Create: metadata inline or dedicated file compatible with App Router

**Step 1: Escribir hero orientado a ortodoncia estetica**

- H1 centrado en alinear sin brackets visibles.
- Subcopy centrado en comodidad, discrecion y seguimiento.

**Step 2: Escribir secciones clave**

- Que son.
- Beneficios frente a brackets.
- Para que casos sirven.
- Como es el proceso.
- Tiempos y controles.

**Step 3: Escribir FAQ transaccional**

- Si sirven para todos.
- Cuantas horas por dia.
- Si duelen.
- Cuanto duran.

**Step 4: Validar claridad mobile**

- Esta landing debe leerse rapido y convertir sin friccion.

### Task 7: Crear componentes SEO compartidos solo si reducen duplicacion real

**Files:**
- Create: `src/components/seo/SeoHero.tsx`
- Create: `src/components/seo/ProcessSection.tsx`
- Create: `src/components/seo/SeoFaq.tsx`
- Create: `src/components/seo/SeoCta.tsx`

**Step 1: Extraer solo patrones repetidos**

- Si las 4 paginas repiten la misma estructura con distinto contenido, abstraer.
- Si cada pagina necesita personalidad fuerte, dejar contenido inline.

**Step 2: Pasar contenido via props tipadas**

- Usar interfaces simples y explicitas.

**Step 3: Mantener consistencia visual**

- Reusar tokens visuales actuales, no inventar una segunda web dentro del proyecto.

### Task 8: Integrar enlazado interno estrategico

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: cualquier componente de tratamientos si conviene enlazar a las nuevas rutas

**Step 1: Exponer las nuevas rutas desde la home**

- Agregar links visibles desde tratamientos o bloques equivalentes.

**Step 2: Exponer las nuevas rutas desde navegacion**

- Decidir si van en navbar principal o menu de tratamientos.

**Step 3: Agregar links cruzados entre landings**

- Solo cuando haya relacion clinica real.

### Task 9: Afinar metadata, robots y sitemap

**Files:**
- Modify: `src/app/layout.tsx` only if global metadata needs adjustment
- Review/Create: `src/app/sitemap.ts` if the project does not already expose one
- Review/Create: `src/app/robots.ts` if needed

**Step 1: Verificar que cada landing sea indexable**

- Confirmar metadata unica y `robots` habilitado.

**Step 2: Agregar sitemap si falta**

- Incluir home y las 4 nuevas URLs.

**Step 3: Revisar Open Graph minimo**

- No bloquear deploy por imagen OG especifica si aun no existe.

### Task 10: Validar copy, tipos y build

**Files:**
- Validate: `src/app/estetica-dental/page.tsx`
- Validate: `src/app/diseno-de-sonrisa/page.tsx`
- Validate: `src/app/carillas-dentales/page.tsx`
- Validate: `src/app/alineadores-invisibles/page.tsx`

**Step 1: Lint**

Run: `npm run lint`

Expected: sin errores.

**Step 2: Tipos**

Run: `npx tsc --noEmit`

Expected: sin errores de TypeScript.

**Step 3: Build**

Run: `npm run build`

Expected: build de produccion exitoso.

**Step 4: Revisar estado final**

Run: `git status --short`

Expected: solo cambios esperados del experimento.
