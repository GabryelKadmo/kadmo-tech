import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import { ServicesSection } from '@/components/custom/ServicesSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
    </div>
  )
}
