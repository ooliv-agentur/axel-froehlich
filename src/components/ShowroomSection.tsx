
import React from 'react';
import { Button } from '@/components/ui/button';

export const ShowroomSection = () => {
  return (
    <section id="showroom" className="py-32 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in">
              <h2 className="text-5xl md:text-6xl font-thin mb-12 text-luxury-white tracking-tight">
                Erleben Sie <span className="gold-accent">Badplanung neu</span>
              </h2>
              
              <p className="text-xl text-luxury-text/80 leading-relaxed mb-12">
                Auf 500 m² Ausstellungsfläche und zwei Etagen zeigen wir Ihnen Musterbäder, 
                Naturstein, Fliesen und exklusive Badobjekte. Lassen Sie sich inspirieren – 
                in einem Umfeld, das Qualität und Design spricht.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  'Italienisches Baddesign',
                  'Naturstein-Waschtische',
                  'Designarmaturen & Accessoires',
                  'Wandverkleidungen & Tapeten',
                  'Premium-Heizkörper'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mr-6"></div>
                    <span className="text-luxury-text">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="luxury-button-outline text-lg px-12 py-4"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Showroom besuchen
              </Button>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-luxury-gray to-luxury-black rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-luxury-black/40 to-luxury-gold/20 flex items-center justify-center">
                  <div className="text-center text-luxury-white">
                    <div className="text-6xl font-thin mb-4">500</div>
                    <p className="text-xl font-light">m² Ausstellung</p>
                    <p className="text-sm text-luxury-text/60 mt-2">2 Etagen | Mainz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
