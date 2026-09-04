import React, { useState } from 'react';
import { productsData } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Search, SlidersHorizontal, Download, Layers } from 'lucide-react';
import { createWhatsAppLink } from '../data/company';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Productos' },
    { id: 'laminas-mallas', label: 'Láminas y Rejillas' },
    { id: 'perfiles-barras', label: 'Perfiles y Varillas' },
    { id: 'tuberia', label: 'Tubería de Acero' },
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.measures.some(m => m.toLowerCase().includes(query)) ||
      (product.standard && product.standard.toLowerCase().includes(query));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="productos" className="py-20 sm:py-28 bg-steel-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-orange/10 border border-industrial-orange/30 text-industrial-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Inventario y Distribución Directa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Catálogo de Productos de Acero
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Acero estructural de alta resistencia para proyectos comerciales, naves industriales, herrería y obra civil en Guatemala. Fichas técnicas y cotización inmediata.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-steel-900/60 p-3 sm:p-4 rounded-2xl border border-steel-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-industrial-orange text-white shadow-md shadow-industrial-orange/20'
                    : 'bg-steel-800/80 text-slate-300 hover:text-white hover:bg-steel-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por calibre o producto..."
              className="w-full bg-steel-950 border border-steel-700 text-white placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={(p) => setActiveModalProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-steel-900/40 rounded-2xl border border-steel-800 p-8">
            <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No se encontraron productos</h3>
            <p className="text-slate-400 text-sm mb-4">
              Intenta con otro término de búsqueda o selecciona "Todos los Productos".
            </p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="text-xs font-semibold px-4 py-2 bg-industrial-orange text-white rounded-lg"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Bottom Banner for custom requirements */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-steel-900 to-steel-850 border border-steel-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">
              ¿No encuentra el calibre o perfil exacto que necesita?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Manejamos pedidos especiales de vigas, láminas a medida y perfiles fuera de serie para proyectos de gran volumen.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Hola, tengo un listado de materiales y perfiles especiales que deseo cotizar para mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-steel-800 hover:bg-steel-700 text-slate-100 border border-steel-600 font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm hover:border-industrial-orange transition-colors"
          >
            <Download className="w-4 h-4 text-industrial-orange" />
            <span>Consultar Disponibilidad Especial</span>
          </a>
        </div>
      </div>

      {/* Technical Spec Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
