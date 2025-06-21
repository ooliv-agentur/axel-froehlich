
import React from 'react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="kontakt" className="py-40 lg:py-52 bg-luxury-gray relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="w-20 h-1 bg-luxury-gold mb-12"></div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-thin mb-16 text-luxury-white tracking-tight leading-tight">
                Vereinbaren Sie Ihren{' '}
                <span className="gold-accent font-serif italic block mt-4">Beratungstermin</span>
              </h2>
              
              <div className="mb-16">
                <p className="text-2xl lg:text-3xl text-luxury-text/90 mb-12 leading-relaxed font-light">
                  Besuchen Sie unsere Ausstellung in Mainz oder vereinbaren Sie eine individuelle Beratung.
                </p>
                
                <div className="space-y-8 mb-16">
                  <div className="flex items-start space-x-6">
                    <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-light text-luxury-gold mb-2">Showroom Mainz</h3>
                      <p className="text-lg lg:text-xl text-luxury-text/80 font-light">
                        Besichtigung unserer 500m² Ausstellung<br />
                        nach Terminvereinbarung
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-light text-luxury-gold mb-2">3D-Badplanung</h3>
                      <p className="text-lg lg:text-xl text-luxury-text/80 font-light">
                        Individuelle Planungsgespräche<br />
                        mit unseren Innenarchitekten
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-light text-luxury-gold mb-2">Deutschlandweite Umsetzung</h3>
                      <p className="text-lg lg:text-xl text-luxury-text/80 font-light">
                        Realisierung mit unseren<br />
                        Partnern vor Ort
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-xl px-16 py-8 font-light tracking-wide transition-all duration-500 hover:scale-105"
                >
                  Termin vereinbaren
                </Button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[4/3] image-placeholder rounded-sm mb-16">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-luxury-text/30 text-2xl font-light mb-4">Showroom Mainz</div>
                  <div className="text-luxury-text/20 text-lg">Ausstellungsbereich</div>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-luxury-gold mb-6">Kontakt</h3>
                  <div className="space-y-4 text-lg lg:text-xl text-luxury-text/80 font-light">
                    <p>Axel Fröhlich<br />Badplanung & Design</p>
                    <p>Showroom Mainz<br />Musterstraße 123<br />55116 Mainz</p>
                    <p>Tel: +49 (0) 6131 123456<br />Mail: info@axel-froehlich.de</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-luxury-gold mb-6">Öffnungszeiten</h3>
                  <div className="space-y-2 text-lg lg:text-xl text-luxury-text/80 font-light">
                    <p>Montag - Freitag: 10:00 - 18:00 Uhr</p>
                    <p>Samstag: 10:00 - 16:00 Uhr</p>
                    <p className="text-luxury-text/50 italic">Termine auch außerhalb der Öffnungszeiten möglich</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
