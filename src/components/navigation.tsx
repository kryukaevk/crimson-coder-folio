import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { id: "hero", label: "Главная" },
  { id: "about", label: "О себе" },
  { id: "skills", label: "Навыки" },
  { id: "portfolio", label: "Работы" },
  { id: "contact", label: "Контакты" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Константин
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-md transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-burgundy"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  )
}