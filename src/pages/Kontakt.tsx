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
          {/* Architectural Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--luxury-gold) / 0.3) 1px, transparent 1px),
                linear-gradient(0deg, hsl(var(--luxury-gold) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Technical Frame Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-luxury-gold/30 z-10"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-luxury-gold/30 z-10"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-luxury-gold/30 z-10"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-luxury-gold/30 z-10"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80 z-10"></div>
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/20"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-8">
            {/* Architectural divider line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-luxury-gold/20 to-transparent transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
              <div className="relative">
                {/* Technical measurement indicator */}
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-luxury-gold/20"></div>
                <div className="absolute -left-6 top-0 w-2 h-px bg-luxury-gold/40"></div>
                <div className="absolute -left-6 bottom-0 w-2 h-px bg-luxury-gold/40"></div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-luxury-white mb-8 tracking-tight leading-tight">
                  Lassen Sie uns<br />
                  <span className="text-luxury-gold">sprechen</span>
                </h1>
                <div className="w-16 h-px bg-luxury-gold mb-6"></div>
                <p className="text-lg sm:text-xl text-luxury-text/80 mb-8 font-light">
                  Ihr Traumbad beginnt mit einem Gespräch. Kontaktieren Sie uns für eine 
                  unverbindliche Beratung in unserem Mainzer Showroom.
                </p>
              </div>
              
              {/* Kontaktformular mit architektonischem Rahmen */}
              <div className="relative">
                {/* Structural frame */}
                <div className="absolute -inset-4 border border-luxury-gold/20"></div>
                <div className="absolute -top-6 -left-6 w-4 h-4 border-l-2 border-t-2 border-luxury-gold/50"></div>
                <div className="absolute -top-6 -right-6 w-4 h-4 border-r-2 border-t-2 border-luxury-gold/50"></div>
                <div className="absolute -bottom-6 -left-6 w-4 h-4 border-l-2 border-b-2 border-luxury-gold/50"></div>
                <div className="absolute -bottom-6 -right-6 w-4 h-4 border-r-2 border-b-2 border-luxury-gold/50"></div>
                
                <div className="bg-luxury-black/90 backdrop-blur-sm p-8 relative">
                  <h3 className="text-2xl font-light text-luxury-white mb-6 tracking-wider">BERATUNGSTERMIN ANFRAGEN</h3>
                  <div className="w-12 h-px bg-luxury-gold mb-6"></div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        placeholder="Vorname" 
                        className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50"
                      />
                      <Input 
                        placeholder="Nachname" 
                        className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50"
                      />
                    </div>
                    <Input 
                      type="email" 
                      placeholder="E-Mail Adresse" 
                      className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50"
                    />
                    <Input 
                      type="tel" 
                      placeholder="Telefonnummer" 
                      className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50"
                    />
                    <Input 
                      placeholder="PLZ / Ort" 
                      className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50"
                    />
                    <Textarea 
                      placeholder="Beschreiben Sie kurz Ihr Badprojekt..."
                      rows={4}
                      className="bg-luxury-gray/10 border-luxury-gray/30 text-luxury-white placeholder:text-luxury-text/60 focus:border-luxury-gold/50"
                    />
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg py-3 font-light tracking-wider">
                      BERATUNGSTERMIN ANFRAGEN
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Divider */}
        <div className="relative h-24 bg-luxury-black overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-8">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-luxury-gold/20"></div>
                <div className="w-8 h-8 border border-luxury-gold/30 rotate-45 bg-luxury-gold/10"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-luxury-gold/40 to-luxury-gold/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Kontaktinformationen */}
        <section className="py-16 sm:py-24 bg-luxury-black relative">
          {/* Blueprint grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--luxury-gold) / 0.2) 1px, transparent 1px),
                linear-gradient(0deg, hsl(var(--luxury-gold) / 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative">
            {/* Technical title section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-luxury-gold"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white tracking-wider">KONTAKT</h2>
                <div className="w-12 h-px bg-luxury-gold"></div>
              </div>
              <p className="text-luxury-text/80 font-light">Drei Wege zu Ihrem Traumbad</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Vertical dividers */}
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-luxury-gold/10 hidden lg:block"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-luxury-gold/10 hidden lg:block"></div>
              
              {/* Showroom */}
              <div className="relative">
                {/* Material card background */}
                <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 relative group hover:border-luxury-gold/40 transition-colors duration-300">
                  {/* Corner elements */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-luxury-gold/50"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-luxury-gold/50"></div>
                  
                  <div className="w-12 h-12 bg-luxury-gold/20 mb-6"></div>
                  <h3 className="text-xl font-light text-luxury-white mb-6 tracking-wider">SHOWROOM BESUCHEN</h3>
                  <div className="w-8 h-px bg-luxury-gold mb-6"></div>
                  <div className="space-y-4 text-luxury-text">
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">ADRESSE</p>
                      <p className="font-light">Mombacher Straße 67<br />55122 Mainz</p>
                    </div>
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">ÖFFNUNGSZEITEN</p>
                      <p className="font-light">Mo-Fr: 9:00 - 18:00 Uhr<br />Sa: 9:00 - 16:00 Uhr<br />So: Nach Vereinbarung</p>
                    </div>
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">PARKEN</p>
                      <p className="font-light">Kostenfreie Parkplätze<br />direkt vor dem Showroom</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direktkontakt */}
              <div className="relative">
                <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 relative group hover:border-luxury-gold/40 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-luxury-gold/50"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-luxury-gold/50"></div>
                  
                  <div className="w-12 h-12 bg-luxury-gold/20 mb-6"></div>
                  <h3 className="text-xl font-light text-luxury-white mb-6 tracking-wider">DIREKTKONTAKT</h3>
                  <div className="w-8 h-px bg-luxury-gold mb-6"></div>
                  <div className="space-y-4 text-luxury-text">
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">GESCHÄFTSFÜHRER</p>
                      <p className="font-light">Axel Fröhlich</p>
                    </div>
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">TELEFON</p>
                      <p className="font-light">+49 6131 123456</p>
                    </div>
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">E-MAIL</p>
                      <p className="font-light">info@axel-froehlich.de</p>
                    </div>
                    <div>
                      <p className="text-luxury-gold text-sm mb-1 tracking-wide">NOTFALL-SERVICE</p>
                      <p className="font-light">+49 172 1234567<br />24/7 für Stammkunden</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online-Shop */}
              <div className="relative">
                <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 relative group hover:border-luxury-gold/40 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-luxury-gold/50"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-luxury-gold/50"></div>
                  
                  <div className="w-12 h-12 bg-luxury-gold/20 mb-6"></div>
                  <h3 className="text-xl font-light text-luxury-white mb-6 tracking-wider">ONLINE-SHOP</h3>
                  <div className="w-8 h-px bg-luxury-gold mb-6"></div>
                  <div className="space-y-4 text-luxury-text">
                    <p className="font-light">
                      Entdecken Sie unser Sortiment an hochwertigen Badprodukten 
                      in unserem Online-Shop.
                    </p>
                    <a 
                      href="https://froehlich-bad.de" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-luxury-gold hover:text-luxury-white transition-colors duration-300 tracking-wide"
                    >
                      → froehlich-bad.de
                    </a>
                    <p className="text-sm font-light">
                      Versandkostenfrei ab 500€<br />
                      Persönliche Beratung inklusive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Divider */}
        <div className="relative h-16 bg-luxury-black overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-8">
              <div className="flex items-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-luxury-gold/20"></div>
                <div className="mx-4 w-2 h-2 bg-luxury-gold/50 rotate-45"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-luxury-gold/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Anfahrt */}
        <section className="py-16 sm:py-24 bg-luxury-dark/30 relative">
          {/* Technical pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, hsl(var(--luxury-gold) / 0.3) 41%, hsl(var(--luxury-gold) / 0.3) 42%, transparent 43%)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative">
            {/* Technical title section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-luxury-gold"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white tracking-wider">ANFAHRT & LAGE</h2>
                <div className="w-12 h-px bg-luxury-gold"></div>
              </div>
              <p className="text-luxury-text/80 font-light">Ihr Weg zu uns nach Mainz</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
              {/* Central divider line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-luxury-gold/20 transform -translate-x-1/2 hidden lg:block"></div>
              
              <div className="relative">
                {/* Map section with technical frame */}
                <div className="relative">
                  <div className="absolute -inset-2 border border-luxury-gold/30"></div>
                  <div className="absolute -top-4 -left-4 w-6 h-6 border-l-2 border-t-2 border-luxury-gold/60"></div>
                  <div className="absolute -top-4 -right-4 w-6 h-6 border-r-2 border-t-2 border-luxury-gold/60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 border-l-2 border-b-2 border-luxury-gold/60"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 border-r-2 border-b-2 border-luxury-gold/60"></div>
                  
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 mb-6 relative">
                    <div className="absolute inset-4 border border-luxury-gold/20"></div>
                  </div>
                </div>
                <p className="text-luxury-text text-center font-light tracking-wide">
                  INTERAKTIVE KARTE MIT ANFAHRT ZUM SHOWROOM
                </p>
              </div>
              
              <div className="space-y-8 relative">
                {/* Technical reference line */}
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-luxury-gold/30"></div>
                <div className="absolute -left-6 top-0 w-2 h-px bg-luxury-gold/50"></div>
                <div className="absolute -left-6 bottom-0 w-2 h-px bg-luxury-gold/50"></div>
                
                <div className="bg-luxury-black/40 border border-luxury-gold/20 p-6 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-luxury-gold/50"></div>
                  
                  <div className="w-8 h-8 bg-luxury-gold/20 mb-4"></div>
                  <h3 className="text-lg text-luxury-gold mb-3 font-light tracking-wider">MIT DEM AUTO</h3>
                  <p className="text-luxury-text font-light leading-relaxed">
                    Über die A60 Abfahrt Mainz-Finthen, dann 5 Minuten stadteinwärts. 
                    Kostenfreie Parkplätze direkt vor dem Showroom.
                  </p>
                </div>
                
                <div className="bg-luxury-black/40 border border-luxury-gold/20 p-6 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-luxury-gold/50"></div>
                  
                  <div className="w-8 h-8 bg-luxury-gold/20 mb-4"></div>
                  <h3 className="text-lg text-luxury-gold mb-3 font-light tracking-wider">ÖPNV</h3>
                  <p className="text-luxury-text font-light leading-relaxed">
                    Straßenbahn Linie 53 bis Haltestelle "Mombacher Straße", 
                    dann 2 Minuten Fußweg.
                  </p>
                </div>
                
                <div className="bg-luxury-black/40 border border-luxury-gold/20 p-6 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-luxury-gold/50"></div>
                  
                  <div className="w-8 h-8 bg-luxury-gold/20 mb-4"></div>
                  <h3 className="text-lg text-luxury-gold mb-3 font-light tracking-wider">BUNDESWEITE ANREISE</h3>
                  <p className="text-luxury-text font-light leading-relaxed">
                    Mainz Hauptbahnhof 15 Minuten entfernt. Flughafen Frankfurt 
                    30 Minuten mit dem Auto. Gerne organisieren wir auch einen 
                    Abholservice für überregionale Kunden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Divider */}
        <div className="relative h-20 bg-luxury-black overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-8">
              <div className="flex items-center gap-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-luxury-gold/40"></div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-luxury-gold/60"></div>
                  <div className="w-2 h-2 bg-luxury-gold/50"></div>
                  <div className="w-1 h-1 bg-luxury-gold/60"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-luxury-gold/30 to-luxury-gold/40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-luxury-black relative">
          {/* Subtle architectural overlay */}
          <div className="absolute inset-0 opacity-3">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, hsl(var(--luxury-gold) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative">
            {/* Technical title section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-luxury-gold"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white tracking-wider">HÄUFIGE FRAGEN</h2>
                <div className="w-12 h-px bg-luxury-gold"></div>
              </div>
              <p className="text-luxury-text/80 font-light">Antworten auf die wichtigsten Fragen</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8 relative">
              {/* Technical reference lines */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-luxury-gold/20"></div>
              <div className="absolute right-0 top-0 bottom-0 w-px bg-luxury-gold/20"></div>
              
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
                <div key={index} className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 relative group hover:border-luxury-gold/40 transition-colors duration-300">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-luxury-gold/50"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-luxury-gold/50"></div>
                  
                  {/* Question marker */}
                  <div className="w-8 h-8 bg-luxury-gold/20 mb-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-luxury-gold/60"></div>
                  </div>
                  
                  <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wide">{faq.question}</h3>
                  <div className="w-12 h-px bg-luxury-gold/50 mb-4"></div>
                  <p className="text-luxury-text font-light leading-relaxed">{faq.answer}</p>
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