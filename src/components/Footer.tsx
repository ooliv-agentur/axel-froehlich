
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black py-16 sm:py-20 lg:py-24 xl:py-32 border-t border-luxury-gray/20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 mb-12 sm:mb-16">
            {/* Brand */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-luxury-white mb-6 sm:mb-8 tracking-tight">
                Axel Fröhlich
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-luxury-text/70 font-light leading-relaxed mb-6 sm:mb-8">
                Seit über 30 Jahren realisieren wir besondere Bäder für anspruchsvolle Menschen.
              </p>
              <div className="w-12 sm:w-16 h-0.5 bg-luxury-gold mx-auto sm:mx-0"></div>
            </div>
            
            {/* Services */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-light text-luxury-gold mb-6 sm:mb-8">Leistungen</h4>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-luxury-text/70 font-light">
                <li>3D-Badplanung</li>
                <li>Beratung & Design</li>
                <li>Showroom Mainz</li>
                <li>Deutschlandweite Umsetzung</li>
                <li>Exklusive Marken</li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-light text-luxury-gold mb-6 sm:mb-8">Kontakt</h4>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-luxury-text/70 font-light">
                <p>Showroom Mainz<br />Musterstraße 123<br />55116 Mainz</p>
                <p>Tel: +49 (0) 6131 123456<br />Mail: info@axel-froehlich.de</p>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-12 sm:pt-16 border-t border-luxury-gray/10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-center lg:text-left">
              <div className="text-luxury-text/50 font-light text-sm sm:text-base">
                © 2024 Axel Fröhlich. Alle Rechte vorbehalten.
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-luxury-text/50 font-light text-sm sm:text-base">
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
