import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { DashboardPreview } from "@/components/DashboardPreview"
import { FeaturesSection } from "@/components/FeaturesSection"
import { NextGenSection } from "@/components/NextGenSection"
import { PersonalOsSection } from "@/components/PersonalOsSection"
import { StatsSection } from "@/components/StatsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { CtaSection } from "@/components/CtaSection"
import { LicensesSection } from "@/components/LicensesSection"
import { AboutSection } from "@/components/AboutSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <HeroSection />
        <AboutSection />
        <DashboardPreview />
        <FeaturesSection />
        <NextGenSection />
        <PersonalOsSection />
        <StatsSection />
        <LicensesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default Index