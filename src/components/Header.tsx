
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-brand-dark">
              Axel Fröhlich
            </div>
            <div className="text-sm text-brand-gold font-medium">
              Exklusive Bäder
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#showroom" className="text-gray-700 hover:text-brand-gold transition-colors">
              Showroom
            </a>
            <a href="#planung" className="text-gray-700 hover:text-brand-gold transition-colors">
              3D-Planung
            </a>
            <a href="#projekte" className="text-gray-700 hover:text-brand-gold transition-colors">
              Projekte
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-brand-gold transition-colors">
              Kontakt
            </a>
            <Button 
              className="brand-button"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Termin vereinbaren
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-brand-dark"></div>
              <div className="w-full h-0.5 bg-brand-dark"></div>
              <div className="w-full h-0.5 bg-brand-dark"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#showroom" className="text-gray-700 hover:text-brand-gold transition-colors">
                Showroom
              </a>
              <a href="#planung" className="text-gray-700 hover:text-brand-gold transition-colors">
                3D-Planung
              </a>
              <a href="#projekte" className="text-gray-700 hover:text-brand-gold transition-colors">
                Projekte
              </a>
              <a href="#kontakt" className="text-gray-700 hover:text-brand-gold transition-colors">
                Kontakt
              </a>
              <Button 
                className="brand-button w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Termin vereinbaren
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
