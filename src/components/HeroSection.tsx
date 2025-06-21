
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-brand-dark"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Individuelle Badplanung auf{' '}
            <span className="gold-accent">höchstem Niveau</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
            Entdecken Sie außergewöhnliches Design, ausgewählte Materialien und persönliche Beratung im Showroom in Mainz.
          </p>
          
          <Button 
            size="lg"
            className="brand-button text-xl px-12 py-6 animate-scale-in"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Termin im Showroom vereinbaren
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
