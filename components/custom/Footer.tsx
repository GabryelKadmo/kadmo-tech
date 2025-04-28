"use client";
import { motion } from "framer-motion";
import { Github, LinkedinIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
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
    },
    hover: {
        y: -3,
        color: "#a78bfa",
        transition: { type: "spring", stiffness: 300 }
    }
};

export function Footer() {
    const links = [
        { name: "Início", href: "#home" },
        { name: "Serviços", href: "#services" },
        { name: "Processo", href: "#process" },
        { name: "Contato", href: "#contact" }
    ];

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/GabryelKadmo" },
        { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://www.linkedin.com/in/gabryel-kadmo/" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:gabryel.kadmo@mx2tech.com.br" }
    ];

    const partners = [
        "MX2Tech",
        "LS Tecnologia",
        "IRA Tech",
        "Silas Dev",
        "IRM Tech Solutions",
        "Gonzaga Dev",
        "Net Pires",
        "Nicolasxs",
        "Victor Hugo",
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 10
                    }}
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={footerVariants}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12"
                >

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start"
                    >
                        <div className="mb-6">
                            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer">
                                <Image
                                    src="/Kdm-Logo.png"
                                    alt="Logo Gabryel Kadmo"
                                    width={400}
                                    height={400}
                                    className="w-44 h-auto rounded-full"
                                />
                            </div>
                        </div>
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-sm"
                        >
                            Transformando ideias em experiências digitais excepcionais.
                        </motion.p>
                    </motion.div>


                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-white mb-6">Navegação</h3>
                        <ul className="space-y-3">
                            {links.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover="hover"
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-white mb-6">Serviços</h3>
                        <ul className="space-y-3">
                            <motion.li variants={itemVariants} whileHover="hover">
                                <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">UI/UX Design</span>
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover="hover">
                                <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Desenvolvimento Front-end</span>
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover="hover">
                                <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Sistemas Sob Medida</span>
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
                        <ul className="space-y-3">
                            <motion.li
                                variants={itemVariants}
                                className="flex items-center gap-2"
                                whileHover="hover"
                            >
                                <Mail className="w-4 h-4 text-purple-400" />
                                <span className="text-gray-400">gabryel.kadmo@mx2tech.com.br</span>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="flex items-center gap-2"
                                whileHover="hover"
                            >
                                <Phone className="w-4 h-4 text-purple-400" />
                                <span className="text-gray-400">(73) 99154-8689</span>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="flex items-center gap-4 mt-4"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Gabryel Kadmo. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            className="text-gray-500 hover:text-gray-300 text-sm"
                        >
                            Termos de Serviço
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            className="text-gray-500 hover:text-gray-300 text-sm"
                        >
                            Política de Privacidade
                        </motion.a>
                    </div>
                </motion.div>
                <div className="mt-16 mb-8" id="partners">
                    <h3 className="text-xl font-semibold text-white mb-8 text-center">
                        Parceiros
                    </h3>

                    <div className="flex flex-wrap justify-center gap-5">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="relative text-gray-300 text-sm px-5 py-3 bg-gray-800/60 rounded-xl cursor-pointer
                       backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50
                       transition-all duration-200 group overflow-hidden hover:bg-gray-800/80
                       hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-400/30 transition-all duration-300" />

                                <span className="relative z-10 font-medium">{partner}</span>

                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}