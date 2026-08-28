import type { Locale } from '@/types/foundation';

type LocalizedText = Record<Locale, string>;
type LocalizedHighlight = LocalizedText & {
    lead?: LocalizedText;
};

type ExperienceHighlights =
    | readonly [LocalizedHighlight]
    | readonly [LocalizedHighlight, LocalizedHighlight]
    | readonly [LocalizedHighlight, LocalizedHighlight, LocalizedHighlight]
    | readonly [
          LocalizedHighlight,
          LocalizedHighlight,
          LocalizedHighlight,
          LocalizedHighlight,
      ];

export type ExperienceEntry = {
    id: 'caracoders' | 'fvf' | 'fifa';
    tabLabel: LocalizedText;
    period: {
        start: string;
        end: string;
        label: LocalizedText;
    };
    organization: LocalizedText;
    role: LocalizedText;
    location?: LocalizedText;
    summary: LocalizedText;
    highlights: ExperienceHighlights;
    parallelRoleNote?: LocalizedText;
};

export type ExperienceCopy = {
    eyebrow: string;
    heading: string;
    intro: string;
    traceLabel: string;
    highlightsLabel: string;
    tabsLabel: string;
};

export const EXPERIENCE_COPY: Record<Locale, ExperienceCopy> = {
    es: {
        eyebrow: '04 / EXPERIENCIA PROFESIONAL',
        heading: 'Experiencia',
        intro: 'Trayectoria profesional, responsabilidad y experiencia aplicada.',
        traceLabel: 'career.records()',
        highlightsLabel: 'Contribuciones clave',
        tabsLabel: 'Experiencia profesional',
    },
    en: {
        eyebrow: '04 / PROFESSIONAL EXPERIENCE',
        heading: 'Experience',
        intro: 'Professional trajectory, responsibility, and applied experience.',
        traceLabel: 'career.records()',
        highlightsLabel: 'Key contributions',
        tabsLabel: 'Professional experience',
    },
};

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
    {
        id: 'caracoders',
        tabLabel: { es: 'Caracoders', en: 'Caracoders' },
        period: {
            start: '2020',
            end: 'present',
            label: {
                es: '2020 — Actualidad',
                en: '2020 — Present',
            },
        },
        organization: {
            es: 'Caracoders Pro Services',
            en: 'Caracoders Pro Services',
        },
        role: {
            es: 'Gerente General',
            en: 'General Manager',
        },
        location: {
            es: 'Presencial',
            en: 'On-site',
        },
        summary: {
            es: 'Dirijo la empresa y participo directamente en la arquitectura, diseño y desarrollo de soluciones de software para organizaciones públicas y privadas.',
            en: 'I run the company while remaining directly involved in the architecture, design, and development of software solutions for public- and private-sector organizations.',
        },
        highlights: [
            {
                lead: {
                    es: 'Definición técnica y ejecución',
                    en: 'Technical definition and execution',
                },
                es: 'Participo en la definición técnica e implementación de aplicaciones utilizadas en entornos reales de producción.',
                en: 'I participate in the technical definition and implementation of applications used in real production environments.',
            },
            {
                lead: {
                    es: 'Tres sistemas en operación',
                    en: 'Three systems in active operation',
                },
                es: 'A través de Caracoders he desarrollado sistemas que continúan actualmente en operación: dos para organizaciones del sector público y uno para una empresa privada.',
                en: 'Through Caracoders, I have developed software systems that remain in active operation today: two for public-sector organizations and one for a private company.',
            },
            {
                lead: {
                    es: 'Gestión + ejecución técnica',
                    en: 'Management + technical execution',
                },
                es: 'Combino responsabilidades de dirección con ejecución técnica directa cuando el proyecto lo requiere, especialmente en arquitectura, desarrollo del lado del servidor e integración de aplicaciones.',
                en: 'I combine management responsibilities with hands-on technical execution when required, particularly across architecture, backend development, and application integration.',
            },
        ],
    },
    {
        id: 'fvf',
        tabLabel: { es: 'FVF', en: 'FVF' },
        period: {
            start: '2011',
            end: '2020',
            label: {
                es: '2011 — 2020',
                en: '2011 — 2020',
            },
        },
        organization: {
            es: 'Federación Venezolana de Fútbol',
            en: 'Venezuelan Football Federation',
        },
        role: {
            es: 'Gerente de Tecnología',
            en: 'Technology Manager',
        },
        location: {
            es: 'Presencial',
            en: 'On-site',
        },
        summary: {
            es: 'Responsable del área de tecnología de la FVF, reportando directamente a Secretaría General y liderando un equipo de 9 personas en sistemas, redes, soporte y mesa de ayuda. El área brindaba soporte presencial a aproximadamente 180 usuarios internos y soporte sobre los sistemas federativos a alrededor de 3.000 usuarios entre clubes, asociaciones, árbitros, comisarios y otros actores del fútbol nacional.',
            en: "Responsible for the Federation's technology function, reporting directly to the General Secretariat and leading a 9-person team across systems, networking, support, and help desk operations. The team provided on-site support to approximately 180 internal users and systems support to around 3,000 users across clubs, associations, referees, match commissioners, and other stakeholders in national football.",
        },
        highlights: [
            {
                lead: {
                    es: 'Reingeniería de procesos',
                    en: 'Process reengineering',
                },
                es: 'Transformé un trámite manual y presencial en un proceso remoto con trazabilidad, historial y capacidades de auditoría.',
                en: 'Transformed a manual, in-person workflow into a remote process with traceability, historical records, and auditing capabilities.',
            },
            {
                lead: {
                    es: 'Operación tecnológica a escala',
                    en: 'Technology operations at scale',
                },
                es: 'Lideré un equipo de 9 personas con soporte presencial para aproximadamente 180 usuarios internos y soporte de sistemas para alrededor de 3.000 usuarios del ecosistema federativo.',
                en: 'Led a 9-person team providing on-site support to approximately 180 internal users and systems support to around 3,000 users across the federation ecosystem.',
            },
            {
                lead: {
                    es: 'Modernización tecnológica',
                    en: 'Technology modernization',
                },
                es: 'Diseñé y ejecuté la modernización de la plataforma tecnológica de la Federación, migrando servicios y renovando la infraestructura de red con soluciones Cisco y Cisco Meraki.',
                en: 'Designed and executed the modernization of the Federation technology platform, migrating services and upgrading the network infrastructure with Cisco and Cisco Meraki solutions.',
            },
            {
                lead: {
                    es: 'Integración, observabilidad y gobierno',
                    en: 'Integration, observability, and governance',
                },
                es: 'Impulsé integraciones y automatizaciones institucionales, implementé observabilidad de servicios y definí políticas tecnológicas y de seguridad. Entre las iniciativas se incluyeron COMET + Power BI, Grafana + Prometheus y el monitoreo de documentación legal.',
                en: 'Drove institutional integrations and automation, implemented service observability, and defined technology and security policies. Initiatives included COMET + Power BI, Grafana + Prometheus, and monitoring of legal documentation.',
            },
        ],
    },
    {
        id: 'fifa',
        tabLabel: { es: 'FIFA', en: 'FIFA' },
        period: {
            start: '2012',
            end: '2018',
            label: {
                es: '2012 — 2018',
                en: '2012 — 2018',
            },
        },
        organization: {
            es: 'FIFA',
            en: 'FIFA',
        },
        role: {
            es: 'Gerente de Proyectos',
            en: 'Project Manager',
        },
        location: {
            es: 'Venezuela',
            en: 'Venezuela',
        },
        summary: {
            es: 'Designación contractual directa de FIFA para dirigir en Venezuela la selección, adaptación e implementación de una plataforma internacional de gestión deportiva integrada con FIFA Connect ID.',
            en: 'Direct FIFA contractual appointment to manage the selection, adaptation, and implementation in Venezuela of a national sports management platform integrated with FIFA Connect ID.',
        },
        parallelRoleNote: {
            es: 'Cargo simultáneo con Gerente de Tecnología — FVF',
            en: 'Concurrent role with Technology Manager — FVF',
        },
        highlights: [
            {
                lead: {
                    es: 'Selección de plataforma',
                    en: 'Platform selection',
                },
                es: 'Representé a Venezuela en la evaluación regional de proveedores junto con representantes de CONMEBOL y seleccioné COMET, desarrollado por Analyticom, por su ajuste funcional, tecnológico y económico a los requerimientos de la Federación.',
                en: "Represented Venezuela in the regional vendor evaluation with CONMEBOL representatives and selected Analyticom's COMET for its functional, technical, and economic fit with the Federation's requirements.",
            },
            {
                lead: {
                    es: 'Análisis y adaptación',
                    en: 'Discovery and adaptation',
                },
                es: 'Realicé el levantamiento de requerimientos con las áreas de la FVF y trabajé con Analyticom mediante talleres para identificar brechas, definir adaptaciones y validar los cambios entregados.',
                en: 'Conducted requirements discovery with FVF departments and worked with Analyticom through workshops to identify product gaps, define adaptations, and validate delivered changes.',
            },
            {
                lead: {
                    es: 'Migración y aceptación',
                    en: 'Migration and acceptance',
                },
                es: 'Coordiné la migración y depuración de información desde el sistema anterior y realicé personalmente las pruebas de usuario antes de aceptar las adaptaciones.',
                en: 'Coordinated migration and data cleanup from the previous system and personally performed user acceptance testing before approving the adaptations.',
            },
            {
                lead: {
                    es: 'Despliegue nacional',
                    en: 'National rollout',
                },
                es: 'Implementé COMET para la Federación, asociaciones y clubes del país y coordiné su integración con FIFA Connect ID.',
                en: 'Implemented COMET for the Federation, regional associations, and clubs across the country and coordinated its integration with FIFA Connect ID.',
            },
        ],
    },
];
