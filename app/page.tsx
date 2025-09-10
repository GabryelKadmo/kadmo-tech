import { ContactSection } from '@/components/custom/ContactSection'
import { Footer } from '@/components/custom/Footer'
import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import PartnersSection from '@/components/custom/PartnersSection'
import { PortfolioSection } from '@/components/custom/PortfolioSection'
import { ProcessSection } from '@/components/custom/ProcessSection'
import { ServicesSection } from '@/components/custom/ServicesSection'
import ScrollVelocity from '@/components/ScrollVelocity'
// import SplineRobot from '@/components/SplineRobot'
// import { StatsSection } from '@/components/custom/StatsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ScrollVelocity
        texts={['Gabryel Kadmo', 'Seja um parceiro']}
        velocity={100}
        className="text-white"
      />
      <ProcessSection />
      <ContactSection />
      {/* <SplineRobot /> */}
      {/* <StatsSection /> */}
      <PartnersSection />
      <Footer />
    </div>
  )
}
