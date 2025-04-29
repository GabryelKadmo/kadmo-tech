"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const processSteps = [
    {
        title: "Descoberta",
        description: "Imersão no seu negócio para definir objetivos e KPIs",
        icon: "🔍",
        duration: "1-3 dias",
        deliverables: ["Briefing", "Análise de concorrência", "Mapa de jornada"]
    },
    {
        title: "Design",
        description: "Criação de interfaces que convertem e encantam",
        icon: "🎨",
        duration: "2-4 dias",
        deliverables: ["Wireframes", "Prototipação", "Design System"]
    },
    {
        title: "Desenvolvimento",
        description: "Código limpo e performático com as melhores tecnologias",
        icon: "💻",
        duration: "3-4 semanas",
        deliverables: ["Sprints quinzenais", "Testes A/B", "Otimizações SEO"]
    },
    {
        title: "Entrega & Evolução",
        description: "Lançamento monitorado e melhorias contínuas",
        icon: "🚀",
        duration: "Contínuo",
        deliverables: ["Treinamento", "Documentação", "Planos de escala"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    },
    hover: {
        y: -10,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    }
};

export function ProcessSection() {
    return (
        <section id="process" className="w-full pb-10 bg-gradient-to-l from-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5
                    }}
                    className="absolute bottom-30 right-1/4 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        duration: 0.6
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-4 bg-gray-800 text-purple-300 border-purple-500/50">
                            Metodologia Comprovada
                        </Badge>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Processo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Trabalho</span>
                    </h2>
                    <motion.p
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Transparência em cada etapa para entregas previsíveis e de alta qualidade
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-6 select-none"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-purple-500/30 transition-colors group">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className="text-2xl p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"
                                            whileHover={{
                                                rotate: [0, 10, -10, 0],
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            {step.icon}
                                        </motion.div>
                                        <div>
                                            <CardTitle className="text-white flex items-center gap-2">
                                                {step.title}
                                                <motion.div
                                                    initial={{ x: -5, opacity: 0 }}
                                                    whileHover={{ x: 0, opacity: 1 }}
                                                    transition={{ type: "spring" }}
                                                >
                                                    <ChevronRight className="w-5 h-5 text-purple-300" />
                                                </motion.div>
                                            </CardTitle>
                                            <CardDescription className="text-gray-400 mt-1">
                                                {step.duration}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <Separator className="bg-gray-700" />
                                <CardContent className="pt-6">
                                    <p className="text-gray-300 mb-4">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.deliverables.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <span className="text-purple-400 mr-2">•</span>
                                                <span className="text-gray-400 text-sm">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Rodapé da seção */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 mb-6">
                        Garantia de satisfação em todas as etapas do projeto
                    </p>
                </motion.div>
            </div>
        </section>
    );
}