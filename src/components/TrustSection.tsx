
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
    <section className="py-12 sm:py-16 lg:py-20 bg-luxury-black border-t border-luxury-gray/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="w-12 sm:w-16 h-0.5 bg-luxury-gold/50 mx-auto mb-6"></div>
            <h3 className="text-lg sm:text-xl font-light text-luxury-text/60 tracking-wide">
              Auszeichnungen
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-24">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Platzhalter für Trust-Logo */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 sm:mb-6 image-placeholder rounded-lg">
                  <span className="text-xs sm:text-sm text-luxury-gold/60">Logo</span>
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-light text-luxury-gold tracking-wide">
                    {award.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-luxury-text/50 font-light">
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
