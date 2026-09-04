import React from 'react';
import { servicesData } from '../data/services';
import { Wrench, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-steel-900/60 relative border-t border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-orange/10 border border-industrial-orange/30 text-industrial-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Servicios de Taller y Maquinaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Servicios Industriales Especializados
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Soluciones integrales de mecanizado y apoyo logístico para obras, contratistas y plantas de manufactura en toda Guatemala.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 sm:space-y-16">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const quoteMsg = `Hola, me interesa cotizar el servicio de *${service.title}*. ¿Podrían brindarme información sobre tarifas y disponibilidad?`;

            return (
              <div 
                key={service.id}
                className="rounded-3xl bg-steel-900 border border-steel-800 p-6 sm:p-10 shadow-xl overflow-hidden hover:border-steel-700 transition-all"
              >
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                  {/* Service Image */}
                  <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative group h-64 sm:h-80 lg:h-96">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-steel-950/80 backdrop-blur-md rounded-xl border border-steel-700/80">
                      <span className="text-xs font-bold text-industrial-orange block uppercase tracking-wider">
                        Servicio Certificado
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Key features */}
                      <div className="space-y-2.5 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specs pills */}
                      <div className="bg-steel-950/70 p-4 rounded-xl border border-steel-800/80 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.specs.map((sp, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <span className="text-slate-400 block font-medium">{sp.label}:</span>
                            <span className="text-white font-semibold">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <a
                        href={createWhatsAppLink(quoteMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-industrial-orange to-industrial-orange-hover text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-industrial-orange/20 hover:scale-105 active:scale-95 transition-all text-sm group"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
