import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';

import PageContainer from '@/components/layout/page-container';
import { EXPERIENCE_COPY, EXPERIENCE_ENTRIES } from '@/data/experience';
import type { ExperienceEntry } from '@/data/experience';
import { useLocale } from '@/hooks/use-locale';

import styles from './experience.module.css';

function ExperiencePanel({
    entry,
    locale,
    copy,
    isActive,
}: {
    entry: ExperienceEntry;
    locale: 'es' | 'en';
    copy: (typeof EXPERIENCE_COPY)['es'];
    isActive: boolean;
}) {
    return (
        <section
            aria-labelledby={`experience-tab-${entry.id}`}
            className={styles.panel}
            data-active={isActive}
            hidden={!isActive}
            id={`experience-panel-${entry.id}`}
            role="tabpanel"
            tabIndex={0}
        >
            <div className={styles.panelGrid}>
                <div className={styles.identity}>
                    <p className={styles.organization}>
                        {entry.organization[locale]}
                    </p>
                    <h3>{entry.role[locale]}</h3>
                    <p className={styles.period}>
                        <span>{entry.period.label[locale]}</span>
                        <span>{entry.location?.[locale]}</span>
                    </p>
                    {entry.parallelRoleNote && (
                        <p className={styles.parallelNote}>
                            {entry.parallelRoleNote[locale]}
                        </p>
                    )}
                    <p className={styles.summary}>{entry.summary[locale]}</p>
                </div>
                <div className={styles.highlights}>
                    <h4>{copy.highlightsLabel}</h4>
                    <ul>
                        {entry.highlights.map((highlight, highlightIndex) => (
                            <li key={`${entry.id}-${highlightIndex}`}>
                                <span aria-hidden="true">→</span>
                                <div>
                                    {highlight.lead && (
                                        <strong>
                                            {highlight.lead[locale]}
                                        </strong>
                                    )}
                                    <p>{highlight[locale]}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function OrganizationBadge({ id }: { id: ExperienceEntry['id'] }) {
    if (id === 'caracoders') {
        return (
            <svg
                aria-hidden="true"
                className={styles.tabMark}
                viewBox="0 0 24 24"
            >
                <path d="M8 5 3.5 12 8 19M16 5l4.5 7-4.5 7M13.5 4l-3 16" />
            </svg>
        );
    }

    if (id === 'fvf') {
        return (
            <svg
                aria-hidden="true"
                className={styles.tabMark}
                viewBox="0 0 24 24"
            >
                <path d="M4 6h16M4 12h16M4 18h16M7 4v16M17 4v16" />
            </svg>
        );
    }

    return (
        <svg aria-hidden="true" className={styles.tabMark} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.8 12h16.4M12 3.5c2.4 2.3 3.6 5.1 3.6 8.5s-1.2 6.2-3.6 8.5M12 3.5c-2.4 2.3-3.6 5.1-3.6 8.5s1.2 6.2 3.6 8.5" />
        </svg>
    );
}

export default function Experience() {
    const { locale } = useLocale();
    const copy = EXPERIENCE_COPY[locale];
    const sectionRef = useRef<HTMLElement>(null);
    const [hasEntered, setHasEntered] = useState(false);
    const [hasSelectedTab, setHasSelectedTab] = useState(false);
    const [activeId, setActiveId] =
        useState<ExperienceEntry['id']>('caracoders');
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const activeIndex = EXPERIENCE_ENTRIES.findIndex(
        (entry) => entry.id === activeId,
    );

    useEffect(() => {
        const section = sectionRef.current;

        if (!section || !('IntersectionObserver' in window)) {
            setHasEntered(true);

            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    function selectTab(index: number, moveFocus = false): void {
        const normalizedIndex =
            (index + EXPERIENCE_ENTRIES.length) % EXPERIENCE_ENTRIES.length;
        const entry = EXPERIENCE_ENTRIES[normalizedIndex];

        setActiveId(entry.id);
        setHasSelectedTab(true);

        if (moveFocus) {
            tabRefs.current[normalizedIndex]?.focus();
        }
    }

    function handleTabKeyDown(
        event: KeyboardEvent<HTMLButtonElement>,
        index: number,
    ): void {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            selectTab(index + 1, true);
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            selectTab(index - 1, true);
        }

        if (event.key === 'Home') {
            event.preventDefault();
            selectTab(0, true);
        }

        if (event.key === 'End') {
            event.preventDefault();
            selectTab(EXPERIENCE_ENTRIES.length - 1, true);
        }
    }

    return (
        <section
            aria-labelledby="experience-heading"
            className={styles.section}
            data-entered={hasEntered}
            id="experience"
            ref={sectionRef}
        >
            <div aria-hidden="true" className={styles.matrixAmbient}>
                <span>0101 1001 0110 0011 1010</span>
                <span>0011 // 0101</span>
            </div>
            <PageContainer>
                <header className={styles.intro}>
                    <div className={styles.eyebrowRow}>
                        <span>{copy.eyebrow}</span>
                        <i />
                        <span className={styles.traceLabel}>
                            {copy.traceLabel}
                        </span>
                    </div>
                    <h2 id="experience-heading">{copy.heading}</h2>
                    <p>{copy.intro}</p>
                </header>

                <div className={styles.tabsHeader} data-active-entry={activeId}>
                    <div
                        aria-label={copy.tabsLabel}
                        aria-orientation="horizontal"
                        className={styles.tabList}
                        role="tablist"
                    >
                        {EXPERIENCE_ENTRIES.map((entry, index) => (
                            <button
                                aria-controls={`experience-panel-${entry.id}`}
                                aria-selected={activeId === entry.id}
                                className={styles.tab}
                                id={`experience-tab-${entry.id}`}
                                key={entry.id}
                                onClick={() => selectTab(index)}
                                onKeyDown={(event) =>
                                    handleTabKeyDown(event, index)
                                }
                                ref={(element) => {
                                    tabRefs.current[index] = element;
                                }}
                                role="tab"
                                tabIndex={activeId === entry.id ? 0 : -1}
                                type="button"
                            >
                                <OrganizationBadge id={entry.id} />
                                {entry.tabLabel[locale]}
                            </button>
                        ))}
                        <span
                            aria-hidden="true"
                            className={styles.tabIndicator}
                            style={
                                { '--tab-index': activeIndex } as CSSProperties
                            }
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        className={styles.concurrencyBridge}
                    >
                        <span>FVF</span>
                        <i />
                        <span>FIFA</span>
                        <small>2012—2018</small>
                    </div>
                </div>

                <div
                    className={styles.panels}
                    data-has-selected-tab={hasSelectedTab}
                >
                    {EXPERIENCE_ENTRIES.map((entry) => (
                        <ExperiencePanel
                            copy={copy}
                            entry={entry}
                            isActive={activeId === entry.id}
                            key={entry.id}
                            locale={locale}
                        />
                    ))}
                </div>
            </PageContainer>
        </section>
    );
}
