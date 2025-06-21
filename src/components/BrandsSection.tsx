
import React from 'react';
import { Button } from '@/components/ui/button';

export const BrandsSection = () => {
  const brands = [
    'Antonio Lupi', 'Boffi', 'Dornbracht', 'Sicis', 'Mutina', 
    'Mosa', 'Fantini', 'Glamora', 'Vola', 'THG Paris'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
            Unsere <span className="gold-accent">Markenwelt</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Wir arbeiten ausschließlich mit international anerkannten Designherstellern, 
            deren Qualität und Formensprache höchsten Ansprüchen gerecht werden.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-serif font-semibold mb-8 text-center text-brand-dark">
            Marken unter anderem:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="text-center p-4 bg-brand-gray rounded-lg hover:bg-brand-gold/10 transition-colors duration-300">
                <span className="text-gray-700 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="brand-button-outline"
            onClick={() => window.open('#', '_blank')}
          >
            Alle Marken entdecken
          </Button>
        </div>
      </div>
    </section>
  );
};
