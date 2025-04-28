"use client";
import { motion } from "motion/react";

export function StatsSection() {
    const stats = [
        { value: '25+', label: 'Projetos concluídos' },
        { value: '100%', label: 'Satisfação dos clientes' },
        { value: '5x', label: 'Melhoria na experiência do usuário' },
        { value: '∞', label: 'Xícaras de café' }
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900/30">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {stat.value}
                        </p>
                        <p className="mt-2 text-gray-300">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}