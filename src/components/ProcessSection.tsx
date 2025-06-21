
import React from 'react';

export const ProcessSection = () => {
  const values = [
    {
      title: 'Beratungskompetenz',
      description: 'Persönliche Beratung durch Experten mit über 30 Jahren Erfahrung'
    },
    {
      title: 'Designanspruch',
      description: 'Höchste ästhetische Standards und zeitlose Eleganz'
    },
    {
      title: 'Markenvielfalt',
      description: 'Internationale Designmarken der Luxusklasse'
    },
    {
      title: '3D-Planung',
      description: 'Fotorealistische Visualisierung Ihres Traumbades'
    },
    {
      title: 'Exklusivität',
      description: 'Individuelle Lösungen für höchste Ansprüche'
    },
    {
      title: 'Showroom erleben',
      description: 'Materialien und Design live in der Ausstellung erfahren'
    }
  ];

  return (
    <section className="py-32 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-8 text-luxury-white tracking-tight">
              Was uns <span className="gold-accent">auszeichnet</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-light mb-6 text-luxury-white group-hover:text-luxury-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-luxury-text/70 leading-relaxed">
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
