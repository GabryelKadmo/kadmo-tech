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
        <section className="w-full py-5 pb-24 relative overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 bg-gray-800 text-gray-200 border-white/50">
                        Vamos conversar
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Contato</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Pronto para transformar sua ideia em realidade? Envie uma mensagem ou me encontre nas redes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <Card className="bg-gray-800/50 border-gray-700 hover:border-white/30 transition-colors h-full">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
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
                                            className="bg-gray-300 border-gray-600 focus:border-white"
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
                                            className="bg-gray-300 border-gray-600 focus:border-white"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Sua mensagem"
                                            rows={5}
                                            className="bg-gray-300 border-gray-600 focus:border-white md:min-h-52"
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
                                            className="w-full bg-gradient-to-r cursor-pointer from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Card className="bg-gray-800/50 border-gray-700 hover:border-white/30 transition-colors">
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Phone className="w-5 h-5 mt-1 text-gray-300" />
                                            <div>
                                                <h3 className="font-medium text-white">Telefone</h3>
                                                <p className="text-gray-400">(73) 99154-8689</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Mail className="w-5 h-5 mt-1 text-gray-300" />
                                            <div>
                                                <h3 className="font-medium text-white">E-mail</h3>
                                                <p className="text-gray-400">gabryel.kadmo@mx2tech.com.br</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MessageSquare className="w-5 h-5 mt-1 text-gray-300" />
                                            <div>
                                                <h3 className="font-medium text-white">Redes Sociais</h3>
                                                <div className="flex gap-4 mt-2">
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
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse"></div>
                                        <div>
                                            <h3 className="font-medium text-white">Disponibilidade</h3>
                                            <p className="text-gray-400">Recusando novos projetos</p>
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