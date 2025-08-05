import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

const Inspiration = () => {

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80 z-10"></div>
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/20"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-luxury-white mb-8 tracking-tight leading-tight">
              Inspiration für<br />
              Ihr Traumbad
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/80 mb-12 max-w-3xl mx-auto">
              Einzigartige Badprojekte aus 30 Jahren Planungs-Erfahrung
            </p>
          </div>
        </section>


        {/* Projects Grid */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {projectsData.map((project, index) => (
                <Link key={index} to={`/inspiration/${project.slug}`} className="group cursor-pointer block">
                  <div className="relative mb-6">
                    <div className="aspect-[4/3] image-placeholder bg-luxury-gray/20 group-hover:bg-luxury-gray/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-luxury-gold text-sm font-light">{project.category}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-luxury-gold text-sm font-light">{project.subtitle}</p>
                    <h3 className="text-xl lg:text-2xl font-light text-luxury-white group-hover:text-luxury-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-luxury-text text-sm leading-relaxed">
                      {project.description.split('\n\n')[0].substring(0, 150)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-24 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-white mb-8">
              Ihr Projekt beginnt hier
            </h2>
            <p className="text-lg text-luxury-text mb-12 max-w-2xl mx-auto">
              Lassen Sie sich von unseren Projekten inspirieren und vereinbaren Sie einen 
              persönlichen Beratungstermin für Ihr individuelles Traumbad.
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black text-lg px-8 py-4">
              Beratungstermin vereinbaren
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Inspiration;