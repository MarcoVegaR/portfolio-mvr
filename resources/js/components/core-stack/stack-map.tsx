import type {
    StackGroup,
    StackGroupId,
    StackTechnology,
    SupportCluster,
} from '@/data/core-stack';
import type { Locale } from '@/types/foundation';

import styles from './core-stack.module.css';

type StackMapProps = {
    activeGroupId: StackGroupId | null;
    groups: readonly StackGroup[];
    hasEntered: boolean;
    isPaused: boolean;
    locale: Locale;
    onToggle: (groupId: StackGroupId) => void;
    onToggleMotion: () => void;
    pauseMotion: string;
    resumeMotion: string;
    supportGroup: StackGroup;
    supportTitle: string;
    systemOnline: string;
};

function SignalTrace() {
    return (
        <span aria-hidden="true" className={styles.signalTrace}>
            <span />
            <span />
            <span />
        </span>
    );
}

function TechnologyList({
    technologies,
}: {
    technologies: readonly StackTechnology[];
}) {
    return (
        <ul className={styles.technologyList}>
            {technologies.map((technology) => (
                <li
                    className={
                        technology.isHighlighted
                            ? styles.highlightedTechnology
                            : undefined
                    }
                    key={technology.id}
                    data-stack-technology={technology.id}
                >
                    <span aria-hidden="true" className={styles.bullet} />
                    <span className="wrap-break-word">{technology.name}</span>
                </li>
            ))}
        </ul>
    );
}

function PrimaryCard({
    activeGroupId,
    group,
    locale,
    onToggle,
    number,
}: {
    activeGroupId: StackGroupId | null;
    group: StackGroup;
    locale: Locale;
    number: string;
    onToggle: (groupId: StackGroupId) => void;
}) {
    const isActive = activeGroupId === group.id;

    return (
        <article
            className={`${styles.primaryCard} ${isActive ? styles.activeCard : ''}`}
            data-active={isActive ? 'true' : 'false'}
            data-stack-group={group.id}
            data-stack-priority={group.priority}
        >
            <header className={styles.cardHeader}>
                <h3>
                    <button
                        aria-pressed={isActive}
                        className={styles.cardButton}
                        onClick={() => onToggle(group.id)}
                        type="button"
                    >
                        <span>{number}</span>
                        <span>{group.title[locale]}</span>
                    </button>
                </h3>
                <span aria-hidden="true" className={styles.ellipsis}>
                    ···
                </span>
            </header>
            <TechnologyList technologies={group.technologies} />
            <div className={styles.signalStatus}>
                <span>SIGNAL LINK</span>
                <SignalTrace />
            </div>
        </article>
    );
}

function SystemTerminal({
    isPaused,
    onToggleMotion,
    pauseMotion,
    resumeMotion,
    systemOnline,
}: {
    isPaused: boolean;
    onToggleMotion: () => void;
    pauseMotion: string;
    resumeMotion: string;
    systemOnline: string;
}) {
    return (
        <div className={styles.systemTerminal}>
            <button
                aria-label={isPaused ? resumeMotion : pauseMotion}
                aria-pressed={isPaused}
                className={styles.terminalButton}
                onClick={onToggleMotion}
                type="button"
            >
                <span aria-hidden="true">&gt;_</span>
            </button>
            <span className={styles.terminalStatus}>{systemOnline}</span>
            <span className={styles.pauseHint} aria-hidden="true">
                {isPaused ? '||' : '▶'}
            </span>
        </div>
    );
}

function ClusterGlyph({ clusterId }: { clusterId: SupportCluster['id'] }) {
    return (
        <svg
            aria-hidden="true"
            className={styles.clusterGlyph}
            viewBox="0 0 24 24"
        >
            {clusterId === 'architecture-runtime' && (
                <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v9m8-4.5-8 4.5m0 0-8-4.5" />
            )}
            {clusterId === 'delivery-infrastructure' && (
                <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6 11.5 3.25 3.25 0 0 0 7 18Zm5-8v7m-3-3 3 3 3-3" />
            )}
            {clusterId === 'quality-observability' && (
                <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Zm-3 9 2 2 4-4" />
            )}
        </svg>
    );
}

function SupportCluster({
    cluster,
    locale,
}: {
    cluster: SupportCluster;
    locale: Locale;
}) {
    return (
        <article className={styles.supportCluster}>
            <h4>
                <ClusterGlyph clusterId={cluster.id} />
                <span>{cluster.title[locale]}</span>
            </h4>
            <TechnologyList technologies={cluster.technologies} />
            <div className={styles.signalStatus}>
                <span>SIGNAL LINK</span>
                <SignalTrace />
            </div>
        </article>
    );
}

export default function StackMap({
    activeGroupId,
    groups,
    hasEntered,
    isPaused,
    locale,
    onToggle,
    onToggleMotion,
    pauseMotion,
    resumeMotion,
    supportGroup,
    supportTitle,
    systemOnline,
}: StackMapProps) {
    const isActive = (groupId: StackGroupId): boolean =>
        activeGroupId === null || activeGroupId === groupId;
    const supportClusters = supportGroup.supportClusters ?? [];
    const [aiGroup, applicationGroup] = groups;

    if (!aiGroup || !applicationGroup) {
        return null;
    }

    return (
        <div
            className={styles.mapStage}
            data-map-entered={hasEntered ? 'true' : 'false'}
        >
            <svg
                aria-hidden="true"
                className={styles.circuitLayer}
                focusable="false"
                preserveAspectRatio="none"
                viewBox="0 0 1200 760"
            >
                <path
                    className={styles.circuitBase}
                    d="M390 170h90l120 130m210-130h-90L600 300m0 40v168"
                />
                <path
                    className={`${styles.circuitSignal} ${isActive('ai-engineering') ? styles.circuitActive : ''}`}
                    d="M390 170h90l120 130"
                />
                <path
                    className={`${styles.circuitSignal} ${isActive('application-engineering') ? styles.circuitActive : ''}`}
                    d="M810 170h-90L600 300"
                />
                <path
                    className={`${styles.circuitSignal} ${isActive('complementary') ? styles.circuitActive : ''}`}
                    d="M600 340v168"
                />
                <circle
                    className={styles.circuitNode}
                    cx="600"
                    cy="300"
                    r="5"
                />
                <circle
                    className={styles.circuitNode}
                    cx="390"
                    cy="170"
                    r="4"
                />
                <circle
                    className={styles.circuitNode}
                    cx="810"
                    cy="170"
                    r="4"
                />
                <circle
                    className={styles.circuitNode}
                    cx="600"
                    cy="508"
                    r="4"
                />
            </svg>

            <div className={styles.primaryCards}>
                <PrimaryCard
                    activeGroupId={activeGroupId}
                    group={aiGroup}
                    locale={locale}
                    number="01"
                    onToggle={onToggle}
                />
                <PrimaryCard
                    activeGroupId={activeGroupId}
                    group={applicationGroup}
                    locale={locale}
                    number="02"
                    onToggle={onToggle}
                />
            </div>

            <SystemTerminal
                isPaused={isPaused}
                onToggleMotion={onToggleMotion}
                pauseMotion={pauseMotion}
                resumeMotion={resumeMotion}
                systemOnline={systemOnline}
            />

            <article
                className={`${styles.supportPanel} ${activeGroupId === 'complementary' ? styles.activeCard : ''}`}
                data-active={
                    activeGroupId === 'complementary' ? 'true' : 'false'
                }
                data-stack-group="complementary"
                data-stack-priority="secondary"
            >
                <header className={styles.cardHeader}>
                    <h3>
                        <button
                            aria-pressed={activeGroupId === 'complementary'}
                            className={styles.cardButton}
                            onClick={() => onToggle('complementary')}
                            type="button"
                        >
                            <span>03</span>
                            <span>COMPLEMENTARY</span>
                            <span className={styles.supportTitle}>
                                / {supportTitle}
                            </span>
                        </button>
                    </h3>
                    <span aria-hidden="true" className={styles.ellipsis}>
                        ···
                    </span>
                </header>
                <div className={styles.supportClusters}>
                    {supportClusters.map((cluster) => (
                        <SupportCluster
                            cluster={cluster}
                            key={cluster.id}
                            locale={locale}
                        />
                    ))}
                </div>
            </article>
        </div>
    );
}
