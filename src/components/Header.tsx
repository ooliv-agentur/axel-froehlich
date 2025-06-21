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
      <header className="fixed top-0 left-0 right-0 z-40 bg-luxury-black/95 backdrop-blur-sm border-b border-luxury-gray/10">
        <div className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-light text-luxury-white tracking-tight">
              Axel Fröhlich
            </h1>
            
            <button 
              onClick={toggleMenu}
              className="text-luxury-white hover:text-luxury-gold transition-colors duration-300 text-lg font-light"
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
        <div className="container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <nav className="space-y-8 mb-16">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                  className="block text-5xl lg:text-6xl xl:text-7xl font-light text-luxury-white hover:text-luxury-gold transition-colors duration-500 leading-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* External Shop Link */}
            <div className="border-t border-luxury-gray/20 pt-8">
              <a
                href="https://froehlich-bad.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-light text-luxury-text/70 hover:text-luxury-gold transition-colors duration-300"
              >
                → Zum Onlineshop: froehlich-bad.de
              </a>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-luxury-white hover:text-luxury-gold transition-colors duration-300 text-lg font-light"
          >
            Schließen
          </button>
        </div>
      </div>
    </>
  );
};
