
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    concern: 'Badplanung',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="section-spacing bg-luxury-gray">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="section-title">
              Unverbindlichen Termin <span className="gold-accent">vereinbaren</span>
            </h2>
            <p className="editorial-text text-luxury-text/80 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihr Traumbad planen.<br />
              Vereinbaren Sie einen persönlichen Beratungstermin im Showroom in Mainz.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-20 lg:gap-24">
            
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-luxury-white text-lg font-light mb-4">
                      Vorname *
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-luxury-black/50 border-luxury-gray/30 text-luxury-white text-lg py-6 focus:border-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-white text-lg font-light mb-4">
                      Nachname *
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-luxury-black/50 border-luxury-gray/30 text-luxury-white text-lg py-6 focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-luxury-white text-lg font-light mb-4">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-luxury-black/50 border-luxury-gray/30 text-luxury-white text-lg py-6 focus:border-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-white text-lg font-light mb-4">
                      Telefonnummer
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-luxury-black/50 border-luxury-gray/30 text-luxury-white text-lg py-6 focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-luxury-white text-lg font-light mb-4">
                      Anliegen
                    </label>
                    <select
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full bg-luxury-black/50 border border-luxury-gray/30 text-luxury-white text-lg py-6 px-4 rounded-md focus:border-luxury-gold focus:outline-none"
                    >
                      <option value="Badplanung">Badplanung</option>
                      <option value="Ausstellung">Ausstellung</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-luxury-white text-lg font-light mb-4">
                      Wunschtermin
                    </label>
                    <Input
                      type="text"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      placeholder="Di–Sa"
                      className="bg-luxury-black/50 border-luxury-gray/30 text-luxury-white text-lg py-6 focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-white text-lg font-light mb-4">
                    Nachricht
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-luxury-black/50 border-luxury-gray/30 text-luxury-white text-lg focus:border-luxury-gold resize-none"
                  />
                </div>

                <div className="pt-8">
                  <Button type="submit" className="luxury-button w-full md:w-auto">
                    Termin anfragen
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-light text-luxury-white mb-6">Kontakt</h3>
                  <div className="space-y-4 text-luxury-text/80">
                    <p className="text-xl font-light">
                      <strong className="text-luxury-white">Axel Fröhlich GmbH</strong><br />
                      Rheinallee 120<br />
                      55120 Mainz
                    </p>
                    <p className="text-xl font-light">
                      Telefon: +49 6131 945990
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-luxury-white mb-6">Öffnungszeiten</h3>
                  <div className="space-y-2 text-luxury-text/80 text-xl font-light">
                    <p>Di–Fr: 10–18 Uhr</p>
                    <p>Sa: 10–14 Uhr</p>
                    <p>Mo: geschlossen</p>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-luxury-gold hover:text-luxury-white transition-colors duration-500 text-xl font-light"
                  >
                    Route planen →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
