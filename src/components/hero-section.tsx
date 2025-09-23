import { Button } from "@/components/ui/button"
import { Github, Mail, Send } from "lucide-react"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--burgundy-light))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--brown-warm))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-foreground to-gold bg-clip-text text-transparent">
          Константин
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary-foreground/90">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Готов творить магию с помощью современных веб-технологий и превращать идеи в красивые интерфейсы
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToPortfolio}
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm"
          >
            Посмотреть работы
          </Button>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => window.open("https://github.com/kryukaevk", "_blank")}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => window.open("https://t.me/KryukaevKostya", "_blank")}
            >
              <Send className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => window.location.href = "mailto:kryukaevk@inbox.ru"}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}