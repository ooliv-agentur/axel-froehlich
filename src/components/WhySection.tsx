
import React from 'react';

export const WhySection = () => {
  const values = [
    {
      title: "Beratungskompetenz",
      description: "Persönliche Beratung durch Axel Fröhlich mit über 30 Jahren Erfahrung"
    },
    {
      title: "Designanspruch", 
      description: "Höchste ästhetische Standards mit internationalem Markenanspruch"
    },
    {
      title: "3D-Planung",
      description: "Fotorealistische Visualisierung Ihres Traumbades vor der Umsetzung"
    },
    {
      title: "Markenvielfalt",
      description: "Ausgewählte Designhersteller und exklusive Materialien"
    },
    {
      title: "Exklusivität",
      description: "Individuelle Lösungen abseits der Standardangebote"
    },
    {
      title: "Showroom erleben",
      description: "500m² Ausstellung zum Anfassen und Inspirieren lassen"
    }
  ];

  return (
    <section className="py-40 lg:py-52 bg-luxury-black relative">
      {/* Background Image Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full image-placeholder opacity-10">
        <div className="text-center h-full flex items-center justify-center">
          <div className="text-luxury-text/20 text-lg">Background Texture</div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mission Statement */}
          <div className="mb-40 lg:mb-52">
            <div className="max-w-6xl">
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-luxury-white leading-tight mb-16">
                Seit über 30 Jahren realisieren wir besondere Bäder für anspruchsvolle Menschen.
              </h2>
              <p className="text-2xl lg:text-3xl xl:text-4xl font-light text-luxury-text/80 leading-relaxed">
                Unsere Planung verbindet gestalterisches Feingefühl mit fundiertem Fachwissen – 
                für Ergebnisse, die nicht nur funktional überzeugen, sondern{' '}
                <span className="gold-accent italic font-serif text-3xl lg:text-4xl xl:text-5xl">berühren.</span>
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-8">
                  <div className="w-16 h-0.5 bg-luxury-gold mb-8 transition-all duration-500 group-hover:w-24"></div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-8 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                    {value.title}
                  </h3>
                </div>
                <p className="text-xl lg:text-2xl text-luxury-text/80 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
