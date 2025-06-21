
import React from 'react';
import { Button } from '@/components/ui/button';

export const ShowroomSection = () => {
  const features = [
    'Italienisches Baddesign',
    'Naturstein-Waschtische', 
    'Designarmaturen & Accessoires',
    'Wandverkleidungen & Tapeten',
    'Premium-Heizkörper'
  ];

  return (
    <section id="showroom" className="section-spacing bg-luxury-black">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-24 items-center">
            {/* Content */}
            <div className="lg:col-span-6 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-thin mb-12 text-luxury-white tracking-tight">
                Der Showroom in <span className="gold-accent">Mainz</span>
              </h2>
              
              <div className="mb-16">
                <p className="editorial-text text-luxury-text/90 mb-12">
                  Auf 500 m² Ausstellungsfläche und zwei Etagen zeigen wir Ihnen Musterbäder, 
                  Naturstein, Fliesen und exklusive Badobjekte. Lassen Sie sich inspirieren – 
                  in einem Umfeld, das Qualität und Design spricht.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-luxury-white mb-8">
                    Erleben Sie unsere Ausstellung:
                  </h3>
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-xl text-luxury-text/80 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                className="luxury-button-outline"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Besuch planen
              </Button>
            </div>
            
            {/* Image Grid */}
            <div className="lg:col-span-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-[3/4] image-placeholder rounded-sm">
                    <div className="text-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 1</div>
                      <div className="text-luxury-text/20 text-sm">Ausstellungsbereich</div>
                    </div>
                  </div>
                  <div className="aspect-[3/2] image-placeholder rounded-sm">
                    <div className="text-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 2</div>
                      <div className="text-luxury-text/20 text-sm">Materialien</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/2] image-placeholder rounded-sm">
                    <div className="text-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 3</div>
                      <div className="text-luxury-text/20 text-sm">Beratungsbereich</div>
                    </div>
                  </div>
                  <div className="aspect-[3/4] image-placeholder rounded-sm">
                    <div className="text-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 4</div>
                      <div className="text-luxury-text/20 text-sm">Designdetails</div>
                    </div>
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
