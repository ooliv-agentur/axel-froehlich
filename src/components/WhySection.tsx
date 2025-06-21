
import React from 'react';
import { Award, User, Wand } from 'lucide-react';

export const WhySection = () => {
  const features = [
    {
      icon: User,
      title: 'Persönliche Beratung',
      description: 'Persönliche Beratung durch Axel Fröhlich'
    },
    {
      icon: Wand,
      title: '3D-Planung',
      description: 'Maßgeschneiderte Planung mit fotorealistischen 3D-Modellen'
    },
    {
      icon: Award,
      title: 'Designmarken',
      description: 'Hochwertige Produkte internationaler Designmarken'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
            Warum <span className="gold-accent">Axel Fröhlich?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            Seit über 30 Jahren realisieren wir besondere Bäder für anspruchsvolle Menschen. 
            Unsere Planung verbindet gestalterisches Feingefühl mit fundiertem Fachwissen – 
            für Ergebnisse, die nicht nur funktional überzeugen, sondern berühren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-brand-gray rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-all duration-300">
                <feature.icon size={32} className="text-brand-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-brand-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
