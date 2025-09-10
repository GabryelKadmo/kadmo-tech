import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import StructuredData from "@/components/StructuredData";
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
  title: {
    default: "Kadmo Tech - Desenvolvimento Digital Sob Medida | Software, Landing Pages e Design",
    template: "%s | Kadmo Tech"
  },
  description: "Kadmo - Desenvolvedor Full Stack especializado em soluções digitais personalizadas. Software eficiente, landing pages que convertem e design de alta qualidade para impulsionar seu negócio.",
  keywords: [
    "desenvolvedor full stack",
    "desenvolvimento software personalizado",
    "landing pages otimizadas",
    "design UX/UI",
    "React",
    "Next.js",
    "TypeScript",
    "desenvolvimento web",
    "freelancer developer",
    "soluções digitais",
    "aplicações web",
    "desenvolvimento front-end",
    "desenvolvimento back-end",
    "consultoria tecnológica",
    "kadmo tech",
    "portfolio desenvolvedor"
  ],
  authors: [{ name: "Kadmo", url: "https://www.kadmo.tech" }],
  creator: "Kadmo",
  publisher: "Kadmo Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-WzZ89JmhH0Sun7xXiw1Gx22IXJAoRFtDDUyhIwSRW8",
  },
  alternates: {
    canonical: "https://www.kadmo.tech",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.kadmo.tech",
    siteName: "Kadmo Tech",
    title: "Kadmo Tech - Desenvolvimento Digital Sob Medida | Software, Landing Pages e Design",
    description: "Desenvolvedor Full Stack especializado em soluções digitais personalizadas. Software eficiente, landing pages que convertem e design de alta qualidade para impulsionar seu negócio.",
    images: [
      {
        url: "https://www.kadmo.tech/SEOkadmo-tech.jpg",
        width: 1200,
        height: 630,
        alt: "Kadmo Tech - Desenvolvimento Digital Sob Medida",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kadmotech",
    creator: "@kadmotech",
    title: "Kadmo Tech - Desenvolvimento Digital Sob Medida | Software, Landing Pages e Design",
    description: "Desenvolvedor Full Stack especializado em soluções digitais personalizadas. Software eficiente, landing pages que convertem e design de alta qualidade.",
    images: [
      {
        url: "https://www.kadmo.tech/SEOkadmo-tech.jpg",
        alt: "Kadmo Tech - Desenvolvimento Digital Sob Medida",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.kadmo.tech"),
  other: {
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen`}
      >
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 -z-10" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
