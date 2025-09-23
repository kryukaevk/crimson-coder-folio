import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export interface PortfolioProject {
  id: string
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl?: string
}

interface PortfolioModalProps {
  project: PortfolioProject | null
  isOpen: boolean
  onClose: () => void
}

export function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg border border-border"
          />
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Описание проекта</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Технологии</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gradient-warm text-primary-foreground border-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            
            {project.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="flex items-center gap-2 border-primary/20 hover:border-primary/40"
              >
                <ExternalLink className="w-4 h-4" />
                Демо
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}