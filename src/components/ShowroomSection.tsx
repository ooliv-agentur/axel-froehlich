
import React from 'react';
import { Button } from '@/components/ui/button';
import { Contact } from 'lucide-react';

export const ShowroomSection = () => {
  const features = [
    'Italienisches Baddesign',
    'Naturstein-Waschtische',
    'Designarmaturen & Accessoires',
    'Wandverkleidungen & Tapeten',
    'Premium-Heizkörper'
  ];

  return (
    <section id="showroom" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
              Der Showroom in <span className="gold-accent">Mainz</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Auf 500 m² Ausstellungsfläche und zwei Etagen zeigen wir Ihnen Musterbäder, 
              Naturstein, Fliesen und exklusive Badobjekte. Lassen Sie sich inspirieren – 
              in einem Umfeld, das Qualität und Design spricht.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-brand-dark">
                Erleben Sie unsere Ausstellung:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-4"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              className="brand-button-outline"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Besuch planen
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-brand-dark/20 to-brand-gold/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Contact size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Showroom Mainz</p>
                  <p className="text-sm opacity-75">500 m² | 2 Etagen</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-gold/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
