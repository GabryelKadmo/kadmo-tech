"use client";
import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 8;
const DEFAULT_GLOW_COLOR = '102, 0, 255';
const MOBILE_BREAKPOINT = 768;

// Dados dos serviços customizados
const servicesData = [
    {
        title: 'UI/UX Design',
        description: 'Interfaces intuitivas e modernas com foco na jornada do usuário',
        label: 'Design',
        icon: '🎨'
    },
    {
        title: 'Front-end',
        description: 'Sites performáticos com React, Next.js & Angular',
        label: 'Desenvolvimento',
        icon: '💻'
    },
    {
        title: 'Sistemas Sob Medida',
        description: 'Soluções escaláveis para problemas específicos',
        label: 'Customização',
        icon: '⚙️'
    },
    {
        title: 'Consultoria',
        description: 'Estratégias digitais para seu negócio',
        label: 'Estratégia',
        icon: '🧠'
    },
    {
        title: 'Performance',
        description: 'Otimização e velocidade de aplicações',
        label: 'Velocidade',
        icon: '⚡'
    },
    {
        title: 'Suporte',
        description: 'Manutenção e evolução contínua',
        label: 'Manutenção',
        icon: '🛠️'
    }
];

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'absolute w-1 h-1 rounded-full pointer-events-none z-50';
    el.style.cssText = `
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};

interface ParticleCardProps {
    children: React.ReactNode;
    className?: string;
    disableAnimations?: boolean;
    particleCount?: number;
    glowColor?: string;
    clickEffect?: boolean;
}

const ParticleCard: React.FC<ParticleCardProps> = ({
    children,
    className = '',
    disableAnimations = false,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = false
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLElement[]>([]);
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef<HTMLElement[]>([]);
    const particlesInitialized = useRef(false);

    const initializeParticles = useCallback(() => {
        if (particlesInitialized.current || !cardRef.current) return;

        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () =>
            createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];

        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => {
                    particle.parentNode?.removeChild(particle);
                }
            });
        });
        particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;

        if (!particlesInitialized.current) {
            initializeParticles();
        }

        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;

                const clone = particle.cloneNode(true) as HTMLElement;
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);

                gsap.fromTo(clone,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
                );

                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 60,
                    y: (Math.random() - 0.5) * 60,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to(clone, {
                    opacity: 0.4,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, index * 100);

            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);

    useEffect(() => {
        if (disableAnimations || !cardRef.current) return;

        const element = cardRef.current;

        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            animateParticles();
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();
        };

        const handleClick = (e: MouseEvent) => {
            if (!clickEffect) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height)
            );

            const ripple = document.createElement('div');
            ripple.className = 'absolute rounded-full pointer-events-none z-50';
            ripple.style.cssText = `
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
      `;

            element.appendChild(ripple);

            gsap.fromTo(
                ripple,
                { scale: 0, opacity: 1 },
                {
                    scale: 1,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                }
            );
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('click', handleClick);

        return () => {
            isHoveredRef.current = false;
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('click', handleClick);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, disableAnimations, clickEffect, glowColor]);

    return (
        <div
            ref={cardRef}
            className={`${className} relative overflow-hidden`}
        >
            {children}
        </div>
    );
};

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

interface ServicesBentoProps {
    enableStars?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    particleCount?: number;
    glowColor?: string;
    clickEffect?: boolean;
    spotlightRadius?: number;
    enableSpotlight?: boolean;
    enableTilt?: boolean;
    enableMagnetism?: boolean;
    textAutoHide?: boolean;
}

const ServicesBento: React.FC<ServicesBentoProps> = ({
    enableStars = true,
    enableBorderGlow = true,
    disableAnimations = false,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true
}) => {
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;

    return (
        <div className="w-full max-w-6xl mx-auto p-3">
            {/* Grid Bento responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {servicesData.map((service, index) => {
                    // Layout Bento usando classes responsivas do Tailwind
                    let gridClasses = '';
                    if (index === 2) gridClasses = 'lg:col-span-2 lg:row-span-2'; // Card grande
                    if (index === 3) gridClasses = 'lg:col-span-2 lg:row-span-2'; // Card grande  
                    if (index === 5) gridClasses = 'lg:col-start-4 lg:row-start-3'; // Posição específica

                    const baseClassName = `
            group relative flex flex-col justify-between
            aspect-[4/3] min-h-[200px] w-full p-6 
            rounded-2xl border border-gray-700/50 
            bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80
            backdrop-blur-sm
            transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-xl 
            hover:border-purple-500/40 hover:shadow-purple-500/20
            cursor-pointer
            ${gridClasses}
          `;

                    if (enableStars) {
                        return (
                            <ParticleCard
                                key={index}
                                className={baseClassName}
                                disableAnimations={shouldDisableAnimations}
                                particleCount={particleCount}
                                glowColor={glowColor}
                                clickEffect={clickEffect}
                            >
                                {/* Header com label e ícone */}
                                <div className="flex justify-between items-start gap-3 relative z-10">
                                    <div className="text-sm font-medium text-purple-300/90 bg-purple-500/10 px-3 py-1 rounded-full">
                                        {service.label}
                                    </div>
                                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Conteúdo principal */}
                                <div className="flex flex-col relative z-10 space-y-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-300/90 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Gradiente de fundo sutil */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Borda brilhante no hover */}
                                {enableBorderGlow && (
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                )}

                                {/* Ponto de luz no canto */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                            </ParticleCard>
                        );
                    }

                    return (
                        <div
                            key={index}
                            className={baseClassName}
                        >
                            {/* Header com label e ícone */}
                            <div className="flex justify-between items-start gap-3 relative z-10">
                                <div className="text-sm font-medium text-purple-300/90 bg-purple-500/10 px-3 py-1 rounded-full">
                                    {service.label}
                                </div>
                                <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Conteúdo principal */}
                            <div className="flex flex-col relative z-10 space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-300/90 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Gradiente de fundo sutil */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Borda brilhante no hover */}
                            {enableBorderGlow && (
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            )}

                            {/* Ponto de luz no canto */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServicesBento;
