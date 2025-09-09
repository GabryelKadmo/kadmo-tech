"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin, FiX } from 'react-icons/fi';
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Fecha o menu mobile se estiver aberto
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <header
                className="flex justify-between items-center py-2 px-4 md:px-8 lg:px-12 xl:px-24 backdrop-blur-md bg-black/30 shadow-lg sticky top-0 z-50"
            >
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 blur-xl group-hover:blur-2xl"></div>

                            {/* <div className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-white/30 group-hover:scale-105 transition-all duration-500"></div> */}                        <div className="relative transition-all duration-500 px-6 group-hover:scvale-110 ">
                                <Image
                                    src="/LogoBrainKadmo.svg"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                    className="transition-all duration-500 rounded-full
                                    group-hover:brightness-110 
                                    group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]
                                    group-hover:scale-110
                                    group-active:scale-100"
                                />
                            </div>

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`absolute w-1 h-1 bg-white rounded-full 
                ${i % 2 === 0 ? 'animate-float-up' : 'animate-float-down'}`}
                                        style={{
                                            left: `${Math.random() * 80 + 10}%`,
                                            top: `${Math.random() * 80 + 10}%`,
                                            animationDelay: `${i * 0.2}s`
                                        }}></div>
                                ))}
                            </div>
                        </div>
                    </Link>
                </div>
                <nav
                    className="hidden lg:flex space-x-6 lg:space-x-8 text-white/90"
                >
                    {[
                        { id: "inicio", label: "Início", href: "/#hero" },
                        { id: "portfolio", label: "Portfólio" },
                        { id: "contact", label: "Contato" },
                        { id: "partners", label: "Parceiros" },
                    ].map((link) => (
                        <div key={link.id}>
                            {link.id === "inicio" ? (
                                <button
                                    onClick={() => window.location.href = "/#hero"}
                                    className="cursor-pointer relative group px-2 py-1 hover:text-white transition-colors duration-300"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            ) : (
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="cursor-pointer relative group px-2 py-1 hover:text-white transition-colors duration-300"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            )}
                        </div>
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
                        { icon: <FiInstagram size={24} />, href: "https://www.instagram.com/kadmo.jsx/", color: "hover:text-pink-500" },
                        { icon: <FaWhatsapp size={24} />, href: "https://abrir.link/RKPeG", color: "hover:text-green-400" },
                        { icon: <FiGithub size={24} />, href: "https://github.com/GabryelKadmo", color: "hover:text-gray-300" },
                        { icon: <FiLinkedin size={24} />, href: "https://www.linkedin.com/in/gabryel-kadmo/", color: "hover:text-blue-400" }
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
                                { id: "portfolio", label: "Portfólio" },
                                { id: "contact", label: "Contato" },
                                { id: "partners", label: "Parceiros" },
                            ].map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
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