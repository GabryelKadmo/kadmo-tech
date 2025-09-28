import { ContactSection } from '@/components/custom/ContactSection'
import { Footer } from '@/components/custom/Footer'
import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import PartnersSection from '@/components/custom/PartnersSection'
// import { PortfolioSection } from '@/components/custom/PortfolioSection'
import { ProcessSection } from '@/components/custom/ProcessSection'
import { ServicesSection } from '@/components/custom/ServicesSection'
import ScrollVelocity from '@/components/ScrollVelocity'
import { Metadata } from 'next'
// import SplineRobot from '@/components/SplineRobot'
// import { StatsSection } from '@/components/custom/StatsSection'
import React from 'react'

export const metadata: Metadata = {
  title: "Kadmo Tech - Desenvolvimento Digital Sob Medida | Portfolio Full Stack",
  description: "Desenvolvedor Full Stack especializado em React, Next.js e TypeScript. Criação de software personalizado, landing pages otimizadas e design UX/UI moderno. Portfolio com projetos inovadores.",
  keywords: [
    "desenvolvedor full stack portfolio",
    "React developer Brasil",
    "Next.js specialist",
    "TypeScript developer",
    "landing pages que convertem",
    "desenvolvimento web moderno",
    "UX UI design",
    "software sob medida",
    "aplicações web responsivas",
    "freelancer developer"
  ],
  openGraph: {
    title: "Kadmo Tech - Portfolio Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em React, Next.js e TypeScript. Confira meu portfolio com projetos inovadores e soluções digitais personalizadas.",
    images: [
      {
        url: "https://www.kadmo.tech/SEOkadmo-tech.jpg",
        width: 1200,
        height: 630,
        alt: "Kadmo Tech - Portfolio Full Stack Developer",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <section className='my-20' aria-label="Desenvolvedor identificação">
        <ScrollVelocity
          texts={['Gabryel Kadmo', 'Front-end Developer']}
          velocity={100}
          className="text-white"
        />
      </section>
      <ProcessSection />
      <ContactSection />
      <PartnersSection />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kadmo Tech - Desenvolvimento Digital Sob Medida",
            "description": "Portfolio de desenvolvedor Full Stack especializado em React, Next.js e TypeScript",
            "url": "https://www.kadmo.tech",
            "mainEntity": {
              "@type": "Person",
              "name": "Gabryel Kadmo",
              "jobTitle": "Desenvolvedor Full Stack",
              "url": "https://www.kadmo.tech",
              "sameAs": [
                "https://github.com/GabryelKadmo",
                "https://www.linkedin.com/in/gabryel-kadmo/"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.kadmo.tech"
                }
              ]
            }
          })
        }}
      />
    </main>
  )
}
