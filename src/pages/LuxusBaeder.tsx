import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const LuxusBaeder = () => {
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
              Luxus<br />
              Badezimmer
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/80 mb-12 max-w-3xl mx-auto">
              Wo Ästhetik auf Perfektion trifft – Exklusive Badwelten für höchste Ansprüche
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4">
              Luxus-Beratung vereinbaren
            </Button>
          </div>
        </section>

        {/* Was macht ein Luxusbad aus */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
                Was macht ein Luxusbad aus?
              </h2>
              <p className="text-lg text-luxury-text">
                Luxus bedeutet für uns nicht Prunk, sondern Perfektion in jedem Detail. 
                Es ist die Harmonie aus exquisiten Materialien, durchdachter Funktionalität 
                und zeitloser Ästhetik.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Exklusive Materialien",
                  description: "Marmor aus Italien, Naturstein aus Deutschland, handverlesene Hölzer – nur das Beste für Ihr Bad"
                },
                {
                  title: "Maßgeschneiderte Lösungen",
                  description: "Jedes Element wird individuell auf Ihre Bedürfnisse und den Raum abgestimmt"
                },
                {
                  title: "Innovative Technologie", 
                  description: "Neueste Smart-Home-Integration und energieeffiziente Premium-Systeme"
                },
                {
                  title: "Perfekte Handwerkskunst",
                  description: "Präzision bis ins kleinste Detail durch erfahrene Meisterbetriebe"
                },
                {
                  title: "Zeitlose Eleganz",
                  description: "Design, das auch in 20 Jahren noch begeistert und wertstabil bleibt"
                },
                {
                  title: "Wellness-Atmosphäre",
                  description: "Ihr privater Rückzugsort mit Spa-Charakter für tägliche Erholung"
                }
              ].map((merkmal, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-6 group-hover:bg-luxury-gray/30 transition-colors duration-300"></div>
                  <h3 className="text-xl font-light text-luxury-white mb-3">{merkmal.title}</h3>
                  <p className="text-luxury-text text-sm leading-relaxed">{merkmal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Materialien */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Premium Materialien
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-luxury-gold mb-3">Naturstein & Marmor</h3>
                    <p className="text-luxury-text">
                      Carrara-Marmor, Travertin, Onyx – edle Gesteine, die jedes Bad zu einem 
                      Kunstwerk machen. Jede Platte ist ein Unikat der Natur.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-luxury-gold mb-3">Echtholz & Furniere</h3>
                    <p className="text-luxury-text">
                      Teak, Eiche, Nussbaum – warme Hölzer schaffen Behaglichkeit und 
                      verbinden Luxus mit Natürlichkeit.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-luxury-gold mb-3">Edelmetalle & Glas</h3>
                    <p className="text-luxury-text">
                      Gebürsteter Edelstahl, Messing-Akzente, handgefertigtes Glas – 
                      edle Oberflächen für exklusive Wirkung.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square image-placeholder bg-luxury-gray/20"></div>
                <div className="aspect-[3/4] image-placeholder bg-luxury-gray/20"></div>
                <div className="aspect-[3/4] image-placeholder bg-luxury-gray/20"></div>
                <div className="aspect-square image-placeholder bg-luxury-gray/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxus-Ausstattung */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Luxus-Ausstattung
            </h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light text-luxury-white mb-4">Freistehende Badewannen</h3>
                  <p className="text-luxury-text mb-4">
                    Skulpturale Badewannen aus Naturstein oder Keramik als zentrales Element 
                    Ihres Luxusbades. Perfekt für entspannende Stunden.
                  </p>
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20"></div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light text-luxury-white mb-4">Walk-in Duschen</h3>
                  <p className="text-luxury-text mb-4">
                    Bodenebene Duschen mit Regenduschen, Seitendüsen und Dampffunktion. 
                    Tägliches Wellness-Erlebnis für zu Hause.
                  </p>
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investition in Lebensqualität */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
                Investition in Lebensqualität
              </h2>
              <p className="text-lg text-luxury-text mb-8">
                Ein Luxusbad ist mehr als nur ein Raum – es ist Ihr täglicher Rückzugsort, 
                Ihre persönliche Wellness-Oase und eine Investition, die den Wert Ihrer 
                Immobilie nachhaltig steigert.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-light text-luxury-gold mb-2">+25%</div>
                  <p className="text-luxury-text text-sm">Wertsteigerung der Immobilie</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-luxury-gold mb-2">30+</div>
                  <p className="text-luxury-text text-sm">Jahre Haltbarkeit bei Qualität</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-luxury-gold mb-2">100%</div>
                  <p className="text-luxury-text text-sm">Individuelle Anpassung</p>
                </div>
              </div>
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4">
                Luxus-Bad planen lassen
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LuxusBaeder;