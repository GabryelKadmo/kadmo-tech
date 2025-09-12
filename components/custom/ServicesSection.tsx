"use client";
import MagicBento from '../MagicBento';

export function ServicesSection() {
    return (
        <section id="services" className="py-20 select-none bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white text-glow-effect">
                    <span className="text-glow-effect">Serviços oferecidos</span>
                </h2>

                {/* MagicBento Component original com dados customizados */}
                <div className="w-full flex justify-center">
                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={8}
                        glowColor="255, 255, 255"
                    />
                </div>
            </div>
        </section>
    );
}
