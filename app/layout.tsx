import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KDM Tecnologia",
  description: "Melhor solução para o seu negócio",
  openGraph: {
    title: "KDM Tecnologia",
    description: "Melhor solução para o seu negócio",
    images: [
      {
        url: "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/464576668_573410681952369_2131898454168276175_n.jpg?ccb=11-4&oh=01_Q5Aa1QHDTtD6WJktgKhW4qapSaFgpFf6INv1iTp7ruHvth-SAQ&oe=681B49DE&_nc_sid=5e03e0&_nc_cat=104", // URL da imagem que aparecerá
        width: 1200,
        height: 630,
        alt: "Imagem representativa do seu site",
      },
    ],
    url: "https://www.kadmo.tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
