import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Header() {
    return (
        <div className='flex justify-evenly items-center p-4 backdrop-blur-6xl bg-[#16161a] shadow-md'>
            <div className='flex items-center space-x-4'>
                <Link href="/" className="flex items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
                        <div className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/Kdm-Logo.png"
                                alt="Logo"
                                width={85}
                                height={85}
                                className="transition-all duration-500 group-hover:brightness-125"
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <nav className='space-x-4 text-white'>
                <Link href="/" className='hover:text-gray-400 transition-colors duration-300'>Portfólio</Link>
                <Link href="/contact" className='hover:text-gray-400 transition-colors duration-300'>Contato</Link>
                <Link href="/contact" className='hover:text-gray-400 transition-colors duration-300'>Parceiros</Link>
                <Link href="/about" className='hover:text-gray-400 transition-colors duration-300'>Sobre</Link>
            </nav>
            <nav className='flex space-x-5'>
                <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-pink-500 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                >
                    <FiInstagram size={36} />
                </Link>
                <Link
                    href="https://wa.me/5573991548689?text=Olá,%20gostaria%20de%20mais%20informações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-green-400 transition-all duration-300 hover:scale-110"
                    aria-label="Whatsapp"
                >
                    <FaWhatsapp size={36} />
                </Link>
                <Link
                    href="https://github.com/GabryelKadmo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-gray-300 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                >
                    <FiGithub size={36} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/gabryel-kadmo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                >
                    <FiLinkedin size={36} />
                </Link>
            </nav>
        </div>
    )
}