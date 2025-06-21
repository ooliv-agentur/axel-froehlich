
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle the form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-32 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin mb-8 text-luxury-white tracking-tight">
              Lassen Sie uns gemeinsam <span className="gold-accent">Ihr Traumbad planen</span>
            </h2>
            
            <p className="text-xl text-luxury-text/80 leading-relaxed">
              Vereinbaren Sie einen persönlichen Beratungstermin im Showroom in Mainz.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Vorname"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-luxury-black/50 border border-luxury-gray/30 rounded-none text-luxury-white placeholder-luxury-text/50 focus:border-luxury-gold focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nachname"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-luxury-black/50 border border-luxury-gray/30 rounded-none text-luxury-white placeholder-luxury-text/50 focus:border-luxury-gold focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-luxury-black/50 border border-luxury-gray/30 rounded-none text-luxury-white placeholder-luxury-text/50 focus:border-luxury-gold focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefonnummer"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-luxury-black/50 border border-luxury-gray/30 rounded-none text-luxury-white placeholder-luxury-text/50 focus:border-luxury-gold focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="preferredDate"
                placeholder="Wunschtermin (Di–Sa, 10–18 Uhr)"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-luxury-black/50 border border-luxury-gray/30 rounded-none text-luxury-white placeholder-luxury-text/50 focus:border-luxury-gold focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Ihre Nachricht"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-luxury-black/50 border border-luxury-gray/30 rounded-none text-luxury-white placeholder-luxury-text/50 focus:border-luxury-gold focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit"
                className="luxury-button text-xl px-16 py-6"
              >
                Termin anfragen
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
