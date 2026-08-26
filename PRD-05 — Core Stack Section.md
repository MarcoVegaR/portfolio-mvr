# PRD-05 — Core Stack Section

## 1. Metadata

- **Estado:** Draft listo para revisión
- **Versión:** 1.0
- **Fecha:** 2026-08-23
- **Autor / Product Owner:** Marco Vega
- **Proyecto:** Portfolio profesional de Marco Vega
- **Módulo:** Core Stack
- **Prioridad:** Alta
- **Agente objetivo:** Agente IA de implementación frontend
- **Repositorio:** Pendiente de confirmar
- **Rama:** Pendiente de confirmar
- **Fuente base:** Brief de Core Stack / Núcleo tecnológico

---

## 2. Resumen ejecutivo

Se construirá una nueva sección independiente llamada **Core Stack** dentro del portfolio profesional de Marco Vega.

La sección debe aparecer inmediatamente después de **About** y antes de **Experience**, con el objetivo de comunicar de forma rápida, jerárquica y verificable el núcleo tecnológico actual de Marco como **AI Engineer** con base **Full Stack**, mayor profundidad en **backend / Laravel** y capacidades complementarias de delivery, quality y operations.

Core Stack no debe funcionar como una lista exhaustiva de herramientas ni como una nube visual de logos. Su propósito es condensar la identidad técnica actual de Marco en una estructura clara que luego pueda ser respaldada por Experience y Projects.

---

## 3. Problema que resuelve

Actualmente, el portfolio necesita una sección que permita a recruiters, entrevistadores técnicos o visitantes entender rápidamente con qué tecnologías y capacidades Marco Vega construye aplicaciones y sistemas asistidos por IA.

Sin una sección Core Stack independiente, existen riesgos de producto y comunicación:

- About puede volverse demasiado extenso si se mezclan narrativa profesional y catálogo técnico.
- El perfil puede perder claridad para recruiters que escanean rápidamente.
- Las tecnologías pueden aparecer sin jerarquía ni relación con el posicionamiento principal.
- La evidencia técnica puede mezclarse indebidamente con Experience o Projects.
- La identidad profesional puede interpretarse erróneamente como una colección amplia de herramientas en lugar de un núcleo técnico defendible.

La sección Core Stack resuelve este problema separando claramente:

```text
About explica.
Core Stack resume capacidades.
Experience contextualiza.
Projects demuestra.
```

---

## 4. Objetivos

### Objetivo principal

Construir una sección independiente, compacta y escaneable que comunique el núcleo tecnológico actual de Marco Vega como **AI Engineer** con fuerte base de application/backend engineering, especialmente en Laravel.

### Objetivos secundarios

- Reforzar el posicionamiento principal como AI Engineer.
- Mostrar la base Full Stack sin sugerir profundidad idéntica en todas las capas.
- Dar jerarquía moderada a Laravel como ecosistema de mayor especialización.
- Diferenciar tecnologías principales de tecnologías complementarias.
- Evitar listas homogéneas de logos o tecnologías.
- Mantener la sección clara para recruiters técnicos y no técnicos.
- Garantizar versiones completas en español e inglés.
- Mantener compatibilidad visual con light mode, dark mode y responsive.
- Evitar que la información esencial dependa de animaciones, tooltips o interacciones.

### Métricas de éxito

No se definen métricas cuantitativas en esta fase.

Criterio cualitativo principal:

```text
Un recruiter o entrevistador técnico debe poder entender en menos de 10 segundos que Marco Vega trabaja en AI Engineering, tiene profundidad backend/Laravel, posee capacidad Full Stack y utiliza herramientas complementarias para llevar aplicaciones a entornos reales.
```

---

## 5. Usuarios y roles involucrados

### Usuario principal

**Recruiter técnico o recruiter generalista**

Necesita escanear rápidamente el perfil y entender:

- identidad profesional principal;
- tecnologías centrales;
- profundidad relativa;
- coherencia entre posicionamiento y evidencia posterior.

### Usuario secundario

**Entrevistador técnico**

Necesita identificar rápidamente:

- núcleo técnico actual;
- stack principal;
- tecnologías asociadas a proyectos reales;
- áreas donde puede profundizar durante una entrevista.

### Usuario terciario

**Visitante general del portfolio**

Necesita comprender la sección sin depender de conocimiento técnico profundo ni reconocimiento visual de logos.

### Administrador / propietario del contenido

**Marco Vega**

Responsable de validar:

- contenido aprobado;
- tecnologías incluidas;
- tecnologías excluidas;
- copy ES/EN;
- jerarquía editorial;
- relación con About, Experience y Projects.

---

## 6. Alcance funcional

La Fase 5 incluye:

1. Crear una sección independiente llamada **Core Stack**.
2. Ubicar la sección inmediatamente después de About y antes de Experience.
3. Mostrar heading e introducción de la sección.
4. Implementar contenido completo en español e inglés.
5. Organizar el stack en tres grupos:
   - AI Engineering
   - Application Engineering
   - Complementary
6. Mostrar las tecnologías aprobadas para cada grupo.
7. Diferenciar jerárquicamente los grupos principales de las tecnologías complementarias.
8. Dar énfasis moderado a Laravel dentro de Application Engineering.
9. Mantener nombres de tecnologías visibles aunque se usen iconos.
10. Garantizar que la sección sea comprensible sin hover, tooltips ni animaciones.
11. Garantizar correcto comportamiento responsive en mobile, tablet, desktop y large desktop.
12. Garantizar compatibilidad con light mode y dark mode.
13. Respetar `prefers-reduced-motion` si se implementa motion.
14. Evitar horizontal overflow, nombres cortados o chips ilegibles.
15. Mantener Core Stack compacto para que no compita narrativamente con Projects.
16. Bloquear porcentajes, estrellas, niveles arbitrarios o claims no defendibles.
17. Excluir tecnologías y conceptos deliberadamente fuera del Core.
18. Mantener separación clara entre Core Stack, About, Experience y Projects.

---

## 7. Fuera de alcance

Esta fase no debe implementar ni redefinir:

- About.
- Experience.
- Projects.
- Project Case Studies.
- Contact.
- Header navigation.
- Footer.
- CV.
- Certificados.
- Repositorios.
- Demos.
- Datos detallados de proyectos.
- Timeline profesional.
- Metodología completa de trabajo.
- Filtros por tecnología.
- Skill ratings.
- Barras de progreso.
- Porcentajes de habilidad.
- Niveles tipo Beginner / Intermediate / Advanced / Expert.
- Sección de evidencias por cada tecnología.
- Case studies dentro de Core Stack.
- Nuevos sistemas de navegación.
- Arquitectura técnica final de componentes.
- Elección definitiva de librería de iconos.
- Breakpoints exactos.
- Tokens exactos de spacing.
- Estructura final de archivos.
- Animaciones complejas.
- Interacciones 3D.
- Carruseles automáticos.
- Marquees.
- Órbitas de logos.
- Partículas o efectos decorativos que distraigan del contenido.

---

## 8. Contexto del sistema actual

El portfolio profesional de Marco Vega ya cuenta conceptualmente con una secuencia narrativa donde cada sección cumple una función diferenciada:

```text
Header
Hero
About
Core Stack
Experience
Projects
Contact
Footer
```

Core Stack debe integrarse en esta secuencia sin alterar el propósito de las demás secciones.

### Relación con About

About explica quién es Marco profesionalmente, cómo piensa y cómo aborda la construcción de software.

Core Stack no debe repetir contenido metodológico de About, como:

- Event Storming;
- PRDs;
- Spec-Driven Development;
- arquitectura;
- orquestación conceptual de agentes;
- proceso de validación;
- forma de trabajo.

### Relación con Experience

Experience contextualiza en qué entornos profesionales Marco ha ejercido sus capacidades.

Core Stack no debe intentar explicar dónde se usó cada tecnología en detalle.

### Relación con Projects

Projects demuestra con software concreto que las capacidades son reales.

Core Stack puede hacer el claim tecnológico, pero Projects debe permitir comprobarlo posteriormente.

### Navegación

Core Stack no necesita enlace propio en la navegación principal por defecto.

Agregar `Stack` al Header solo estaría justificado si en diseño se demuestra que representa un destino primario para el usuario. Esa decisión no forma parte del alcance mínimo de esta fase.

---

## 9. Playbooks aplicados al PRD

### Product Discovery / PRD Base

Activo.

Justificación: la sección afecta posicionamiento profesional, narrativa del portfolio, alcance, fuera de alcance y relación con otros módulos.

### Frontend / UX

Activo.

Justificación: Core Stack es una sección visual con requerimientos de jerarquía, responsive, accesibilidad, motion, legibilidad y escaneo rápido.

### Backend / API / Reglas

No activo.

Justificación: no hay endpoints, CRUD, servicios backend ni contratos API involucrados en esta fase.

### Data / Modelo conceptual

Activo en modo ligero.

Justificación: existe un modelo conceptual de contenido organizado por grupos y tecnologías. El PRD debe definir la estructura funcional, no la implementación final.

### Seguridad / Roles / Trazabilidad

No activo.

Justificación: no hay autenticación, permisos, datos sensibles ni acciones críticas.

### QA / Acceptance

Activo.

Justificación: la funcionalidad requiere criterios verificables, anti-criterios, pruebas responsive, accesibilidad y validación de contenido.

### DevOps / Integraciones / Operación

No activo.

Justificación: aunque se mencionan tecnologías como Docker, GitHub Actions, Laravel Cloud o Nightwatch, en esta fase solo se muestran como contenido del stack. No se implementan integraciones operativas.

---

## 10. Requisitos funcionales

### RF-001 — Renderizar Core Stack como sección independiente

Como visitante del portfolio, quiero ver Core Stack como una sección independiente para distinguir el núcleo tecnológico de Marco de su narrativa personal en About.

### RF-002 — Ubicar Core Stack en la secuencia correcta

Como visitante del portfolio, quiero encontrar Core Stack después de About y antes de Experience para seguir una lectura lógica desde identidad profesional hacia capacidades y evidencia.

### RF-003 — Mostrar heading e introducción en español

Como visitante de la versión en español, quiero ver el heading y la descripción de Core Stack en español para comprender el propósito de la sección sin mezcla de idiomas.

Copy base aprobado:

```text
Core Stack

Tecnologías principales con las que construyo e integro aplicaciones y sistemas con IA.
```

### RF-004 — Mostrar heading e introducción en inglés

Como visitante de la versión en inglés, quiero ver el heading y la descripción de Core Stack en inglés para comprender el propósito de la sección sin mezcla de idiomas.

Copy base aprobado:

```text
Core Stack

Core technologies I use to build and integrate applications and AI-enabled systems.
```

### RF-005 — Mostrar grupo AI Engineering

Como recruiter o entrevistador técnico, quiero ver un grupo AI Engineering para identificar rápidamente el eje principal del posicionamiento actual de Marco.

Tecnologías aprobadas:

```text
Laravel AI SDK
MCP
OpenClaw
```

### RF-006 — Mostrar grupo Application Engineering

Como recruiter o entrevistador técnico, quiero ver un grupo Application Engineering para entender la base técnica acumulada de Marco en aplicaciones web y backend.

Tecnologías aprobadas:

```text
Laravel
PHP
PostgreSQL
React
TypeScript
```

### RF-007 — Mostrar grupo Complementary

Como entrevistador técnico, quiero ver tecnologías complementarias subordinadas al Core para entender capacidades de runtime, delivery, testing, automatización, observabilidad y operación.

Tecnologías aprobadas:

```text
Inertia.js
Redis
Docker
GitHub Actions / CI/CD
Laravel Cloud
Pest
Playwright
Laravel Nightwatch
```

### RF-008 — Diferenciar jerárquicamente Core y Complementary

Como visitante del portfolio, quiero percibir que AI Engineering y Application Engineering tienen mayor relevancia que Complementary para entender correctamente el núcleo profesional de Marco.

### RF-009 — Dar énfasis moderado a Laravel

Como entrevistador técnico, quiero identificar que Laravel es el ecosistema de mayor profundidad de Marco sin interpretar que todo el posicionamiento profesional se reduce a Laravel.

### RF-010 — Mostrar nombres visibles de tecnologías

Como recruiter generalista o visitante no especialista, quiero ver los nombres de las tecnologías en texto para no depender del reconocimiento visual de logos.

### RF-011 — Evitar tecnologías excluidas

Como Product Owner, quiero que la sección solo incluya tecnologías aprobadas para evitar claims inflados o ruido visual.

### RF-012 — Evitar porcentajes, estrellas y niveles arbitrarios

Como visitante del portfolio, quiero ver una jerarquía defendible sin porcentajes, barras, estrellas o niveles subjetivos para evitar interpretaciones falsas de dominio técnico.

### RF-013 — Mantener comprensión sin interacción

Como visitante mobile o desktop, quiero comprender la sección sin depender de hover, tooltips, reveal obligatorio o animaciones.

### RF-014 — Soportar responsive completo

Como visitante desde cualquier dispositivo, quiero que Core Stack mantenga legibilidad y jerarquía en mobile, tablet, desktop y large desktop.

### RF-015 — Soportar light mode y dark mode

Como visitante del portfolio, quiero que Core Stack sea legible y visualmente consistente tanto en light mode como en dark mode.

### RF-016 — Respetar reduced motion

Como usuario con preferencia de movimiento reducido, quiero que cualquier animación no esencial sea reducida o eliminada mediante `prefers-reduced-motion`.

### RF-017 — Mantener Core Stack compacto

Como visitante del portfolio, quiero que Core Stack sea escaneable y no compita narrativamente con Projects.

### RF-018 — Mantener contenido estructurado

Como mantenedor del portfolio, quiero que el contenido de Core Stack esté organizado conceptualmente por grupos para facilitar mantenimiento, traducción y validación futura.

---

## 11. Reglas de negocio

### RN-001 — Independencia de About

Core Stack debe renderizarse como sección independiente y no dentro del contenedor visual de About.

### RN-002 — Posición obligatoria

Core Stack debe aparecer inmediatamente después de About y antes de Experience.

### RN-003 — No navegación principal por defecto

Core Stack no debe añadirse al Header por defecto. Solo podrá añadirse si una decisión posterior de diseño/producto lo justifica explícitamente.

### RN-004 — Jerarquía principal

AI Engineering y Application Engineering deben tener mayor jerarquía visual que Complementary.

### RN-005 — Jerarquía de Laravel

Laravel puede recibir énfasis moderado dentro de Application Engineering, pero la sección no debe comunicar que Marco es principalmente “Laravel Developer que también usa IA”.

### RN-006 — Posicionamiento principal

La lectura buscada de la sección debe ser:

```text
AI Engineer con fuerte base de application/backend engineering,
especialmente en Laravel.
```

### RN-007 — Tecnologías aprobadas

Solo pueden mostrarse las tecnologías aprobadas para cada grupo.

### RN-008 — Tecnologías no aprobadas

No se pueden añadir tecnologías solo para llenar espacio visual o aumentar cantidad percibida.

### RN-009 — Conceptos que no son tecnologías

No se deben mostrar como chips tecnológicos:

```text
AI Agents
Agent Orchestration
Tool Calling
Guardrails
Spec-Driven Development
Event Storming
PRD
```

### RN-010 — Herramientas excluidas del Core

No deben mostrarse como tecnologías Core:

```text
OpenCode
TestSprite
ChatGPT
AWS / EC2
Tailwind CSS
shadcn/ui
VS Code
IntelliJ
otros IDEs o editores
```

### RN-011 — Sin porcentajes

Está prohibido mostrar tecnologías con porcentajes de dominio.

Ejemplo prohibido:

```text
Laravel 95%
React 80%
PostgreSQL 90%
```

### RN-012 — Sin niveles arbitrarios

Está prohibido mostrar tecnologías con niveles como:

```text
Beginner
Intermediate
Advanced
Expert
```

### RN-013 — Sin logos sin texto

Si se utilizan iconos o logos, el nombre de cada tecnología debe permanecer visible en texto.

### RN-014 — Sin tooltips obligatorios

La comprensión de la sección no puede depender de tooltips.

### RN-015 — Sin interacción obligatoria

La información esencial no puede depender de hover, focus, animaciones o interacción.

### RN-016 — Sin duplicar About

Core Stack no debe explicar nuevamente la metodología profesional de Marco.

### RN-017 — Sin duplicar Projects

Core Stack no debe incluir historias detalladas de proyectos ni case studies.

### RN-018 — Claim respaldable

Cada tecnología principal debe poder rastrearse posteriormente a evidencia en Experience o Projects.

### RN-019 — Internacionalización

La sección debe existir en español e inglés sin Spanglish dentro de una misma versión.

### RN-020 — Nombres oficiales no traducibles

Los nombres oficiales de tecnologías no deben traducirse.

Ejemplos:

```text
Laravel
PostgreSQL
React
TypeScript
```

---

## 12. Requisitos no funcionales

### Accesibilidad

- La sección debe tener heading semántico correcto.
- La estructura debe ser comprensible sin CSS.
- Los nombres de tecnologías deben estar disponibles como texto.
- Debe existir contraste suficiente en light mode y dark mode.
- Ninguna información debe transmitirse exclusivamente mediante color.
- Si existen elementos interactivos, deben tener focus visible.
- Si existen elementos interactivos, deben tener targets adecuados en mobile.
- Si los elementos tecnológicos no son enlaces ni botones, no deben simular comportamiento interactivo.
- Los tooltips no pueden ser necesarios para entender la sección.

### Usabilidad

- La sección debe ser escaneable.
- La lectura debe ser clara en menos de 10 segundos.
- La jerarquía entre grupos debe ser evidente.
- Complementary debe verse subordinado al Core.
- La sección no debe competir en peso narrativo con Projects.

### Responsive

La sección debe funcionar correctamente en:

```text
mobile
tablet
desktop
large desktop
```

Debe evitar:

- horizontal scroll;
- nombres cortados;
- chips demasiado estrechos;
- iconos separados de sus labels;
- grupos mezclados por reflow;
- tipografía ilegible;
- pérdida de jerarquía entre Core y Complementary.

### Motion

Permitido:

- hover/focus discreto;
- reveal de entrada corto;
- microinteracción visual coherente con el sistema general;
- adaptación a light/dark mode;
- soporte de `prefers-reduced-motion`.

No recomendado:

- logos flotantes permanentemente;
- órbitas;
- carruseles automáticos;
- marquee de tecnologías;
- partículas siguiendo el cursor;
- cards 3D por tecnología;
- drag interactions;
- skill constellation interactiva.

### Mantenibilidad

- El contenido debe estar estructurado conceptualmente por grupos.
- La implementación debe permitir mantener versiones ES/EN sin duplicación innecesaria.
- El contenido debe ser fácil de auditar contra la lista de tecnologías aprobadas.
- No se deben introducir dependencias nuevas sin aprobación explícita.

### Compatibilidad visual

- La sección debe integrarse con el sistema visual existente del portfolio.
- No debe requerir cambios globales de layout, estilos o design system sin autorización.
- Debe funcionar en light mode y dark mode.

---

## 13. Interfaz esperada, flujo esperado o API esperada

### Tipo de funcionalidad

Frontend / sección visual de portfolio.

No hay API esperada en esta fase.

### Estructura funcional esperada

La sección debe contener, como mínimo:

```text
CoreStackSection
├── Heading
├── Intro
├── StackGroup: AI Engineering
├── StackGroup: Application Engineering
└── StackGroup: Complementary
```

### Componentes conceptuales

Los siguientes nombres son conceptuales. El SDD decidirá nombres, archivos y estructura final.

#### CoreStackSection

Responsabilidad funcional:

- representar la sección semántica completa;
- mostrar heading;
- mostrar intro;
- componer los grupos de stack;
- preservar ubicación correcta en la página.

#### StackGroup

Responsabilidad funcional:

- representar una categoría;
- mostrar título del grupo;
- mostrar conjunto de tecnologías;
- soportar jerarquía principal o complementaria.

Grupos esperados:

```text
AI Engineering
Application Engineering
Complementary
```

#### TechnologyItem

Responsabilidad funcional:

- mostrar nombre de tecnología;
- mostrar icono opcional si el diseño lo decide;
- soportar variante jerárquica si se requiere;
- no mostrar porcentajes;
- no mostrar niveles;
- no depender de tooltip para comprensión.

#### StackData / modelo de contenido

Responsabilidad conceptual:

- mantener contenido estructurado;
- separar datos de presentación cuando la arquitectura actual lo permita;
- facilitar i18n;
- facilitar validación contra tecnologías aprobadas.

Modelo conceptual:

```text
stack
├── ai-engineering[]
├── application-engineering[]
└── complementary[]
```

### Flujo esperado del usuario

1. El usuario llega al portfolio.
2. Lee Hero y About.
3. Encuentra Core Stack inmediatamente después de About.
4. Escanea el heading y la intro.
5. Identifica primero AI Engineering y Application Engineering.
6. Percibe Complementary como soporte secundario.
7. Continúa hacia Experience y Projects para encontrar contexto y evidencia.

---

## 14. Datos y modelo conceptual

### Entidad conceptual: StackSection

Campos conceptuales:

- `id`
- `heading`
- `intro`
- `groups`

### Entidad conceptual: StackGroup

Campos conceptuales:

- `id`
- `title`
- `priority`
- `technologies`

Valores posibles de `priority`:

```text
primary
secondary
```

Uso esperado:

- AI Engineering: `primary`
- Application Engineering: `primary`
- Complementary: `secondary`

### Entidad conceptual: TechnologyItem

Campos conceptuales:

- `id`
- `name`
- `group`
- `isHighlighted`
- `icon`
- `evidenceReference`

Notas:

- `icon` es opcional.
- `isHighlighted` solo aplica si se necesita énfasis moderado, principalmente para Laravel.
- `evidenceReference` puede existir como referencia interna editorial, pero no necesita mostrarse en UI.
- El SDD decidirá si estos campos existen físicamente o solo como estructura conceptual.

### Contenido aprobado

#### AI Engineering

| Tecnología | Estado |
|---|---|
| Laravel AI SDK | Aprobada |
| MCP | Aprobada |
| OpenClaw | Aprobada |

#### Application Engineering

| Tecnología | Estado |
|---|---|
| Laravel | Aprobada |
| PHP | Aprobada |
| PostgreSQL | Aprobada |
| React | Aprobada |
| TypeScript | Aprobada |

#### Complementary

| Tecnología | Estado |
|---|---|
| Inertia.js | Aprobada |
| Redis | Aprobada |
| Docker | Aprobada |
| GitHub Actions / CI/CD | Aprobada |
| Laravel Cloud | Aprobada |
| Pest | Aprobada |
| Playwright | Aprobada |
| Laravel Nightwatch | Aprobada |

### Tecnologías y conceptos excluidos

| Elemento | Motivo |
|---|---|
| OpenCode | Workflow asistido, no especialización profesional Core |
| TestSprite | Herramienta demasiado específica para competir con tecnologías nucleares |
| ChatGPT | Herramienta de apoyo, no tecnología diferenciadora del perfil |
| Event Storming | Práctica metodológica, no stack tecnológico |
| PRD / Spec-Driven Development | Método de ingeniería, no tecnología de stack |
| AWS / EC2 | Evidencia en proyectos, no centro actual del posicionamiento |
| Tailwind CSS / shadcn/ui | Pueden aparecer en proyectos, no necesarias para explicar el núcleo profesional |
| IDEs / editores | No deben presentarse como habilidades principales |
| AI Agents / Agent Orchestration | Capacidades o conceptos, no tecnologías equivalentes a Laravel o PostgreSQL |
| Tool Calling / Guardrails | Conceptos o prácticas, no chips tecnológicos Core |

---

## 15. Criterios de aceptación

### CA-001 — Sección independiente vinculada a RF-001

Given que el usuario visualiza el portfolio  
When llega al bloque Core Stack  
Then Core Stack debe renderizarse como una sección independiente y no dentro de About.

### CA-002 — Posición correcta vinculada a RF-002

Given que el usuario recorre la página de arriba hacia abajo  
When termina About  
Then debe aparecer Core Stack antes de Experience.

### CA-003 — Copy en español vinculado a RF-003

Given que el usuario visualiza la versión en español  
When llega a Core Stack  
Then debe ver el copy aprobado en español sin mezcla de idiomas.

### CA-004 — Copy en inglés vinculado a RF-004

Given que el usuario visualiza la versión en inglés  
When llega a Core Stack  
Then debe ver el copy aprobado en inglés sin mezcla de idiomas.

### CA-005 — Grupo AI Engineering vinculado a RF-005

Given que el usuario visualiza Core Stack  
When revisa el grupo AI Engineering  
Then debe ver únicamente Laravel AI SDK, MCP y OpenClaw como tecnologías de ese grupo.

### CA-006 — Grupo Application Engineering vinculado a RF-006

Given que el usuario visualiza Core Stack  
When revisa el grupo Application Engineering  
Then debe ver Laravel, PHP, PostgreSQL, React y TypeScript.

### CA-007 — Grupo Complementary vinculado a RF-007

Given que el usuario visualiza Core Stack  
When revisa el grupo Complementary  
Then debe ver Inertia.js, Redis, Docker, GitHub Actions / CI/CD, Laravel Cloud, Pest, Playwright y Laravel Nightwatch.

### CA-008 — Jerarquía Core vs Complementary vinculada a RF-008

Given que el usuario escanea la sección  
When compara los grupos  
Then AI Engineering y Application Engineering deben percibirse como grupos principales y Complementary como grupo subordinado.

### CA-009 — Énfasis moderado de Laravel vinculado a RF-009

Given que el usuario revisa Application Engineering  
When observa Laravel  
Then Laravel puede tener mayor énfasis visual que las demás tecnologías del grupo, pero sin dominar toda la sección ni desplazar AI Engineering.

### CA-010 — Nombres visibles vinculados a RF-010

Given que la sección usa iconos o logos  
When el usuario visualiza cada tecnología  
Then el nombre textual de la tecnología debe estar visible.

### CA-011 — Exclusiones vinculadas a RF-011

Given que el usuario revisa Core Stack  
When compara el contenido contra la lista aprobada  
Then no debe encontrar tecnologías o conceptos excluidos.

### CA-012 — Sin ratings vinculados a RF-012

Given que el usuario revisa las tecnologías  
When observa cada item  
Then no debe encontrar porcentajes, estrellas, barras de progreso ni niveles arbitrarios.

### CA-013 — Comprensión sin interacción vinculada a RF-013

Given que el usuario visualiza la sección sin interactuar  
When lee el contenido visible  
Then debe poder comprender la jerarquía y las tecnologías principales sin hover, tooltip o animación.

### CA-014 — Responsive mobile vinculado a RF-014

Given que el usuario abre el portfolio en mobile  
When visualiza Core Stack  
Then no debe existir horizontal overflow, texto cortado ni pérdida de jerarquía entre grupos.

### CA-015 — Responsive tablet vinculado a RF-014

Given que el usuario abre el portfolio en tablet  
When visualiza Core Stack  
Then los grupos deben mantenerse legibles, separados y jerarquizados.

### CA-016 — Responsive desktop vinculado a RF-014

Given que el usuario abre el portfolio en desktop  
When visualiza Core Stack  
Then la sección debe ser compacta, escaneable y no ocupar más protagonismo narrativo que Projects.

### CA-017 — Light y dark mode vinculados a RF-015

Given que el usuario alterna entre light mode y dark mode  
When visualiza Core Stack  
Then la sección debe mantener contraste, legibilidad y coherencia visual.

### CA-018 — Reduced motion vinculado a RF-016

Given que el usuario tiene activado `prefers-reduced-motion`  
When visualiza Core Stack  
Then cualquier motion no esencial debe reducirse o eliminarse.

### CA-019 — Compactación vinculada a RF-017

Given que el usuario recorre el portfolio  
When pasa por Core Stack  
Then la sección debe funcionar como bloque sintético y no como una sección extensa que compita con Projects.

### CA-020 — Contenido estructurado vinculado a RF-018

Given que el equipo mantiene el contenido  
When necesita revisar o actualizar tecnologías  
Then debe poder identificar claramente qué tecnología pertenece a cada grupo conceptual.

### CA-021 — Anti-criterio: nube homogénea de logos

Given que la sección fue implementada  
When se eliminan estilos decorativos o iconos  
Then todavía debe ser posible distinguir AI Engineering, Application Engineering y Complementary.

### CA-022 — Anti-criterio: sobreventa de AI

Given que se revisa el contenido final  
When aparecen herramientas o conceptos de IA no aprobados  
Then la implementación debe considerarse incorrecta.

### CA-023 — Anti-criterio: duplicación de About

Given que se revisa el texto de Core Stack  
When el contenido explica metodología de trabajo, PRDs, Event Storming o SDD  
Then la implementación debe considerarse incorrecta.

### CA-024 — Anti-criterio: duplicación de Projects

Given que se revisa Core Stack  
When aparecen historias detalladas de proyectos o case studies por tecnología  
Then la implementación debe considerarse incorrecta.

---

## 16. Casos borde y manejo de errores

### CB-001 — Falta una tecnología aprobada

Si una tecnología aprobada no aparece en su grupo correspondiente, la implementación no cumple el PRD.

### CB-002 — Aparece una tecnología excluida

Si aparece una tecnología o concepto excluido, la implementación no cumple el PRD.

### CB-003 — Logos sin labels

Si los iconos se muestran sin nombres visibles, la implementación no cumple el PRD.

### CB-004 — Tooltip obligatorio

Si el usuario necesita un tooltip para entender qué tecnología se muestra o por qué importa, la implementación no cumple el PRD.

### CB-005 — Hover obligatorio

Si el contenido esencial solo aparece en hover, la implementación no cumple el PRD.

### CB-006 — Motion obligatorio

Si la sección solo se comprende mediante animación o reveal, la implementación no cumple el PRD.

### CB-007 — Mobile overflow

Si en mobile aparece horizontal scroll, nombres cortados o chips ilegibles, la implementación no cumple el PRD.

### CB-008 — Complementary parece igual de importante que Core

Si Complementary tiene el mismo peso visual que AI Engineering y Application Engineering, la implementación no cumple el PRD.

### CB-009 — Laravel domina toda la sección

Si Laravel desplaza visualmente el posicionamiento AI Engineering, la implementación no cumple el PRD.

### CB-010 — La sección compite con Projects

Si Core Stack se vuelve demasiado extensa o narrativa, la implementación no cumple el PRD.

### CB-011 — Spanglish

Si la versión ES o EN mezcla idiomas en headings, intros o labels traducibles, la implementación no cumple el PRD.

### CB-012 — Traducción incorrecta de tecnologías

Si se traducen nombres oficiales de tecnologías, la implementación no cumple el PRD.

### CB-013 — Falta de contraste

Si la sección pierde legibilidad en light mode o dark mode, la implementación no cumple el PRD.

### CB-014 — Dependencia nueva no aprobada

Si el agente instala una librería nueva de iconos, animación o UI sin aprobación explícita, debe detenerse y reportar bloqueo.

---

## 17. Testing requerido

### Pruebas funcionales

- Verificar que Core Stack renderiza como sección independiente.
- Verificar que aparece después de About y antes de Experience.
- Verificar que los tres grupos aparecen.
- Verificar que cada grupo contiene exactamente las tecnologías aprobadas.
- Verificar que no aparecen tecnologías excluidas.
- Verificar que no existen porcentajes, estrellas, barras ni niveles.
- Verificar que Laravel recibe como máximo énfasis moderado.

### Pruebas de contenido / i18n

- Verificar copy en español.
- Verificar copy en inglés.
- Verificar que no hay Spanglish.
- Verificar que los nombres oficiales de tecnologías no se traducen.
- Verificar que headings, intros y labels traducibles existen en ambos idiomas.

### Pruebas de accesibilidad

- Verificar heading semántico correcto.
- Verificar que la sección es comprensible sin CSS.
- Verificar contraste en light mode.
- Verificar contraste en dark mode.
- Verificar que no hay información transmitida solo por color.
- Verificar focus visible si hay elementos interactivos.
- Verificar que los elementos no interactivos no simulan botones o enlaces.
- Verificar que los nombres de tecnologías están disponibles como texto visible.

### Pruebas responsive

- Verificar mobile.
- Verificar tablet.
- Verificar desktop.
- Verificar large desktop.
- Verificar ausencia de horizontal overflow.
- Verificar que no hay nombres cortados.
- Verificar que los grupos no se mezclan por reflow.
- Verificar que Complementary sigue subordinado al Core.

### Pruebas de motion

- Verificar comportamiento normal si existe animación.
- Verificar comportamiento con `prefers-reduced-motion`.
- Verificar que ninguna información esencial depende de animación.

### Pruebas de regresión

- Verificar que About no fue modificado indebidamente.
- Verificar que Experience no fue modificado indebidamente.
- Verificar que Projects no fue modificado indebidamente.
- Verificar que Header no incorporó `Stack` sin aprobación.
- Verificar que estilos globales o layout base no fueron alterados sin autorización.

---

## 18. Definition of Done

La funcionalidad se considera terminada cuando:

- Core Stack existe como sección independiente.
- Core Stack aparece después de About y antes de Experience.
- El contenido está completo en ES y EN.
- Los tres grupos están presentes.
- Todas las tecnologías aprobadas están presentes en el grupo correcto.
- No aparece ninguna tecnología excluida.
- No hay porcentajes, estrellas, barras ni niveles arbitrarios.
- AI Engineering y Application Engineering tienen mayor jerarquía que Complementary.
- Laravel tiene énfasis moderado sin dominar el posicionamiento.
- Los nombres de tecnologías son visibles en texto.
- La sección es comprensible sin hover, tooltips ni motion.
- La sección funciona en mobile, tablet, desktop y large desktop.
- No hay horizontal overflow.
- Light mode y dark mode mantienen contraste y legibilidad.
- `prefers-reduced-motion` se respeta si existe animación.
- Core Stack no duplica About.
- Core Stack no duplica Projects.
- Core Stack no compite narrativamente con Projects.
- Header no fue modificado para añadir `Stack` salvo aprobación explícita.
- No se instalaron dependencias nuevas sin aprobación.
- No se modificaron estilos globales sin autorización.
- Los criterios de aceptación fueron validados.
- Los anti-criterios fueron revisados.
- El código queda listo para revisión y posterior SDD si aplica.

---

## 19. Instrucciones para el agente IA

El agente IA debe implementar únicamente lo definido en este PRD.

### Restricciones generales

- No asumir requisitos no documentados.
- No implementar mejoras futuras no aprobadas.
- No modificar módulos fuera de alcance.
- No cambiar arquitectura existente sin autorización explícita.
- No instalar dependencias nuevas sin aprobación.
- No cambiar estilos globales, layout base o design system sin autorización.
- No alterar navegación principal sin confirmación.
- No modificar About, Experience, Projects, Contact, Header o Footer salvo integración mínima necesaria para ubicar la sección.
- No introducir breaking changes.

### Restricciones específicas de Core Stack

- No renderizar Core Stack dentro de About.
- No agregar `Stack` al Header por defecto.
- No añadir tecnologías fuera de la lista aprobada.
- No añadir tecnologías para llenar espacio.
- No mostrar OpenCode, TestSprite, ChatGPT, AWS/EC2, Tailwind CSS, shadcn/ui, IDEs ni editores como Core Stack.
- No mostrar AI Agents, Agent Orchestration, Tool Calling, Guardrails, Event Storming, PRD o Spec-Driven Development como chips tecnológicos.
- No usar porcentajes, barras, estrellas ni niveles.
- No ocultar nombres de tecnologías detrás de logos.
- No depender de tooltips para explicar la sección.
- No depender de hover para mostrar información esencial.
- No depender de animaciones para comprensión.
- No crear carruseles automáticos, órbitas, marquees, partículas, cards 3D o interacciones complejas.
- No convertir Core Stack en una nube homogénea de logos.
- No escribir case studies dentro de Core Stack.
- No duplicar contenido metodológico de About.
- No convertir Laravel en el mensaje principal de toda la sección.

### Señales para detenerse y preguntar

El agente debe detenerse y reportar bloqueo si encuentra:

- El repositorio actual no permite ubicar la sección después de About sin modificar otros módulos.
- El sistema de i18n no está claro.
- La estructura visual existente contradice la jerarquía requerida.
- Se requiere una dependencia nueva para iconos, animación o layout.
- Hay conflicto entre el PRD y el diseño actual.
- No existe una forma clara de respetar light/dark mode sin tocar estilos globales.
- No existe una forma clara de evitar overflow en mobile.
- Algún stakeholder solicita agregar tecnologías no aprobadas.
- Se requiere cambiar Header navigation.

Formato recomendado para reportar bloqueo:

```text
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

#### R-001 — Nube homogénea de logos

La implementación podría terminar como una grilla uniforme de logos, destruyendo la jerarquía profesional.

Mitigación: exigir grupos visibles, labels textuales y diferenciación entre Core y Complementary.

#### R-002 — Sobreventa de AI

La implementación podría agregar conceptos o herramientas de IA no aprobadas para parecer más moderna.

Mitigación: bloquear tecnologías no aprobadas y mantener el contenido cerrado.

#### R-003 — Laravel domina el posicionamiento

La implementación podría destacar demasiado Laravel y comunicar “Laravel Developer” por encima de “AI Engineer”.

Mitigación: permitir énfasis moderado solo dentro de Application Engineering.

#### R-004 — Duplicación de About

La sección podría repetir metodología, proceso o narrativa profesional.

Mitigación: limitar Core Stack a tecnologías y jerarquía de capacidades.

#### R-005 — Duplicación de Projects

La sección podría incluir evidencia detallada o mini case studies.

Mitigación: dejar evidencia detallada para Projects.

#### R-006 — Sobre-diseño visual

La sección podría volverse demasiado llamativa, extensa o interactiva.

Mitigación: mantenerla compacta, escaneable y subordinada al flujo general del portfolio.

#### R-007 — Accesibilidad deficiente

Uso de logos, bajo contraste o interacción obligatoria podría reducir comprensión.

Mitigación: nombres visibles, contraste suficiente, semántica correcta y no dependencia de tooltips.

#### R-008 — Mezcla PRD / SDD

El PRD podría cerrar decisiones de implementación prematuras.

Mitigación: reservar columnas, breakpoints exactos, librerías, archivos y animaciones específicas para el SDD.

### Supuestos

- El portfolio ya cuenta o contará con soporte para español e inglés.
- El portfolio ya cuenta o contará con light mode y dark mode.
- El diseño actual permite insertar una sección entre About y Experience.
- Experience y Projects podrán respaldar posteriormente las tecnologías principales.
- El equipo o agente IA podrá reutilizar patrones visuales existentes sin modificar el design system global.
- La decisión de no añadir Core Stack al Header por defecto se mantiene vigente.

### Preguntas abiertas críticas

No hay preguntas abiertas críticas que bloqueen la implementación del PRD.

### Preguntas abiertas menores

Estas preguntas quedan reservadas para diseño o SDD:

1. ¿Se usarán iconos o tratamiento principalmente tipográfico?
2. ¿La composición final será grid editorial, filas, clusters o cards ligeras?
3. ¿Cómo se expresará exactamente el énfasis moderado de Laravel?
4. ¿Existirá transición de entrada?
5. ¿Qué componentes existentes del portfolio se reutilizarán?
6. ¿Cómo se integrará el contenido con el sistema i18n actual?
7. ¿Core Stack tendrá `id` navegable aunque no aparezca en el Header?
8. ¿Las tecnologías serán elementos puramente visuales o enlaces internos/futuros hacia Projects?

---

## 21. Matriz de trazabilidad

| Requisito | Criterio de aceptación | Test esperado |
|---|---|---|
| RF-001 | CA-001 | TEST-001: Verificar sección independiente fuera de About |
| RF-002 | CA-002 | TEST-002: Verificar orden About → Core Stack → Experience |
| RF-003 | CA-003 | TEST-003: Validar copy español |
| RF-004 | CA-004 | TEST-004: Validar copy inglés |
| RF-005 | CA-005 | TEST-005: Validar tecnologías de AI Engineering |
| RF-006 | CA-006 | TEST-006: Validar tecnologías de Application Engineering |
| RF-007 | CA-007 | TEST-007: Validar tecnologías de Complementary |
| RF-008 | CA-008 | TEST-008: Validar jerarquía Core vs Complementary |
| RF-009 | CA-009 | TEST-009: Validar énfasis moderado de Laravel |
| RF-010 | CA-010 | TEST-010: Validar nombres visibles junto a iconos |
| RF-011 | CA-011 | TEST-011: Validar ausencia de tecnologías excluidas |
| RF-012 | CA-012 | TEST-012: Validar ausencia de porcentajes, estrellas y niveles |
| RF-013 | CA-013 | TEST-013: Validar comprensión sin hover, tooltip ni motion |
| RF-014 | CA-014, CA-015, CA-016 | TEST-014: Validar responsive mobile/tablet/desktop |
| RF-015 | CA-017 | TEST-015: Validar light mode y dark mode |
| RF-016 | CA-018 | TEST-016: Validar prefers-reduced-motion |
| RF-017 | CA-019 | TEST-017: Validar compactación y no competencia con Projects |
| RF-018 | CA-020 | TEST-018: Validar estructura conceptual del contenido |
| RF-001 / RF-008 / RF-010 | CA-021 | TEST-019: Validar que sin iconos todavía existe jerarquía |
| RF-011 | CA-022 | TEST-020: Validar anti-criterio de sobreventa AI |
| RF-017 | CA-023 | TEST-021: Validar que no duplica About |
| RF-017 | CA-024 | TEST-022: Validar que no duplica Projects |

---

## Nota posterior al PRD

El siguiente entregable recomendado es un **SDD técnico** para definir:

- estructura real de componentes;
- ubicación de archivos;
- modelo de datos o contenido;
- integración con i18n;
- integración con light/dark mode;
- estrategia responsive;
- decisión sobre iconos;
- variante visual final;
- pruebas concretas;
- checklist de implementación para agente IA.