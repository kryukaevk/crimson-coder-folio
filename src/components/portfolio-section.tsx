import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PortfolioModal, PortfolioProject } from "./portfolio-modal";
import shoesApp from "@/assets/shoes_app.png";
import wheatherApp from "@/assets/wheather_app.png";
import shawarmaApp from "@/assets/shawarma_app.png";

const projects: PortfolioProject[] = [
  {
    id: "ecommerce",
    title: "Интернет-магазин",
    description: "E-commerce сайт с корзиной и системой оплаты",
    fullDescription:
      "Полнофункциональный интернет-магазин, построенный на React. Включает каталог товаров, корзину покупок, систему фильтрации и поиска, адаптивный дизайн. Реализована авторизация и регистрация пользователей, а также личный кабинет для просмотра заказов и управления профилем. Административная панель предоставляет инструменты для управления товарами (добавление, изменение, удаление) и пользователями (просмотр списка, редактирование ролей).",
    technologies: [
      "React",
      "JavaScript",
      "StyledComponent",
      "Redux",
      "React Router",
      "Local Storage",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
    image: shoesApp,
    githubUrl: "https://github.com/kryukaevk/shoes_app",
  },
  {
    id: "sound",
    title: "Музыкальное приложение",
    description: "Приложение для прослушивания звуков природы",
    fullDescription:
      "Интерактивное веб-приложение для прослушивания звуков природы. Пользователь видит динамически генерируемый список карточек с иконками погоды, настраиваемым фоном и слайдером для регулировки громкости. Приложение использует модульную структуру для рендеринга элементов, с поддержкой TypeScript для типизации данных и Webpack для сборки.",
    technologies: ["TypeScript", "Webpack", "SCSS"],
    image: wheatherApp,
    githubUrl: "https://github.com/kryukaevk/wheather_app",
    liveUrl: "https://kryukaevk.github.io/wheather_app/",
  },
  {
    id: "shawarma",
    title: "Shawarma-app",
    description: "Сайт для заказа еды с корзиной",
    fullDescription:
      "Shawarma App — это современное веб-приложение для заказа шавермы, разработанное как полнофункциональный фронтенд-проект. Пользователи могут просматривать каталог блюд (от классической до гавайской шавермы), фильтровать по категориям (Россия, Фри, Гавайи, В пите), выбирать вес, соус и добавки. Приложение включает детальные описания продуктов, изображения и индикатор популярности. Осуществлена навигация и корзина заказов (на базе Redux).",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TailwindCSS",
      "React Router",
      "Local Storage",
    ],
    image: shawarmaApp,
    githubUrl: "https://github.com/kryukaevk/shawarma-app",
    liveUrl: "https://kryukaevk.github.io/shawarma-app/",
  },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

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
                  animation: "fade-in 0.6s ease-out forwards",
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
  );
}
