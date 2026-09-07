import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';
import heroPosterImg from '../assets/images/hero-poster.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[680px] w-full flex items-end pb-20 sm:pb-28 overflow-hidden bg-black">
      {/* Background Video in continuous loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroPosterImg}
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.6] contrast-105 pointer-events-none"
      >
        <source src={`${import.meta.env.BASE_URL}hero-steel.mp4`} type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4" type="video/mp4" />
      </video>

      {/* Deep cinematic matte gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />

      {/* Hero Content - Architectural Left-Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Subtle Monospace Tag */}
          <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
            Guatemala · Suministro Estructural & Taller
          </div>

          {/* Monumental, Pure White Title - No rainbow gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95]">
            Acero de <br />
            Resistencia
          </h1>

          {/* Calm, Direct Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
            Distribución directa de lámina desplegada, rejilla electroforjada, varillas y servicios de ranuración de tubería para proyectos en todo el país.
          </p>

          {/* High-End Architectural Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-black font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              <span>Ver Catálogo</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href={createWhatsAppLink("Hola Perfilados de Acero, S.A., me comunico desde la web para cotizar materiales.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-3.5 rounded-full text-xs uppercase tracking-wider backdrop-blur-md transition-all"
            >
              <span>Cotizar en WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Right Coordinate Indicator */}
      <div className="hidden lg:block absolute bottom-20 right-8 z-10 text-right font-mono text-[11px] text-slate-500 tracking-wider uppercase">
        <span>Ciudad de Guatemala</span> <br />
        <span className="text-slate-400">Entregas a Nivel Nacional</span>
      </div>
    </section>
  );
};
