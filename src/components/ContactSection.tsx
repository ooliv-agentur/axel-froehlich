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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Contact Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="w-16 h-1 bg-luxury-gold mb-6 lg:mb-8 mx-auto lg:mx-0"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-thin mb-6 lg:mb-8 text-luxury-white tracking-tight leading-tight">
                Ihr Projekt <span className="gold-accent font-serif italic block sm:inline">beginnt hier</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-luxury-text/80 mb-6 lg:mb-8">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                  Lassen Sie uns über Ihre Vorstellungen sprechen – 
                  in einem unverbindlichen Beratungsgespräch.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                  Ob in unserem Showroom in Mainz oder bei Ihnen vor Ort – 
                  wir finden gemeinsam den idealen Weg zu Ihrem Traumbad.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-light tracking-wide mb-6 lg:mb-8 w-full sm:w-auto"
              >
                Beratungstermin vereinbaren
              </Button>
              
              {/* Contact Details */}
              <div className="space-y-6 pt-6 border-t border-luxury-gold/20">
                <div className="text-center lg:text-left">
                  <p className="text-base font-light text-luxury-gold mb-2">Showroom Mainz</p>
                  <p className="text-luxury-text/70 text-sm leading-relaxed">
                    Musterstraße 123<br/>
                    55116 Mainz
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="text-base font-light text-luxury-gold mb-2">Kontakt</p>
                  <p className="text-luxury-text/70 text-sm leading-relaxed break-all sm:break-normal">
                    Tel: +49 (0) 6131 123456<br/>
                    Mail: info@axel-froehlich.de
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Image */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] image-placeholder rounded-sm relative overflow-hidden mx-auto max-w-sm lg:max-w-none">
                <div className="absolute top-3 left-3">
                  <div className="text-luxury-gold/30 text-xs font-light">Portrait / Showroom</div>
                </div>
                
                {/* Overlay with contact prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-luxury-white">
                  <p className="text-xs font-light mb-1">Persönliche Beratung</p>
                  <p className="text-luxury-gold text-sm">Axel Fröhlich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
