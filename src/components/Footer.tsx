
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black py-24 lg:py-32 border-t border-luxury-gray/20">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 mb-16">
            {/* Brand */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-light text-luxury-white mb-8 tracking-tight">
                Axel Fröhlich
              </h3>
              <p className="text-lg lg:text-xl text-luxury-text/70 font-light leading-relaxed mb-8">
                Seit über 30 Jahren realisieren wir besondere Bäder für anspruchsvolle Menschen.
              </p>
              <div className="w-16 h-0.5 bg-luxury-gold"></div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-xl lg:text-2xl font-light text-luxury-gold mb-8">Leistungen</h4>
              <ul className="space-y-4 text-lg text-luxury-text/70 font-light">
                <li>3D-Badplanung</li>
                <li>Beratung & Design</li>
                <li>Showroom Mainz</li>
                <li>Deutschlandweite Umsetzung</li>
                <li>Exklusive Marken</li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xl lg:text-2xl font-light text-luxury-gold mb-8">Kontakt</h4>
              <div className="space-y-4 text-lg text-luxury-text/70 font-light">
                <p>Showroom Mainz<br />Musterstraße 123<br />55116 Mainz</p>
                <p>Tel: +49 (0) 6131 123456<br />Mail: info@axel-froehlich.de</p>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-16 border-t border-luxury-gray/10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              <div className="text-luxury-text/50 font-light">
                © 2024 Axel Fröhlich. Alle Rechte vorbehalten.
              </div>
              
              <div className="flex space-x-12 text-luxury-text/50 font-light">
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Impressum</a>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Datenschutz</a>
                <a 
                  href="https://froehlich-bad.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-luxury-gold transition-colors duration-300"
                >
                  Online-Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
