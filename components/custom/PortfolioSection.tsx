"use client";

import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function PortfolioSection() {
    const featuredProjects = [
        {
            title: "Dra. Cinthia Freire",
            description: "Landing Page profissional para advogada com design moderno e otimizado para conversões",
            tags: ["React", "Tailwind", "TypeScript", "Shadcn"],
            image: "/DraCinthiaPreview.webp",
            link: "https://cinthia-freire.vercel.app/"
        },
        {
            title: "Smart Wallet Brasil",
            description: "Aplicativo de carteira digital com recursos avançados de controle financeiro pessoal",
            tags: ["React", "Tailwind", "TypeScript", "Shadcn"],
            image: "/SmartWallet-preview.png",
            link: "https://smartwallet-brasil.vercel.app/"
        },
        {
            title: "LS Tecnologia",
            description: "Landing page corporativa para empresa de desenvolvimento com foco em performance",
            tags: ["Next.js", "Tailwind", "Shadcn"],
            image: "/LstecnologiaPreview.webp",
            link: "https://lstecnologia.com"
        },
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 border-gray-800">
            <section className="py-20 px-4 sm:px-6" id="portfolio">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Trabalhos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Destacados</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Conheça alguns dos nossos projetos mais recentes e veja como transformamos ideias em soluções digitais de alto impacto
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    >
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Link href="/portfolio">
                            <Button
                                size="lg"
                                className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Ver Todos os Projetos
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}