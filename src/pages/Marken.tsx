import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { brandsData, brandCategories, getBrandsByCategory, getFeaturedBrands } from '../data/brands';

const Marken = () => {

  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-12 text-luxury-white tracking-tight leading-tight">
              Unsere <span className="text-luxury-gold font-serif italic">Markenangebote</span>
              <span className="block">für Ihr Bad</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-text/80 leading-relaxed max-w-5xl mx-auto font-light px-4">
              Seit zwei Jahrzehnten suchen wir auf internationalen Märkten Hersteller, 
              die sich in Design und Materialauswahl deutlich vom alltäglichen Einerlei absetzen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-12 text-center">
            Premium <span className="text-luxury-gold">Partner</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {getFeaturedBrands().map((brand, index) => (
              <Link key={brand.id} to={`/marken/${brand.slug}`} className="group">
                <Card className="bg-luxury-dark/30 border-luxury-gray/20 hover:border-luxury-gold/50 transition-all duration-500 overflow-hidden">
                  <div className="aspect-[4/3] image-placeholder relative group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-16 h-16 bg-luxury-gold/20 rounded-sm flex items-center justify-center mb-4">
                        <div className="text-luxury-gold font-light text-lg">{brand.name.charAt(0)}</div>
                      </div>
                      <div className="text-white/60 text-sm">Logo Placeholder</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-light text-luxury-white group-hover:text-luxury-gold transition-colors">
                        {brand.name}
                      </h3>
                      {brand.featured && <Star className="w-4 h-4 text-luxury-gold" />}
                    </div>
                    <p className="text-sm text-luxury-gold/80 font-light mb-3 tracking-wider uppercase">
                      {brand.category}
                    </p>
                    <p className="text-luxury-text font-light leading-relaxed mb-4 line-clamp-3">
                      {brand.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-luxury-text/60">
                        <MapPin className="w-3 h-3" />
                        {brand.origin}
                      </div>
                      <div className="flex items-center gap-2 text-luxury-gold group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-light">Mehr entdecken</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands by Category */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-16 text-center">
            Unser vollständiges <span className="text-luxury-gold">Portfolio</span>
          </h2>
          
          {brandCategories.map((category, categoryIndex) => {
            const categoryBrands = getBrandsByCategory(category);
            if (categoryBrands.length === 0) return null;
            
            return (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-light text-luxury-white mb-8 pb-4 border-b border-luxury-gold/20">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryBrands.map((brand) => (
                    <Link key={brand.id} to={`/marken/${brand.slug}`} className="group">
                      <Card className="bg-luxury-dark/50 border-luxury-gray/20 hover:border-luxury-gold/30 transition-all duration-300">
                        <div className="aspect-square image-placeholder text-center group-hover:scale-105 transition-transform duration-300">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-luxury-gold/20 rounded-sm flex items-center justify-center mx-auto mb-3">
                              <div className="text-luxury-gold font-light">{brand.name.charAt(0)}</div>
                            </div>
                            <div className="text-sm text-white/40">Produkt Portfolio</div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="text-lg font-light text-luxury-white group-hover:text-luxury-gold transition-colors mb-2">
                            {brand.name}
                          </h4>
                          <p className="text-sm text-luxury-text/70 font-light leading-relaxed line-clamp-2">
                            {brand.shortDescription}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Italienisches Design</h3>
              <p className="text-luxury-text text-sm">Luxuriöses Baddesign aus Italien</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Skandinavischer Minimalismus</h3>
              <p className="text-luxury-text text-sm">Puristische Eleganz aus dem Norden</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
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