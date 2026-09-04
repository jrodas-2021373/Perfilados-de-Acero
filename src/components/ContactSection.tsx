import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { companyInfo, createWhatsAppLink } from '../data/company';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*MENSAJE DE CONTACTO WEB - PERFILADOS DE ACERO, S.A.*\n\n` +
      `👤 *Nombre:* ${formData.name}\n` +
      `🏢 *Empresa / Proyecto:* ${formData.company || 'Particular'}\n` +
      `📱 *Teléfono:* ${formData.phone}\n` +
      `✉️ *Correo:* ${formData.email}\n` +
      `💬 *Mensaje:* ${formData.message}\n`;

    const url = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-steel-950 relative border-t border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-orange/10 border border-industrial-orange/30 text-industrial-orange text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Estamos a su Servicio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Contáctenos y Solicite su Cotización
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nuestro equipo de ventas técnicas está disponible para asesorarle con presupuestos formales, fichas técnicas y logística de entrega en obra.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {/* Card 1: WhatsApp */}
          <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800 text-center flex flex-col items-center justify-between hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">WhatsApp y Teléfono</h3>
            <p className="text-xs text-slate-400 mb-4">Atención comercial inmediata</p>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {companyInfo.phoneFormatted}
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800 text-center flex flex-col items-center justify-between hover:border-industrial-orange/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-industrial-orange/10 text-industrial-orange flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Correo Electrónico</h3>
            <p className="text-xs text-slate-400 mb-4">Cotizaciones formales y planos</p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-xs sm:text-sm font-bold text-industrial-orange hover:underline transition-colors break-all"
            >
              {companyInfo.email}
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800 text-center flex flex-col items-center justify-between hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Ubicación y Despacho</h3>
            <p className="text-xs text-slate-400 mb-2">{companyInfo.location}</p>
            <span className="text-xs font-semibold text-blue-400">
              Cobertura en los 22 departamentos
            </span>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800 text-center flex flex-col items-center justify-between hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Horario de Atención</h3>
            <div className="text-xs text-slate-300 space-y-1 mb-2">
              <p>{companyInfo.hours.weekdays}</p>
              <p>{companyInfo.hours.saturday}</p>
            </div>
            <span className="text-[11px] text-slate-400">{companyInfo.hours.sunday}</span>
          </div>
        </div>

        {/* Contact Form & Map/Coverage Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form */}
          <div className="lg:col-span-7 bg-steel-900 border border-steel-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Envíenos un mensaje directo
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Complete el formulario y le contactaremos de inmediato por WhatsApp o correo.
            </p>

            {formSent && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center gap-3 text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>¡Mensaje preparado! Se ha abierto el chat de WhatsApp para completar el envío.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Ing. Carlos Morales"
                    className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-industrial-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Empresa / Proyecto
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ej. Constructora del Sur / Proyecto Obra"
                    className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-industrial-orange transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+502 0000-0000"
                    className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-industrial-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-industrial-orange transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mensaje o requerimiento de materiales *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describa los productos, cantidades o servicios que necesita..."
                  className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-industrial-orange transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-industrial-orange to-industrial-orange-hover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-industrial-orange/30 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Logistics & Map visual */}
          <div className="lg:col-span-5 bg-steel-900 border border-steel-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Logística y Entregas en Guatemala
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Contamos con coordinación logística para despacho en plataformas y camiones adecuados para el transporte seguro de varillas de 6 metros, láminas de 4x8 pies y rejillas electroforjadas.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 rounded-xl bg-steel-950/70 border border-steel-800">
                  <span className="text-xs font-bold text-industrial-orange block uppercase tracking-wider">
                    Área Metropolitana:
                  </span>
                  <span className="text-xs text-slate-200">
                    Ciudad de Guatemala, Mixco, Villa Nueva, San Miguel Petapa, Santa Catarina Pinula y Carretera a El Salvador.
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-steel-950/70 border border-steel-800">
                  <span className="text-xs font-bold text-industrial-orange block uppercase tracking-wider">
                    Departamentos y Costa:
                  </span>
                  <span className="text-xs text-slate-200">
                    Escuintla, Puerto Quetzal, Quetzaltenango, San Marcos, Chimaltenango, Zacapa, Izabal, Petén y todo el interior.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick direct WhatsApp box */}
            <div className="pt-4 border-t border-steel-800">
              <a
                href={createWhatsAppLink("Hola, necesito consultar sobre tiempos de entrega y flete para un pedido de acero.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Coordinar Despacho por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
