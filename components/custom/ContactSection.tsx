"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, LinkedinIcon, Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
            console.error("Error sending email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-8 md:py-16 pb-14 md:pb-24 relative overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <Badge variant="outline" className="mb-3 md:mb-4 bg-gray-800 text-gray-200 border-white/50">
                        Vamos conversar
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-glow-effect">
                        Entre em <span className="text-glow-effect">Contato</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                        Pronto para transformar sua ideia em realidade? Envie uma mensagem ou me encontre nas redes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                        <Card className="bg-gray-800/50 border-gray-700 hover:border-white/30 transition-colors h-full">
                            <CardHeader className="pb-4 md:pb-6">
                                <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
                                    <Mail className="w-5 h-5 text-gray-300" />
                                    Envie uma mensagem
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Seu nome"
                                            className="bg-gray-300 border-gray-600 focus:border-white h-11 md:h-10"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Seu e-mail"
                                            className="bg-gray-300 border-gray-600 focus:border-white h-11 md:h-10"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Sua mensagem"
                                            rows={4}
                                            className="bg-gray-300 border-gray-600 focus:border-white md:min-h-52 min-h-[100px]"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {submitStatus === "success" && (
                                        <div className="text-green-400 text-sm">Mensagem enviada com sucesso!</div>
                                    )}
                                    {submitStatus === "error" && (
                                        <div className="text-red-400 text-sm">Ocorreu um erro ao enviar a mensagem. Tente novamente.</div>
                                    )}
                                    <div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r cursor-pointer from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black h-11 md:h-10"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <Card className="bg-gray-800/50 border-gray-700 hover:border-white/30 transition-colors">
                                <CardContent className="p-4 md:p-6">
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex items-start gap-3 md:gap-4">
                                            <Phone className="w-5 h-5 mt-1 text-gray-300" />
                                            <div>
                                                <h3 className="font-medium text-white text-sm md:text-base">Telefone</h3>
                                                <a
                                                    href="tel:+5573991548689"
                                                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                                                >
                                                    (73) 99154-8689
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 md:gap-4">
                                            <Mail className="w-5 h-5 mt-1 text-gray-300" />
                                            <div>
                                                <h3 className="font-medium text-white text-sm md:text-base">E-mail</h3>
                                                <a
                                                    href="mailto:gabryel.kadmo@mx2tech.com.br"
                                                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base break-all"
                                                >
                                                    gabryel.kadmo@mx2tech.com.br
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 md:gap-4">
                                            <MessageSquare className="w-5 h-5 mt-1 text-gray-300" />
                                            <div>
                                                <h3 className="font-medium text-white text-sm md:text-base">Redes Sociais</h3>
                                                <div className="flex gap-3 md:gap-4 mt-2">
                                                    <a
                                                        href="https://www.linkedin.com/in/gabryel-kadmo/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <LinkedinIcon className="w-6 h-6" />
                                                    </a>
                                                    <a
                                                        href="https://github.com/GabryelKadmo"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Github className="w-6 h-6" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <Card className="bg-gray-800/50 border-gray-700 select-none">
                                <CardContent className="p-4 md:p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse"></div>
                                        <div>
                                            <h3 className="font-medium text-white text-sm md:text-base">Disponibilidade</h3>
                                            <p className="text-gray-400 text-sm md:text-base">Recusando novos projetos</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}