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
                    <Link href="#hero" className="flex items-center">
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
                        { href: "#portfolio", label: "Portfólio" },
                        { href: "#contact", label: "Contato" },
                        { href: "#partners", label: "Parceiros" },
                    ].map((link) => (
                        <motion.div key={link.href} variants={item}>
                            <Link
                                href={link.href}
                                className="relative group px-2 py-1 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
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
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                        {/* Menu Content */}
                        <motion.div
                            className="absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-md shadow-2xl"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 text-white/80 hover:text-white transition-colors duration-300"
                                >
                                    <FiX size={28} />
                                </button>
                            </div>
                            {/* Navigation Links */}
                            <div className="px-8 py-2 space-y-4">
                                {[
                                    { href: "#portfolio", label: "Portfólio", icon: "🎨" },
                                    { href: "#contact", label: "Contato", icon: "📧" },
                                    { href: "#partners", label: "Parceiros", icon: "🤝" },
                                ].map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={toggleMenu}
                                            className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                                        >
                                            <span className="text-lg">{link.icon}</span>
                                            <span className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                                                {link.label}
                                            </span>
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                                →
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Social Links */}
                            <div className="px-8 py-4 mt-4">
                                <div className="mb-4">
                                    <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
                                        Conecte-se
                                    </h3>
                                    <p className="text-xs text-white/60">
                                        Vamos conversar sobre seu próximo projeto
                                    </p>
                                </div>

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
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                        >
                                            <Link
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group relative overflow-hidden flex flex-col items-center justify-center space-y-1 p-3 h-16 rounded-lg bg-gradient-to-br ${social.bgGradient} border border-white/10 hover:border-white/30 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                                                aria-label={social.label}
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
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            {/* CTA Button */}
                            <div className="px-8 py-4">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    onClick={() => {
                                        window.open('https://abrir.link/RKPeG', '_blank');
                                        toggleMenu();
                                    }}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
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