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
                            <div className="font-mono text-xs text-[#f1b84a]/90 sm:text-sm">
                                <p>
                                    <span className="sr-only">{command}</span>
                                    <span className="text-[#f1b84a]">
                                        {visibleCommand}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="matrix-cursor ml-1 text-[#fcd464]"
                                    >
                                        █
                                    </span>
                                </p>
                            </div>

                            <h3
                                className="matrix-output matrix-output-title mt-10 font-mono text-base font-semibold tracking-[0.14em] text-[#fcd464] uppercase sm:text-lg"
                                id="approach-heading"
                            >
                                {copy.summaryLabel}
                            </h3>
                            <span
                                aria-hidden="true"
                                className="matrix-rule mt-5 block h-px w-10 bg-[#fcd464]"
                            />

                            <div className="mt-6 max-w-5xl space-y-2 font-mono text-sm leading-7 text-[#f1b84a]/95 sm:text-base sm:leading-8">
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

                            <div className="matrix-output matrix-output-workflow mt-8 border-t border-dashed border-[#f1b84a]/45 pt-6">
                                <h4 className="font-mono text-base font-semibold tracking-[0.12em] text-[#fcd464] uppercase sm:text-lg">
                                    {copy.workflowLabel}
                                </h4>
                                <span
                                    aria-hidden="true"
                                    className="matrix-rule mt-4 block h-px w-10 bg-[#fcd464]"
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
                                            <span className="text-[#f1b84a]">
                                                [
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                                ]
                                            </span>
                                            <span className="font-semibold text-[#fcd464] uppercase">
                                                {step.title}
                                            </span>
                                            <span className="text-[#f1b84a]/85">
                                                <span className="text-[#f1b84a]/80">
                                                    |-&gt;
                                                </span>{' '}
                                                {step.description}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <p className="matrix-output matrix-output-footer mt-8 font-mono text-xs text-[#f1b84a]/90">
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
