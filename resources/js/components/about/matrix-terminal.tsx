import { useEffect, useState } from 'react';

import MatrixRain from '@/components/about/matrix-rain';
import type { AboutCopy } from '@/data/about';

type MatrixTerminalProps = {
    active: boolean;
    copy: AboutCopy;
};

export default function MatrixTerminal({ active, copy }: MatrixTerminalProps) {
    const command = '~/about > trace profile';
    const [visibleCommand, setVisibleCommand] = useState('');

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        if (!active && !reducedMotion) {
            return;
        }

        if (reducedMotion) {
            const frame = window.requestAnimationFrame(() =>
                setVisibleCommand(command),
            );

            return () => window.cancelAnimationFrame(frame);
        }

        let character = 0;
        const interval = window.setInterval(() => {
            character += 1;
            setVisibleCommand(command.slice(0, character));

            if (character === command.length) {
                window.clearInterval(interval);
            }
        }, 24);

        return () => window.clearInterval(interval);
    }, [active]);

    return (
        <div
            className={`matrix-terminal relative ${active ? 'matrix-terminal-active' : ''}`}
        >
            <div className="matrix-chassis">
                <div className="matrix-bezel">
                    <div className="matrix-windowbar">
                        <div
                            className="matrix-window-lights"
                            aria-hidden="true"
                        >
                            <span className="matrix-window-light matrix-window-light-close" />
                            <span className="matrix-window-light matrix-window-light-minimize" />
                            <span className="matrix-window-light matrix-window-light-maximize" />
                        </div>
                        <span className="matrix-window-title">
                            {copy.terminalTitle}
                        </span>
                    </div>
                    <div className="matrix-screen relative overflow-hidden px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
                        <MatrixRain active={active} />
                        <div aria-hidden="true" className="matrix-glass" />
                        <div className="relative z-10">
                            <div className="font-mono text-xs text-emerald-100/75 sm:text-sm">
                                <p>
                                    <span className="sr-only">{command}</span>
                                    <span className="text-emerald-300">
                                        {visibleCommand}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="matrix-cursor ml-1 text-emerald-200"
                                    >
                                        █
                                    </span>
                                </p>
                            </div>

                            <h3
                                className="matrix-output matrix-output-title mt-10 font-mono text-base font-semibold tracking-[0.14em] text-emerald-100 uppercase sm:text-lg"
                                id="approach-heading"
                            >
                                {copy.summaryLabel}
                            </h3>
                            <span
                                aria-hidden="true"
                                className="matrix-rule mt-5 block h-px w-10 bg-emerald-300"
                            />

                            <div className="mt-6 max-w-5xl space-y-2 font-mono text-sm leading-7 text-emerald-50/90 sm:text-base sm:leading-8">
                                {copy.terminalIntro.map((line, index) => (
                                    <p
                                        className="matrix-output matrix-output-line"
                                        key={line}
                                        style={{
                                            animationDelay: `${420 + index * 80}ms`,
                                        }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>

                            <div className="matrix-output matrix-output-workflow mt-8 border-t border-dashed border-emerald-300/35 pt-6">
                                <h4 className="font-mono text-base font-semibold tracking-[0.12em] text-emerald-300 uppercase sm:text-lg">
                                    {copy.workflowLabel}
                                </h4>
                                <span
                                    aria-hidden="true"
                                    className="matrix-rule mt-4 block h-px w-10 bg-emerald-300"
                                />

                                <ol className="mt-6 grid gap-4 font-mono text-sm sm:text-base">
                                    {copy.approach.map((step, index) => (
                                        <li
                                            className="matrix-output matrix-output-step grid gap-1 sm:grid-cols-[5rem_17rem_minmax(0,1fr)] sm:items-baseline sm:gap-3"
                                            key={step.id}
                                            style={{
                                                animationDelay: `${780 + index * 80}ms`,
                                            }}
                                        >
                                            <span className="text-emerald-300">
                                                [
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                                ]
                                            </span>
                                            <span className="font-semibold text-emerald-100 uppercase">
                                                {step.title}
                                            </span>
                                            <span className="text-emerald-100/75">
                                                <span className="text-emerald-300/70">
                                                    |-&gt;
                                                </span>{' '}
                                                {step.description}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <p className="matrix-output matrix-output-footer mt-8 font-mono text-xs text-emerald-300/80">
                                ~/
                                <span
                                    aria-hidden="true"
                                    className="matrix-cursor ml-1"
                                >
                                    █
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
