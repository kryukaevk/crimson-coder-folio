import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Send } from "lucide-react"

export function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "kryukaevk@inbox.ru",
      href: "mailto:kryukaevk@inbox.ru",
      color: "text-primary"
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@KryukaevKostya",
      href: "https://t.me/KryukaevKostya",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kryukaevk",
      href: "https://github.com/kryukaevk",
      color: "text-primary"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Свяжитесь со мной
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Готов обсудить ваш проект или возможности сотрудничества
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <Card
                  key={contact.label}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-burgundy group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fade-in 0.5s ease-out forwards"
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {contact.value}
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                      onClick={() => window.open(contact.href, "_blank")}
                    >
                      Связаться
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Или напишите мне прямо сейчас
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-burgundy"
              onClick={() => window.location.href = "mailto:kryukaevk@inbox.ru"}
            >
              Написать письмо
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}