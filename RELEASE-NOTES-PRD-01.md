# Release Notes — PRD-01 Portfolio Foundation

## Resumen

PRD-01 reemplaza la experiencia pública del starter Laravel por la foundation inicial del portfolio de Marco Vega.

La entrega no construye todavía Header, Hero, navegación, PageContainer ni contenido editorial. Su propósito es dejar una base técnica clara para que las siguientes entregas puedan crecer sin duplicar responsabilidades.

## Producto Y Arquitectura

### Ruta raíz del portfolio

**Archivo:** `routes/web.php`

La ruta `/` ahora resuelve `portfolio/index` y conserva el nombre `home`.

**Para qué:** la URL pública principal pertenece al portfolio y no al starter.

**Por qué:** mantener el nombre de ruta evita romper consumidores existentes, mientras cambiar el componente Inertia retira `welcome` de la experiencia pública.

### Composition root

**Archivos:**

- `resources/js/pages/portfolio/index.tsx`
- `resources/js/layouts/portfolio-layout.tsx`

`PortfolioPage` es la página concreta de `/` y `PortfolioLayout` es el shell global. El layout contiene un `<main id="main">` vacío, listo para que PRD-02 y los siguientes PRD agreguen contenido real.

**Para qué:** separar la página, el shell global y las futuras secciones.

**Por qué:** evita convertir `app.tsx` en una página de producto y evita crear abstracciones visuales antes de tener consumidores reales.

### Providers globales

**Archivos:**

- `resources/js/providers/theme-provider.tsx`
- `resources/js/providers/locale-provider.tsx`
- `resources/js/hooks/use-theme.ts`
- `resources/js/hooks/use-locale.ts`

Se añadieron contextos globales con estado y setters tipados para theme y locale.

**Para qué:** permitir que futuros componentes consulten o cambien estas preferencias sin prop drilling.

**Por qué:** Header y otros módulos futuros deben consumir una única fuente global de verdad, no implementar su propia lógica.

## Theme Y Locale

### Contratos de foundation

**Archivo:** `resources/js/types/foundation.ts`

Se definieron los contratos:

```ts
type Theme = 'light' | 'dark';
type Locale = 'es' | 'en';
```

**Para qué:** limitar los valores válidos en TypeScript y hacer explícitos los defaults del producto.

**Por qué:** evita estados ambiguos como `blue`, `system` o `fr`.

### Persistencia segura

**Archivo:** `resources/js/lib/preferences.ts`

Se centralizaron las claves `portfolio.theme` y `portfolio.locale`, sus validadores y las operaciones protegidas de lectura/escritura.

**Para qué:** compartir una implementación pequeña y consistente entre ambos providers.

**Por qué:** `localStorage` puede estar bloqueado o fallar. La persistencia es best-effort: la aplicación conserva defaults o estado en memoria y no se rompe.

### Bootstrap pre-paint

**Archivo:** `resources/views/app.blade.php`

El documento parte de `lang="es"` y `data-theme="light"`. Un script temprano restaura únicamente preferencias válidas antes de cargar la aplicación.

**Para qué:** aplicar dark mode y el idioma persistido antes del primer paint.

**Por qué:** reduce el flash de light a dark y establece una semántica documental temprana para tecnologías asistivas.

El bootstrap no usa `prefers-color-scheme`, `navigator.language`, `Accept-Language` ni geolocalización.

### SSR e hidratación

Los providers comienzan con snapshots deterministas `light` y `es` durante SSR/hidratación. Después del montaje, `startTransition` reconcilia las preferencias del navegador.

**Para qué:** evitar que `window`, `document` o `localStorage` sean necesarios durante el render del servidor.

**Por qué:** esos APIs solo existen en el navegador y podrían producir hydration mismatches si gobernaran el markup inicial.

## Sistema Visual Base

### Brand y semantic tokens

**Archivo:** `resources/css/app.css`

Se añadieron los brand tokens:

- Navy: `#001236`
- Blue: `#0F60F8`
- Gray: `#A3AFBD`
- White: `#FFFFFF`

Y los semantic tokens:

- `background`
- `foreground`
- `accent`
- `muted`
- `border`
- `focus`

**Para qué:** los componentes futuros consumirán intención visual en lugar de dispersar hexadecimales.

**Por qué:** permite cambiar light/dark de forma centralizada y mantener una semántica visual consistente.

Los valores `muted` y `border` se derivan de la paleta aprobada mediante variables CSS y `color-mix()`. Su uso como texto se debe validar según el fondo y el contexto.

### Dark mode controlado

Tailwind v4 usa una variante manual basada en `html[data-theme="dark"]`.

**Para qué:** activar las utilidades `dark:` desde la preferencia explícita de la aplicación.

**Por qué:** elimina la ambigüedad entre `data-theme`, la clase `dark` residual y el modo oscuro del sistema operativo.

### Global styles

Se añadió una baseline global para:

- box sizing;
- min-height de `html`, `body` y `#app`;
- margin del body;
- background y foreground semánticos;
- fuente y font smoothing;
- focus visible;
- reduced motion.

**Para qué:** establecer una superficie visual y accesible consistente antes de crear componentes.

**Por qué:** los PRD posteriores deben empezar desde reglas previsibles y no repetir resets básicos.

## Identidad Del Producto

### Nombre y locale de Laravel

**Archivos:**

- `.env.example`
- `config/app.php`
- `resources/js/app.tsx`
- `resources/views/app.blade.php`

La identidad base cambió a `Marco Vega` y el locale por defecto a `es`.

El callback global de títulos evita generar `Marco Vega - Marco Vega` cuando la página ya usa el nombre base.

**Para qué:** retirar la identidad técnica del starter.

**Por qué:** la aplicación debe presentarse como el portfolio desde su primer render, incluso en un build limpio.

### Assets del starter

Se eliminaron:

- `public/favicon.ico`
- `public/favicon.svg`
- `public/apple-touch-icon.png`

También se eliminaron sus referencias del root Blade.

**Para qué:** impedir que navegadores o metadata sigan mostrando branding Laravel.

**Por qué:** no se diseñó una marca nueva fuera del alcance; PRD futuros podrán incorporar un asset MVR aprobado.

### Eliminación de `welcome`

**Archivo eliminado:** `resources/js/pages/welcome.tsx`

**Para qué:** retirar código público muerto del starter.

**Por qué:** la ruta raíz ya no lo referencia y mantenerlo aumentaría la confusión sobre cuál es la página oficial.

## Testing Y CI

### Test funcional Inertia

**Archivo:** `tests/Feature/ExampleTest.php`

El test ahora verifica que `/` responde correctamente y que el componente Inertia es `portfolio/index`.

**Para qué:** proteger la ruta principal contra regresiones hacia `welcome`.

### Quality gate

**Archivo:** `composer.json`

PHPStan ahora usa explícitamente `--memory-limit=512M`.

**Para qué:** permitir que el análisis estático termine de forma determinista.

**Por qué:** el límite local de `128M` provocaba que el gate fallara por memoria, aunque no existieran errores de análisis.

### Builds y smoke test SSR

**Archivo:** `.github/workflows/tests.yml`

CI mantiene `composer ci:check` y añade:

- `npm run build:ssr`;
- arranque del servidor SSR;
- `php artisan inertia:check-ssr`;
- servidor Laravel temporal;
- comprobación de markup server-rendered;
- comprobación de identidad `Marco Vega`;
- comprobación de ausencia de `Laravel`.

**Para qué:** comprobar tanto la compilación como la ejecución real del bundle SSR.

**Por qué:** un build correcto no garantiza que Node pueda renderizar la página ni que el root HTML sea la respuesta esperada.

## Documentación De Diseño

### PRD actualizado

**Archivo:** `PRD-01 — Portfolio Foundation v1.1.md`

Se actualizó inicialmente el estado a `Ready for SDD`, se formalizó el bloqueo previo a implementación, y tras aprobar y ejecutar el SDD el estado final quedó como `Implemented`. También se corrigió la clasificación de pruebas y se incorporaron los gates SSR.

### SDD añadido

**Archivo:** `SDD-01 — Portfolio Foundation.md`

Documenta la arquitectura, el bootstrap, SSR/hidratación, tokens, contraste, identidad, testing, CI y límites de alcance. Su estado final es `Approved`.

**Para qué:** dejar explícito el razonamiento detrás de la implementación.

**Por qué:** evita que futuras decisiones contradigan la foundation o reintroduzcan abstracciones prematuras.

## Validación Realizada

- `composer ci:check` ✅
- `npm run build` ✅
- `npm run build:ssr` ✅
- smoke test SSR de `/` ✅
- `php artisan inertia:check-ssr` ✅
- TypeScript ✅
- ESLint ✅
- Prettier ✅
- PHPStan ✅
- Pest ✅

Quedaron warnings no bloqueantes del plugin de fuentes sobre `fontaine` y de sourcemaps de `@inertiajs/vite`.

## Cambios Locales No Versionados

El `.env` local fue actualizado a `APP_NAME="Marco Vega"`, `APP_LOCALE=es` y `APP_FALLBACK_LOCALE=es` para que el entorno de desarrollo reflejara la identidad del producto. Este archivo está ignorado y no forma parte del commit.

También se retiró el archivo generado `public/hot` para validar assets de producción. No debe versionarse.

## Commit Propuesto

```text
feat: implement portfolio foundation v1
```

Descripción opcional:

```text
Replace the Laravel starter homepage with the Marco Vega portfolio foundation, including SSR-safe theme and locale preferences, semantic design tokens, identity cleanup, Inertia route coverage, and CI SSR validation.
```
