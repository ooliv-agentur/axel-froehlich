
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
    <section className="section-spacing bg-luxury-black">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="mb-32 lg:mb-40">
            <div className="max-w-5xl">
              <p className="text-3xl lg:text-4xl xl:text-5xl font-light text-luxury-white leading-relaxed">
                Seit über 30 Jahren realisieren wir besondere Bäder für anspruchsvolle Menschen. 
                Unsere Planung verbindet gestalterisches Feingefühl mit fundiertem Fachwissen – 
                für Ergebnisse, die nicht nur funktional überzeugen, sondern{' '}
                <span className="gold-accent italic">berühren.</span>
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-2xl lg:text-3xl font-light mb-6 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-xl text-luxury-text/80 leading-relaxed font-light">
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
