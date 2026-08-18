# Release Notes — PRD-02 Header & Navigation

## Resumen

PRD-02 incorpora el Header global y la navegación principal del portfolio de Marco Vega sobre la foundation creada en PRD-01.

La entrega añade identidad navegable, navegación responsive, controles de theme/idioma y una base de accesibilidad. No construye Hero, secciones editoriales, targets falsos, scroll spy ni un CV inexistente.

## Producto Y Arquitectura

### Header global

**Archivo:** `resources/js/components/navigation/header.tsx`

El Header se integra dentro de `PortfolioLayout`, antes de `main#main`, y compone Brand, navegación desktop, acciones y MobileNav.

**Para qué:** ofrecer una orientación global desde cualquier página que use el layout.

**Por qué:** el Header pertenece al shell de la experiencia y no a `PortfolioPage`; así las páginas futuras no tienen que reimplementarlo.

### Integración en PortfolioLayout

**Archivo:** `resources/js/layouts/portfolio-layout.tsx`

El layout ahora renderiza:

```text
ThemeProvider
└── LocaleProvider
    ├── SkipLink
    ├── Header
    └── main#main
```

`PortfolioPage` no fue convertido en dueño del Header.

**Para qué:** mantener separadas la composition root, el shell global y el contenido de cada página.

**Por qué:** PRD-03 podrá añadir Hero y otros módulos sin modificar la infraestructura de navegación.

### Dirección visual del Header

**Archivos:**

- `resources/js/components/navigation/header.tsx`
- `resources/js/components/navigation/brand.tsx`
- `public/brand/mvr-mark.png`

El Header se ajustó a la referencia visual del producto como una tarjeta flotante centrada, con:

- bordes redondeados;
- sombra suave;
- superficie blanca o navy según el theme;
- monograma MVR;
- divisor vertical;
- wordmark `Marco Vega`;
- `V` de Vega en Electric Blue.

El asset se renombró a `mvr-mark.png` para evitar nombres dependientes del origen de la imagen.

**Para qué:** alinear la implementación con la identidad visual real del portfolio.

**Por qué:** el Header anterior era una barra técnica genérica y no representaba la marca aprobada.

La submarca `AI ENGINEER` no se muestra en el Header; queda reservada para una composición posterior de Hero o branding extendido.

### PageContainer

**Archivo:** `resources/js/components/layout/page-container.tsx`

Se creó la primera primitive de geometría horizontal con:

- ancho completo;
- `max-w-7xl`;
- centrado automático;
- gutters responsive `px-4 sm:px-6 lg:px-8`.

**Para qué:** alinear Brand, navegación y acciones del Header.

**Por qué:** establece una geometría reutilizable sin envolver ni limitar todo `main` ni las futuras secciones full-width.

La geometría queda disponible para Hero y secciones futuras como base compartida.

## Navegación

### Dataset NavItem

**Archivo:** `resources/js/data/navigation.ts`

Se centralizó un dataset tipado con exactamente cuatro items:

- About / Sobre mí.
- Experience / Experiencia.
- Projects / Proyectos.
- Contact / Contacto.

También se centralizaron sus fragments y labels bilingües.

**Para qué:** evitar strings duplicados entre DesktopNav y MobileNav.

**Por qué:** un único contrato reduce inconsistencias de labels, destinos y orden de navegación.

`Core Stack`, Blog, Services, Skills y otros items quedan fuera.

### Navegación Home + fragment

**Archivo:** `resources/js/data/navigation.ts`

Los destinos se resuelven mediante la URL generada de Home más el fragment correspondiente.

```text
Home + #about
Home + #experience
Home + #projects
Home + #contact
```

El Brand usa navegación Inertia/Wayfinder hacia Home. Los enlaces de secciones usan anchors HTML nativos.

**Para qué:** permitir que el Header funcione también cuando futuras páginas reutilicen `PortfolioLayout`.

**Por qué:** un `#about` relativo desde `/projects/example` buscaría el target en la página incorrecta.

Los targets todavía no existen. No se crearon secciones vacías ni destinos falsos.

### Brand

**Archivo:** `resources/js/components/navigation/brand.tsx`

Se añadió el enlace accesible `Marco Vega` hacia la ruta Home mediante Wayfinder.

**Para qué:** proporcionar identidad reconocible y una forma clara de volver al inicio.

**Por qué:** la marca debe ser navegación real, no un bloque decorativo ni una promesa profesional adelantada al Hero.

### DesktopNav y NavLink

**Archivos:**

- `resources/js/components/navigation/desktop-nav.tsx`
- `resources/js/components/navigation/nav-link.tsx`

DesktopNav muestra los cuatro items del dataset y NavLink comparte los estilos de interacción:

- default;
- hover;
- focus-visible;
- active transitorio nativo del navegador.

No se implementó estado de sección actual, `aria-current` ni scroll spy.

## MobileNav

**Archivo:** `resources/js/components/navigation/mobile-nav.tsx`

MobileNav se implementó como disclosure navigation, no como modal o menu widget.

Incluye:

- estado inicial cerrado;
- botón de apertura/cierre;
- `aria-expanded`;
- `aria-controls`;
- ID estable generado con `useId()`;
- panel con `hidden` cuando está cerrado;
- cierre al seleccionar un enlace;
- cierre con Escape;
- retorno de foco al trigger tras Escape;
- cierre al pasar al breakpoint desktop;
- limpieza del listener responsive.

**Para qué:** ofrecer navegación móvil usable sin convertir el Header en un sistema modal complejo.

**Por qué:** la navegación de sitio no necesita `role="menu"`, focus trap, overlay bloqueante ni `inert`.

El panel móvil contiene también las acciones de idioma y theme. La variante desktop queda fuera del árbol accesible en mobile y viceversa mediante estados de display reales.

## Controles Globales

### ThemeToggle

**Archivo:** `resources/js/components/navigation/theme-toggle.tsx`

El control consume exclusivamente `useTheme()` y alterna entre light/dark.

Características:

- botón compacto;
- `aria-pressed` refleja el estado dark;
- nombre accesible estable: `Modo oscuro` / `Dark mode`;
- icono inline decorativo;
- sin acceso directo a `localStorage`, `document` o `data-theme`.

**Para qué:** exponer el control visual del tema sin duplicar la lógica de PRD-01.

**Por qué:** ThemeProvider sigue siendo la única fuente de verdad para estado, persistencia y aplicación documental.

### LanguageToggle

**Archivo:** `resources/js/components/navigation/language-toggle.tsx`

Se añadió un grupo compacto de botones `ES` y `EN`.

Características:

- grupo con nombre `Idioma` / `Language`;
- `aria-pressed` por opción;
- locale activo reflejado visualmente;
- actualización mediante `setLocale()`;
- sin acceso directo a almacenamiento o `html[lang]`;
- sin librería i18n.

**Para qué:** permitir cambiar el idioma de los labels del Header.

**Por qué:** LocaleProvider mantiene la responsabilidad global de persistencia y sincronización documental.

### ResumeLink

**Archivo:** `resources/js/components/navigation/resume-link.tsx`

Se creó el componente con destino opcional, pero actualmente no se renderiza porque el repositorio no contiene PDF ni ruta pública confirmada.

**Para qué:** dejar preparado el contrato sin inventar un recurso de producto.

**Por qué:** un `href="#"`, una ruta falsa o un PDF inexistente degradaría la confianza del visitante.

Pending product asset:

```text
ResumeLink no renderizado porque no existe PDF/ruta confirmada.
```

Cuando exista un destino real, deberá abrir en nueva pestaña con relación segura.

## Accesibilidad

### SkipLink

**Archivo:** `resources/js/components/layout/skip-link.tsx`

Se añadió un enlace como primer control enfocable para saltar al contenido principal.

Labels:

- `Saltar al contenido`.
- `Skip to content`.

### Main enfocable

**Archivo:** `resources/js/layouts/portfolio-layout.tsx`

`main#main` ahora usa `tabIndex={-1}`.

**Para qué:** permitir que SkipLink mueva el foco real al contenido principal.

**Por qué:** un `href="#main"` sin un destino enfocable no garantiza una experiencia de teclado completa.

### Área interactiva y foco

Los triggers y controles usan áreas compactas de aproximadamente `44px` y consumen el focus baseline de PRD-01.

Los elementos ocultos en la variante responsive alternativa usan `hidden` o `display: none` real para no permanecer enfocables ni expuestos a tecnologías asistivas.

## Estilos Y Responsive

**Archivos:**

- `resources/css/app.css`
- componentes de `resources/js/components/navigation/`

Se añadieron:

- `--header-height`;
- `--header-anchor-offset`;
- `scroll-padding-top` derivado;
- Header sticky;
- superficie opaca con semantic tokens;
- borde semántico;
- layout responsive desktop/mobile;
- estados hover y focus basados en tokens existentes;
- hover de navegación reducido a color Electric Blue y subrayado discreto, sin fondos grises ni escalado del monograma.

La navegación desktop se distribuye dentro de la tarjeta visual y la variante mobile conserva el lockup MVR con el trigger hamburger.

El breakpoint `lg` se usa como candidato inicial y debe validarse mediante fitting real con labels españoles e ingleses.

No se añadió scroll spy, transición dependiente del scroll ni glassmorphism obligatorio.

## SSR Y CI

### SSR seguro

El Header respeta los snapshots iniciales `light/es` de PRD-01. MobileNav comienza cerrado durante SSR y el primer render cliente. No se accede a APIs browser-only durante el render.

El locale persistido puede reconciliarse después de hidratar. Esto queda documentado como limitación de desarrollo y debe revisarse antes del release final si el cambio de labels resulta perceptible.

### Smoke SSR

**Archivo:** `.github/workflows/tests.yml`

El smoke SSR ahora valida:

- markup server-rendered;
- existencia del Header;
- `Marco Vega`;
- labels españoles iniciales;
- `main#main`;
- ausencia de branding Laravel.

**Para qué:** verificar que el primer Header visible también funciona en el camino SSR.

**Por qué:** compilar el cliente no detecta errores de ejecución o divergencias del bundle SSR.

## Documentación De Diseño

### PRD actualizado

**Archivo:** `PRD-02 — Header & Navigation v1.1.md`

El estado final es `Implemented`. El documento ahora refleja los gates SSR, la navegación Home + fragment, las restricciones de accesibilidad, la limitación de locale post-hidratación y el CV pendiente.

### SDD añadido

**Archivo:** `SDD-02 — Header & Navigation.md`

El SDD documenta la arquitectura, responsive, geometría, disclosure navigation, controles, accesibilidad, SSR, QA y decisiones fuera de alcance.

Su estado final es `Approved`.

## Validación Realizada

- `composer ci:check` ✅
- `npm run build` ✅
- `npm run build:ssr` ✅
- smoke test SSR real de `/` ✅
- `php artisan inertia:check-ssr` ✅
- TypeScript ✅
- ESLint ✅
- Prettier ✅
- PHPStan ✅
- Pest ✅

El smoke SSR confirmó Header, labels ES, `main#main`, `Marco Vega` y ausencia de branding Laravel.

Quedaron warnings no bloqueantes del plugin de fuentes sobre `fontaine` y de sourcemaps de `@inertiajs/vite`.

## Limitaciones Conocidas

- Los cuatro destinos no tienen todavía targets reales porque las secciones pertenecen a PRD posteriores.
- `ResumeLink` permanece oculto hasta disponer de un PDF/ruta confirmada.
- La reconciliación de locale persistido ocurre después de hidratar.
- El fitting visual final debe revisarse con contenido real del Hero y las secciones.
- La interacción browser completa se validó mediante smoke SSR, lint, build y revisión técnica; no existe runner browser instalado para automatizar focus, Escape y responsive.

## Commit Propuesto

```text
feat: implement header and navigation
```

Descripción opcional:

```text
Add the global portfolio header with responsive disclosure navigation, bilingual controls, accessible skip navigation, Wayfinder home links, and SSR validation.
```
