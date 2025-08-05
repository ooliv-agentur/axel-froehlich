import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-luxury-white mb-6 leading-tight">
                Über uns &
                <span className="text-luxury-gold block">Unsere Vision</span>
              </h1>
              <p className="text-lg sm:text-xl text-luxury-text mb-8 leading-relaxed">
                Seit über 30 Jahren verwirklichen wir Badträume in Mainz und Umgebung. Mit Leidenschaft für Design und Perfektion im Detail.
              </p>
            </div>
            <div className="image-placeholder h-80 lg:h-96 rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-luxury-gold/50 text-sm">Axel Fröhlich Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              30 Jahre 
              <span className="text-luxury-gold"> Erfahrung</span>
            </h2>
            <p className="text-lg text-luxury-text leading-relaxed">
              Was 1993 als kleiner Handwerksbetrieb begann, ist heute ein führendes Unternehmen für exklusive Badgestaltung. Axel Fröhlich und sein Team stehen für Qualität, Innovation und persönliche Betreuung auf höchstem Niveau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-luxury-white mb-6">Unsere Geschichte</h3>
              <p className="text-luxury-text leading-relaxed mb-6">
                Gegründet von Axel Fröhlich, einem Meister seines Fachs, hat sich unser Unternehmen kontinuierlich weiterentwickelt. Von traditioneller Handwerkskunst bis hin zu modernster 3D-Planungstechnologie – wir verbinden Bewährtes mit Innovation.
              </p>
              <p className="text-luxury-text leading-relaxed">
                Heute sind wir stolz darauf, zu den führenden Adressen für exklusive Badgestaltung in Mainz und der Region zu gehören.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-luxury-white mb-6">Unsere Philosophie</h3>
              <p className="text-luxury-text leading-relaxed mb-6">
                Jedes Bad ist so individuell wie sein Besitzer. Wir glauben daran, dass Räume Emotionen wecken und Wohlbefinden schaffen können. Deshalb planen wir nicht nur Bäder – wir gestalten Erlebnisräume.
              </p>
              <p className="text-luxury-text leading-relaxed">
                Mit Liebe zum Detail und einem Gespür für zeitlose Eleganz schaffen wir Räume, die begeistern und dauerhaft Freude bereiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              Unser
              <span className="text-luxury-gold"> Team</span>
            </h2>
            <p className="text-lg text-luxury-text max-w-2xl mx-auto">
              Ein eingespieltes Team aus Planern, Handwerkern und Beratern arbeitet Hand in Hand, um Ihre Vision Realität werden zu lassen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="image-placeholder h-64 rounded-sm mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-gold/50 text-sm">Axel Fröhlich</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Axel Fröhlich</h3>
              <p className="text-luxury-gold text-sm mb-3">Geschäftsführer & Badplaner</p>
              <p className="text-luxury-text text-sm leading-relaxed">
                Meister seines Fachs mit über 30 Jahren Erfahrung in der Badgestaltung. Leidenschaft für perfekte Details.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="image-placeholder h-64 rounded-sm mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-gold/50 text-sm">Team Mitarbeiter</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Planungsteam</h3>
              <p className="text-luxury-gold text-sm mb-3">3D-Planung & Design</p>
              <p className="text-luxury-text text-sm leading-relaxed">
                Unsere Planer verwandeln Ihre Wünsche mit modernster 3D-Technologie in realistische Visualisierungen.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="image-placeholder h-64 rounded-sm mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-gold/50 text-sm">Handwerker Team</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-2">Handwerkerteam</h3>
              <p className="text-luxury-gold text-sm mb-3">Montage & Installation</p>
              <p className="text-luxury-text text-sm leading-relaxed">
                Erfahrene Fachkräfte setzen die Planung mit höchster Präzision und Qualität um.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              Unsere
              <span className="text-luxury-gold"> Werte</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Qualität</h3>
              <p className="text-luxury-text leading-relaxed">
                Wir arbeiten ausschließlich mit Premium-Materialien und bewährten Techniken für langlebige Ergebnisse.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Vertrauen</h3>
              <p className="text-luxury-text leading-relaxed">
                30 Jahre Erfahrung und hunderte zufriedene Kunden sprechen für unsere Zuverlässigkeit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Innovation</h3>
              <p className="text-luxury-text leading-relaxed">
                Modernste 3D-Planungstechnik und aktuelle Designtrends für zukunftsorientierte Lösungen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Persönlichkeit</h3>
              <p className="text-luxury-text leading-relaxed">
                Jedes Projekt wird individuell betreut – von der ersten Idee bis zur finalen Umsetzung.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-light px-8"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lernen Sie uns kennen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberUns;