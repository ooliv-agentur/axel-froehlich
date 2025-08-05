import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, MapPin, Calendar, Star } from 'lucide-react';
import { getBrandBySlug } from '../data/brands';

const BrandDetail = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const brand = getBrandBySlug(brandSlug || '');

  if (!brand) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-luxury-white mb-4">Marke nicht gefunden</h1>
          <Link to="/marken">
            <Button variant="outline" className="text-luxury-gold border-luxury-gold hover:bg-luxury-gold hover:text-luxury-black">
              Zurück zu den Marken
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <Link 
            to="/marken"
            className="inline-flex items-center gap-2 text-luxury-text hover:text-luxury-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zu den Marken
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            {/* Brand Info */}
            <div>
              <div className="mb-6">
                <span className="text-luxury-gold text-sm font-light tracking-wider uppercase mb-4 block">
                  {brand.category}
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-thin text-luxury-white mb-8 leading-tight">
                  {brand.name}
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-luxury-text font-light leading-relaxed mb-12">
                {brand.fullDescription}
              </p>

              {/* Brand Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <span className="text-luxury-text font-light">{brand.origin}</span>
                </div>
                {brand.established && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-luxury-gold" />
                    <span className="text-luxury-text font-light">Seit {brand.established}</span>
                  </div>
                )}
                {brand.featured && (
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-luxury-gold" />
                    <span className="text-luxury-text font-light">Premium Partner</span>
                  </div>
                )}
              </div>

              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-light px-8"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Beratung vereinbaren
              </Button>
            </div>

            {/* Brand Image */}
            <div className="lg:order-first">
              <div className="aspect-[4/5] image-placeholder rounded-sm">
                <div className="text-center">
                  <div className="text-2xl font-light mb-2">{brand.name}</div>
                  <div className="text-sm text-white/40">Marken-Portfolio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 sm:px-8 bg-luxury-dark/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-12 text-center">
            Unsere <span className="text-luxury-gold">Spezialgebiete</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.specialties.map((specialty, index) => (
              <Card key={index} className="bg-luxury-dark/50 border-luxury-gray/20 hover:border-luxury-gold/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-luxury-gold/30 rounded-sm"></div>
                  </div>
                  <h3 className="text-lg font-light text-luxury-white">{specialty}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-16 text-center">
            Produkt <span className="text-luxury-gold">Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="group">
                <div className="aspect-square image-placeholder rounded-sm mb-4 group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-lg font-light mb-1">Produkt {index + 1}</div>
                    <div className="text-sm text-white/40">{brand.name}</div>
                  </div>
                </div>
                <h3 className="text-xl font-light text-luxury-white group-hover:text-luxury-gold transition-colors">
                  {brand.category} Serie {index + 1}
                </h3>
                <p className="text-luxury-text font-light mt-2">
                  Exklusive {brand.category.toLowerCase()} aus der aktuellen Kollektion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
            Interessiert an <span className="text-luxury-gold">{brand.name}</span>?
          </h2>
          <p className="text-lg text-luxury-text mb-12 leading-relaxed max-w-2xl mx-auto">
            Lassen Sie sich von unseren Experten beraten und entdecken Sie die vollständige Produktpalette von {brand.name} in unserem Showroom in Mainz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 font-light px-8"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Beratungstermin vereinbaren
            </Button>
            <Link to="/ausstellung">
              <Button 
                size="lg" 
                variant="outline"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black font-light px-8"
              >
                Showroom besuchen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandDetail;