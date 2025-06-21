
import React from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Die Auswahl ist sehr exklusiv und hebt sich von allen anderen Anbietern im Umkreis spürbar ab.",
      author: "Marcel W."
    },
    {
      text: "Bad Fröhlich hat jetzt das zweite Projekt in unserem Haus verwirklicht – und das dritte ist bereits beauftragt.",
      author: "B. & E. im Taunus"
    }
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 xl:py-52 bg-luxury-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #a68343 2px, transparent 2px), radial-gradient(circle at 80% 50%, #a68343 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 lg:mb-32 xl:mb-40">
            <div className="w-20 sm:w-24 h-1 bg-luxury-gold mx-auto mb-8 sm:mb-12"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-thin text-luxury-white mb-12 sm:mb-16 tracking-tight">
              Was unsere Kunden <span className="gold-accent font-serif italic">erleben</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-32">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in relative"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Quote Styling */}
                <div className="relative">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-luxury-gold/30 mb-6 sm:mb-8 font-serif leading-none">"</div>
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-luxury-white leading-relaxed font-light italic mb-8 sm:mb-12 relative -mt-8 sm:-mt-12 lg:-mt-16 px-4">
                    {testimonial.text}
                  </blockquote>
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-luxury-gold/30 rotate-180 font-serif leading-none float-right -mt-4 sm:-mt-6 lg:-mt-8"></div>
                </div>
                
                <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-luxury-gold/20">
                  <cite className="not-italic font-light text-lg sm:text-xl lg:text-2xl text-luxury-gold tracking-wide">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
