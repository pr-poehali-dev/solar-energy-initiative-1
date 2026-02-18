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
    <div className="dark bg-background text-foreground min-h-screen relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/c928aad2-3861-4441-b968-365943f97160/files/102f1322-99a5-4bce-b7e6-d3e14a06fe58.jpg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/10 via-background/50 to-background/90" />
      <Navbar />
      <main className="relative z-10 flex min-h-screen flex-col items-center">
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