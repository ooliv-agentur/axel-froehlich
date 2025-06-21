
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-center mb-20 sm:mb-28 lg:mb-32 text-luxury-white tracking-tight">
            Der Weg zu Ihrem <span className="gold-accent">Traumbad</span>
          </h2>
          
          <div className="space-y-20 sm:space-y-28 lg:space-y-32 xl:space-y-40">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 xl:gap-20 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-thin text-luxury-gold/30 leading-none">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-6 text-center lg:text-left">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-10 text-luxury-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/80 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[4/3] image-placeholder rounded-sm relative">
                      <div className="absolute bottom-2 right-2">
                        <div className="text-luxury-gold/20 text-xs font-light">Schritt {step.number}</div>
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
