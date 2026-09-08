import React from 'react';
import { ShieldCheck, Truck, Users, Award, Target, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/company';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Acero Certificado y Confiable',
      description: 'Todos nuestros productos cumplen con estándares internacionales de composición química, ductilidad y resistencia mecánica (normas ASTM).'
    },
    {
      icon: Truck,
      title: 'Despacho a Nivel Nacional',
      description: 'Llegamos a obras y proyectos en los 22 departamentos de Guatemala, coordinando entregas puntuales y seguras con logística propia.'
    },
    {
      icon: Users,
      title: 'Asesoría Técnica Personalizada',
      description: 'Nuestro equipo le apoya en la cuantificación de materiales, selección de calibres y optimización de listas de corte para evitar sobrecostos.'
    },
    {
      icon: Target,
      title: 'Solución Integral en Acero',
      description: 'No solo comercializamos perfiles y láminas: proveemos valor agregado con ranuración especializada de tubos y renta de montacargas.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Story, Commitments & Operations */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-800" />
                <span>Compromiso y Respaldo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-5">
                Impulsando el Desarrollo y la Construcción en Guatemala
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                En <strong className="text-slate-900 font-bold">Perfilados de Acero, S.A.</strong> proveemos soluciones integrales en acero estructural certificado, respaldadas por asesoría técnica calificada, servicios de taller y logística directa a obra.
              </p>

              {/* Checklist Commitments */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                    Precios competitivos directos de distribuidor en Guatemala.
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                    Inventario permanente de perfiles, tubería, lámina y varilla.
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                    Trazabilidad y fichas técnicas certificadas para supervisión en obra.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Location & Operations Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4 mt-2">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                  Base de Operaciones y Cobertura
                </span>
                <span className="text-sm font-black text-slate-950 block">
                  {companyInfo.fullLocation}
                </span>
                <span className="text-xs text-slate-600 font-medium block mt-0.5">
                  {companyInfo.coverage}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
