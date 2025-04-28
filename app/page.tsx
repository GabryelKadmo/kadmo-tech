import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import { PortfolioSection } from '@/components/custom/PortfolioSection'
import { ProcessSection } from '@/components/custom/ProcessSection'
import { ServicesSection } from '@/components/custom/ServicesSection'
import { StatsSection } from '@/components/custom/StatsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
    </div>
  )
}
