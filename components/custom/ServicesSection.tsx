"use client";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } }
};

export function ServicesSection() {
    const services = [
        { title: "UI/UX Design", description: "Crio interfaces intuitivas e modernas com foco na jornada do usuário", icon: "🎨" },
        { title: "Desenvolvimento Front-end", description: "Sites performáticos com React, Next.js & Angular", icon: "💻" },
        { title: "Sistemas Sob Medida", description: "Soluções escaláveis para problemas específicos", icon: "⚙️" }
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 border-t border-gray-800">

            <section id="services" className="py-20 select-none">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <span className="text-purple-400">Serviços</span> oferecidos
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>

    );
}
