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
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const quoteMessage = `Hola Perfilados de Acero, S.A., me encuentro revisando la ficha técnica de *${product.name}* (Norma: ${product.standard || 'Estándar'}). Deseo consultar precios, disponibilidad y tiempos de entrega para mi proyecto.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-steel-900 border border-steel-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image Background */}
        <div className="relative h-44 sm:h-52 bg-steel-950 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-steel-800/80 hover:bg-steel-700 text-slate-200 hover:text-white flex items-center justify-center border border-steel-600 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              {product.standard && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded bg-industrial-orange text-white">
                  <Shield className="w-3 h-3" />
                  <span>{product.standard}</span>
                </span>
              )}
              {product.badge && (
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-steel-800 text-slate-300 border border-steel-700">
                  {product.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-industrial-orange mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Descripción Técnica del Producto</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Measures & Dimensions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-industrial-orange mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Medidas, Calibres y Dimensiones Disponibles</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-steel-950/60 p-3.5 rounded-xl border border-steel-800">
              {product.measures.map((m, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          {product.specs && product.specs.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-industrial-orange mb-2.5">
                Especificaciones Técnicas y Propiedades
              </h4>
              <div className="overflow-x-auto rounded-xl border border-steel-800 bg-steel-950/40">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-steel-800">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-steel-800/30">
                        <td className="py-2.5 px-4 font-semibold text-slate-400 w-1/3 bg-steel-900/50">
                          {spec.property}
                        </td>
                        <td className="py-2.5 px-4 text-slate-200 font-medium">
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-industrial-orange mb-2">
                Principales Aplicaciones Industriales
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-steel-950 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>¿Requiere corte o medidas personalizadas? </span>
            <span className="text-slate-300 font-medium">Consulte con nuestros asesores.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-steel-800 hover:bg-steel-700 rounded-lg border border-steel-700 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={createWhatsAppLink(quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-lg shadow-md transition-colors"
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
