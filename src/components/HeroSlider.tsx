
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

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

      {/* Vertical Dots Navigation */}
      {slides.length > 1 && (
        <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-luxury-gold shadow-lg shadow-luxury-gold/30'
                  : 'bg-luxury-white/40 hover:bg-luxury-white/60'
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};
