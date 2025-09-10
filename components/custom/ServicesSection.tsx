"use client";
import MagicBento from '../MagicBento';

export function ServicesSection() {
    return (
        <section id="services" className="py-20 select-none">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Serviços</span> oferecidos
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
