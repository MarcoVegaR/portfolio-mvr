# SDD-03 — Hero

## 1. Estado y autoridad

- **Estado:** Video-First Hybrid R1 aprobado
- **Versión:** 1.0
- **Fecha:** 2026-08-20
- **Relacionado:** `PRD-03 v1.3 — Hero.md`
- **Módulo:** Home / Hero
- **Implementación:** Fase 6/7 en curso
- **GO de implementación:** Concedido tras Gate R1-A de assets

Este documento es la autoridad técnica operativa para implementar PRD-03. La enmienda Video-First R1 sustituye las decisiones runtime de motion, Canvas, trayectorias y física descritas en versiones anteriores.

### 1.1 Precedencia

```text
PRODUCT AUTHORITY
PRD-03 v1.3
+ single-theme reconciliation de PRD-01/PRD-02
        |
        v
APPROVED DESIGN INPUTS
Motion Storyboard
Technical Specification
Asset Manifest
        |
        v
IMPLEMENTATION AUTHORITY
SDD-03 aprobado
        |
        v
EXECUTION PLAN / QA MATRIX
        |
        v
CODE
```

Si una decisión del repositorio contradice una decisión de producto o diseño aprobada, el implementador debe detenerse y elevar la contradicción. No puede cambiarla silenciosamente.

### 1.2 Alcance de este documento

Este SDD concreta el diseño aprobado contra el repositorio real. No rediseña Fases 1–5, no reabre el catálogo de proyectiles, no modifica Header fuera del alcance de PRD-03 y no inicia trabajo de implementación.

---

## 2. Pre-requisitos externos al Hero

Estos trabajos pueden requerir cambios de código, pero no pertenecen a PRD-03 ni a Fase 6:

### 2.1 Single-theme reconciliation

PRD-01/PRD-02 deben reconciliar documentalmente el producto dark-only:

- marcar como deprecated las expectativas light-first;
- marcar como deprecated el ThemeToggle visible;
- alinear SDD-01, SDD-02, release notes y tests históricos;
- conservar el contrato técnico legacy solo si se documenta como compatibilidad futura;
- asegurar que la implementación activa y el bootstrap inicial sean dark.

### 2.2 Baseline repair

El baseline actual debe volver a verde antes del GO de Hero. El arreglo de formato de `theme-provider.tsx` y cualquier corrección necesaria para `composer ci:check` pertenece a la reconciliación externa de PRD-01/PRD-02.

La regla correcta es:

```text
No changes attributable to PRD-03 before GO.
PRD-01/PRD-02 reconciliation and baseline repair
        |
        v
BASELINE GREEN
        |
        v
GO HERO
        |
        v
FASE 6
```

### 2.3 Handoff documental

El handoff debe vivir en una ubicación versionada y referenciar físicamente `PRD-03 v1.3`, no v1.2. Las referencias antiguas no se interpretan: se actualizan.

### 2.4 Estado de release

- La ausencia de `/public/cv/curriculum.pdf` no bloquea la implementación incremental.
- La ausencia de una sección real `id="projects"` bloquea el estado production-complete.
- La primera entrega puede mostrar el CTA con `href="#projects"`, pero debe quedar marcada como incremental.

---

## 3. Decision Log

| ID | Decisión | Owner | Fecha | Scope | Estado |
|---|---|---|---|---|---|
| D-01 | PRD-03 v1.3 es autoridad de producto | Marco Vega | 2026-08-20 | Hero | Aprobada |
| D-02 | El Hero usa single-theme dark | Marco Vega | 2026-08-20 | Hero visual y QA | Aprobada |
| D-03 | Gradación verde no destructiva del background derivado | Marco Vega | 2026-08-20 | Asset pipeline | Aprobada |
| D-04 | MP4 decorativo single-run, sin dependencia runtime de motion | Marco Vega | 2026-08-20 | Hero runtime | Aprobada |
| D-05 | `sharp` como dependencia de desarrollo | Marco Vega | 2026-08-20 | Derivados de assets | Aprobada |
| D-06 | Pest Browser para browser QA | Marco Vega | 2026-08-20 | PRD-03 QA | Aprobada |
| D-07 | Playwright solo como runtime de Pest Browser | Marco Vega | 2026-08-20 | PRD-03 QA | Aprobada |
| D-08 | Entrega incremental con `#projects` pendiente | Marco Vega | 2026-08-20 | Release | Aprobada |
| D-09 | `resumeHref` se limita al Hero | Marco Vega | 2026-08-20 | PRD-03 | Aprobada |
| D-10 | Reduced motion: desktop 3, tablet 2, mobile 1 | Marco Vega | 2026-08-20 | Hero visual | Aprobada |

Las decisiones anteriores autorizan el diseño y las dependencias, pero no autorizan instalarlas ni iniciar Fase 6 antes del GO.

---

## 4. Integración con el repositorio

### 4.1 Composición

```text
GET /
  -> routes/web.php
  -> portfolio/index
  -> PortfolioPage
  -> PortfolioLayout
     -> ThemeProvider
     -> LocaleProvider
        -> SkipLink
        -> Header
        -> main#main
           -> Hero
              -> HeroContent
              -> HeroVisual
```

`PortfolioLayout` continúa siendo dueño de providers, Header y `main#main`. `PortfolioPage` compone Hero como contenido. Hero no importa ni renderiza Header.

### 4.2 Archivos iniciales

```text
resources/js/components/hero/
├── hero.tsx
├── hero-content.tsx
└── hero-visual.tsx

resources/js/data/hero.ts
resources/images/hero/source/
resources/images/hero/generated/
```

La estructura es mínima y evolutiva. No es obligatorio crear un archivo por cada responsabilidad conceptual. `ErrorProjectile` puede ser local a `projectile-system.tsx` y Force Field puede permanecer dentro de `hero-visual.tsx` hasta que un lifecycle independiente justifique extraerlos.

### 4.3 Componentes

#### `Hero`

- Compone contenido editorial y visual.
- No administra Canvas, timeline ni trayectorias.
- Debe sobrevivir a un fallo del visual.

#### `HeroContent`

- Renderiza nombre, rol, descripción y CTAs.
- Consume `useLocale()`.
- Es la fuente semántica del Hero.
- No depende de Motion, Canvas ni viewport APIs.

#### `HeroVisual`

- Es un árbol decorativo con `aria-hidden="true"`.
- Mantiene bounds, clipping, aspect ratio y stacking.
- No contiene información indispensable.
- No consume locale.

#### `ProjectileSystem`

- Selecciona configuraciones por modo visual.
- Renderiza un componente compartido para los nueve labels.
- Coordina estados con `useHeroTimeline`.
- Nunca crea un componente distinto por label.

#### `MatrixRainCanvas`

- Solo renderiza atmósfera.
- Nunca transporta el significado editorial.
- Se pausa fuera de viewport y con el documento oculto.

#### `useHeroTimeline`

- Es la única autoridad de la coreografía.
- No usa un `setTimeout()` independiente por proyectil.
- No depende de locale.
- Controla pausa, reanudación, cleanup y single-run.

---

## 5. Contratos de datos

### 5.1 Props de página

El servidor determina la existencia del CV:

```ts
type PortfolioPageProps = {
    resumeHref: string | null;
};
```

Contrato:

- Ruta física: `/public/cv/curriculum.pdf`.
- URL pública: `/cv/curriculum.pdf`.
- Si no existe, `resumeHref` es `null` y no se renderiza CTA funcional.
- PRD-03 conecta este prop únicamente con Hero.
- Header y MobileNav quedan fuera de este SDD.

### 5.2 Copy editorial

```ts
type HeroCopy = {
    name: string;
    role: string;
    description: string;
    projectsLabel: string;
    resumeLabel: string;
    githubLabel: string;
};

const HERO_COPY: Record<Locale, HeroCopy> = ...;
```

Copy aprobado:

```text
ES:
Marco Vega
AI Engineer
Construyo aplicaciones de negocio y sistemas con IA. Combino desarrollo full stack con un enfoque en backend, Laravel y orquestación de agentes.
Ver proyectos
CV
GitHub

EN:
Marco Vega
AI Engineer
I build business applications and AI-powered systems. I combine full-stack development with a focus on backend engineering, Laravel, and agent orchestration.
View projects
Resume
GitHub
```

Links:

```text
Projects: #projects
CV: /cv/curriculum.pdf
GitHub: https://github.com/MarcoVegaR
```

Fase 6 integra el **CTA Projects**, el link GitHub y el CTA CV condicional. No implementa la sección Projects.

### 5.3 Coordenadas

```ts
type NormalizedPoint = {
    x: number; // 0..1
    y: number; // 0..1
};

type StopOffset = {
    x: number;
    y: number;
    depth: number;
};

type CollisionAnchorConfig = {
    desktop: NormalizedPoint;
    tablet: NormalizedPoint;
    mobile: NormalizedPoint;
};
```

Las coordenadas son relativas al scene container o al bounding box del personaje, nunca al viewport en píxeles.

### 5.4 Proyectiles

```ts
type ProjectileCategory =
    | 'engineering-failure'
    | 'system-failure';

type ProjectilePriority =
    | 'primary'
    | 'secondary'
    | 'easter-egg';

type VisualMode = 'desktop' | 'tablet' | 'mobile';

type ProjectileDefinition = {
    id: string;
    label: string;
    category: ProjectileCategory;
    priority: ProjectilePriority;
    trajectoryPreset: string;
    depth: number;
    delayMs: number;
    spawn: NormalizedPoint;
    stopOffset: StopOffset;
    visualModes: VisualMode[];
};
```

Catálogo inmutable:

```text
CODE BEFORE PROBLEM
NO DOMAIN MODEL
NO SPEC
PATCH CASCADE
OVERENGINEERING
QUEUE BACKLOG
DB POOL EXHAUSTED
HTTP 500
RACE CONDITION
```

No se traducen ni se sustituyen labels. Son vocabulario técnico visual aprobado y no copy editorial.

---

## 6. Assets y pipeline

### 6.1 Source of truth

```text
resources/images/hero/source/hero-character-marco-source.png
resources/images/hero/source/hero-background-source.png
```

Los PNG source se conservan intactos y se registran con SHA-256.

### 6.2 Derivados

```text
resources/images/hero/generated/
├── hero-character-*.webp
├── hero-character-*.avif
├── hero-background-*.webp
└── hero-background-*.avif
```

Los derivados aprobados se versionan para evitar que un cambio de encoder en deploy modifique la salida visual sin revisión. `sharp` se conserva como script reproducible, no como transformación implícita en cada build.

Dimensiones de composición aprobadas:

```text
background desktop: 1536x1024
background mobile: 576x1024, crop vertical del source
character desktop: 1199x1312
character mobile: 960x1050
```

### 6.3 Reglas

- El personaje puede redimensionarse y recodificarse, pero no regenerarse, deformarse ni recolorearse para alterar identidad.
- La gradación verde se aplica únicamente a derivados del background.
- El background y el character permanecen separados.
- Proyectiles, trails, force field, shockwaves, particles, disintegration, Matrix rain y parallax son runtime.
- El fondo conserva sus glyphs estáticos como textura atmosférica; Matrix rain runtime es una capa independiente y sutil.
- `<picture>` o equivalente debe reservar dimensiones y seleccionar derivados por viewport.
- El background mobile usa el crop vertical aprobado; no reutiliza el encuadre horizontal desktop.
- `fetchpriority` se decide después de medir LCP real.
- La transparencia del personaje se valida sobre el background final para detectar halos.

### 6.4 Targets iniciales

No son gates absolutos de bytes:

| Métrica | Target inicial |
|---|---:|
| Assets Hero desktop | <= 700 KB |
| Assets Hero mobile | <= 400 KB |
| Incremento JS Hero gzip | <= 50 KB |
| Canvas móvil | 30 FPS objetivo |
| Canvas DPR | <= 1.5 |

Los gates fuertes son LCP, CLS, INP, ausencia de long tasks atribuibles al Hero y fidelidad visual.

---

## 7. Stacking y responsabilidades visuales

```text
DigitalWorldLayer
MatrixRainCanvas / far atmosphere
background projectiles
ForceFieldBack
CharacterLayer
foreground projectiles
ForceFieldFront
ImpactParticles
foreground atmosphere
```

El visual debe permanecer por debajo del Header sticky y del SkipLink. Ninguna capa puede capturar pointer events ni impedir interacción con Header o CTAs.

Paleta semántica scoped al Hero:

```text
world/system: black + Matrix green
Marco/control: electric blue
engineering failure: amber/orange
system failure: coral/red
```

No se reutiliza `--accent` global para Matrix green.

---

## 8. Motion y lifecycle

### 8.1 Tecnología

| Tecnología | Responsabilidad |
|---|---|
| Motion | transforms, opacity, trayectoria, braking, timeline |
| SVG | trails, force field, shockwaves, rings, particles seleccionadas |
| Canvas 2D | Matrix rain y atmósfera de alta cantidad |
| CSS | layout, glow, blur, gradients y compositing |
| Raster | character y background únicamente |

Se usará `LazyMotion`/`motion/react-m` cuando reduzca bundle sin complicar el fallback. Toda API concreta debe verificarse contra la versión instalada.

### 8.2 Estados de proyectil

```text
HIDDEN
→ APPROACHING
→ BRAKING
→ SUSPENDED
→ DISINTEGRATING
→ DONE
```

`DISINTEGRATING` se implementa en Fase 8 como:

```text
label → fragments → drift → fade → DONE
```

La absorción visual en Matrix se añade en Fase 10.

### 8.3 Timeline global

```text
IDLE_INITIAL
→ ACT_1
→ ACT_2
→ ACT_3
→ BRAKING
→ IMPACT
→ SUSPENDED
→ RESOLVING
→ IDLE_AFTER
```

`STOP` no es un estado global ni un componente:

```text
BRAKING
    ↓
 [STOP]  timeline marker/event
    ↓
IMPACT
```

La desaceleración debe hacer perceptible el STOP antes de que actúe el Force Field.

### 8.4 Timeline aprobado

| Tiempo | Evento |
|---:|---|
| 0–500 ms | Hero legible / `IDLE_INITIAL` |
| 500–900 ms | Ambiente sutil |
| 900 ms | `CODE BEFORE PROBLEM` |
| 1100 ms | `NO DOMAIN MODEL` |
| 1300 ms | `NO SPEC` |
| 1750 ms | `PATCH CASCADE` |
| 2000 ms | `OVERENGINEERING` |
| 2350 ms | Palm glow mínimo |
| 2500 ms | `QUEUE BACKLOG` |
| 2700 ms | `DB POOL EXHAUSTED` |
| 2900 ms | `HTTP 500` |
| 3050 ms | `RACE CONDITION` |
| 3050–3650 ms | Convergencia |
| 3650–3950 ms | Braking extremo |
| 3950 ms | STOP / IMPACT |
| 3950–4200 ms | Shockwave |
| 4200–4900 ms | Suspension |
| 4900–5700 ms | Disintegration |
| 5700–6000 ms | Absorption |
| 6000+ ms | `IDLE_AFTER` |

### 8.5 Single-run

Una ejecución por lifecycle de `PortfolioPage`:

- locale change no reinicia;
- resize no reinicia;
- salir y volver al viewport no reinicia;
- no se usa localStorage, sessionStorage ni cookies;
- abandonar la Home y montar una nueva `PortfolioPage` permite una nueva ejecución;
- cleanup desmonta Motion, observers, RAF y listeners.

El locale actual solo cambia `HeroContent`. `HeroVisual` y `useHeroTimeline` no dependen de locale ni usan `key={locale}`.

### 8.6 Visibility y resize

- Antes de iniciar, el Hero debe estar visible y los assets críticos disponibles.
- Si el documento se oculta, la actividad se pausa o degrada.
- Al volver, la ejecución continúa, no reinicia.
- El projectile set se fija al comenzar el run.
- Un resize durante el run conserva ese set hasta `IDLE_AFTER`.
- En `IDLE_AFTER`, la composición se reconcilia al nuevo breakpoint.
- En cualquier momento `HeroVisual` aplica clipping interno y `document.scrollWidth` nunca supera `document.clientWidth` por la escena.

### 8.7 Reduced motion

No se comprime la coreografía normal. Se monta una escena deliberada:

| Viewport | Proyectiles estáticos contenidos |
|---|---|
| Desktop | `NO SPEC`, `HTTP 500`, `RACE CONDITION` |
| Tablet | `NO SPEC`, `HTTP 500` |
| Mobile | `HTTP 500` |

También conserva background, Marco y residual field tenue. No hay trayectorias rápidas, shockwave intensa, desintegración rápida, parallax significativo ni Canvas agresivo.

Si el sistema operativo cambia a reduced motion durante el run:

```text
cancel active Motion
stop/reduce Canvas
mount reduced scene
do not replay when preference returns
```

---

## 9. Responsive modes

Los breakpoints son:

```text
mobile: < 640px
tablet: 640px–1023px
desktop: >= 1024px
```

| Mode | Projectile set |
|---|---|
| Desktop | 9 |
| Tablet | `NO SPEC`, `NO DOMAIN MODEL`, `OVERENGINEERING`, `HTTP 500`, `QUEUE BACKLOG`, `RACE CONDITION` |
| Mobile | `NO SPEC`, `HTTP 500`, `QUEUE BACKLOG`, `RACE CONDITION` |

Cada modo puede ajustar character scale/position, anchor, spawn points, trail length, font size, Matrix density, particle count, stop offsets y crop. Mobile no se obtiene escalando el desktop completo.

Composición estática aprobada para la Fase 6:

```text
desktop: copy dominante + Marco lower-right reducido al 94–96%
tablet: copy primero + Marco lower-right al 72–80%
mobile: copy primero + Marco lower-right al 52–58%
```

En mobile el contenido editorial se alinea arriba y la escena ocupa el espacio inferior. Rostro y palma deben conservarse completos; puede sacrificarse parte de la chaqueta, pero no el área necesaria para `CollisionAnchor`.

---

## 10. Accesibilidad y fallback

- `HeroContent` contiene el único `h1` de la Home.
- `HeroVisual` tiene `aria-hidden="true"`.
- Las imágenes dentro del wrapper decorativo no aportan alt informativo.
- Los proyectiles nunca son links, botones, tooltips ni elementos focusables.
- Los CTAs son links nativos y conservan orden lógico de teclado.
- El focus visible global se respeta.
- No hay interacción obligatoria de mouse, hover, pointer o touch.
- La información esencial permanece si Motion, SVG, Canvas o CSS avanzado fallan.
- El visual se protege para que un fallo de render no desmonte el contenido editorial.
- El `CollisionAnchor` es invisible en producción y solo se expone en modo debug.
- Debe revisarse contraste WCAG 2.2 AA para copy, CTA y colores semánticos.
- No se introducen flashes intensos o secuencias que comprometan la seguridad visual.

---

## 11. QA y gates

### 11.1 Gate 0 — Pre-implementation

- [ ] PRD-01/PRD-02 single-theme reconciliation completada.
- [ ] Baseline green comprobado fuera de PRD-03.
- [ ] SDD-03 aprobado.
- [ ] Handoff físico actualizado a PRD-03 v1.3.
- [ ] Sources disponibles y SHA-256 registrado.
- [ ] Tratamiento verde del background aprobado.
- [ ] `motion` autorizado y versión definida.
- [ ] `sharp` autorizado y pipeline definido.
- [ ] Pest Browser y Playwright runtime autorizados.
- [ ] `#projects` identificado como dependencia release.
- [ ] Estado CV conocido.

### 11.2 Gate 6 — Static Hero

- [ ] Copy, identity y CTAs visibles sin esperar coreografía.
- [ ] Un único H1.
- [ ] Character conserva aspect ratio, rostro y palma.
- [ ] Desktop character queda entre 94–96% y no domina el copy.
- [ ] Mobile usa composición copy-first con character lower-right entre 52–58%.
- [ ] Background separado.
- [ ] Anchor alineado en debug.
- [ ] Desktop/tablet/mobile sin overflow.
- [ ] Visual decorativo.
- [ ] Fallback editorial usable.

### 11.3 Gate 7 — Projectile Prototype

- [ ] Solo `HTTP 500`.
- [ ] Trayectoria y aceleración legibles.
- [ ] Braking perceptible.
- [ ] STOP antes de palm contact.
- [ ] Suspended state estable.
- [ ] Sin layout thrashing.

### 11.4 Gate 8 — Projectile System

- [ ] Nueve proyectiles en desktop.
- [ ] Configuración data-driven.
- [ ] Tres actos.
- [ ] Jerarquía y colores correctos.
- [ ] `RACE CONDITION` diferencial.
- [ ] `PATCH CASCADE` y `OVERENGINEERING` sin caricatura.
- [ ] DISINTEGRATING funciona sin Canvas.

### 11.5 Gate 9 — Force Field & Impact

- [ ] Palm glow previo.
- [ ] Shockwave responde después de STOP.
- [ ] Force field no permanente.
- [ ] Efectos no cubren rostro, palma ni copy.

### 11.6 Gate 10 — Matrix Atmosphere

- [ ] Rain no domina tipografía.
- [ ] Menor densidad detrás del copy.
- [ ] Canvas pausa fuera de viewport.
- [ ] Tab hidden reduce/pausa actividad.
- [ ] Fragments pueden absorberse visualmente en Matrix.

### 11.7 Gate 11 — Depth

- [ ] Parallax mínimo.
- [ ] Touch no depende de pointer.
- [ ] Sin mareo ni lectura de minijuego.

### 11.8 Gate 12 — Responsive / Reduced Motion

- [ ] Desktop 9.
- [ ] Tablet 6 aprobados.
- [ ] Mobile 4 aprobados.
- [ ] Reduced motion desktop 3, tablet 2, mobile 1.
- [ ] Cambio dinámico a reduced motion estabiliza la escena.
- [ ] Resize durante run no produce overflow.
- [ ] Mobile no es desktop escalado.

### 11.9 Gate 13 — Release

Automated/static:

```text
composer ci:check
npm run build
npm run build:ssr
php artisan test --compact
```

Browser QA, usando únicamente Pest Browser con Playwright runtime:

- smoke y JavaScript errors;
- locale sin replay;
- single-theme dark y ausencia de ThemeToggle visible;
- links y CV conditional;
- 9/6/4 projectiles;
- reduced motion;
- resize y no document overflow;
- keyboard/focus;
- visual fuera del accessibility tree;
- single-run e `IDLE_AFTER`;
- screenshots sobre reduced motion.

Manual/performance:

- QA visual de assets y composición;
- LCP, CLS e INP;
- long tasks;
- runtime smoothness;
- Canvas pause/resume;
- asset sizes y fidelidad de derivados;
- contraste y zoom/reflow;
- validación final del target real `#projects`.

### 11.10 Verificación SSR

Antes de browser QA se debe ejecutar `npm run build:ssr` y reconstruir cualquier bundle local obsoleto. El smoke SSR debe comprobar:

- Hero presente en HTML SSR;
- copy español inicial;
- un único H1;
- CTA `#projects`;
- GitHub correcto;
- documento single-theme dark;
- Header antes de `main#main`;
- sin ThemeToggle visible;
- sin errores de hydration.

La transición SSR español a locale persistido en inglés queda registrada como limitación heredada aceptada. PRD-03 no reimplementa locale.

---

## 12. Fases de implementación

La numeración oficial permanece intacta:

```text
Fase 6  Static Hero
Fase 7  Projectile Prototype
Fase 8  Projectile System
Fase 9  Force Field & Impact
Fase 10 Matrix Atmosphere
Fase 11 2.5D / Parallax
Fase 12 Responsive & Reduced Motion
Fase 13 Performance & QA
```

### Fase 6 — Static Hero

Implementar Hero, HeroContent, HeroVisual, background, character, CollisionAnchor, copy ES/EN, CTA Projects, GitHub, CV condicional y responsive base. No integrar la sección Projects.

### Fase 7 — Projectile Prototype

Implementar solo `HTTP 500` con `HIDDEN → APPROACHING → BRAKING → SUSPENDED`. El controller mínimo comienza aquí. No implementar los otros ocho proyectiles.

### Fase 8 — Projectile System

Generalizar mediante dataset, presets, tres actos, timeline completo, subsets 9/6/4 y `DISINTEGRATING` base sin depender de Canvas.

### Fase 9 — Force Field & Impact

Conectar el marker STOP con impacto, palm glow, ForceFieldBack, ForceFieldFront, shockwaves, particles y residual state.

### Fase 10 — Matrix Atmosphere

Añadir Canvas 2D, densidad responsive, lifecycle de visibilidad e integración visual de fragments con Matrix.

### Fase 11 — 2.5D / Parallax

Añadir profundidad mínima entre background, character, projectiles y foreground effects, sin WebGL ni pointer dependency.

### Fase 12 — Responsive & Reduced Motion

Calibrar desktop/tablet/mobile y la escena reduced motion fijada en este SDD.

### Fase 13 — Performance & QA

Ejecutar gates automatizados, SSR, browser QA, validación manual visual, accesibilidad y performance.

### Reglas de ejecución

```text
NO implementar 9 proyectiles durante Fase 7.
NO añadir Matrix rain antes de aprobar STOP.
NO añadir parallax antes de aprobar Force Field.
NO crear una suite Playwright paralela.
NO regenerar sources aprobados.
NO introducir otra librería de animación.
NO modificar Header para CV desde PRD-03.
NO tratar targets de bytes como gates absolutos sin medición.
NO considerar release completo sin #projects real.
```

---

## 13. GO checklist

## 13. Enmienda Video-First R1

Las secciones heredadas de Fases 1-5 que describen `motion`, Canvas, proyectiles, trayectorias, force field, parallax o física runtime quedan superseded y no son requisitos de esta implementación. Los PNG y derivados antiguos se conservan como fallback/referencia hasta una aprobación visual posterior.

Gate R1-A queda satisfecho con:

- [x] MP4 H.264, 1280x720, 24 FPS, yuv420p, sin audio y faststart; preview actual conserva 8.00 s completos.
- [x] Initial poster desktop extraído del MP4 R1.
- [x] Final still desktop extraído del MP4 R1.
- [x] Final still tablet y mobile art-directed.
- [x] Manifiesto documental actualizado.

El estado anterior queda reemplazado por:

```text
SDD-03: Video-First Hybrid R1 aprobado
Implementación Hero: Fase 6/7 en curso
Fase 6: habilitada
```
