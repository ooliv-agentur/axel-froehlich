
import React from 'react';

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Inspiration & Beratung im Showroom",
      description: "Besuchen Sie unsere Ausstellung in Mainz und erleben Sie Materialien, Formen und Stilwelten live – abgestimmt auf Ihre Wünsche."
    },
    {
      number: "02", 
      title: "3D-Badplanung durch Experten",
      description: "Unsere Innenarchitekten entwickeln ein individuelles Raumkonzept – präzise geplant, visuell erlebbar, funktional durchdacht."
    },
    {
      number: "03",
      title: "Umsetzung deutschlandweit", 
      description: "Wir begleiten Sie bis zur Realisierung – mit unseren Partnern vor Ort oder in Kooperation mit Ihrem Handwerksbetrieb."
    }
  ];

  return (
    <section className="section-spacing bg-luxury-gray">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16 sm:mb-24 lg:mb-32">
            Der Weg zu Ihrem <span className="gold-accent">Traumbad</span>
          </h2>
          
          <div className="space-y-16 sm:space-y-24 lg:space-y-32 xl:space-y-40">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-thin text-luxury-gold/30 leading-none">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-6 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-luxury-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="editorial-text text-luxury-text/80 text-base sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[4/3] image-placeholder rounded-sm relative">
                      <div className="absolute bottom-3 right-3">
                        <div className="text-luxury-gold/40 text-xs font-light">Schritt {step.number}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
