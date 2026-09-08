import React, { useState } from 'react';
import { productsData } from '../data/products';
import { servicesData } from '../data/services';
import { FileText, MessageCircle, Mail, CheckCircle, ClipboardList, Copy, Check } from 'lucide-react';
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
    <section id="cotizador" className="py-20 sm:py-28 bg-slate-100 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-slate-800" />
            <span>Atención Comercial y Suministro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">
            Planifique y Cotice su Pedido
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Especifique los productos, medidas y destino de su obra para estructurar su requerimiento. Le responderemos con disponibilidad de inventario y cotización formal de inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Form Settings */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-900" />
                  <span>Detalles del Requerimiento</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                  Formulario de Solicitud
                </span>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Product Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Producto o Servicio requerido:
                  </label>
                  <select
                    value={selectedProductId}
                    onChange={handleProductChange}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-950 text-sm font-medium rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all shadow-xs"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Medida, calibre o especificación técnica:
                  </label>
                  <select
                    value={selectedMeasure}
                    onChange={(e) => setSelectedMeasure(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-950 text-sm font-medium rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all shadow-xs"
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
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Cantidad estimada:
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-950 text-sm font-medium rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Lugar o municipio de entrega:
                    </label>
                    <input
                      type="text"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      placeholder="Ej. Ciudad de Guatemala, Escuintla..."
                      className="w-full bg-slate-50 border border-slate-300 text-slate-950 text-sm font-medium rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Notas o especificaciones adicionales (opcional):
                  </label>
                  <textarea
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="¿Requiere corte a medida, acabado galvanizado o fecha programada? Escríbalo aquí..."
                    className="w-full bg-slate-50 border border-slate-300 text-slate-950 text-sm font-medium rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all resize-none shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Form footer reassurance */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Existencias inmediatas en bodega central</span>
              </span>
              <span className="font-bold text-slate-800">Despacho a toda Guatemala</span>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-slate-900" />
                  <span>Resumen del Requerimiento</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                  Vista Preliminar
                </span>
              </div>

              {/* Structured Summary Cards */}
              <div className="space-y-3 mb-6">
                {/* Product / Service Item */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {currentItem.isService ? 'Servicio Seleccionado' : 'Material Seleccionado'}
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-950 text-white font-bold">
                      {currentItem.isService ? 'Taller / Maniobra' : 'Catálogo de Acero'}
                    </span>
                  </div>
                  <div className="text-base font-extrabold text-slate-950">
                    {currentItem.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-1.5 flex items-center gap-1.5">
                    <span className="font-bold text-slate-700">Especificación:</span>
                    <span className="text-slate-950 font-semibold">{selectedMeasure}</span>
                  </div>
                </div>

                {/* Quantity & Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-xs">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Cantidad Estimada
                    </span>
                    <span className="text-base font-black text-emerald-700">
                      {quantity} {quantity === 1 ? 'unidad' : 'unidades'}
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-xs">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Destino de Entrega
                    </span>
                    <span className="text-sm font-black text-slate-950 truncate block">
                      {deliveryLocation || 'Por definir'}
                    </span>
                  </div>
                </div>

                {/* Additional Notes preview if present */}
                {projectNotes.trim() ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs shadow-xs">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Observaciones / Requisitos:
                    </span>
                    <p className="italic text-slate-800 line-clamp-2">"{projectNotes.trim()}"</p>
                  </div>
                ) : (
                  <div className="bg-slate-50/60 border border-dashed border-slate-200 rounded-2xl p-3.5 text-xs text-slate-400 italic">
                    Sin observaciones adicionales especificadas.
                  </div>
                )}
              </div>

              {/* Guarantees */}
              <div className="space-y-2 mb-6 pt-1">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Atención directa y confirmación de inventario vía WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Cotización formal con precios de volumen y tiempo de despacho</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar Cotización por WhatsApp</span>
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleEmailSend}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl border border-slate-300 transition-colors text-xs shadow-xs"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Enviar por Correo</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl border border-slate-300 transition-colors text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>Copiar Mensaje</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
