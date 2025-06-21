
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with luxury gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-luxury-black via-luxury-gray to-luxury-black"></div>
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-luxury-white">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-thin mb-8 leading-tight tracking-tight">
            Ihr Bad.{' '}
            <span className="block">Ihre Vision.</span>
            <span className="gold-accent">Unsere Planung.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-luxury-text/80 font-light leading-relaxed max-w-3xl mx-auto">
            Exklusive 3D-Planung mit Ausstellung in Mainz
          </p>
          
          <Button 
            size="lg"
            className="luxury-button text-xl px-16 py-6 animate-slide-in"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beratungstermin vereinbaren
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border border-luxury-white/30 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-luxury-white/60 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
