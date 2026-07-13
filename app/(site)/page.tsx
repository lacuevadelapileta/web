import { HeroSection } from "@/components/home/HeroSection"
import { StatsBar } from "@/components/home/StatsBar"
import { AboutSection } from "@/components/home/AboutSection"
import { MediosMarquee } from "@/components/home/MediosMarquee"
import { VisitaSection } from "@/components/home/VisitaSection"
import { EntradasSection } from "@/components/home/EntradasSection"
import { SalasSection } from "@/components/home/SalasSection"
import { GaleriaPreview } from "@/components/home/GaleriaPreview"
import { ReviewsSection } from "@/components/home/ReviewsSection"
import { CtaBand } from "@/components/home/CtaBand"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <MediosMarquee />
      <AboutSection />
      <VisitaSection />
      <EntradasSection />
      <SalasSection />
      <GaleriaPreview />
      <ReviewsSection />
      <CtaBand />
    </>
  )
}
