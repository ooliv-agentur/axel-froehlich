import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoplay?: boolean;
  showControls?: boolean;
  overlay?: boolean;
  children?: React.ReactNode;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoplay = true,
  showControls = true,
  overlay = true,
  children
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplay ? [Autoplay({ delay: 5000, stopOnInteraction: false })] : []
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative min-h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat image-placeholder bg-luxury-gray/20"
                style={{ backgroundImage: slide.image ? `url(${slide.image})` : undefined }}
              />
              {overlay && (
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/30 via-luxury-black/20 to-luxury-black/60" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        {children}
      </div>

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-luxury-black/20 hover:bg-luxury-black/40 text-luxury-white border-luxury-white/20"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-luxury-black/20 hover:bg-luxury-black/40 text-luxury-white border-luxury-white/20"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-luxury-white/40 hover:bg-luxury-white/60 transition-colors"
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};