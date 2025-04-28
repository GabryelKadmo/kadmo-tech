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
  title: "KDM Tecnologia - Software, Landing Pages e Design",
  description: "Desenvolvimento sob medida para empresas. Software eficiente, landing pages que convertem e design de alta qualidade.",
  openGraph: {
    title: "KDM Tecnologia - Desenvolvimento Digital Sob Medida",
    description: "Software personalizado, landing pages otimizadas e design profissional para impulsionar o seu negócio.",
    url: "https://www.kadmo.tech",
    type: "website",
    siteName: "KDM Tecnologia",
    images: [
      {
        url: "https://www.kadmo.tech/Kadmo-renascentismo.png",
        width: 1200,
        height: 630,
        alt: "Desenvolvimento de Software, Landing Pages e Design",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", 
    title: "KDM Tecnologia - Desenvolvimento Digital Sob Medida",
    description: "Software personalizado, landing pages otimizadas e design profissional para impulsionar o seu negócio.",
    images: ["https://www.kadmo.tech/Kadmo-renascentismo.png"],
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
