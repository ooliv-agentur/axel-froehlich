import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Badplanung = () => {
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
              3D-Badplanung<br />
              mit Weitblick
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/80 mb-12 max-w-3xl mx-auto">
              30 Jahre Erfahrung treffen auf modernste Planungstechnologie
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4">
              Kostenlosen 3D-Plan erstellen lassen
            </Button>
          </div>
        </section>

        {/* 3D Visualisierung */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
                  Erleben Sie Ihr Bad,<br />
                  bevor es gebaut wird
                </h2>
                <div className="space-y-6 text-luxury-text">
                  <p className="text-lg">
                    Mit unserer professionellen 3D-Planungssoftware visualisieren wir Ihr 
                    zukünftiges Badezimmer bis ins kleinste Detail. Sie sehen Materialien, 
                    Beleuchtung und Raumwirkung – photorealistisch und maßstabsgetreu.
                  </p>
                  <p className="text-lg">
                    Änderungen werden in Echtzeit sichtbar. So können wir gemeinsam optimieren, 
                    bis Ihr Traumbad perfekt ist – noch vor dem ersten Spatenstich.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Planungsprozess */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Unser Planungsprozess
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Bestandsaufnahme",
                  description: "Vermessung vor Ort und Analyse Ihrer Wünsche und räumlichen Gegebenheiten"
                },
                {
                  step: "02", 
                  title: "3D-Entwurf",
                  description: "Erstellung mehrerer Planungsvarianten mit photorealistischer Visualisierung"
                },
                {
                  step: "03",
                  title: "Gemeinsame Optimierung", 
                  description: "Anpassungen in Echtzeit bis Ihr Traumbad perfekt geplant ist"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square image-placeholder bg-luxury-gray/20 mb-6 mx-auto max-w-64"></div>
                  <div className="text-luxury-gold text-lg font-light mb-2">{phase.step}</div>
                  <h3 className="text-xl font-light text-luxury-white mb-4">{phase.title}</h3>
                  <p className="text-luxury-text leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile der 3D-Planung */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Warum 3D-Planung?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Kostensicherheit",
                  description: "Präzise Kostenkalkulation durch exakte Planung"
                },
                {
                  title: "Termintreue",
                  description: "Durchdachte Planung minimiert Verzögerungen"
                },
                {
                  title: "Materialoptimierung", 
                  description: "Effiziente Nutzung ohne Verschwendung"
                },
                {
                  title: "Perfektion",
                  description: "Jedes Detail wird vor der Umsetzung optimiert"
                }
              ].map((vorteil, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-light text-luxury-white mb-3">{vorteil.title}</h3>
                  <p className="text-luxury-text text-sm leading-relaxed">{vorteil.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundesweite Beratung */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
                Bundesweite Beratung
              </h2>
              <p className="text-lg text-luxury-text mb-8">
                Axel Fröhlich plant nicht nur in Mainz und Umgebung, sondern deutschlandweit. 
                Ob Berlin, München oder Hamburg – unsere Expertise kommt zu Ihnen.
              </p>
              <p className="text-luxury-text mb-12">
                Durch digitale Planungstools und persönliche Vor-Ort-Termine realisieren wir 
                auch überregionale Projekte mit der gewohnten Präzision und Qualität.
              </p>
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4">
                Bundesweite Beratung anfragen
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Badplanung;