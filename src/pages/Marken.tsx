import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';

const Marken = () => {
  const brandCategories = [
    {
      title: "Armaturen",
      description: "Hochwertige Wasserhähne und Duschsysteme",
      brands: ["Hansgrohe", "Grohe", "Dornbracht", "Keuco"]
    },
    {
      title: "Sanitär",
      description: "Waschtische, WCs und Bidets in Premium-Qualität",
      brands: ["Villeroy & Boch", "Duravit", "Geberit", "Laufen"]
    },
    {
      title: "Fliesen",
      description: "Exklusive Fliesen und Natursteine",
      brands: ["Villeroy & Boch", "Agrob Buchtal", "Marazzi", "Caesar"]
    },
    {
      title: "Accessoires",
      description: "Hochwertige Badaccessoires und Ausstattung",
      brands: ["Keuco", "Emco", "Hansgrohe", "Grohe"]
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-luxury-white mb-6 leading-tight">
              Marken & 
              <span className="text-luxury-gold block">Baddesign</span>
            </h1>
            <p className="text-lg sm:text-xl text-luxury-text mb-8 leading-relaxed">
              Wir arbeiten ausschließlich mit Premium-Marken zusammen, die höchste Qualität und zeitloses Design garantieren.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {brandCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-luxury-dark/50 border border-luxury-gray/20 p-8 rounded-sm hover:border-luxury-gold/20 transition-colors duration-300">
                  <h3 className="text-2xl font-light text-luxury-white mb-4">{category.title}</h3>
                  <p className="text-luxury-text mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.brands.map((brand, brandIndex) => (
                      <div key={brandIndex} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-luxury-gray/10 rounded-sm flex items-center justify-center">
                          <div className="w-8 h-2 bg-luxury-gold/20 rounded-sm"></div>
                        </div>
                        <span className="text-luxury-white font-light">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Positioning */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
            Exklusivität durch
            <span className="text-luxury-gold"> Partnerschaft</span>
          </h2>
          <p className="text-lg text-luxury-text mb-12 leading-relaxed">
            Als zertifizierter Partner führender Badmarken bieten wir Ihnen Zugang zu exklusiven Kollektionen und innovativen Produkten, die höchste Ansprüche erfüllen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Zertifizierte Qualität</h3>
              <p className="text-luxury-text text-sm">Alle Produkte entsprechen höchsten Standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Exklusive Auswahl</h3>
              <p className="text-luxury-text text-sm">Zugang zu limitierten Kollektionen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Langlebigkeit</h3>
              <p className="text-luxury-text text-sm">Investition in zeitlose Eleganz</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-light px-8"
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