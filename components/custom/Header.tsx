"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import MobileHeader from './MobileHeader';

export default function Header() {
    const pathname = usePathname();

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
    };

    return (
        <>
            <header
                className="sticky top-0 z-40 backdrop-blur-md bg-black/30 shadow-lg border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
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
                            // { id: "portfolio", label: "Portfólio" },
                            // { id: "contact", label: "Contato" },
                            { id: "services", label: "Serviços" },
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
                    {/* Mobile Header Component */}
                    <MobileHeader />
                    <nav
                        className="hidden lg:flex space-x-4 md:space-x-5"
                    >
                        {[
                            { icon: <FiInstagram size={24} />, href: "https://www.instagram.com/kadmo.jsx/", color: "hover:text-gray-300" },
                            // { icon: <FaWhatsapp size={24} />, href: "https://abrir.link/RKPeG", color: "hover:text-green-400" },
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
                </div>
            </header>


        </>
    );
}