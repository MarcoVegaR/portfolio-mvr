# PRD-01 — Portfolio Foundation

## 1. Metadata

- Estado: Implemented
- Versión: 1.1
- Fecha: 2026-08-17
- Implementación: Completada conforme a SDD-01
- Autor / Product Owner: Marco Vega
- Proyecto: Portfolio profesional Marco Vega
- Módulo: Foundation / Application Shell
- Prioridad: Alta
- Agente objetivo: Agente IA implementador frontend/full-stack sobre Laravel + Inertia + React + TypeScript + Tailwind
- Repositorio: Pendiente de completar por el implementador
- Rama sugerida: `feature/prd-01-portfolio-foundation`

---

## 2. Resumen ejecutivo

PRD-01 transforma el starter técnico validado en `TECH-00` en la foundation real del portfolio profesional de Marco Vega.

`TECH-00` confirmó que el stack funciona: Laravel, Inertia, React, TypeScript, Tailwind, testing y CI. PRD-01 responde ahora una pregunta distinta:

> ¿Cuál es la estructura base sobre la que construiremos el portfolio?

Este PRD no construye todavía secciones visuales como Header, Hero, About, Core Stack, Experience, Projects, Contact o Footer. Tampoco crea `PageContainer`, porque todavía no existe una sección real que lo consuma. `PageContainer` queda reservado para PRD-02, donde Header será el primer consumidor concreto de geometría horizontal.

Al finalizar, la ruta `/` dejará de renderizar el starter de Laravel y pasará a renderizar una página propia del portfolio, estructurada alrededor de `PortfolioPage`, `PortfolioLayout`, `ThemeProvider`, `LocaleProvider`, design tokens, estilos globales y una prueba funcional de foundation.

---

## 3. Problema que resuelve

Actualmente la aplicación todavía se comporta como un starter.

Flujo actual:

```txt
Browser
   │
   │ GET /
   ▼
routes/web.php
   │
   ▼
welcome.tsx
   │
   ▼
Laravel Welcome
```

Esto genera un problema de producto y arquitectura: aunque el stack técnico funcione, la aplicación todavía no tiene una foundation propia del portfolio.

PRD-01 resuelve ese problema convirtiendo la raíz de la aplicación en una estructura real del producto:

```txt
Browser
   │
   │ GET /
   ▼
routes/web.php
   │
   ▼
portfolio/index.tsx
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
   ▼
<main id="main">
</main>
```

La página puede seguir viéndose sencilla. Eso es correcto. El valor de este PRD no está en impacto visual, sino en crear una base limpia, extensible y verificable para los PRD posteriores.

---

## 4. Objetivos

### Objetivo principal

Transformar la ruta raíz `/` en la foundation real del portfolio profesional de Marco Vega, eliminando la dependencia pública del starter Laravel Welcome.

### Objetivos secundarios

- Crear `PortfolioPage` como composition root de la página principal.
- Crear `PortfolioLayout` como shell global del portfolio.
- Crear `ThemeProvider` y `useTheme()` como fuente global del tema visual en runtime.
- Crear mecanismo de bootstrap inicial de theme antes de React para evitar flash perceptible del tema incorrecto.
- Crear `LocaleProvider` y `useLocale()` como fuente global del idioma en runtime.
- Crear mecanismo de inicialización documental de locale para que `<html lang>` parta de `es` y pueda restaurar un valor válido persistido.
- Definir contratos globales mínimos: `Theme` y `Locale`.
- Definir brand tokens y semantic tokens básicos.
- Establecer estilos globales base.
- Configurar identidad base versionada como `Marco Vega`.
- Evitar branding visible de Laravel Welcome.
- Añadir test funcional que garantice que `/` renderiza `portfolio/index`.
- Mantener verde el quality gate existente de `TECH-00`.
- Ejecutar `composer ci:check` y `npm run build` como validaciones separadas.

### Métricas de éxito

- `/` responde `200 OK`.
- `/` renderiza el componente Inertia `portfolio/index`.
- No aparece branding visible de Laravel Welcome.
- Existen los componentes estructurales definidos para PRD-01.
- Existen los contratos `Theme = 'light' | 'dark'` y `Locale = 'es' | 'en'`.
- `composer ci:check` pasa.
- `npm run build` pasa.
- TypeScript, ESLint, Prettier, PHPStan y Pest continúan verdes.

---

## 5. Usuarios y roles involucrados

### Visitante del portfolio

Persona que accede públicamente al portfolio de Marco Vega.

En PRD-01 el visitante no interactúa todavía con navegación, secciones, toggles o contenido editorial avanzado. Solo debe recibir una aplicación que ya no se identifica como starter Laravel y que posee foundation global.

### Marco Vega / Product Owner

Responsable de validar que la foundation respeta la dirección del producto:

- Portfolio profesional de Marco Vega.
- Identidad base: `Marco Vega`.
- Enfoque visual: Light first, Dark supported.
- Idioma inicial: español.
- Construcción incremental sin sobreingeniería.

### Agente IA implementador

Responsable de implementar este PRD sin ampliar alcance, sin introducir abstracciones especulativas y sin construir módulos reservados para PRD posteriores.

---

## 6. Alcance funcional

PRD-01 incluye únicamente:

1. Cambio de ruta raíz `/` para que deje de resolver `welcome` y renderice `portfolio/index`.
2. Creación de `PortfolioPage`.
3. Creación de `PortfolioLayout`.
4. Creación de `ThemeProvider`.
5. Creación de `useTheme()`.
6. Creación del contrato global:

```ts
type Theme = 'light' | 'dark';
```

7. Persistencia de theme mediante `localStorage`.
8. Uso de key:

```txt
portfolio.theme
```

9. Default de theme:

```txt
light
```

10. Soporte de dark mode a nivel foundation mediante provider, tokens y aplicación global al documento.
11. No usar automáticamente `prefers-color-scheme: dark` para definir el theme inicial.
12. Aplicar el theme persistido suficientemente temprano para evitar un flash perceptible del tema incorrecto.
13. Aclarar separación de responsabilidades:
    - Bootstrap inicial: puede aplicar theme antes de React.
    - `ThemeProvider`: mantiene y actualiza el estado durante runtime.
14. Creación de `LocaleProvider`.
15. Creación de `useLocale()`.
16. Creación del contrato global:

```ts
type Locale = 'es' | 'en';
```

17. Persistencia de locale mediante `localStorage`.
18. Uso de key:

```txt
portfolio.locale
```

19. Default de locale:

```txt
es
```

20. Definir `es` como locale inicial del documento.
21. Restaurar locale persistido válido suficientemente temprano para sincronizar `<html lang>`.
22. Sincronización de locale con `document.documentElement.lang`.
23. No usar detección automática por `navigator.language`, `Accept-Language` o geolocalización.
24. Definición de brand tokens:

```txt
Deep Navy      #001236
Electric Blue  #0F60F8
Blue Gray      #A3AFBD
White          #FFFFFF
```

25. Definición de semantic tokens básicos:

```txt
background
foreground
accent
muted
border
focus
```

26. Definición de estilos globales base.
27. Configuración de identidad base versionada de la aplicación como `Marco Vega`.
28. Eliminación de branding visible de Laravel Welcome.
29. Creación de test funcional para `/`.
30. Conservación del quality gate existente.
31. Ejecución explícita de:
    - `composer ci:check`
    - `npm run build`

---

## 7. Fuera de alcance

PRD-01 no debe construir:

```txt
Header
Brand
DesktopNav
MobileNav
NavLink
ThemeToggle
LanguageToggle
ResumeLink

Hero
HeroVisual
HeroActions

About

CoreStack
TechnologyItem

Experience
ExperienceItem

Projects
ProjectCard
CaseStudy

Contact
ContactForm

Footer
```

También queda fuera de alcance en PRD-01:

```txt
PageContainer
```

`PageContainer` se mueve a PRD-02 porque será allí donde exista su primer consumidor real: Header. Esto evita crear una abstracción visual sin uso confirmado.

Tampoco debe crear todavía:

```txt
Button
Card
Badge
Modal
Tooltip
SectionHeading
Section
Input
Dropdown
Tabs
Accordion
```

También quedan fuera de alcance:

- Sistema i18n complejo.
- Librerías nuevas de internacionalización.
- Traducciones completas de Header, Hero, About, Experience, Projects o Contact.
- Navegación del portfolio.
- Contenido editorial significativo.
- CTA.
- Animaciones visuales de marca.
- Matrix effect.
- Kamehameha u otros recursos visuales futuros.
- Case studies.
- SEO completo.
- Autenticación.
- Perfil de usuario.
- Persistencia server-side de preferencias.
- Endpoints de preferencias.
- Base de datos para theme o locale.
- Detección automática de idioma.
- Detección automática de theme por sistema operativo.
- Cleanup especulativo del framework Laravel.
- Reestructuración global no necesaria del proyecto.
- Incorporar `npm run build` dentro de `composer ci:check` sin decisión técnica explícita.

---

## 8. Contexto del sistema actual

La aplicación parte de `TECH-00`, donde ya fue validado el stack base:

```txt
Laravel
Inertia
React
TypeScript
Tailwind
Testing / CI
```

Actualmente la ruta pública raíz todavía representa el starter:

```txt
GET /
   ↓
welcome.tsx
   ↓
Laravel Welcome
```

PRD-01 debe cambiar ese comportamiento para que la aplicación empiece a ejecutarse conceptualmente como portfolio:

```txt
GET /
   ↓
portfolio/index.tsx
   ↓
PortfolioPage
   ↓
PortfolioLayout
```

`app.tsx` debe seguir siendo la entrada técnica de Inertia. No debe convertirse en `PortfolioPage`.

Responsabilidades diferenciadas:

```txt
app.tsx
=
arranque técnico React/Inertia

PortfolioPage
=
página concreta del portfolio

PortfolioLayout
=
shell global de la experiencia
```

`welcome.tsx` deja de ser la página pública de la aplicación. Después de modificar `/`, el implementador debe buscar referencias restantes a `welcome`. Si no existen referencias restantes, `resources/js/pages/welcome.tsx` debe eliminarse. Si todavía existe una referencia válida, debe conservarse y reportarse.

---

## 9. Playbooks aplicados al PRD

### Product Discovery / PRD Base

Activo.  
Este PRD define problema, objetivo, alcance mínimo, fuera de alcance, riesgos de sobreingeniería y validación de foundation.

### Frontend / UX

Activo.  
Aplica porque se definen layout, estilos globales, tokens, baseline visual, theme y locale. No se diseñan todavía pantallas finales ni secciones visuales.

### Backend / API / Reglas

Activo de forma limitada.  
Aplica únicamente porque PRD-01 toca `routes/web.php` y requiere un Feature/Pest test funcional de la ruta `/`.

No se crean:

- APIs.
- Controllers de negocio.
- Services de dominio.
- Persistencia backend.
- Reglas de negocio complejas.
- Contratos request/response nuevos.

### Data / Modelo conceptual

Activo en modo ligero.  
Aplica solo para los contratos conceptuales globales `Theme` y `Locale`, sus valores válidos, defaults y persistencia local.

### Seguridad / Roles / Trazabilidad

No activo.  
No hay login, roles, permisos, datos sensibles ni acciones críticas multiusuario.

### QA / Acceptance

Activo.  
Aplica porque el PRD debe tener criterios Given/When/Then, pruebas funcionales, pruebas de regresión, validación manual/browser cuando no exista runner automático, quality gate y matriz de trazabilidad.

### DevOps / Integraciones / Operación

No activo.  
No hay jobs, colas, cron, emails, webhooks, almacenamiento externo, monitoreo nuevo ni servicios externos.

---

## 10. Requisitos funcionales

### RF-001 — Ruta raíz del portfolio

Como visitante del portfolio, quiero que la ruta `/` cargue la página principal del portfolio para no ver el starter Laravel Welcome.

La ruta `/` debe resolver conceptualmente a:

```php
Route::inertia('/', 'portfolio/index')->name('home');
```

o una estructura funcional equivalente.

---

### RF-002 — PortfolioPage como composition root

Como desarrollador del portfolio, quiero que exista `PortfolioPage` para centralizar la composición principal de la página `/`.

En PRD-01, `PortfolioPage` debe componer únicamente la foundation:

```txt
PortfolioPage
└── PortfolioLayout
    └── main
```

No debe contener lógica interna de theme, locale, Header, Hero ni contenido editorial.

---

### RF-003 — PortfolioLayout como shell global

Como desarrollador del portfolio, quiero que exista `PortfolioLayout` para envolver la experiencia global del portfolio.

`PortfolioLayout` debe integrar:

```txt
ThemeProvider
LocaleProvider
estructura base
background global
foreground global
min-height
children
```

No debe implementar Header, Hero, Projects, Contact ni secciones específicas.

---

### RF-004 — ThemeProvider global de runtime

Como visitante del portfolio, quiero que el sistema pueda recordar y aplicar mi preferencia explícita de tema visual para mantener consistencia en mi navegador.

`ThemeProvider` debe gestionar durante runtime:

```txt
theme
setTheme()
lectura de localStorage
escritura en localStorage
aplicación del theme al documento
```

Valores válidos:

```ts
type Theme = 'light' | 'dark';
```

`ThemeProvider` es dueño del estado durante la ejecución de React, pero no necesariamente es el único responsable de inicializar el documento antes del primer paint.

---

### RF-005 — Theme default light

Como Product Owner, quiero que el tema inicial sea `light` para respetar la dirección visual Light first.

La resolución de theme debe ser:

```txt
¿Existe portfolio.theme válido?
        │
        ├── sí → usar valor persistido
        └── no → light
```

No debe usarse automáticamente `prefers-color-scheme: dark` para seleccionar el theme inicial.

---

### RF-006 — Bootstrap inicial anti-FOUC de theme

Como visitante del portfolio, quiero que si tengo `dark` guardado, el primer render visible no muestre un flash perceptible de light antes de aplicar dark.

Debe existir una estrategia de bootstrap inicial que pueda ejecutarse antes de montar React/Inertia para aplicar el theme persistido válido al documento.

Arquitectura conceptual esperada:

```txt
HTML bootstrap
    │
    ├── lee portfolio.theme
    └── aplica theme válido al documento
            │
            ▼
      primer paint correcto
            │
            ▼
       React/Inertia
            │
            ▼
      ThemeProvider
```

Comportamiento observable esperado:

```txt
stored dark
   ↓
primer render visible
   ↓
dark
```

No se prescribe la implementación exacta en el PRD. Esa decisión corresponde al SDD.

---

### RF-007 — Dark mode soportado en foundation

Como desarrollador del portfolio, quiero que dark mode esté soportado desde la foundation para que PRD posteriores puedan consumirlo sin reinventar el sistema.

En PRD-01, dark mode soportado significa:

```txt
Theme type
ThemeProvider
useTheme()
persistencia en localStorage
aplicación del theme al documento
brand tokens
semantic tokens light
semantic tokens dark
bootstrap inicial anti-FOUC
```

No incluye `ThemeToggle`, botón visible ni animación de cambio.

---

### RF-008 — useTheme como API de consumo

Como desarrollador del portfolio, quiero que exista `useTheme()` para consultar y cambiar el theme desde componentes futuros sin prop drilling.

`useTheme()` debe exponer funcionalmente:

```txt
theme
setTheme()
```

o una API equivalente y clara.

---

### RF-009 — LocaleProvider global de runtime

Como visitante del portfolio, quiero que el sistema pueda recordar y aplicar mi idioma explícitamente seleccionado para mantener consistencia en mi navegador.

`LocaleProvider` debe gestionar durante runtime:

```txt
locale
setLocale()
lectura de localStorage
escritura en localStorage
sincronización con html[lang]
```

Valores válidos:

```ts
type Locale = 'es' | 'en';
```

---

### RF-010 — Locale default es

Como Product Owner, quiero que el idioma inicial de la aplicación y del documento sea `es` para que la experiencia por defecto sea español.

La resolución de locale debe ser:

```txt
¿Existe portfolio.locale válido?
        │
        ├── sí → usar valor persistido
        └── no → es
```

No debe usarse detección automática por navegador, `Accept-Language` ni geolocalización.

---

### RF-011 — Bootstrap inicial de locale documental

Como visitante y usuario de tecnologías asistivas, quiero que el documento tenga un idioma inicial coherente antes y durante la ejecución de React.

La aplicación debe definir `es` como locale inicial del documento.

Si existe un valor válido persistido en `portfolio.locale`, debe poder aplicarse tempranamente a `<html lang>` antes o durante el arranque inicial, sin depender únicamente de cambios tardíos dentro de componentes visuales.

Arquitectura conceptual esperada:

```txt
HTML/document default
    │
    ├── lang inicial = es
    ├── lee portfolio.locale válido si existe
    └── aplica html[lang]
            │
            ▼
       React/Inertia
            │
            ▼
      LocaleProvider
```

No hace falta resolver “flash lingüístico” visual porque PRD-01 no contiene contenido editorial significativo, pero la semántica documental debe ser consistente.

---

### RF-012 — useLocale como API de consumo

Como desarrollador del portfolio, quiero que exista `useLocale()` para consultar y cambiar el idioma desde componentes futuros sin prop drilling.

`useLocale()` debe exponer funcionalmente:

```txt
locale
setLocale()
```

o una API equivalente y clara.

---

### RF-013 — Sincronización de idioma con documento

Como visitante y usuario de tecnologías asistivas, quiero que el idioma activo esté reflejado en el documento HTML para mejorar semántica y accesibilidad.

Cuando `locale = 'es'`, el documento debe quedar como:

```html
<html lang="es">
```

Cuando `locale = 'en'`, el documento debe quedar como:

```html
<html lang="en">
```

---

### RF-014 — Brand tokens

Como desarrollador del portfolio, quiero que existan brand tokens para no usar hexadecimales directamente en componentes.

Brand tokens mínimos:

```txt
brand.navy  = #001236
brand.blue  = #0F60F8
brand.gray  = #A3AFBD
brand.white = #FFFFFF
```

Los nombres exactos pueden adaptarse a la convención del proyecto, pero deben mantener separación entre color de marca y uso semántico.

---

### RF-015 — Semantic tokens

Como desarrollador del portfolio, quiero que existan semantic tokens para que los componentes consuman intención visual y no hexadecimales directos.

Semantic tokens mínimos:

```txt
background
foreground
accent
muted
border
focus
```

Deben existir valores para light y dark.

La composición exacta de semantic tokens derivados de la paleta debe definirse en el SDD. El agente no debe inventar colores fuera de esa decisión ni asumir mappings dudosos para `muted` o `border` sin validar contraste.

Mínimo conceptual permitido:

```txt
LIGHT
background  → derivado de brand.white
foreground  → derivado de brand.navy
accent      → derivado de brand.blue
focus       → derivado de brand.blue

DARK
background  → derivado de brand.navy
foreground  → derivado de brand.white
accent      → derivado de brand.blue
focus       → derivado de brand.blue
```

`muted` y `border` requieren definición cuidadosa en SDD y no deben resolverse improvisando colores no aprobados.

---

### RF-016 — Global styles base

Como visitante del portfolio, quiero que la aplicación tenga una base visual consistente para evitar diferencias inesperadas entre componentes futuros.

Los estilos globales deben cubrir como mínimo:

```txt
box sizing consistente
background
foreground
font family
font smoothing
body margin
min-height
focus baseline
reduced-motion baseline cuando aplique
```

No deben incluir estilos específicos de Header, Hero, About, Projects o Contact.

---

### RF-017 — Identidad base Marco Vega

Como visitante del portfolio, quiero que la aplicación ya no se identifique públicamente como Laravel Welcome.

PRD-01 debe configurar identidad base versionada como:

```txt
APP_NAME / VITE_APP_NAME → Marco Vega
document title base → Marco Vega
```

La identidad debe quedar definida en archivos versionados o fallback versionado, no depender únicamente del `.env` local del implementador.

Debe actualizarse `.env.example` o una fuente equivalente versionada para evitar que CI/build limpio siga usando `Laravel`.

Si se necesita un placeholder visible mínimo, debe ser únicamente:

```txt
Marco Vega
```

No debe usarse `Marco Vega — AI Engineer` como bloque visual permanente en Foundation, porque el rol y la propuesta de valor pertenecen a PRD-03 — Hero.

---

### RF-018 — Eliminación determinista de código público muerto del starter

Como desarrollador del portfolio, quiero que `welcome.tsx` deje de ser la página pública para evitar confusión y deuda técnica.

Después de modificar `/`, el implementador debe buscar referencias a `welcome`.

Regla:

```txt
referenciado todavía
    ↓
conservar y reportar

sin referencias restantes
    ↓
eliminar resources/js/pages/welcome.tsx
```

No debe hacerse cleanup especulativo de archivos internos del framework que no interfieran con el producto.

---

### RF-019 — Foundation route test

Como Product Owner, quiero que exista una prueba funcional de `/` para impedir regresiones hacia `welcome`.

La prueba debe validar conceptualmente:

```txt
GET /
   ↓
200 OK
   ↓
Inertia component = portfolio/index
```

No debe instalarse una nueva librería frontend de testing únicamente para este PRD.

---

### RF-020 — Validaciones separadas del quality gate

Como Product Owner, quiero que PRD-01 incremente la base del producto sin degradar la baseline técnica validada en TECH-00.

Deben ejecutarse y pasar por separado:

```bash
composer ci:check
npm run build
npm run build:ssr
```

No debe asumirse que `composer ci:check` incluye `npm run build`.

`npm run build:ssr` también debe ejecutarse como validación separada porque SSR está habilitado en la aplicación. La validación de runtime SSR se define en SDD-01 y debe comprobar que el servidor SSR puede iniciar y renderizar `/`.

Si posteriormente se quiere incorporar `npm run build` dentro de `composer ci:check`, eso debe tratarse como una mejora técnica deliberada y no como una decisión implícita de PRD-01.

---

## 11. Reglas de negocio

### RN-001 — La ruta pública raíz pertenece al portfolio

Condición: Cuando un visitante accede a `/`.  
Comportamiento esperado: El sistema debe renderizar `portfolio/index`.  
Excepción: Ninguna definida en PRD-01.

---

### RN-002 — Laravel Welcome no debe ser experiencia pública

Condición: Cuando la aplicación se ejecuta públicamente en `/`.  
Comportamiento esperado: No debe mostrarse Laravel Welcome ni textos equivalentes del starter.  
Excepción: Archivos internos del framework pueden permanecer si no interfieren con el producto.

---

### RN-003 — Theme default determinista

Condición: Cuando no existe `portfolio.theme` válido en `localStorage`.  
Comportamiento esperado: El theme inicial debe ser `light`.  
Excepción: Ninguna. No se debe usar `prefers-color-scheme: dark` para cambiar este default.

---

### RN-004 — Theme persistido válido tiene prioridad

Condición: Cuando existe `portfolio.theme = 'light'` o `portfolio.theme = 'dark'`.  
Comportamiento esperado: El sistema debe usar el valor persistido.  
Excepción: Si el valor es inválido, debe ignorarse y usar `light`.

---

### RN-005 — Locale default determinista

Condición: Cuando no existe `portfolio.locale` válido en `localStorage`.  
Comportamiento esperado: El locale inicial debe ser `es`.  
Excepción: Ninguna. No se debe usar detección automática de navegador.

---

### RN-006 — Locale persistido válido tiene prioridad

Condición: Cuando existe `portfolio.locale = 'es'` o `portfolio.locale = 'en'`.  
Comportamiento esperado: El sistema debe usar el valor persistido.  
Excepción: Si el valor es inválido, debe ignorarse y usar `es`.

---

### RN-007 — Locale activo debe sincronizarse con `<html lang>`

Condición: Cuando cambia el locale activo.  
Comportamiento esperado: `document.documentElement.lang` debe actualizarse al valor activo.  
Excepción: Ninguna definida.

---

### RN-008 — Foundation no debe construir Hero

Condición: Cuando se requiera mostrar contenido visible mínimo.  
Comportamiento esperado: Puede mostrarse como máximo `Marco Vega` como placeholder técnico.  
Excepción: No se permite `Marco Vega — AI Engineer` como bloque visual permanente en PRD-01.

---

### RN-009 — No crear abstracciones visuales sin uso confirmado

Condición: Durante la implementación de PRD-01.  
Comportamiento esperado: Solo deben crearse componentes con responsabilidad concreta ya definida y consumo real dentro del alcance.  
Excepción: Ninguna. `PageContainer`, `Button`, `Card`, `Section`, `Badge`, `Modal`, `Tooltip`, etc. quedan fuera de alcance.

---

### RN-010 — Los componentes consumen semantic tokens

Condición: Cuando un componente necesita color visual.  
Comportamiento esperado: Debe consumir tokens semánticos o clases basadas en ellos, no hexadecimales directos dispersos.  
Excepción: La definición centralizada de brand tokens sí puede contener hexadecimales.

---

### RN-011 — Semantic token mapping no debe improvisarse

Condición: Cuando se asignan valores concretos a `background`, `foreground`, `accent`, `muted`, `border` y `focus`.  
Comportamiento esperado: El mapping definitivo debe seguir el SDD o quedar documentado de forma explícita.  
Excepción: No se deben inventar colores nuevos ni usar `brand.gray` como texto secundario sin revisar contraste.

---

### RN-012 — Validaciones de build separadas

Condición: Cuando se valida la finalización de PRD-01.  
Comportamiento esperado: Deben pasar `composer ci:check` y `npm run build` como comandos separados.  
Excepción: Ninguna, salvo que un SDD aprobado modifique deliberadamente el quality gate.

---

## 12. Requisitos no funcionales

### Rendimiento

- La foundation no debe introducir dependencias pesadas innecesarias.
- La restauración de theme debe evitar un flash perceptible del tema incorrecto.
- No debe instalarse una librería i18n compleja en PRD-01.

### Seguridad

- No aplica seguridad multiusuario.
- No hay autenticación, autorización, roles ni datos sensibles.
- No deben introducirse endpoints nuevos.

### Accesibilidad

- El documento debe partir semánticamente de `lang="es"` o restaurar un locale persistido válido.
- `html[lang]` debe reflejar el locale activo.
- Debe existir baseline de focus visible.
- Debe respetarse `prefers-reduced-motion` cuando aplique.
- Los tokens deben considerar contraste suficiente para light y dark.

### Usabilidad

- La aplicación no debe mostrar branding confuso del starter.
- El comportamiento inicial de theme e idioma debe ser determinista.
- No debe aparecer contenido que anticipe Hero.

### Compatibilidad

- Debe mantenerse compatibilidad con el stack validado en TECH-00.
- TypeScript debe compilar en strict mode.

### Mantenibilidad

- Separar responsabilidades:
  - `PortfolioPage`: composición de página.
  - `PortfolioLayout`: shell global.
  - `ThemeProvider`: estado global de theme durante runtime.
  - Bootstrap inicial de theme: aplicación temprana antes del primer paint.
  - `LocaleProvider`: estado global de locale durante runtime.
  - Bootstrap/document default de locale: semántica inicial de `<html lang>`.
- No crear carpetas vacías solo por estética arquitectónica.
- No crear tipos futuros no utilizados.
- No crear `PageContainer` hasta PRD-02.

### Observabilidad

- No aplica observabilidad nueva.
- Los errores críticos de implementación deben manifestarse en tests, build, lint, typecheck o QA manual/browser documentada.

### Disponibilidad

- La ruta `/` debe responder `200 OK`.

### Escalabilidad

- La foundation debe permitir PRD posteriores:
  - PRD-02 Header + PageContainer.
  - PRD-03 Hero.
  - PRD futuros de About, Experience, Projects, Contact, Footer y case studies.

---

## 13. Interfaz esperada, flujo esperado o API esperada

### Flujo principal de ruta

```txt
Usuario visita /
   ↓
Laravel route resuelve portfolio/index
   ↓
Inertia carga PortfolioPage
   ↓
PortfolioPage renderiza PortfolioLayout
   ↓
PortfolioLayout integra ThemeProvider y LocaleProvider
   ↓
Se renderiza <main id="main">
```

### Estructura conceptual de frontend

```txt
resources/js/
│
├── pages/
│   └── portfolio/
│       └── index.tsx
│
├── layouts/
│   └── portfolio-layout.tsx
│
├── providers/
│   ├── theme-provider.tsx
│   └── locale-provider.tsx
│
├── hooks/
│   ├── use-theme.ts
│   └── use-locale.ts
│
├── types/
│   └── foundation.ts
│
└── app.tsx
```

No crear en PRD-01:

```txt
resources/js/components/layout/page-container.tsx
```

`PageContainer` queda reservado para PRD-02.

### API funcional de theme

```ts
type Theme = 'light' | 'dark';
```

API esperada:

```txt
theme
setTheme(nextTheme)
```

Persistencia:

```txt
localStorage['portfolio.theme']
```

Aplicación documental conceptual:

```html
<html data-theme="light">
```

o:

```html
<html data-theme="dark">
```

Puede utilizarse una estrategia equivalente si encaja mejor con Tailwind, pero debe existir una única convención global.

### Bootstrap conceptual de theme

```txt
Antes de React/Inertia:
    leer portfolio.theme
    validar light | dark
    aplicar theme al documento

Durante React/Inertia:
    ThemeProvider lee estado inicial coherente
    ThemeProvider mantiene estado runtime
    setTheme actualiza estado, documento y localStorage
```

### API funcional de locale

```ts
type Locale = 'es' | 'en';
```

API esperada:

```txt
locale
setLocale(nextLocale)
```

Persistencia:

```txt
localStorage['portfolio.locale']
```

Aplicación documental:

```html
<html lang="es">
```

o:

```html
<html lang="en">
```

### Bootstrap conceptual de locale

```txt
Documento inicial:
    lang = es

Antes o durante arranque inicial:
    leer portfolio.locale
    validar es | en
    aplicar html[lang]

Durante React/Inertia:
    LocaleProvider lee estado inicial coherente
    LocaleProvider mantiene estado runtime
    setLocale actualiza estado, documento y localStorage
```

### Interfaz visual mínima permitida

PRD-01 no exige contenido editorial significativo.

Si se requiere placeholder visible, debe limitarse a:

```txt
Marco Vega
```

No debe incluir rol, propuesta de valor, CTA ni estructura de Hero.

---

## 14. Datos y modelo conceptual

### Entidad conceptual: Theme

```ts
type Theme = 'light' | 'dark';
```

| Campo | Tipo | Valores válidos | Default | Persistencia |
|---|---|---|---|---|
| theme | string union | `light`, `dark` | `light` | `localStorage['portfolio.theme']` |

Reglas:

- `light` es el default.
- `dark` solo se usa si existe preferencia explícita válida o cambio programático.
- No se lee automáticamente `prefers-color-scheme: dark`.
- Valores inválidos se ignoran.
- Bootstrap inicial debe evitar FOUC perceptible.
- La lectura y escritura de preferencias es best-effort; si `localStorage` falla, se mantiene el default o el estado activo en memoria y la aplicación no crashea.

---

### Entidad conceptual: Locale

```ts
type Locale = 'es' | 'en';
```

| Campo | Tipo | Valores válidos | Default | Persistencia |
|---|---|---|---|---|
| locale | string union | `es`, `en` | `es` | `localStorage['portfolio.locale']` |

Reglas:

- `es` es el default de aplicación y documento.
- `en` solo se usa si existe preferencia explícita válida o cambio programático.
- No se lee automáticamente `navigator.language`, `Accept-Language` ni geolocalización.
- Valores inválidos se ignoran.
- El valor activo debe sincronizarse con `<html lang>`.

---

### Brand tokens

| Token conceptual | Valor |
|---|---|
| brand.navy | `#001236` |
| brand.blue | `#0F60F8` |
| brand.gray | `#A3AFBD` |
| brand.white | `#FFFFFF` |

---

### Semantic tokens mínimos

| Token | Uso esperado |
|---|---|
| background | Superficie principal |
| foreground | Texto principal |
| accent | Énfasis, links, focus o acciones importantes |
| muted | Texto secundario o información complementaria |
| border | Bordes y divisores |
| focus | Indicador de foco accesible |

Los semantic tokens deben tener valores para light y dark.

Mapping definitivo:

- Se define en SDD-01.
- No debe improvisarse durante implementación.
- No deben introducirse colores nuevos sin decisión explícita.
- `brand.gray` no debe usarse automáticamente como texto secundario sin validar contraste.

---

### Tipos que NO deben crearse en PRD-01

No crear todavía:

```txt
Project
Experience
Technology
NavItem
CaseStudy
ContactForm
```

Esos contratos deben nacer con el PRD que realmente los use.

---

## 15. Criterios de aceptación

### CA-001 vinculado a RF-001 — Ruta raíz renderiza portfolio

- Given la aplicación está ejecutándose
- When el visitante accede a `/`
- Then la respuesta es `200 OK`
- And el componente Inertia renderizado es `portfolio/index`

---

### CA-002 vinculado a RF-001 / RF-018 — Welcome deja de ser público

- Given la aplicación está ejecutándose
- When el visitante accede a `/`
- Then no se renderiza `welcome`
- And no aparece Laravel Welcome como experiencia pública

---

### CA-003 vinculado a RF-002 — Existe PortfolioPage

- Given el código fuente de frontend
- When se revisa la página principal del portfolio
- Then existe `PortfolioPage`
- And actúa como composition root de `/`
- And no contiene lógica interna de theme, locale, Header ni Hero

---

### CA-004 vinculado a RF-003 — Existe PortfolioLayout

- Given `PortfolioPage`
- When se renderiza la página principal
- Then el contenido se envuelve en `PortfolioLayout`
- And el layout integra providers globales
- And no implementa secciones específicas del portfolio

---

### CA-005 vinculado a RF-004 / RF-005 — Theme default light

- Given no existe `portfolio.theme` en `localStorage`
- When se carga la aplicación
- Then el theme activo es `light`
- And el documento refleja theme `light`

---

### CA-006 vinculado a RF-005 — prefers-color-scheme no gobierna theme inicial

- Given el sistema operativo del visitante prefiere dark mode
- And no existe `portfolio.theme` válido en `localStorage`
- When se carga la aplicación
- Then el theme activo sigue siendo `light`

---

### CA-007 vinculado a RF-004 / RF-007 — Theme persistido dark se restaura

- Given existe `localStorage['portfolio.theme'] = 'dark'`
- When se carga la aplicación
- Then el theme activo es `dark`
- And el documento refleja theme `dark`
- And los semantic tokens dark están activos

---

### CA-008 vinculado a RF-006 — No hay flash perceptible de theme incorrecto

- Given existe `localStorage['portfolio.theme'] = 'dark'`
- When se carga la aplicación
- Then el primer render visible debe aplicar dark
- And no debe percibirse un flash light → dark

---

### CA-009 vinculado a RF-008 — useTheme expone API clara

- Given un componente dentro de `ThemeProvider`
- When consume `useTheme()`
- Then puede consultar el theme activo
- And puede solicitar cambio de theme mediante una API clara

---

### CA-010 vinculado a RF-009 / RF-010 — Locale default es

- Given no existe `portfolio.locale` en `localStorage`
- When se carga la aplicación
- Then el locale activo es `es`
- And `document.documentElement.lang` es `es`

---

### CA-011 vinculado a RF-010 — No hay detección automática de idioma

- Given el navegador del visitante está configurado en inglés
- And no existe `portfolio.locale` válido en `localStorage`
- When se carga la aplicación
- Then el locale activo sigue siendo `es`

---

### CA-012 vinculado a RF-009 / RF-013 — Locale persistido en se restaura

- Given existe `localStorage['portfolio.locale'] = 'en'`
- When se carga la aplicación
- Then el locale activo es `en`
- And `document.documentElement.lang` es `en`

---

### CA-013 vinculado a RF-012 — useLocale expone API clara

- Given un componente dentro de `LocaleProvider`
- When consume `useLocale()`
- Then puede consultar el locale activo
- And puede solicitar cambio de locale mediante una API clara

---

### CA-014 vinculado a RF-014 / RF-015 — Tokens definidos

- Given el sistema de estilos globales
- When se revisan los tokens disponibles
- Then existen brand tokens mínimos
- And existen semantic tokens mínimos
- And los semantic tokens tienen valores para light y dark
- And el mapping definitivo queda reservado al SDD o documentado explícitamente sin inventar colores

---

### CA-015 vinculado a RF-016 — Global styles base aplicados

- Given la aplicación renderiza `/`
- When se inspecciona el baseline global
- Then existen estilos base para background, foreground, font, body, min-height, focus y reduced motion cuando aplique
- And no hay estilos específicos de Header, Hero, About, Projects o Contact

---

### CA-016 vinculado a RF-017 — Identidad base Marco Vega

- Given la aplicación renderiza `/`
- When se inspecciona el título base o identidad de aplicación
- Then aparece `Marco Vega`
- And no aparece `Laravel`, `Welcome` o `Let's get started` como identidad pública
- And la identidad está definida en fuente versionada o fallback versionado, no solo en `.env` local

---

### CA-017 vinculado a RF-018 — Eliminación determinista de welcome

- Given `/` ya no utiliza `welcome`
- When el implementador busca referencias restantes a `welcome`
- Then si no existen referencias, `resources/js/pages/welcome.tsx` se elimina
- And si existen referencias válidas, se conserva y se reporta

---

### CA-018 vinculado a RF-019 — Test funcional de foundation

- Given la suite de pruebas backend existente
- When se ejecutan los tests
- Then existe un test para `/`
- And valida `200 OK`
- And valida componente Inertia `portfolio/index`

---

### CA-019 vinculado a RF-020 — Validaciones separadas pasan

- Given la implementación de PRD-01 está completa
- When se ejecuta `composer ci:check`
- Then el comando pasa

- Given la implementación de PRD-01 está completa
- When se ejecuta `npm run build`
- Then el comando pasa

- Given la implementación de PRD-01 está completa
- When se ejecuta `npm run build:ssr`
- Then el comando pasa

- Given el bundle SSR está construido
- When el servidor SSR inicia y se solicita `/`
- Then el health check SSR pasa
- And el render SSR de `/` no produce un error de browser API

---

### CA-020 vinculado a Fuera de alcance — PageContainer no se crea en PRD-01

- Given la implementación de PRD-01 está completa
- When se revisa el código fuente
- Then no existe un nuevo `PageContainer` implementado por PRD-01
- And no se introduce geometría horizontal compartida hasta PRD-02

---

## 16. Casos borde y manejo de errores

### CB-001 — Theme inválido en localStorage

- Caso: `localStorage['portfolio.theme'] = 'blue'`
- Resultado esperado: ignorar valor inválido y usar `light`
- No debe romper render

---

### CB-002 — Locale inválido en localStorage

- Caso: `localStorage['portfolio.locale'] = 'fr'`
- Resultado esperado: ignorar valor inválido y usar `es`
- `html[lang]` debe quedar en `es`

---

### CB-003 — localStorage no disponible

- Caso: navegador bloquea o falla acceso a `localStorage`
- Resultado esperado: la aplicación debe renderizar usando defaults en memoria
- Theme default: `light`
- Locale default: `es`
- No debe crashear la página

---

### CB-004 — Stored dark antes de montar React

- Caso: `portfolio.theme = dark` existe antes del render
- Resultado esperado: evitar flash perceptible de light antes de aplicar dark

---

### CB-005 — Cambio programático a theme no válido

- Caso: se intenta establecer un theme fuera de `light | dark`
- Resultado esperado: TypeScript debe prevenirlo en tiempo de desarrollo
- Si ocurre por runtime inesperado, no debe persistirse valor inválido

---

### CB-006 — Cambio programático a locale no válido

- Caso: se intenta establecer un locale fuera de `es | en`
- Resultado esperado: TypeScript debe prevenirlo en tiempo de desarrollo
- Si ocurre por runtime inesperado, no debe persistirse valor inválido

---

### CB-007 — welcome.tsx eliminado pero referenciado

- Caso: `welcome.tsx` se elimina pero alguna ruta lo sigue referenciando
- Resultado esperado: tests o build deben fallar
- El agente debe corregir la ruta o detenerse si hay conflicto no previsto

---

### CB-008 — Convención global de theme duplicada

- Caso: se usan simultáneamente `data-theme`, clases y otros mecanismos contradictorios
- Resultado esperado: debe quedar una única convención global
- Si Tailwind exige estrategia distinta, debe ser equivalente y documentada en SDD

---

### CB-009 — Identidad solo cambiada en `.env` local

- Caso: el implementador cambia `APP_NAME` solo en `.env`
- Resultado esperado: no cumple el PRD
- Debe existir fuente versionada o fallback versionado con `Marco Vega`

---

### CB-010 — Tests browser no automatizables sin runner

- Caso: no existe runner frontend/browser para validar FOUC, responsive, focus o reduced motion
- Resultado esperado: no instalar dependencias nuevas
- Debe documentarse validación manual/browser QA

### CB-011 — Markup dependiente de preferencias durante SSR

- Caso: un componente renderiza ramas distintas según theme o locale leído del navegador.
- Resultado esperado: PRD-01 no introduce ese comportamiento; el árbol SSR y el primer árbol de hidratación permanecen deterministas.
- La necesidad de contenido SSR dependiente de preferencias deberá resolverse en un PRD posterior mediante una decisión explícita de transporte de preferencias.

---

## 17. Testing requerido

### Automated tests / checks

Estos deben ejecutarse sin instalar nuevas dependencias de testing frontend/browser.

#### Pruebas funcionales backend

- TEST-AUTO-001: `GET /` responde `200 OK`.
- TEST-AUTO-002: `GET /` renderiza componente Inertia `portfolio/index`.
- TEST-AUTO-003: `/` no renderiza `welcome`.

#### Pruebas de regresión / quality gate

- TEST-AUTO-004: `composer ci:check` pasa.
- TEST-AUTO-005: PHP formatting pasa dentro del quality gate existente.
- TEST-AUTO-006: PHP static analysis pasa dentro del quality gate existente.
- TEST-AUTO-007: Pest pasa dentro del quality gate existente.
- TEST-AUTO-008: ESLint pasa dentro del quality gate existente.
- TEST-AUTO-009: Prettier pasa dentro del quality gate existente.
- TEST-AUTO-010: TypeScript pasa en strict mode dentro del quality gate existente.
- TEST-AUTO-011: `npm run build` pasa como validación separada.

#### SSR runtime validation

- TEST-SSR-001: `npm run build:ssr` pasa.
- TEST-SSR-002: el servidor SSR inicia con `php artisan inertia:start-ssr`.
- TEST-SSR-003: `php artisan inertia:check-ssr` confirma que el servidor responde.
- TEST-SSR-004: una solicitud SSR de `/` produce markup server-rendered y no reporta `window is not defined`, `document is not defined` ni otro error de browser API.

### Static verification

Estas verificaciones no deben presentarse como pruebas de comportamiento:

- TEST-STATIC-001: existe `Theme = 'light' | 'dark'`.
- TEST-STATIC-002: existe `Locale = 'es' | 'en'`.
- TEST-STATIC-003: no se crea `PageContainer` en PRD-01.
- TEST-STATIC-004: si `welcome.tsx` no tiene referencias, fue eliminado.
- TEST-STATIC-005: `.env.example` o fallback versionado contiene identidad base `Marco Vega`.
- TEST-STATIC-006: los semantic tokens documentan sus fondos y contraste esperado.

### Manual / Browser QA

Estas validaciones no deben forzar instalación de Playwright, Vitest, Cypress u otro runner.

- TEST-MANUAL-001: sin `portfolio.theme`, la app carga en light.
- TEST-MANUAL-002: con `portfolio.theme = dark`, el primer render visible aparece en dark sin flash perceptible light → dark.
- TEST-MANUAL-003: con valor inválido en `portfolio.theme`, la app usa light y no crashea.
- TEST-MANUAL-004: sin `portfolio.locale`, `html[lang]` queda en `es`.
- TEST-MANUAL-005: con `portfolio.locale = en`, `html[lang]` queda en `en`.
- TEST-MANUAL-006: con valor inválido en `portfolio.locale`, la app usa `es` y no crashea.
- TEST-MANUAL-007: si `localStorage` no está disponible, la app no crashea.
- TEST-MANUAL-008: no existe overflow horizontal inesperado.
- TEST-MANUAL-009: focus baseline es visible cuando aplica.
- TEST-MANUAL-010: reduced motion baseline respeta preferencias del usuario cuando aplique.
- TEST-MANUAL-011: no aparece `Laravel`, `Welcome` o `Let's get started` como identidad pública.
- TEST-MANUAL-012: si hay placeholder visible, es solo `Marco Vega`.
- TEST-MANUAL-013: `data-theme` y `html[lang]` se establecen antes del primer paint cuando existe una preferencia válida.
- TEST-MANUAL-014: el documento contiene un único título base `Marco Vega`, sin duplicación `Marco Vega - Marco Vega`.

---

### Pruebas de permisos

No aplican. PRD-01 no introduce autenticación, roles ni permisos.

### Pruebas de API

No aplican. PRD-01 no crea endpoints.

---

## 18. Definition of Done

PRD-01 se considera terminado solo si:

- `/` ya no renderiza `welcome`.
- `/` renderiza `portfolio/index`.
- Existe `PortfolioPage`.
- Existe `PortfolioLayout`.
- Existe `ThemeProvider`.
- Existe `useTheme()`.
- Existe el contrato `Theme = 'light' | 'dark'`.
- `theme` persiste en `localStorage['portfolio.theme']`.
- `light` es el default.
- `prefers-color-scheme: dark` no cambia automáticamente el default.
- `dark` está soportado por provider, tokens y aplicación global.
- Existe bootstrap inicial o estrategia equivalente para evitar FOUC perceptible de theme.
- Existe `LocaleProvider`.
- Existe `useLocale()`.
- Existe el contrato `Locale = 'es' | 'en'`.
- `locale` persiste en `localStorage['portfolio.locale']`.
- `es` es el default de aplicación y documento.
- No existe detección automática de idioma.
- `html[lang]` se sincroniza con el locale activo.
- Existen brand tokens.
- Existen semantic tokens básicos.
- Los estilos globales usan semantic tokens.
- El mapping definitivo de semantic tokens queda para SDD o está explícitamente documentado sin inventar colores.
- No existe branding visible de Laravel Welcome.
- El título base corresponde a `Marco Vega`.
- El título `Marco Vega` debe existir en SSR y CSR sin duplicarse mediante el callback global de Inertia.
- La identidad base está definida en `.env.example` o fallback versionado equivalente.
- Si hay placeholder visible, es solo `Marco Vega`.
- No quedan referencias públicas a favicons o assets de branding Laravel.
- La foundation no renderiza markup condicionado por preferencias browser-only durante SSR.
- No se implementa PageContainer.
- No se implementa Header.
- No se implementa Hero.
- No se implementa ThemeToggle.
- No se implementa LanguageToggle.
- No se implementan traducciones completas.
- No se crea design system completo.
- Existe test funcional para `/`.
- TypeScript compila en strict mode.
- ESLint pasa.
- Prettier pasa.
- PHPStan pasa.
- Pest pasa.
- `composer ci:check` pasa.
- `npm run build` pasa como validación separada.
- `npm run build:ssr` pasa como validación separada.
- El smoke test de runtime SSR pasa.
- QA manual/browser queda documentada si no existe runner automático.

---

## 19. Instrucciones para el agente IA

### Reglas de alcance

- No implementar PageContainer.
- No implementar Header.
- No implementar Hero.
- No implementar About.
- No implementar Core Stack.
- No implementar Experience.
- No implementar Projects.
- No implementar Contact.
- No implementar Footer.
- No implementar ThemeToggle.
- No implementar LanguageToggle.
- No implementar navegación.
- No implementar CTA.
- No implementar contenido editorial significativo.
- No implementar `Marco Vega — AI Engineer` como bloque visual permanente.
- No crear design system completo.
- No crear `Button`, `Card`, `Badge`, `Modal`, `Tooltip`, `SectionHeading` o `Section`.
- No crear tipos futuros como `Project`, `Experience`, `Technology`, `NavItem`, `CaseStudy` o `ContactForm`.

### Reglas técnicas

- No modificar autenticación base.
- No crear autenticación.
- No crear roles.
- No crear endpoints nuevos.
- No instalar dependencias nuevas sin aprobación.
- No instalar librería i18n.
- No instalar runner frontend/browser testing nuevo.
- No usar base de datos para theme o locale.
- No usar cookies server-side para theme o locale.
- No crear endpoint de preferencias.
- No cambiar arquitectura existente fuera del alcance confirmado.
- No cambiar contratos existentes de API.
- No hacer cleanup especulativo del framework Laravel.
- No crear carpetas vacías solo por apariencia arquitectónica.
- No introducir breaking changes sin advertencia y aprobación.
- No modificar `composer ci:check` para incluir `npm run build` salvo decisión técnica explícita.

### Reglas de theme

- Usar `localStorage['portfolio.theme']`.
- Valores válidos: `light`, `dark`.
- Default: `light`.
- No usar automáticamente `prefers-color-scheme: dark`.
- Aplicar theme al documento con una única convención global.
- Separar:
  - bootstrap inicial antes del primer paint;
  - estado runtime en `ThemeProvider`.
- Evitar flash perceptible de theme incorrecto.
- No crear toggle visual.

### Reglas de locale

- Usar `localStorage['portfolio.locale']`.
- Valores válidos: `es`, `en`.
- Default: `es`.
- El documento debe partir de `lang="es"` o aplicar tempranamente un locale persistido válido.
- No usar `navigator.language`.
- No usar `Accept-Language`.
- No usar geolocalización.
- Sincronizar `document.documentElement.lang`.
- No crear diccionario global gigante.
- No agregar traducciones de secciones futuras.

### Reglas de estilos

- Separar brand tokens de semantic tokens.
- No dispersar hexadecimales en componentes.
- No inventar nuevos colores.
- No decidir mappings dudosos de `muted` o `border` sin SDD o validación explícita.
- No crear estilos específicos de Header, Hero, About, Projects o Contact.
- Mantener baseline global mínimo.
- Verificar contraste básico.
- Respetar reduced motion cuando aplique.

### Reglas de validación

- Ejecutar `composer ci:check`.
- Ejecutar `npm run build` por separado.
- No asumir que `composer ci:check` incluye build.
- Separar automated tests de manual/browser QA.
- Documentar QA manual/browser si no existe infraestructura automática.

### Señales para detenerse y preguntar

El agente debe detenerse si encuentra:

- Una ruta existente que depende obligatoriamente de `welcome`.
- Una convención de theme existente incompatible.
- Necesidad real de dependencia nueva.
- Necesidad de instalar runner frontend/browser testing.
- Conflicto con Tailwind que impida aplicar theme global sin decidir estrategia.
- Diferencia entre PRD y sistema existente que afecte alcance.
- Necesidad de tocar autenticación, API, base de datos o módulos no incluidos.
- Ambigüedad sobre eliminación de archivos.
- Riesgo de romper `composer ci:check`.
- Riesgo de romper `npm run build`.

Formato de bloqueo:

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

#### R-001 — Construir demasiado

Riesgo: el agente puede intentar crear PageContainer, design system, Header o Hero porque está trabajando en foundation.

Mitigación: el fuera de alcance es explícito. Solo construir infraestructura con responsabilidad confirmada y consumo real.

---

#### R-002 — Construir demasiado poco

Riesgo: el agente puede limitarse a renombrar `welcome.tsx` sin crear layout, providers, tokens ni test.

Mitigación: los RF y DoD exigen foundation completa.

---

#### R-003 — Header como dueño futuro del theme

Riesgo: PRD posteriores podrían intentar controlar theme desde Header.

Mitigación: PRD-01 establece `ThemeProvider` como fuente global de verdad durante runtime.

---

#### R-004 — Header como dueño futuro del idioma

Riesgo: PRD posteriores podrían intentar controlar idioma desde Header.

Mitigación: PRD-01 establece `LocaleProvider` como fuente global de verdad durante runtime.

---

#### R-005 — FOUC de theme

Riesgo: si se lee `localStorage` demasiado tarde, el usuario podría ver flash light → dark.

Mitigación: requisito explícito de bootstrap inicial anti-FOUC.

---

#### R-006 — i18n prematuro

Riesgo: instalar librería i18n o crear diccionario global antes de tener contenido real.

Mitigación: locale solo controla selección, persistencia y `html[lang]`.

---

#### R-007 — Cleanup especulativo

Riesgo: eliminar archivos internos del framework sin necesidad.

Mitigación: eliminar solo `welcome.tsx` si queda sin referencias; no ejecutar limpieza especulativa del framework.

---

#### R-008 — Quality gate mal entendido

Riesgo: asumir que `composer ci:check` incluye frontend build.

Mitigación: PRD-01 exige `composer ci:check` y `npm run build` como validaciones separadas.

---

#### R-009 — Tests frontend imposibles sin runner

Riesgo: el agente intente instalar tooling de browser testing para cumplir validaciones de FOUC, responsive o focus.

Mitigación: dividir testing automático de QA manual/browser.

---

#### R-010 — Semantic tokens inventados

Riesgo: el agente cree mappings o colores no aprobados.

Mitigación: mappings definitivos quedan para SDD o deben documentarse explícitamente sin inventar colores.

---

### Supuestos

- TECH-00 ya validó el stack base.
- Existe `composer ci:check`.
- `composer ci:check` no debe asumirse como equivalente a `npm run build`.
- El proyecto usa Laravel + Inertia + React + TypeScript + Tailwind.
- La ruta raíz actual aún apunta conceptualmente a `welcome`.
- No hay autenticación ni perfil de usuario.
- No hay necesidad de compartir preferencias entre dispositivos.
- El portfolio será inicialmente light first.
- El idioma editorial principal inicial será español.
- PRD-02 construirá Header y PageContainer.
- PRD-03 construirá Hero.

---

### Preguntas abiertas críticas

Ninguna.

---

### Preguntas abiertas menores

- Nombre exacto de archivos y carpetas puede ajustarse a convenciones existentes del repositorio, siempre que no se mezclen responsabilidades.
- La convención técnica exacta para theme queda fijada como `html[data-theme="light|dark"]`; el SDD define su integración concreta con Tailwind.
- El mapping definitivo de semantic tokens queda para SDD-01, con derivados controlados y contraste validado por token, fondo y contexto de uso.
- La implementación debe ser SSR-safe: el servidor usa snapshots `light` y `es`; las preferencias de `localStorage` se reconcilian en el cliente después de la hidratación.
- El contenido de PRD-01 no puede producir markup dependiente de theme o locale durante SSR.

---

## 21. Matriz de trazabilidad

| Requisito | Criterio de aceptación | Test esperado |
|---|---|---|
| RF-001 | CA-001, CA-002 | TEST-AUTO-001, TEST-AUTO-002, TEST-AUTO-003 |
| RF-002 | CA-003 | TEST-AUTO-010, TEST-AUTO-011 |
| RF-003 | CA-004 | TEST-AUTO-010, TEST-AUTO-011 |
| RF-004 | CA-005, CA-007 | TEST-STATIC-001, TEST-MANUAL-001, TEST-MANUAL-002 |
| RF-005 | CA-005, CA-006 | TEST-MANUAL-001 |
| RF-006 | CA-008 | TEST-MANUAL-002 |
| RF-007 | CA-007, CA-014 | TEST-STATIC-001, TEST-MANUAL-002 |
| RF-008 | CA-009 | TEST-STATIC-001 |
| RF-009 | CA-010, CA-012 | TEST-STATIC-002, TEST-MANUAL-004, TEST-MANUAL-005 |
| RF-010 | CA-010, CA-011 | TEST-MANUAL-004 |
| RF-011 | CA-010, CA-012 | TEST-MANUAL-004, TEST-MANUAL-005 |
| RF-012 | CA-013 | TEST-STATIC-002 |
| RF-013 | CA-010, CA-012 | TEST-MANUAL-004, TEST-MANUAL-005 |
| RF-014 | CA-014 | TEST-AUTO-010, TEST-AUTO-011 |
| RF-015 | CA-014 | TEST-AUTO-010, TEST-AUTO-011 |
| RF-016 | CA-015 | TEST-MANUAL-008, TEST-MANUAL-009, TEST-MANUAL-010 |
| RF-017 | CA-016 | TEST-STATIC-005, TEST-MANUAL-011, TEST-MANUAL-012 |
| RF-018 | CA-017 | TEST-AUTO-003, TEST-STATIC-004 |
| RF-019 | CA-018 | TEST-AUTO-001, TEST-AUTO-002, TEST-AUTO-003 |
| RF-020 | CA-019 | TEST-AUTO-004, TEST-AUTO-011, TEST-SSR-001, TEST-SSR-002, TEST-SSR-003, TEST-SSR-004 |
| Fuera de alcance: PageContainer | CA-020 | TEST-STATIC-003 |

---

## Nota posterior al PRD

Siguiente entregable recomendado: **SDD-01 — Portfolio Foundation**.

Ese SDD debería definir la implementación concreta de:

- estructura final de archivos;
- convención exacta para `data-theme` o alternativa Tailwind-compatible;
- estrategia anti-FOUC pre-paint;
- inicialización documental de locale;
- ubicación de tokens;
- mapping definitivo de semantic tokens light/dark;
- implementación de providers;
- tests concretos en Pest/Inertia;
- checklist de comandos:
  - `composer ci:check`;
  - `npm run build`;
- checklist de QA manual/browser.

No incluir ese SDD dentro del PRD formal.
