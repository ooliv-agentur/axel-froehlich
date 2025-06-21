
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
    <section id="showroom" className="py-40 lg:py-52 bg-luxury-black">
      <div className="container mx-auto px-8">
        <div className="max-w-8xl mx-auto">
          {/* Large Showroom Hero Image */}
          <div className="mb-32 lg:mb-40">
            <div className="aspect-[21/9] image-placeholder rounded-sm mb-16">
              <div className="text-center">
                <div className="text-luxury-text/30 text-3xl font-light mb-6">Showroom Hauptansicht</div>
                <div className="text-luxury-text/20 text-xl">500m² Ausstellungsfläche in Mainz</div>
                <div className="text-luxury-text/20 text-lg">Atmosférische Gesamtaufnahme</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-24 lg:gap-32 items-start">
            {/* Content */}
            <div className="lg:col-span-5 animate-fade-in">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight leading-tight">
                Der Showroom in <span className="gold-accent font-serif italic">Mainz</span>
              </h2>
              
              <div className="mb-20">
                <p className="text-2xl lg:text-3xl text-luxury-text/90 mb-16 leading-relaxed font-light">
                  Auf 500 m² Ausstellungsfläche und zwei Etagen zeigen wir Ihnen Musterbäder, 
                  Naturstein, Fliesen und exklusive Badobjekte.
                </p>
                
                <p className="text-xl lg:text-2xl text-luxury-text/70 mb-16 leading-relaxed font-light italic">
                  Lassen Sie sich inspirieren – in einem Umfeld, das Qualität und Design spricht.
                </p>
                
                <div className="space-y-6 mb-20">
                  <h3 className="text-2xl lg:text-3xl font-light text-luxury-gold mb-12">
                    Erleben Sie unsere Ausstellung:
                  </h3>
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-6 animate-slide-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-luxury-gold rounded-full transition-all duration-300 group-hover:scale-125"></div>
                      <span className="text-xl lg:text-2xl text-luxury-text/80 font-light group-hover:text-luxury-gold transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                className="bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black text-xl px-12 py-6 font-light tracking-wide transition-all duration-500"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Besuch planen
              </Button>
            </div>
            
            {/* Image Grid */}
            <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-12 gap-6 h-[800px]">
                {/* Large Featured Image */}
                <div className="col-span-8 row-span-2">
                  <div className="h-full image-placeholder rounded-sm">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-2xl font-light mb-4">Hauptausstellung</div>
                      <div className="text-luxury-text/20 text-lg">Musterbäder & Designdetails</div>
                    </div>
                  </div>
                </div>
                
                {/* Small Images */}
                <div className="col-span-4">
                  <div className="h-full image-placeholder rounded-sm">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Materialien</div>
                      <div className="text-luxury-text/20 text-sm">Naturstein & Fliesen</div>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-4">
                  <div className="h-full image-placeholder rounded-sm">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Armaturen</div>
                      <div className="text-luxury-text/20 text-sm">Design & Funktion</div>
                    </div>
                  </div>
                </div>
                
                {/* Wide Bottom Image */}
                <div className="col-span-12">
                  <div className="h-full image-placeholder rounded-sm">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-xl font-light mb-2">Beratungsbereich</div>
                      <div className="text-luxury-text/20 text-lg">Persönliche Planungsgespräche</div>
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
