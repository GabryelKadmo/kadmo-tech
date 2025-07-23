"use client";

import { ProjectCard } from "@/components/custom/ProjectCard";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import Link from "next/link";
import { motion } from "motion/react";

export default function PortfolioPage() {
    const allProjects = [
        {
            title: "Dra. Cinthia Freire",
            description: "Landing Page para a advogada Cinthia Freire com design moderno e responsivo",
            tags: ["React", "Tailwind", "TypeScript", "Shadcn"],
            image: "/DraCinthiaPreview.webp",
            link: "https://cinthia-freire.vercel.app/"
        },
        {
            title: "Smart Wallet Brasil",
            description: "Aplicativo de carteira digital para controle financeiro pessoal",
            tags: ["React", "Tailwind", "TypeScript", "Shadcn"],
            image: "/SmartWallet-preview.png",
            link: "https://smartwallet-brasil.vercel.app/"
        },
        {
            title: "LS Tecnologia",
            description: "Landing page para empresa de desenvolvimento de software",
            tags: ["Next.js", "Tailwind", "Shadcn"],
            image: "/LstecnologiaPreview.webp",
            link: "https://lstecnologia.com"
        },
         {
            title: "Dra. Thaíse Loureiro",
            description: "Landing page para engenheira ambiental com foco em atendimento personalizado",
            tags: ["Next.js", "Tailwind", "Shadcn"],
            image: "/ThaiseLoureiroPreview.png",
            link: "https://thaise-loureiro.vercel.app"
        },
       
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <Header />

            <div className="container mx-auto px-4 sm:px-6 pt-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Portfólio</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Conheça alguns dos projetos que desenvolvemos com dedicação e inovação para nossos clientes
                    </p>
                </motion.div>

                {/* Grid de projetos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16"
                >
                    {allProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center py-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Gostou do que viu?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Entre em contato conosco e vamos criar algo incrível juntos!
                    </p>
                    <Link href="/#contact">
                        <Button size="lg" className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Fale Conosco
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}
