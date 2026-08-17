# SDD-01 — Portfolio Foundation

## 1. Estado

- Estado: Approved
- Relacionado: `PRD-01 — Portfolio Foundation v1.1.md`
- Implementación: Completada
- Stack objetivo: Laravel 13, Inertia 3, React 19, TypeScript, Tailwind CSS 4

## 2. Decisiones

### 2.1 Composición

La ruta `/` renderiza `portfolio/index`. La página default exporta `PortfolioPage` y solo compone:

```txt
PortfolioPage
└── PortfolioLayout
    ├── ThemeProvider
    ├── LocaleProvider
    └── main#main
```

No se crean `PageContainer`, Header, Hero, toggles ni componentes UI futuros.

Propuesta de archivos:

```txt
resources/js/
├── app.tsx
├── hooks/
│   ├── use-locale.ts
│   └── use-theme.ts
├── layouts/
│   └── portfolio-layout.tsx
├── pages/portfolio/index.tsx
├── providers/
│   ├── locale-provider.tsx
│   └── theme-provider.tsx
└── types/foundation.ts
```

La ubicación final puede variar solo si mantiene estas responsabilidades y las convenciones del repositorio.

### 2.2 Theme documental

La única fuente visual documental es:

```html
<html data-theme="light">
<html data-theme="dark">
```

Tailwind v4 usará una variante manual:

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

No se usará la clase `dark`, `prefers-color-scheme`, `$appearance` ni otra convención paralela para gobernar el theme del portfolio.

### 2.3 Bootstrap pre-paint

El root Blade establecerá defaults deterministas `data-theme="light"` y `lang="es"`. Un bootstrap inline, ubicado antes de cargar los estilos, hará lo siguiente:

1. Leer `portfolio.theme` y `portfolio.locale` mediante acceso protegido.
2. Aceptar únicamente `light|dark` y `es|en`.
3. Aplicar los valores válidos a `document.documentElement`.
4. Usar `light` y `es` si el almacenamiento no existe, falla o contiene valores inválidos.

El bootstrap no consultará `matchMedia`, `navigator.language`, `Accept-Language` ni geolocalización.

### 2.4 SSR e hidratación

La aplicación conserva SSR. Durante SSR y el primer render de hidratación, los snapshots serán deterministas:

```txt
theme = light
locale = es
```

El cliente reconciliará después la preferencia almacenada. PRD-01 no renderiza markup dependiente del theme o locale durante SSR, por lo que esa reconciliación no cambia el árbol inicial.

El SDD no impone `useSyncExternalStore`. Antes de implementar se compararán estas opciones:

1. Context + `useState` con defaults SSR y reconciliación en efecto.
2. Store externo pequeño con `useSyncExternalStore` y `getServerSnapshot`.

La alternativa elegida debe ser SSR-safe, no duplicar lógica y permitir que el acceso a `window`, `document` y `localStorage` ocurra solo en browser.

Esta restricción deberá revisarse cuando una página futura renderice contenido editorial traducido o contenido visual dependiente de preferencias durante SSR.

### 2.5 Persistencia best-effort

Theme y locale usarán:

```txt
portfolio.theme
portfolio.locale
```

La lectura y escritura se encapsularán en operaciones pequeñas y protegidas con `try/catch`. Si el almacenamiento falla:

- el default o estado activo se mantiene en memoria;
- el documento se actualiza;
- no se persiste un valor inválido;
- la aplicación no se rompe.

No se crearán cookies, endpoints, props server-side ni tablas para estas preferencias.

### 2.6 Contratos

```ts
export type Theme = 'light' | 'dark';
export type Locale = 'es' | 'en';
```

Los hooks expondrán como mínimo el estado activo y un setter tipado. Los setters aceptarán únicamente los unions en TypeScript y volverán a validar antes de persistir.

### 2.7 Tokens y contraste

Brand tokens centralizados:

```txt
brand.navy  #001236
brand.blue  #0F60F8
brand.gray  #A3AFBD
brand.white #FFFFFF
```

Semantic tokens mínimos:

```txt
background
foreground
accent
muted
border
focus
```

Los valores semánticos se declararán como variables CSS por theme y se expondrán a Tailwind con `@theme inline`. No se dispersarán hexadecimales en componentes.

Reglas obligatorias:

- `brand.gray` no se usará como texto normal sobre blanco sin validación.
- Los derivados deben proceder de los brand tokens aprobados.
- Cada semantic token tendrá un fondo y contexto de uso documentados.
- Texto normal: objetivo mínimo 4.5:1.
- Texto grande o indicadores no textuales: aplicar el umbral WCAG correspondiente.
- `focus` debe conservar un indicador visible en ambos themes.

### 2.8 Estilos globales

`resources/css/app.css` mantendrá la configuración CSS-first de Tailwind y añadirá únicamente:

- box sizing;
- body margin y min-height;
- background y foreground semánticos;
- fuente y font smoothing;
- focus visible;
- baseline de reduced motion;
- variables de marca y semantic tokens.

No se añadirán estilos de Header, Hero, secciones, geometría horizontal ni componentes UI.

### 2.9 Identidad y head

La identidad versionada será `Marco Vega` en `.env.example` y fallbacks relevantes de configuración y cliente.

`PortfolioPage` declarará el título base mediante Inertia `<Head title="Marco Vega" />`. El callback global será idempotente: no generará `Marco Vega - Marco Vega`. La implementación debe conservar un fallback compatible dentro de `<x-inertia::head>` para el caso sin SSR.

No quedarán referencias públicas a branding Laravel en título, textos, favicon o apple touch icon. No se diseñará una marca nueva en este PRD; los assets Laravel se eliminarán o se sustituirán únicamente por un asset MVR previamente aprobado.

### 2.10 Ruta y test

La ruta conservará el nombre `home` y cambiará únicamente el componente a `portfolio/index`.

El test Feature existente se ampliará para verificar:

- respuesta exitosa;
- componente Inertia `portfolio/index`;
- ausencia de `welcome` como componente.

No se instalará un runner frontend.

## 3. Validación

### Automatizada

Ejecutar separadamente:

```bash
composer ci:check
npm run build
npm run build:ssr
```

`composer ci:check` no se modificará para incluir los builds.

### SSR runtime smoke

Después de construir el bundle SSR:

```bash
php artisan inertia:start-ssr
php artisan inertia:check-ssr
```

Se solicitará `/` y se verificará que:

- el servidor responde;
- existe markup server-rendered;
- el head contiene `Marco Vega` una sola vez;
- no aparece un error de browser API;
- el proceso SSR se detiene al finalizar la validación.

La ejecución CI deberá garantizar limpieza del proceso aunque la comprobación falle.

### Manual/browser

Validar sin instalar dependencias nuevas:

- default light con sistema operativo dark;
- restauración dark sin flash perceptible;
- valores inválidos;
- almacenamiento bloqueado;
- `lang` inicial y restaurado;
- título único;
- focus visible;
- reduced motion;
- ausencia de branding Laravel;
- ausencia de overflow inesperado;
- ausencia de errores JavaScript.

## 4. Cambios de CI

El workflow existente ya usa Node 22. Después de aprobar e implementar PRD-01 añadirá pasos separados para:

```yaml
- run: composer ci:check
- run: npm run build
- run: npm run build:ssr
```

El smoke runtime SSR se añadirá como paso separado si el entorno CI puede mantener el servidor SSR durante la comprobación. No se ocultará un fallo de SSR usando solo el resultado del build.

## 5. Fuera de alcance confirmado

- `PageContainer`, reservado para PRD-02.
- Header, Hero, navegación, toggles y contenido editorial.
- i18n, diccionarios y traducciones completas.
- Persistencia server-side.
- Dependencias nuevas y runners browser.
- Rediseño de marca o favicon MVR nuevo.

## 6. Criterio De Aprobación

Este SDD quedó aprobado con la confirmación de:

1. La convención `html[data-theme]`.
2. SSR con snapshots `light/es` y reconciliación cliente.
3. La regla de derivados y contraste de tokens.
4. La estrategia de título y eliminación del branding Laravel.
5. Los tres gates de build y el smoke runtime SSR.
