import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Ausstellung = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80 z-10"></div>
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/20"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-luxury-white mb-8 tracking-tight leading-tight">
              Showroom Mainz
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/80 mb-12 max-w-3xl mx-auto">
              500m² Badausstellung – Erleben Sie Luxus, Materialien und Design hautnah
            </p>
            <Button 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4"
              onClick={() => document.getElementById('termin')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Showroom-Termin vereinbaren
            </Button>
          </div>
        </section>

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Luxus-Suiten",
                  description: "Komplette Badezimmer im Premium-Segment mit exklusiven Materialien"
                },
                {
                  title: "Moderne Lösungen", 
                  description: "Zeitgemäße Badgestaltung mit innovativer Technik und klaren Linien"
                },
                {
                  title: "Klassische Eleganz",
                  description: "Zeitlose Badezimmer mit hochwertigen Materialien und bewährtem Design"
                },
                {
                  title: "Wellness-Bereich",
                  description: "Spa-Atmosphäre für zu Hause mit Sauna, Dampfbad und Entspannung"
                },
                {
                  title: "Kompakte Bäder",
                  description: "Intelligente Lösungen für kleine Räume ohne Kompromisse bei der Qualität"
                },
                {
                  title: "Barrierefreie Bäder",
                  description: "Komfortable und sichere Badlösungen für jede Lebenssituation"
                }
              ].map((bereich, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-4 group-hover:bg-luxury-gray/30 transition-colors duration-300"></div>
                  <h3 className="text-xl font-light text-luxury-white mb-2">{bereich.title}</h3>
                  <p className="text-luxury-text">{bereich.description}</p>
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