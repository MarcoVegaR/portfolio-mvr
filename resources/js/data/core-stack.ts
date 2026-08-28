import type { Locale } from '@/types/foundation';

export type StackGroupId =
    'ai-engineering' | 'application-engineering' | 'complementary';

export type StackGroupPriority = 'primary' | 'secondary';

export type SupportClusterId =
    | 'architecture-runtime'
    | 'delivery-infrastructure'
    | 'quality-observability';

export type SupportCluster = {
    id: SupportClusterId;
    title: Record<Locale, string>;
    technologies: readonly StackTechnology[];
};

export type StackGroup = {
    id: StackGroupId;
    title: Record<Locale, string>;
    priority: StackGroupPriority;
    technologies: readonly StackTechnology[];
    displayTitle?: Record<Locale, string>;
    supportClusters?: readonly SupportCluster[];
};

export type StackTechnology = {
    id: string;
    name: string;
    isHighlighted?: boolean;
};

export type CoreStackCopy = {
    heading: string;
    intro: string;
    pauseMotion: string;
    resumeMotion: string;
    systemOnline: string;
    supportTitle: string;
    signalLink: string;
};

export const CORE_STACK_COPY: Record<Locale, CoreStackCopy> = {
    es: {
        heading: 'Core Stack',
        intro: 'Tecnologías principales con las que construyo e integro aplicaciones y sistemas con IA.',
        pauseMotion: 'Pausar animación',
        resumeMotion: 'Reanudar animación',
        systemOnline: 'SISTEMA EN LÍNEA',
        supportTitle: 'Sistemas de soporte',
        signalLink: 'ENLACE DE SEÑAL',
    },
    en: {
        heading: 'Core Stack',
        intro: 'Core technologies I use to build and integrate applications and AI-enabled systems.',
        pauseMotion: 'Pause animation',
        resumeMotion: 'Resume animation',
        systemOnline: 'SYSTEM ONLINE',
        supportTitle: 'Support Systems',
        signalLink: 'SIGNAL LINK',
    },
};

export const CORE_STACK_GROUPS: readonly StackGroup[] = [
    {
        id: 'ai-engineering',
        title: { es: 'Ingeniería de IA', en: 'AI Engineering' },
        priority: 'primary',
        technologies: [
            { id: 'laravel-ai-sdk', name: 'Laravel AI SDK' },
            { id: 'mcp', name: 'MCP' },
            { id: 'openclaw', name: 'OpenClaw' },
        ],
    },
    {
        id: 'application-engineering',
        title: {
            es: 'Ingeniería de aplicaciones',
            en: 'Application Engineering',
        },
        priority: 'primary',
        technologies: [
            { id: 'laravel', name: 'Laravel', isHighlighted: true },
            { id: 'php', name: 'PHP' },
            { id: 'postgresql', name: 'PostgreSQL' },
            { id: 'react', name: 'React' },
            { id: 'typescript', name: 'TypeScript' },
        ],
    },
    {
        id: 'complementary',
        title: { es: 'Complementario', en: 'Complementary' },
        priority: 'secondary',
        technologies: [
            { id: 'inertia', name: 'Inertia.js' },
            { id: 'redis', name: 'Redis' },
            { id: 'docker', name: 'Docker' },
            { id: 'github-actions', name: 'GitHub Actions / CI/CD' },
            { id: 'laravel-cloud', name: 'Laravel Cloud' },
            { id: 'pest', name: 'Pest' },
            { id: 'playwright', name: 'Playwright' },
            { id: 'laravel-nightwatch', name: 'Laravel Nightwatch' },
        ],
        displayTitle: { es: 'Sistemas de soporte', en: 'Support Systems' },
        supportClusters: [
            {
                id: 'architecture-runtime',
                title: {
                    es: 'Arquitectura y ejecución',
                    en: 'Architecture & Runtime',
                },
                technologies: [
                    { id: 'inertia', name: 'Inertia.js' },
                    { id: 'redis', name: 'Redis' },
                ],
            },
            {
                id: 'delivery-infrastructure',
                title: {
                    es: 'Entrega e infraestructura',
                    en: 'Delivery & Infrastructure',
                },
                technologies: [
                    { id: 'docker', name: 'Docker' },
                    { id: 'github-actions', name: 'GitHub Actions / CI/CD' },
                    { id: 'laravel-cloud', name: 'Laravel Cloud' },
                ],
            },
            {
                id: 'quality-observability',
                title: {
                    es: 'Calidad y observabilidad',
                    en: 'Quality & Observability',
                },
                technologies: [
                    { id: 'pest', name: 'Pest' },
                    { id: 'playwright', name: 'Playwright' },
                    { id: 'laravel-nightwatch', name: 'Laravel Nightwatch' },
                ],
            },
        ],
    },
];
