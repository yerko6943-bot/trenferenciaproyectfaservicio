import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { company } from "@/data/company";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, ChevronRight, X } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["Todos", "Mantención", "Reparación", "Fabricación", "Limpieza industrial", "Equipos", "Estructuras"];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.filterCategory === filter);

  return (
    <div className="min-h-screen bg-[#F3F5F8]">
      <SEO 
        title="Proyectos Realizados | FA Servicios"
        description="Conoce los trabajos de mantención, reparación y servicios industriales realizados por FA Servicios en la Región de Atacama."
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#031B4E]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 text-white font-medium text-sm rounded mb-6">
              EXPERIENCIA EN TERRENO
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Proyectos Realizados</h1>
            <p className="text-xl text-gray-300">
              Conoce algunos de los trabajos de mantención, reparación y apoyo industrial desarrollados por FA Servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#F3F5F8] min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-[#082B7A] text-white shadow-md" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <div className="absolute inset-0 bg-[#031B4E]/30 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-primary hover:bg-primary border-none shadow-md">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#082B7A] mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-auto justify-between group-hover:text-primary transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      Ver proyecto <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#031B4E] border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesitas realizar un trabajo similar?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Envíanos los antecedentes de tu requerimiento y te ayudaremos a evaluar una solución.
          </p>
          <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6 shadow-xl">
              Solicitar cotización por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="relative max-w-4xl p-0 overflow-hidden bg-white">
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <DialogClose asChild>
                <button
                  type="button"
                  aria-label="Cerrar proyecto"
                  className="absolute top-3 left-3 z-[9999] flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg"
                >
                  <X className="h-7 w-7" />
                </button>
              </DialogClose>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-primary hover:bg-primary border-none mb-3">
                  {selectedProject.category}
                </Badge>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <DialogDescription className="text-lg text-gray-700 mb-8">
                {selectedProject.description}
              </DialogDescription>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-[#082B7A] mb-4">Actividades realizadas:</h4>
                  <ul className="space-y-3">
                    {selectedProject.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#F3F5F8] p-6 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-bold text-[#082B7A] mb-3">Resultado:</h4>
                  <p className="text-gray-700 font-medium">{selectedProject.result}</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 flex justify-end">
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto">
                    Solicitar un trabajo similar
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
