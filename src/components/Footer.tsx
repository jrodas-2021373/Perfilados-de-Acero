import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { companyInfo, createWhatsAppLink } from '../data/company';
import { LogoIcon } from './LogoIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-950 border-t border-steel-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center shadow-md p-1.5">
                <LogoIcon className="w-full h-full text-slate-950" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                  PERFILADOS <span className="text-slate-300 font-bold">DE ACERO</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  S.A. · GUATEMALA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Líderes en distribución y transformación de acero para la construcción y la industria metalmecánica en Guatemala. Lámina desplegada, rejilla electroforjada, varilla, perfiles y servicios de ranuración de tubería y renta de montacargas.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-300 flex-shrink-0" />
                <span>{companyInfo.fullLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={createWhatsAppLink()} className="hover:text-white transition-colors">
                  {companyInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-300 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Catálogo de Productos</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Servicios Industriales</a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors">Cotizador en Línea</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Sobre la Empresa</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto y Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Main Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Productos de Acero
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Lámina Desplegada</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Rejilla Electroforjada</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Varilla Redonda Lisa</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Costaneras C Galvanizadas</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Ángulos y Platinas A36</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Tubería Estructural</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Help */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Servicios Especiales
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Ranuración de Tubos (Roll Grooving)</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Renta de Montacargas</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Corte a Medida de Perfiles</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Despacho en los 22 Departamentos</a>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-steel-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} {companyInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Ciudad de Guatemala, Centroamérica</span>
            <a 
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              WhatsApp Ventas: {companyInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
