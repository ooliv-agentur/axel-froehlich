
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
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-32">
            Der Weg zu Ihrem <span className="gold-accent">Traumbad</span>
          </h2>
          
          <div className="space-y-32 lg:space-y-40">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <div className="text-8xl lg:text-9xl font-thin text-luxury-gold/30 leading-none">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-6">
                    <h3 className="text-3xl lg:text-4xl font-light mb-8 text-luxury-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="editorial-text text-luxury-text/80">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[4/3] image-placeholder rounded-sm">
                      <div className="text-center">
                        <div className="text-luxury-gold text-xs font-light mb-2 tracking-wide">BILDFLÄCHE</div>
                        <div className="text-luxury-text/50 text-sm">Step {step.number} Image</div>
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
