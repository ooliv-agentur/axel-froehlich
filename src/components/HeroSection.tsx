
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Large Hero Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full image-placeholder">
          <div className="text-center">
            <div className="text-luxury-text/30 text-2xl font-light mb-4">Hero Image Placeholder</div>
            <div className="text-luxury-text/20 text-lg">Luxuriöses Badezimmer / Showroom</div>
            <div className="text-luxury-text/20 text-lg">Empfehlung: Dunkle, atmosphärische Aufnahme</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-luxury-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 text-center">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-thin mb-12 leading-tight tracking-tight text-white">
            Ihr Bad.{' '}
            <span className="block text-white">Ihre Vision.</span>
            <span className="block text-luxury-gold font-light">Unsere Planung.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl xl:text-3xl mb-16 text-white/90 font-light leading-relaxed max-w-4xl mx-auto">
            Exklusive 3D-Planung mit Ausstellung in Mainz
          </p>
          
          <Button 
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-lg px-12 py-6 font-light tracking-wide transition-all duration-500 hover:scale-105"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beratungstermin vereinbaren
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-luxury-gold/60 rounded-full mt-3"></div>
        </div>
      </div>
    </section>
  );
};
