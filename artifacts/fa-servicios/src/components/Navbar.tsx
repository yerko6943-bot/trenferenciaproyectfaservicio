import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import logoImg from "@assets/2cbf6ee3-c8bf-4008-84be-41fefe3f1f5d_1783650071320.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Nuestra Empresa" },
    { href: "/proyectos", label: "Proyectos Realizados" },
    { href: "/servicios", label: "Servicios y Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                src={logoImg}
                alt="FA Servicios"
                className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
                style={{ filter: isScrolled ? 'none' : 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`text-sm font-medium transition-colors hover:text-primary relative py-2 cursor-pointer ${
                        location === link.href
                          ? "text-primary"
                          : isScrolled ? "text-foreground" : "text-white/90"
                      }`}
                    >
                      {link.label}
                      {location === link.href && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="min-h-[44px]">
                Solicitar cotización
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground z-50 bg-white/80 rounded-md backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6 pb-6`}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className={`block py-2 ${
                    location === link.href ? "text-primary border-b-2 border-primary inline-block" : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pb-8">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full min-h-[44px] text-lg">
              Solicitar cotización
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
