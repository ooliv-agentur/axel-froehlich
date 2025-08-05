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

        {/* Showroom Experience */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
                  Erleben Sie Ihr Traumbad
                </h2>
                <div className="space-y-6 text-luxury-text">
                  <p className="text-lg">
                    In unserem 500m² großen Showroom präsentieren wir Ihnen die neuesten Trends 
                    und zeitlose Klassiker der Badgestaltung. Hier können Sie Materialien anfassen, 
                    Armaturen testen und sich von der Qualität unserer Partner überzeugen.
                  </p>
                  <p className="text-lg">
                    Lassen Sie sich von kompletten Badwelten inspirieren – von der modernen 
                    Designlösung bis zum luxuriösen Spa-Bereich. Jeder Quadratmeter ist durchdacht 
                    gestaltet und zeigt Ihnen die Möglichkeiten für Ihr individuelles Badezimmer.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square image-placeholder bg-luxury-gray/20"></div>
                <div className="aspect-[4/5] image-placeholder bg-luxury-gray/20"></div>
                <div className="aspect-[4/5] image-placeholder bg-luxury-gray/20"></div>
                <div className="aspect-square image-placeholder bg-luxury-gray/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Showroom Bereiche */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Unsere Ausstellungsbereiche
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Beratungsarea",
                  description: "Persönliche Planungsgespräche mit Axel Fröhlich und Team. 3D-Visualisierung und individuelle Beratung für Ihr Traumbad."
                },
                {
                  title: "Show-Bäder", 
                  description: "Komplette Badinstallationen zum Anfassen und Testen. Von modernen Designlösungen bis zu klassischen Badezimmern."
                },
                {
                  title: "Fliesenwelt",
                  description: "Große Auswahl verschiedenster Hersteller und Materialien. Naturstein, Keramik, Mosaik von Premium-Marken."
                }
              ].map((bereich, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-6 group-hover:bg-luxury-gray/30 transition-colors duration-300"></div>
                  <h3 className="text-2xl font-light text-luxury-white mb-4">{bereich.title}</h3>
                  <p className="text-luxury-text text-lg leading-relaxed">{bereich.description}</p>
                </div>
              ))}
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