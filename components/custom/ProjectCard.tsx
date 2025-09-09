"use client";
import { ProjectCardProps } from '@/types/types';
import Image from 'next/image';

export function ProjectCard({ project }: Omit<ProjectCardProps, 'index'>) {
    const handleCardClick = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <div
            className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 cursor-pointer transition-all duration-300"
            onClick={handleCardClick}
        >
            <div className="relative z-0">
                <div className="relative h-44 overflow-hidden">
                    <Image
                        src={project.image || "/Kdm-Logo.png"}
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
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
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
                            <span
                                key={i}
                                className="px-2.5 py-1 bg-gradient-to-r from-gray-700/60 to-gray-600/60 text-xs font-medium text-gray-200 rounded-full border border-gray-600/50 hover:border-white/50 transition-colors duration-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}