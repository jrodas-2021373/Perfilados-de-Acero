import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';

export const WhatsAppButton: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble */}
      {tooltipOpen && (
        <div className="hidden sm:flex items-center gap-2 bg-steel-900 border border-steel-700 text-slate-100 text-xs px-3.5 py-2 rounded-2xl shadow-xl animate-in fade-in slide-in-from-right-2 duration-300">
          <span>¿Necesita cotización de acero?</span>
          <span className="font-bold text-emerald-400">Escríbanos</span>
          <button 
            onClick={() => setTooltipOpen(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={createWhatsAppLink("Hola Perfilados de Acero, S.A., me comunico desde la web para solicitar información y precios de sus productos.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Perfilados de Acero"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group glow-orange-sm"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-industrial-orange rounded-full border-2 border-steel-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-industrial-orange rounded-full border-2 border-steel-950" />
      </a>
    </div>
  );
};
