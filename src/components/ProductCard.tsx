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
    <div className="group rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl flex flex-col overflow-hidden shadow-sm">
      {/* Product Image & Badges */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-slate-950 text-white shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {product.standard && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-white/95 text-slate-800 border border-slate-200 backdrop-blur-sm shadow-sm">
              {product.standard}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors mb-2.5">
            {product.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
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
                  className="inline-flex items-center gap-1 text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                >
                  <Check className="w-2.5 h-2.5 text-slate-800" />
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
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => onOpenModal(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-lg border border-slate-200 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-slate-700" />
            <span>Ficha Técnica</span>
          </button>

          <a
            href={createWhatsAppLink(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-3.5 rounded-lg shadow-sm transition-colors"
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
