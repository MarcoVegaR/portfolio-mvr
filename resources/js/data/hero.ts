import type { Locale } from '@/types/foundation';

export type HeroCopy = {
    name: string;
    role: string;
    description: string;
    projectsLabel: string;
    resumeLabel: string;
    githubLabel: string;
};

export const HERO_COPY: Record<Locale, HeroCopy> = {
    es: {
        name: 'Marco Vega',
        role: 'Ingeniero de IA',
        description:
            'Construyo aplicaciones de negocio y sistemas con IA. Combino desarrollo de aplicaciones con un enfoque en servicios del lado del servidor, Laravel y orquestación de agentes.',
        projectsLabel: 'Ver proyectos',
        resumeLabel: 'CV',
        githubLabel: 'GitHub',
    },
    en: {
        name: 'Marco Vega',
        role: 'AI Engineer',
        description:
            'I build business applications and AI-powered systems. I combine full-stack development with a focus on backend engineering, Laravel, and agent orchestration.',
        projectsLabel: 'View projects',
        resumeLabel: 'Resume',
        githubLabel: 'GitHub',
    },
};
