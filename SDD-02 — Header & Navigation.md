# SDD-02 — Header & Navigation

## 1. Estado

- Estado: Approved
- Relacionado: `PRD-02 — Header & Navigation v1.1.md`
- Dependencia: PRD-01 implementado en `f215410`
- Implementación: Completada
- Stack: Laravel 13, Inertia 3, React 19, TypeScript, Tailwind CSS 4

### Enmienda posterior — 2026-08-20

El Header activo es single-theme dark. `ThemeToggle` permanece en el repositorio como capacidad futura, pero no se renderiza en desktop ni mobile. Los criterios históricos de alternancia light/dark y su QA se consideran deprecated; no deben guiar nuevas implementaciones.

## 2. Verificación heredada

Antes de implementar se verificó que el repositorio contiene:

- `PortfolioLayout` con `ThemeProvider`, `LocaleProvider` y `main#main`.
- `useTheme()` y `useLocale()` como APIs públicas.
- `Theme` y `Locale` en `resources/js/types/foundation.ts`.
- Semantic tokens y variante dark basada en `data-theme`.
- Wayfinder configurado y ruta nombrada `home`.
- SSR habilitado, `npm run build:ssr` y smoke runtime en CI.
- No existe `PageContainer`, Header, navegación ni PDF de CV.
- No existe runner browser instalado.

No se añadirán dependencias.

## 3. Arquitectura

La composición final será:

```txt
PortfolioLayout
├── ThemeProvider
│   └── LocaleProvider
│       ├── SkipLink
│       ├── Header
│       │   └── PageContainer
│       │       ├── Brand
│       │       ├── DesktopNav
│       │       │   └── NavLink × 4
│       │       ├── desktop actions
│       │       └── MobileNav
│       └── main#main[tabindex="-1"]
```

`PortfolioPage` no importará ni compondrá Header. `PageContainer` solo se usará dentro del Header y no envolverá `main`.

Propuesta de archivos:

```txt
resources/js/
├── components/
│   ├── layout/
│   │   ├── page-container.tsx
│   │   └── skip-link.tsx
│   └── navigation/
│       ├── brand.tsx
│       ├── desktop-nav.tsx
│       ├── header.tsx
│       ├── language-toggle.tsx
│       ├── mobile-nav.tsx
│       ├── nav-link.tsx
│       ├── resume-link.tsx
│       └── theme-toggle.tsx
├── data/
│   └── navigation.ts
└── layouts/
    └── portfolio-layout.tsx
```

El tipo `NavItem` vivirá junto al dataset en `data/navigation.ts` si no existe una necesidad real de compartirlo fuera del módulo.

## 4. Datos De Navegación

El dataset tendrá exactamente cuatro items:

```ts
type NavItem = {
    id: 'about' | 'experience' | 'projects' | 'contact';
    fragment: '#about' | '#experience' | '#projects' | '#contact';
    label: {
        es: string;
        en: string;
    };
};
```

Labels:

```txt
about       → Sobre mí / About
experience  → Experiencia / Experience
projects    → Proyectos / Projects
contact     → Contacto / Contact
```

No se incluirá `core-stack`, Blog, Services, Skills ni ningún item adicional.

### Resolución De Destinos

La navegación representa secciones de la Home. La implementación resolverá cada destino como:

```txt
URL de home + fragment
```

La función `home()`/`home.url()` generada por Wayfinder será la fuente de la URL de la Home. Los enlaces de fragments serán anchors HTML nativos, no visitas Inertia, para preservar el comportamiento natural del documento.

El Brand usará `<Link>` de Inertia con la ruta Home de Wayfinder porque es navegación de página.

Los targets no existen todavía. Esto se documentará como limitación de desarrollo y no se crearán secciones falsas.

## 5. PageContainer Y Geometría

`PageContainer` será la primitive de geometría horizontal reutilizable, sin imponer un wrapper universal.

Hipótesis inicial para validación visual:

```txt
width: 100%
max-width: 80rem
margin-inline: auto
padding-inline: 1rem
sm: 1.5rem
lg: 2rem
```

La geometría será expresada con clases/variables reutilizables y podrá ser consumida por secciones futuras. El valor de `80rem` queda sujeto a fitting futuro, pero no se duplicará en Header y otras piezas.

## 6. Header Sticky

El Header será:

- `position: sticky`;
- `top: 0`;
- z-index documentado;
- superficie semántica suficientemente opaca;
- borde inferior semántico;
- compacto y sin copy editorial de Hero;
- una tarjeta visual centrada con bordes redondeados y sombra suave;
- con el lockup MVR compuesto por monograma, divisor y wordmark.

La translucencia y `backdrop-filter` serán enhancements opcionales. La legibilidad no dependerá del blur ni del contenido que pase por debajo.

La superficie visual sigue siendo suficientemente opaca. El Header no ocupará todo el ancho como una barra plana; `PageContainer` proporcionará la tarjeta flotante y su geometría.

Se definirá una única relación para altura y desplazamiento:

```css
:root {
    --header-height: 4rem;
    --header-anchor-offset: calc(var(--header-height) + 0.5rem);
}
```

El valor visual de `4rem` es una hipótesis inicial. Si el fitting exige otra altura, se modifica la variable única y no offsets duplicados.

El SDD no introduce scroll spy ni cambia estilos según scroll.

## 7. Responsive

`lg` será el breakpoint candidato inicial, no una regla de dispositivo.

Se aprobará solo si el fitting confirma:

- cero wrapping de labels;
- cero overflow horizontal;
- separación razonable entre acciones;
- área táctil suficiente;
- lectura clara con labels españoles;
- ningún control comprimido.

Si el Header deja de caber antes de `lg`, el breakpoint debe adelantarse. Si cabe correctamente por debajo de `lg`, no se colapsará prematuramente.

Comportamiento:

```txt
< breakpoint
    Brand + trigger MobileNav
    MobileNav contiene navegación y acciones

>= breakpoint
    Brand + DesktopNav + acciones
    MobileNav no es visible ni accesible
```

El mecanismo concreto para cerrar el estado móvil al cruzar breakpoint puede ser `matchMedia`, un efecto de sincronización o una estructura que haga innecesario el reset. Debe cumplir el resultado observable y limpiar cualquier listener instalado.

## 8. SkipLink Y Foco

`SkipLink` será el primer control enfocable del documento y un anchor nativo:

```html
<a href="#main">Saltar al contenido</a>
```

El layout cambiará `main#main` a:

```tsx
<main id="main" tabIndex={-1}>
```

El `tabIndex` permite que la activación del enlace mueva realmente el foco al contenido principal sin añadirlo a la navegación normal por Tab.

El offset del Header se aplicará mediante la variable derivada `--header-anchor-offset` cuando existan targets reales. No se crearán targets falsos en PRD-02.

## 9. MobileNav

MobileNav será una disclosure navigation, no un `role="menu"`, dialog ni modal.

Contrato:

- estado inicial `closed`;
- trigger `button type="button"`;
- `aria-expanded` refleja el estado;
- `aria-controls` apunta a un ID estable;
- ID creado con `useId()` para SSR/hidratación estable;
- panel con `hidden` cuando está cerrado;
- links agrupados dentro de navegación semántica;
- cierre por trigger;
- cierre al seleccionar cualquier link;
- cierre con Escape;
- retorno de foco al trigger al cerrar por Escape;
- no focus trap;
- no overlay bloqueante;
- no `inert`.

El Escape se manejará en el árbol del componente si la estructura lo permite; un listener temporal con cleanup es una alternativa válida. No se exige un listener global.

El foco se guardará con una ref al trigger. El cierre por navegación no debe robar foco al destino.

## 10. Controles

### ThemeToggle

Será un botón compacto que consuma exclusivamente `useTheme()`.

Modelo elegido:

- nombre accesible estable: `Modo oscuro` / `Dark mode`;
- `aria-pressed={theme === 'dark'}`;
- icono inline decorativo con `aria-hidden="true"`;
- cambio mediante `setTheme()`;
- sin acceso directo a `localStorage`, `document` ni `data-theme`.

El nombre no cambiará entre estados si se utiliza `aria-pressed`.

No se usará `text-accent` como color de texto normal sobre superficies donde no alcance contraste AA.

### LanguageToggle

Será un grupo compacto de dos botones:

```txt
Idioma / Language
ES [pressed]
EN
```

Reglas:

- grupo con nombre accesible `Idioma` o `Language` según locale;
- cada botón usa `aria-pressed`;
- el estado activo corresponde a `locale`;
- cambio mediante `setLocale()`;
- sin acceso directo a almacenamiento o `html[lang]`;
- sin `select`, combobox, menu role o librería i18n.

### ResumeLink

No existe PDF ni ruta confirmada. `ResumeLink` se implementará como componente mínimo con destino opcional y devolverá `null` cuando no exista.

No habrá `href="#"`, ruta vacía, PDF falso ni estado deshabilitado visible.

Pending product asset:

```txt
ResumeLink no renderizado porque no existe PDF/ruta confirmada.
```

Si un PRD posterior proporciona el asset, deberá usar `target="_blank"` y `rel="noreferrer"`.

## 11. Acciones Desktop Y Mobile

Se permite renderizar las acciones en ambas variantes para mantener una composición simple, pero la variante no activa debe:

- usar `hidden` o `display: none` real;
- no ser enfocable;
- no estar en el árbol de accesibilidad;
- no duplicar IDs;
- no duplicar relaciones `aria-controls`.

El SDD no permite resolverlo solo con opacity, transform o `pointer-events: none`.

Si una sola instancia reposicionada por CSS reduce complejidad sin empeorar accesibilidad, puede preferirse esa alternativa.

Los controles y el trigger deberán ofrecer un área interactiva aproximada mínima de `44px` cuando el fitting lo permita.

## 12. SSR E Idioma

Se conserva la estrategia de PRD-01:

```txt
SSR y primer render React: light/es
Bootstrap documental: preferencia válida temprana
Después de hidratar: reconciliación desde localStorage
```

El Header no leerá `localStorage` durante render. Los labels cambiarán después de la reconciliación si existe `portfolio.locale = en`.

Esto es una limitación conocida de desarrollo. Antes del release final se debe revisar si el cambio de labels es perceptible y si se requiere transportar la preferencia al servidor. PRD-02 no añade cookies ni cambia la foundation.

MobileNav empezará cerrado en SSR y en el primer render cliente.

No se usarán IDs aleatorios ni datos variables del navegador durante render.

## 13. Validación

### Automated

```bash
composer ci:check
npm run build
npm run build:ssr
```

El workflow CI debe conservar el smoke SSR existente.

### SSR smoke

El smoke verificará de forma semántica:

- HTTP exitoso para `/`;
- markup server-rendered;
- existencia de `<header>`;
- identidad `Marco Vega`;
- labels ES iniciales;
- `main#main`;
- ausencia de `Laravel` y branding del starter.

No verificará clases Tailwind ni detalles visuales frágiles.

### Static review

- Header se integra en PortfolioLayout.
- PortfolioPage no importa Header.
- Existen exactamente cuatro NavItems.
- No existe `core-stack`.
- Brand usa Home nombrada.
- Fragments se resuelven contra Home.
- Toggles consumen los hooks existentes.
- Toggles no tocan almacenamiento/documento.
- ResumeLink no usa destino falso.
- No se crean secciones, Hero ni scroll spy.
- Variante oculta de acciones no es accesible.
- No se instala dependencia.
- No se usa text accent con contraste insuficiente.

### Manual/browser QA

- Fitting desktop con labels ES y EN.
- Header sticky sin overflow.
- MobileNav abre y cierra.
- `aria-expanded` y `aria-controls` correctos.
- Escape devuelve foco.
- Links cierran el panel.
- SkipLink es el primer foco y enfoca main.
- ThemeToggle cambia light/dark y conserva persistencia.
- LanguageToggle cambia ES/EN y sincroniza `html[lang]` mediante provider.
- Controles ocultos no reciben foco.
- Cambio de viewport no deja panel inconsistente.
- Contraste en light/dark.
- Área táctil suficiente.
- Locale flash documentado y evaluado.

## 14. Criterio De Aprobación

Este SDD quedó aprobado con la confirmación de:

1. Navegación Home + fragment sin API concreta en el PRD.
2. Reconciliación SSR `light/es` como limitación de desarrollo.
3. Breakpoint sujeto a fitting.
4. Variable única para altura y offset.
5. PageContainer reutilizable sin wrapper universal.
6. Superficie opaca como baseline y blur opcional.
7. Disclosure accesible sin modal ni role menu.
8. ResumeLink ausente hasta disponer de asset real.
9. Gates de cliente y SSR.
