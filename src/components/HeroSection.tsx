
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Large Hero Background Image */}
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
        <div className="max-w-8xl mx-auto animate-fade-in">
          <h1 className="text-7xl lg:text-9xl xl:text-[12rem] font-thin mb-20 leading-[0.85] tracking-tight">
            Ihr Bad.{' '}
            <span className="block">Ihre Vision.</span>
            <span className="gold-accent block font-light">Unsere Planung.</span>
          </h1>
          
          <p className="text-2xl lg:text-3xl xl:text-4xl mb-24 text-luxury-text/90 font-light leading-relaxed max-w-5xl mx-auto">
            Exklusive 3D-Planung mit Ausstellung in Mainz
          </p>
          
          <Button 
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-xl px-24 py-10 font-light tracking-wide transition-all duration-500 hover:scale-105"
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
