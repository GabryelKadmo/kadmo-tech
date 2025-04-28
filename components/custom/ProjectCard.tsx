"use client";
import { ProjectCardProps } from '@/types/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                y: -8,
                transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.3
                }
            }}
            className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 hover:border-purple-500/50"
        >
            <div className="relative z-0">
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        style={{
                            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformOrigin: "center bottom"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-gray-700/50 text-sm text-purple-300 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300 relative z-30"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(project.link, '_blank');
                            }}
                        >
                            Ver projeto
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 pointer-events-none"
                whileHover={{
                    opacity: 1,
                    transition: { duration: 0.4 }
                }}
            />
        </motion.div>
    );
}