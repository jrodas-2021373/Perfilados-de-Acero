import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductModal } from './components/ProductModal';
import { Product } from './types';

export const App: React.FC = () => {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductCatalog onOpenProductModal={setActiveModalProduct} />
        <ServicesSection />
        <QuoteCalculator />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton isModalOpen={!!activeModalProduct} />
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </div>
  );
};

export default App;
