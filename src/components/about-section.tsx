import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          О себе
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Привет! Меня зовут Константин, и я Frontend Developer. Я увлечен созданием красивых, 
              интуитивно понятных и функциональных веб-приложений. Каждый проект для меня — это 
              возможность воплотить идеи в жизнь и создать что-то особенное.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-burgundy">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Чистый код</h3>
                <p className="text-muted-foreground">
                  Пишу читаемый, масштабируемый и поддерживаемый код, следуя лучшим практикам разработки
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-burgundy">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">UI/UX дизайн</h3>
                <p className="text-muted-foreground">
                  Создаю интуитивные интерфейсы с отличным пользовательским опытом и современным дизайном
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-burgundy">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Быстрая разработка</h3>
                <p className="text-muted-foreground">
                  Использую современные инструменты и подходы для эффективной и качественной разработки
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}