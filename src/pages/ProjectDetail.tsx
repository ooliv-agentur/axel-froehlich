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
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black/80 z-10"></div>
          <div className="absolute inset-0 image-placeholder bg-luxury-gray/20"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-8">
            <div className="mb-8">
              <Link to="/inspiration" className="inline-flex items-center text-luxury-gold hover:text-luxury-gold/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Inspiration
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-luxury-white mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-luxury-gold mb-4">{project.subtitle}</p>
            <span className="inline-block px-4 py-2 bg-luxury-gold/20 text-luxury-gold text-sm rounded">
              {project.category}
            </span>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                {project.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-luxury-text leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans with Hotspots */}
        <section className="py-16 bg-luxury-black/50">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-12 text-center">
              Grundrisse & Details
            </h2>
            
            {project.floorPlans.length > 1 && (
              <div className="flex justify-center mb-8">
                <div className="flex gap-4">
                  {project.floorPlans.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFloorPlan(index)}
                      className={`px-4 py-2 text-sm transition-colors ${
                        currentFloorPlan === index
                          ? 'text-luxury-gold border-b border-luxury-gold'
                          : 'text-luxury-text hover:text-luxury-gold'
                      }`}
                    >
                      Grundriss {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative max-w-4xl mx-auto">
              <div className="relative inline-block w-full">
                <img 
                  src={project.floorPlans[currentFloorPlan].image} 
                  alt={`Grundriss ${currentFloorPlan + 1}`}
                  className="w-full h-auto"
                />
                
                {/* Hotspots */}
                {project.floorPlans[currentFloorPlan].hotspots.map((hotspot, index) => (
                  <div key={index}>
                    <button
                      className="absolute w-6 h-6 bg-luxury-gold rounded-full border-2 border-luxury-white transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform animate-pulse"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      onClick={() => setSelectedHotspot(selectedHotspot?.id === hotspot.id ? null : hotspot)}
                    >
                      <span className="sr-only">{hotspot.title}</span>
                    </button>
                    
                    {selectedHotspot?.id === hotspot.id && (
                      <div 
                        className="absolute bg-luxury-black/95 text-luxury-white p-4 rounded-lg shadow-lg border border-luxury-gold/30 z-10 min-w-64 max-w-80"
                        style={{ 
                          left: `${hotspot.x}%`, 
                          top: `${hotspot.y}%`,
                          transform: 'translate(-50%, -100%)',
                          marginTop: '-10px'
                        }}
                      >
                        <h4 className="font-medium text-luxury-gold mb-2">{hotspot.title}</h4>
                        <p className="text-sm text-luxury-text mb-2">{hotspot.description}</p>
                        {hotspot.details && (
                          <ul className="text-xs text-luxury-text/80 space-y-1">
                            {hotspot.details.map((detail, i) => (
                              <li key={i}>• {detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-luxury-black">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-12 text-center">
              Bildergalerie
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.photos.map((photo, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
                  <div className="aspect-square image-placeholder bg-luxury-gray/20 group-hover:bg-luxury-gray/30 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-luxury-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-luxury-black/95 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-luxury-white hover:text-luxury-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-white hover:text-luxury-gold transition-colors z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-luxury-white hover:text-luxury-gold transition-colors z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
            
            <div className="max-w-6xl max-h-[90vh] mx-4">
              <div className="aspect-video image-placeholder bg-luxury-gray/20"></div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-luxury-white text-center">
              <p className="mb-2">{project.photos[currentPhoto]?.title || `Bild ${currentPhoto + 1}`}</p>
              <p className="text-sm text-luxury-text">
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