import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Inspiration = () => {
  const [activeFilter, setActiveFilter] = useState('Alle');
  
  const filters = ['Alle', 'Luxus', 'Modern', 'Klassisch', 'Kompakt', 'Wellness'];
  
  const projects = [
    {
      title: "Penthouse München",
      subtitle: "Luxus trifft Minimalismus", 
      category: "Luxus",
      description: "200m² Wellness-Oase mit freistehender Badewanne und Panoramablick"
    },
    {
      title: "Villa Frankfurt",
      subtitle: "Zeitlose Eleganz",
      category: "Klassisch", 
      description: "Klassisches Design mit modernen Komfort-Features"
    },
    {
      title: "Loft Berlin",
      subtitle: "Industrial Chic",
      category: "Modern",
      description: "Industrieller Stil mit hochwertigen Materialien"
    },
    {
      title: "Stadthaus Hamburg", 
      subtitle: "Clevere Raumnutzung",
      category: "Kompakt",
      description: "Maximaler Komfort auf kleinstem Raum"
    },
    {
      title: "Residenz Köln",
      subtitle: "Private Spa-Welt", 
      category: "Wellness",
      description: "Wellness-Bereich mit Sauna und Dampfbad"
    },
    {
      title: "Apartment Stuttgart",
      subtitle: "Puristische Ästhetik",
      category: "Modern", 
      description: "Klare Linien und natürliche Materialien"
    },
    {
      title: "Villa Wiesbaden",
      subtitle: "Barock meets Modern",
      category: "Klassisch",
      description: "Traditionelle Elemente in zeitgemäßer Interpretation"
    },
    {
      title: "Penthouse Düsseldorf", 
      subtitle: "Gold & Marmor",
      category: "Luxus",
      description: "Exklusive Materialien und maßgefertigte Lösungen"
    }
  ];

  const filteredProjects = activeFilter === 'Alle' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

        {/* Filter Navigation */}
        <section className="py-8 bg-luxury-black border-b border-luxury-gray/20">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 text-lg font-light transition-colors duration-300 ${
                    activeFilter === filter
                      ? 'text-luxury-gold border-b border-luxury-gold'
                      : 'text-luxury-text hover:text-luxury-gold'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 sm:py-24 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
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
                      {project.description}
                    </p>
                  </div>
                </div>
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