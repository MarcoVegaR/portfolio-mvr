import { useEffect, useRef, useState } from 'react';

import MatrixRain from '@/components/effects/matrix-rain';
import PageContainer from '@/components/layout/page-container';
import { CORE_STACK_COPY, CORE_STACK_GROUPS } from '@/data/core-stack';
import type { StackGroupId } from '@/data/core-stack';
import { useLocale } from '@/hooks/use-locale';

import styles from './core-stack.module.css';
import StackMap from './stack-map';

export default function CoreStack() {
    const { locale } = useLocale();
    const copy = CORE_STACK_COPY[locale];
    const sectionRef = useRef<HTMLElement>(null);
    const [activeGroupId, setActiveGroupId] = useState<StackGroupId | null>(
        null,
    );
    const [hasEntered, setHasEntered] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const primaryGroups = CORE_STACK_GROUPS.filter(
        (group) => group.priority === 'primary',
    );
    const supportGroup = CORE_STACK_GROUPS.find(
        (group) => group.id === 'complementary',
    );

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    function toggleGroup(groupId: StackGroupId): void {
        setActiveGroupId((currentGroupId) =>
            currentGroupId === groupId ? null : groupId,
        );
    }

    if (!supportGroup) {
        return null;
    }

    return (
        <section
            ref={sectionRef}
            aria-labelledby="core-stack-heading"
            className={styles.section}
            data-entered={hasEntered ? 'true' : 'false'}
            data-motion-paused={isPaused ? 'true' : 'false'}
            id="core-stack"
        >
            <div aria-hidden="true" className={styles.bridge} />
            <MatrixRain
                active={hasEntered}
                className={styles.rain}
                density="dense"
                paused={isPaused}
            />
            <div aria-hidden="true" className={styles.scanlines} />

            <PageContainer>
                <header className={styles.intro}>
                    <h2 id="core-stack-heading">{copy.heading}</h2>
                    <span aria-hidden="true" className={styles.introRule} />
                    <p className={styles.description}>{copy.intro}</p>
                </header>

                <StackMap
                    activeGroupId={activeGroupId}
                    groups={primaryGroups}
                    isPaused={isPaused}
                    locale={locale}
                    onToggle={toggleGroup}
                    supportGroup={supportGroup}
                    systemOnline={copy.systemOnline}
                    supportTitle={copy.supportTitle}
                    onToggleMotion={() => setIsPaused((paused) => !paused)}
                    pauseMotion={copy.pauseMotion}
                    resumeMotion={copy.resumeMotion}
                    hasEntered={hasEntered}
                />
            </PageContainer>
        </section>
    );
}
