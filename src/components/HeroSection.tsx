
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Large Hero Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full image-placeholder">
          <div className="absolute top-4 left-4 z-10">
            <div className="inline-flex items-center px-2 py-1 bg-luxury-black/80 backdrop-blur-sm rounded border border-luxury-gold/20 opacity-50">
              <div className="w-1.5 h-1.5 bg-luxury-gold/60 rounded-full mr-2"></div>
              <div className="text-luxury-gold/60 text-xs font-light tracking-wide">HERO BILDFLÄCHE</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-luxury-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin mb-6 sm:mb-8 lg:mb-12 leading-tight tracking-tight text-white">
            <span className="block">Ihr Bad.</span>
            <span className="block text-white">Ihre Vision.</span>
            <span className="block text-luxury-gold font-light">Unsere Planung.</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 lg:mb-16 text-white/90 font-light leading-relaxed max-w-3xl mx-auto px-4">
            Exklusive 3D-Planung mit Ausstellung in Mainz
          </p>
          
          <Button 
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-base sm:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 font-light tracking-wide transition-all duration-500 hover:scale-105"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beratungstermin vereinbaren
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 sm:w-6 h-10 sm:h-12 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 sm:h-4 bg-luxury-gold/60 rounded-full mt-2 sm:mt-3"></div>
        </div>
      </div>
    </section>
  );
};
