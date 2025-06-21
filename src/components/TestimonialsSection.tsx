
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
            <span className="gold-accent">Kundenstimmen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="bg-brand-gray p-8 rounded-lg mb-6">
                <div className="text-4xl text-brand-gold mb-4">"</div>
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  {testimonial.text}
                </p>
                <div className="text-4xl text-brand-gold rotate-180">"</div>
              </div>
              <p className="font-medium text-brand-dark">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
