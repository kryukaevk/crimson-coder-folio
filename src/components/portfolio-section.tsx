import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PortfolioModal, PortfolioProject } from "./portfolio-modal"
import projectEcommerce from "@/assets/project-ecommerce.jpg"
import projectWeather from "@/assets/project-weather.jpg"
import projectTaskManager from "@/assets/project-taskmanager.jpg"

const projects: PortfolioProject[] = [
  {
    id: "ecommerce",
    title: "Интернет-магазин",
    description: "Современный e-commerce сайт с корзиной и системой оплаты",
    fullDescription: "Полнофункциональный интернет-магазин, построенный на React с использованием TypeScript. Включает каталог товаров, корзину покупок, систему фильтрации и поиска, адаптивный дизайн. Реализована интеграция с платежными системами и административная панель для управления товарами.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Context API", "Local Storage"],
    image: projectEcommerce,
    githubUrl: "https://github.com/kryukaevk",
    liveUrl: "https://example-ecommerce.com"
  },
  {
    id: "weather",
    title: "Погодное приложение",
    description: "Приложение для отслеживания погоды с красивыми анимациями",
    fullDescription: "Современное погодное приложение с интуитивным интерфейсом. Показывает текущую погоду, прогноз на несколько дней, интерактивные графики и анимации. Поддерживает геолокацию и поиск по городам. Адаптивный дизайн работает на всех устройствах.",
    technologies: ["React", "JavaScript", "CSS3", "Weather API", "Chart.js", "Geolocation API"],
    image: projectWeather,
    githubUrl: "https://github.com/kryukaevk"
  },
  {
    id: "taskmanager",
    title: "Менеджер задач",
    description: "Канбан-доска для управления проектами и задачами",
    fullDescription: "Продвинутый менеджер задач с функциональностью канбан-доски. Поддерживает создание проектов, добавление задач, drag-and-drop перемещение между колонками, установку приоритетов и дедлайнов. Реализована система уведомлений и фильтрации задач.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Vuex", "Vue Router", "Drag & Drop API"],
    image: projectTaskManager,
    githubUrl: "https://github.com/kryukaevk"
  }
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Мои работы
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Несколько проектов, над которыми я работал
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group cursor-pointer border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-burgundy hover:-translate-y-2"
                onClick={() => openModal(project)}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "fade-in 0.6s ease-out forwards"
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-burgundy-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <PortfolioModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </section>
  )
}