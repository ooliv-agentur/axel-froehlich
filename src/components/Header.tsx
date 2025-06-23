
import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    'Beratung & Planung',
    'Ausstellung', 
    'Inspiration',
    'Marken',
    'Über uns',
    'Kontakt'
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-luxury-white tracking-tight hover:text-luxury-gold transition-colors duration-300"
            >
              Axel Fröhlich
            </button>
            
            <button 
              onClick={toggleMenu}
              className="text-luxury-white hover:text-luxury-gold transition-colors duration-300 text-base sm:text-lg font-light p-2 -mr-2"
            >
              Menü
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 z-50 menu-overlay transition-opacity duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container mx-auto px-4 sm:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <nav className="space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-luxury-white hover:text-luxury-gold transition-colors duration-500 leading-tight py-2 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </nav>
            
            {/* External Shop Link */}
            <div className="border-t border-luxury-gray/20 pt-6 sm:pt-8">
              <a
                href="https://froehlich-bad.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-light text-luxury-text/70 hover:text-luxury-gold transition-colors duration-300"
              >
                → Zum Onlineshop: froehlich-bad.de
              </a>
            </div>
          </div>

          {/* Schließen Button - exakt gleiche Position wie Menü Button */}
          <div className="absolute top-0 left-0 right-0">
            <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-8">
              <div className="flex justify-between items-center">
                <div></div> {/* Spacer für gleiche Struktur */}
                <button
                  onClick={toggleMenu}
                  className="text-luxury-white hover:text-luxury-gold transition-colors duration-300 text-base sm:text-lg font-light p-2 -mr-2"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
