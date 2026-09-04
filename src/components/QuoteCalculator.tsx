import React, { useState } from 'react';
import { productsData } from '../data/products';
import { servicesData } from '../data/services';
import { Calculator, MessageCircle, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/company';

export const QuoteCalculator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(productsData[0].id);
  const [selectedMeasure, setSelectedMeasure] = useState<string>(productsData[0].measures[0]);
  const [quantity, setQuantity] = useState<number>(10);
  const [deliveryLocation, setDeliveryLocation] = useState<string>('Ciudad de Guatemala');
  const [projectNotes, setProjectNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Combine products and services for selection
  const catalogItems = [
    ...productsData.map(p => ({ id: p.id, name: p.name, measures: p.measures, isService: false })),
    ...servicesData.map(s => ({ 
      id: s.id, 
      name: `[Servicio] ${s.title}`, 
      measures: s.specs.map(sp => `${sp.label}: ${sp.value}`),
      isService: true 
    })),
    { id: 'otro', name: 'Otro Producto / Medida Especial', measures: ['Especificar en notas'], isService: false }
  ];

  const currentItem = catalogItems.find(item => item.id === selectedProductId) || catalogItems[0];

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setSelectedProductId(newId);
    const item = catalogItems.find(i => i.id === newId);
    if (item && item.measures.length > 0) {
      setSelectedMeasure(item.measures[0]);
    }
  };

  // Generate structured message
  const generateMessage = () => {
    let msg = `*SOLICITUD DE COTIZACIÓN - PERFILADOS DE ACERO, S.A.*\n\n`;
    msg += `📦 *Producto/Servicio:* ${currentItem.name}\n`;
    msg += `📐 *Medida / Calibre:* ${selectedMeasure}\n`;
    msg += `🔢 *Cantidad solicitada:* ${quantity} unidades\n`;
    msg += `📍 *Lugar de entrega / Proyecto:* ${deliveryLocation}\n`;
    if (projectNotes.trim()) {
      msg += `📝 *Observaciones adicionales:* ${projectNotes.trim()}\n`;
    }
    msg += `\nFavor confirmar disponibilidad, precio unitario y tiempo de despacho. ¡Muchas gracias!`;
    return msg;
  };

  const handleWhatsAppSend = () => {
    const msg = generateMessage();
    const url = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleEmailSend = () => {
    const msg = generateMessage();
    const subject = encodeURIComponent(`Solicitud de Cotización: ${currentItem.name} - ${deliveryLocation}`);
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cotizador" className="py-20 sm:py-28 bg-steel-950 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-industrial-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Cotización Rápida y Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Cotizador Inteligente en Línea
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Arme su pedido preliminar seleccionando materiales, medidas y ubicación de entrega. Le responderemos de inmediato con la cotización formal para su proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Settings */}
          <div className="lg:col-span-7 bg-steel-900/90 border border-steel-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-industrial-orange/20 text-industrial-orange flex items-center justify-center text-sm font-black">1</span>
              <span>Seleccione los detalles de su requerimiento</span>
            </h3>

            <div className="space-y-5">
              {/* Product Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Producto o Servicio requerido:
                </label>
                <select
                  value={selectedProductId}
                  onChange={handleProductChange}
                  className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange transition-colors"
                >
                  {catalogItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Measure Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Medida, calibre o especificación técnica:
                </label>
                <select
                  value={selectedMeasure}
                  onChange={(e) => setSelectedMeasure(e.target.value)}
                  className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange transition-colors"
                >
                  {currentItem.measures.map((measure, idx) => (
                    <option key={idx} value={measure}>
                      {measure}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Cantidad estimada:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Lugar o departamento de entrega:
                  </label>
                  <input
                    type="text"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    placeholder="Ej. Ciudad de Guatemala, Escuintla, Quetzaltenango..."
                    className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange transition-colors"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Notas adicionales (opcional):
                </label>
                <textarea
                  rows={3}
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="¿Requiere corte a medida, acabado galvanizado, o entrega en fecha específica? Escríbalo aquí..."
                  className="w-full bg-steel-950 border border-steel-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Live Preview Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-steel-900 to-steel-950 border border-steel-700 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-steel-800">
                <span className="text-xs font-bold text-industrial-orange uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Resumen de la Solicitud</span>
                </span>
                <span className="text-xs text-emerald-400 font-medium">Listo para enviar</span>
              </div>

              <div className="bg-steel-950/80 rounded-2xl p-4 sm:p-5 border border-steel-800 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap mb-6 select-all">
                {generateMessage()}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Envío directo a WhatsApp oficial (+502 4125 6062)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Respuesta técnica con precios formales y tiempos de entrega</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enviar Cotización por WhatsApp</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleEmailSend}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-steel-800 hover:bg-steel-700 text-slate-200 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-steel-700 transition-colors text-xs"
                >
                  <Mail className="w-4 h-4 text-industrial-orange" />
                  <span>Enviar por Correo</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="px-4 py-2.5 bg-steel-800 hover:bg-steel-700 text-slate-300 hover:text-white rounded-xl border border-steel-700 transition-colors text-xs font-semibold"
                >
                  {copied ? '¡Copiado!' : 'Copiar Texto'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
