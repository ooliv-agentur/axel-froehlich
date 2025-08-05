import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { HeroSlider } from '@/components/HeroSlider';

const Ausstellung = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        {/* Hero Section with Slider */}
        <HeroSlider 
          slides={[
            { image: '' }, // Showroom entrance/exterior
            { image: '' }, // Bathroom displays area
            { image: '' }, // Consultation area with 3D planning
            { image: '' }  // Materials and tiles showcase
          ]}
          autoplay={true}
          showControls={true}
          overlay={true}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-8 sm:mb-10 lg:mb-12 leading-tight tracking-tight text-white">
                <span className="block">Showroom</span>
                <span className="block text-luxury-gold font-light">Mainz</span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl mb-12 sm:mb-16 lg:mb-20 text-white/90 font-light leading-relaxed max-w-3xl mx-auto px-4">
                500m² Badausstellung – Erleben Sie Luxus, Materialien und Design hautnah
              </p>
              
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-lg sm:text-xl px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 font-light tracking-wide transition-all duration-500 hover:scale-105"
                onClick={() => document.getElementById('termin')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Showroom-Termin vereinbaren
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="w-5 sm:w-6 h-10 sm:h-12 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 sm:h-4 bg-luxury-gold/60 rounded-full mt-2 sm:mt-3"></div>
            </div>
          </div>
        </HeroSlider>

        {/* Showroom Experience Overview */}
        <section className="py-16 sm:py-24 bg-luxury-black relative">
          {/* Technical Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--luxury-gold)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--luxury-gold)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="relative">
                {/* Blueprint Corner Markers */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-luxury-gold/40"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-luxury-gold/40"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-luxury-gold/40"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-luxury-gold/40"></div>
                
                {/* Technical Reference */}
                <div className="absolute -top-8 left-0 text-luxury-gold/60 text-xs font-mono tracking-widest">
                  REF. 001 / SHOWROOM OVERVIEW
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-thin text-luxury-white mb-6 leading-tight">
                  <span className="block">Showroom</span>
                  <span className="block text-luxury-gold font-extralight">Experience</span>
                </h2>
                
                {/* Technical Specifications */}
                <div className="space-y-8 text-luxury-text mb-8">
                  <div className="border-l-2 border-luxury-gold/30 pl-6">
                    <div className="text-luxury-gold/80 text-sm font-mono mb-2 tracking-wider">GESAMTFLÄCHE</div>
                    <div className="text-2xl font-light text-luxury-white mb-4">500m²</div>
                    <p className="text-lg leading-relaxed">
                      Präsentation neuester Trends und zeitloser Klassiker der Badgestaltung. 
                      Materialien zum Anfassen, Armaturen zum Testen – überzeugen Sie sich 
                      von der Qualität unserer Premium-Partner.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-luxury-gold/30 pl-6">
                    <div className="text-luxury-gold/80 text-sm font-mono mb-2 tracking-wider">ERLEBNISWELTEN</div>
                    <p className="text-lg leading-relaxed">
                      Von modernen Designlösungen bis zu luxuriösen Spa-Bereichen. 
                      Jeder Quadratmeter durchdacht gestaltet für Ihr individuelles Badezimmer.
                    </p>
                  </div>
                </div>
                
                {/* Architectural Annotation */}
                <div className="text-luxury-gold/40 text-xs font-mono tracking-widest border-t border-luxury-gold/20 pt-4">
                  ARCHITECTURAL PRESENTATION / AXEL FRÖHLICH
                </div>
              </div>
              
              {/* Isometric Floor Plan Grid */}
              <div className="relative">
                <div className="absolute -top-8 right-0 text-luxury-gold/60 text-xs font-mono tracking-widest">
                  FLOOR PLAN / SCALE 1:200
                </div>
                
                {/* 3D Isometric Layout */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 relative">
                    <div className="aspect-square bg-luxury-gray/10 border border-luxury-gold/20 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                      <div className="p-4 h-full flex flex-col justify-end">
                        <div className="text-luxury-gold/80 text-xs font-mono mb-1">A.01</div>
                        <div className="text-white text-sm font-light">Empfang</div>
                      </div>
                    </div>
                    <div className="aspect-[4/5] bg-luxury-gray/10 border border-luxury-gold/20 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                      <div className="p-4 h-full flex flex-col justify-end">
                        <div className="text-luxury-gold/80 text-xs font-mono mb-1">B.01</div>
                        <div className="text-white text-sm font-light">Beratung</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[4/5] bg-luxury-gray/10 border border-luxury-gold/20 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                      <div className="p-4 h-full flex flex-col justify-end">
                        <div className="text-luxury-gold/80 text-xs font-mono mb-1">C.01</div>
                        <div className="text-white text-sm font-light">Ausstellung</div>
                      </div>
                    </div>
                    <div className="aspect-square bg-luxury-gray/10 border border-luxury-gold/20 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                      <div className="p-4 h-full flex flex-col justify-end">
                        <div className="text-luxury-gold/80 text-xs font-mono mb-1">D.01</div>
                        <div className="text-white text-sm font-light">Material</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Experience Journey */}
        <section className="py-16 sm:py-24 bg-luxury-black/60">
          <div className="container mx-auto px-4 sm:px-8">
            
            {/* Beratungsbereich - Split Screen Left */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
              <div className="lg:order-2 relative">
                {/* Technical Frame */}
                <div className="relative aspect-[4/3] bg-luxury-gray/10 border-2 border-luxury-gold/20">
                  <div className="absolute -top-6 left-0 text-luxury-gold/60 text-xs font-mono tracking-widest">
                    REF. 002 / BERATUNGSBEREICH
                  </div>
                  <div className="absolute top-4 right-4 text-luxury-gold/40 text-xs font-mono">45m²</div>
                  
                  {/* Blueprint Overlay */}
                  <div className="absolute inset-4 border border-luxury-gold/10 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                  <div className="image-placeholder w-full h-full bg-luxury-gray/20"></div>
                  
                  {/* Architectural Annotations */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-luxury-black/80 p-3 border-l-2 border-luxury-gold/40">
                      <div className="text-luxury-gold/80 text-xs font-mono mb-1">SPECIFICATIONS</div>
                      <div className="text-white text-sm">3D-Planungsstation, Beratungstisch, Materialauswahl</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-1 space-y-8">
                <div>
                  <div className="text-luxury-gold/60 text-sm font-mono tracking-widest mb-4">ZONE A / CONSULTATION</div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-luxury-white mb-6 leading-tight">
                    Beratungsbereich
                  </h3>
                  
                  <div className="space-y-6 text-luxury-text">
                    <div className="border-l-2 border-luxury-gold/30 pl-6">
                      <div className="text-luxury-gold/80 text-sm font-mono mb-2">LEISTUNGEN</div>
                      <p className="text-lg leading-relaxed mb-4">
                        Persönliche Planungsgespräche mit Axel Fröhlich und seinem Team. 
                        Modernste 3D-Visualisierung bringt Ihr Traumbad zum Leben.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-luxury-gold/30 pl-6">
                      <div className="text-luxury-gold/80 text-sm font-mono mb-2">AUSSTATTUNG</div>
                      <p className="text-lg leading-relaxed">
                        Professionelle Planungsstation, Materialsammlung, 
                        Fachberatung für individuelle Lösungen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show-Bäder - Split Screen Right */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
              <div className="relative">
                <div className="relative aspect-[4/3] bg-luxury-gray/10 border-2 border-luxury-gold/20">
                  <div className="absolute -top-6 left-0 text-luxury-gold/60 text-xs font-mono tracking-widest">
                    REF. 003 / SHOW-BÄDER
                  </div>
                  <div className="absolute top-4 right-4 text-luxury-gold/40 text-xs font-mono">180m²</div>
                  
                  <div className="absolute inset-4 border border-luxury-gold/10 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                  <div className="image-placeholder w-full h-full bg-luxury-gray/20"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-luxury-black/80 p-3 border-l-2 border-luxury-gold/40">
                      <div className="text-luxury-gold/80 text-xs font-mono mb-1">SPECIFICATIONS</div>
                      <div className="text-white text-sm">Komplette Badinstallationen, Funktionstest, Live-Demonstration</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-luxury-gold/60 text-sm font-mono tracking-widest mb-4">ZONE B / EXHIBITION</div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-luxury-white mb-6 leading-tight">
                    Show-Bäder
                  </h3>
                  
                  <div className="space-y-6 text-luxury-text">
                    <div className="border-l-2 border-luxury-gold/30 pl-6">
                      <div className="text-luxury-gold/80 text-sm font-mono mb-2">ERLEBNIS</div>
                      <p className="text-lg leading-relaxed mb-4">
                        Komplette Badinstallationen zum Anfassen und Testen. 
                        Von modernen Designlösungen bis zu klassischen Wellness-Oasen.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-luxury-gold/30 pl-6">
                      <div className="text-luxury-gold/80 text-sm font-mono mb-2">FUNKTIONEN</div>
                      <p className="text-lg leading-relaxed">
                        Live-Demonstration aller Armaturen, Duschsysteme und 
                        innovativen Badtechnologien unserer Premium-Partner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Materialwelt - Split Screen Left */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="lg:order-2 relative">
                <div className="relative aspect-[4/3] bg-luxury-gray/10 border-2 border-luxury-gold/20">
                  <div className="absolute -top-6 left-0 text-luxury-gold/60 text-xs font-mono tracking-widest">
                    REF. 004 / MATERIALWELT
                  </div>
                  <div className="absolute top-4 right-4 text-luxury-gold/40 text-xs font-mono">120m²</div>
                  
                  <div className="absolute inset-4 border border-luxury-gold/10 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
                  <div className="image-placeholder w-full h-full bg-luxury-gray/20"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-luxury-black/80 p-3 border-l-2 border-luxury-gold/40">
                      <div className="text-luxury-gold/80 text-xs font-mono mb-1">SPECIFICATIONS</div>
                      <div className="text-white text-sm">Fliesenmuster, Naturstein, Keramik, Oberflächensammlung</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-1 space-y-8">
                <div>
                  <div className="text-luxury-gold/60 text-sm font-mono tracking-widest mb-4">ZONE C / MATERIALS</div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-luxury-white mb-6 leading-tight">
                    Materialwelt
                  </h3>
                  
                  <div className="space-y-6 text-luxury-text">
                    <div className="border-l-2 border-luxury-gold/30 pl-6">
                      <div className="text-luxury-gold/80 text-sm font-mono mb-2">AUSWAHL</div>
                      <p className="text-lg leading-relaxed mb-4">
                        Große Sammlung verschiedenster Premium-Hersteller. 
                        Naturstein, Keramik, Mosaik – alles zum Anfassen und Vergleichen.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-luxury-gold/30 pl-6">
                      <div className="text-luxury-gold/80 text-sm font-mono mb-2">QUALITÄT</div>
                      <p className="text-lg leading-relaxed">
                        Exklusive Partnerschaften mit führenden Marken garantieren 
                        höchste Qualität und innovative Oberflächentechnologien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anfahrt & Kontakt */}
        <section id="termin" className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
                  Besuchen Sie unseren Showroom
                </h2>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl text-luxury-gold mb-2">Adresse</h3>
                    <p className="text-luxury-text">
                      Mombacher Straße 67<br />
                      55122 Mainz
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-luxury-gold mb-2">Öffnungszeiten</h3>
                    <div className="text-luxury-text space-y-1">
                      <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                      <p>Samstag: 9:00 - 16:00 Uhr</p>
                      <p>Sonntag: Nach Vereinbarung</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-luxury-gold mb-2">Parken</h3>
                    <p className="text-luxury-text">
                      Kostenfreie Parkplätze direkt vor dem Showroom
                    </p>
                  </div>
                </div>
                <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4">
                  Termin vereinbaren
                </Button>
              </div>
              <div>
                <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-4"></div>
                <p className="text-luxury-text text-center">
                  Anfahrt und Lage unseres Showrooms in Mainz
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ausstellung;