
import React from 'react';

export const BrandsSection = () => {
  const brands = [
    'Antonio Lupi', 'Boffi', 'Dornbracht', 'Sicis', 'Mutina', 
    'Mosa', 'Fantini', 'Glamora', 'Vola', 'THG Paris'
  ];

  return (
    <section id="marken" className="py-40 lg:py-52 bg-luxury-black relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-luxury-gold/30 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-px h-32 bg-luxury-gold/30 transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-8">
        <div className="text-center mb-32 lg:mb-40">
          <div className="w-20 h-1 bg-luxury-gold mx-auto mb-12"></div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight leading-tight">
            Unsere <span className="gold-accent font-serif italic">Markenwelt</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-luxury-text/80 leading-relaxed max-w-5xl mx-auto font-light">
            Wir arbeiten ausschließlich mit international anerkannten Designherstellern, 
            deren Qualität und Formensprache höchsten Ansprüchen gerecht werden.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="text-center p-8 lg:p-12 border border-luxury-gray/20 hover:border-luxury-gold/50 transition-all duration-500 group animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-luxury-gold/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <span className="text-lg lg:text-xl text-luxury-text font-light group-hover:text-luxury-gold transition-colors duration-500 relative z-10 tracking-wide">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          
          {/* Additional Brand Info */}
          <div className="text-center mt-24 lg:mt-32">
            <p className="text-lg lg:text-xl text-luxury-text/50 font-light italic max-w-3xl mx-auto leading-relaxed">
              Diese und weitere exklusive Marken erwarten Sie in unserem Showroom – 
              für eine Badgestaltung, die internationale Standards setzt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
