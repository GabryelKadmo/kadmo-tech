"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Header() {
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
        <motion.header
            className="flex justify-between items-center p-4 md:px-8 lg:px-12 xl:px-24 backdrop-blur-md bg-black/30 shadow-lg sticky top-0 z-50"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <motion.div className="flex items-center" variants={item}>
                <Link href="#hero" className="flex items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 blur-xl group-hover:blur-2xl"></div>

                        {/* <div className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-white/30 group-hover:scale-105 transition-all duration-500"></div> */}

                        <div className="relative transition-all duration-500 px-10 group-hover:scvale-110 ">
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
                className="hidden md:flex space-x-6 lg:space-x-8 text-white/90"
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

            <motion.nav
                className="flex space-x-4 md:space-x-5"
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
    );
}