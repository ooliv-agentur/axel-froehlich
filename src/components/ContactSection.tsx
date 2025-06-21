
import React from 'react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="kontakt" className="section-spacing bg-luxury-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, #a68343 41%, #a68343 42%, transparent 43%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Contact Content */}
            <div>
              <div className="w-20 h-1 bg-luxury-gold mb-12"></div>
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight">
                Ihr Projekt <span className="gold-accent font-serif italic">beginnt hier</span>
              </h2>
              
              <div className="space-y-12 text-luxury-text/80 mb-16">
                <p className="text-2xl lg:text-3xl leading-relaxed font-light">
                  Lassen Sie uns über Ihre Vorstellungen sprechen – 
                  in einem unverbindlichen Beratungsgespräch.
                </p>
                
                <p className="text-xl lg:text-2xl leading-relaxed font-light">
                  Ob in unserem Showroom in Mainz oder bei Ihnen vor Ort – 
                  wir finden gemeinsam den idealen Weg zu Ihrem Traumbad.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-xl px-20 py-10 font-light tracking-wide mb-16"
              >
                Beratungstermin vereinbaren
              </Button>
              
              {/* Contact Details */}
              <div className="space-y-8 pt-8 border-t border-luxury-gold/20">
                <div>
                  <p className="text-lg font-light text-luxury-gold mb-2">Showroom Mainz</p>
                  <p className="text-luxury-text/70">
                    Musterstraße 123<br/>
                    55116 Mainz
                  </p>
                </div>
                
                <div>
                  <p className="text-lg font-light text-luxury-gold mb-2">Kontakt</p>
                  <p className="text-luxury-text/70">
                    Tel: +49 (0) 6131 123456<br/>
                    Mail: info@axel-froehlich.de
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Image */}
            <div>
              <div className="aspect-[4/5] image-placeholder rounded-sm relative overflow-hidden">
                <div className="text-center">
                  <div className="text-luxury-gold text-xs font-light mb-2 tracking-wide">BILDFLÄCHE</div>
                  <div className="text-luxury-text/50 text-lg">Axel Fröhlich Portrait</div>
                  <div className="text-luxury-text/40 text-sm mt-2">oder Showroom Atmosphäre</div>
                </div>
                
                {/* Overlay with contact prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-luxury-white">
                  <p className="text-sm font-light mb-2">Persönliche Beratung</p>
                  <p className="text-luxury-gold text-lg">Axel Fröhlich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
