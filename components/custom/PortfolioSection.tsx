"use client";

import { ProjectCard } from "./ProjectCard";

export function PortfolioSection() {
    const projects = [
        {
            title: "Edunex",
            description: "Plataforma de cursos online",
            tags: ["Next.js", "Tailwind"],
            image: "/Edunex-preview.png",
            link: "https://edunex-pro.vercel.app"
        },
        {
            title: "Versa",
            description: "Loja online de roupas modernas e acessíveis",
            tags: ["React", "CSS", "Mantine"],
            image: "/versa-preview.png",
            link: "https://onlineversa.vercel.app"
        },
        {
            title: "Enadex",
            description: "Plataforma para realizar simulados online",
            tags: ["React", "CSS", "Chakra UI"],
            image: "/Enadex-preview.png",
            link: "https://enadex-v1.vercel.app"
        },
    ];

    return (
        <section className="pb-20" id="portfolio">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
                Trabalhos <span className="text-purple-400">Destacados</span>
            </h2>

            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}