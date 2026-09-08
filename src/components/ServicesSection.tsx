import React from 'react';
import { servicesData } from '../data/services';
import { Wrench, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Wrench className="w-3.5 h-3.5 text-slate-800" />
            <span>Servicios de Taller y Maquinaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">
            Servicios Industriales Especializados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-stretch`}>
                  {/* Service Image */}
                  <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md relative group min-h-[300px] sm:min-h-[380px] lg:min-h-0 self-stretch bg-slate-100 flex flex-col justify-end">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="relative z-10 m-4 sm:m-6 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm">
                      <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                        Servicio Certificado
                      </span>
                      <span className="text-sm font-bold text-slate-950">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Key features */}
                      <div className="space-y-2.5 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specs pills */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.specs.map((sp, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <span className="text-slate-500 block font-medium">{sp.label}:</span>
                            <span className="text-slate-950 font-semibold">{sp.value}</span>
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
                        className="inline-flex items-center gap-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
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
