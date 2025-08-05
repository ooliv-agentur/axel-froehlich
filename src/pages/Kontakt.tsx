import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80 z-10"></div>
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/20"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-luxury-white mb-8 tracking-tight leading-tight">
                  Lassen Sie uns<br />
                  sprechen
                </h1>
                <p className="text-lg sm:text-xl text-luxury-text/80 mb-8">
                  Ihr Traumbad beginnt mit einem Gespräch. Kontaktieren Sie uns für eine 
                  unverbindliche Beratung.
                </p>
              </div>
              
              {/* Kontaktformular */}
              <div className="bg-luxury-black/80 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-light text-luxury-white mb-6">Beratungstermin anfragen</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Vorname" 
                      className="bg-luxury-gray/20 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60"
                    />
                    <Input 
                      placeholder="Nachname" 
                      className="bg-luxury-gray/20 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60"
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="E-Mail Adresse" 
                    className="bg-luxury-gray/20 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Telefonnummer" 
                    className="bg-luxury-gray/20 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60"
                  />
                  <Input 
                    placeholder="PLZ / Ort" 
                    className="bg-luxury-gray/20 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60"
                  />
                  <Textarea 
                    placeholder="Beschreiben Sie kurz Ihr Badprojekt..."
                    rows={4}
                    className="bg-luxury-gray/20 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60"
                  />
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg py-3">
                    Beratungstermin anfragen
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Kontaktinformationen */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Showroom */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-light text-luxury-white mb-6">Showroom besuchen</h3>
                <div className="space-y-4 text-luxury-text">
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">Adresse</p>
                    <p>Mombacher Straße 67<br />55122 Mainz</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">Öffnungszeiten</p>
                    <p>Mo-Fr: 9:00 - 18:00 Uhr<br />Sa: 9:00 - 16:00 Uhr<br />So: Nach Vereinbarung</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">Parken</p>
                    <p>Kostenfreie Parkplätze<br />direkt vor dem Showroom</p>
                  </div>
                </div>
              </div>

              {/* Direktkontakt */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-light text-luxury-white mb-6">Direktkontakt</h3>
                <div className="space-y-4 text-luxury-text">
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">Geschäftsführer</p>
                    <p>Axel Fröhlich</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">Telefon</p>
                    <p>+49 6131 123456</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">E-Mail</p>
                    <p>info@axel-froehlich.de</p>
                  </div>
                  <div>
                    <p className="text-luxury-gold text-sm mb-1">Notfall-Service</p>
                    <p>+49 172 1234567<br />24/7 für Stammkunden</p>
                  </div>
                </div>
              </div>

              {/* Online-Shop */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-light text-luxury-white mb-6">Online-Shop</h3>
                <div className="space-y-4 text-luxury-text">
                  <p>
                    Entdecken Sie unser Sortiment an hochwertigen Badprodukten 
                    in unserem Online-Shop.
                  </p>
                  <a 
                    href="https://froehlich-bad.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-luxury-gold hover:text-luxury-white transition-colors duration-300"
                  >
                    → froehlich-bad.de
                  </a>
                  <p className="text-sm">
                    Versandkostenfrei ab 500€<br />
                    Persönliche Beratung inklusive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anfahrt */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Anfahrt & Lage
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-6"></div>
                <p className="text-luxury-text text-center">
                  Interaktive Karte mit Anfahrt zum Showroom
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-luxury-gold mb-3">Mit dem Auto</h3>
                  <p className="text-luxury-text">
                    Über die A60 Abfahrt Mainz-Finthen, dann 5 Minuten stadteinwärts. 
                    Kostenfreie Parkplätze direkt vor dem Showroom.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-luxury-gold mb-3">ÖPNV</h3>
                  <p className="text-luxury-text">
                    Straßenbahn Linie 53 bis Haltestelle "Mombacher Straße", 
                    dann 2 Minuten Fußweg.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-luxury-gold mb-3">Bundesweite Anreise</h3>
                  <p className="text-luxury-text">
                    Mainz Hauptbahnhof 15 Minuten entfernt. Flughafen Frankfurt 
                    30 Minuten mit dem Auto. Gerne organisieren wir auch einen 
                    Abholservice für überregionale Kunden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-16 text-center">
              Häufige Fragen
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "Wie lange dauert eine Badplanung?",
                  answer: "Je nach Komplexität 2-4 Wochen von der ersten Beratung bis zur finalen 3D-Planung."
                },
                {
                  question: "Planen Sie auch außerhalb von Mainz?",
                  answer: "Ja, wir betreuen Projekte deutschlandweit. Große Projekte ab 50.000€ auch international."
                },
                {
                  question: "Was kostet eine 3D-Planung?",
                  answer: "Die erste 3D-Planung ist kostenfrei. Bei Beauftragung wird sie vollständig angerechnet."
                },
                {
                  question: "Führen Sie auch die Sanierung durch?",
                  answer: "Ja, wir planen und realisieren – alles aus einer Hand mit geprüften Partnerbetrieben."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-luxury-gray/20 pb-6">
                  <h3 className="text-xl font-light text-luxury-white mb-3">{faq.question}</h3>
                  <p className="text-luxury-text">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;