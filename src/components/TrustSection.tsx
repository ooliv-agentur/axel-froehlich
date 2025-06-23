
import React from 'react';

export const TrustSection = () => {
  const awards = [
    {
      title: "Beste Badstudios 2023",
      subtitle: "Ausgezeichnet"
    },
    {
      title: "Ausgezeichnet von AW",
      subtitle: "Architektur & Wohnen"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-luxury-black border-t border-luxury-gray/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="w-16 sm:w-20 h-1 bg-luxury-gold mx-auto mb-8 sm:mb-10"></div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-luxury-gold tracking-wide mb-4">
              Auszeichnungen
            </h3>
            <p className="text-lg sm:text-xl text-luxury-text/60 font-light">
              Anerkannt für Exzellenz im Baddesign
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16 lg:gap-24">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group max-w-xs"
              >
                {/* Logo Placeholder - größer und prominenter */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8 image-placeholder rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-luxury-gold/80 text-lg sm:text-xl lg:text-2xl font-light mb-2">
                      Award
                    </div>
                    <div className="text-luxury-gold/60 text-sm">
                      Logo
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-light text-luxury-gold tracking-wide leading-tight">
                    {award.title}
                  </h4>
                  <p className="text-base sm:text-lg text-luxury-text/60 font-light">
                    {award.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
