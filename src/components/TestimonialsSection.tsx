
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
    <section className="py-32 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="mb-8">
                  <div className="text-6xl text-luxury-gold mb-6 font-light">"</div>
                  <p className="text-xl text-luxury-text leading-relaxed italic mb-6">
                    {testimonial.text}
                  </p>
                  <div className="text-6xl text-luxury-gold rotate-180 font-light">"</div>
                </div>
                <p className="font-light text-luxury-text/70 tracking-wide">
                  – {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
