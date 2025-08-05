import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projectsData } from '@/data/projects';

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const [currentFloorPlan, setCurrentFloorPlan] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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
    { label: "Kategorie", value: project.category },
    { label: "Stil", value: "Luxus Architektur" },
    { label: "Material", value: "Naturstein" },
    { label: "Besonderheit", value: "Sauna & Ofen" }
  ];

  const openLightbox = (index: number) => {
    setCurrentPhoto(index);
    setIsLightboxOpen(true);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % project.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + project.photos.length) % project.photos.length);
  };

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main className="relative">
        {/* Minimal Navigation */}
        <div className="absolute top-6 left-6 z-40">
          <Link to="/inspiration" className="inline-flex items-center text-luxury-gold/80 hover:text-luxury-gold transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-light tracking-wide">Zurück</span>
          </Link>
        </div>

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

        {/* Specifications Grid */}
        <section className="py-20 bg-luxury-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

        {/* Gallery Section - Magazine Style */}
        <section className="py-24 bg-luxury-black">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-thin text-luxury-white mb-4">
                Visuelle Eindrücke
              </h2>
              <p className="text-luxury-gold/60 font-light tracking-wide">Eine Sammlung ausgewählter Perspektiven</p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              {/* Large Featured Images */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {project.photos.slice(0, 2).map((photo, index) => (
                  <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
                    <div className="aspect-[4/3] image-placeholder bg-luxury-gray/10 group-hover:bg-luxury-gray/20 transition-all duration-500 relative overflow-hidden border border-luxury-gold/10">
                      <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-all duration-500 flex items-center justify-center">
                        <div className="text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Grid of Smaller Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.photos.slice(2).map((photo, index) => (
                  <div key={index + 2} className="group cursor-pointer" onClick={() => openLightbox(index + 2)}>
                    <div className="aspect-square image-placeholder bg-luxury-gray/10 group-hover:bg-luxury-gray/20 transition-all duration-300 relative overflow-hidden border border-luxury-gold/5">
                      <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="text-luxury-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-luxury-black/98 z-50 flex items-center justify-center backdrop-blur-sm">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-8 right-8 text-luxury-white/80 hover:text-luxury-gold transition-colors z-10 p-2"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevPhoto}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 text-luxury-white/80 hover:text-luxury-gold transition-colors z-10 p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-luxury-white/80 hover:text-luxury-gold transition-colors z-10 p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="max-w-6xl max-h-[85vh] mx-8">
              <div className="aspect-video image-placeholder bg-luxury-gray/10 border border-luxury-gold/20"></div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-luxury-white/90 mb-2 font-light">
                {project.photos[currentPhoto]?.title || `Ansicht ${currentPhoto + 1}`}
              </p>
              <p className="text-luxury-text/60 text-sm font-light tracking-wide">
                {currentPhoto + 1} von {project.photos.length}
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;