"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search, Palette, Code, Rocket } from "lucide-react";

const processSteps = [
    {
        title: "Descoberta",
        description: "Imersão no seu negócio para definir objetivos",
        icon: Search,
        duration: "1-3 dias",
        deliverables: ["Briefing", "Análise de concorrência", "Mapa de jornada"]
    },
    {
        title: "Design",
        description: "Criação de interfaces que encantam",
        icon: Palette,
        duration: "2-4 dias",
        deliverables: ["Wireframes", "Prototipação", "Design System"]
    },
    {
        title: "Desenvolvimento",
        description: "Código limpo e performático com as melhores tecnologias",
        icon: Code,
        duration: "3-4 semanas",
        deliverables: ["Sprints quinzenais", "Testes A/B", "Otimizações SEO"]
    },
    {
        title: "Entrega & Evolução",
        description: "Lançamento monitorado e melhorias contínuas",
        icon: Rocket,
        duration: "Contínuo",
        deliverables: ["Treinamento", "Documentação", "Planos de escala"]
    }
];

export function ProcessSection() {
    return (
        <section id="process" className="w-full py-8 lg:mb-14 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16 lg:mb-20">
                    <Badge variant="outline" className="mb-3 md:mb-4 bg-gray-800 text-gray-200 border-white/50">
                        Metodologia Comprovada
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 text-glow-effect">
                        Processo de <span className="text-glow-effect">Trabalho</span>
                    </h2>
                    <p className="text-base md:text-lg text-white max-w-2xl mx-auto px-4">
                        Transparência em cada etapa para entregas previsíveis e de alta qualidade
                    </p>
                </div>

                {/* Conteúdo das etapas */}
                <div className="space-y-8 md:space-y-12 lg:space-y-16">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Título da etapa */}
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-2">
                                    Etapa {index + 1}: {step.title}
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
                                {/* Card da etapa */}
                                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}>
                                    <Card className="h-full bg-gradient-to-br from-gray-900/90 to-black/95 border-gray-700/60 backdrop-blur-sm shadow-xl">
                                        <CardHeader className="pb-4 md:pb-6 px-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-4 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-xl border border-white/20 flex-shrink-0 shadow-lg">
                                                    <step.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <CardTitle className="text-white text-xl md:text-2xl font-bold mb-2 leading-tight">
                                                        {step.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-white/70 text-sm md:text-base font-medium">
                                                        {step.duration}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <Separator className="bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
                                        <CardContent className="pt-6 px-6 pb-6">
                                            <p className="text-white/90 mb-6 leading-relaxed text-sm md:text-base">
                                                {step.description}
                                            </p>
                                            <div className="space-y-4">
                                                <h4 className="text-white font-semibold text-xs md:text-sm uppercase tracking-wider opacity-90">
                                                    Entregas principais:
                                                </h4>
                                                <div className="space-y-3">
                                                    {step.deliverables.map((item, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white/80 to-gray-300/80 flex-shrink-0"></div>
                                                            <span className="text-white/85 text-sm md:text-base leading-relaxed">
                                                                {item}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Descrição adicional */}
                                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} mt-6 lg:mt-0`}>
                                    <div className="space-y-6 lg:px-4">
                                        <div className="text-white leading-relaxed text-base md:text-lg lg:text-xl">
                                            {getStepDescription(index)}
                                        </div>

                                        {/* Indicador visual da etapa */}
                                        <div className="flex items-center gap-4 pt-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-white/25 to-gray-300/25 border border-white/20 flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0 shadow-lg">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-white/40 via-white/20 to-transparent"></div>
                                            <div className="text-white/60 text-sm md:text-base font-medium uppercase tracking-wider">
                                                {step.duration}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}// Função para obter descrições detalhadas de cada etapa
function getStepDescription(index: number): string {
    const descriptions = [
        "Nesta fase inicial, mergulhamos profundamente no seu negócio. Compreendemos seus objetivos, desafios e expectativas. É o momento de descobrir oportunidades e definir uma estratégia sólida que guiará todo o projeto.",
        "Aqui transformamos ideias em realidade visual. Criamos interfaces intuitivas e atrativas que proporcionam uma experiência excepcional aos usuários. Cada elemento é pensado para gerar conexão e conversão.",
        "O código ganha vida nesta etapa. Utilizamos as tecnologias mais modernas para construir soluções robustas, escaláveis e de alta performance. Cada linha de código é escrita com precisão e cuidado.",
        "O lançamento é apenas o começo. Acompanhamos os resultados, otimizamos continuamente e evoluímos a solução conforme suas necessidades crescem. Seu sucesso é nossa prioridade constante."
    ];
    return descriptions[index] || "";
}