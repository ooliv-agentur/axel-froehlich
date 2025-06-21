
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with luxury gradient and placeholder for hero image */}
      <div className="absolute inset-0">
        <div className="w-full h-full image-placeholder">
          <div className="text-center">
            <div className="text-luxury-text/30 text-2xl font-light mb-4">Hero Image Placeholder</div>
            <div className="text-luxury-text/20 text-lg">Luxuriöses Badezimmer / Showroom</div>
            <div className="text-luxury-text/20 text-lg">Empfehlung: Dunkle, atmosphärische Aufnahme</div>
          </div>
        </div>
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center text-luxury-white">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <h1 className="hero-text mb-16 leading-tight">
            Ihr Bad.{' '}
            <span className="block">Ihre Vision.</span>
            <span className="gold-accent block">Unsere Planung.</span>
          </h1>
          
          <p className="editorial-text mb-20 text-luxury-text/90 font-light leading-relaxed max-w-4xl mx-auto">
            Exklusive 3D-Planung mit Ausstellung in Mainz
          </p>
          
          <Button 
            size="lg"
            className="luxury-button text-xl px-20 py-8 animate-slide-in"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beratungstermin vereinbaren
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-16 border border-luxury-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-6 bg-luxury-gold/60 rounded-full mt-4 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
