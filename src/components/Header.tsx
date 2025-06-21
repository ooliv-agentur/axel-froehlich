
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-luxury-gray/20">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-light text-luxury-white tracking-wide">
              Axel Fröhlich
            </div>
            
            <button 
              className="p-3 text-luxury-white hover:text-luxury-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] menu-overlay animate-menu-fade">
          <div className="flex items-center justify-center min-h-screen p-8">
            <button 
              className="absolute top-10 right-10 p-3 text-luxury-white hover:text-luxury-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={36} strokeWidth={1.5} />
            </button>
            
            <nav className="text-center">
              <ul className="space-y-12">
                {menuItems.map((item, index) => (
                  <li key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <a 
                      href={item.href}
                      className="text-5xl lg:text-6xl xl:text-7xl font-light text-luxury-white hover:text-luxury-gold transition-colors duration-500 block tracking-tight"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-20">
                <Button 
                  className="luxury-button text-xl px-16 py-7"
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
