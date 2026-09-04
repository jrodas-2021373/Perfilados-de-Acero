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
    <section id="nosotros" className="py-20 sm:py-28 bg-steel-900/40 relative border-t border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-orange/10 border border-industrial-orange/30 text-industrial-orange text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compromiso y Respaldo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-6">
              Impulsando el Desarrollo y la Construcción en <span className="text-industrial-orange">Guatemala</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                En <strong className="text-white">Perfilados de Acero, S.A.</strong> nos dedicamos a la distribución de productos de acero estructural de primera calidad y a la prestación de servicios mecánicos y logísticos especializados.
              </p>
              <p>
                Atendemos constructores, ingenieros residentes, talleres de estructuras metálicas, ingenios, plantas industriales y proyectos residenciales que exigen precisión dimensional, resistencia garantizada y entregas puntuales.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Precios competitivos directos de distribuidor en Guatemala.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Inventario permanente de lámina desplegada, rejilla y varilla lisa.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Operaciones de carga y descarga respaldadas por montacargas propios.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-steel-950/80 border border-steel-800">
              <span className="text-xs text-slate-400 block mb-1">Ubicación y Base de Operaciones:</span>
              <span className="text-sm font-bold text-white block">
                {companyInfo.fullLocation}
              </span>
              <span className="text-xs text-industrial-orange font-medium mt-1 block">
                {companyInfo.coverage}
              </span>
            </div>
          </div>

          {/* Right Column: Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-steel-900 border border-steel-800 hover:border-steel-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-industrial-orange/10 border border-industrial-orange/30 flex items-center justify-center text-industrial-orange mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
