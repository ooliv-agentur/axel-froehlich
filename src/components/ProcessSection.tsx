
import React from 'react';

export const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Inspiration & Beratung im Showroom',
      description: 'Besuchen Sie unsere Ausstellung in Mainz und erleben Sie Materialien, Formen und Stilwelten live – abgestimmt auf Ihre Wünsche.'
    },
    {
      number: '2',
      title: '3D-Badplanung durch Experten',
      description: 'Unsere Innenarchitekten entwickeln ein individuelles Raumkonzept – präzise geplant, visuell erlebbar, funktional durchdacht.'
    },
    {
      number: '3',
      title: 'Umsetzung deutschlandweit',
      description: 'Wir begleiten Sie bis zur Realisierung – mit unseren Partnern vor Ort oder in Kooperation mit Ihrem Handwerksbetrieb.'
    }
  ];

  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
            Der Weg zu Ihrem <span className="gold-accent">Traumbad</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold mb-4 text-brand-dark text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-6 w-12 h-0.5 bg-brand-gold"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
