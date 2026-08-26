import { useEffect, useRef } from 'react';

type MatrixRainProps = {
    active: boolean;
    className?: string;
    density?: 'regular' | 'dense';
    hideOnMobile?: boolean;
    paused?: boolean;
};

type RainColumn = {
    glyphs: string[];
    length: number;
    speed: number;
    y: number;
};

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺ0123456789:;<>+-*/';

function randomGlyph(): string {
    return GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? '0';
}

function randomGlyphs(length: number): string[] {
    return Array.from({ length }, () => randomGlyph());
}

export default function MatrixRain({
    active,
    className = '',
    density = 'regular',
    hideOnMobile = true,
    paused = false,
}: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const activeRef = useRef(active);
    const pausedRef = useRef(paused);
    const startRef = useRef<(() => void) | null>(null);
    const stopRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        activeRef.current = active;
        pausedRef.current = paused;

        if (active && !paused) {
            startRef.current?.();
        } else {
            stopRef.current?.();
        }
    }, [active, paused]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas?.parentElement;

        if (!canvas || !parent) {
            return;
        }

        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        const motionQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        );
        const mobileQuery = window.matchMedia('(max-width: 639px)');
        const columns: RainColumn[] = [];
        let animationFrame = 0;
        let columnWidth = density === 'dense' ? 12 : 15;
        let height = 0;
        let width = 0;
        let inViewport = false;
        let lastFrame = 0;

        const resize = () => {
            const rect = parent.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            width = rect.width;
            height = rect.height;
            columnWidth = density === 'dense' ? 12 : 15;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            columns.length = 0;

            for (
                let index = 0;
                index < Math.ceil(width / columnWidth);
                index += 1
            ) {
                const length = 5 + Math.floor(Math.random() * 8);

                columns.push({
                    glyphs: randomGlyphs(length),
                    length,
                    speed:
                        (density === 'dense' ? 0.14 : 0.16) +
                        Math.random() * 0.24,
                    y: Math.random() * (height / columnWidth) - 10,
                });
            }

            context.clearRect(0, 0, width, height);
        };

        const draw = (timestamp: number) => {
            animationFrame = 0;

            if (
                !activeRef.current ||
                pausedRef.current ||
                !inViewport ||
                motionQuery.matches ||
                mobileQuery.matches ||
                document.hidden
            ) {
                return;
            }

            if (timestamp - lastFrame < 72) {
                animationFrame = window.requestAnimationFrame(draw);

                return;
            }

            lastFrame = timestamp;
            context.clearRect(0, 0, width, height);
            context.font = `600 ${columnWidth}px ui-monospace, monospace`;
            context.textAlign = 'center';

            columns.forEach((column, index) => {
                const x = index * columnWidth + columnWidth / 2;

                for (
                    let trailIndex = 0;
                    trailIndex < column.length;
                    trailIndex += 1
                ) {
                    const y = (column.y - trailIndex) * columnWidth;

                    if (y < 0 || y > height + columnWidth) {
                        continue;
                    }

                    const opacity = 0.12 * (1 - trailIndex / column.length);
                    context.fillStyle = `rgb(241 184 74 / ${opacity})`;
                    context.fillText(column.glyphs[trailIndex] ?? '0', x, y);
                }

                context.fillStyle = 'rgb(252 212 100 / 0.72)';
                context.fillText(
                    column.glyphs[0] ?? '0',
                    x,
                    column.y * columnWidth,
                );
                column.y += column.speed;

                if (Math.random() > 0.93) {
                    const glyphIndex = Math.floor(
                        Math.random() * column.length,
                    );
                    column.glyphs[glyphIndex] = randomGlyph();
                }

                if (
                    column.y * columnWidth - column.length * columnWidth >
                    height
                ) {
                    const length = 5 + Math.floor(Math.random() * 8);

                    column.y = Math.random() * -12;
                    column.length = length;
                    column.glyphs = randomGlyphs(length);
                    column.speed =
                        (density === 'dense' ? 0.14 : 0.16) +
                        Math.random() * 0.24;
                }
            });

            animationFrame = window.requestAnimationFrame(draw);
        };

        const stop = () => {
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
                animationFrame = 0;
            }
        };

        const start = () => {
            if (
                animationFrame ||
                !activeRef.current ||
                pausedRef.current ||
                !inViewport ||
                motionQuery.matches ||
                mobileQuery.matches
            ) {
                return;
            }

            animationFrame = window.requestAnimationFrame(draw);
        };

        const observer = new IntersectionObserver(([entry]) => {
            inViewport = entry?.isIntersecting ?? false;

            if (inViewport) {
                start();
            } else {
                stop();
            }
        });
        const resizeObserver = new ResizeObserver(resize);
        const handleVisibility = () => {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        };
        const handlePreference = () => {
            if (motionQuery.matches || mobileQuery.matches) {
                stop();
            } else {
                start();
            }
        };

        startRef.current = start;
        stopRef.current = stop;
        resize();
        observer.observe(parent);
        resizeObserver.observe(parent);
        document.addEventListener('visibilitychange', handleVisibility);
        motionQuery.addEventListener('change', handlePreference);
        mobileQuery.addEventListener('change', handlePreference);

        return () => {
            stop();
            startRef.current = null;
            stopRef.current = null;
            observer.disconnect();
            resizeObserver.disconnect();
            document.removeEventListener('visibilitychange', handleVisibility);
            motionQuery.removeEventListener('change', handlePreference);
            mobileQuery.removeEventListener('change', handlePreference);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={`matrix-rain pointer-events-none absolute inset-0 ${hideOnMobile ? 'max-[639px]:hidden' : ''} ${className}`}
        />
    );
}
