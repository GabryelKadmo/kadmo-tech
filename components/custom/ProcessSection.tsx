"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
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

export function ProcessSection() {
    return (
        <section id="process" className="w-full pt-20 pb-10 relative">
            <div className="container mx-auto px-4 relative">
                <div
                    className="text-center mb-16"
                >
                    <div>
                        <Badge variant="outline" className="mb-4 bg-gray-800 text-gray-200 border-white/50">
                            Metodologia Comprovada
                        </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Processo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Trabalho</span>
                    </h2>
                    <p
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Transparência em cada etapa para entregas previsíveis e de alta qualidade
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 lg:grid-cols-4 gap-6 select-none"
                >
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                        >
                            <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-white/30 transition-colors group">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="text-2xl p-3 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-lg"
                                        >
                                            {step.icon}
                                        </div>
                                        <div>
                                            <CardTitle className="text-white flex items-center gap-2">
                                                {step.title}
                                                <div>
                                                    <ChevronRight className="w-5 h-5 text-gray-300" />
                                                </div>
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
                                            <li
                                                key={i}
                                                className="flex items-start"
                                            >
                                                <span className="text-white mr-2">•</span>
                                                <span className="text-gray-400 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                <div
                    className="text-center mt-5"
                >
                    <p className="text-gray-500 mb-6">
                        Garantia de satisfação em todas as etapas do projeto
                    </p>
                </div>
            </div>
        </section>
    );
}