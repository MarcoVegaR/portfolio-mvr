# PRD-EXPERIENCE — Experience / Professional Experience

## 1. Metadata

- **Estado:** Ready for SDD / Implementation planning
- **Versión:** 1.0
- **Fecha:** 2026-08-26
- **Autor / Product Owner:** Marco Vega
- **Proyecto:** Portfolio personal Marco Vega
- **Módulo:** Home / Experience Section
- **Prioridad:** Alta
- **Agente objetivo:** Agente IA de frontend / portfolio implementation
- **Repositorio:** Pendiente de confirmar en SDD
- **Rama:** Pendiente de definir en implementación

## 2. Resumen ejecutivo

Se construirá la sección **Experience / Professional Experience** del portfolio personal de Marco Vega. Esta sección se insertará dentro de la narrativa principal del sitio en el orden: **Hero → About → Core Stack → Experience → Projects → Contact**. Su función es conectar el posicionamiento profesional ya presentado con evidencia de trayectoria real, mostrando dónde Marco ha tenido responsabilidad profesional, qué roles ha desempeñado y qué tipo de problemas ha resuelto.

La sección debe funcionar como un archivo profesional navegable mediante tabs reales, manteniendo una estética coherente con el universo Matrix del portfolio sin repetir exactamente los recursos visuales de About ni Core Stack. Caracoders debe ser el panel inicial renderizado por SSR; cada tab muestra un solo registro a la vez.

Experience debe demostrar trayectoria, responsabilidad, alcance e impacto, pero no debe convertirse en otro Core Stack ni en una colección de mini case studies. Projects será la fase posterior encargada de desarrollar evidencia técnica profunda.

## 3. Problema que resuelve

El portfolio ya comunica quién es Marco, cómo trabaja y con qué tecnologías se posiciona. Sin embargo, antes de mostrar Projects, falta una sección que explique **dónde ha aplicado profesionalmente esas capacidades** y cómo su trayectoria previa sostiene su posicionamiento actual.

El problema principal es que la experiencia profesional de Marco incluye roles con naturalezas distintas y un solapamiento temporal relevante entre FVF y FIFA. Si la UI no lo comunica correctamente, un recruiter o entrevistador técnico podría interpretar errores cronológicos, duplicación de cargos o cambios laborales confusos. El brief identifica expresamente que FIFA ocurrió simultáneamente con FVF y que la interfaz debe hacerlo inequívoco.

## 4. Objetivos

### Objetivo principal

Diseñar e implementar una sección Experience que permita a recruiters e entrevistadores técnicos comprender rápidamente la trayectoria profesional de Marco Vega, su progresión de responsabilidades y la continuidad entre experiencia histórica y posicionamiento actual.

### Objetivos secundarios

- Mostrar tres experiencias principales: Caracoders Pro Services, Federación Venezolana de Fútbol y FIFA.
- Diferenciar claramente el propósito narrativo de cada experiencia.
- Representar FIFA como cargo simultáneo con FVF sin anidarlo ni ocultarlo.
- Hacer visibles desde el inicio los tres registros mediante tabs.
- Usar una solución visual tipo **Professional Records / System Archive** con moderación.
- Preservar paridad completa ES/EN.
- Mantener contenido semántico real en el DOM para accesibilidad y SEO.
- Integrar la sección en la navegación principal mediante `#experience`.
- Evitar duplicar contenido de Core Stack y Projects.

### Métricas de éxito

- Un visitante puede identificar en pocos segundos las tres experiencias principales.
- El solapamiento FVF/FIFA resulta inequívoco.
- Cada experiencia muestra periodo, organización, cargo, summary y hasta 4 highlights.
- La sección funciona en desktop, tablet y mobile sin depender de geometría compleja.
- La sección conserva significado completo con `prefers-reduced-motion`.
- No se introducen claims, métricas, cargos ni fechas no aprobadas.

## 5. Usuarios y roles involucrados

### Usuario principal

**Recruiter / Talent reviewer**

Necesita entender rápidamente trayectoria, seniority, responsabilidad y continuidad profesional sin leer un CV completo.

### Usuario secundario

**Entrevistador técnico / Engineering reviewer**

Necesita identificar señales de experiencia real en software, liderazgo tecnológico, implementación de producto, sistemas e infraestructura.

### Usuario indirecto

**Marco Vega / propietario del portfolio**

Necesita que la sección represente su trayectoria con precisión, sin exagerar ni reinterpretar roles históricos como AI Engineering.

## 6. Alcance funcional

Esta versión incluye:

- Creación de la sección **Experience** dentro de la Home.
- Inserción de la sección después de Core Stack y antes de Projects.
- Integración del anchor `#experience` en la navegación principal existente.
- Implementación de registros profesionales navegables mediante tabs.
- Render de tres entradas:
    - Caracoders Pro Services — Gerente General — 2020–Actualidad.
    - Federación Venezolana de Fútbol — Gerente de Tecnología — 2011–2020.
    - FIFA — Project Manager — 2012–2018.
- Representación de FIFA como **Experience Entry independiente**.
- Inclusión textual visible de:
    - ES: `Cargo simultáneo con Gerente de Tecnología — FVF`
    - EN: `Concurrent role with Technology Manager — FVF`
- Visualización directa de:
    - Period.
    - Organization.
    - Role.
    - Summary.
    - Hasta 4 highlights.
- Uso moderado y exclusivo del lenguaje `career.records()` como metadata editorial.
- Diseño responsive para desktop, tablet y mobile.
- Soporte completo ES/EN.
- Accesibilidad básica y semántica.
- Motion decorativo como enhancement.
- Reduced motion sin pérdida de contenido.
- Guardrails para evitar modificar otras secciones salvo integración mínima.

## 7. Fuera de alcance

No entra en esta fase:

- Crear o modificar Projects.
- Convertir Experience en case studies.
- Incluir screenshots de sistemas.
- Incluir repositorios.
- Incluir diagramas de arquitectura.
- Incluir workflows técnicos extensos.
- Incluir stack completo por experiencia.
- Repetir inventarios de tecnologías ya cubiertos en Core Stack.
- Introducir métricas no aprobadas.
- Cambiar cargos, fechas u organizaciones.
- Reinterpretar FVF/FIFA como AI Engineering.
- Anidar FIFA dentro de FVF.
- Usar una timeline vertical u horizontal como estructura principal.
- Usar un dashboard de múltiples columnas o un sidebar permanente.
- Modificar Header, Hero, About, Core Stack, Projects o Contact salvo integración mínima.
- Hacer refactors globales oportunistas.
- Instalar dependencias nuevas sin aprobación explícita.
- Usar WebGL únicamente para esta sección.

Las restricciones anteriores derivan del brief conceptual y de los guardrails generales para agentes IA, especialmente no modificar módulos fuera de alcance, no instalar dependencias sin aprobación y no asumir reglas no documentadas.

## 8. Contexto del sistema actual

El portfolio tiene completadas o definidas las fases:

```text
Header
Hero
About
Core Stack
```

La nueva fase debe insertarse como:

```text
Hero
About
Core Stack
Experience
Projects
Contact
```

El sistema actual usa una narrativa visual inspirada en Matrix. Hero, About y Core Stack ya tienen recursos visuales fuertes, por lo que Experience debe introducir una variación del mismo universo visual sin repetir exactamente la terminal CRT ni el lenguaje visual de Core Stack.

### Pendiente de verificación técnica en repositorio

El agente deberá revisar antes de implementar:

- composición actual de Home;
- sistema de datos/localización ES/EN;
- sistema de anchors y offsets;
- componentes reutilizables;
- tokens de spacing, color y tipografía;
- estrategia actual de motion;
- breakpoints existentes;
- tests disponibles;
- patrones implementados en About y Core Stack.

Si alguna restricción real del repositorio contradice este PRD, el agente debe documentar el bloqueo y proponer alternativa antes de modificar arquitectura.

## 9. Playbooks aplicados al PRD

- **Product Discovery / PRD Base:** activo. Se usa para proteger problema, alcance, fuera de alcance, decisiones cerradas y riesgo de mezclar módulos.
- **Frontend / UX:** activo. Aplica por tratarse de una sección visual responsive con jerarquía, motion, accesibilidad y navegación.
- **Data / Modelo conceptual:** activo en modo ligero. Aplica por estructura de contenido, ES/EN, entries, highlights y representación del rol paralelo FIFA/FVF.
- **QA / Acceptance:** activo. Aplica para definir criterios Given/When/Then, responsive, accesibilidad, i18n y matriz de trazabilidad.
- **Backend / API / Reglas:** no activo. No hay endpoints, CRUD, servicios ni procesos de backend.
- **Seguridad / Roles / Trazabilidad:** no activo. No hay autenticación, permisos ni datos sensibles.
- **DevOps / Integraciones / Operación:** no activo. No hay jobs, servicios externos, colas ni infraestructura nueva.

Los playbooks son checklists de análisis y no agregan requisitos automáticamente.

## 10. Requisitos funcionales

### RF-001 — Insertar sección Experience

Como visitante del portfolio, quiero encontrar una sección Experience después de Core Stack y antes de Projects para entender la trayectoria profesional antes de revisar evidencia técnica profunda.

### RF-002 — Exponer anchor de navegación

Como visitante, quiero poder navegar a Experience mediante `#experience` para acceder directamente a la sección desde la navegación principal.

### RF-003 — Mostrar encabezado de sección

Como visitante, quiero ver un encabezado claro de Experience con eyebrow/index, heading e introducción breve para entender la función de la sección.

### RF-004 — Renderizar registros mediante tabs

Como visitante, quiero seleccionar registros profesionales mediante tabs para comprender trayectoria profesional sin que parezca una grilla genérica de cards.

### RF-005 — Mostrar Caracoders Pro Services

Como recruiter, quiero ver la experiencia de Caracoders Pro Services con periodo, organización, cargo, summary y hasta 4 highlights para entender el trabajo actual de Marco en software, arquitectura y producción.

### RF-006 — Mostrar Federación Venezolana de Fútbol

Como recruiter, quiero ver la experiencia de FVF con periodo, organización, cargo, summary y hasta 4 highlights para entender liderazgo tecnológico, transformación, infraestructura e integración de sistemas.

### RF-007 — Mostrar FIFA como entrada independiente

Como recruiter, quiero ver FIFA como Experience Entry independiente para entender que fue un rol profesional propio y no una subfunción interna de FVF.

### RF-008 — Explicar simultaneidad FIFA/FVF

Como visitante, quiero ver una indicación textual clara de que FIFA fue un cargo simultáneo con FVF para no interpretar el solapamiento como error cronológico.

### RF-009 — Navegar registros profesionales

Como visitante, quiero seleccionar una experiencia mediante tabs accesibles y leer su registro completo sin depender de hover ni animaciones.

### RF-010 — Limitar highlights

Como visitante, quiero ver máximo 4 highlights por experiencia para obtener evidencia concreta sin que la sección se convierta en un CV completo.

### RF-011 — Soportar ES/EN

Como visitante, quiero ver la sección completamente localizada en español o inglés para que el portfolio mantenga paridad lingüística sin Spanglish.

### RF-012 — Aplicar lenguaje Matrix moderado

Como visitante, quiero percibir el concepto `career.records()` como recurso editorial moderado sin que cargos, empresas y fechas pierdan prioridad.

### RF-013 — Respetar responsive

Como visitante móvil, quiero usar los tres tabs en una sola fila y leer el registro seleccionado en una columna legible.

### RF-014 — Implementar motion como enhancement

Como visitante, quiero ver transiciones sutiles que refuercen el concepto de career trace sin bloquear ni ocultar contenido.

### RF-015 — Respetar reduced motion

Como usuario con reduced motion, quiero que todo el contenido conserve el mismo significado y disponibilidad sin animaciones necesarias.

### RF-016 — Mantener contenido semántico en HTML

Como visitante y como motor de búsqueda, quiero que cargos, organizaciones, periodos y descripciones existan como texto HTML real para accesibilidad y SEO.

### RF-017 — Respetar límites editoriales con Core Stack y Projects

Como visitante, quiero que Experience comunique responsabilidad profesional sin repetir inventarios tecnológicos ni desarrollar case studies que pertenecen a Projects.

## 11. Reglas de negocio

### RN-001 — Orden de experiencias

La sección debe renderizar las experiencias en este orden:

```text
1. Caracoders Pro Services — 2020–Actualidad
2. Federación Venezolana de Fútbol — 2011–2020
3. FIFA — 2012–2018
```

No se deben intercalar eventos individuales entre FVF y FIFA.

### RN-002 — Independencia de FIFA

FIFA debe renderizarse como Experience Entry independiente. No debe anidarse dentro de FVF ni presentarse como función interna de FVF.

### RN-003 — Simultaneidad obligatoria

La entrada FIFA debe incluir texto visible:

- ES: `Cargo simultáneo con Gerente de Tecnología — FVF`
- EN: `Concurrent role with Technology Manager — FVF`

El conector visual, si existe, es secundario y no puede ser la única forma de comunicar esta relación.

### RN-004 — Límite de highlights

Cada experiencia debe mostrar máximo 4 highlights. Si `experience_marco_vega.md` contiene más contenido, el agente debe seleccionar/adaptar por densidad de UI sin inventar claims.

### RN-005 — Fuente editorial obligatoria

La fuente de verdad para cargos, fechas, organizaciones, summary y highlights es `experience_marco_vega.md`. Si el archivo no existe o no está disponible en el repositorio, el agente debe detenerse y reportar bloqueo.

### RN-006 — No reinterpretación histórica

FVF y FIFA deben conservar su contexto real: tecnología, sistemas, infraestructura, producto, transformación, liderazgo e implementación. No deben presentarse retrospectivamente como roles de AI Engineering.

### RN-007 — Tecnologías en contexto

Las tecnologías solo pueden aparecer cuando formen parte directa de una contribución profesional significativa. No deben mostrarse como inventario tipo tech stack por experiencia.

### RN-008 — Projects como evidencia profunda

Experience puede mencionar productos relevantes, pero no debe desarrollar arquitectura, screenshots, repositorios, workflows técnicos, stack completo ni case studies.

### RN-009 — Cargos y fechas inmutables

El agente no puede cambiar cargos, fechas ni organizaciones. Cualquier discrepancia entre fuente editorial y PRD debe reportarse como bloqueo.

### RN-010 — Modificaciones acotadas

El agente solo puede modificar otras secciones si es estrictamente necesario para insertar Experience, integrar `#experience` o preservar navegación existente.

## 12. Requisitos no funcionales

### Accesibilidad

- La sección debe usar estructura semántica adecuada.
- Debe existir heading identificable para Experience.
- Cada entrada debe tener jerarquía clara.
- La selección visual no debe ser la única representación de la relación FVF/FIFA.
- El contenido principal debe ser accesible sin hover.
- Debe funcionar con teclado.
- Debe conservar focus visible si hay elementos interactivos.
- Debe respetar contraste suficiente según el sistema visual existente.
- Debe respetar `prefers-reduced-motion`.

El brief exige estructura semántica, teclado, contraste, reduced motion y que la representación gráfica del tiempo tenga equivalente textual.

### Usabilidad

- La jerarquía debe priorizar periodo, cargo, organización, contexto y contribuciones.
- No debe priorizar logos, badges, decoración ni tecnologías por encima del rol y el impacto profesional.
- En mobile debe leerse como lista vertical clara.
- La comprensión de FIFA/FVF no debe depender de geometría visual.

### Performance

- No introducir dependencias pesadas para representar Experience.
- Priorizar HTML, CSS y motion ya disponible en el proyecto.
- No usar WebGL salvo justificación excepcional aprobada.
- No bloquear render del contenido textual esencial por animaciones.

### Mantenibilidad

- El contenido debe integrarse al sistema existente de datos/localización si existe.
- No hardcodear arbitrariamente datos en JSX si el proyecto ya centraliza contenido.
- Los componentes deben seguir patrones existentes del proyecto cuando sean compatibles.

### Compatibilidad responsive

- Desktop: tablist horizontal con identidad visual neutral y panel editorial único.
- Tablet: tablist y vínculo FVF/FIFA adaptados a una composición vertical legible.
- Mobile: tres tabs visibles y panel activo en una columna legible; el vínculo visual es secundario.

### SEO

- Role, Organization, Period y Description deben existir como texto HTML real.
- No deben depender exclusivamente de SVG, canvas, pseudo-elements, imágenes o animaciones.

## 13. Interfaz esperada, flujo esperado o API esperada

No aplica API. La sección es frontend estático/dinámico según arquitectura actual.

### Estructura funcional esperada

```text
ExperienceSection
├── SectionHeader
│   ├── Eyebrow / index
│   ├── Heading
│   └── Intro breve
├── CareerTrace
│   ├── ExperienceEntry: Caracoders
│   ├── ExperienceEntry: FVF
│   └── ExperienceEntry: FIFA
└── ExperienceVisualLayer
```

### ExperienceEntry debe contener

```text
Period
Organization
Role
Summary
Highlights[]
ParallelRoleIndicator? solo FIFA
```

### Desktop

- Tablist horizontal con tres registros profesionales.
- Panel editorial único activo inspirado en System Archive.
- Puede usar `career.records()` como detalle editorial.
- Un vínculo visual contextual comunica el solapamiento FVF/FIFA; la entrada FIFA conserva la explicación textual completa.

### Mobile

- Tres tabs visibles y panel activo en una columna legible.
- Sin timeline vertical ni horizontal.
- Sin dependencia de conectores complejos.
- La indicación de cargo simultáneo en FIFA permanece visible.
- La legibilidad tiene prioridad sobre la decoración.

### Motion

Permitido:

- aparición ligera de línea;
- activación sutil de nodos;
- pequeños estados de sistema;
- transiciones discretas.

No permitido:

- contenido bloqueado hasta entrar en viewport;
- scroll obligatorio para revelar información;
- autoplay distractor;
- animación necesaria para comprender fechas;
- motion sin alternativa reduced motion.

## 14. Datos y modelo conceptual

### Entidad: ExperienceEntry

Campos conceptuales:

```text
id: string
period: {
  start: string
  end: string
  label: localized string
}
organization: localized string
role: localized string
location?: localized string
summary: localized string
highlights: localized string[]
parallelRoleNote?: localized string
visualMeta?: {
  traceLabel?: string
  isParallel?: boolean
}
```

### Entradas requeridas

#### Caracoders Pro Services

- **Period:** 2020 — Actualidad / 2020 — Present
- **Organization:** Caracoders Pro Services
- **Role:** Gerente General / General Manager
- **Debe comunicar:** dirección de empresa, arquitectura, desarrollo hands-on, producción, backend/Laravel cuando sea contribución real, integración y ownership técnico, sin desarrollar casos de estudio de productos.

#### Federación Venezolana de Fútbol

- **Period:** 2011 — 2020
- **Organization:** Federación Venezolana de Fútbol / Venezuelan Football Federation
- **Role:** Gerente de Tecnología / Technology Manager
- **Debe comunicar:** liderazgo tecnológico, operación para aproximadamente 180 usuarios internos y alrededor de 3.000 usuarios federativos, transformación de procesos, infraestructura, integración, automatización, observabilidad, políticas tecnológicas y seguridad.

#### FIFA

- **Period:** 2012 — 2018
- **Organization:** FIFA
- **Role:** Project Manager
- **Location:** Venezuela, si existe en contenido aprobado.
- **Parallel note ES:** Cargo simultáneo con Gerente de Tecnología — FVF
- **Parallel note EN:** Concurrent role with Technology Manager — FVF
- **Debe comunicar:** implementación de producto, discovery, stakeholders, proveedor, migración, pruebas, despliegue nacional, FIFA Connect ID.

Las experiencias y sus ejes narrativos están definidos en el brief base.

### i18n

- La sección debe funcionar completamente en ES y EN.
- No debe existir Spanglish dentro de una misma versión.
- Estados, labels, summaries y highlights deben tener equivalencia.
- `Actualidad` debe mapear a `Present`.
- `Cargo simultáneo...` debe mapear a `Concurrent role...`.

## 15. Criterios de aceptación

### CA-001 — Inserción narrativa

- **Given** que el visitante abre la Home
- **When** recorre las secciones principales
- **Then** Experience aparece después de Core Stack y antes de Projects.

### CA-002 — Anchor funcional

- **Given** que existe navegación principal
- **When** el visitante activa el enlace a Experience
- **Then** la página navega a la sección con id `experience` respetando el offset existente del proyecto.

### CA-003 — Encabezado comprensible

- **Given** que el visitante llega a Experience
- **When** lee el encabezado
- **Then** entiende que la sección trata sobre trayectoria profesional, responsabilidades y experiencia aplicada.

### CA-004 — Professional records visible

- **Given** que el visitante ve la sección en desktop
- **When** observa la composición visual
- **Then** percibe registros profesionales navegables mediante tabs, no una grilla genérica ni un dashboard.

### CA-005 — Caracoders completo

- **Given** que el visitante lee la primera entrada
- **When** revisa su contenido
- **Then** encuentra periodo, organización, cargo, summary y hasta 4 highlights sobre software actual, arquitectura, producción y ownership técnico.

### CA-006 — FVF completo

- **Given** que el visitante lee la segunda entrada
- **When** revisa su contenido
- **Then** encuentra periodo, organización, cargo, summary y hasta 4 highlights sobre liderazgo tecnológico, transformación, infraestructura e integración.

### CA-007 — FIFA independiente

- **Given** que el visitante lee la tercera entrada
- **When** revisa su contenido
- **Then** FIFA aparece como entrada independiente y no como subentrada de FVF.

### CA-008 — Simultaneidad inequívoca

- **Given** que el visitante lee FIFA
- **When** observa la nota de contexto
- **Then** ve explícitamente:
    - ES: `Cargo simultáneo con Gerente de Tecnología — FVF`
    - EN: `Concurrent role with Technology Manager — FVF`.

### CA-009 — Tabs accesibles sin dependencia de hover

- **Given** que el visitante usa mouse, teclado o touch
- **When** accede a Experience
- **Then** puede seleccionar y comprender cada registro mediante tabs accesibles, sin depender de hover ni animaciones.

### CA-010 — Límite de highlights

- **Given** que cada experiencia renderiza highlights
- **When** se inspecciona la UI
- **Then** ninguna experiencia muestra más de 4 highlights.

### CA-011 — No duplicación de Core Stack

- **Given** que el visitante lee Experience
- **When** revisa las experiencias
- **Then** no encuentra listas tipo tech stack repetidas por experiencia.

### CA-012 — No invasión de Projects

- **Given** que el visitante lee Experience
- **When** encuentra menciones a productos o sistemas
- **Then** no se muestran screenshots, repositorios, arquitectura completa, workflows técnicos ni case studies.

### CA-013 — Mobile legible

- **Given** que el visitante usa mobile
- **When** abre Experience
- **Then** la sección conserva sus tres tabs y presenta el panel activo en una sola columna sin overflow horizontal.

### CA-014 — Reduced motion

- **Given** que el usuario tiene `prefers-reduced-motion`
- **When** abre Experience
- **Then** todo el contenido aparece disponible con el mismo significado y sin depender de animaciones.

### CA-015 — HTML semántico

- **Given** que se inspecciona el DOM
- **When** se revisan cargos, organizaciones, periodos y descripciones
- **Then** existen como texto HTML real y no exclusivamente como SVG, canvas, pseudo-elements o imágenes.

### CA-016 — ES/EN completo

- **Given** que el visitante cambia de idioma
- **When** ve Experience en ES o EN
- **Then** todos los cargos, summaries, highlights, labels y nota de simultaneidad aparecen en el idioma seleccionado sin Spanglish.

## 16. Casos borde y manejo de errores

### CB-001 — Fuente editorial ausente

Si `experience_marco_vega.md` no existe o no está accesible, el agente debe detenerse. No debe reconstruir contenido desde memoria ni inventar highlights.

### CB-002 — Más de 4 highlights disponibles

Si la fuente contiene más de 4 highlights por experiencia, el agente debe seleccionar los más representativos para UI sin inventar ni alterar claims.

### CB-003 — Contenido ES/EN incompleto

Si falta traducción para algún campo, el agente debe reportar bloqueo o dejar pendiente explícito. No debe mezclar idiomas.

### CB-004 — Sistema de anchors incompatible

Si el sistema actual de anchors no permite integrar `#experience` sin afectar otras secciones, el agente debe documentar el trade-off y pedir aprobación antes de cambiar navegación global.

### CB-005 — Motion library inexistente

Si el proyecto no tiene estrategia de motion existente, el agente debe implementar una solución CSS ligera o proponer alternativa. No debe instalar una dependencia nueva sin aprobación.

### CB-006 — Breakpoint problemático

Si el tablist visual no funciona en mobile, debe conservar tres tabs en una cuadrícula legible. No debe forzar overflow horizontal.

### CB-007 — Conflicto con estilos globales

Si el diseño requiere cambios globales de tokens, spacing o layout base, el agente debe detenerse y justificar. No debe modificar estilos globales oportunistamente.

### CB-008 — Diferencia entre PRD y sistema actual

Si el repo tiene una arquitectura que contradice el PRD, el agente debe reportar:

```text
Bloqueo por restricción técnica:
- Restricción encontrada:
- Impacto:
- Alternativas:
- Recomendación:
- Decisión requerida:
```

## 17. Testing requerido

### Pruebas funcionales

- Verificar que Experience se renderiza en Home.
- Verificar orden Core Stack → Experience → Projects.
- Verificar que se renderizan las tres experiencias.
- Verificar que FIFA es entrada independiente.
- Verificar que FIFA incluye nota de simultaneidad.

### Pruebas de contenido

- Validar cargos, organizaciones y fechas contra `experience_marco_vega.md`.
- Validar máximo 4 highlights por experiencia.
- Validar ausencia de métricas inventadas.
- Validar ausencia de tech stacks repetidos como inventario.

### Pruebas responsive

- Desktop: tablist y panel editorial legibles.
- Tablet: jerarquía conservada.
- Mobile: tres tabs visibles y panel activo en una columna.
- Verificar que la nota FIFA/FVF permanece visible en mobile.

### Pruebas de accesibilidad

- Verificar headings.
- Verificar navegación por teclado si hay elementos focusables.
- Verificar focus visible.
- Verificar contraste según tokens existentes.
- Verificar contenido sin hover.
- Verificar que la relación FVF/FIFA tiene equivalente textual.
- Verificar `prefers-reduced-motion`.

### Pruebas i18n

- Verificar ES completo.
- Verificar EN completo.
- Verificar que no hay Spanglish.
- Verificar equivalencia de:
    - Actualidad / Present.
    - Cargo simultáneo... / Concurrent role...

### Pruebas de regresión

- Header sigue funcionando.
- Hero no cambia.
- About no cambia.
- Core Stack no cambia.
- Projects no cambia salvo posición posterior.
- Contact no cambia.
- Navegación existente no se rompe.

### Pruebas E2E sugeridas

- Navegar desde header hacia `#experience`.
- Cambiar idioma y validar contenido Experience.
- Simular mobile viewport y validar contenido visible.
- Simular reduced motion y validar ausencia de dependencia animada.

## 18. Definition of Done

La fase se considera terminada cuando:

- Experience está insertada entre Core Stack y Projects.
- `#experience` funciona con la navegación existente.
- La sección muestra las tres experiencias confirmadas.
- FIFA aparece como entrada independiente.
- FIFA muestra nota textual de cargo simultáneo con FVF.
- Cada experiencia muestra periodo, organización, cargo, summary y hasta 4 highlights.
- Los tabs son la única selección de registro; no existe accordion ni contenido dependiente de hover.
- La visualidad responde al concepto Professional Records / System Archive sin dominar la lectura.
- Cargos, fechas y organizaciones son texto HTML real.
- ES y EN tienen paridad completa.
- La sección funciona en desktop, tablet y mobile.
- Reduced motion conserva significado y disponibilidad del contenido.
- No se duplican Core Stack ni Projects.
- No se introducen métricas ni claims no aprobados.
- No se modifican secciones fuera de alcance salvo integración mínima.
- Tests funcionales, responsive, i18n, accesibilidad y regresión pasan.
- Cualquier decisión técnica pendiente queda documentada para SDD.

Esta Definition of Done preserva el principio del brief: Experience debe mostrar trayectoria y responsabilidad; Projects demostrará ingeniería en profundidad.

## 19. Instrucciones para el agente IA

- No modificar Header, Hero, About, Core Stack, Projects ni Contact salvo inserción de Experience, anchor o integración estrictamente necesaria.
- No hacer refactors globales.
- No instalar dependencias nuevas sin aprobación.
- No cambiar arquitectura existente sin autorización explícita.
- No modificar estilos globales, tokens o layout base salvo autorización.
- No asumir contenido editorial faltante.
- No inventar métricas.
- No cambiar cargos, fechas ni organizaciones.
- No ocultar la simultaneidad FIFA/FVF.
- No convertir FVF/FIFA en AI Engineering.
- No convertir Experience en Core Stack.
- No convertir Experience en Projects.
- No usar hover como única vía de acceso a contenido.
- No bloquear contenido mediante animación.
- No crear timeline horizontal.
- No usar WebGL por decoración.
- No hardcodear arbitrariamente si existe sistema centralizado de data/i18n.
- Revisar primero patrones existentes de Home, anchors, localization, motion, spacing y componentes.
- Si encuentra ambigüedad crítica, diferencia con el repo o ausencia de fuente editorial, debe detenerse y reportar bloqueo.

Estas instrucciones siguen los guardrails de no asumir reglas, no tocar módulos fuera de alcance, no instalar dependencias sin aprobación y detenerse ante ambigüedades críticas.

## 20. Riesgos, supuestos y preguntas abiertas

### Riesgos

- **R-001 — Repetición visual:** Experience puede parecer otra terminal si se exagera el recurso Matrix.
- **R-002 — Confusión cronológica:** FIFA/FVF puede parecer inconsistente si la nota textual no es visible.
- **R-003 — Sobrecarga editorial:** Más de 4 highlights puede hacer que la sección parezca CV completo.
- **R-004 — Duplicación con Projects:** Mencionar sistemas puede tentar a desarrollar mini case studies.
- **R-005 — Duplicación con Core Stack:** Incluir tech stacks por experiencia rompería el rol de Experience.
- **R-006 — Mobile deficiente:** Una timeline demasiado gráfica puede perder legibilidad en mobile.
- **R-007 — Dependencia de motion:** La animación puede terminar sustituyendo claridad si no se controla.
- **R-008 — Incompatibilidad con repo:** La arquitectura actual puede requerir ajustes no visibles desde este PRD.

### Supuestos

- Existe o existirá `experience_marco_vega.md` como fuente editorial final.
- El proyecto ya tiene o tendrá sistema ES/EN.
- La Home permite insertar una sección adicional.
- Existe un sistema de anchors o navegación que puede extenderse.
- Hay tokens/patrones visuales reutilizables suficientes para mantener coherencia.
- Motion puede implementarse con herramientas existentes o CSS ligero.

### Preguntas abiertas críticas

No quedan preguntas críticas de producto. Las decisiones principales fueron cerradas por el usuario.

### Preguntas abiertas menores / para SDD

- Nombre final de componentes.
- Ubicación exacta del archivo de datos.
- API interna de i18n.
- Implementación exacta de motion.
- Breakpoints exactos según CSS actual.
- Estrategia concreta de tests según stack del repo.
- Si se reutiliza un SectionHeader existente o se crea variante.
- Si la línea Career Trace será CSS puro, SVG decorativo o estructura mixta.

## 21. Matriz de trazabilidad

| Requisito | Criterio de aceptación | Test esperado                                                   |
| --------- | ---------------------- | --------------------------------------------------------------- |
| RF-001    | CA-001                 | TEST-FUNC-001: validar orden de secciones en Home               |
| RF-002    | CA-002                 | TEST-E2E-001: navegar a `#experience` desde header              |
| RF-003    | CA-003                 | TEST-FUNC-002: validar heading e intro                          |
| RF-004    | CA-004                 | TEST-UI-001: validar tablist horizontal y panel editorial único |
| RF-005    | CA-005                 | TEST-CONTENT-001: validar entrada Caracoders                    |
| RF-006    | CA-006                 | TEST-CONTENT-002: validar entrada FVF                           |
| RF-007    | CA-007                 | TEST-CONTENT-003: validar FIFA como entry independiente         |
| RF-008    | CA-008                 | TEST-CONTENT-004: validar nota textual FIFA/FVF ES/EN           |
| RF-009    | CA-009                 | TEST-A11Y-001: validar tabs con mouse, touch y teclado          |
| RF-010    | CA-010                 | TEST-CONTENT-005: validar máximo 4 highlights                   |
| RF-011    | CA-016                 | TEST-I18N-001: validar ES/EN completo                           |
| RF-012    | CA-004                 | TEST-UI-002: validar uso moderado de `career.records()`         |
| RF-013    | CA-013                 | TEST-RESP-001: validar tres tabs y panel en una columna         |
| RF-014    | CA-014                 | TEST-MOTION-001: validar motion no bloqueante                   |
| RF-015    | CA-014                 | TEST-MOTION-002: validar `prefers-reduced-motion`               |
| RF-016    | CA-015                 | TEST-A11Y-002: validar contenido textual en DOM                 |
| RF-017    | CA-011, CA-012         | TEST-REG-001: validar no duplicación Core Stack/Projects        |

## Decisiones que deben trasladarse al SDD

Estas decisiones no deben resolverse dentro del PRD porque pertenecen a arquitectura/implementación:

- Ubicación exacta de `ExperienceSection`.
- Nombre definitivo de componentes.
- Si `CareerTrace` usa CSS, SVG decorativo o combinación.
- Modelo real de datos según sistema i18n existente.
- Archivo concreto donde se registra `#experience` en navegación.
- Breakpoints exactos según tokens actuales.
- Estrategia de motion según librería o patrón ya usado.
- Estrategia concreta de unit/integration/E2E tests según stack.
- Si se reutiliza un SectionHeader existente.
- Cómo se organiza la capa visual sin afectar estilos globales.
- Cómo se documentan restricciones encontradas al revisar repo.

## Nota posterior al PRD

Siguiente entregable recomendado: **SDD técnico de Experience**, enfocado en estructura de componentes, data/i18n, integración con Home, anchors, responsive CSS, motion/reduced motion y estrategia de testing.
