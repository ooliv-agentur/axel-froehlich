import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { brandsData } from '../data/brands';

const Marken = () => {
  // Sort all brands alphabetically by name
  const allBrandsSorted = [...brandsData].sort((a, b) => a.name.localeCompare(b.name));
  
  // Group brands by first letter
  const brandsByLetter = allBrandsSorted.reduce((acc, brand) => {
    const firstLetter = brand.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);
    return acc;
  }, {} as Record<string, typeof brandsData>);

  const letters = Object.keys(brandsByLetter).sort();

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-12 text-luxury-white tracking-tight leading-tight">
              Unsere <span className="text-luxury-gold font-serif italic">Markenpartner</span>
              <span className="block">A bis Z</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-text/80 leading-relaxed max-w-5xl mx-auto font-light px-4">
              Seit zwei Jahrzehnten suchen wir auf internationalen Märkten Hersteller, 
              die sich in Design und Materialauswahl deutlich vom alltäglichen Einerlei absetzen.
            </p>
          </div>
        </div>
      </section>

      {/* All Brands A-Z */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          {letters.map((letter) => (
            <div key={letter} className="mb-20 last:mb-0">
              {/* Letter Divider */}
              <div className="flex items-center mb-12">
                <div className="text-6xl sm:text-8xl font-thin text-luxury-gold/30 mr-8">
                  {letter}
                </div>
                <div className="flex-1 h-px bg-luxury-gold/20"></div>
              </div>
              
              {/* Brands for this letter */}
              <div className="space-y-12">
                {brandsByLetter[letter].map((brand, index) => (
                  <Link key={brand.id} to={`/marken/${brand.slug}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 border-b border-luxury-gray/10 last:border-b-0 hover:border-luxury-gold/30 transition-all duration-500">
                      {/* Brand Image */}
                      <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} aspect-[21/9] image-placeholder relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/15"></div>
                      </div>
                      
                      {/* Brand Info */}
                      <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                        <div>
                          {/* Brand Logo Placeholder */}
                          <div className="w-32 h-12 bg-luxury-gold/10 rounded-sm mb-4"></div>
                          
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-luxury-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                            {brand.name}
                          </h2>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm text-luxury-gold/80 font-light tracking-wider uppercase">
                              {brand.category}
                            </span>
                            <div className="w-1 h-1 bg-luxury-gold/40 rounded-full"></div>
                            <div className="flex items-center gap-2 text-sm text-luxury-text/60">
                              <MapPin className="w-3 h-3" />
                              {brand.origin}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg sm:text-xl text-luxury-text font-light leading-relaxed">
                          {brand.shortDescription}
                        </p>
                        
                        <div className="flex items-center gap-3 text-luxury-gold group-hover:translate-x-2 transition-transform duration-300">
                          <span className="font-light tracking-wider">Mehr entdecken</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Positioning */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
            Exklusivität durch
            <span className="text-luxury-gold"> Partnerschaft</span>
          </h2>
          <p className="text-lg text-luxury-text mb-12 leading-relaxed max-w-4xl mx-auto">
            Unser Produktportfolio bietet eine einzigartige, komplette Auswahl namhafter, internationaler Bad- und Fliesen Designlabels. 
            Wir haben eine Leidenschaft für hochwertige Materialien und für die Entwicklung von individuellen Konzepten rund um die Bad- und Wohnarchitektur.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Italienisches Design</h3>
              <p className="text-luxury-text text-sm">Luxuriöses Baddesign aus Italien</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Skandinavischer Minimalismus</h3>
              <p className="text-luxury-text text-sm">Puristische Eleganz aus dem Norden</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Wellness-Oasen</h3>
              <p className="text-luxury-text text-sm">Erfüllung Ihres Traums der eigenen Wellness-Oase</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 font-light px-8"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beratungstermin vereinbaren
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marken;
