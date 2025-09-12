"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Palette, Code, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Animar cada step card individualmente
        stepsRefs.current.forEach((stepRef) => {
            if (!stepRef) return;

            // Configurar estado inicial
            gsap.set(stepRef, {
                opacity: 0,
                y: 50,
                rotateX: -10
            });

            // Criar animação de entrada
            gsap.to(stepRef, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: stepRef,
                    start: "top bottom-=100px",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                    scrub: false
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} id="process" className="w-full py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4 bg-gray-800 text-gray-200 border-white/50">
                        Metodologia Comprovada
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-glow-effect">
                        Processo de <span className="text-glow-effect">Trabalho</span>
                    </h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        Transparência em cada etapa para entregas previsíveis e de alta qualidade
                    </p>
                </div>

                {/* Conteúdo das etapas */}
                <div className="space-y-24">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            ref={(el) => { stepsRefs.current[index] = el; }}
                            className="relative"
                        >
                            <ScrollReveal
                                baseOpacity={0.3}
                                enableBlur={true}
                                baseRotation={1}
                                blurStrength={2}
                                containerClassName="mb-12"
                                textClassName="text-white/90 text-2xl md:text-3xl font-semibold"
                            >
                                Etapa {index + 1}: {step.title}
                            </ScrollReveal>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Card da etapa */}
                                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/95 border-gray-700/60 backdrop-blur-sm gap-0">
                                        <CardHeader className="pb-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-4 bg-gradient-to-br from-white/15 to-gray-300/15 rounded-xl border border-white/10">
                                                    <step.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-white text-2xl font-bold mb-2">
                                                        {step.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-white/60 text-base">
                                                        {step.duration}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <Separator className="bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
                                        <CardContent className="pt-6">
                                            <p className="text-white/90 mb-6 leading-relaxed text-base">{step.description}</p>
                                            <div className="space-y-3">
                                                <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Entregas principais:</h4>
                                                <div className="grid gap-2">
                                                    {step.deliverables.map((item, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                                                            <span className="text-white/80 text-sm">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Descrição adicional */}
                                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="space-y-4">
                                        <ScrollReveal
                                            baseOpacity={0.5}
                                            enableBlur={false}
                                            baseRotation={0.5}
                                            blurStrength={1}
                                            textClassName="text-white leading-relaxed text-md md:text-[42px]"
                                        >
                                            {getStepDescription(index)}
                                        </ScrollReveal>

                                        {/* Indicador visual da etapa */}
                                        <div className="flex items-center gap-3 mt-6">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/20 to-gray-300/20 flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
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
}

// Função para obter descrições detalhadas de cada etapa
function getStepDescription(index: number): string {
    const descriptions = [
        "Nesta fase inicial, mergulhamos profundamente no seu negócio. Compreendemos seus objetivos, desafios e expectativas. É o momento de descobrir oportunidades e definir uma estratégia sólida que guiará todo o projeto.",
        "Aqui transformamos ideias em realidade visual. Criamos interfaces intuitivas e atrativas que proporcionam uma experiência excepcional aos usuários. Cada elemento é pensado para gerar conexão e conversão.",
        "O código ganha vida nesta etapa. Utilizamos as tecnologias mais modernas para construir soluções robustas, escaláveis e de alta performance. Cada linha de código é escrita com precisão e cuidado.",
        "O lançamento é apenas o começo. Acompanhamos os resultados, otimizamos continuamente e evoluímos a solução conforme suas necessidades crescem. Seu sucesso é nossa prioridade constante."
    ];
    return descriptions[index] || "";
}