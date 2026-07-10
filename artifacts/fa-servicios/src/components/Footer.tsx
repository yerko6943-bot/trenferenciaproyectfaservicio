import { Link } from "wouter";
import { company } from "@/data/company";
import { MapPin, Phone, Mail } from "lucide-react";
import logoImg from "@assets/2cbf6ee3-c8bf-4008-84be-41fefe3f1f5d_1783650071320.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#031B4E] text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="FA Servicios"
                className="h-12 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-300 mt-2 max-w-sm">
              {company.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-sm inline-block"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Nuestra Empresa</span>
                </Link>
              </li>
              <li>
                <Link href="/proyectos">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Proyectos Realizados</span>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Servicios y Contacto</span>
                </Link>
              </li>
              <li>
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Correo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-sm inline-block"></span>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">{company.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">{company.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left text-sm text-gray-400">
          <p>© {currentYear} {company.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
