import { TopUtilityBar } from './components/TopUtilityBar'
import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { StatsBand } from './components/StatsBand'
import { WelcomeSection } from './components/WelcomeSection'
import { ServicesSection } from './components/ServicesSection'
import { FirstVisitSection } from './components/FirstVisitSection'
import { DoctorSection } from './components/DoctorSection'
import { ExperienceSection } from './components/ExperienceSection'
import { OfficeGallery } from './components/OfficeGallery'
import { TestimonialsSection } from './components/TestimonialsSection'
import { InsuranceBand } from './components/InsuranceBand'
import { AppointmentCTA } from './components/AppointmentCTA'
import { LocationSection } from './components/LocationSection'
import { SiteFooter } from './components/SiteFooter'
import { MobileActionBar } from './components/MobileActionBar'
import { ConceptBadge } from './components/ConceptBadge'

export default function App() {
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-evergreen-600 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <TopUtilityBar />
      <SiteHeader />

      <main className="pb-16 md:pb-0">
        <HeroSection />
        <StatsBand />
        <WelcomeSection />
        <ServicesSection />
        <FirstVisitSection />
        <DoctorSection />
        <ExperienceSection />
        <OfficeGallery />
        <TestimonialsSection />
        <InsuranceBand />
        <AppointmentCTA />
        <LocationSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
      <ConceptBadge />
    </>
  )
}
