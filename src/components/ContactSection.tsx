
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

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
    toast({
      title: "Terminanfrage gesendet",
      description: "Wir melden uns zeitnah bei Ihnen zurück.",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      concern: 'Badplanung',
      preferredDate: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
            Unverbindlichen <span className="gold-accent">Termin</span> vereinbaren
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <strong>Lassen Sie uns gemeinsam Ihr Traumbad planen.</strong><br />
            Vereinbaren Sie einen persönlichen Beratungstermin im Showroom in Mainz.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName">Vorname *</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nachname *</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="email">E-Mail *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="concern">Anliegen</Label>
                <select
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                >
                  <option value="Badplanung">Badplanung</option>
                  <option value="Ausstellung">Ausstellung</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>
              <div>
                <Label htmlFor="preferredDate">Wunschtermin</Label>
                <Input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message">Nachricht</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-none"
                placeholder="Teilen Sie uns weitere Details zu Ihrem Projekt mit..."
              />
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Öffnungszeiten Ausstellung: Di–Fr: 10–18 Uhr | Sa: 10–14 Uhr | Mo: geschlossen
            </p>

            <Button type="submit" className="w-full brand-button">
              Termin anfragen
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
