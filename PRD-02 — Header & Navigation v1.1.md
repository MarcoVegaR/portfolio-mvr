# PRD-02 — Header & Navigation

## 1. Metadata

- Estado: Implemented
- Versión: 1.1
- Fecha: 2026-08-17
- Implementación: Completada conforme a SDD-02
- Autor / Product Owner: Marco Vega
- Proyecto: Portfolio profesional Marco Vega
- Módulo: Global Header / Navigation
- Prioridad: Alta
- Agente objetivo: Agente IA implementador frontend sobre Laravel + Inertia + React + TypeScript + Tailwind
- Repositorio: Pendiente de completar por el implementador
- Rama sugerida: `feature/prd-02-header-navigation`

### Nota de producto posterior

Desde el 2026-08-19 el portfolio usa exclusivamente modo dark. `ThemeToggle` se conserva en el código como capacidad futura, pero no se renderiza en las acciones desktop ni en el menú móvil del Header.

---

## 2. Resumen ejecutivo

PRD-02 construye el Header global y el sistema de navegación principal del portfolio profesional de Marco Vega.

PRD-01 creó la foundation: `PortfolioPage`, `PortfolioLayout`, `ThemeProvider`, `LocaleProvider`, `useTheme()`, `useLocale()`, tokens, estilos globales y `<main id="main">`. PRD-02 consume esa foundation para responder una nueva pregunta:

> ¿Cómo se orienta y controla el visitante dentro del portfolio?

Este PRD introduce `Header`, `Brand`, `DesktopNav`, `NavLink`, `MobileNav`, `ThemeToggle`, `LanguageToggle`, `ResumeLink`, `SkipLink`, `PageContainer` y el modelo conceptual `NavItem`.

PRD-02 no construye Hero, About, Experience, Projects, Contact, Footer ni ninguna sección de contenido. Tampoco crea targets falsos para los anchors. Solo define el contrato de navegación que las secciones futuras deberán cumplir.

Resultado esperado:

> Header estructuralmente completo, con navegación definida, pero con targets de secciones pendientes hasta PRD posteriores.

Esta condición es aceptable durante desarrollo incremental, pero no es válida para release final de producción hasta que todos los anchors tengan destinos reales.

---

## 3. Problema que resuelve

Después de PRD-01, la aplicación ya no es el starter Laravel y tiene una foundation propia, pero todavía no ofrece orientación ni controles globales al visitante.

Estado posterior a PRD-01:

```txt
PortfolioPage
└── PortfolioLayout
    └── main#main
```

Problema:

- El visitante no tiene navegación.
- No existe acceso visible al cambio de idioma.
- No existe control visual para cambiar tema.
- No existe acceso visible al CV.
- No existe identidad navegable en el Header.
- No existe `SkipLink` para saltar al contenido principal.
- No existe geometría horizontal compartida para el Header.

PRD-02 resuelve ese problema incorporando un Header global dentro de `PortfolioLayout`, sin mezclarlo con Hero ni con la composición específica de la home.

Estado objetivo:

```txt
PortfolioLayout
├── SkipLink
├── Header
│   └── PageContainer
│       ├── Brand
│       ├── DesktopNav
│       │   └── NavLink × 4
│       ├── ResumeLink
│       ├── LanguageToggle
│       ├── ThemeToggle
│       └── MobileNav
│           ├── Navigation links
│           └── Header actions
└── main#main
```

---

## 4. Objetivos

### Objetivo principal

Construir el Header global sticky del portfolio con navegación, controles de idioma/tema, acceso al CV cuando exista asset confirmado, identidad de marca y baseline de accesibilidad.

### Objetivos secundarios

- Integrar `Header` dentro de `PortfolioLayout`, no dentro de `PortfolioPage`.
- Crear o consumir `PageContainer` según el estado real del repositorio:
  - si no existe, PRD-02 lo introduce;
  - si ya existe por implementación previa, PRD-02 lo consume y no lo duplica.
- Crear `Brand` como enlace accesible hacia `/`.
- Crear `DesktopNav` con navegación principal.
- Crear `NavLink` como abstracción mínima de enlaces de navegación.
- Crear modelo conceptual `NavItem` para centralizar labels ES/EN y hrefs.
- Crear `MobileNav` responsive como disclosure navigation, no como modal dialog.
- Crear `ThemeToggle` usando `useTheme()`.
- Crear `LanguageToggle` usando `useLocale()`.
- Crear `ResumeLink` sin inventar rutas ni assets.
- Crear `SkipLink` apuntando a `#main`.
- Mantener compatibilidad con light/dark mediante semantic tokens.
- Mantener compatibilidad con ES/EN sin instalar i18n.
- Mantener verde el quality gate heredado.
- Ejecutar `composer ci:check`, `npm run build` y los gates SSR heredados como validaciones separadas.

### Métricas de éxito

- El Header aparece globalmente dentro de `PortfolioLayout`.
- El Header es sticky top.
- El Brand navega a `/`.
- La navegación principal contiene exactamente:
  - About / Sobre mí.
  - Experience / Experiencia.
  - Projects / Proyectos.
  - Contact / Contacto.
- `Core Stack` no aparece en la navegación principal.
- `ThemeToggle` cambia theme usando `useTheme()`.
- `LanguageToggle` cambia locale usando `useLocale()`.
- El menú móvil funciona como disclosure navigation.
- El menú móvil abre, cierra, responde a `Escape` y gestiona atributos ARIA mínimos.
- `SkipLink` permite saltar a `main#main`.
- `ResumeLink` abre el CV en nueva pestaña solo si existe PDF/ruta confirmada.
- No se crean Hero ni secciones falsas.
- No se implementa scroll spy ni estado de sección activa.
- `composer ci:check` pasa.
- `npm run build` pasa.

---

## 5. Usuarios y roles involucrados

### Visitante del portfolio

Usuario público que visita el portfolio para conocer a Marco Vega, revisar experiencia, proyectos o contacto.

En PRD-02 el visitante puede:

- Reconocer la identidad de Marco Vega en el Header.
- Ver el contrato de navegación hacia secciones futuras.
- Cambiar idioma visible del Header entre ES/EN.
- Cambiar theme entre light/dark.
- Acceder al CV si existe asset confirmado.
- Saltar directamente al contenido principal mediante `SkipLink`.

### Marco Vega / Product Owner

Responsable de validar que:

- La navegación sea breve y profesional.
- El Header no se convierta en Hero.
- La identidad visual no reutilice posicionamiento antiguo como `FULL STACK DEVELOPER`.
- La experiencia siga siendo Light first, Dark supported.
- El idioma inicial y labels sean consistentes.
- El CV no apunte a rutas falsas.
- El Header sea sticky top sin ocupar espacio excesivo.

### Agente IA implementador

Responsable de implementar el Header y navegación respetando las responsabilidades de PRD-01, sin duplicar providers, sin crear secciones fuera de alcance y sin instalar dependencias nuevas.

---

## 6. Alcance funcional

PRD-02 incluye únicamente:

1. Integrar `Header` dentro de `PortfolioLayout`.
2. Crear `SkipLink` apuntando a `#main`.
3. Crear o consumir `PageContainer` sin duplicarlo.
4. Crear `Header`.
5. Crear `Brand`.
6. Crear `DesktopNav`.
7. Crear `NavLink`.
8. Crear `MobileNav` como disclosure navigation.
9. Crear `ThemeToggle`.
10. Crear `LanguageToggle`.
11. Crear `ResumeLink`.
12. Crear modelo conceptual `NavItem`.
13. Definir navegación principal con cuatro items:
    - `about`.
    - `experience`.
    - `projects`.
    - `contact`.
14. Definir labels ES/EN para navegación.
15. Definir destinos de navegación pertenecientes a la Home:
     - sección `about`.
     - sección `experience`.
     - sección `projects`.
     - sección `contact`.
16. Declarar que esos anchors son una limitación temporal hasta que existan secciones reales.
17. Definir comportamiento responsive del Header.
18. Definir comportamiento mínimo de accesibilidad para navegación móvil.
19. Definir uso de semantic tokens para estilos light/dark.
20. Definir estados visuales mínimos: default, hover, focus-visible y pressed/open cuando aplique.
21. Excluir estado current/active section y scroll spy.
22. Definir acceso al CV sin inventar asset.
23. Definir que CV abre en nueva pestaña si existe destino confirmado.
24. Separar automated executable checks, code review/static checks y manual/browser QA.
25. Ejecutar `composer ci:check`.
26. Ejecutar `npm run build`.
27. Ejecutar `npm run build:ssr` y el smoke test SSR heredado de PRD-01.

---

## 7. Fuera de alcance

PRD-02 no debe construir:

```txt
Hero
HeroVisual
HeroActions

About
AboutSection

CoreStack
TechnologyItem

Experience
ExperienceItem

Projects
ProjectCard

Contact
ContactForm

Footer

CaseStudy
ProjectDetail
```

Tampoco debe crear:

```txt
Button
Card
Badge
Modal
Tooltip
SectionHeading
Section
Dropdown
Tabs
Accordion
CommandPalette
```

También queda fuera de alcance:

- Crear targets reales para `#about`, `#experience`, `#projects`, `#contact`.
- Crear secciones falsas vacías solo para que los anchors funcionen.
- Implementar scroll spy.
- Implementar `aria-current` para sección activa.
- Implementar active nav item basado en posición de scroll.
- Crear contenido editorial del Hero.
- Crear copy profesional extendido.
- Crear Matrix effect.
- Crear Kamehameha u otros efectos creativos.
- Crear formulario de contacto.
- Crear case studies.
- Crear navegación a páginas internas de proyectos.
- Crear SEO completo.
- Instalar librería i18n.
- Instalar librería de UI.
- Instalar librería de animaciones.
- Instalar runner frontend/browser testing nuevo.
- Redefinir `Theme`.
- Redefinir `Locale`.
- Reimplementar persistencia de theme.
- Reimplementar persistencia de locale.
- Modificar bootstrap anti-FOUC salvo que sea necesario para integrar correctamente `ThemeToggle`.
- Modificar la estrategia global de tokens salvo uso de los semantic tokens existentes.
- Cambiar `composer ci:check` para incluir `npm run build` sin decisión técnica explícita.
- Añadir cookies o persistencia server-side para resolver la reconciliación inicial de locale/theme.

---

## 8. Contexto del sistema actual

PRD-01 dejó establecida la foundation del portfolio:

```txt
PortfolioPage
PortfolioLayout
ThemeProvider
LocaleProvider
useTheme()
useLocale()
Theme = 'light' | 'dark'
Locale = 'es' | 'en'
Brand tokens
Semantic tokens
Global styles
main#main
```

PRD-01 también dejó fuera explícitamente:

```txt
Header
Brand
DesktopNav
MobileNav
NavLink
ThemeToggle
LanguageToggle
ResumeLink
```

PRD-02 toma esos componentes como alcance deliberado.

### Estado de `PageContainer`

La verdad del repositorio manda:

- Si `PageContainer` ya existe por una implementación previa, PRD-02 debe consumirlo y no duplicarlo.
- Si `PageContainer` no existe, PRD-02 debe implementarlo porque ahora tiene un consumidor real: Header.
- En ambos casos, `PageContainer` no debe envolver todo `main` ni imponer geometría universal a secciones futuras.

Arquitectura conceptual:

```txt
PRD-01
Foundation

PRD-02
Header & Navigation

PRD-03
Hero
```

Frontera conceptual:

```txt
PRD-01
¿Cómo funciona la foundation?

PRD-02
¿Cómo me identifico, navego y cambio preferencias?

PRD-03
¿Qué entiende el visitante de Marco al entrar?
```

---

## 9. Playbooks aplicados al PRD

### Product Discovery / PRD Base

Activo.
PRD-02 define problema, usuarios, alcance, fuera de alcance, decisiones tomadas, riesgos de sobreingeniería y dependencia temporal con secciones futuras.

### Frontend / UX

Activo.
Aplica porque se construye Header, navegación, responsive, MobileNav, estados hover/focus, accesibilidad, SkipLink y controles visuales.

### Data / Modelo conceptual

Activo en modo ligero.
Aplica por el modelo conceptual `NavItem`, labels ES/EN y hrefs de navegación.

### Seguridad / Roles / Trazabilidad

No activo.
No hay login, roles, permisos, datos sensibles ni acciones críticas.

### Backend / API / Reglas

No activo.
PRD-02 no crea rutas Laravel nuevas, endpoints, controllers, APIs ni lógica backend.

### QA / Acceptance

Activo.
Aplica por criterios Given/When/Then, revisión estática, manual/browser QA, pruebas responsive, accesibilidad y matriz de trazabilidad.

### DevOps / Integraciones / Operación

No activo.
No hay jobs, colas, cron, emails, webhooks, servicios externos ni monitoreo nuevo.

---

## 10. Requisitos funcionales

### RF-001 — Header global en PortfolioLayout

Como visitante del portfolio, quiero ver un Header global para orientarme y acceder a navegación y preferencias desde cualquier página que use el layout.

`Header` debe integrarse dentro de `PortfolioLayout`, no dentro de `PortfolioPage`.

Estructura conceptual:

```txt
PortfolioLayout
├── SkipLink
├── Header
└── main#main
```

---

### RF-002 — Header sticky top

Como visitante del portfolio, quiero que la navegación principal permanezca disponible mientras navego la página.

El Header debe ser `sticky top`.

El SDD podrá definir:

- altura exacta;
- background;
- border;
- backdrop;
- z-index;
- transición;
- comportamiento visual al hacer scroll.

Pero PRD-02 cierra la decisión de producto:

> El Header será sticky top, no estático.

---

### RF-003 — SkipLink hacia main

Como usuario de teclado o tecnología asistiva, quiero poder saltar directamente al contenido principal para evitar recorrer toda la navegación.

Debe existir un `SkipLink` que apunte a:

```txt
#main
```

Labels:

```txt
es → Saltar al contenido
en → Skip to content
```

El link puede estar visualmente oculto hasta recibir focus.

---

### RF-004 — PageContainer para geometría horizontal del Header

Como desarrollador del portfolio, quiero que el Header use una geometría horizontal común para mantener alineación consistente.

`PageContainer` debe controlar:

```txt
max-width
centrado
padding izquierdo
padding derecho
gutters responsive
```

Regla de ownership:

- Si ya existe, consumirlo.
- Si no existe, implementarlo en PRD-02.
- No duplicarlo.
- No envolver todo `main`.
- No forzar que todas las secciones futuras tengan la misma geometría.

---

### RF-005 — Header como orquestador del módulo

Como desarrollador del portfolio, quiero que `Header` componga los elementos de navegación sin absorber su lógica interna.

`Header` debe componer:

```txt
Brand
DesktopNav
ResumeLink
LanguageToggle
ThemeToggle
MobileNav
```

No debe:

```txt
controlar directamente theme global
controlar directamente locale global
crear contenido Hero
crear secciones de página
implementar scroll spy
```

---

### RF-006 — Brand navegable

Como visitante del portfolio, quiero poder hacer clic en la identidad de Marco Vega para volver al inicio.

`Brand` debe ser conceptualmente un enlace:

```html
<a href="/">Marco Vega</a>
```

Puede incluir monograma/logo si existe asset válido, pero debe tener nombre accesible equivalente a `Marco Vega`.

No debe reutilizar assets antiguos que comuniquen `FULL STACK DEVELOPER` como posicionamiento principal.

---

### RF-007 — DesktopNav

Como visitante en desktop/tablet amplio, quiero ver navegación principal visible para moverme entre secciones del portfolio.

`DesktopNav` debe mostrar exactamente cuatro enlaces:

```txt
Sobre mí / About
Experiencia / Experience
Proyectos / Projects
Contacto / Contact
```

`Core Stack` no debe aparecer en la navegación principal.

---

### RF-008 — Modelo conceptual NavItem

Como desarrollador del portfolio, quiero centralizar hrefs y labels para evitar strings duplicados en varios componentes.

Debe existir un modelo conceptual equivalente a:

```ts
type NavItem = {
  id: 'about' | 'experience' | 'projects' | 'contact';
  fragment: string;
  label: {
    es: string;
    en: string;
  };
};
```

No se exige esta representación TypeScript exacta. La implementación puede derivar tipos con `as const`, `satisfies`, unions, helpers o una estructura equivalente.

Lo obligatorio es que:

- los cuatro IDs estén controlados;
- los destinos sean los cuatro anchors aprobados;
- los labels bilingües estén centralizados;
- TypeScript detecte valores no válidos o inconsistentes cuando sea razonable según la estructura elegida.

---

### RF-009 — NavLink reutilizable

Como desarrollador del portfolio, quiero que los enlaces de navegación compartan semántica, estados visuales y accesibilidad.

`NavLink` debe manejar:

```txt
href
label
estado hover
estado focus-visible
estilos consistentes
```

No debe implementar todavía:

```txt
scroll spy
current section
aria-current basado en sección visible
active nav item persistente
```

El estado `:active` transitorio del navegador puede existir, pero no debe confundirse con “sección actual”.

---

### RF-010 — Contrato temporal de anchors futuros

Como desarrollador del portfolio, quiero definir los anchors de navegación desde ahora para que las secciones futuras los implementen consistentemente.

PRD-02 define destinos de navegación pertenecientes a la Home:

```txt
Home + #about
Home + #experience
Home + #projects
Home + #contact
```

Pero PRD-02 no debe crear componentes falsos ni secciones vacías para esos targets.

### Limitación conocida

Los destinos pueden quedar sin target real durante el desarrollo incremental.

Este estado es una limitación conocida de desarrollo y no es aceptable para release final de producción.

La implementación concreta de Home + fragment se define en SDD-02. El PRD no prescribe Wayfinder ni otra API de generación de URLs.

Antes de producción, los PRD correspondientes deberán implementar los targets reales.

---

### RF-011 — MobileNav responsive como disclosure navigation

Como visitante en móvil, quiero acceder a la navegación mediante un menú adaptado a pantallas pequeñas.

`MobileNav` debe ser un **disclosure navigation**, no un modal dialog.

Debe manejar:

```txt
estado closed/open
botón de apertura/cierre
aria-expanded
aria-controls
panel de navegación
links de navegación
acciones del Header cuando no quepan en desktop
cierre al seleccionar destino
cierre con Escape
retorno de focus al trigger cuando cierre por Escape
```

No debe implementar:

```txt
modal dialog
overlay bloqueante obligatorio
focus trap complejo
background inert
```

No deben crearse subcomponentes como `MobileNavTrigger`, `MobileNavPanel`, `MobileNavItem` o `MobileNavActions` salvo que la implementación real lo justifique.

---

### RF-012 — Comportamiento responsive sin estado inconsistente

Como visitante, quiero que el Header no quede en un estado visual roto al cambiar entre mobile y desktop.

El cambio entre layouts no debe dejar una navegación visualmente superpuesta, inaccesible o inconsistente.

El SDD puede decidir si:

- resetea el estado al cruzar breakpoint;
- oculta correctamente con CSS;
- usa `matchMedia`;
- usa otra estrategia equivalente.

El PRD no exige una implementación concreta con `resize` listener.

---

### RF-013 — ThemeToggle usando useTheme

Como visitante del portfolio, quiero poder cambiar entre light y dark desde el Header.

`ThemeToggle` debe consumir:

```txt
useTheme()
```

Debe poder:

```txt
leer theme activo
cambiar a light
cambiar a dark
exponer estado accesible
```

No debe:

```txt
leer localStorage directamente
escribir localStorage directamente
redefinir Theme
modificar html[data-theme] directamente si eso ya pertenece al provider
duplicar lógica anti-FOUC
```

---

### RF-014 — LanguageToggle usando useLocale

Como visitante del portfolio, quiero poder cambiar entre español e inglés desde el Header.

`LanguageToggle` debe consumir:

```txt
useLocale()
```

Debe poder:

```txt
leer locale activo
cambiar a es
cambiar a en
exponer estado accesible
```

No debe:

```txt
leer localStorage directamente
escribir localStorage directamente
redefinir Locale
modificar html[lang] directamente si eso ya pertenece al provider
instalar i18n
crear diccionario global del portfolio
```

---

### RF-015 — Labels bilingües del Header

Como visitante, quiero que los labels del Header cambien con el idioma activo.

Labels requeridos:

| Elemento | ES | EN |
|---|---|---|
| About nav | Sobre mí | About |
| Experience nav | Experiencia | Experience |
| Projects nav | Proyectos | Projects |
| Contact nav | Contacto | Contact |
| Resume | CV | Resume |
| Theme toggle light | Claro | Light |
| Theme toggle dark | Oscuro | Dark |
| Language ES | ES | ES |
| Language EN | EN | EN |
| SkipLink | Saltar al contenido | Skip to content |
| Menu open | Abrir menú | Open menu |
| Menu close | Cerrar menú | Close menu |

---

### RF-016 — ResumeLink con asset real y apertura en nueva pestaña

Como visitante del portfolio, quiero acceder al CV desde el Header cuando exista un PDF válido.

`ResumeLink` debe ser una acción utilitaria separada de la navegación principal.

Debe:

```txt
usar label ES/EN
apuntar a un PDF real/versionado o ruta pública existente
tener nombre accesible
abrir en nueva pestaña
usar rel seguro cuando aplique
```

Comportamiento esperado:

```html
<a href="/ruta-real-cv.pdf" target="_blank" rel="noreferrer">
  CV / Resume
</a>
```

No debe:

```txt
usar href="#"
usar href vacío
inventar ruta de PDF
crear un PDF falso
apuntar a asset inexistente
bloquear toda la implementación del Header si el PDF no está disponible
usar download como comportamiento obligatorio
```

Si no existe PDF o ruta confirmada, `ResumeLink` debe no renderizarse y debe registrarse como:

```txt
Pending product asset:
ResumeLink no renderizado porque no existe PDF/ruta confirmada.
Decisión requerida: proporcionar asset o ruta pública del CV.
```

Esto no bloquea la implementación de PRD-02.

---

### RF-017 — Responsive behavior del Header

Como visitante, quiero que el Header sea usable en desktop, tablet y móvil.

Comportamiento esperado:

```txt
desktop/tablet amplio
    → Brand + DesktopNav + acciones visibles

mobile/tablet estrecho
    → Brand + acciones mínimas viables + MobileNav
```

El breakpoint exacto queda para SDD o implementación, pero el Header no debe romperse ni generar overflow horizontal.

---

### RF-018 — Estados visuales mínimos

Como visitante, quiero recibir feedback visual al interactuar con navegación y controles.

Los elementos interactivos del Header deben tener estados:

```txt
default
hover
focus-visible
pressed/open cuando aplique
```

Los estilos deben usar semantic tokens definidos por PRD-01.

Fuera de alcance en PRD-02:

```txt
current section
scroll-aware active navigation
aria-current basado en scroll
```

---

### RF-019 — Sin dependencia nueva

Como Product Owner, quiero que PRD-02 no aumente complejidad técnica sin necesidad.

No se deben instalar dependencias nuevas para:

```txt
menú móvil
iconos
animaciones
i18n
testing browser
UI components
scroll behavior
```

Si el agente considera imprescindible una dependencia, debe detenerse y pedir aprobación.

---

### RF-020 — Validaciones separadas

Como Product Owner, quiero mantener la disciplina de calidad definida en PRD-01.

Deben ejecutarse y pasar:

```bash
composer ci:check
npm run build
npm run build:ssr
```

No debe asumirse que `composer ci:check` incluye `npm run build`.

Como PRD-01 mantiene SSR habilitado, PRD-02 también hereda el smoke test runtime SSR. La respuesta de `/` debe conservar markup server-rendered, identidad `Marco Vega`, estructura de Header y ausencia de branding Laravel.

---

## 11. Reglas de negocio

### RN-001 — Header pertenece al shell global

Condición: Cuando una página usa `PortfolioLayout`.
Comportamiento esperado: Debe recibir el Header global.
Excepción: Si en el futuro existe una página que requiera layout sin Header, eso deberá definirse en otro PRD.

---

### RN-002 — PortfolioPage no controla Header

Condición: Cuando se implementa PRD-02.
Comportamiento esperado: `PortfolioPage` no debe importar ni orquestar `Header`.
Excepción: Ninguna en PRD-02.

---

### RN-003 — Header es sticky top

Condición: Cuando el usuario navega el portfolio.
Comportamiento esperado: El Header permanece disponible mediante comportamiento sticky top.
Excepción: Ajustes visuales específicos quedan para SDD, pero no se debe convertir en header estático sin decisión explícita.

---

### RN-004 — Navegación principal tiene cuatro items

Condición: Cuando se renderiza la navegación principal.
Comportamiento esperado: Debe mostrar About/Sobre mí, Experience/Experiencia, Projects/Proyectos y Contact/Contacto.
Excepción: Ninguna.

---

### RN-005 — Core Stack no entra en navegación principal

Condición: Cuando se construyen los `NavItem`.
Comportamiento esperado: `Core Stack` no debe incluirse como item principal.
Excepción: Futuro PRD puede reevaluarlo si cambia la arquitectura de contenido.

---

### RN-006 — Anchors definidos no implican secciones creadas

Condición: Cuando PRD-02 define `#about`, `#experience`, `#projects`, `#contact`.
Comportamiento esperado: Solo se define contrato de navegación.
Excepción: No se deben crear secciones falsas en PRD-02.

---

### RN-007 — Anchors sin targets son limitación temporal

Condición: Cuando PRD-02 se completa antes de las secciones reales.
Comportamiento esperado: Puede existir navegación estructural con anchors aún no resueltos.
Excepción: Ese estado no es válido para release final de producción.

---

### RN-008 — No hay active section en PRD-02

Condición: Cuando se implementan `NavLink` o `DesktopNav`.
Comportamiento esperado: No debe implementarse scroll spy, `aria-current` ni active item persistente.
Excepción: Estados transitorios nativos como hover, focus-visible o pressed/open sí aplican.

---

### RN-009 — MobileNav es disclosure, no modal

Condición: Cuando se implementa navegación móvil.
Comportamiento esperado: Debe comportarse como disclosure navigation.
Excepción: No implementar modal dialog, focus trap complejo o background inert sin nuevo PRD/SDD aprobado.

---

### RN-010 — ThemeToggle no es dueño del theme

Condición: Cuando el usuario cambia theme desde el Header.
Comportamiento esperado: `ThemeToggle` debe delegar en `useTheme()`.
Excepción: Ninguna.

---

### RN-011 — LanguageToggle no es dueño del locale

Condición: Cuando el usuario cambia idioma desde el Header.
Comportamiento esperado: `LanguageToggle` debe delegar en `useLocale()`.
Excepción: Ninguna.

---

### RN-012 — ResumeLink no puede apuntar a destino falso

Condición: Cuando se renderiza `ResumeLink`.
Comportamiento esperado: Debe apuntar a un PDF/ruta real confirmada y abrir en nueva pestaña.
Excepción: Si no existe destino confirmado, no se renderiza y se reporta como pending product asset.

---

### RN-013 — Brand no debe comunicar posicionamiento antiguo

Condición: Cuando se usa logo, monograma o asset visual.
Comportamiento esperado: Puede comunicar `Marco Vega`, pero no `FULL STACK DEVELOPER` como posicionamiento principal.
Excepción: Ninguna.

---

### RN-014 — MobileNav debe cerrar por navegación

Condición: Cuando el usuario selecciona un link dentro del menú móvil.
Comportamiento esperado: El menú debe cerrarse.
Excepción: Ninguna.

---

### RN-015 — MobileNav debe cerrar por Escape

Condición: Cuando el menú móvil está abierto y el usuario presiona `Escape`.
Comportamiento esperado: El menú debe cerrarse y devolver focus al trigger.
Excepción: Ninguna.

---

### RN-016 — No instalar dependencias sin aprobación

Condición: Cuando el agente necesita resolver navegación, icons, i18n, testing o animaciones.
Comportamiento esperado: Debe usar capacidades existentes.
Excepción: Si considera imprescindible una dependencia, debe detenerse y pedir aprobación.

---

## 12. Requisitos no funcionales

### Rendimiento

- El Header debe ser ligero.
- No debe instalar dependencias de UI, animación o i18n.
- El menú móvil no debe introducir lógica pesada.
- No debe bloquear el render inicial de la página.

### Seguridad

- No aplica autenticación ni permisos.
- `ResumeLink` no debe exponer rutas privadas.
- `ResumeLink` debe usar `rel="noreferrer"` o equivalente seguro cuando abra en nueva pestaña.
- No debe apuntar a archivos inexistentes o generados dinámicamente sin decisión.

### Accesibilidad

- `SkipLink` debe ser accesible por teclado.
- `SkipLink` debe ser el primer control enfocable y su activación debe llevar el foco a `main#main`.
- `main#main` debe poder recibir foco programático sin alterar la navegación normal.
- `Brand` debe tener nombre accesible.
- `MobileNav` debe ser disclosure navigation.
- `MobileNav` debe usar `aria-expanded`.
- `MobileNav` debe usar `aria-controls`.
- El trigger debe tener label accesible.
- El menú debe cerrar con `Escape`.
- El focus debe volver al trigger cuando cierre por `Escape`.
- Los controles deben tener focus visible.
- Los labels deben reflejar locale activo.
- Los contrastes deben respetar semantic tokens aprobados.
- `ThemeToggle` debe mantener un nombre accesible estable si utiliza `aria-pressed`.
- `LanguageToggle` debe exponer un nombre accesible para el grupo de idioma.
- Los controles ocultos en el layout alternativo no deben ser enfocables ni aparecer en el árbol de accesibilidad.

### Usabilidad

- Navegación corta y predecible.
- No mezclar navegación principal con acción utilitaria de CV.
- Header sticky top, compacto y no invasivo.
- La superficie del Header debe mantener contraste aunque exista contenido detrás.
- Header no debe competir con Hero futuro.
- MobileNav no debe generar overflow horizontal.
- ThemeToggle y LanguageToggle deben ser comprensibles.

### Compatibilidad

- Debe funcionar con la foundation de PRD-01.
- Debe usar `useTheme()` y `useLocale()` existentes.
- Debe compilar con TypeScript strict mode.
- Debe respetar Inertia/React existentes.

### Mantenibilidad

- `Header` orquesta, no concentra toda la lógica.
- `NavItem` centraliza labels y hrefs.
- `ThemeToggle` no duplica lógica de provider.
- `LanguageToggle` no duplica lógica de provider.
- `PageContainer` no debe imponerse sobre futuras secciones.
- La geometría horizontal base debe poder reutilizarse como token/componente por secciones futuras sin envolver todo `main`.
- `MobileNav` no debe convertirse en modal sin decisión explícita.
- No crear subcomponentes móviles prematuramente.

### Observabilidad

- No aplica monitoreo nuevo.
- Errores deben manifestarse en lint, typecheck, build, revisión estática o QA manual/browser.

### Disponibilidad

- La ruta `/` debe seguir respondiendo correctamente.
- El Header no debe impedir render del contenido principal.

### Escalabilidad

- PRD-03 debe poder agregar Hero dentro de `PortfolioPage` sin reimplementar Header.
- Futuros PRD de About, Experience, Projects y Contact deberán implementar anchors definidos.
- Futuros PRD podrán implementar scroll spy o active nav cuando existan targets reales.
- Futuras páginas de case studies podrán reutilizar `PortfolioLayout` y Header.

---

## 13. Interfaz esperada, flujo esperado o API esperada

### Estructura conceptual final

```txt
Browser
   │
   ▼
/
   │
   ▼
PortfolioPage
   │
   ▼
PortfolioLayout
   │
   ├── ThemeProvider
   ├── LocaleProvider
   │
   ├── SkipLink
   │
   ├── Header sticky top
   │    │
   │    └── PageContainer
   │         ├── Brand
   │         ├── DesktopNav
   │         │    └── NavLink × 4
   │         ├── ResumeLink
   │         ├── LanguageToggle
   │         ├── ThemeToggle
   │         └── MobileNav disclosure
   │
   └── main#main
        │
        └── todavía sin Hero
```

### Estructura conceptual de archivos

La estructura exacta puede ajustarse a convenciones existentes, pero conceptualmente:

```txt
resources/js/
│
├── components/
│   ├── layout/
│   │   ├── page-container.tsx
│   │   └── skip-link.tsx
│   │
│   └── navigation/
│       ├── header.tsx
│       ├── brand.tsx
│       ├── desktop-nav.tsx
│       ├── nav-link.tsx
│       ├── mobile-nav.tsx
│       ├── theme-toggle.tsx
│       ├── language-toggle.tsx
│       └── resume-link.tsx
│
├── data/
│   └── navigation.ts
│
├── types/
│   └── navigation.ts
│
└── layouts/
    └── portfolio-layout.tsx
```

No crear carpetas vacías sin archivos reales.

### NavItem esperado

```ts
type NavItem = {
  id: 'about' | 'experience' | 'projects' | 'contact';
  fragment: string;
  label: {
    es: string;
    en: string;
  };
};
```

La representación exacta puede variar. Lo importante es que el contrato controle ids, fragments aprobados y labels bilingües.

### Navigation data esperado

```ts
const NAV_ITEMS = [
  {
    id: 'about',
    fragment: '#about',
    label: { es: 'Sobre mí', en: 'About' },
  },
  {
    id: 'experience',
    fragment: '#experience',
    label: { es: 'Experiencia', en: 'Experience' },
  },
  {
    id: 'projects',
    fragment: '#projects',
    label: { es: 'Proyectos', en: 'Projects' },
  },
  {
    id: 'contact',
    fragment: '#contact',
    label: { es: 'Contacto', en: 'Contact' },
  },
];
```

### Flujo de ThemeToggle

```txt
Usuario activa ThemeToggle
   ↓
ThemeToggle llama useTheme()
   ↓
setTheme(nextTheme)
   ↓
ThemeProvider actualiza estado global
   ↓
PRD-01 persiste/aplica theme
```

### Flujo de LanguageToggle

```txt
Usuario activa LanguageToggle
   ↓
LanguageToggle llama useLocale()
   ↓
setLocale(nextLocale)
   ↓
LocaleProvider actualiza estado global
   ↓
PRD-01 persiste/aplica html[lang]
   ↓
Header actualiza labels visibles
```

### Flujo de MobileNav disclosure

```txt
Estado inicial: closed
   ↓
Usuario activa trigger
   ↓
open + aria-expanded=true
   ↓
Panel disclosure visible
   ↓
Usuario selecciona link o presiona Escape
   ↓
closed + aria-expanded=false
   ↓
si fue Escape, focus vuelve al trigger
```

---

## 14. Datos y modelo conceptual

### Entidad conceptual: NavItem

| Campo | Tipo | Obligatorio | Valores esperados | Descripción |
|---|---|---|---|---|
| id | string controlado | Sí | `about`, `experience`, `projects`, `contact` | Identificador estable del item |
| fragment | string controlado | Sí | `#about`, `#experience`, `#projects`, `#contact` | Fragmento de destino en la Home |
| label.es | string | Sí | Ver tabla de labels | Label español |
| label.en | string | Sí | Ver tabla de labels | Label inglés |

### Labels de navegación

| id | fragment | ES | EN |
|---|---|---|---|
| about | `#about` | Sobre mí | About |
| experience | `#experience` | Experiencia | Experience |
| projects | `#projects` | Proyectos | Projects |
| contact | `#contact` | Contacto | Contact |

### Entidad conceptual: ResumeLink

| Campo | Tipo | Obligatorio | Regla |
|---|---|---|---|
| href | string | Sí para renderizar | Debe apuntar a PDF/ruta real confirmada |
| label.es | string | Sí | `CV` |
| label.en | string | Sí | `Resume` |
| behavior | string | Sí | Abrir en nueva pestaña |
| available | boolean | Sí | Si no hay href confirmado, no renderizar |

### Estado conceptual: MobileNavState

```ts
type MobileNavState = 'closed' | 'open';
```

Reglas:

- Default: `closed`.
- Al abrir: `aria-expanded = true`.
- Al cerrar: `aria-expanded = false`.
- Al cerrar por Escape: focus vuelve al trigger.
- Es disclosure navigation, no modal.

---

## 15. Criterios de aceptación

### CA-001 vinculado a RF-001 — Header global en layout

- Given la aplicación usa `PortfolioLayout`
- When se renderiza `/`
- Then aparece `Header` dentro de `PortfolioLayout`
- And `PortfolioPage` no importa directamente `Header`

---

### CA-002 vinculado a RF-002 — Header sticky top

- Given el usuario navega la página
- When hace scroll
- Then el Header permanece disponible como sticky top
- And no se comporta como header estático

---

### CA-003 vinculado a RF-003 — SkipLink funcional

- Given el usuario navega con teclado
- When el `SkipLink` recibe focus
- Then se vuelve visible o perceptible
- And apunta a `#main`
- And su label corresponde al locale activo

---

### CA-004 vinculado a RF-004 — PageContainer existe o se consume sin duplicación

- Given el Header se renderiza
- When se inspecciona su estructura
- Then el contenido interno usa `PageContainer`
- And si `PageContainer` ya existía, no se duplicó
- And si no existía, fue implementado en PRD-02
- And `PageContainer` no envuelve todo `main`

---

### CA-005 vinculado a RF-005 — Header orquesta componentes

- Given se revisa `Header`
- When se inspecciona su composición
- Then compone Brand, navegación, controles y MobileNav
- And no contiene lógica duplicada de theme o locale
- And no implementa scroll spy

---

### CA-006 vinculado a RF-006 — Brand navega al inicio

- Given el Header se renderiza
- When el usuario activa Brand
- Then navega a `/`
- And el enlace tiene nombre accesible equivalente a `Marco Vega`

---

### CA-007 vinculado a RF-007 / RF-008 — DesktopNav muestra cuatro items centralizados

- Given viewport desktop
- When se renderiza Header
- Then se muestran cuatro links principales
- And los links son About/Sobre mí, Experience/Experiencia, Projects/Proyectos y Contact/Contacto
- And no aparece Core Stack como item principal
- And labels/hrefs están centralizados mediante modelo/dataset equivalente a `NavItem`

---

### CA-008 vinculado a RF-009 — NavLink tiene estados básicos sin active section

- Given un `NavLink`
- When el usuario hace hover o focus
- Then existe feedback visual
- And el focus es visible
- And los estilos usan semantic tokens
- And no se implementa scroll-aware active navigation
- And no se usa `aria-current` para sección visible

---

### CA-009 vinculado a RF-010 — Anchors declarados como limitación temporal

- Given PRD-02 define anchors futuros
- When se revisa la implementación
- Then no se crean componentes falsos About, Experience, Projects o Contact
- And no se crean secciones vacías solo para satisfacer anchors
- And queda documentado que anchors sin target no son válidos para producción final

---

### CA-010 vinculado a RF-011 — MobileNav es disclosure

- Given viewport móvil
- When el usuario activa el trigger del menú
- Then el menú se comporta como disclosure navigation
- And no se implementa modal dialog
- And no se exige focus trap complejo
- And `aria-expanded` refleja el estado

---

### CA-011 vinculado a RF-011 — MobileNav cierra al seleccionar link

- Given MobileNav está abierto
- When el usuario selecciona un NavLink
- Then MobileNav se cierra
- And `aria-expanded` pasa a false

---

### CA-012 vinculado a RF-011 — MobileNav cierra con Escape

- Given MobileNav está abierto
- When el usuario presiona Escape
- Then MobileNav se cierra
- And focus vuelve al trigger

---

### CA-013 vinculado a RF-012 — Responsive no queda inconsistente

- Given MobileNav puede estar abierto
- When el viewport cambia entre mobile y desktop
- Then no queda navegación superpuesta, inaccesible o visualmente rota

---

### CA-014 vinculado a RF-013 — ThemeToggle usa useTheme

- Given se renderiza `ThemeToggle`
- When el usuario cambia tema
- Then `ThemeToggle` usa `useTheme()`
- And no accede directamente a `localStorage`
- And no redefine `Theme`

---

### CA-015 vinculado a RF-014 — LanguageToggle usa useLocale

- Given se renderiza `LanguageToggle`
- When el usuario cambia idioma
- Then `LanguageToggle` usa `useLocale()`
- And no accede directamente a `localStorage`
- And no redefine `Locale`

---

### CA-016 vinculado a RF-015 — Labels cambian por locale

- Given locale activo `es`
- When se renderiza Header
- Then los labels aparecen en español

- Given locale activo `en`
- When se renderiza Header
- Then los labels aparecen en inglés

---

### CA-017 vinculado a RF-016 — ResumeLink no usa destino falso

- Given no existe PDF/ruta confirmada del CV
- When se renderiza Header
- Then `ResumeLink` no se renderiza
- And queda documentado como pending product asset

- Given existe PDF/ruta confirmada del CV
- When se renderiza Header
- Then `ResumeLink` aparece
- And apunta al destino real
- And abre en nueva pestaña
- And usa relación segura cuando aplique

---

### CA-018 vinculado a RF-017 — Header no rompe responsive

- Given viewport móvil
- When se renderiza Header
- Then no existe overflow horizontal
- And la navegación principal está disponible mediante MobileNav

---

### CA-019 vinculado a RF-018 — Estados visuales mínimos

- Given un elemento interactivo del Header
- When recibe hover, focus-visible o estado pressed/open
- Then existe feedback visual consistente
- And usa semantic tokens

---

### CA-020 vinculado a RF-019 — No hay dependencias nuevas

- Given se revisan cambios de package manager
- When se comparan dependencias
- Then no hay nuevas dependencias instaladas para Header, navegación, iconos, animación, i18n o testing browser
- And si hay propuesta de dependencia, existe aprobación explícita

---

### CA-021 vinculado a RF-020 — Validaciones pasan

- Given implementación completa de PRD-02
- When se ejecuta `composer ci:check`
- Then pasa

- Given implementación completa de PRD-02
- When se ejecuta `npm run build`
- Then pasa

---

## 16. Casos borde y manejo de errores

### CB-001 — Resume PDF no existe

- Caso: No hay asset/ruta confirmada del CV.
- Resultado esperado: `ResumeLink` no se renderiza.
- Se documenta como pending product asset.
- No usar `#`, href vacío ni ruta inventada.

---

### CB-002 — Anchor futuro no existe

- Caso: `#about`, `#experience`, `#projects` o `#contact` todavía no tienen target real.
- Resultado esperado: No crear secciones falsas.
- Documentar que es dependencia temporal hasta PRD correspondiente.
- No válido para release final de producción.

---

### CB-003 — Locale inválido

- Caso: `useLocale()` devuelve o recibe valor inesperado por error de runtime.
- Resultado esperado: TypeScript debe prevenirlo.
- El Header no debe crashear.
- Fallback visual recomendado: labels ES.

---

### CB-004 — Theme inválido

- Caso: `useTheme()` devuelve o recibe valor inesperado por error de runtime.
- Resultado esperado: TypeScript debe prevenirlo.
- El Header no debe crashear.
- Fallback visual recomendado: light.

---

### CB-005 — MobileNav abierto y cambio de layout

- Caso: usuario abre MobileNav y luego cambia a viewport desktop.
- Resultado esperado: no debe quedar panel móvil superpuesto, inaccesible o visualmente inconsistente.
- El SDD decide si se cierra estado, se oculta con CSS o se usa otra estrategia.

---

### CB-006 — Escape con MobileNav cerrado

- Caso: usuario presiona Escape cuando MobileNav está cerrado.
- Resultado esperado: no ocurre error ni cambio inesperado.

---

### CB-007 — Click en Brand con MobileNav abierto

- Caso: usuario abre MobileNav y activa Brand.
- Resultado esperado: navegación a `/`.
- Si el panel móvil está abierto, debe cerrarse o desmontarse por navegación.

---

### CB-008 — Header con main inexistente

- Caso: `SkipLink` apunta a `#main`, pero `main#main` fue eliminado accidentalmente.
- Resultado esperado: incumple PRD-01/PRD-02.
- Tests o QA deben detectarlo.

---

### CB-009 — Texto ilegible en mobile

- Caso: los controles se comprimen demasiado.
- Resultado esperado: ajustar distribución responsive sin quitar funcionalidades esenciales.

---

### CB-010 — Focus trap complejo innecesario

- Caso: MobileNav se implementa como si fuera modal.
- Resultado esperado: incumple PRD-02.
- Debe ser disclosure navigation salvo decisión posterior.

---

### CB-011 — Estado activo falso

- Caso: se marca About/Experience/Projects/Contact como activo sin targets reales ni scroll spy aprobado.
- Resultado esperado: incumple PRD-02.
- No usar `aria-current` ni active item persistente todavía.

---

## 17. Testing requerido

### Automated executable checks

Estos deben ejecutarse sin instalar nuevas dependencias frontend/browser.

- TEST-AUTO-001: `composer ci:check` pasa.
- TEST-AUTO-002: `npm run build` pasa.
- TEST-AUTO-003: `/` sigue respondiendo `200 OK`.
- TEST-AUTO-004: `/` sigue renderizando `portfolio/index`.
- TEST-AUTO-005: TypeScript compila con el modelo de navegación elegido.
- TEST-AUTO-006: no hay errores de lint o formato.

---

### SSR runtime checks

- TEST-SSR-001: `npm run build:ssr` pasa.
- TEST-SSR-002: el servidor SSR inicia y `php artisan inertia:check-ssr` responde.
- TEST-SSR-003: una solicitud SSR de `/` contiene markup server-rendered y la estructura semántica del Header.
- TEST-SSR-004: el smoke SSR confirma `Marco Vega`, labels ES iniciales y ausencia de branding Laravel.

---

### Code review / static inspection checks

Estos no tienen que ser tests ejecutables, pero deben verificarse en revisión de código.

- TEST-STATIC-001: `Header` está integrado en `PortfolioLayout`, no en `PortfolioPage`.
- TEST-STATIC-002: `Header` es sticky top.
- TEST-STATIC-003: `NAV_ITEMS` o equivalente contiene exactamente cuatro items.
- TEST-STATIC-004: `NAV_ITEMS` o equivalente no contiene `core-stack`.
- TEST-STATIC-005: labels y hrefs están centralizados.
- TEST-STATIC-006: no se redefine `Theme`.
- TEST-STATIC-007: no se redefine `Locale`.
- TEST-STATIC-008: `ThemeToggle` consume `useTheme()`.
- TEST-STATIC-009: `LanguageToggle` consume `useLocale()`.
- TEST-STATIC-010: `ThemeToggle` no toca `localStorage` directamente.
- TEST-STATIC-011: `LanguageToggle` no toca `localStorage` directamente.
- TEST-STATIC-012: no se crean componentes de secciones fuera de alcance.
- TEST-STATIC-013: no se implementa scroll spy.
- TEST-STATIC-014: no se usa `aria-current` para sección activa.
- TEST-STATIC-015: no se agregan dependencias nuevas no aprobadas.
- TEST-STATIC-016: `ResumeLink` no usa `href="#"`, href vacío ni ruta inventada.
- TEST-STATIC-017: `MobileNav` es disclosure navigation, no modal dialog.
- TEST-STATIC-018: `SkipLink` precede al Header y `main#main` puede recibir foco.
- TEST-STATIC-019: no se usa `text-accent` como texto normal en superficies sin contraste suficiente.
- TEST-STATIC-020: las variantes ocultas de acciones no son enfocables ni accesibles.

---

### Manual / Browser QA

Estas validaciones no deben forzar instalación de Playwright, Vitest, Cypress u otro runner.

- TEST-MANUAL-001: Header visible en desktop.
- TEST-MANUAL-002: Header permanece disponible como sticky top al hacer scroll.
- TEST-MANUAL-003: Brand navega a `/`.
- TEST-MANUAL-004: DesktopNav muestra cuatro links.
- TEST-MANUAL-005: Core Stack no aparece en navegación principal.
- TEST-MANUAL-006: Header no genera overflow horizontal en mobile.
- TEST-MANUAL-007: MobileNav abre.
- TEST-MANUAL-008: MobileNav cierra con trigger.
- TEST-MANUAL-009: MobileNav cierra al seleccionar link.
- TEST-MANUAL-010: MobileNav cierra con Escape.
- TEST-MANUAL-011: Focus vuelve al trigger tras Escape.
- TEST-MANUAL-012: `aria-expanded` cambia correctamente.
- TEST-MANUAL-013: `aria-controls` apunta a panel existente.
- TEST-MANUAL-014: SkipLink aparece/perceptible al focus.
- TEST-MANUAL-015: SkipLink apunta a `main#main`.
- TEST-MANUAL-016: ThemeToggle cambia light/dark.
- TEST-MANUAL-017: ThemeToggle no rompe persistencia de PRD-01.
- TEST-MANUAL-018: LanguageToggle cambia ES/EN.
- TEST-MANUAL-019: Labels del Header cambian con locale.
- TEST-MANUAL-020: ResumeLink no se renderiza si no hay PDF/ruta confirmada.
- TEST-MANUAL-021: ResumeLink abre en nueva pestaña si existe destino real.
- TEST-MANUAL-022: Focus-visible es claro en links y controles.
- TEST-MANUAL-023: Header se ve correctamente en light y dark.
- TEST-MANUAL-024: No aparece contenido Hero.
- TEST-MANUAL-025: No se crean secciones falsas.
- TEST-MANUAL-026: Al cambiar viewport no queda navegación móvil superpuesta o inconsistente.
- TEST-MANUAL-027: No hay active nav item persistente ni scroll spy.

---

### Pruebas de permisos

No aplican. PRD-02 no introduce autenticación, roles ni permisos.

### Pruebas de API

No aplican. PRD-02 no crea endpoints.

---

## 18. Definition of Done

PRD-02 se considera terminado solo si:

- `Header` está integrado en `PortfolioLayout`.
- `Header` no está orquestado desde `PortfolioPage`.
- Header es sticky top.
- Existe `SkipLink`.
- `SkipLink` apunta a `#main`.
- `SkipLink` es el primer control enfocable.
- Activar `SkipLink` lleva el foco a `main#main`.
- `main#main` puede recibir foco programático.
- Existe o se consume `PageContainer` sin duplicación.
- `PageContainer` se usa en Header.
- `PageContainer` no envuelve todo `main`.
- Existe `Brand`.
- `Brand` enlaza a `/`.
- `Brand` tiene nombre accesible equivalente a `Marco Vega`.
- Los destinos de secciones pertenecen a la Home y funcionan desde rutas futuras.
- Existe `DesktopNav`.
- Existe `NavLink`.
- Existe `MobileNav`.
- `MobileNav` es disclosure navigation, no modal.
- Existe `ThemeToggle`.
- Existe `LanguageToggle`.
- Existe `ResumeLink` con comportamiento seguro ante asset ausente.
- Existe modelo conceptual `NavItem` o equivalente.
- La navegación principal tiene exactamente cuatro items.
- `Core Stack` no aparece como navegación principal.
- Los labels cambian entre ES/EN.
- `ThemeToggle` consume `useTheme()`.
- `ThemeToggle` no toca `localStorage` directamente.
- `ThemeToggle` no redefine `Theme`.
- `LanguageToggle` consume `useLocale()`.
- `LanguageToggle` no toca `localStorage` directamente.
- `LanguageToggle` no redefine `Locale`.
- `MobileNav` abre y cierra.
- `MobileNav` usa `aria-expanded`.
- `MobileNav` usa `aria-controls`.
- `MobileNav` cierra al seleccionar link.
- `MobileNav` cierra con Escape.
- Focus vuelve al trigger al cerrar por Escape.
- `ResumeLink` no usa href falso.
- Si no hay PDF/ruta confirmada, `ResumeLink` no se renderiza y queda como pending product asset.
- Si hay PDF/ruta confirmada, `ResumeLink` abre en nueva pestaña.
- No se crean Hero ni secciones de contenido.
- No se crean targets falsos de anchors.
- Queda documentado que anchors sin targets no son válidos para producción final.
- No se implementa scroll spy.
- No se implementa active nav item persistente.
- No se usa `aria-current` para sección visible.
- No se instala dependencia nueva.
- Header no genera overflow horizontal en mobile.
- Header usa semantic tokens.
- `text-accent` no se usa como texto normal donde no alcance contraste requerido.
- Focus-visible es claro.
- Los nombres de `ThemeToggle` permanecen estables cuando usa `aria-pressed`.
- `LanguageToggle` tiene un nombre accesible de grupo.
- Las acciones ocultas en el layout alternativo no son enfocables ni accesibles.
- `composer ci:check` pasa.
- `npm run build` pasa.
- `npm run build:ssr` pasa.
- El smoke runtime SSR pasa.
- Code review/static checks quedan revisados.
- QA manual/browser queda documentada.

---

## 19. Instrucciones para el agente IA

### Hard constraints

El agente no debe:

- Implementar Hero.
- Implementar About.
- Implementar CoreStack.
- Implementar Experience.
- Implementar Projects.
- Implementar Contact.
- Implementar Footer.
- Crear secciones vacías para anchors.
- Crear contenido editorial.
- Crear scroll spy.
- Crear active nav item persistente.
- Usar `aria-current` para sección visible.
- Crear Matrix effect.
- Crear Kamehameha.
- Crear design system completo.
- Instalar dependencias nuevas sin aprobación.
- Redefinir `Theme`.
- Redefinir `Locale`.
- Duplicar `ThemeProvider`.
- Duplicar `LocaleProvider`.
- Leer/escribir `localStorage` directamente desde toggles.
- Inventar ruta de CV.
- Usar `href="#"` para ResumeLink.
- Implementar MobileNav como modal dialog.
- Modificar `composer ci:check` para incluir `npm run build` salvo decisión explícita.

### Reglas de integración con PRD-01

- Consumir `useTheme()` desde `ThemeToggle`.
- Consumir `useLocale()` desde `LanguageToggle`.
- No cambiar `main#main`.
- No cambiar semantic tokens globales sin aprobación.
- No modificar bootstrap anti-FOUC salvo necesidad clara y justificada.

### Reglas de navegación

- Usar exactamente cuatro items principales.
- No agregar Core Stack a navegación principal.
- No agregar Blog, Services, Testimonials, Skills o enlaces no aprobados.
- No inventar páginas internas.
- No usar anchors distintos a los definidos sin aprobación.
- No crear smooth scrolling con dependencia externa.
- Documentar que anchors sin targets son limitación temporal no válida para producción final.

### Reglas de MobileNav

- Implementar como disclosure navigation.
- Implementar estado open/closed.
- Implementar `aria-expanded`.
- Implementar `aria-controls`.
- Implementar cierre con Escape.
- Implementar cierre al seleccionar link.
- Devolver focus al trigger al cerrar por Escape.
- No crear focus trap complejo.
- No usar modal dialog.
- No fragmentar prematuramente en múltiples subcomponentes sin necesidad real.

### Reglas de ResumeLink

- No inventar ruta de CV.
- No usar `href="#"`.
- No usar href vacío.
- No apuntar a asset inexistente.
- No generar PDF.
- Si no existe PDF/ruta confirmada, no renderizar `ResumeLink`.
- Reportar como pending product asset.
- Si existe PDF/ruta confirmada, abrir en nueva pestaña con relación segura cuando aplique.

### Reglas de validación

- Ejecutar `composer ci:check`.
- Ejecutar `npm run build` por separado.
- Ejecutar `npm run build:ssr` por separado.
- Ejecutar el smoke test runtime SSR heredado de PRD-01.
- Separar automated executable checks de code review/static checks.
- Separar code review/static checks de manual/browser QA.
- Documentar QA manual/browser si no existe infraestructura automática.

### Señales para detenerse y preguntar

El agente debe detenerse si encuentra:

- `useTheme()` o `useLocale()` no existen o no funcionan.
- `PortfolioLayout` no existe o difiere del PRD-01.
- `main#main` no existe.
- No hay forma clara de integrar Header en `PortfolioLayout`.
- El sistema de tokens no está disponible.
- Se necesita dependencia nueva.
- El Product Owner exige renderizar CV pero no existe asset/ruta.
- Hay conflicto entre anchors definidos y estructura real.
- La implementación requiere modificar módulos fuera de alcance.
- `composer ci:check` falla por causas no relacionadas.
- `npm run build` falla por causas no relacionadas.
- `npm run build:ssr` o el smoke test SSR falla por causas no relacionadas.

Formato de bloqueo:

```txt
Bloqueo por ambigüedad crítica:
- Punto ambiguo:
- Impacto:
- Opciones posibles:
- Recomendación:
- Decisión requerida del usuario:
```

Formato de pending product asset:

```txt
Pending product asset:
- Asset pendiente:
- Impacto:
- Solución temporal segura:
- Decisión requerida del usuario:
```

---

## 20. Riesgos, supuestos y preguntas abiertas

### Riesgos

#### R-001 — Header se convierte en Hero

Riesgo: El agente agrega rol, propuesta de valor, CTA o copy profesional dentro del Header.

Mitigación: PRD-02 limita Brand a identidad navegable y deja Hero para PRD-03.

---

#### R-002 — Crear secciones falsas para anchors

Riesgo: El agente crea About, Experience, Projects y Contact vacíos para que los links funcionen.

Mitigación: PRD-02 define anchors como contrato temporal, no como permiso para crear secciones.

---

#### R-003 — Navegación aparentemente terminada pero anchors sin target

Riesgo: El Header parece completo, pero los links todavía no navegan a secciones reales.

Mitigación: declarar limitación conocida no válida para producción final.

---

#### R-004 — ThemeToggle duplica lógica de PRD-01

Riesgo: El control visual toca `localStorage`, `html[data-theme]` o redefine tipos.

Mitigación: ThemeToggle debe usar `useTheme()`.

---

#### R-005 — LanguageToggle duplica lógica de PRD-01

Riesgo: El control visual toca `localStorage`, `html[lang]` o instala i18n.

Mitigación: LanguageToggle debe usar `useLocale()`.

---

#### R-006 — ResumeLink con destino falso

Riesgo: El agente usa `#`, ruta inventada o asset inexistente.

Mitigación: si no hay PDF/ruta confirmada, no renderizar y reportar pending product asset.

---

#### R-007 — MobileNav sobreingenierizado

Riesgo: El agente crea modal, focus trap, overlay complejo o introduce librería.

Mitigación: MobileNav debe ser disclosure navigation.

---

#### R-008 — MobileNav inaccesible

Riesgo: Menú abre visualmente pero no maneja ARIA, Escape o focus.

Mitigación: criterios explícitos de accesibilidad.

---

#### R-009 — Header demasiado grande

Riesgo: El Header ocupa demasiado espacio y compite con Hero futuro.

Mitigación: Header debe ser navegación global sticky compacta, no bloque editorial.

---

#### R-010 — Dependencias nuevas innecesarias

Riesgo: Instalar iconos, animación, UI kit o testing browser.

Mitigación: prohibición explícita sin aprobación.

---

#### R-011 — PageContainer mal aplicado

Riesgo: Envolver todo `main` y limitar futuras secciones full-width.

Mitigación: PageContainer se usa en Header, no como wrapper universal de la home.

---

#### R-012 — Active nav prematuro

Riesgo: El agente implementa active/current sin secciones reales.

Mitigación: scroll spy y active section quedan fuera de alcance.

---

#### R-013 — Reconciliación visible de locale tras SSR

Riesgo: Con una preferencia `en` persistida, SSR y el primer render usan `es` y el Header cambia de labels después de hidratar.

Mitigación: mantener snapshots SSR deterministas `light/es`, documentar la limitación durante desarrollo y realizar una revisión específica antes del release final. PRD-02 no añade cookies ni persistencia server-side.

---

### Supuestos

- PRD-01 ya está implementado o será implementado antes de PRD-02.
- Existen `PortfolioLayout`, `ThemeProvider`, `LocaleProvider`, `useTheme()`, `useLocale()` y `main#main`.
- `Theme` y `Locale` ya existen y no deben redefinirse.
- Semantic tokens ya existen o están definidos por PRD-01/SDD-01.
- El portfolio todavía no está en release final.
- Los anchors de navegación se resolverán cuando existan sus secciones.
- PRD-03 implementará Hero.
- PRD posteriores implementarán About, Experience, Projects y Contact.
- Puede no existir todavía un PDF de CV confirmado.
- Si `PageContainer` ya existe en código, se consume. Si no existe, se implementa en PRD-02.

---

### Preguntas abiertas críticas

El alcance funcional está cerrado, pero la implementación está bloqueada hasta aprobar SDD-02, que debe decidir:

- fitting real del breakpoint;
- fuente única para altura del Header y offset de anchors;
- geometría reutilizable de `PageContainer`;
- estrategia de superficie opaca y enhancement de blur;
- estrategia concreta para cerrar `MobileNav` al cambiar viewport y manejar Escape;
- política de validación del locale flash antes de producción.

---

### Preguntas abiertas menores

- Ruta exacta del PDF de CV.
- Breakpoint exacto desktop/mobile.
- Iconografía exacta de ThemeToggle.
- Iconografía exacta de MobileNav.
- Altura exacta del Header sticky.
- Background, border, backdrop, transition y z-index del Header.
- Estrategia exacta para evitar inconsistencia visual al cambiar viewport con MobileNav abierto.

Estas decisiones pueden cerrarse en SDD-02 sin cambiar el alcance funcional del PRD.

---

## 21. Matriz de trazabilidad

| Requisito | Criterio de aceptación | Validación esperada |
|---|---|---|
| RF-001 | CA-001 | TEST-AUTO-003, TEST-AUTO-004, TEST-STATIC-001 |
| RF-002 | CA-002 | TEST-STATIC-002, TEST-MANUAL-002 |
| RF-003 | CA-003 | TEST-MANUAL-014, TEST-MANUAL-015 |
| RF-004 | CA-004 | TEST-STATIC-001, TEST-MANUAL-001, TEST-MANUAL-006 |
| RF-005 | CA-005 | TEST-STATIC-001, TEST-STATIC-012 |
| RF-006 | CA-006 | TEST-MANUAL-003 |
| RF-007 | CA-007 | TEST-STATIC-003, TEST-STATIC-004, TEST-MANUAL-004, TEST-MANUAL-005 |
| RF-008 | CA-007 | TEST-AUTO-005, TEST-STATIC-005 |
| RF-009 | CA-008 | TEST-STATIC-013, TEST-STATIC-014, TEST-MANUAL-022, TEST-MANUAL-027 |
| RF-010 | CA-009 | TEST-STATIC-012, TEST-MANUAL-025 |
| RF-011 | CA-010, CA-011, CA-012 | TEST-STATIC-017, TEST-MANUAL-007, TEST-MANUAL-008, TEST-MANUAL-009, TEST-MANUAL-010, TEST-MANUAL-011, TEST-MANUAL-012, TEST-MANUAL-013 |
| RF-012 | CA-013 | TEST-MANUAL-026 |
| RF-013 | CA-014 | TEST-STATIC-006, TEST-STATIC-008, TEST-STATIC-010, TEST-MANUAL-016, TEST-MANUAL-017 |
| RF-014 | CA-015 | TEST-STATIC-007, TEST-STATIC-009, TEST-STATIC-011, TEST-MANUAL-018, TEST-MANUAL-019 |
| RF-015 | CA-016 | TEST-MANUAL-019 |
| RF-016 | CA-017 | TEST-STATIC-016, TEST-MANUAL-020, TEST-MANUAL-021 |
| RF-017 | CA-018 | TEST-MANUAL-006 |
| RF-018 | CA-019 | TEST-MANUAL-022, TEST-MANUAL-023 |
| RF-019 | CA-020 | TEST-STATIC-015 |
| RF-020 | CA-021 | TEST-AUTO-001, TEST-AUTO-002, TEST-SSR-001, TEST-SSR-002, TEST-SSR-003, TEST-SSR-004 |

---

## Nota posterior al PRD

La implementación se completó conforme a **SDD-02 — Header & Navigation**.

El SDD definió:

- ubicación exacta de archivos;
- estructura final de componentes;
- breakpoint mobile/desktop;
- altura exacta del Header sticky;
- background, border, backdrop, z-index y transición;
- estilo exacto de hover/focus/pressed/open;
- iconografía o texto de ThemeToggle;
- iconografía o texto de MobileNav;
- ruta del PDF de CV si existe;
- implementación concreta de `ResumeLink` con `target="_blank"` y relación segura;
- implementación concreta de ARIA para disclosure navigation;
- estrategia para evitar estado inconsistente de MobileNav al cambiar viewport;
- checklist de QA manual/browser;
- comandos y validaciones:
  - `composer ci:check`;
  - `npm run build`;
  - `npm run build:ssr`;
  - smoke test runtime SSR.

No incluir SDD dentro del PRD formal.
