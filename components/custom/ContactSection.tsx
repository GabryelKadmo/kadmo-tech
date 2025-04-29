"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Github, LinkedinIcon, Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

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
        <section className="w-full py-10 pb-24 bg-gradient-to-l from-gray-900 to-black relative overflow-hidden" id="contact">
            <div id="contact" className="absolute inset-0 opacity-10 overflow-hidden">
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
                    className="absolute bottom-30 right-1/3 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl"
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
                    <Badge variant="outline" className="mb-4 bg-gray-800 text-purple-300 border-purple-500/50">
                        Vamos conversar
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Contato</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Pronto para transformar sua ideia em realidade? Envie uma mensagem ou me encontre nas redes.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    <motion.div variants={itemVariants}>
                        <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/30 transition-colors h-full">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-purple-300" />
                                    Envie uma mensagem
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Seu nome"
                                            className="bg-gray-300 border-gray-600 focus:border-purple-500"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Seu e-mail"
                                            className="bg-gray-300 border-gray-600 focus:border-purple-500"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <Textarea
                                            name="message"
                                            placeholder="Sua mensagem"
                                            rows={5}
                                            className="bg-gray-300 border-gray-600 focus:border-purple-500"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>
                                    {submitStatus === "success" && (
                                        <div className="text-green-400 text-sm">Mensagem enviada com sucesso!</div>
                                    )}
                                    {submitStatus === "error" && (
                                        <div className="text-red-400 text-sm">Ocorreu um erro ao enviar a mensagem. Tente novamente.</div>
                                    )}
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="space-y-6">
                        <div>
                            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/30 transition-colors">
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Phone className="w-5 h-5 mt-1 text-purple-300" />
                                            <div>
                                                <h3 className="font-medium text-white">Telefone</h3>
                                                <p className="text-gray-400">(73) 99154-8689</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Mail className="w-5 h-5 mt-1 text-purple-300" />
                                            <div>
                                                <h3 className="font-medium text-white">E-mail</h3>
                                                <p className="text-gray-400">gabryel.kadmo@mx2tech.com.br</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MessageSquare className="w-5 h-5 mt-1 text-purple-300" />
                                            <div>
                                                <h3 className="font-medium text-white">Redes Sociais</h3>
                                                <div className="flex gap-4 mt-2">
                                                    <motion.a
                                                        href="https://www.linkedin.com/in/gabryel-kadmo/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ y: -3, scale: 1.1, color: "#6366f1" }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="text-gray-400"
                                                    >
                                                        <LinkedinIcon className="w-6 h-6" />
                                                    </motion.a>
                                                    <motion.a
                                                        href="https://github.com/GabryelKadmo"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ y: -3, scale: 1.1, color: "#6366f1" }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="text-gray-400"
                                                    >
                                                        <Github className="w-6 h-6" />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-gray-800/50 border-gray-700">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                                        <div>
                                            <h3 className="font-medium text-white">Disponibilidade</h3>
                                            <p className="text-gray-400">Aceitando novos projetos</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}