"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function PartnersSection() {
    const partners = [
        { name: "P.K inc.", url: "https://github.com/P-K-INC" },
        { name: "MX2Tech", url: "https://mx2tech.com.br" },
        { name: "LS Tecnologia", url: "https://lstecnologia.com/" },
        { name: "IRA Tech", url: "https://github.com/IanAlexandrino" },
        { name: "IRM Tech Solutions", url: "https://github.com/Iag0ow" },
        { name: "Net Pires", url: "https://github.com/KeviinPiires" },
        { name: "Silas Dev", url: "https://github.com/silasoli" },
        { name: "Gonzaga Dev", url: "https://github.com/gustavogonzag" },
        { name: "Nicolasxs", url: "https://github.com/NicolasXs" },
        { name: "Victor Hugo", url: "https://github.com/Victor0C" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const titleAnimation = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 border-gray-800 py-8">
            <div className="mt-16 mb-16" id="partners">
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={titleAnimation}
                    className="text-3xl text-center md:text-4xl font-bold text-white mb-16"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Conexões</span> que Transformam
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-5"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            className='mb-3'
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative text-gray-300 text-sm px-5 py-3 bg-gray-800/60 rounded-xl cursor-pointer 
                                backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50
                                transition-all duration-200 group overflow-hidden hover:bg-gray-800/80
                                hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-400/30 transition-all duration-300" />

                                <span className="relative z-10 font-medium">{partner.name}</span>

                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}