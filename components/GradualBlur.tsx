import React, { CSSProperties, useEffect, useRef, useState, useMemo, PropsWithChildren } from 'react';

type GradualBlurProps = PropsWithChildren<{
    position?: 'top' | 'bottom';
    strength?: number;
    height?: string;
    divCount?: number;
    animated?: boolean | 'scroll';
    duration?: string;
    opacity?: number;
    preset?: 'subtle' | 'intense' | 'smooth';
    className?: string;
}>;

const DEFAULT_CONFIG = {
    position: 'bottom' as const,
    strength: 2,
    height: '6rem',
    divCount: 5,
    animated: false,
    duration: '0.3s',
    opacity: 1,
    className: ''
};

const PRESETS = {
    subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
    intense: { height: '10rem', strength: 4, divCount: 8 },
    smooth: { height: '8rem', divCount: 10 }
};

const useIntersectionObserver = (ref: React.RefObject<HTMLDivElement | null>, shouldObserve: boolean = false) => {
    const [isVisible, setIsVisible] = useState(!shouldObserve);

    useEffect(() => {
        if (!shouldObserve || !ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, shouldObserve]);

    return isVisible;
};

const GradualBlur: React.FC<GradualBlurProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const config = useMemo(() => {
        const presetConfig = props.preset ? PRESETS[props.preset] : {};
        return { ...DEFAULT_CONFIG, ...presetConfig, ...props };
    }, [props]);

    const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

    const blurDivs = useMemo(() => {
        const divs: React.ReactNode[] = [];
        const increment = 100 / config.divCount;

        for (let i = 1; i <= config.divCount; i++) {
            const progress = i / config.divCount;
            const blurValue = 0.0625 * (progress * config.divCount + 1) * config.strength;

            const p1 = Math.round((increment * i - increment) * 10) / 10;
            const p2 = Math.round(increment * i * 10) / 10;
            const p3 = Math.round((increment * i + increment) * 10) / 10;
            const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

            let gradient = `transparent ${p1}%, black ${p2}%`;
            if (p3 <= 100) gradient += `, black ${p3}%`;
            if (p4 <= 100) gradient += `, transparent ${p4}%`;

            const direction = config.position === 'top' ? 'to top' : 'to bottom';

            const divStyle: CSSProperties = {
                maskImage: `linear-gradient(${direction}, ${gradient})`,
                WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
                backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
                opacity: config.opacity,
                transition: config.animated && config.animated !== 'scroll'
                    ? `backdrop-filter ${config.duration} ease-out`
                    : undefined
            };

            divs.push(<div key={i} className="absolute inset-0" style={divStyle} />);
        }

        return divs;
    }, [config]);

    const containerStyle: CSSProperties = useMemo(() => {
        return {
            position: 'absolute',
            pointerEvents: 'none',
            opacity: isVisible ? 1 : 0,
            transition: config.animated ? `opacity ${config.duration} ease-out` : undefined,
            height: config.height,
            width: '100%',
            [config.position]: 0,
            left: 0,
            right: 0,
            zIndex: 10
        };
    }, [config, isVisible]);

    return (
        <div
            ref={containerRef}
            className={`gradual-blur relative isolate ${config.className}`}
            style={containerStyle}
        >
            <div className="relative w-full h-full">{blurDivs}</div>
            {props.children && <div className="relative">{props.children}</div>}
        </div>
    );
};

export default React.memo(GradualBlur);
