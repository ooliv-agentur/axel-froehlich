
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gray/20 py-20">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-light text-luxury-white mb-8">Axel Fröhlich</h3>
            <div className="space-y-4 text-luxury-text/70">
              <p className="text-lg font-light">
                Exklusive Badplanung<br />
                seit über 30 Jahren
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-light text-luxury-white mb-8">Kontakt</h4>
            <div className="space-y-4 text-luxury-text/70 text-lg font-light">
              <p>
                Rheinallee 120<br />
                55120 Mainz
              </p>
              <p>+49 6131 945990</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-light text-luxury-white mb-8">Navigation</h4>
            <nav className="space-y-4">
              {['Beratung & Planung', 'Ausstellung', 'Referenzen', 'Marken'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                  className="block text-lg font-light text-luxury-text/70 hover:text-luxury-gold transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal & Shop */}
          <div>
            <h4 className="text-xl font-light text-luxury-white mb-8">Rechtliches</h4>
            <div className="space-y-4">
              <nav className="space-y-4">
                {['Impressum', 'Datenschutz'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-light text-luxury-text/70 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              
              <div className="pt-8 border-t border-luxury-gray/20">
                <a 
                  href="https://froehlich-bad.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light text-luxury-text/70 hover:text-luxury-gold transition-colors duration-300"
                >
                  Zum Onlineshop →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-luxury-gray/20 mt-20 pt-8">
          <p className="text-center text-lg font-light text-luxury-text/50">
            © 2024 Axel Fröhlich GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
