import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { company } from "@/data/company";
import { Clock, Users, ShieldCheck, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import equipoImg from "@assets/ChatGPT_Image_10_jul_2026,_10_54_38_p.m._1783738490191.png";
import { useEffect } from "react";

export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F5F8]">
      <SEO 
        title="FA Servicios | Mantención y Servicios Industriales en Chañaral"
        description="Empresa de mantención, reparación de equipos, servicios industriales, fabricación de estructuras y arriendo de maquinaria en Chañaral y la Región de Atacama."
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#031B4E] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format&fit=crop" 
            alt="Fondo industrial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031B4E] via-[#031B4E]/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 text-white font-medium text-sm rounded mb-6 backdrop-blur-sm">
                SOLUCIONES INDUSTRIALES
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent drop-shadow-lg">FA SERVICIOS</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-200 mb-4">
                Mantención, reparación y soluciones industriales para mantener tu operación en funcionamiento.
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">Atendemos empresas y operaciones industriales, entregando soluciones confiables y adaptadas a las necesidades de cada cliente.
</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-base">
                    Solicitar cotización
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent border-white text-white hover:bg-white/10" onClick={() => setLocation('/proyectos')}>
                  Conocer nuestros trabajos
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-lg overflow-hidden border-l-8 border-primary shadow-2xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&auto=format&fit=crop" 
                  alt="Operación industrial FA Servicios" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Quiénes Somos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img 
                  src={equipoImg}
                  alt="Equipo FA Servicios" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#082B7A] rounded-lg -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary rounded-lg -z-10 hidden md:block"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#082B7A] mb-6">Experiencia y compromiso en cada servicio</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>FA Servicios es una empresa regional con capitales 100% locales, ubicada en la comuna de Chañaral. Entregamos soluciones de mantención, reparación, servicios industriales, arriendo de equipos y apoyo operacional.</p>
                <p>Desde hace más de cuatro años trabajamos para responder a las necesidades de nuestros clientes, velando por la continuidad y el control operacional mediante nuestra experiencia, capacidades técnicas e infraestructura.</p>
                <p>Contamos con profesionales y trabajadores capacitados para desarrollar cada servicio de manera responsable, segura y eficiente.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Principales Áreas de Trabajo */}
      <section className="py-20 bg-[#F3F5F8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082B7A] mb-4">Principales Áreas de Trabajo</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Soluciones integrales para la industria, adaptadas a las necesidades específicas de cada proyecto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mantención y reparación de equipos",
                desc: "Inspección, diagnóstico, reparación y cambio de componentes para equipos pesados y livianos.",
                img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80&auto=format&fit=crop"
              },
              {
                title: "Servicios industriales",
                desc: "Mantención de instalaciones, reparación de estructuras, fabricación de piezas, limpieza industrial y obras menores.",
                img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop"
              },
              {
                title: "Arriendo de equipos",
                desc: "Maquinaria y equipos de apoyo para trabajos industriales, operacionales y de mantenimiento.",
                img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#031B4E]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#082B7A] mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{card.desc}</p>
                  <Button variant="outline" className="w-full mt-auto" onClick={() => setLocation('/servicios')}>
                    Ver servicios
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Por qué elegir FA Servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082B7A] mb-4">Por qué elegir FA Servicios</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-10 h-10 text-primary" />, title: "Respuesta oportuna", desc: "Atendemos los requerimientos de nuestros clientes con rapidez y responsabilidad." },
              { icon: <Users className="w-10 h-10 text-primary" />, title: "Personal capacitado", desc: "Contamos con trabajadores y profesionales preparados para desarrollar labores industriales." },
              { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: "Compromiso con la seguridad", desc: "Planificamos y ejecutamos cada trabajo respetando los procedimientos de seguridad." },
              { icon: <Cog className="w-10 h-10 text-primary" />, title: "Soluciones adaptadas", desc: "Evaluamos cada requerimiento para entregar una solución acorde con la operación del cliente." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F3F5F8] p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-primary/5">
                  <Cog className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sm mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#082B7A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Compromiso Operacional CTA */}
      <section className="relative py-24 bg-[#031B4E] overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-20">
          <div className="w-full h-full bg-primary transform skew-x-12 translate-x-32"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trabajamos para mantener la continuidad de tu operación</h2>
            <p className="text-xl text-gray-300 mb-10">
              Nuestro objetivo es entregar soluciones confiables, eficientes y seguras, reduciendo los tiempos de detención y apoyando las necesidades operacionales de cada cliente.
            </p>
            <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl">
                Hablar con un asesor
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
