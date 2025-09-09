"use client";


import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProjects, Project } from "@/lib/api/projects";

export function PortfolioSection() {
    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getProjects()
            .then((projects: Project[]) => {
                // Filtra apenas os projetos com featured true e ordena pelo campo order
                const filtered = projects
                    .filter((p: Project) => p.featured)
                    .sort((a: Project, b: Project) => (a.order ?? 99) - (b.order ?? 99));
                setFeaturedProjects(filtered);
            })
            .catch(() => setFeaturedProjects([]))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section className="py-20 px-4 sm:px-6" id="portfolio">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trabalhos <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Destacados</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Conheça alguns dos nossos projetos mais recentes e veja como transformamos ideias em soluções digitais de alto impacto
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {isLoading ? (
                        // Renderiza 3 skeletons enquanto carrega
                        Array.from({ length: 3 }).map((_, index) => (
                            <ProjectCardSkeleton key={index} />
                        ))
                    ) : (
                        featuredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))
                    )}
                </div>

                <div className="text-center">
                    <Link href="/portfolio">
                        <Button
                            size="lg"
                            className="cursor-pointer bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Ver Todos os Projetos
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}