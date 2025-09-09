"use client";
import MagicBento from '../MagicBento';

export function ServicesSection() {
    return (
        <section id="services" className="py-20 select-none">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Serviços</span> oferecidos
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
                        glowColor="132, 0, 255"
                    />
                </div>
            </div>
        </section>
    );
}
