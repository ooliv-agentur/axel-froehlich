
import React from 'react';
import { Contact } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-serif font-bold">
                Axel Fröhlich
              </div>
              <div className="text-sm text-brand-gold font-medium">
                Exklusive Bäder
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Seit über 30 Jahren Ihr Partner für exklusive Badplanung 
              und internationale Designmarken in Mainz.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 text-brand-gold">
              Kontakt
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Axel Fröhlich GmbH</strong><br />
                Rheinallee 120<br />
                55120 Mainz
              </p>
              <p>
                Telefon: +49 6131 945990
              </p>
              <p>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Route planen
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 text-brand-gold">
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Di–Fr: 10–18 Uhr</p>
              <p>Sa: 10–14 Uhr</p>
              <p>Mo: geschlossen</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Axel Fröhlich GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
