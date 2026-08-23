import type { Locale } from '@/types/foundation';

export type AboutStep = {
    id: 'understand' | 'define' | 'build-validate';
    title: string;
    description: string;
};

export type AboutCopy = {
    heading: string;
    terminalTitle: string;
    summaryLabel: string;
    workflowLabel: string;
    terminalIntro: string[];
    approach: AboutStep[];
};

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
    es: {
        heading: 'Sobre mí',
        terminalTitle: 'Marco Vega · Sobre mí',
        summaryLabel: 'perfil.resumen',
        workflowLabel: 'flujo.estado',
        terminalIntro: [
            'Soy AI Engineer enfocado en orquestar agentes de IA para construir software.',
            'Mi base es Full Stack, con mayor profundidad en backend y Laravel.',
            'Construyo aplicaciones de negocio, agentes y copilotos asistidos por IA.',
        ],
        approach: [
            {
                id: 'understand',
                title: 'Entender',
                description: 'Dominio y requisitos',
            },
            {
                id: 'define',
                title: 'Definir',
                description: 'Especificación y arquitectura',
            },
            {
                id: 'build-validate',
                title: 'Construir y validar',
                description: 'Agentes, revisión y pruebas',
            },
        ],
    },
    en: {
        heading: 'About',
        terminalTitle: 'Marco Vega · About',
        summaryLabel: 'profile.summary',
        workflowLabel: 'workflow.status',
        terminalIntro: [
            'I am an AI Engineer focused on orchestrating AI agents to build software.',
            'My background is Full Stack, with deeper experience in backend engineering and Laravel.',
            'I build business applications, agents, and AI-assisted copilots.',
        ],
        approach: [
            {
                id: 'understand',
                title: 'Understand',
                description: 'Domain & requirements',
            },
            {
                id: 'define',
                title: 'Define',
                description: 'Specification & architecture',
            },
            {
                id: 'build-validate',
                title: 'Build & Validate',
                description: 'Agents, review & testing',
            },
        ],
    },
};
