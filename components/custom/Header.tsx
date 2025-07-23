"use client";
import { motion, AnimatePresence } from "framer-motion";
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
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <motion.header
                className="flex justify-between items-center py-2 px-4 md:px-8 lg:px-12 xl:px-24 backdrop-blur-md bg-black/30 shadow-lg sticky top-0 z-50"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.div className="flex items-center" variants={item}>
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
                </motion.div>
                <motion.nav
                    className="hidden lg:flex space-x-6 lg:space-x-8 text-white/90"
                    variants={container}
                >
                    {[
                        { id: "portfolio", label: "Portfólio" },
                        { id: "contact", label: "Contato" },
                        { id: "partners", label: "Parceiros" },
                    ].map((link) => (
                        <motion.div key={link.id} variants={item}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="relative group px-2 py-1 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        </motion.div>
                    ))}
                </motion.nav>
                {/* Burger Menu Button */}
                <motion.button
                    className="lg:hidden relative z-[70] p-2 text-white/80 hover:text-white transition-colors duration-300"
                    onClick={toggleMenu}
                    variants={item}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        animate={isMenuOpen ? "open" : "closed"}
                        className="w-6 h-6 flex flex-col justify-center items-center"
                    >
                        <motion.span
                            className="block h-0.5 w-6 bg-current rounded-full"
                            variants={{
                                closed: { rotate: 0, y: -4 },
                                open: { rotate: 45, y: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block h-0.5 w-6 bg-current rounded-full mt-1"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block h-0.5 w-6 bg-current rounded-full mt-1"
                            variants={{
                                closed: { rotate: 0, y: 4 },
                                open: { rotate: -45, y: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.button>
                <motion.nav
                    className="hidden lg:flex space-x-4 md:space-x-5"
                    variants={container}
                >
                    {[
                        { icon: <FiInstagram size={24} />, href: "https://www.instagram.com/kadmo.jsx/", color: "hover:text-pink-500" },
                        { icon: <FaWhatsapp size={24} />, href: "https://abrir.link/RKPeG", color: "hover:text-green-400" },
                        { icon: <FiGithub size={24} />, href: "https://github.com/GabryelKadmo", color: "hover:text-gray-300" },
                        { icon: <FiLinkedin size={24} />, href: "https://www.linkedin.com/in/gabryel-kadmo/", color: "hover:text-blue-400" }
                    ].map((social, index) => (
                        <motion.div key={index} variants={item}>
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
                        </motion.div>
                    ))}
                </motion.nav>
            </motion.header>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleMenu}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                        {/* Menu Content */}
                        <motion.div
                            className="absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900/98 via-black/95 to-gray-800/98 backdrop-blur-xl shadow-2xl border-l border-gray-700/50"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header do Menu */}
                            <motion.div
                                className="flex items-center justify-between p-6 border-b border-gray-700/30"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 15
                                }}
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                    <span className="text-white font-semibold text-lg">Menu</span>
                                </div>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                                >
                                    <FiX size={24} />
                                </button>
                            </motion.div>
                            {/* Navigation Links */}
                            <div className="px-8 py-6 space-y-3">
                                {[
                                    { id: "portfolio", label: "Portfólio", icon: "🎨" },
                                    { id: "contact", label: "Contato", icon: "📧" },
                                    { id: "partners", label: "Parceiros", icon: "🤝" },
                                ].map((link, index) => (
                                    <motion.div
                                        key={link.id}
                                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{
                                            delay: index * 0.15 + 0.3,
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15
                                        }}
                                    >
                                        <motion.button
                                            onClick={() => scrollToSection(link.id)}
                                            className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-700/60 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-500 group w-full text-left backdrop-blur-sm"
                                            whileHover={{
                                                scale: 1.02,
                                                x: 4,
                                                transition: { duration: 0.3, ease: "easeOut" }
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                                transition: { duration: 0.1 }
                                            }}
                                        >
                                            <span className="text-lg">{link.icon}</span>
                                            <span className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                                                {link.label}
                                            </span>
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                                →
                                            </div>
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Social Links */}
                            <div className="px-8 py-4 mt-6 border-t border-gray-700/30">
                                <motion.div
                                    className="mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }}
                                >
                                    <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
                                        Conecte-se
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Vamos conversar sobre seu próximo projeto
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        {
                                            icon: <FiInstagram size={18} />,
                                            href: "https://www.instagram.com/kadmo.jsx/",
                                            color: "hover:from-pink-500 hover:to-purple-500",
                                            label: "Instagram",
                                            bgGradient: "from-pink-500/20 to-purple-500/20"
                                        },
                                        {
                                            icon: <FaWhatsapp size={18} />,
                                            href: "https://abrir.link/RKPeG",
                                            color: "hover:from-green-500 hover:to-emerald-500",
                                            label: "WhatsApp",
                                            bgGradient: "from-green-500/20 to-emerald-500/20"
                                        },
                                        {
                                            icon: <FiGithub size={18} />,
                                            href: "https://github.com/GabryelKadmo",
                                            color: "hover:from-gray-500 hover:to-slate-500",
                                            label: "GitHub",
                                            bgGradient: "from-gray-500/20 to-slate-500/20"
                                        },
                                        {
                                            icon: <FiLinkedin size={18} />,
                                            href: "https://www.linkedin.com/in/gabryel-kadmo/",
                                            color: "hover:from-blue-500 hover:to-indigo-500",
                                            label: "LinkedIn",
                                            bgGradient: "from-blue-500/20 to-indigo-500/20"
                                        }
                                    ].map((social, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{
                                                delay: index * 0.1 + 0.6,
                                                duration: 0.5,
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 12
                                            }}
                                        >
                                            <motion.a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group relative overflow-hidden flex flex-col items-center justify-center space-y-1 p-3 h-16 rounded-lg bg-gray-800/60 border border-gray-600/40 hover:border-gray-500/60 text-white transition-all duration-300 backdrop-blur-sm`}
                                                aria-label={social.label}
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -2,
                                                    transition: { duration: 0.3, ease: "easeOut" }
                                                }}
                                                whileTap={{
                                                    scale: 0.95,
                                                    transition: { duration: 0.1 }
                                                }}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                                <div className="relative z-10 flex flex-col items-center space-y-0.5">
                                                    <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                                                        {social.icon}
                                                    </div>
                                                    <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                                                        {social.label}
                                                    </span>
                                                </div>
                                            </motion.a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            {/* CTA Button */}
                            <div className="px-8 py-4 border-t border-gray-700/30">
                                <motion.button
                                    initial={{ opacity: 0, y: 40, scale: 0.85 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        delay: 1.1,
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20
                                    }}
                                    onClick={() => {
                                        window.open('https://abrir.link/RKPeG', '_blank');
                                        toggleMenu();
                                    }}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600/90 hover:to-pink-600/90 text-white font-semibold rounded-2xl shadow-lg transition-all duration-500 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40"
                                    whileHover={{
                                        scale: 1.015,
                                        y: -2,
                                        boxShadow: "0 25px 50px rgba(168, 85, 247, 0.25)",
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                    whileTap={{
                                        scale: 0.985,
                                        transition: { duration: 0.15, ease: "easeInOut" }
                                    }}
                                >
                                    Vamos criar algo incrível juntos
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}