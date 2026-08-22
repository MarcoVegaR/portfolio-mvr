import { useEffect, useRef, useState } from 'react';

type HeroMediaState =
    'initial-poster' | 'loading' | 'playing' | 'final-still' | 'fallback';

type NavigatorWithConnection = Navigator & {
    connection?: {
        saveData?: boolean;
    };
};

const mediaAssets = {
    initialDesktop: '/assets/hero/hero-poster-initial-desktop.webp?v=f4423e74',
    finalDesktop: '/assets/hero/hero-poster-final-desktop.webp?v=27d5aec6',
    finalTablet: '/assets/hero/hero-poster-final-tablet.webp?v=2089e11d',
    finalMobile: '/assets/hero/hero-poster-final-mobile.webp?v=3ca54a6c',
    video: '/assets/hero/hero-intro-desktop.mp4?v=9a542b47',
};

function ResponsivePoster({ isFinal }: { isFinal: boolean }) {
    const desktopPoster = isFinal
        ? mediaAssets.finalDesktop
        : mediaAssets.initialDesktop;

    return (
        <picture className="absolute inset-0 top-20 block h-[calc(100%-5rem)]">
            <source
                media="(min-width: 1024px) and (prefers-reduced-motion: reduce)"
                srcSet={mediaAssets.finalDesktop}
                type="image/webp"
            />
            <source
                media="(max-width: 639px)"
                srcSet={mediaAssets.finalMobile}
                type="image/webp"
            />
            <source
                media="(min-width: 640px) and (max-width: 1023px)"
                srcSet={mediaAssets.finalTablet}
                type="image/webp"
            />
            <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                decoding="async"
                fetchPriority="high"
                height="720"
                loading="eager"
                src={desktopPoster}
                width="1280"
            />
        </picture>
    );
}

function canPlayHero(): boolean {
    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
    ).matches;
    const desktopViewport = window.matchMedia('(min-width: 1024px)').matches;
    const saveData =
        'connection' in navigator &&
        (navigator as NavigatorWithConnection).connection?.saveData === true;

    return desktopViewport && !reducedMotion && !saveData;
}

export default function HeroVisual() {
    const [mediaState, setMediaState] =
        useState<HeroMediaState>('initial-poster');
    const [videoMounted, setVideoMounted] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [finalPosterReady, setFinalPosterReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const isFinal = mediaState === 'final-still' || mediaState === 'fallback';

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            if (document.hidden) {
                return;
            }

            if (canPlayHero()) {
                setVideoMounted(true);
                setVideoEnded(false);
                setMediaState('loading');
            } else if (!canPlayHero()) {
                setMediaState('final-still');
            }
        });

        return () => window.cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            const video = videoRef.current;

            if (document.hidden) {
                video?.pause();

                return;
            }

            if (mediaState === 'initial-poster' && canPlayHero()) {
                setVideoMounted(true);
                setVideoEnded(false);
                setMediaState('loading');
            }

            if (
                video &&
                (mediaState === 'loading' || mediaState === 'playing')
            ) {
                void video.play().catch(() => {
                    setVideoMounted(false);
                    setVideoEnded(false);
                    setMediaState('fallback');
                });
            }
        };

        const handleResize = () => {
            if ((mediaState === 'loading' || videoEnded) && !canPlayHero()) {
                setVideoMounted(false);
                setVideoEnded(false);
                setMediaState('final-still');
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            );
            window.removeEventListener('resize', handleResize);
        };
    }, [mediaState, videoEnded]);

    useEffect(() => {
        const visual = visualRef.current;

        if (!visual) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            const video = videoRef.current;

            if (!video) {
                return;
            }

            if (!entry.isIntersecting) {
                video.pause();

                return;
            }

            if (
                !videoEnded &&
                (mediaState === 'loading' || mediaState === 'playing')
            ) {
                void video.play().catch(() => {
                    setVideoMounted(false);
                    setVideoEnded(false);
                    setMediaState('fallback');
                });
            }
        });

        observer.observe(visual);

        return () => observer.disconnect();
    }, [mediaState, videoEnded]);

    const playVideo = () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        void video.play().then(
            () => setMediaState('playing'),
            () => {
                setVideoMounted(false);
                setVideoEnded(false);
                setMediaState('fallback');
            },
        );
    };

    return (
        <div
            ref={visualRef}
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden bg-hero-system"
        >
            <ResponsivePoster isFinal={isFinal} />
            {videoMounted && (
                <video
                    ref={videoRef}
                    aria-hidden="true"
                    className={`absolute inset-0 top-20 size-full h-[calc(100%-5rem)] object-cover transition-opacity duration-500 ${mediaState === 'playing' ? 'opacity-100' : 'opacity-0'}`}
                    muted
                    onCanPlay={playVideo}
                    onEnded={() => {
                        setVideoEnded(true);

                        if (finalPosterReady) {
                            setMediaState('final-still');
                        }
                    }}
                    onError={() => {
                        setVideoMounted(false);
                        setVideoEnded(false);
                        setMediaState('fallback');
                    }}
                    onTransitionEnd={(event) => {
                        if (
                            event.propertyName === 'opacity' &&
                            isFinal &&
                            videoEnded
                        ) {
                            setVideoMounted(false);
                        }
                    }}
                    playsInline
                    poster={mediaAssets.initialDesktop}
                    preload="metadata"
                    src={mediaAssets.video}
                    tabIndex={-1}
                />
            )}
            {mediaState === 'playing' && (
                <img
                    alt=""
                    className="pointer-events-none absolute size-px opacity-0"
                    decoding="async"
                    height="941"
                    onLoad={() => {
                        setFinalPosterReady(true);

                        if (videoEnded) {
                            setMediaState('final-still');
                        }
                    }}
                    src={mediaAssets.finalDesktop}
                    width="1672"
                />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_18_54_/_0.98)_0%,rgb(0_18_54_/_0.94)_34%,rgb(0_18_54_/_0.78)_48%,rgb(0_18_54_/_0.28)_64%,transparent_78%),linear-gradient(0deg,rgb(0_18_54_/_0.52),transparent_58%)]" />
        </div>
    );
}
