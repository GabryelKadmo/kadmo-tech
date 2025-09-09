"use client";
import { Github, LinkedinIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PrivacyPolicyModal } from "../privacy-policy-modal";
import { TermsOfServiceModal } from "../terms-of-use-modal";

export function Footer() {
    const links = [
        { name: "Início", href: "#hero" },
        { name: "Serviços", href: "#services" },
        { name: "Processo", href: "#process" },
        { name: "Contato", href: "#contact" }
    ];

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/GabryelKadmo" },
        { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://www.linkedin.com/in/gabryel-kadmo/" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:gabryel.kadmo@mx2tech.com.br" }
    ];

    return (
        <footer className="relative border-t border-gray-800/50 mt-20">
            <div className="container mx-auto px-6 py-16 relative">
                <div
                    className="grid grid-cols-1 md:grid-cols-4 gap-12"
                >

                    <div
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
                        <p
                            className="text-gray-400 text-sm"
                        >
                            Transformando ideias em experiências digitais excepcionais.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Navegação</h3>
                        <ul className="space-y-3">
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Serviços</h3>
                        <ul className="space-y-3">
                            <li>
                                <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">UI/UX Design</span>
                            </li>
                            <li>
                                <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Desenvolvimento Front-end</span>
                            </li>
                            <li>
                                <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Sistemas Sob Medida</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
                        <ul className="space-y-3">
                            <li
                                className="flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4 text-purple-400" />
                                <span className="text-gray-400">gabryel.kadmo@mx2tech.com.br</span>
                            </li>
                            <li
                                className="flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4 text-purple-400" />
                                <span className="text-gray-400">(73) 99154-8689</span>
                            </li>
                            <li
                                className="flex items-center gap-4 mt-4"
                            >
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-purple-400 transition-colors hover:-translate-y-1 hover:scale-110"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Gabryel Kadmo. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <div className="hover:-translate-y-0.5 transition-transform">
                            <TermsOfServiceModal />
                        </div>

                        <div className="hover:-translate-y-0.5 transition-transform">
                            <PrivacyPolicyModal />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}