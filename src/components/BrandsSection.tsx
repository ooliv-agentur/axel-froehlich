
import React from 'react';

export const BrandsSection = () => {
  const brands = [
    'Antonio Lupi', 'Boffi', 'Dornbracht', 'Sicis', 'Mutina', 
    'Mosa', 'Fantini', 'Glamora', 'Vola', 'THG Paris'
  ];

  return (
    <section id="marken" className="py-32 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin mb-8 text-luxury-white tracking-tight">
            Unsere <span className="gold-accent">Markenwelt</span>
          </h2>
          
          <p className="text-xl text-luxury-text/80 leading-relaxed max-w-4xl mx-auto">
            Wir arbeiten ausschließlich mit international anerkannten Designherstellern, 
            deren Qualität und Formensprache höchsten Ansprüchen gerecht werden.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="text-center p-6 border border-luxury-gray/30 hover:border-luxury-gold/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-luxury-text font-light group-hover:text-luxury-gold transition-colors duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
