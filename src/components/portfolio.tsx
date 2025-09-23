import { Navigation } from "./navigation"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { PortfolioSection } from "./portfolio-section"
import { ContactSection } from "./contact-section"

export function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Константин. Создано с ❤️ и кодом.
          </p>
        </div>
      </footer>
    </div>
  )
}