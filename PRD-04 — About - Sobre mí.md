# PRD-04 — About / Sobre mí

## 1. Metadata

- **Estado:** Definitivo para pasar a SDD-04
- **Versión:** 1.1
- **Fecha:** 2026-08-23
- **Autor / Product Owner:** Marco
- **Proyecto:** Portfolio personal
- **Módulo:** Home / About Section
- **Prioridad:** Alta
- **Agente objetivo:** Agente IA de diseño/implementación frontend asistida por especificación
- **Repositorio:** Pendiente de indicar
- **Rama:** Pendiente de indicar

---

## 2. Resumen ejecutivo

Se construirá la sección **About / Sobre mí** de la home del portfolio de Marco.

La sección debe profundizar el posicionamiento profesional introducido en Hero. Su función no es repetir el mensaje principal del Hero ni demostrar toda la trayectoria profesional, sino explicar con claridad quién es Marco profesionalmente, qué tipo de software construye, cuál es su base técnica, dónde tiene mayor profundidad y cuál es su enfoque de trabajo.

El resultado esperado es que un recruiter, hiring manager o visitante profesional entienda que Marco es un **AI Engineer** con base Full Stack, mayor profundidad en backend y especial foco en Laravel, que construye aplicaciones de negocio y sistemas asistidos por IA mediante un proceso estructurado.

La sección debe mantener esta prioridad editorial:

```text
1. MARCO
Quién es profesionalmente

2. SOFTWARE
Qué clase de sistemas construye

3. PROFUNDIDAD
Full Stack → backend → Laravel

4. ENFOQUE
Cómo aborda esos sistemas

5. MÉTODO
Event Storming / PRD / agentes / pruebas,
como detalles de respaldo
```

About debe explicar a Marco, no intentar demostrar todo sobre Marco.

---

## 3. Problema que resuelve

El Hero comunica la identidad profesional principal de Marco, pero por sí solo no explica suficientemente qué significa “AI Engineer” en su caso particular.

Sin una sección About bien definida, el visitante podría interpretar incorrectamente el posicionamiento de Marco como:

- Full Stack Developer genérico.
- Laravel Developer tradicional.
- AI enthusiast.
- Usuario de herramientas IA sin criterio de ingeniería.
- Perfil orientado a investigación de modelos en lugar de construcción de software.

La sección About resuelve esa ambigüedad explicando el posicionamiento profesional con más contexto, sin convertir la sección en un listado técnico, una biografía extensa, una sección de experiencia, una galería de proyectos o una documentación del proceso de trabajo.

---

## 4. Objetivos

### Objetivo principal

Construir una sección About clara, contenida y bilingüe que explique quién es Marco profesionalmente, qué tipo de software construye, cuál es su profundidad técnica y cómo trabaja con agentes de IA dentro de un proceso de ingeniería estructurado.

### Objetivos secundarios

- Preservar la jerarquía profesional:
  - AI Engineer.
  - Full Stack foundation.
  - Backend depth.
  - Laravel.
- Explicar que Marco construye software de negocio y sistemas asistidos por IA.
- Comunicar que Marco tiene una base Full Stack con mayor profundidad en backend y Laravel.
- Presentar el proceso de trabajo como segunda capa de lectura, no como protagonista principal.
- Hacer escaneable el enfoque de trabajo mediante un bloque compacto de **Engineering Approach**.
- Evitar redundancia entre la narrativa profesional y el Engineering Approach.
- Mantener paridad completa entre español e inglés.
- Evitar que About duplique el Hero, Core Stack, Experience o Projects.
- Garantizar que la sección sea accesible, legible y funcional en desktop, tablet y mobile.

### Métricas de éxito, si aplican

No se definen métricas cuantitativas para esta versión.

Criterio cualitativo de éxito:

> Si al mirar About durante cinco segundos lo primero que se recuerda es “Event Storming, PRDs y agentes”, el diseño falló.  
> Si lo primero que se entiende es “Marco es un AI Engineer con profundidad backend/Laravel que construye software de negocio mediante un proceso estructurado”, el diseño funcionó.

---

## 5. Usuarios y roles involucrados

### Usuario principal

**Recruiter / Hiring Manager**

Necesita comprender rápidamente:

- quién es Marco profesionalmente;
- cuál es su posicionamiento;
- qué tipo de software construye;
- cuál es su base técnica;
- dónde tiene mayor profundidad;
- si su perfil es relevante para una oportunidad profesional.

La primera lectura debe ser clara para este usuario, sin exigir conocimiento profundo de Event Storming, PRDs, arquitectura o agentes IA.

### Usuario secundario

**Entrevistador técnico**

Necesita encontrar señales de criterio de ingeniería, profundidad técnica y forma estructurada de trabajo.

Este usuario puede profundizar en la segunda capa de lectura: Engineering Approach, arquitectura, especificaciones, restricciones, agentes, revisión y pruebas.

### Product Owner

**Marco**

Responsable de aprobar:

- narrativa profesional;
- claims permitidos;
- alcance de la sección;
- fuera de alcance;
- versión final del contenido ES/EN.

### Agente IA de implementación

Puede implementar la sección solo dentro de los límites definidos por este PRD y el futuro SDD-04.

---

## 6. Alcance funcional

Esta versión incluye:

- Crear la sección **About / Sobre mí** dentro de la home del portfolio.
- Definir el anchor navegable `#about`.
- Integrar la sección con el Header o navegación existente.
- Mostrar heading semántico:
  - Español: `Sobre mí`
  - Inglés: `About`
- Mostrar narrativa profesional en español.
- Mostrar narrativa profesional en inglés.
- Preservar la identidad principal: **AI Engineer**.
- Comunicar base Full Stack.
- Comunicar mayor profundidad en backend.
- Mencionar Laravel como ecosistema donde existe mayor profundidad.
- Comunicar que Marco construye:
  - aplicaciones de negocio;
  - agentes de IA;
  - copilotos;
  - flujos de trabajo asistidos por IA.
- Incluir un bloque escaneable de **Engineering Approach**.
- Representar el proceso en tres etapas:
  - Entender / Understand.
  - Definir / Define.
  - Construir y validar / Build & Validate.
- Garantizar que ProfessionalNarrative y EngineeringApproach sean complementarios, no redundantes.
- Garantizar que el proceso siga siendo comprensible en desktop, tablet y mobile.
- Garantizar que la información sea texto real, no solo imagen o gráfico.
- Garantizar accesibilidad básica.
- Soportar ausencia de motion o `prefers-reduced-motion`.

---

## 7. Fuera de alcance

PRD-04 no incluye:

- Core Stack completo.
- Technology grid.
- Skill bars.
- Porcentajes de dominio.
- Niveles tipo Beginner / Intermediate / Advanced.
- Certificaciones.
- Timeline profesional.
- Empresas.
- Caracoders Pro Services.
- Federación Venezolana de Fútbol.
- FIFA.
- Periodos laborales como 2011–2020 o 2020–Actualidad.
- Responsabilidades institucionales.
- Cards de proyectos.
- Descripciones de proyectos.
- Testimonios.
- Métricas inventadas.
- Edad.
- Fecha de nacimiento.
- Teléfono.
- Dirección.
- Hobbies irrelevantes.
- Formulario de contacto.
- CTA principal adicional.
- Segunda Hero Section.
- Claims no aprobados como:
  - Expert AI Engineer.
  - Senior AI Engineer.
  - Enterprise AI Engineer.
  - 10+ years building AI systems.
  - Highly scalable AI systems.
  - Production-ready AI.
  - Autonomous AI systems.
  - Cutting-edge AI solutions.

---

## 8. Contexto del sistema actual

La sección pertenece a la home del portfolio y debe ubicarse conceptualmente después del Hero y antes de Core Stack.

La progresión narrativa esperada es:

```text
HERO
Qué hace Marco

↓

ABOUT
Qué tipo de ingeniero es y cómo trabaja

↓

CORE STACK
Con qué tecnologías trabaja

↓

EXPERIENCE
En qué contextos profesionales lo ha hecho

↓

PROJECTS
Evidencia concreta de esas capacidades
```

About no debe competir visualmente con Hero. Debe cambiar el ritmo de la página hacia claridad, orden, método, profundidad y criterio de ingeniería.

About puede mencionar Full Stack, backend y Laravel porque forman parte del posicionamiento profesional, pero no debe presentar el stack completo. Core Stack será responsable de explicar tecnologías como Laravel AI SDK, MCP, OpenClaw, Laravel, PHP, PostgreSQL, React y TypeScript.

Experience será responsable de demostrar trayectoria, empresas, contextos y responsabilidades.

Projects será responsable de aportar evidencia concreta de capacidades profesionales.

---

## 9. Playbooks aplicados al PRD

### Product Discovery / PRD Base

Activo.

Se usa para definir problema, objetivo, usuario principal, alcance mínimo, fuera de alcance, riesgos de sobreingeniería y riesgo de mezclar módulos.

### Frontend / UX

Activo.

Aplica porque la funcionalidad es una sección visual de portfolio con contenido, jerarquía, navegación, responsive, motion opcional y accesibilidad.

### Backend / API / Reglas

No activo.

No hay endpoints, CRUD, servicios backend, lógica de negocio persistente ni contratos API.

### Data / Modelo conceptual

No activo como playbook principal.

No hay persistencia, entidades ni modelo de datos. Solo existe contenido editorial bilingüe y estructura conceptual de presentación.

### Seguridad / Roles / Trazabilidad

No activo.

No hay autenticación, roles, datos sensibles ni acciones críticas.

### QA / Acceptance

Activo.

Se requiere validar contenido, paridad ES/EN, jerarquía profesional, responsive, accesibilidad y cumplimiento del fuera de alcance.

### DevOps / Integraciones / Operación

No activo.

No hay jobs, colas, webhooks, emails, integraciones externas ni monitoreo específico.

---

## 10. Requisitos funcionales

### RF-001 — Crear sección About

Como visitante del portfolio, quiero acceder a una sección About para entender qué tipo de profesional es Marco y por qué su perfil es relevante.

### RF-002 — Integrar anchor navegable

Como visitante, quiero que la navegación hacia About apunte correctamente a `#about` para llegar a la sección desde el Header o navegación existente.

### RF-003 — Mostrar heading bilingüe

Como visitante, quiero ver el heading correcto según el idioma activo para identificar claramente la sección.

- ES: `Sobre mí`
- EN: `About`

### RF-004 — Mostrar narrativa profesional en español

Como visitante en español, quiero leer una narrativa profesional clara para entender el posicionamiento de Marco.

Contenido base aprobado:

> Soy **AI Engineer** enfocado en orquestar agentes de IA para construir software. Mi base es Full Stack, con mayor profundidad en backend y especialmente en el ecosistema Laravel.
>
> Construyo aplicaciones de negocio, agentes, copilotos y flujos de trabajo asistidos por IA. Mi enfoque combina comprensión del dominio, especificación clara y criterio técnico antes de pasar a la implementación.
>
> A partir de decisiones definidas, orquesto agentes para implementar soluciones, reviso los resultados y valido que la implementación cumpla lo especificado.

### RF-005 — Mostrar narrativa profesional en inglés

Como visitante en inglés, quiero leer una narrativa profesional equivalente para entender el mismo posicionamiento.

Contenido base aprobado:

> I'm an **AI Engineer** focused on orchestrating AI agents to build software. My background is Full Stack, with deeper experience in backend engineering and particularly within the Laravel ecosystem.
>
> I build business applications, AI agents, copilots, and AI-assisted workflows. My approach combines domain understanding, clear specification, and technical judgment before moving into implementation.
>
> From defined decisions, I orchestrate agents to implement solutions, review their output, and validate the implementation against the specification.

### RF-006 — Preservar jerarquía profesional

Como Product Owner, quiero que la sección preserve la jerarquía profesional aprobada para evitar reposicionar incorrectamente a Marco.

Jerarquía obligatoria:

```text
AI Engineer
↓
Full Stack foundation
↓
Backend depth
↓
Laravel
```

No se permite reposicionar la sección hacia:

```text
Full Stack Developer
Laravel Developer
AI Enthusiast
```

ni presentar esas identidades con el mismo peso.

### RF-007 — Mostrar Engineering Approach

Como visitante, quiero ver un bloque escaneable que explique cómo trabaja Marco para comprender su proceso sin convertir About en documentación técnica.

Estructura conceptual aprobada:

Español:

```text
ENTENDER
Dominio y requisitos

↓

DEFINIR
Especificaciones · Arquitectura · Restricciones

↓

CONSTRUIR Y VALIDAR
Agentes · Revisión · Pruebas
```

Inglés:

```text
UNDERSTAND
Domain & requirements

↓

DEFINE
Specifications · Architecture · Constraints

↓

BUILD & VALIDATE
Agents · Review · Testing
```

### RF-008 — Complementar narrativa y enfoque

Como visitante, quiero que la narrativa profesional y el Engineering Approach se complementen para entender primero a Marco como profesional y luego su método de trabajo.

ProfessionalNarrative no debe explicar todo el proceso en detalle si EngineeringApproach ya lo sintetiza visualmente.

EngineeringApproach no debe repetir párrafo por párrafo la narrativa.

### RF-009 — Comunicar etapa Entender / Understand

Como visitante, quiero entender que la implementación no empieza inmediatamente con código.

Debe comunicar:

- dominio;
- requisitos;
- Event Storming como detalle secundario, si se incluye.

### RF-010 — Comunicar etapa Definir / Define

Como visitante, quiero entender que antes de implementar se establecen decisiones que gobiernan la solución.

Debe comunicar, de forma completa o sintetizada según densidad visual:

- PRDs;
- especificaciones;
- arquitectura;
- restricciones;
- criterios de aceptación.

### RF-011 — Comunicar etapa Construir y validar / Build & Validate

Como visitante, quiero entender cómo entran los agentes dentro del proceso.

Debe comunicar:

- orquestación de agentes;
- implementación;
- revisión;
- pruebas;
- validación contra especificaciones.

### RF-012 — Mantener paridad ES/EN

Como visitante bilingüe o Product Owner, quiero que ambas versiones comuniquen el mismo contenido profesional para evitar inconsistencias de posicionamiento.

### RF-013 — Mantener relación con secciones vecinas

Como Product Owner, quiero que About se limite a explicar a Marco profesionalmente, dejando evidencia, tecnologías completas y trayectoria para secciones posteriores.

### RF-014 — Soportar responsive

Como visitante mobile, tablet o desktop, quiero que la sección conserve el orden y significado del proceso en cualquier viewport.

### RF-015 — Soportar accesibilidad básica

Como visitante, quiero poder leer y navegar la sección aunque no use motion, hover o visualizaciones complejas.

---

## 11. Reglas de negocio

### RN-001 — Identidad principal

La identidad profesional principal debe ser **AI Engineer**.

**Condición:** Siempre que se presente el posicionamiento profesional de Marco en About.  
**Comportamiento esperado:** AI Engineer debe tener mayor peso conceptual que Full Stack, Backend o Laravel.  
**Excepción:** No aplica.

### RN-002 — Marco primero, método después

La primera lectura de About debe ser Marco como profesional. El proceso de ingeniería debe funcionar como segunda capa de comprensión.

**Condición:** Cuando se definan layout, jerarquía visual, copy o motion.  
**Comportamiento esperado:** El visitante debe recordar primero quién es Marco y qué construye, no una lista de herramientas o metodologías.  
**Excepción:** No aplica.

### RN-003 — Jerarquía técnica

La sección debe mantener la jerarquía:

```text
AI Engineer → Full Stack foundation → Backend depth → Laravel
```

**Condición:** Cuando se comuniquen habilidades, base o profundidad técnica.  
**Comportamiento esperado:** Full Stack, backend y Laravel deben respaldar la identidad AI Engineer, no reemplazarla.  
**Excepción:** No aplica.

### RN-004 — About no repite Hero

**Condición:** Cuando se diseñe o redacte la sección.  
**Comportamiento esperado:** About debe profundizar el Hero, no repetirlo ni competir con él.  
**Excepción:** Puede existir continuidad conceptual con Hero, pero no duplicación editorial o visual.

### RN-005 — About no es Core Stack

**Condición:** Cuando se mencionen tecnologías.  
**Comportamiento esperado:** Solo se permite mencionar Full Stack, backend y Laravel como parte del posicionamiento profesional.  
**Excepción:** No se debe mostrar el stack completo en About.

### RN-006 — About no es Experience

**Condición:** Cuando se considere agregar trayectoria, empresas o fechas.  
**Comportamiento esperado:** No incluir empresas, fechas laborales, equipos, instituciones ni responsabilidades históricas.  
**Excepción:** No aplica.

### RN-007 — About no es Projects

**Condición:** Cuando se considere agregar evidencia concreta.  
**Comportamiento esperado:** No incluir cards, nombres, métricas ni descripciones de proyectos.  
**Excepción:** No aplica.

### RN-008 — No claims nuevos

**Condición:** Cuando se redacte o refine copy.  
**Comportamiento esperado:** No añadir seniority, métricas, expertise, impacto, años de experiencia o claims no aprobados.  
**Excepción:** Solo se pueden añadir claims si Marco los aprueba explícitamente en un PRD posterior.

### RN-009 — Agentes dentro de límites

**Condición:** Cuando se explique el uso de agentes de IA.  
**Comportamiento esperado:** Debe quedar claro que los agentes participan en la implementación dentro de decisiones, restricciones y criterios definidos previamente.  
**Excepción:** No usar copy defensivo como “La IA no toma decisiones”; la estructura debe comunicarlo positivamente.

### RN-010 — Engineering Approach no es lista de skills

**Condición:** Cuando se diseñe el bloque Engineering Approach.  
**Comportamiento esperado:** Debe sintetizar el proceso de trabajo, no convertirse en un listado tecnológico.  
**Excepción:** Se permiten referencias secundarias como Event Storming, PRD, Laravel o pruebas si apoyan la comprensión.

### RN-011 — No redundancia entre bloques

**Condición:** Cuando se redacte ProfessionalNarrative y se diseñe EngineeringApproach.  
**Comportamiento esperado:** ProfessionalNarrative y EngineeringApproach deben ser complementarios, no redundantes. El proceso detallado no debe explicarse dos veces.  
**Excepción:** Se permite una leve continuidad conceptual, siempre que no produzca repetición evidente.

### RN-012 — Contenido contenido

**Condición:** Cuando se determine extensión visual y editorial.  
**Comportamiento esperado:** About debe mantenerse como sección de home, no como página independiente.  
**Excepción:** No aplica.

---

## 12. Requisitos no funcionales

### Accesibilidad

- Debe usar heading semántico.
- Debe contener información profesional como texto real.
- Debe mantener orden lógico de lectura.
- No debe depender exclusivamente de gráficos.
- No debe depender de hover.
- Debe funcionar sin motion.
- Debe respetar `prefers-reduced-motion`.
- Debe mantener contraste adecuado.
- El anchor `#about` debe ser accesible aunque exista Header sticky.

### Usabilidad

- La narrativa debe ser legible y no excesivamente densa.
- El Engineering Approach debe ser rápidamente escaneable.
- La sección debe comunicar claridad, orden, método, profundidad y criterio de ingeniería.
- About no debe intentar superar visualmente al Hero.
- El recruiter o hiring manager debe poder entender la sección sin leerla como documentación técnica.

### Responsive

- La relación y orden del proceso deben seguir siendo evidentes en mobile, tablet y desktop.
- En desktop puede resolverse horizontalmente.
- En mobile puede resolverse verticalmente.
- La geometría exacta corresponde al SDD-04.

### Mantenibilidad

- El contenido ES/EN debe estar organizado de forma que sea fácil mantener paridad.
- La sección debe estar separada conceptualmente de Hero, Core Stack, Experience y Projects.
- Los nombres de responsabilidades conceptuales pueden servir de guía, pero el SDD definirá la componentización final.

### Compatibilidad

- La sección debe funcionar aunque motion esté desactivado.
- La sección debe seguir siendo comprensible si el navegador o dispositivo reduce animaciones.

---

## 13. Interfaz esperada, flujo esperado o API esperada

### Tipo de interfaz

Sección frontend dentro de la home del portfolio.

No hay API esperada.

### Responsabilidades conceptuales

```text
AboutSection
│
├── SectionHeading
├── ProfessionalNarrative
└── EngineeringApproach
```

Estas responsabilidades son conceptuales. El SDD-04 decidirá nombres finales de componentes, estructura DOM, archivos, tokens, layout, breakpoints y motion.

### AboutSection

Responsable de contener la sección completa.

Debe:

- existir como sección navegable;
- exponer el destino `#about`;
- integrarse con el Header existente;
- preservar separación visual respecto al Hero;
- mantener una experiencia de lectura clara;
- priorizar a Marco como profesional antes que al método como objeto visual.

### SectionHeading

Responsable de mostrar el título de la sección según idioma activo:

- ES: `Sobre mí`
- EN: `About`

Debe mantener consistencia semántica con la navegación.

### ProfessionalNarrative

Responsable de comunicar:

- quién es Marco;
- qué construye;
- cuál es su base técnica;
- dónde tiene mayor profundidad;
- cuál es su enfoque profesional.

Debe presentar a Marco antes que detallar exhaustivamente el proceso.

No debe duplicar todo lo que EngineeringApproach ya sintetiza.

### EngineeringApproach

Responsable de hacer escaneable el proceso:

```text
Entender → Definir → Construir y validar
```

o

```text
Understand → Define → Build & Validate
```

Puede representarse como:

- timeline;
- steps;
- flow;
- composición editorial;
- cards;
- diagrama simple.

El PRD no exige una visualización compleja. Si una solución simple comunica mejor, debe preferirse la solución simple.

El Engineering Approach debe apoyar la narrativa, no reemplazarla ni dominar visualmente la sección.

---

## 14. Datos y modelo conceptual

No hay modelo de datos persistente.

### Contenido editorial requerido

#### Español

Heading:

```text
Sobre mí
```

Narrativa:

```text
Soy AI Engineer enfocado en orquestar agentes de IA para construir software. Mi base es Full Stack, con mayor profundidad en backend y especialmente en el ecosistema Laravel.

Construyo aplicaciones de negocio, agentes, copilotos y flujos de trabajo asistidos por IA. Mi enfoque combina comprensión del dominio, especificación clara y criterio técnico antes de pasar a la implementación.

A partir de decisiones definidas, orquesto agentes para implementar soluciones, reviso los resultados y valido que la implementación cumpla lo especificado.
```

Engineering Approach:

```text
ENTENDER
Dominio y requisitos

DEFINIR
Especificaciones · Arquitectura · Restricciones

CONSTRUIR Y VALIDAR
Agentes · Revisión · Pruebas
```

#### Inglés

Heading:

```text
About
```

Narrative:

```text
I'm an AI Engineer focused on orchestrating AI agents to build software. My background is Full Stack, with deeper experience in backend engineering and particularly within the Laravel ecosystem.

I build business applications, AI agents, copilots, and AI-assisted workflows. My approach combines domain understanding, clear specification, and technical judgment before moving into implementation.

From defined decisions, I orchestrate agents to implement solutions, review their output, and validate the implementation against the specification.
```

Engineering Approach:

```text
UNDERSTAND
Domain & requirements

DEFINE
Specifications · Architecture · Constraints

BUILD & VALIDATE
Agents · Review · Testing
```

### Labels permitidos

| Español | English |
|---|---|
| Sobre mí | About |
| Entender | Understand |
| Dominio y requisitos | Domain & requirements |
| Definir | Define |
| Especificaciones | Specifications |
| Arquitectura | Architecture |
| Restricciones | Constraints |
| Construir y validar | Build & Validate |
| Revisión | Review |
| Pruebas | Testing |

### Términos que pueden conservarse sin traducir

- AI Engineer
- Full Stack
- Backend
- Event Storming
- PRD
- Laravel

No introducir Spanglish editorial innecesario.

---

## 15. Criterios de aceptación

### CA-001 — Sección navegable

**Given** que el visitante está en la home  
**When** usa la navegación hacia About  
**Then** la página debe desplazarse correctamente a la sección `#about`.

### CA-002 — Heading correcto en español

**Given** que el idioma activo es español  
**When** el visitante llega a la sección About  
**Then** debe ver el heading `Sobre mí`.

### CA-003 — Heading correcto en inglés

**Given** que el idioma activo es inglés  
**When** el visitante llega a la sección About  
**Then** debe ver el heading `About`.

### CA-004 — Narrativa completa en español

**Given** que el idioma activo es español  
**When** el visitante lee la sección  
**Then** debe mostrarse la narrativa profesional aprobada en español sin alterar su significado.

### CA-005 — Narrativa completa en inglés

**Given** que el idioma activo es inglés  
**When** el visitante lee la sección  
**Then** debe mostrarse la narrativa profesional aprobada en inglés sin alterar su significado.

### CA-006 — AI Engineer como identidad principal

**Given** que el visitante lee la sección  
**When** interpreta el posicionamiento profesional  
**Then** debe quedar claro que la identidad principal es AI Engineer.

### CA-007 — Base Full Stack comunicada

**Given** que el visitante lee la narrativa  
**When** identifica la base técnica de Marco  
**Then** debe entender que Marco tiene base Full Stack.

### CA-008 — Profundidad backend comunicada

**Given** que el visitante lee la narrativa  
**When** identifica el área de mayor profundidad  
**Then** debe entender que existe mayor profundidad en backend.

### CA-009 — Laravel comunicado como ecosistema de profundidad

**Given** que el visitante lee la narrativa  
**When** identifica tecnologías o ecosistemas mencionados  
**Then** debe encontrar Laravel como ecosistema específico de mayor profundidad.

### CA-010 — Tipo de software comunicado

**Given** que el visitante lee la sección  
**When** identifica qué construye Marco  
**Then** debe entender que aplica su enfoque a aplicaciones de negocio, agentes de IA, copilotos y flujos asistidos por IA.

### CA-011 — Marco primero, método después

**Given** que el visitante observa la sección durante una primera lectura breve  
**When** interpreta el mensaje principal  
**Then** debe entender primero quién es Marco profesionalmente y qué construye, antes de recordar herramientas o metodologías específicas.

### CA-012 — ProfessionalNarrative y EngineeringApproach complementarios

**Given** que el visitante lee la narrativa y observa el Engineering Approach  
**When** compara ambos bloques  
**Then** debe percibirlos como complementarios, no como una repetición del mismo contenido.

### CA-013 — Comprensión de dominio comunicada

**Given** que el visitante revisa el Engineering Approach  
**When** observa la etapa Entender / Understand  
**Then** debe quedar comunicada la comprensión de dominio y requisitos.

### CA-014 — Especificación y arquitectura comunicadas

**Given** que el visitante revisa el Engineering Approach  
**When** observa la etapa Definir / Define  
**Then** debe quedar comunicada la definición de especificaciones, arquitectura y restricciones.

### CA-015 — Agentes, revisión y pruebas comunicados

**Given** que el visitante revisa el Engineering Approach  
**When** observa la etapa Construir y validar / Build & Validate  
**Then** debe quedar comunicada la orquestación de agentes, revisión y pruebas.

### CA-016 — Engineering Approach escaneable

**Given** que el visitante hace una lectura rápida  
**When** observa el bloque Engineering Approach  
**Then** debe poder comprender la secuencia general sin leer todos los párrafos.

### CA-017 — No dump tecnológico

**Given** que el visitante revisa About  
**When** identifica tecnologías mencionadas  
**Then** no debe encontrar un grid completo de tecnologías ni una lista de skills.

### CA-018 — No Experience dentro de About

**Given** que el visitante revisa About  
**When** busca trayectoria profesional  
**Then** no debe encontrar empresas, fechas laborales ni responsabilidades institucionales.

### CA-019 — No Projects dentro de About

**Given** que el visitante revisa About  
**When** busca evidencia de proyectos  
**Then** no debe encontrar cards ni descripciones de proyectos.

### CA-020 — No claims nuevos

**Given** que el visitante lee el copy  
**When** identifica claims profesionales  
**Then** no debe encontrar seniority, métricas, años de experiencia o claims no aprobados.

### CA-021 — Responsive funcional

**Given** que el visitante accede desde mobile, tablet o desktop  
**When** visualiza la sección  
**Then** el orden y relación del proceso deben seguir siendo comprensibles.

### CA-022 — Información disponible sin motion

**Given** que el visitante tiene motion reducido o desactivado  
**When** accede a la sección  
**Then** toda la información debe seguir visible, accesible y comprensible.

### CA-023 — Anchor compatible con Header sticky

**Given** que existe Header sticky  
**When** el visitante navega hacia `#about`  
**Then** el heading o contenido principal no debe quedar oculto detrás del Header.

---

## 16. Casos borde y manejo de errores

### CB-001 — Idioma no disponible

Si el sistema de i18n no encuentra traducción para About, no debe mostrar contenido mezclado parcialmente. Debe usar fallback coherente definido por el sistema existente.

### CB-002 — Layout mobile demasiado comprimido

Si el Engineering Approach horizontal se vuelve ilegible en mobile, debe cambiar a disposición vertical o equivalente definida por SDD-04.

### CB-003 — Motion desactivado

Si `prefers-reduced-motion` está activo, la sección no debe ocultar información ni depender de animaciones para revelar contenido.

### CB-004 — Header sticky cubre anchor

Si al navegar a `#about` el Header sticky tapa el heading, debe corregirse en SDD/implementación mediante solución de layout adecuada.

### CB-005 — Densidad visual excesiva

Si el bloque Engineering Approach compite con la narrativa principal, debe simplificarse. About debe priorizar comprensión profesional, no diagrama.

### CB-006 — Copy técnico dominante

Si Event Storming, PRD, agentes, pruebas o Laravel toman mayor protagonismo que Marco como profesional, el diseño/copy debe ajustarse.

### CB-007 — Claims no aprobados

Si durante implementación aparece un claim no incluido en este PRD, debe eliminarse o bloquearse para aprobación explícita.

### CB-008 — Sección se convierte en Core Stack

Si se agregan tecnologías no aprobadas dentro de About, deben moverse a Core Stack o eliminarse.

### CB-009 — Sección se convierte en Experience

Si se agregan empresas, fechas o trayectoria, deben moverse a Experience o eliminarse.

### CB-010 — Sección se convierte en Projects

Si se agregan proyectos, cards o evidencia concreta, deben moverse a Projects o eliminarse.

---

## 17. Testing requerido

### Pruebas funcionales

- Verificar que existe la sección `#about`.
- Verificar que la navegación hacia About funciona.
- Verificar que el heading cambia correctamente según idioma.
- Verificar que la narrativa ES aparece completa.
- Verificar que la narrativa EN aparece completa.
- Verificar que Engineering Approach aparece en ambos idiomas.

### Pruebas de contenido

- Verificar que AI Engineer aparece como identidad principal.
- Verificar que Full Stack aparece como base.
- Verificar que backend aparece como área de mayor profundidad.
- Verificar que Laravel aparece como ecosistema específico.
- Verificar que se mencionan aplicaciones de negocio.
- Verificar que se mencionan agentes, copilotos y workflows asistidos por IA.
- Verificar que el primer nivel de comprensión sea Marco como profesional.
- Verificar que el método funcione como apoyo, no como protagonista absoluto.
- Verificar que no hay claims no aprobados.
- Verificar que no hay métricas inventadas.

### Pruebas de fuera de alcance

- Verificar que no aparece Core Stack completo.
- Verificar que no aparece Technology grid.
- Verificar que no aparecen skill bars.
- Verificar que no aparecen porcentajes.
- Verificar que no aparecen certificaciones.
- Verificar que no aparecen empresas.
- Verificar que no aparecen proyectos.
- Verificar que no aparece información personal innecesaria.
- Verificar que no aparece CTA principal adicional.
- Verificar que no se crea una segunda Hero Section.

### Pruebas de UI / responsive

- Verificar desktop.
- Verificar tablet.
- Verificar mobile.
- Verificar que el Engineering Approach conserva orden y significado.
- Verificar legibilidad de texto.
- Verificar spacing suficiente para lectura.
- Verificar que About no compite visualmente con Hero.
- Verificar que ProfessionalNarrative y EngineeringApproach no sean redundantes.

### Pruebas de accesibilidad

- Verificar heading semántico.
- Verificar orden lógico de lectura.
- Verificar que la información está disponible como texto real.
- Verificar contraste suficiente.
- Verificar navegación por teclado si aplica.
- Verificar que no depende de hover.
- Verificar comportamiento con `prefers-reduced-motion`.
- Verificar que el anchor no queda oculto por Header sticky.

### Pruebas de regresión

- Verificar que Hero no cambia.
- Verificar que Core Stack no cambia.
- Verificar que Experience no cambia.
- Verificar que Projects no cambia.
- Verificar que la navegación existente no se rompe.
- Verificar que el sistema de idioma existente no se rompe.

---

## 18. Definition of Done

PRD-04 se considera terminado cuando:

- La sección About existe en la home.
- El anchor `#about` funciona correctamente.
- El Header o navegación puede dirigir hacia la sección.
- El heading se muestra correctamente en ES/EN.
- La narrativa aprobada está implementada en ES/EN.
- AI Engineer permanece como identidad principal.
- Full Stack, backend y Laravel aparecen con la jerarquía correcta.
- El Engineering Approach está implementado de forma escaneable.
- La sección comunica entender, definir, construir y validar.
- ProfessionalNarrative y EngineeringApproach son complementarios, no redundantes.
- La primera lectura comunica a Marco como profesional antes que sus herramientas o metodología.
- La sección no incluye contenido de Core Stack completo.
- La sección no incluye contenido de Experience.
- La sección no incluye contenido de Projects.
- No existen claims, métricas ni seniority no aprobados.
- La sección es legible en desktop, tablet y mobile.
- La información sigue disponible sin motion.
- Se respetan criterios básicos de accesibilidad.
- Las pruebas definidas en este PRD fueron ejecutadas o revisadas.
- El SDD-04 no contradice el alcance, reglas ni contenido aprobado de este PRD.

---

## 19. Instrucciones para el agente IA

El agente IA debe cumplir estas reglas:

- No modificar Hero.
- No modificar Core Stack.
- No modificar Experience.
- No modificar Projects.
- No modificar Header salvo lo necesario para integrar el anchor `#about`, si ya existe un patrón de navegación.
- No convertir About en una segunda Hero Section.
- No convertir About en una lista de tecnologías.
- No convertir About en timeline profesional.
- No agregar proyectos ni empresas.
- No agregar certificaciones.
- No agregar métricas.
- No agregar claims de seniority, expertise o impacto no aprobados.
- No cambiar el significado de la narrativa ES/EN.
- No alterar la jerarquía AI Engineer → Full Stack foundation → Backend depth → Laravel.
- No hacer que Event Storming, PRDs, agentes, pruebas o Laravel sean más protagonistas que Marco.
- No repetir el proceso completo dos veces entre narrativa y Engineering Approach.
- No depender de motion para revelar información.
- No ocultar información detrás de hover.
- No instalar dependencias nuevas sin aprobación.
- No modificar estilos globales, layout base o design system sin autorización explícita.
- No cerrar decisiones propias del SDD dentro del PRD.
- Si encuentra conflicto entre diseño visual y claridad del mensaje, debe priorizar claridad.
- Si encuentra una ambigüedad crítica no resuelta, debe detenerse y reportarla.

Formato de bloqueo requerido:

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

- **R-001 — Reposicionamiento incorrecto:** El diseño o copy podría hacer que Marco parezca Full Stack Developer o Laravel Developer antes que AI Engineer.
- **R-002 — Sobrepeso visual del proceso:** Engineering Approach podría crecer demasiado y robar protagonismo a la narrativa profesional.
- **R-003 — About convertido en How I Work:** La sección podría centrarse más en metodología que en Marco como profesional.
- **R-004 — Dump tecnológico:** La sección podría contaminarse con contenido propio de Core Stack.
- **R-005 — Mezcla de módulos:** About podría absorber contenido de Experience o Projects.
- **R-006 — Claims no respaldados:** El agente IA podría añadir seniority, métricas o promesas profesionales no aprobadas.
- **R-007 — Motion como dependencia:** La comprensión del proceso podría depender de animaciones.
- **R-008 — Pérdida de paridad ES/EN:** Una versión podría comunicar más o menos que la otra.

### Supuestos

- El portfolio ya tiene o tendrá soporte para español e inglés.
- Existe o existirá un Header/navegación capaz de enlazar hacia `#about`.
- Hero, Core Stack, Experience y Projects son secciones separadas.
- El diseño visual definitivo será resuelto en SDD-04.
- La implementación frontend respetará el sistema visual existente del portfolio.

### Preguntas abiertas críticas

No hay preguntas abiertas críticas.

### Preguntas abiertas menores

- Repositorio exacto.
- Rama de trabajo.
- Sistema actual de i18n.
- Convención final de componentes.
- Tokens visuales disponibles.
- Breakpoints exactos.
- Nivel de motion permitido por el diseño general del portfolio.

Estas preguntas no bloquean el PRD. Deben resolverse en SDD-04 o durante planificación técnica.

---

## 21. Matriz de trazabilidad

| Requisito | Criterio de aceptación | Test esperado |
|---|---|---|
| RF-001 | CA-001 | TEST-001: Verificar existencia de sección About |
| RF-002 | CA-001, CA-023 | TEST-002: Verificar navegación hacia `#about` |
| RF-003 | CA-002, CA-003 | TEST-003: Verificar heading ES/EN |
| RF-004 | CA-004 | TEST-004: Verificar narrativa completa en español |
| RF-005 | CA-005 | TEST-005: Verificar narrativa completa en inglés |
| RF-006 | CA-006, CA-007, CA-008, CA-009 | TEST-006: Verificar jerarquía profesional |
| RF-007 | CA-016 | TEST-007: Verificar Engineering Approach escaneable |
| RF-008 | CA-011, CA-012 | TEST-008: Verificar complementariedad narrativa/enfoque |
| RF-009 | CA-013 | TEST-009: Verificar etapa Entender / Understand |
| RF-010 | CA-014 | TEST-010: Verificar etapa Definir / Define |
| RF-011 | CA-015 | TEST-011: Verificar etapa Construir y validar / Build & Validate |
| RF-012 | CA-004, CA-005 | TEST-012: Verificar paridad ES/EN |
| RF-013 | CA-017, CA-018, CA-019, CA-020 | TEST-013: Verificar fuera de alcance |
| RF-014 | CA-021 | TEST-014: Verificar responsive desktop/tablet/mobile |
| RF-015 | CA-022, CA-023 | TEST-015: Verificar accesibilidad y reduced motion |

---

## Nota posterior al PRD

El siguiente entregable recomendado es:

```text
SDD-04 — About / Sobre mí
```

Ese documento debe definir:

- layout exacto;
- grid;
- ancho de contenido;
- breakpoints;
- tipografía;
- spacing;
- representación visual del Engineering Approach;
- orientación desktop/mobile;
- iconografía;
- motion;
- componentización React;
- estructura DOM;
- tokens;
- estados;
- pruebas técnicas.

El SDD-04 no debe cambiar el contenido, alcance ni posicionamiento aprobados en este PRD.

Condición principal para SDD-04:

> Si al mirar About durante cinco segundos lo primero que se recuerda es “Event Storming, PRDs y agentes”, el diseño falló.  
> Si lo primero que se entiende es “Marco es un AI Engineer con profundidad backend/Laravel que construye software de negocio mediante un proceso estructurado”, el diseño funcionó.