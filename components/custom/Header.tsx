"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin, FiX } from 'react-icons/fi';
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogoClick = () => {
        if (pathname === '/') {
            // Se já estiver na home, faz scroll smooth para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Se estiver em outra rota, redireciona para a home
            window.location.href = '/';
        }
    };

    const handleNavigation = (sectionId: string) => {
        if (pathname === '/') {
            // Se já estiver na home, faz scroll para a seção
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // Se estiver em outra rota, redireciona para home + seção
            window.location.href = `/#${sectionId}`;
        }

        // Fecha o menu mobile se estiver aberto
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <header
                className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 xl:px-24 backdrop-blur-md bg-black/30 shadow-lg sticky top-0 z-50 border-b border-white/10"
            >
                <div className="flex items-center">
                    <button onClick={handleLogoClick} className="flex items-center cursor-pointer">
                        <div className="relative group">
                            <div className="relative transition-all duration-300 px-2">
                                <Image
                                    src="/Kdm-Logo.png"
                                    alt="Kadmo Tech Logo"
                                    width={180}
                                    height={180}
                                    className="rounded-full transition-all duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    priority
                                />
                            </div>
                        </div>
                    </button>
                </div>
                <nav
                    className="hidden lg:flex space-x-6 lg:space-x-8 text-white/90"
                >
                    {[
                        { id: "inicio", label: "Início", isHome: true },
                        { id: "portfolio", label: "Portfólio" },
                        { id: "contact", label: "Contato" },
                        { id: "partners", label: "Parceiros" },
                    ].map((link) => (
                        <button
                            key={link.id}
                            onClick={() => link.isHome ? handleLogoClick() : handleNavigation(link.id)}
                            className="cursor-pointer px-2 py-1 hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
                {/* Burger Menu Button */}
                <button
                    className="lg:hidden relative z-[70] p-2 text-white/80 hover:text-white transition-colors duration-300"
                    onClick={toggleMenu}
                >
                    <div
                        className="w-6 h-6 flex flex-col justify-center items-center"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-current rounded-full mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-current rounded-full mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                                }`}
                        />
                    </div>
                </button>
                <nav
                    className="hidden lg:flex space-x-4 md:space-x-5"
                >
                    {[
                        { icon: <FiInstagram size={24} />, href: "https://www.instagram.com/kadmo.jsx/", color: "hover:text-gray-300" },
                        { icon: <FaWhatsapp size={24} />, href: "https://abrir.link/RKPeG", color: "hover:text-green-400" },
                        { icon: <FiGithub size={24} />, href: "https://github.com/GabryelKadmo", color: "hover:text-gray-300" },
                        { icon: <FiLinkedin size={24} />, href: "https://www.linkedin.com/in/gabryel-kadmo/", color: "hover:text-gray-300" }
                    ].map((social, index) => (
                        <div key={index}>
                            <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-white/80 ${social.color} transition-all duration-300 hover:scale-110`}
                                aria-label={social.href.includes("instagram") ? "Instagram" :
                                    social.href.includes("wa.me") ? "Whatsapp" :
                                        social.href.includes("github") ? "GitHub" : "LinkedIn"}
                            >
                                {social.icon}
                            </Link>
                        </div>
                    ))}
                </nav>
            </header>

            {/* Mobile Menu Overlay - Simplified */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-[60] lg:hidden bg-black/80 backdrop-blur-md"
                    onClick={toggleMenu}
                >
                    <div
                        className="absolute top-0 right-0 h-full w-80 bg-gray-900/98 backdrop-blur-xl shadow-2xl border-l border-gray-700/50 p-6"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-white font-semibold text-lg">Menu</span>
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-white/70 hover:text-white rounded-lg transition-colors duration-300"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { id: "inicio", label: "Início", isHome: true },
                                { id: "portfolio", label: "Portfólio" },
                                { id: "contact", label: "Contato" },
                                { id: "partners", label: "Parceiros" },
                            ].map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        if (link.isHome) {
                                            handleLogoClick();
                                        } else {
                                            handleNavigation(link.id);
                                        }
                                        if (isMenuOpen) {
                                            setIsMenuOpen(false);
                                        }
                                    }}
                                    className="block w-full text-left p-3 rounded-lg bg-gray-800/40 hover:bg-gray-700/60 text-white transition-colors duration-300"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-700/30">
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/kadmo.jsx/", label: "Instagram" },
                                    { icon: <FaWhatsapp size={18} />, href: "https://abrir.link/RKPeG", label: "WhatsApp" },
                                    { icon: <FiGithub size={18} />, href: "https://github.com/GabryelKadmo", label: "GitHub" },
                                    { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/gabryel-kadmo/", label: "LinkedIn" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-y-1 p-3 rounded-lg bg-gray-800/60 border border-gray-600/40 hover:border-gray-500/60 text-white transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <div className="flex flex-col items-center space-y-1">
                                            {social.icon}
                                            <span className="text-xs">{social.label}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}