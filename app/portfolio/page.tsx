"use client";

import { useEffect, useState } from "react";
import { getProjects, Project } from "@/lib/api/projects";
import { ProjectCard } from "@/components/custom/ProjectCard";
import { PortfolioPageSkeleton } from "@/components/custom/PortfolioPageSkeleton";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import Link from "next/link";

export default function PortfolioPage() {
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getProjects()
            .then((projects: Project[]) => {
                // Ordena pelo campo order, mas mostra todos
                const sorted = projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
                setAllProjects(sorted);
            })
            .catch(() => setAllProjects([]))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="min-h-screen bg-black">
            <Header />

            <div className="container mx-auto px-4 sm:px-6 pt-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Portfólio</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Conheça alguns dos projetos que desenvolvemos com dedicação e inovação para nossos clientes
                    </p>
                </div>

                {/* Grid de projetos */}
                {isLoading ? (
                    <PortfolioPageSkeleton />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                        {allProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center py-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Gostou do que viu?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Entre em contato conosco e vamos criar algo incrível juntos!
                    </p>
                    <Link href="/#contact">
                        <Button size="lg" className="cursor-pointer bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Fale Conosco
                        </Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
