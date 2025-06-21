
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-text py-20 border-t border-luxury-gray/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="text-2xl font-light mb-6 text-luxury-white">
              Axel Fröhlich
            </div>
            <p className="text-luxury-text/70 leading-relaxed text-sm">
              Seit über 30 Jahren Ihr Partner für exklusive Badplanung 
              und internationale Designmarken in Mainz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-luxury-gold">
              Kontakt
            </h3>
            <div className="space-y-3 text-luxury-text/70 text-sm">
              <p>
                <strong className="text-luxury-white">Axel Fröhlich GmbH</strong><br />
                Rheinallee 120<br />
                55120 Mainz
              </p>
              <p>
                Telefon: +49 6131 945990
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-luxury-gold">
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-luxury-text/70 text-sm">
              <p>Di–Fr: 10–18 Uhr</p>
              <p>Sa: 10–14 Uhr</p>
              <p>Mo: geschlossen</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-luxury-gold">
              Navigation
            </h3>
            <div className="space-y-3 text-luxury-text/70 text-sm">
              <a href="#home" className="block hover:text-luxury-gold transition-colors">Startseite</a>
              <a href="#showroom" className="block hover:text-luxury-gold transition-colors">Ausstellung</a>
              <a href="#planung" className="block hover:text-luxury-gold transition-colors">3D-Planung</a>
              <a href="#kontakt" className="block hover:text-luxury-gold transition-colors">Kontakt</a>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-gray/30 mt-16 pt-8 text-center">
          <p className="text-luxury-text/50 text-sm">
            © 2024 Axel Fröhlich GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
