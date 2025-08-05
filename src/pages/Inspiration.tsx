import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSlider } from '@/components/HeroSlider';
import { projectsData } from '@/data/projects';

const Inspiration = () => {
  const heroSlides = [
    { image: '' },
    { image: '' }
  ];

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        {/* Hero Section with Slider */}
        <HeroSlider slides={heroSlides}>
          <div className="container mx-auto px-4 sm:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-luxury-white mb-8 tracking-tight leading-tight">
              Inspiration für<br />
              Ihr Traumbad
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/80 mb-12 max-w-3xl mx-auto">
              Einzigartige Badprojekte aus 30 Jahren Planungs-Erfahrung
            </p>
          </div>
        </HeroSlider>

        {/* Full-Width Project Showcases */}
        <div className="bg-luxury-black">
          {projectsData.map((project, index) => (
            <Link key={index} to={`/inspiration/${project.slug}`} className="group block">
              <section className="relative min-h-screen flex items-end overflow-hidden">
                {/* Project Image */}
                <div className="absolute inset-0 image-placeholder bg-luxury-gray/20 group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent"></div>
                
                {/* Project Info */}
                <div className="relative z-20 container mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
                  <div className="max-w-4xl">
                    <div className="mb-4">
                      <span className="text-luxury-gold text-sm font-light tracking-wide uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-luxury-white mb-6 leading-tight group-hover:text-luxury-gold transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-luxury-text/90 max-w-2xl leading-relaxed">
                      {project.description.split('\n\n')[0]}
                    </p>
                    
                    {/* Read More Indicator */}
                    <div className="mt-8 flex items-center text-luxury-gold group-hover:text-luxury-white transition-colors">
                      <span className="text-sm font-light tracking-wide uppercase mr-2">Projekt ansehen</span>
                      <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute top-8 right-4 sm:right-8 z-20">
                  <span className="text-6xl sm:text-8xl font-light text-luxury-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inspiration;