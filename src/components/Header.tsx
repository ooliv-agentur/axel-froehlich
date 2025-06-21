
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Startseite', href: '#home' },
    { name: 'Beratung & Planung', href: '#planung' },
    { name: 'Ausstellung', href: '#showroom' },
    { name: 'Referenzen', href: '#projekte' },
    { name: 'Marken', href: '#marken' },
    { name: 'Über uns', href: '#about' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/90 backdrop-blur-sm border-b border-luxury-gray">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light text-luxury-white tracking-wide">
              Axel Fröhlich
            </div>
            
            <button 
              className="p-2 text-luxury-white hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] menu-overlay animate-menu-fade">
          <div className="flex items-center justify-center min-h-screen p-6">
            <button 
              className="absolute top-8 right-8 p-2 text-luxury-white hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <nav className="text-center">
              <ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <li key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <a 
                      href={item.href}
                      className="text-4xl md:text-5xl font-light text-luxury-white hover:text-luxury-gold transition-colors duration-300 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-16">
                <Button 
                  className="luxury-button text-xl px-12 py-6"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Beratungstermin vereinbaren
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
