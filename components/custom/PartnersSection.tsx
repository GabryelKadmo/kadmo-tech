import Link from 'next/link';
import React from 'react'

export default function PartnersSection() {

    const partners = [
        { name: "P.K inc.", url: "https://github.com/P-K-INC" },
        { name: "MX2Tech", url: "https://mx2tech.com.br" },
        { name: "LS Tecnologia", url: "https://github.com/Levixs" },
        { name: "IRA Tech", url: "https://github.com/IanAlexandrino" },
        { name: "IRM Tech Solutions", url: "https://github.com/Iag0ow" },
        { name: "Net Pires", url: "https://github.com/KeviinPiires" },
        { name: "Silas Dev", url: "https://github.com/silasoli" },
        { name: "Gonzaga Dev", url: "https://github.com/gustavogonzag" },
        { name: "Nicolasxs", url: "https://github.com/NicolasXs" },
        { name: "Victor Hugo", url: "https://github.com/Victor0C" },
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 border-gray-800 pb-10">
            <div className="mt-16 mb-8" id="partners">
                <h3 className="text-xl font-semibold text-white mb-8 text-center">
                    Parceiros
                </h3>

                <div className="flex flex-wrap justify-center gap-5">
                    {partners.map((partner, index) => (
                        <Link
                            key={index}
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
                    ))}
                </div>
            </div>
        </div>
    )
}
