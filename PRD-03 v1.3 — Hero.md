# PRD-03 — Hero

## 1. Metadata

- **Estado:** Video-First Hybrid R1 en implementación
- **Versión:** 1.3
- **Fecha:** 2026-08-19
- **Autor / Product Owner:** Marco Vega
- **Proyecto:** Portfolio personal Marco Vega
- **Módulo:** Home / Hero
- **Prioridad:** Alta
- **Agente objetivo:** Agente IA de desarrollo frontend
- **Repositorio:** `MarcoVegaR/portfolio-mvr`
- **Rama:** Pendiente de definir
- **Documentos relacionados:** PRD-01, PRD-02, SDD-03, `hero_fase_4_motion_storyboard.md`, `hero_fase_5_technical_spec.md`, `hero_asset_manifest.md`, `hero_execution_plan_phases_6_13.md`, `hero_qa_gate_matrix.md`

---

## 2. Resumen ejecutivo

El PRD-03 define la sección **Hero** del portfolio personal de Marco Vega. Esta sección será la primera presentación editorial, visual y narrativa del sitio, ubicada al inicio de la página principal, inmediatamente después del Header.

El Hero debe permitir que un recruiter, entrevistador técnico o visitante entienda rápidamente quién es Marco Vega, cuál es su posicionamiento profesional actual, qué tipo de software construye y cuál es la acción principal que debe tomar para comprobar esa afirmación.

La funcionalidad debe presentar a Marco Vega como **AI Engineer**, con una propuesta de valor clara: construye aplicaciones de negocio y sistemas con IA, combinando desarrollo full stack con un enfoque en backend, Laravel y orquestación de agentes.

El HeroVisual será una **escena cinematográfica y animada**, Matrix-inspired pero original, en la que Marco aparece dentro de un sistema digital y contiene frente a su palma:

1. fallos reales del sistema;
2. malas prácticas / fallos de ingeniería.

La metáfora aprobada es:

```txt
malas decisiones de ingeniería
        ↓
complejidad acumulada
        ↓
fallos del sistema
        ↓
control / contención / criterio técnico
```

El CTA principal debe dirigir a Projects. El CTA secundario debe enlazar al CV en `/cv/curriculum.pdf`, siempre que el asset exista. El enlace profesional terciario debe apuntar al perfil de GitHub.

### Enmienda Video-First R1

La revisión visual actual usa el MP4 completo de `8.00 s` en desktop y posters WebP seleccionados por `<picture>` antes de hydration. El MP4 es H.264, 1280x720, 24 FPS, yuv420p, sin audio y faststart. Tablet, mobile, reduced motion y Save-Data usan el still final y nunca montan el video. El recorte menor de cinco segundos queda pendiente de la aprobación narrativa final.

WebM, AVIF, tuning adicional y profiling de red quedan para R1-B. No se crea un `manifest.json` runtime público.

Este PRD, junto con la enmienda Video-First R1 y el Gate R1-A, habilita la implementación de Fases 6 y 7. Las decisiones runtime de las fases anteriores quedan superseded.

---

## 3. Problema que resuelve

El portfolio ya cuenta con foundation, layout, locale y navegación base definidos en PRDs anteriores. Sin embargo, todavía falta una primera sección que comunique de forma inmediata el posicionamiento profesional de Marco Vega y que traduzca visualmente su criterio de trabajo.

Sin un Hero claro, el visitante puede entrar al portfolio y no entender rápidamente:

- quién es Marco Vega;
- cuál es su rol profesional actual;
- qué tipo de software construye;
- cuál es su base técnica;
- qué clase de problemas sabe contener;
- dónde puede comprobar lo que afirma;
- cómo acceder a su CV o perfil técnico.

El problema no es crear un banner decorativo. El problema es construir una primera impresión profesional que combine claridad editorial, evidencia verificable y una metáfora visual consistente con el perfil de AI Engineer.

El Hero debe comunicar que Marco no solo “usa IA”, sino que aplica criterio, especificación, arquitectura y control para evitar que malas prácticas, falta de especificación, sobreingeniería o fallos sistémicos atraviesen la construcción de software.

---

## 4. Objetivos

### Objetivo principal

Construir una sección Hero que presente de forma clara, breve y verificable a Marco Vega como **AI Engineer que construye aplicaciones de negocio y sistemas con IA**, con enfoque en backend, Laravel y orquestación de agentes, guiando al visitante hacia Projects como evidencia principal.

### Objetivos secundarios

- Mostrar nombre, rol profesional y propuesta de valor en el primer viewport.
- Mantener una jerarquía clara entre CTA primario, CTA secundario y enlace profesional.
- Integrar el Hero con locale y layout existentes sin reimplementar infraestructura global.
- Soportar español e inglés sin Spanglish.
- Implementar una identidad visual single-theme oscura Matrix-inspired.
- Representar visualmente fallos de software y malas prácticas de ingeniería como proyectiles contenidos por Marco.
- Mantener el HeroVisual subordinado al mensaje editorial.
- Evitar claims genéricos, seniority autoasignado, listas excesivas de tecnologías o enlaces falsos.
- Incorporar decisiones cerradas de Fases 1–5 sin reabrirlas durante coding.
- Preparar el alcance funcional para que SDD-03 concrete estructura técnica, semántica exacta, rutas, tipos, coordenadas, performance budget, integración con el repositorio y QA.

### Criterios de éxito de producto

- El visitante puede identificar nombre, rol y propuesta profesional sin hacer scroll.
- El visitante entiende que Marco Vega construye aplicaciones de negocio y sistemas con IA.
- El CTA principal hacia Projects es visualmente dominante.
- El CTA de CV no se renderiza como link funcional si el archivo `/public/cv/curriculum.pdf` no existe.
- El enlace al CV funciona al colocar un archivo en `/public/cv/curriculum.pdf`.
- El Hero funciona correctamente en desktop, tablet y mobile.
- El Hero utiliza una única identidad visual oscura aprobada.
- El Hero no depende del visual narrativo para transmitir información esencial.
- El HeroVisual refuerza la idea de control técnico, contención de fallos y criterio de ingeniería.
- La experiencia reduced motion ofrece una variante estática deliberada, no una versión rota o vacía.

---

## 5. Usuarios y roles involucrados

### Visitante recruiter

Usuario principal. Necesita entender rápidamente el perfil profesional de Marco Vega y acceder a evidencia relevante.

### Entrevistador técnico

Usuario secundario. Busca validar claims técnicos revisando Projects, GitHub y CV.

### Marco Vega

Product Owner del portfolio. Necesita poder actualizar el archivo del CV reemplazando `/public/cv/curriculum.pdf` sin modificar código.

### Agente IA de desarrollo

Responsable de implementar posteriormente el Hero siguiendo PRD-03 v1.3 y SDD-03 actualizado, sin asumir decisiones fuera del alcance.

---

## 6. Alcance funcional

La primera versión de PRD-03 v1.3 incluye:

- Sección `Hero` integrada en la página principal del portfolio.
- Nombre visible: `Marco Vega`.
- Rol profesional visible: `AI Engineer`.
- Propuesta de valor en español e inglés.
- CTA primario hacia Projects.
- CTA secundario hacia `/cv/curriculum.pdf`, condicionado a existencia del asset.
- Enlace terciario hacia perfil de GitHub.
- HeroVisual narrativo Matrix-inspired con personaje aprobado de Marco.
- Background digital Matrix-inspired como asset separado.
- MP4 decorativo single-run con STOP narrativo y estado posterior final-still.
- Poster inicial desktop y final still desktop/tablet/mobile.
- Lifecycle loading, playing, final-still y fallback con pausa al ocultar la pestaña.
- Variante reduced motion estática deliberada seleccionada antes de hydration.
- Responsive art-directed sin solicitar MP4 en tablet o mobile.
- Single-theme oscuro para el portfolio.
- Soporte para locale `es` y `en` usando la infraestructura existente.
- Layout responsive desktop/tablet/mobile.
- Accesibilidad WCAG 2.2 AA como baseline.
- Uso de anchors/enlaces reales, sin destinos falsos para release.
- MP4 decorativo single-run con fallback estático y lifecycle accesible.

---

## 7. Fuera de alcance

Queda fuera de PRD-03:

- About completo.
- Core Stack.
- Experience timeline.
- Projects cards.
- Case studies.
- Contact form.
- Footer.
- Scroll spy del Header.
- Nueva lógica de locale.
- Nueva arquitectura global.
- Implementar CMS.
- Crear o generar el archivo real del CV.
- LinkedIn.
- Estado de disponibilidad en el Hero.
- `HeroStatus`.
- Métricas de impacto no verificadas.
- Seniority autoasignado como `Senior AI Engineer`.
- Nubes de tecnologías o tech badges dentro del Hero.
- Copy genérico tipo “passionate developer”, “building the future” o “turning ideas into reality”.
- Recrear de forma literal Matrix, Neo, símbolos, personajes, marcas o diseños propietarios.
- Regenerar el personaje aprobado de Marco durante implementación.
- Fusionar character asset y background asset en una sola imagen.
- Hornear los labels de errores dentro de las imágenes raster.
- Hornear el force field dentro de los assets raster.
- Convertir proyectiles en links, badges, tooltips o elementos interactivos.
- Introducir interacciones pointer/hover/click innecesarias en los proyectiles.
- Crear un minijuego.
- Implementar una versión light/dark del Hero.
- Reabrir decisiones aprobadas de Fases 1–5 durante coding.
- Cambiar el catálogo de proyectiles durante implementación.
- Cambiar la coreografía de tres actos durante implementación.
- Cambiar el modelo single-run durante implementación.
- Cambiar la ruta reduced motion aprobada durante implementación.
- Instalar Three.js, GSAP, Rive, Lottie, Pixi, Babylon, particle libraries o motores WebGL sin aprobación explícita posterior.

---

## 8. Contexto del sistema actual

PRD-03 debe integrarse en una arquitectura ya iniciada por PRD-01 y PRD-02.

El sistema actual contempla:

- `PortfolioPage`;
- `PortfolioLayout`;
- `Header`;
- `main#main`;
- `PageContainer`;
- locale `es | en`;
- semantic tokens;
- brand tokens;
- navegación global;
- controles globales definidos previamente.

### Decisión global cerrada: single-theme oscuro

El portfolio adopta una **identidad visual single-theme oscura**.

Esto significa:

```txt
El portfolio completo pasa a una única identidad visual oscura.
Theme deja de ser una capacidad visible de producto.
```

Esta decisión no queda como pregunta abierta crítica. Queda como **dependencia documental bloqueante para implementación**.

Antes de iniciar Fase 6, PRD-01 y PRD-02 deben reconciliarse con single-theme. Esto incluye revisar, retirar, ocultar o marcar como deprecated:

- `ThemeToggle`;
- experiencia light/dark visible;
- criterios de aceptación asociados al cambio de theme;
- tests obligatorios de ambos themes;
- cualquier instrucción que obligue al Hero a responder a light/dark.

Si Header sigue ofreciendo cambio light/dark mientras Hero exige single-theme oscuro, existe conflicto de producto. El agente IA no debe resolver ese conflicto por cuenta propia.

### Integración esperada

La estructura conceptual esperada es:

```txt
PortfolioPage
└── PortfolioLayout
    ├── Header
    └── main#main
        └── Hero
```

El Hero debe responder al locale global existente:

```txt
locale = es | en
```

pero no debe controlar ese estado.

El Hero debe reutilizar `PageContainer` cuando corresponda a la geometría horizontal del contenido. No debe crear otro sistema paralelo de max-width, gutters o container sin justificación técnica en SDD-03.

---

## 9. Playbooks aplicados al PRD

### Product Discovery / PRD Base

Activo. El PRD define problema, objetivo, alcance, fuera de alcance, usuarios, riesgos, decisiones confirmadas y condición de GO.

### Frontend / UX

Activo. El Hero es una sección visual con jerarquía editorial, CTA, responsive, accesibilidad, composición desktop/tablet/mobile y narrativa visual.

### Backend / API / Reglas

No activo. PRD-03 no introduce endpoints, CRUD, servicios backend ni reglas transaccionales.

### Data / Modelo conceptual

Activo en modo ligero. El Hero requiere contrato conceptual de contenido bilingüe, rutas/enlaces definidos, assets aprobados y catálogo de proyectiles.

### Seguridad / Roles / Trazabilidad

No activo. No hay login, permisos, datos sensibles ni acciones críticas.

### QA / Acceptance

Activo. Se requieren criterios verificables, casos borde, testing responsive, accesibilidad, locale, performance, reduced motion y validación visual.

### DevOps / Integraciones / Operación

Activo en modo ligero. Aplica por performance, build, CI, dependencia `motion`, animación, Canvas 2D, pausa fuera de viewport y asset optimization.

---

## 10. Requisitos funcionales

### RF-001 — Renderizar sección Hero

Como visitante del portfolio, quiero ver una sección Hero al inicio de la página para entender rápidamente quién es Marco Vega y por qué debería seguir explorando el sitio.

### RF-002 — Mostrar identidad profesional

Como visitante, quiero ver el nombre `Marco Vega` y el rol `AI Engineer` para identificar inmediatamente al propietario del portfolio y su posicionamiento actual.

### RF-003 — Mostrar propuesta de valor

Como visitante, quiero leer una descripción breve y concreta para entender que Marco Vega orquesta agentes de IA para construir aplicaciones de negocio y sistemas asistidos por IA, con base Full Stack y mayor profundidad en backend/Laravel.

### RF-004 — Soportar contenido en español e inglés

Como visitante, quiero que el Hero se muestre en el idioma seleccionado para evitar mezcla de idiomas y mantener coherencia con el resto del portfolio.

### RF-005 — Incluir CTA primario hacia Projects

Como visitante, quiero acceder directamente a Projects desde el Hero para comprobar la evidencia principal del posicionamiento profesional.

### RF-006 — Incluir CTA secundario hacia CV

Como visitante, quiero acceder al CV desde el Hero para revisar credenciales profesionales en formato PDF.

### RF-007 — Referenciar CV mediante ruta estable

Como Marco Vega, quiero que el CTA de CV apunte a `/cv/curriculum.pdf` para poder actualizar el documento reemplazando `/public/cv/curriculum.pdf` sin modificar código.

### RF-008 — Condicionar CTA de CV a existencia del asset

Como visitante, quiero que el Hero no muestre un enlace funcional falso al CV si el archivo real todavía no existe.

### RF-009 — Incluir enlace profesional a GitHub

Como visitante técnico, quiero acceder al perfil de GitHub de Marco Vega para revisar evidencia técnica adicional.

### RF-010 — Implementar HeroVisual narrativo no crítico

Como visitante, quiero ver una escena visual memorable en la que Marco contenga fallos de software y malas prácticas de ingeniería dentro de un sistema digital, para reforzar visualmente su enfoque de control, criterio y construcción de sistemas sin que esa escena sea necesaria para comprender su identidad profesional.

### RF-011 — Usar assets visuales aprobados y separados

Como equipo de producto, quiero que el personaje aprobado de Marco y el background digital aprobado permanezcan como assets separados para preservar control visual, performance, layering, responsive y capacidad de animación.

### RF-012 — Renderizar proyectiles como elementos runtime

Como visitante, quiero que los fallos y malas prácticas aparezcan como elementos animados del sistema, no como texto horneado dentro de las imágenes, para que la escena pueda coreografiarse y adaptarse por viewport.

### RF-013 — Ejecutar coreografía inicial en tres actos

Como visitante, quiero ver una secuencia inicial controlada en tres actos, donde los proyectiles convergen hacia la palma de Marco, desaceleran, quedan contenidos y se integran nuevamente al sistema.

### RF-014 — Mantener STOP como clímax visual

Como visitante, quiero que el momento de contención se perciba principalmente por desaceleración, suspensión e impacto visual controlado frente a la palma de Marco.

### RF-015 — Mantener estado posterior no intrusivo

Como visitante, quiero que después de la coreografía principal la escena permanezca en un estado ambiental de bajo movimiento, sin repetir continuamente la secuencia completa.

### RF-016 — Soportar variante reduced motion deliberada

Como usuario con reducción de movimiento activada, quiero recibir una versión estática o casi estática de la escena, sin trayectorias rápidas, shockwaves intensas, desintegración rápida ni parallax significativo.

### RF-017 — Respetar single-theme oscuro

Como visitante, quiero que el Hero use una identidad visual oscura Matrix-inspired consistente, sin depender de una variante light/dark.

### RF-018 — Respetar responsive

Como visitante mobile, tablet o desktop, quiero que el Hero mantenga jerarquía, legibilidad, performance y metáfora visual en distintos tamaños de pantalla.

### RF-019 — Mantener accesibilidad WCAG 2.2 AA

Como usuario de teclado, lector de pantalla o usuario con sensibilidad al movimiento, quiero que el Hero sea navegable, legible y compatible con tecnologías asistivas.

---

## 11. Reglas de negocio

### RN-001 — Rol principal único

El Hero debe presentar `AI Engineer` como rol principal. No debe usar `Senior AI Engineer`, `Full Stack Developer`, `Backend Developer` o combinaciones de múltiples títulos como encabezado principal.

### RN-002 — Full Stack como background

La base Full Stack debe aparecer dentro de la propuesta de valor, no como segundo título profesional equivalente al rol principal.

### RN-003 — Backend/Laravel como profundidad

Backend y Laravel deben comunicarse como profundidad técnica, no como inventario de tecnologías ni como lista de badges.

### RN-004 — Projects como acción primaria

El CTA hacia Projects debe tener mayor jerarquía visual que CV y GitHub.

### RN-005 — CV como acción secundaria condicionada

El CTA de CV debe apuntar a `/cv/curriculum.pdf`, pero solo debe renderizarse como acción funcional cuando exista el asset real en `/public/cv/curriculum.pdf`.

### RN-006 — Comportamiento del CV

Cuando el asset exista, el enlace del CV debe abrir en nueva pestaña usando atributos seguros. No se requiere comportamiento `download` obligatorio.

### RN-007 — GitHub como acción terciaria

El enlace a GitHub debe apuntar al perfil:

```txt
https://github.com/MarcoVegaR
```

No debe apuntar al repositorio del portfolio desde el Hero.

### RN-008 — LinkedIn fuera de alcance

No debe mostrarse LinkedIn en esta versión.

### RN-009 — Disponibilidad fuera del Hero

El Hero no debe mostrar `Disponible para oportunidades`, `Open to opportunities` ni un componente `HeroStatus`. La disponibilidad corresponde a Contact u otra sección futura explícitamente aprobada.

### RN-010 — No fake links

No deben renderizarse enlaces funcionales sin destino real definido para release. Durante desarrollo incremental puede existir un contrato de anchor futuro, pero production-complete exige target real.

### RN-011 — `#projects` como contrato incremental

El CTA primario debe exponer `href="#projects"`. Para considerar PRD-03 production-complete, debe existir una sección real con `id="projects"` o debe quedar reportada como dependencia no resuelta.

### RN-012 — No copy genérico

El Hero no debe usar frases genéricas o no verificables como:

```txt
Passionate developer
Building the future
Turning ideas into reality
Creating innovative solutions
```

### RN-013 — No tech wall

El Hero no debe incluir una nube de tecnologías como Laravel, PHP, React, TypeScript, PostgreSQL, Docker, Redis, MCP u otras. Esa responsabilidad corresponde a Core Stack.

### RN-014 — HeroVisual subordinado al contenido

El HeroVisual puede reforzar identidad visual y narrativa profesional, pero no puede transportar información indispensable.

### RN-015 — No dependencia de animación

Si las animaciones están desactivadas, fallan o no cargan, el usuario debe seguir pudiendo entender nombre, rol, propuesta de valor y CTAs disponibles.

### RN-016 — Single-theme oscuro

El Hero utiliza una única identidad visual oscura Matrix-inspired. No debe implementar una variante light/dark propia.

### RN-017 — Semántica cromática aprobada

El PRD fija la semántica cromática de producto, aunque los valores HEX finales correspondan a SDD/tokens:

- **Sistema / mundo:** negro + verde Matrix-inspired.
- **Marco / control:** azul eléctrico.
- **Fallos de ingeniería / malas prácticas:** ámbar / naranja.
- **Fallos reales del sistema:** coral / rojo.

### RN-018 — Assets aprobados no se regeneran

La identidad facial, pose, personaje aprobado, ropa Matrix-inspired y palma extendida no deben regenerarse durante implementación.

### RN-019 — Character asset aprobado

El character asset aprobado es:

```txt
hero-character-marco-source.png
```

Contrato:

- rostro aprobado;
- ropa Matrix-inspired;
- palma extendida;
- transparencia;
- no regenerar;
- no deformar;
- no alterar aspect ratio;
- no hornear errores;
- no hornear force field.

### RN-020 — Background asset aprobado

El background asset aprobado es:

```txt
hero-background-source.png
```

Contrato:

- mundo digital Matrix-inspired;
- asset independiente;
- no contiene Marco;
- no contiene proyectiles;
- no contiene UI del portfolio;
- Matrix rain permanece runtime.

### RN-021 — Character y background separados

El personaje de Marco y el background digital deben permanecer como capas/assets separados. No deben fusionarse en una sola imagen si eso impide animación, layering, responsive o performance.

### RN-022 — Proyectiles runtime

Los errores, labels y proyectiles no deben formar parte permanente de los assets raster. Deben renderizarse como elementos runtime.

### RN-023 — Catálogo definitivo de proyectiles

La primera versión usa este catálogo definitivo de 9 proyectiles.

#### Fallos del sistema

- `HTTP 500`
- `RACE CONDITION`
- `QUEUE BACKLOG`
- `DB POOL EXHAUSTED`

#### Fallos de ingeniería / malas prácticas

- `CODE BEFORE PROBLEM`
- `NO DOMAIN MODEL`
- `NO SPEC`
- `PATCH CASCADE`
- `OVERENGINEERING`

### RN-024 — Significado de los proyectiles

Cada proyectil representa una idea concreta:

- `HTTP 500`: fallo reconocible del sistema / producción.
- `RACE CONDITION`: concurrencia, sincronización y control de estado.
- `QUEUE BACKLOG`: colas, workers, throughput y procesamiento async bajo carga.
- `DB POOL EXHAUSTED`: agotamiento operativo de conexiones/recursos backend.
- `CODE BEFORE PROBLEM`: empezar a programar antes de comprender el problema.
- `NO DOMAIN MODEL`: implementar sin entender dominio, reglas, eventos y relaciones.
- `NO SPEC`: vibecoding o implementación sin contratos, restricciones y criterios definidos.
- `PATCH CASCADE`: parche tras parche hasta perder comprensión del sistema.
- `OVERENGINEERING`: introducir más complejidad de la necesaria.

### RN-025 — Coreografía aprobada en tres actos

La coreografía principal ocurre una sola vez y se organiza así:

#### Acto 1

```txt
CODE BEFORE PROBLEM
NO DOMAIN MODEL
NO SPEC
```

#### Acto 2

```txt
PATCH CASCADE
OVERENGINEERING
```

#### Acto 3

```txt
QUEUE BACKLOG
DB POOL EXHAUSTED
HTTP 500
RACE CONDITION
```

### RN-026 — Secuencia de clímax aprobada

El clímax visual debe seguir esta progresión:

```txt
BRAKING
↓
STOP
↓
IMPACT
↓
SUSPENSION
↓
DISINTEGRATION
↓
IDLE_AFTER
```

### RN-027 — STOP como clímax

El STOP debe venderse principalmente mediante desaceleración. No debe depender de un escudo gigante para ser comprensible.

### RN-028 — Force field no permanente

El campo de fuerza:

- no es permanente;
- tiene glow mínimo previo;
- aparece como respuesta al STOP;
- muestra shockwave breve;
- deja residual glow;
- no debe parecer escudo de videojuego.

### RN-029 — Personaje estable

Marco permanece esencialmente estable. La acción ocurre en:

- proyectiles;
- trails;
- force field;
- Matrix atmosphere;
- partículas;
- profundidad 2.5D.

No se requiere rig corporal ni animación 3D.

### RN-030 — Proyectiles no interactivos

Los proyectiles no son links, badges, tooltips, botones ni elementos focusables.

### RN-031 — No minijuego

El HeroVisual no debe convertirse en juego, experiencia gamificada o interacción que compita con el propósito principal del Hero.

### RN-032 — Sin pointer/hover/click innecesario

Los proyectiles y efectos visuales no deben introducir interacciones de pointer, hover o click que no aporten a la comprensión del Hero.

### RN-033 — Inspiración visual sin reproducción literal

El HeroVisual puede usar un lenguaje Matrix-inspired propio, pero no debe reproducir literalmente Matrix, Neo, símbolos, personajes, marcas, diseños o escenas propietarias.

### RN-034 — Responsive aprobado por subconjunto de proyectiles

La cantidad y selección de proyectiles queda aprobada así:

#### Desktop

```txt
9 proyectiles
```

#### Tablet

```txt
NO SPEC
NO DOMAIN MODEL
OVERENGINEERING
HTTP 500
QUEUE BACKLOG
RACE CONDITION
```

#### Mobile

```txt
NO SPEC
HTTP 500
QUEUE BACKLOG
RACE CONDITION
```

Mobile no debe ser desktop simplemente escalado.

### RN-035 — Reduced motion aprobado

Con `prefers-reduced-motion`, debe mostrarse:

- background;
- Marco;
- residual field;
- máximo 1–3 proyectiles ya contenidos.

Debe eliminarse:

- trayectorias rápidas;
- braking intenso;
- shockwave intensa;
- desintegración rápida;
- parallax significativo.

### RN-036 — División tecnológica aprobada

La división tecnológica aprobada es:

#### Motion for React

- transforms;
- trayectorias;
- scale;
- opacity;
- braking;
- timeline;
- parallax.

#### SVG

- trails;
- force field;
- shockwaves;
- rings;
- determinadas partículas vectoriales.

#### Canvas 2D

- Matrix rain;
- atmósfera de alta cantidad si profiling lo justifica.

#### CSS

- glow;
- blur;
- gradients;
- compositing;
- layout;
- responsive.

#### Raster

Solo:

- Marco;
- background.

### RN-037 — `motion` como dependencia técnica aprobada

`motion` queda aprobado como única nueva dependencia de animación para HeroVisual si todavía no está instalada.

`motion` no es un requisito funcional de usuario y no debe aparecer como RF.

### RN-038 — Dependencias prohibidas para V1 sin nueva aprobación

No instalar sin aprobación posterior:

- Three.js;
- GSAP;
- Rive;
- Lottie;
- Pixi;
- Babylon;
- particle libraries;
- motores WebGL;
- librerías visuales pesadas.

### RN-039 — SDD-03 no reabre decisiones aprobadas

SDD-03 debe incorporar, reconciliar con el repositorio y concretar lo ya aprobado. No debe reabrir:

- 9 proyectiles;
- dos categorías;
- narrativa en tres actos;
- STOP como clímax;
- single-run choreography;
- force field no permanente;
- personaje estable;
- responsive simplificado;
- reduced-motion route;
- separación Motion / SVG / Canvas / CSS.

SDD-03 sí debe calibrar:

- estructura real de archivos;
- coordenadas;
- `CollisionAnchor`;
- `StopOffsets`;
- breakpoints;
- rutas de assets;
- dimensiones;
- performance budget;
- integración con repo;
- props/types;
- debug tooling;
- tests concretos.

---

## 12. Requisitos no funcionales

### Rendimiento

- El Hero no debe introducir assets pesados sin optimización.
- El contenido textual principal debe renderizarse sin esperar animaciones.
- No debe generar layout shift relevante al cargar.
- No debe usar JavaScript para decoración trivial si CSS puede resolverlo de forma suficiente.
- Matrix rain debe implementarse de forma barata, preferiblemente con Canvas 2D si SDD-03 lo confirma.
- Animaciones deben pausarse o reducirse cuando el Hero esté fuera de viewport, si SDD-03 define esa estrategia.
- Mobile no debe cargar una versión desktop encogida e innecesariamente pesada.
- El Hero no debe degradar LCP, CLS ni runtime smoothness de forma significativa.

### Seguridad

- Los enlaces externos deben usar atributos seguros cuando abran en nueva pestaña.
- El enlace del CV debe abrir en nueva pestaña con atributos seguros cuando el asset exista.
- No debe introducir scripts externos para decoración visual.

### Accesibilidad

- Baseline: **WCAG 2.2 AA**.
- Debe existir un único `h1` principal en la home, ubicado en el Hero.
- SDD-03 debe definir la semántica exacta del `h1`.
- Una opción recomendada para SDD-03 es que el `h1` incluya nombre y rol como identidad profesional completa.
- Los CTAs deben ser accesibles por teclado.
- El foco visible debe ser perceptible.
- El contraste debe cumplir AA sobre la identidad visual oscura.
- Las animaciones deben respetar `prefers-reduced-motion`.
- El HeroVisual debe marcarse como decorativo, por ejemplo con `aria-hidden="true"`, si no comunica información funcional.
- Los proyectiles no deben ser focusables.
- La navegación debe funcionar sin mouse.
- El HeroVisual no debe ser anunciado como contenido esencial por lectores de pantalla.

### Reduced motion

Con `prefers-reduced-motion`, la experiencia debe ser una variante estática deliberada.

Debe conservar:

- Marco;
- background;
- campo residual tenue;
- máximo 1–3 proyectiles ya contenidos.

Debe eliminar o reducir drásticamente:

- entrada rápida de proyectiles;
- braking intenso;
- shockwave intensa;
- desintegración rápida;
- parallax significativo;
- loops llamativos.

### Usabilidad

- El visitante debe entender el mensaje principal antes de hacer scroll.
- La jerarquía visual debe priorizar: nombre/rol → propuesta → Projects → CV → GitHub.
- El Hero no debe competir con About, Core Stack, Experience ni Projects.
- El HeroVisual debe reforzar el posicionamiento, no obligar al usuario a descifrar la escena.

### Compatibilidad

- Debe funcionar en desktop, tablet y mobile.
- Debe adaptarse a locale `es` y `en`.
- Debe funcionar como single-theme oscuro.
- No debe depender de pointer, hover o interacciones no disponibles en touch.

### Mantenibilidad

- El contenido debe separarse conceptualmente del JSX para facilitar ES/EN.
- La estructura final de archivos/componentes debe definirse en SDD-03 tras revisar el repositorio.
- No debe sobrecomponentizarse la sección.
- No debe modificar estilos globales sin aprobación.
- No debe crear abstracciones equivalentes a `PageContainer` sin justificación técnica.
- Los proyectiles deben configurarse desde datos, no mediante un componente único diferente por cada error.
- Debe existir una autoridad central de timeline para evitar estados visuales contradictorios.

---

## 13. Interfaz esperada, flujo esperado o API esperada

### Modelo conceptual no vinculante

```txt
Hero
│
├── HeroContent
│
└── HeroVisual
    ├── DigitalWorldLayer
    ├── MatrixRainCanvas
    ├── ProjectileSystem
    │   ├── ErrorProjectile[]
    │   └── ProjectileTrail[]
    ├── ForceFieldBack
    ├── CharacterLayer
    │   └── CollisionAnchor
    ├── ForceFieldFront
    ├── ImpactParticles
    └── HeroMotionController
```

Los nombres pueden adaptarse a las convenciones reales del repositorio, pero no sus responsabilidades.

### Contenido esperado en español

```txt
Marco Vega

AI Engineer

Orquesto agentes de IA para construir aplicaciones de negocio y sistemas asistidos por IA, con una base Full Stack y mayor profundidad en backend y Laravel.

[ Ver proyectos ] [ CV ]

GitHub
```

### Contenido esperado en inglés

```txt
Marco Vega

AI Engineer

I orchestrate AI agents to build business applications and AI-enabled systems, backed by a Full Stack background with deeper experience in backend engineering and Laravel.

[ View projects ] [ Resume ]

GitHub
```

### CTA primario

- Texto ES: `Ver proyectos`
- Texto EN: `View projects`
- Destino esperado: `#projects`

Durante desarrollo incremental, `href="#projects"` funciona como contrato de integración. Para release final, debe existir una sección real con `id="projects"`.

### CTA secundario

- Texto ES: `CV`
- Texto EN: `Resume`
- Destino: `/cv/curriculum.pdf`
- Condición: solo renderizar como acción funcional si existe `/public/cv/curriculum.pdf`
- Comportamiento: abrir en nueva pestaña con atributos seguros
- `download`: no obligatorio

### Enlace terciario

- Texto: `GitHub`
- Destino: `https://github.com/MarcoVegaR`

### HeroVisual esperado

El HeroVisual debe mostrar una escena donde:

- Marco aparece como figura estable dentro de un sistema digital oscuro.
- El background Matrix-inspired funciona como entorno digital, no como protagonista.
- Fallos del sistema y malas prácticas aparecen como proyectiles.
- Los proyectiles convergen hacia la mano extendida.
- La escena desacelera en el punto de contención.
- Se percibe un momento de STOP/control.
- El campo de fuerza aparece como respuesta al impacto.
- Después de la secuencia, el sistema queda en estado ambiental.

### Desktop

Composición conceptual:

```txt
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Marco Vega                          [ Digital Scene      ]│
│  AI Engineer                         [ Marco + projectiles]│
│                                      [ STOP at hand       ]│
│  Orquesto agentes de IA...           [ Matrix environment ]│
│                                                            │
│  [Ver proyectos] [CV]                                     │
│                                                            │
│  GitHub                                                    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

Desktop puede usar el catálogo completo de 9 proyectiles.

### Tablet

Tablet debe usar una coreografía reducida con estos proyectiles:

```txt
NO SPEC
NO DOMAIN MODEL
OVERENGINEERING
HTTP 500
QUEUE BACKLOG
RACE CONDITION
```

### Mobile

Mobile no debe ser una versión desktop encogida. Debe usar una versión deliberadamente simplificada con estos proyectiles:

```txt
NO SPEC
HTTP 500
QUEUE BACKLOG
RACE CONDITION
```

Composición conceptual:

```txt
┌───────────────────────────────┐
│ Marco Vega                    │
│ AI Engineer                   │
│                               │
│ Orquesto agentes de IA...     │
│                               │
│ [Ver proyectos]               │
│ [CV]                          │
│                               │
│ GitHub                        │
│                               │
│ Visual simplificado           │
│ Marco + contención reducida   │
└───────────────────────────────┘
```

---

## 14. Datos y modelo conceptual

No se requiere persistencia ni base de datos.

### Contenido editorial

```ts
heroContent = {
  es: {
    name: "Marco Vega",
    role: "AI Engineer",
    description:
      "Orquesto agentes de IA para construir aplicaciones de negocio y sistemas asistidos por IA, con una base Full Stack y mayor profundidad en backend y Laravel.",
    actions: {
      projects: "Ver proyectos",
      resume: "CV"
    },
    links: {
      github: "GitHub"
    }
  },
  en: {
    name: "Marco Vega",
    role: "AI Engineer",
    description:
      "I orchestrate AI agents to build business applications and AI-enabled systems, backed by a Full Stack background with deeper experience in backend engineering and Laravel.",
    actions: {
      projects: "View projects",
      resume: "Resume"
    },
    links: {
      github: "GitHub"
    }
  }
}
```

### Rutas y enlaces

```txt
projectsHref = "#projects"
resumeHref = "/cv/curriculum.pdf"
githubHref = "https://github.com/MarcoVegaR"
```

### Archivo CV

El archivo esperado debe ubicarse en:

```txt
/public/cv/curriculum.pdf
```

La URL pública esperada debe ser:

```txt
/cv/curriculum.pdf
```

El agente IA no debe crear contenido falso para el CV.

### Assets visuales aprobados

```txt
Character asset:
hero-character-marco-source.png

Background asset:
hero-background-source.png
```

### Catálogo conceptual de proyectiles

```ts
projectiles = [
  {
    label: "HTTP 500",
    category: "system_failure",
    meaning: "Fallo reconocible del sistema / producción"
  },
  {
    label: "RACE CONDITION",
    category: "system_failure",
    meaning: "Concurrencia, sincronización y control de estado"
  },
  {
    label: "QUEUE BACKLOG",
    category: "system_failure",
    meaning: "Colas, workers, throughput y procesamiento async bajo carga"
  },
  {
    label: "DB POOL EXHAUSTED",
    category: "system_failure",
    meaning: "Agotamiento operativo de conexiones/recursos backend"
  },
  {
    label: "CODE BEFORE PROBLEM",
    category: "engineering_failure",
    meaning: "Empezar a programar antes de comprender el problema"
  },
  {
    label: "NO DOMAIN MODEL",
    category: "engineering_failure",
    meaning: "Implementar sin entender dominio, reglas, eventos y relaciones"
  },
  {
    label: "NO SPEC",
    category: "engineering_failure",
    meaning: "Vibecoding o implementación sin contratos, restricciones y criterios definidos"
  },
  {
    label: "PATCH CASCADE",
    category: "engineering_failure",
    meaning: "Parche tras parche hasta perder comprensión del sistema"
  },
  {
    label: "OVERENGINEERING",
    category: "engineering_failure",
    meaning: "Introducir más complejidad de la necesaria"
  }
]
```

### State machine conceptual del proyectil

```txt
HIDDEN
↓
APPROACHING
↓
BRAKING
↓
SUSPENDED
↓
DISINTEGRATING
↓
DONE
```

### State machine conceptual de la escena

```txt
IDLE_INITIAL
↓
ACT_1
↓
ACT_2
↓
ACT_3
↓
BRAKING
↓
IMPACT
↓
SUSPENDED
↓
RESOLVING
↓
IDLE_AFTER
```

Debe existir una autoridad central de timeline.

Los valores técnicos de trayectoria, timing, profundidad, posiciones, easing, `CollisionAnchor`, `StopOffsets` y lifecycle pertenecen a SDD-03.

---

## 15. Criterios de aceptación

### CA-001 vinculado a RF-001

- **Given** que el visitante abre la home del portfolio
- **When** se carga la página
- **Then** debe visualizar una sección Hero antes de otras secciones de contenido principal

### CA-002 vinculado a RF-002

- **Given** que el Hero está visible
- **When** el visitante observa el primer viewport
- **Then** debe poder identificar `Marco Vega` y `AI Engineer` sin hacer scroll

### CA-003 vinculado a RF-003

- **Given** que el Hero está visible en español
- **When** el visitante lee la descripción
- **Then** debe ver el texto aprobado sobre aplicaciones de negocio, sistemas asistidos por IA, base Full Stack y profundidad backend/Laravel

### CA-004 vinculado a RF-004

- **Given** que el locale activo es `en`
- **When** se renderiza el Hero
- **Then** la descripción debe mostrarse en inglés sin mezclar español

### CA-005A vinculado a RF-005

- **Given** que el visitante ve el CTA primario
- **When** inspecciona o usa el CTA `Ver proyectos` / `View projects`
- **Then** el CTA debe exponer `href="#projects"`

### CA-005B vinculado a RF-005

- **Given** que la versión se evalúa para release final
- **When** el visitante hace click en `Ver proyectos` o `View projects`
- **Then** debe navegar a una sección real con `id="projects"`

### CA-006 vinculado a RF-006, RF-007 y RF-008

- **Given** que existe el archivo `/public/cv/curriculum.pdf`
- **When** el visitante hace click en `CV` o `Resume`
- **Then** debe abrirse `/cv/curriculum.pdf` en nueva pestaña con atributos seguros

### CA-007 vinculado a RF-008

- **Given** que no existe el archivo `/public/cv/curriculum.pdf`
- **When** se renderiza el Hero
- **Then** el sistema no debe mostrar un enlace funcional falso al CV y debe reportar el asset pendiente durante desarrollo

### CA-008 vinculado a RF-009

- **Given** que el visitante ve el enlace `GitHub`
- **When** hace click en el enlace
- **Then** debe abrirse el perfil `https://github.com/MarcoVegaR`

### CA-009 vinculado a RF-010

- **Given** que el HeroVisual falla, no carga o se oculta
- **When** el visitante usa el Hero
- **Then** todavía debe poder leer nombre, rol, descripción y CTAs disponibles

### CA-010 vinculado a RF-011

- **Given** que se inspeccionan los assets visuales del Hero
- **When** se revisa la composición
- **Then** el personaje de Marco y el background digital deben mantenerse como capas/assets separados

### CA-011 vinculado a RF-011

- **Given** que se inspecciona el character asset
- **When** se compara con el asset aprobado
- **Then** no debe estar regenerado, deformado ni alterado en rostro, pose o aspect ratio

### CA-012 vinculado a RF-012

- **Given** que se renderizan los proyectiles
- **When** se inspecciona la escena
- **Then** los labels de errores deben ser elementos runtime y no texto horneado dentro de los assets raster

### CA-013 vinculado a RF-013

- **Given** que el usuario entra normalmente a la página y no tiene reduced motion activo
- **When** se monta el Hero
- **Then** debe ejecutarse como máximo una coreografía principal en tres actos con los proyectiles aprobados

### CA-014 vinculado a RF-014

- **Given** que los proyectiles llegan al área de contención
- **When** ocurre el clímax
- **Then** debe percibirse `BRAKING → STOP → IMPACT → SUSPENSION → DISINTEGRATION → IDLE_AFTER`

### CA-015 vinculado a RF-014

- **Given** que ocurre el STOP
- **When** se evalúa visualmente la escena
- **Then** el STOP debe ser entendible principalmente por desaceleración y suspensión, no por un escudo permanente

### CA-016 vinculado a RF-015

- **Given** que la coreografía inicial terminó
- **When** el visitante permanece en la página
- **Then** la escena debe entrar en estado ambiental de bajo movimiento sin repetir continuamente la secuencia completa

### CA-017 vinculado a RF-016

- **Given** que el usuario tiene `prefers-reduced-motion` activo
- **When** se renderiza el HeroVisual
- **Then** no deben ejecutarse trayectorias rápidas, braking intenso, shockwave intensa, desintegración rápida ni parallax significativo

### CA-018 vinculado a RF-016

- **Given** que el usuario tiene `prefers-reduced-motion` activo
- **When** se renderiza el HeroVisual
- **Then** debe mostrarse una variante deliberada con Marco, background, campo residual tenue y máximo 1–3 proyectiles ya contenidos

### CA-019 vinculado a RF-017

- **Given** que se renderiza el Hero
- **When** se inspecciona su identidad visual
- **Then** debe usar el single-theme oscuro Matrix-inspired aprobado, sin exigir adaptación light/dark

### CA-020 vinculado a RF-018

- **Given** que el viewport es desktop
- **When** se renderiza el HeroVisual
- **Then** puede utilizar los 9 proyectiles aprobados

### CA-021 vinculado a RF-018

- **Given** que el viewport es tablet
- **When** se renderiza el HeroVisual
- **Then** debe usar el subconjunto aprobado para tablet

### CA-022 vinculado a RF-018

- **Given** que el viewport es mobile
- **When** se renderiza el HeroVisual
- **Then** debe usar el subconjunto aprobado para mobile, sin overflow horizontal y sin escalar desktop completo

### CA-023 vinculado a RF-019

- **Given** que el usuario navega con teclado
- **When** tabula por los CTAs y enlaces del Hero
- **Then** el foco visible debe ser claro y seguir un orden lógico

### CA-024 vinculado a RF-019

- **Given** que el HeroVisual es decorativo
- **When** se inspecciona la accesibilidad del Hero
- **Then** la escena completa debe quedar fuera del árbol accesible cuando corresponda, usando una estrategia equivalente a `aria-hidden="true"`

### CA-025 vinculado a RF-019

- **Given** que existen proyectiles visuales en la escena
- **When** el usuario navega con teclado
- **Then** los proyectiles no deben recibir foco ni comportarse como controles interactivos

---

## 16. Casos borde y manejo de errores

### Archivo CV ausente

Si `/public/cv/curriculum.pdf` no existe durante desarrollo, el agente debe reportarlo como dependencia de asset. No debe inventar otro archivo ni cambiar la ruta sin aprobación. El link funcional al CV no debe renderizarse como si estuviera disponible.

### Target `#projects` ausente

Si la sección Projects todavía no existe, el CTA debe conservar el destino definido como contrato incremental. Sin embargo, PRD-03 no puede considerarse production-complete hasta que exista una sección real con `id="projects"`.

### GitHub inaccesible

Si el enlace externo no puede verificarse desde el entorno local, debe mantenerse la URL confirmada por el usuario.

### Locale desconocido

Si por error el locale activo no es `es` ni `en`, el Hero debe usar el fallback global existente. No debe crear nueva lógica de locale.

### Conflicto con theme global anterior

Si PRD-01 o PRD-02 todavía exigen light/dark visible, el agente no debe resolverlo por cuenta propia. Debe reportar bloqueo documental porque PRD-03 v1.3 asume single-theme oscuro como decisión cerrada.

### Reduced motion

Si `prefers-reduced-motion` está activo, el HeroVisual debe usar la variante estática deliberada. No basta con desactivar animaciones y dejar una escena rota o vacía.

### Mobile estrecho

En viewports pequeños, los botones deben mantenerse legibles y accionables. No debe existir overflow horizontal. La escena debe reducir complejidad usando el subconjunto mobile aprobado.

### Fallo visual/decorativo

Si CSS avanzado, Canvas, SVG, Motion o animaciones no cargan, el Hero debe seguir funcionando como sección editorial básica.

### Asset de personaje alterado

Si la implementación deforma rostro, aspect ratio, pose o identidad del personaje aprobado, debe considerarse error visual.

### Background fusionado incorrectamente

Si character y background se fusionan de forma que impida layering, responsive, animación o performance, debe considerarse desviación del PRD.

### Proyectiles como imagen horneada

Si los labels de errores aparecen horneados dentro del background o character asset, debe considerarse desviación del PRD.

### Force field horneado

Si el force field aparece horneado dentro del character o background asset, debe considerarse desviación del PRD.

### Animación repetitiva

Si la coreografía principal se repite continuamente, debe considerarse desviación del PRD.

### Proyectiles focusables

Si los proyectiles entran al tab order o son anunciados como controles, debe considerarse error de accesibilidad.

### Interacción innecesaria

Si los proyectiles dependen de hover, pointer, click o interacción táctil para entenderse, debe considerarse desviación del PRD.

### SDD reabriendo Fases 1–5

Si SDD-03 intenta cambiar narrativa, catálogo, actos, STOP, single-run, responsive, reduced motion o división tecnológica aprobada, debe considerarse desviación documental. SDD-03 solo puede calibrar implementación.

---

## 17. Testing requerido

### Pruebas funcionales

- Verificar renderizado de nombre, rol, descripción, CTA Projects, CTA CV condicionado y GitHub.
- Verificar destino de `#projects`.
- Verificar existencia de sección real `id="projects"` para release final.
- Verificar destino `/cv/curriculum.pdf` cuando el asset existe.
- Verificar que el CV no aparece como link funcional falso cuando el asset no existe.
- Verificar destino `https://github.com/MarcoVegaR`.

### Pruebas de validación editorial

- Validar que el contenido cambia correctamente entre `es` y `en`.
- Validar que no aparece LinkedIn.
- Validar que no aparece disponibilidad en el Hero.
- Validar que no aparece `HeroStatus`.
- Validar que no aparecen tecnologías como badges en el Hero.
- Validar que no aparece seniority autoasignado.
- Validar que el copy menciona aplicaciones de negocio y sistemas asistidos por IA.

### Pruebas de HeroVisual

- Verificar static fallback del Hero.
- Verificar asset de personaje aprobado.
- Verificar aspect ratio del personaje.
- Verificar background separado.
- Verificar ausencia de proyectiles horneados.
- Verificar ausencia de force field horneado.
- Verificar `CollisionAnchor` o equivalente definido por SDD-03.
- Verificar lifecycle de proyectil.
- Verificar state machine de escena.
- Verificar autoridad central de timeline.
- Verificar aproximación, desaceleración y STOP.
- Verificar que la coreografía inicial ocurre una sola vez.
- Verificar tres actos aprobados.
- Verificar estado posterior `IDLE_AFTER`.
- Verificar que el force field no es permanente.
- Verificar que los proyectiles no son interactivos.
- Verificar que no existe minijuego.
- Verificar que no existen interacciones hover/click/pointer innecesarias.

### Pruebas responsive

- Desktop con 9 proyectiles.
- Tablet con subconjunto aprobado de 6 proyectiles.
- Mobile con subconjunto aprobado de 4 proyectiles.
- Sin overflow horizontal.
- Complejidad visual reducida progresivamente por viewport.
- Mobile con versión simplificada y no desktop encogido.

### Pruebas reduced motion

- Verificar `ReducedMotionScene` o equivalente.
- Verificar ausencia de trayectorias rápidas.
- Verificar ausencia de braking intenso.
- Verificar ausencia de shockwave intensa.
- Verificar ausencia de desintegración rápida.
- Verificar ausencia de parallax significativo.
- Verificar máximo 1–3 proyectiles ya contenidos.
- Verificar que la información editorial permanece disponible.

### Pruebas de accesibilidad

- Navegación por teclado.
- Foco visible.
- Contraste WCAG 2.2 AA sobre single-theme oscuro.
- HeroVisual decorativo oculto para tecnologías asistivas.
- Proyectiles no focusables.
- Orden lógico de tabulación.
- Único `h1` en la home.

### Pruebas de regresión

- Verificar que Header sigue funcionando.
- Verificar que locale toggle global sigue funcionando.
- Verificar que `main#main` no se rompe.
- Verificar que `PageContainer` o la geometría base no se duplican sin justificación.
- Verificar que PRD-01/PRD-02 están reconciliados con single-theme antes de Fase 6.

### Pruebas de performance

- Verificar CLS.
- Verificar LCP.
- Verificar FPS razonable durante coreografía.
- Verificar runtime smoothness.
- Verificar que Canvas o animaciones se pausan/reducen fuera de viewport si SDD-03 lo define.
- Verificar que mobile no carga trabajo visual innecesario.
- Verificar asset optimization.
- Verificar que `npm run build` no produce errores.

### Quality gates

Antes de considerar la implementación posterior como terminada, deben pasar:

```txt
composer ci:check
npm run build
```

También deben documentarse por separado:

- automated checks;
- static/code review;
- manual/browser QA;
- QA visual;
- QA de accesibilidad;
- QA de performance.

### Pruebas de API

No aplica.

---

## 18. Definition of Done

La funcionalidad se considera lista a nivel de PRD cuando:

- El alcance de producto de Hero está aprobado.
- No hay preguntas abiertas críticas de producto.
- El PRD está marcado como `Ready for SDD update`, no como implementación directa.
- La actualización de SDD-03 queda habilitada.
- La deuda documental sobre single-theme vs PRD-01/PRD-02 está identificada como bloqueante antes de Fase 6.
- `motion` quedó removido como RF y conservado solo como decisión técnica aprobada.
- Las decisiones cerradas de Fases 1–5 quedaron protegidas contra reapertura durante coding.

La funcionalidad se considerará terminada a nivel de implementación posterior solo cuando:

- SDD-03 haya sido actualizado con PRD-03 v1.3.
- PRD-01/PRD-02 estén reconciliados o exista una enmienda aprobada sobre single-theme.
- `Hero` esté integrado en la home.
- El Hero muestre `Marco Vega`.
- El Hero muestre `AI Engineer`.
- El Hero muestre la descripción aprobada en español e inglés.
- El CTA primario apunte a `#projects`.
- Para release final, exista una sección real con `id="projects"`.
- El CTA secundario apunte a `/cv/curriculum.pdf` solo cuando exista `/public/cv/curriculum.pdf`.
- El CV abra en nueva pestaña con atributos seguros.
- El enlace de GitHub apunte a `https://github.com/MarcoVegaR`.
- LinkedIn no aparezca.
- Disponibilidad no aparezca en el Hero.
- `HeroStatus` no exista dentro del Hero.
- El Hero use single-theme oscuro Matrix-inspired.
- No se exija soporte light/dark para Hero.
- El Hero funcione en español e inglés.
- El Hero sea responsive.
- Desktop use 9 proyectiles.
- Tablet use el subconjunto aprobado de 6 proyectiles.
- Mobile use el subconjunto aprobado de 4 proyectiles.
- El personaje aprobado no haya sido regenerado o deformado.
- Character y background permanezcan separados.
- Los proyectiles sean runtime, no horneados.
- Force field sea runtime, no horneado.
- La coreografía inicial ocurra una sola vez.
- La coreografía respete los tres actos aprobados.
- El STOP sea perceptible por desaceleración y contención.
- El force field no sea permanente.
- La escena posterior sea ambiental y no intrusiva.
- Reduced motion tenga variante estática deliberada.
- El Hero no dependa del visual para comunicar información crítica.
- El HeroVisual decorativo esté oculto para tecnologías asistivas.
- Los proyectiles no sean focusables ni interactivos.
- No existan interacciones pointer/hover/click innecesarias.
- Se cumpla WCAG 2.2 AA como baseline.
- No se reimplemente Header ni locale.
- No se agreguen dependencias nuevas fuera de `motion` sin aprobación.
- No se modifiquen estilos globales sin autorización.
- No se introduzcan claims, métricas o rutas no confirmadas.
- Se respete o justifique el uso de `PageContainer`.
- `composer ci:check` pase.
- `npm run build` pase.
- Los criterios de aceptación definidos estén cubiertos por pruebas o verificación manual documentada.

---

## 19. Instrucciones para el agente IA

- No implementar directamente desde este PRD sin SDD-03 actualizado.
- No iniciar Fase 6 hasta cumplir la condición de GO.
- No modificar la arquitectura base del portfolio.
- No modificar Header sin reconciliación previa de PRD-01/PRD-02.
- No reimplementar locale.
- No instalar dependencias nuevas salvo `motion` si SDD-03 lo requiere.
- Excepción posterior: `motion`, `sharp`, Pest Browser y Playwright como runtime de Pest Browser fueron autorizados por el Product Owner el 2026-08-20 y deben quedar registrados en el Decision Log de SDD-03; no se instalan antes del GO.
- No tratar `motion` como RF de usuario.
- No instalar Three.js, GSAP, Rive, Lottie, Pixi, Babylon, particle libraries o motores WebGL sin aprobación explícita posterior.
- No cambiar estilos globales sin autorización.
- No crear LinkedIn en esta versión.
- No crear estado de disponibilidad en el Hero.
- No crear `HeroStatus`.
- No cambiar el CTA de Projects a otra ruta.
- No considerar PRD-03 production-complete si `#projects` no resuelve a una sección real.
- No cambiar la ruta del CV.
- No crear un archivo CV falso.
- No mostrar un enlace funcional falso al CV si el asset no existe.
- No forzar `download` para el CV salvo decisión posterior.
- No apuntar GitHub al repositorio del portfolio; debe apuntar al perfil.
- No usar seniority autoasignado.
- No convertir Full Stack, Backend o Laravel en títulos paralelos al rol principal.
- No agregar tech badges al Hero.
- No agregar métricas no verificadas.
- No usar copy genérico.
- No hacer que el HeroVisual sea necesario para entender el Hero.
- No recrear literalmente Matrix, Neo, símbolos, personajes o diseños protegidos.
- No regenerar el personaje aprobado de Marco.
- No alterar rostro, pose o aspect ratio del personaje aprobado.
- No fusionar character y background si eso rompe layering o animación.
- No hornear proyectiles o labels dentro de los assets raster.
- No hornear force field dentro de los assets raster.
- No convertir proyectiles en links, badges, tooltips o elementos focusables.
- No introducir pointer/hover/click innecesario en proyectiles.
- No crear un minijuego.
- No repetir indefinidamente la coreografía principal.
- No cambiar el catálogo de proyectiles aprobado.
- No cambiar la coreografía aprobada en tres actos.
- No cambiar la ruta reduced motion aprobada.
- No cambiar desktop/tablet/mobile projectile subsets aprobados.
- No rediseñar Fases 4 y 5 dentro de SDD-03.
- No duplicar `PageContainer` ni crear un container paralelo sin justificación técnica.
- Si encuentra ambigüedad crítica, debe detenerse y preguntar.

Formato esperado si hay bloqueo:

```txt
Bloqueo por ambigüedad crítica:
- Punto ambiguo:
- Impacto:
- Opciones posibles:
- Recomendación:
- Decisión requerida del usuario:
```

---

## 20. Riesgos, supuestos y preguntas abiertas

### Riesgos

- El Hero puede volverse demasiado cinematográfico y perder claridad profesional.
- El HeroVisual puede distraer si compite con el mensaje principal.
- El agente IA puede intentar agregar tecnologías, métricas, disponibilidad o enlaces no confirmados.
- El CTA de CV puede parecer roto si el archivo todavía no existe en `/public/cv/curriculum.pdf`.
- El CTA `#projects` puede no navegar correctamente si la sección Projects aún no existe.
- El PRD puede ser malinterpretado como autorización de implementación directa si se ignora el estado `Ready for SDD update`.
- El cambio single-theme puede contradecir PRD-01/PRD-02 si no se reconcilia documentalmente.
- La escena puede degradar performance si se implementa como espectáculo pesado antes de validar el prototipo.
- El equipo puede intentar implementar los 9 proyectiles antes de validar el comportamiento de STOP.
- La metáfora Matrix-inspired puede acercarse demasiado a propiedad intelectual existente si no se controla el diseño.
- SDD-03 puede convertirse accidentalmente en rediseño de Fases 4–5 en vez de concreción técnica.

### Supuestos

- El proyecto sirve archivos públicos desde `/public`.
- Un archivo ubicado en `/public/cv/curriculum.pdf` estará disponible públicamente como `/cv/curriculum.pdf`.
- `#projects` será el identificador de la sección Projects cuando esta exista.
- El sistema ya tiene infraestructura de locale.
- El sistema ya tiene o tendrá `PageContainer` para geometría horizontal.
- El Hero se integrará dentro de la home actual del portfolio.
- El perfil GitHub confirmado es `https://github.com/MarcoVegaR`.
- El producto adopta una única identidad visual oscura.
- Existe o existirá el character asset aprobado `hero-character-marco-source.png`.
- Existe o existirá el background asset aprobado `hero-background-source.png`.
- `motion` puede instalarse si todavía no está disponible.
- Fases 1–5 están cerradas y no deben reabrirse durante coding.

### Preguntas abiertas críticas

No hay preguntas abiertas críticas de producto.

### Dependencias documentales bloqueantes antes de Fase 6

- PRD-01 y PRD-02 deben reconciliarse con single-theme.
- `ThemeToggle`, experiencia light/dark visible, criterios de aceptación y tests de ambos themes deben retirarse, ocultarse o marcarse como deprecated según decisión documental.
- SDD-03 debe actualizarse contra el repositorio.
- Rutas reales de assets deben definirse.
- Estado de `motion` debe confirmarse.
- `PageContainer` y layout reales deben auditarse.
- Estado del CV debe conocerse.
- Dependencia `#projects` debe documentarse.

### Preguntas abiertas menores para SDD-03

- Rama exacta de implementación.
- Estructura final de componentes y archivos.
- Semántica exacta del `h1`.
- Coordenadas normalizadas de la escena.
- Definición exacta de `CollisionAnchor`.
- Definición exacta de `StopOffsets`.
- Timeline implementable final.
- Rutas definitivas de assets en el repo.
- Dimensiones finales de assets.
- Estrategia CSS/SVG/Canvas/Motion para cada capa.
- Estrategia de pausa fuera de viewport.
- Performance budget exacto.
- Breakpoints concretos.
- Debug tooling.
- Tests concretos.
- Tratamiento visual del CTA de CV cuando el asset todavía no existe en desarrollo.

---

## 21. Matriz de trazabilidad

| Requisito | Criterio de aceptación | Test esperado |
|---|---|---|
| RF-001 | CA-001 | TEST-001: Renderizado inicial del Hero |
| RF-002 | CA-002 | TEST-002: Identidad visible en primer viewport |
| RF-003 | CA-003 | TEST-003: Copy ES correcto |
| RF-004 | CA-004 | TEST-004: Cambio de locale ES/EN |
| RF-005 | CA-005A, CA-005B | TEST-005: CTA Projects apunta a `#projects` y resuelve para release |
| RF-006 | CA-006 | TEST-006: CTA CV apunta a `/cv/curriculum.pdf` cuando asset existe |
| RF-007 | CA-006 | TEST-007: Asset reemplazable en `/public/cv/curriculum.pdf` |
| RF-008 | CA-007 | TEST-008: No se renderiza CV funcional falso si el asset no existe |
| RF-009 | CA-008 | TEST-009: GitHub apunta al perfil confirmado |
| RF-010 | CA-009 | TEST-010: Hero funciona sin HeroVisual |
| RF-011 | CA-010, CA-011 | TEST-011: Character y background separados; character no deformado |
| RF-012 | CA-012 | TEST-012: Proyectiles runtime, no horneados |
| RF-013 | CA-013 | TEST-013: Coreografía inicial en tres actos |
| RF-014 | CA-014, CA-015 | TEST-014: STOP/braking convincente |
| RF-015 | CA-016 | TEST-015: Estado posterior `IDLE_AFTER` |
| RF-016 | CA-017, CA-018 | TEST-016: Reduced motion deliberado |
| RF-017 | CA-019 | TEST-017: Single-theme oscuro |
| RF-018 | CA-020, CA-021, CA-022 | TEST-018: Responsive desktop/tablet/mobile con subconjuntos aprobados |
| RF-019 | CA-023, CA-024, CA-025 | TEST-019: Accesibilidad, teclado, aria-hidden y proyectiles no focusables |

## Nota posterior al PRD

Siguiente entregable recomendado: **SDD-03 — Hero actualizado**, usando:

```txt
PRD-03 v1.3
+
hero_fase_4_motion_storyboard.md
+
hero_fase_5_technical_spec.md
+
hero-character-marco-source.png
+
hero-background-source.png
+
hero_asset_manifest.md
+
hero_execution_plan_phases_6_13.md
+
hero_qa_gate_matrix.md
```

SDD-03 debe cerrar:

- estructura real de componentes;
- rutas;
- props/types;
- semántica HTML;
- uso de `PageContainer`;
- tokens visuales;
- estrategia single-theme;
- layer stack;
- coordinate system;
- `CollisionAnchor`;
- `StopOffsets`;
- Stop Volume;
- projectile config;
- presets;
- state machines;
- timeline implementable;
- Motion/SVG/Canvas/CSS responsibilities;
- breakpoints;
- responsive projectile subsets;
- reduced motion route;
- performance budget;
- debug tooling;
- tests;
- checklist de implementación por fases.

SDD-03 puede calibrar parámetros, pero no reabrir decisiones aprobadas de Fases 1–5.

### Fases que requieren código y deben quedar en PRD/SDD

#### Fase 6 — Static Hero

Objetivo: construir el Hero real sin coreografía.

Implementar:

- Hero;
- HeroContent;
- HeroVisual;
- background;
- character;
- `CollisionAnchor`;
- ES/EN;
- CTAs;
- responsive base;
- fallback estático.

Gate:

- copy legible;
- Marco bien posicionado;
- palma completa;
- Collision Anchor correcto;
- no overflow;
- no CLS relevante;
- assets separados.

#### Fase 7 — Projectile Prototype

Objetivo: validar física visual con **un solo proyectil**.

Usar:

```txt
HTTP 500
```

Implementar:

```txt
HIDDEN
→ APPROACHING
→ BRAKING
→ SUSPENDED
```

Gate:

```txt
No avanzar si BRAKING → STOP no resulta convincente.
```

No implementar aún los otros 8 proyectiles.

#### Fase 8 — Projectile System

Objetivo: generalizar mediante datos y presets.

Implementar los 9 proyectiles aprobados.

Gate:

- configuración centralizada;
- un componente compartido;
- tres actos;
- jerarquía correcta;
- labels runtime.

#### Fase 9 — Force Field & Impact

Objetivo: construir el clímax visual.

Implementar:

- palm glow;
- ForceFieldBack;
- ForceFieldFront;
- shockwaves;
- impact particles;
- residual state.

Gate:

```txt
El force field refuerza el STOP, no lo sustituye.
```

#### Fase 10 — Matrix Atmosphere

Objetivo: dar vida al entorno con Canvas 2D.

Implementar:

- Matrix rain;
- densidad responsive;
- pausa/reducción fuera de viewport;
- actividad ambiental ligera.

Gate:

```txt
El ambiente no compite con copy, rostro ni proyectiles.
```

#### Fase 11 — 2.5D / Parallax

Objetivo: añadir profundidad sin 3D real.

Capas:

```txt
background
character
projectiles
foreground effects
```

Gate:

- parallax mínimo;
- touch no depende de pointer;
- no Three.js/WebGL;
- no sensación de minijuego.

#### Fase 12 — Responsive & Reduced Motion

Objetivo: construir experiencias deliberadas.

Validar:

- desktop = 9;
- tablet = 6;
- mobile = 4;
- reduced motion sin coreografía rápida.

Gate:

```txt
No resolver mobile escalando desktop completo.
```

#### Fase 13 — Performance & QA

Objetivo: demostrar que el Hero no degrada el portfolio.

Validar:

```txt
composer ci:check
npm run build
```

Además:

- QA desktop/tablet/mobile;
- ES/EN;
- teclado;
- aria;
- reduced motion;
- no overflow;
- single-run;
- `IDLE_AFTER`;
- CLS;
- LCP;
- FPS/runtime smoothness;
- Canvas pause fuera de viewport;
- asset optimization;
- QA visual.

### Orden obligatorio

```txt
PRD-03 v1.3 reajustado
↓
SDD-03 actualizado
↓
Fase 6
↓
Fase 7 — HTTP 500
↓
aprobar STOP
↓
Fase 8
↓
Fase 9
↓
Fase 10
↓
Fase 11
↓
Fase 12
↓
Fase 13
```

Reglas críticas:

```txt
NO implementar 9 proyectiles en Fase 7.
NO añadir Matrix rain antes de validar STOP.
NO añadir parallax antes de validar Force Field.
NO regenerar assets aprobados.
NO añadir otra librería de motion.
NO iniciar coding hasta reconciliar single-theme con PRD-01/PRD-02.
```
