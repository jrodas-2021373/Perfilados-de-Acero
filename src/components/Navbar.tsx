import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';
import { LogoIcon } from './LogoIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Productos', href: '#productos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cotizador', href: '#cotizador' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5' 
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Official Steel Emblem */}
          <a href="#inicio" className="group flex items-center gap-3">
            <div className={`p-1.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-slate-950 text-white shadow-sm' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
            }`}>
              <LogoIcon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg font-black tracking-wider uppercase transition-colors ${
                isScrolled ? 'text-slate-950 group-hover:text-slate-700' : 'text-white group-hover:text-slate-200'
              }`}>
                PERFILADOS DE ACERO
              </span>
              <span className={`text-[10px] tracking-widest font-mono ${
                isScrolled ? 'text-slate-500' : 'text-slate-400'
              }`}>
                S.A. · GUATEMALA
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-slate-950' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Minimalist CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={createWhatsAppLink("Hola, deseo consultar disponibilidad y cotización de acero.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all ${
                isScrolled
                  ? 'text-white bg-slate-950 hover:bg-slate-800 shadow-sm'
                  : 'text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm'
              }`}
            >
              <span>Cotizar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-6 space-y-4 animate-in fade-in duration-200 shadow-xl ${
            isScrolled ? 'bg-white border-slate-200' : 'bg-black/95 border-white/10 backdrop-blur-xl'
          }`}>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-1 transition-colors ${
                    isScrolled ? 'text-slate-700 hover:text-slate-950' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className={`pt-3 border-t ${isScrolled ? 'border-slate-200' : 'border-white/10'}`}>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider hover:bg-slate-800"
              >
                <span>Cotizar por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
