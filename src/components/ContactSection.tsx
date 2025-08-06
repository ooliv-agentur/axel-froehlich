
import React from 'react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="kontakt" className="section-spacing bg-luxury-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, #a68343 41%, #a68343 42%, transparent 43%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contact Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="w-16 h-1 bg-luxury-gold mb-8 lg:mb-10 mx-auto lg:mx-0"></div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-thin mb-8 lg:mb-10 text-luxury-white tracking-tight leading-tight">
                Ihr Projekt <span className="gold-accent font-serif italic block sm:inline">beginnt hier</span>
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-luxury-text/80 mb-8 lg:mb-10">
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light">
                  Lassen Sie uns über Ihre Vorstellungen sprechen – 
                  in einem unverbindlichen Beratungsgespräch.
                </p>
                
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                  Ob in unserem Showroom in Mainz oder bei Ihnen vor Ort – 
                  wir finden gemeinsam den idealen Weg zu Ihrem Traumbad.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 font-light tracking-wide mb-8 lg:mb-10 w-full sm:w-auto"
                onClick={() => window.location.href = '/kontakt'}
              >
                Beratungstermin vereinbaren
              </Button>
              
              {/* Contact Details */}
              <div className="space-y-6 pt-6 border-t border-luxury-gold/20">
                <div className="text-center lg:text-left">
                  <p className="text-lg font-light text-luxury-gold mb-2">Axel Fröhlich GmbH</p>
                  <p className="text-luxury-text/70 text-base leading-relaxed">
                    Rheinallee 120<br/>
                    55120 Mainz
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="text-lg font-light text-luxury-gold mb-2">Kontakt</p>
                  <p className="text-luxury-text/70 text-base leading-relaxed break-all sm:break-normal">
                    Tel: +49 6131 945990<br/>
                    Mail: info@axel-froehlich.de
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="text-lg font-light text-luxury-gold mb-2">Öffnungszeiten Showroom</p>
                  <p className="text-luxury-text/70 text-base leading-relaxed">
                    Di–Fr: 10–18 Uhr<br/>
                    Sa: 10–14 Uhr<br/>
                    Mo: geschlossen
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Image */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] image-placeholder rounded-sm relative overflow-hidden mx-auto max-w-sm lg:max-w-none">
                {/* Overlay with contact prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-luxury-white">
                  <p className="text-sm font-light mb-1">Persönliche Beratung</p>
                  <p className="text-luxury-gold text-base">Axel Fröhlich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
