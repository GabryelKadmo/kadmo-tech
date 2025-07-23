"use client";
import { ProjectCardProps } from '@/types/types';
import { motion } from 'motion/react';
import Image from 'next/image';

export function ProjectCard({ project, index }: ProjectCardProps) {
    const handleCardClick = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
            onClick={handleCardClick}
        >
            <div className="relative z-0">
                <div className="relative h-44 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300"
                        style={{
                            transformOrigin: "center bottom"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent" />
                </div>

                <div className="p-5 relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed overflow-hidden text-sm" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical' as const,
                    }}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i, duration: 0.3 }}
                                className="px-2.5 py-1 bg-gradient-to-r from-gray-700/60 to-gray-600/60 text-xs font-medium text-purple-300 rounded-full border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-200"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Efeito de brilho no hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"
                whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 }
                }}
            />

            {/* Borda animada */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4), transparent 70%)",
                    padding: "1px",
                    backgroundSize: "200% 200%"
                }}
                whileHover={{
                    opacity: 1,
                    backgroundPosition: "0% 0%",
                    transition: { duration: 0.6 }
                }}
            />
        </motion.div>
    );
}