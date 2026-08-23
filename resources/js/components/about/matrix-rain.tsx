import { useEffect, useRef } from 'react';

type MatrixRainProps = {
    active: boolean;
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

export default function MatrixRain({ active }: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        const columns: RainColumn[] = [];
        let animationFrame = 0;
        let columnWidth = 14;
        let height = 0;
        let width = 0;
        let inViewport = false;
        let lastFrame = 0;

        const resize = () => {
            const rect = parent.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            width = rect.width;
            height = rect.height;
            columnWidth = Math.max(13, Math.min(17, width / 76));
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
                    speed: 0.16 + Math.random() * 0.24,
                    y: Math.random() * (height / columnWidth) - 10,
                });
            }

            context.clearRect(0, 0, width, height);
        };

        const draw = (timestamp: number) => {
            animationFrame = window.requestAnimationFrame(draw);

            if (
                !active ||
                !inViewport ||
                reducedMotion ||
                document.hidden ||
                timestamp - lastFrame < 72
            ) {
                return;
            }

            lastFrame = timestamp;
            context.fillStyle = 'rgb(2 5 2 / 0.14)';
            context.fillRect(0, 0, width, height);
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
                    context.fillStyle = `rgb(75 220 110 / ${opacity})`;
                    context.fillText(column.glyphs[trailIndex] ?? '0', x, y);
                }

                context.fillStyle = 'rgb(205 255 215 / 0.58)';
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
                    column.speed = 0.16 + Math.random() * 0.24;
                }
            });
        };

        const observer = new IntersectionObserver(([entry]) => {
            inViewport = entry?.isIntersecting ?? false;
        });
        const resizeObserver = new ResizeObserver(resize);

        resize();
        observer.observe(parent);
        resizeObserver.observe(parent);
        animationFrame = window.requestAnimationFrame(draw);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            observer.disconnect();
            resizeObserver.disconnect();
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="matrix-rain pointer-events-none absolute inset-0 max-[639px]:hidden"
        />
    );
}
