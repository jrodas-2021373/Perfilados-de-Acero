import React from 'react';
import { Product } from '../types';
import { FileSpreadsheet, MessageCircle, ArrowUpRight, Check } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const quoteMessage = `Hola, me interesa solicitar cotización y disponibilidad del producto: *${product.name}* (Norma: ${product.standard || 'Estándar'}). ¿Me podrían brindar precios?`;

  return (
    <div className="group rounded-2xl bg-steel-900/90 border border-steel-800 hover:border-steel-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col overflow-hidden">
      {/* Product Image & Badges */}
      <div className="relative h-56 w-full overflow-hidden bg-steel-950">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-transparent to-black/40" />

        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-industrial-orange text-white shadow-md">
              {product.badge}
            </span>
          </div>
        )}

        {product.standard && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-steel-950/80 text-slate-300 border border-steel-700 backdrop-blur-sm">
              {product.standard}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-industrial-orange transition-colors mb-2.5">
            {product.name}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {product.shortDescription}
          </p>

          {/* Quick measures pills */}
          <div className="mb-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Medidas y Calibres habituales:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.measures.slice(0, 3).map((measure, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1 text-[11px] bg-steel-800 text-slate-200 px-2 py-0.5 rounded border border-steel-700/60"
                >
                  <Check className="w-2.5 h-2.5 text-industrial-orange" />
                  <span>{measure}</span>
                </span>
              ))}
              {product.measures.length > 3 && (
                <span className="text-[11px] text-slate-400 self-center pl-1">
                  +{product.measures.length - 3} más
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-steel-800/80 flex items-center gap-2">
          <button
            onClick={() => onOpenModal(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-steel-800 hover:bg-steel-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm py-2.5 px-3 rounded-lg border border-steel-700 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-industrial-orange" />
            <span>Ficha Técnica</span>
          </button>

          <a
            href={createWhatsAppLink(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm py-2.5 px-3.5 rounded-lg shadow-sm transition-colors"
            title="Cotizar en WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Cotizar</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
};
