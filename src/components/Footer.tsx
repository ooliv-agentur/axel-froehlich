
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const socialIcons = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Youtube, label: 'YouTube' },
    { label: 'Pinterest', placeholder: 'P' } // Pinterest as text placeholder since icon not available
  ];

  return (
    <footer className="bg-luxury-black py-16 sm:py-20 lg:py-24 xl:py-32 border-t border-luxury-gray/20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 mb-12 sm:mb-16">
            {/* Brand */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-luxury-white mb-6 sm:mb-8 tracking-tight">
                Axel Fröhlich GmbH
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
            
            {/* Contact & Social Media */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-light text-luxury-gold mb-6 sm:mb-8">Kontakt</h4>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-luxury-text/70 font-light mb-8">
                <p>Showroom Mainz<br />Rheinallee 120<br />55120 Mainz</p>
                <p>Telefon: +49 6131 945990<br />E-Mail: info@axel-froehlich.de</p>
                <p className="text-sm sm:text-base">
                  Öffnungszeiten:<br />
                  Di–Fr: 10–18 Uhr | Sa: 10–14 Uhr | Mo: geschlossen
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex justify-center sm:justify-start space-x-6 pt-4 border-t border-luxury-gray/10">
                {socialIcons.map((item, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold/10 transition-colors duration-300 cursor-pointer"
                    title={item.label}
                  >
                    {item.icon ? (
                      <item.icon size={18} className="text-luxury-gold/70 hover:text-luxury-gold transition-colors duration-300" />
                    ) : (
                      <span className="text-luxury-gold/70 hover:text-luxury-gold transition-colors duration-300 font-light text-sm">
                        {item.placeholder}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-12 sm:pt-16 border-t border-luxury-gray/10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-luxury-text/50 font-light text-sm sm:text-base">
                <span>© 2025 Axel Fröhlich GmbH. Alle Rechte vorbehalten.</span>
                <span className="text-xs text-luxury-text/40">Mitglied im Händlerbund</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-luxury-text/50 font-light text-sm sm:text-base">
                <span>Impressum</span>
                <span>Datenschutz</span>
                <span>Online-Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
