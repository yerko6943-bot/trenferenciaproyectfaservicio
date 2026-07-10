import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ServicesContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    correo: "",
    ciudad: "",
    servicio: "",
    descripcion: "",
    fecha: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, servicio: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Fallback: open mailto
      const subject = encodeURIComponent(`Nueva solicitud de cotización: ${formData.servicio || 'Servicio'}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Teléfono: ${formData.telefono}
Correo: ${formData.correo}
Ciudad: ${formData.ciudad}
Servicio Requerido: ${formData.servicio}
Fecha aproximada: ${formData.fecha}

Descripción:
${formData.descripcion}`
      );
      
      window.open(`mailto:${company.email}?subject=${subject}&body=${body}`);
      
      toast({
        title: "Solicitud preparada",
        description: "Se ha abierto tu cliente de correo para enviar la solicitud.",
      });
      
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Servicios y Contacto | FA Servicios"
        description="Mantención de equipos, servicios industriales, fabricación de estructuras, arriendo de maquinaria e inspección vehicular en Chañaral."
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#031B4E]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 text-white font-medium text-sm rounded mb-6">
              SOLUCIONES PARA TU OPERACIÓN
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Servicios y Contacto</h1>
            <p className="text-xl text-gray-300">
              Conoce nuestras áreas de servicio y comunícate directamente con nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute -bottom-6 ${i % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-primary/10 rounded-full -z-10 hidden md:block blur-2xl`}></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={i % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <h2 className="text-3xl font-bold text-[#082B7A] mb-4">{service.title}</h2>
                  <div className="h-1 w-16 bg-primary mb-6"></div>
                  <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {service.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.note && (
                    <div className="p-4 bg-[#F3F5F8] border-l-4 border-[#082B7A] rounded-r-md mt-6">
                      <p className="text-sm text-gray-600 font-medium italic">{service.note}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F3F5F8] relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="bg-[#031B4E] text-white p-10 lg:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Conversemos sobre tu requerimiento</h2>
                <p className="text-gray-300 mb-12">
                  Cuéntanos qué servicio necesitas, dónde se realizará el trabajo y en qué fecha lo requieres. Nuestro equipo se pondrá en contacto contigo.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider mb-1">Teléfono / WhatsApp</h3>
                      <p className="text-lg">{company.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider mb-1">Correo Electrónico</h3>
                      <p className="text-lg break-all">{company.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider mb-1">Ubicación y Cobertura</h3>
                      <p className="text-lg">{company.address}</p>
                      <p className="text-sm text-gray-400 mt-1">{company.coverageArea}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col gap-3">
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="default" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">Hablar por WhatsApp</Button>
                </a>
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="w-full">
                  <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10">Llamar ahora</Button>
                </a>
                <a href={`mailto:${company.email}`} className="w-full">
                  <Button variant="ghost" className="w-full text-white hover:bg-white/10">Enviar correo</Button>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-10 lg:w-3/5">
              <h3 className="text-2xl font-bold text-[#082B7A] mb-8">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre completo *</label>
                    <Input id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium text-gray-700">Empresa</label>
                    <Input id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Ej. Minera XYZ" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-gray-700">Teléfono *</label>
                    <Input id="telefono" name="telefono" required value={formData.telefono} onChange={handleChange} placeholder="+56 9 1234 5678" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="correo" className="text-sm font-medium text-gray-700">Correo electrónico *</label>
                    <Input id="correo" name="correo" type="email" required value={formData.correo} onChange={handleChange} placeholder="correo@empresa.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="ciudad" className="text-sm font-medium text-gray-700">Ciudad o ubicación del trabajo</label>
                    <Input id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Ej. Chañaral" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="fecha" className="text-sm font-medium text-gray-700">Fecha aproximada</label>
                    <Input id="fecha" name="fecha" type="date" value={formData.fecha} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-sm font-medium text-gray-700">Servicio requerido</label>
                  <Select onValueChange={handleSelectChange} value={formData.servicio}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mantención y reparación">Mantención y reparación</SelectItem>
                      <SelectItem value="Servicios industriales">Servicios industriales</SelectItem>
                      <SelectItem value="Fabricación y estructuras">Fabricación y estructuras</SelectItem>
                      <SelectItem value="Arriendo de equipos">Arriendo de equipos</SelectItem>
                      <SelectItem value="Inspección de vehículos">Inspección de vehículos</SelectItem>
                      <SelectItem value="Otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="descripcion" className="text-sm font-medium text-gray-700">Descripción del requerimiento *</label>
                  <Textarea 
                    id="descripcion" 
                    name="descripcion" 
                    required 
                    value={formData.descripcion} 
                    onChange={handleChange} 
                    placeholder="Describe los detalles del trabajo que necesitas..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Preparando solicitud..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Enviar solicitud
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.331234!2d-70.62!3d-26.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIwJzI0LjAiUyA3MMKwMzcnMTIuMCJX!5e0!3m2!1sen!2scl!4v1620000000000!5m2!1sen!2scl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
          title="Ubicación FA Servicios"
        ></iframe>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
