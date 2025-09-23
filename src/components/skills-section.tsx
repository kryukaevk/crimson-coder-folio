import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js",
  "Tailwind CSS", "SCSS/SASS", "Bootstrap", "Webpack", "Vite",
  "Git", "GitHub", "Figma", "Responsive Design", "REST API"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Навыки и технологии
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Технологии, которые я использую для создания современных веб-приложений
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-warm text-primary-foreground border-0 hover:shadow-warm transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fade-in 0.5s ease-out forwards"
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}