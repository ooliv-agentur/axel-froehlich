
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { projectsData } from '@/data/projects';

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const [currentFloorPlan, setCurrentFloorPlan] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<any>(null);

  const project = projectsData.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-luxury-white mb-4">Projekt nicht gefunden</h1>
          <Link to="/inspiration">
            <Button variant="outline" className="text-luxury-white border-luxury-white">
              Zurück zur Übersicht
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Extract key project details for specifications
  const specifications = [
    ...(project.materialCosts ? [{ label: "Materialkosten", value: project.materialCosts }] : []),
    { label: "Kategorie", value: project.category },
    { label: "Stil", value: "Luxus Architektur" },
    { label: "Material", value: "Naturstein" },
    { label: "Besonderheit", value: "Sauna & Ofen" }
  ];

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main className="relative">
        {/* Full-Screen Hero with Minimal Overlay */}
        <section className="relative h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent"></div>
          
          <div className="relative z-20 container mx-auto px-8 pb-16">
            <div className="max-w-4xl">
              <span className="inline-block text-luxury-gold/80 text-sm font-light tracking-[0.2em] uppercase mb-4">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-luxury-white mb-6 tracking-tight leading-[0.9]">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-luxury-gold/90 font-light max-w-2xl leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Specifications Grid with integrated Back Button */}
        <section className="py-20 bg-luxury-black">
          <div className="container mx-auto px-8">
            {/* Back Button integrated into content flow */}
            <div className="mb-12">
              <Link to="/inspiration" className="inline-flex items-center text-luxury-gold/80 hover:text-luxury-gold transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-light tracking-wide">Zurück zur Inspiration</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {specifications.map((spec, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-luxury-gold/60 text-xs font-light tracking-[0.2em] uppercase mb-3">
                    {spec.label}
                  </h3>
                  <p className="text-luxury-white text-lg font-light">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Split Layout - Large Image + Text */}
        <section className="min-h-screen flex flex-col lg:flex-row">
          <div className="lg:w-2/3 relative">
            <div className="h-[60vh] lg:h-full image-placeholder bg-luxury-gray/10"></div>
          </div>
          <div className="lg:w-1/3 bg-luxury-black flex items-center">
            <div className="p-12 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-thin text-luxury-white mb-8 leading-tight">
                Luxuriöse<br />Wellnessoase
              </h2>
              <div className="space-y-6 text-luxury-text/80 font-light leading-relaxed">
                <p>Eine einzigartige Kombination aus Ästhetik und Funktionalität, die höchste Ansprüche an Design und Komfort erfüllt.</p>
                <p>Jedes Detail wurde sorgfältig geplant, um eine Atmosphäre von Ruhe und Eleganz zu schaffen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Material Costs & Services Section */}
        {(project.materialCosts || project.includedServices) && (
          <section className="py-24 bg-luxury-black/50">
            <div className="container mx-auto px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-thin text-luxury-white mb-4">
                    Materialkosten & Leistungsumfang
                  </h2>
                  <p className="text-luxury-gold/60 font-light tracking-wide">Transparenz von Anfang an</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Material Costs */}
                  {project.materialCosts && (
                    <div className="bg-luxury-black/80 p-8 border border-luxury-gold/20 rounded-lg">
                      <h3 className="text-2xl font-light text-luxury-gold mb-6 text-center">
                        Materialkosten
                      </h3>
                      <div className="text-center">
                        <div className="text-4xl font-thin text-luxury-white mb-2">
                          {project.materialCosts}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Included Services */}
                  {project.includedServices && (
                    <div className="bg-luxury-black/80 p-8 border border-luxury-gold/20 rounded-lg">
                      <h3 className="text-2xl font-light text-luxury-gold mb-6 text-center">
                        Im Preis enthalten
                      </h3>
                      <div className="space-y-3">
                        {project.includedServices.map((service, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                            <span className="text-luxury-white font-light">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technical Floor Plans */}
        <section className="py-24 bg-luxury-black/95">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-thin text-luxury-white mb-4">
                Technische Planung
              </h2>
              <p className="text-luxury-gold/60 font-light tracking-wide">Präzise Ausführung bis ins Detail</p>
            </div>
            
            {project.floorPlans.length > 1 && (
              <div className="flex justify-center mb-12">
                <div className="flex gap-8">
                  {project.floorPlans.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFloorPlan(index)}
                      className={`text-sm font-light tracking-wider transition-all duration-300 ${
                        currentFloorPlan === index
                          ? 'text-luxury-gold border-b border-luxury-gold pb-2'
                          : 'text-luxury-text/60 hover:text-luxury-gold'
                      }`}
                    >
                      Plan {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="max-w-6xl mx-auto">
              <div className="relative bg-luxury-black/50 p-8 rounded-lg border border-luxury-gold/20">
                <div className="relative">
                  <div className="aspect-[4/3] image-placeholder bg-luxury-gray/5 border border-luxury-gold/10"></div>
                  
                  {/* Enhanced Hotspots */}
                  {project.floorPlans[currentFloorPlan].hotspots.map((hotspot, index) => (
                    <div key={index}>
                      <button
                        className="absolute w-8 h-8 bg-luxury-gold/20 backdrop-blur-sm rounded-full border border-luxury-gold/60 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:bg-luxury-gold/30 transition-all duration-300 flex items-center justify-center"
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                        onClick={() => setSelectedHotspot(selectedHotspot?.id === hotspot.id ? null : hotspot)}
                      >
                        <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      </button>
                      
                      {selectedHotspot?.id === hotspot.id && (
                        <div 
                          className="absolute bg-luxury-black/95 backdrop-blur-xl text-luxury-white p-6 rounded-lg shadow-2xl border border-luxury-gold/30 z-20 min-w-80 max-w-96"
                          style={{ 
                            left: `${hotspot.x}%`, 
                            top: `${hotspot.y}%`,
                            transform: 'translate(-50%, -100%)',
                            marginTop: '-16px'
                          }}
                        >
                          <h4 className="font-light text-luxury-gold mb-3 text-lg">{hotspot.title}</h4>
                          <p className="text-luxury-text/90 mb-4 font-light leading-relaxed">{hotspot.description}</p>
                          {hotspot.details && (
                            <div className="border-t border-luxury-gold/20 pt-4">
                              <ul className="text-sm text-luxury-text/70 space-y-2 font-light">
                                {hotspot.details.map((detail, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-luxury-gold mr-2">•</span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Gallery Section - Masonry Style */}
        <section className="py-24 bg-luxury-black">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-thin text-luxury-white mb-4">
                Visuelle Eindrücke
              </h2>
              <p className="text-luxury-gold/60 font-light tracking-wide">Eine Sammlung ausgewählter Perspektiven</p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              {/* Hero Image */}
              <div className="mb-16">
                <div className="aspect-[21/9] image-placeholder bg-luxury-gray/10 border border-luxury-gold/5 animate-fade-in"></div>
              </div>

              {/* Masonry Grid Layout */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {project.photos.slice(1).map((photo, index) => (
                  <div 
                    key={index + 1} 
                    className="break-inside-avoid animate-fade-in"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <div className={`
                      image-placeholder bg-luxury-gray/10 border border-luxury-gold/5 transition-all duration-500 hover:border-luxury-gold/20
                      ${index % 4 === 0 ? 'aspect-[4/5]' : 
                        index % 4 === 1 ? 'aspect-[3/4]' : 
                        index % 4 === 2 ? 'aspect-[5/4]' : 
                        'aspect-[4/3]'}
                    `}>
                      <div className="absolute bottom-4 left-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-luxury-gold/80 text-xs font-light tracking-wide">
                          {photo.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description Text */}
              <div className="mt-20 max-w-4xl mx-auto text-center">
                <div className="space-y-6 text-luxury-text/70 font-light leading-relaxed">
                  {project.description.split('\n\n').slice(0, 2).map((paragraph, index) => (
                    <p key={index} className="text-lg md:text-xl">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
