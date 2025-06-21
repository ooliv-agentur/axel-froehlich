
import React from 'react';

export const BrandsSection = () => {
  const brands = [
    'Antonio Lupi', 'Boffi', 'Dornbracht', 'Sicis', 'Mutina', 
    'Mosa', 'Fantini', 'Glamora', 'Vola', 'THG Paris'
  ];

  return (
    <section id="marken" className="py-20 sm:py-32 lg:py-40 xl:py-52 bg-luxury-black relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-16 sm:h-24 lg:h-32 bg-luxury-gold/30 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-px h-16 sm:h-24 lg:h-32 bg-luxury-gold/30 transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 sm:mb-24 lg:mb-32 xl:mb-40">
          <div className="w-16 sm:w-20 h-1 bg-luxury-gold mx-auto mb-8 sm:mb-12"></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-12 sm:mb-16 text-luxury-white tracking-tight leading-tight">
            Unsere <span className="gold-accent font-serif italic">Markenwelt</span>
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-text/80 leading-relaxed max-w-5xl mx-auto font-light px-4">
            Wir arbeiten ausschließlich mit international anerkannten Designherstellern, 
            deren Qualität und Formensprache höchsten Ansprüchen gerecht werden.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="text-center p-6 sm:p-8 lg:p-12 border border-luxury-gray/20 hover:border-luxury-gold/50 transition-all duration-500 group animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-luxury-gold/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <span className="text-base sm:text-lg lg:text-xl text-luxury-text font-light group-hover:text-luxury-gold transition-colors duration-500 relative z-10 tracking-wide">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          
          {/* Additional Brand Info */}
          <div className="text-center mt-16 sm:mt-20 lg:mt-24 xl:mt-32">
            <p className="text-base sm:text-lg lg:text-xl text-luxury-text/50 font-light italic max-w-3xl mx-auto leading-relaxed px-4">
              Diese und weitere exklusive Marken erwarten Sie in unserem Showroom – 
              für eine Badgestaltung, die internationale Standards setzt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
