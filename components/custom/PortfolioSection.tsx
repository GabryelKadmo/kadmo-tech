"use client";

import { ProjectCard } from "./ProjectCard";

export function PortfolioSection() {
    const projects = [
        {
            title: "Edunex",
            description: "Plataforma de cursos online",
            tags: ["Next.js", "Tailwind"],
            image: "/Edunex-preview.webp",
            link: "https://edunex-pro.vercel.app"
        },
        {
            title: "Versa",
            description: "Loja online de roupas modernas e acessíveis",
            tags: ["React", "CSS", "Mantine"],
            image: "/versa-preview.webp",
            link: "https://onlineversa.vercel.app"
        },
        {
            title: "Enadex",
            description: "Plataforma para realizar simulados online",
            tags: ["React", "CSS", "Chakra UI"],
            image: "/Enadex-preview.webp",
            link: "https://enadex-v1.vercel.app"
        },
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 border-gray-800">
            <section className="pb-20" id="portfolio">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Trabalhos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Destacados</span>
                </h2>

                <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}