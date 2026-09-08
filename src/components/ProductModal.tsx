import React, { useEffect } from 'react';
import { Product } from '../types';
import { X, CheckCircle2, MessageCircle, FileText, Layers, Shield } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const quoteMessage = `Hola Perfilados de Acero, S.A., me encuentro revisando la ficha técnica de *${product.name}* (Norma: ${product.standard || 'Estándar'}). Deseo consultar precios, disponibilidad y tiempos de entrega para mi proyecto.`;

  return (
    <div 
      className="fixed inset-0 z-[70] overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white border border-slate-200 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image Background */}
        <div className="relative min-h-[12rem] sm:min-h-[14rem] bg-slate-950 overflow-hidden flex flex-col justify-between p-5 sm:p-6">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-colors shadow-md"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Spacer to give room below close button */}
          <div className="h-6" />

          {/* Header Title & Badges */}
          <div className="relative z-10 pr-10 sm:pr-12">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {product.standard && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-white/95 text-slate-950 shadow-sm max-w-full">
                  <Shield className="w-3.5 h-3.5 text-slate-800 flex-shrink-0" />
                  <span>{product.standard}</span>
                </span>
              )}
              {product.badge && (
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-900/90 text-slate-100 border border-slate-700 shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm flex-1 text-slate-700">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-800" />
              <span>Descripción Técnica del Producto</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Measures & Dimensions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-slate-800" />
              <span>Medidas, Calibres y Dimensiones Disponibles</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              {product.measures.map((m, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          {product.specs && product.specs.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-2.5">
                Especificaciones Técnicas y Propiedades
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-slate-200">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-semibold text-slate-600 w-1/3 bg-slate-50/80">
                          {spec.property}
                        </td>
                        <td className="py-2.5 px-4 text-slate-900 font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Applications list */}
          {product.applications && product.applications.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-2">
                Principales Aplicaciones Industriales
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>¿Requiere corte o medidas personalizadas? </span>
            <span className="text-slate-800 font-semibold">Consulte con nuestros asesores.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={createWhatsAppLink(quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
