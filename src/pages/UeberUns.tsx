import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-luxury-dark relative">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="container mx-auto h-full flex items-center px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-luxury-white mb-8 leading-tight tracking-tight">
                Axel<br/>
                <span className="text-luxury-gold font-extralight">Fröhlich</span>
              </h1>
              
              <div className="border-l-2 border-luxury-gold pl-8 mb-8">
                <p className="text-luxury-gold/80 text-sm tracking-wider mb-2">SPEZIALISIERUNG</p>
                <p className="text-xl text-luxury-white font-light leading-relaxed">
                  Innovative Ideen und Konzepte rund um die Bad- und Wohnarchitektur
                </p>
              </div>
              
              <blockquote className="relative">
                <div className="absolute -left-4 -top-2 text-luxury-gold text-6xl opacity-30">"</div>
                <p className="text-2xl font-light text-luxury-gold italic pl-8">
                  Wir lieben unsere Arbeit: lebendig, erlebbar und abwechslungsreich
                </p>
              </blockquote>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] relative">
                <div className="image-placeholder w-full h-full bg-gradient-to-br from-luxury-gold/20 to-luxury-dark">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-luxury-gold/50 text-sm tracking-widest">AXEL FRÖHLICH PORTRAIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split-Screen Philosophy Gallery */}
      <section className="min-h-screen relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Large Format Project Images */}
          <div className="relative bg-luxury-dark/50 flex items-center justify-center">
            <div className="w-full h-[80vh] relative">
              <div className="image-placeholder w-full h-full bg-gradient-to-br from-luxury-gold/10 to-luxury-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-gold/50 text-sm tracking-widest">PREMIUM BATHROOM PROJECT</span>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Architectural Text Layout */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-light text-luxury-white mb-8 leading-tight">
                  Unsere<br/>
                  <span className="text-luxury-gold">Philosophie</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-luxury-text leading-relaxed">
                <p>
                  <span className="text-luxury-gold">Licht, Farbe, Form und Material</span> – wir lieben die Arbeit mit besonderen Produkten, den eigenen Anspruch an Design, Qualität und Feingefühl, die Balance zu halten und den Mut neue Wege zu gehen.
                </p>
                <p>
                  Wir verfügen über die notwendige Basis aus Fachkompetenz, Erfahrung, Begeisterung und Kreativität um <span className="text-luxury-gold">emotionale Raumkonzepte</span> zu schaffen.
                </p>
                <p>
                  Wenn Sie als Kunde am Ende innehalten und lächeln, haben wir unser Ziel erreicht: <span className="text-luxury-gold text-xl">Freude</span>.
                </p>
              </div>

              <div className="mt-12">
                <Link to="/inspiration">
                  <Button 
                    size="lg" 
                    className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-light px-8 tracking-wider"
                  >
                    REFERENZEN ANSEHEN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Floor Plan */}
      <section className="py-32 px-4 sm:px-8 bg-luxury-dark relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-luxury-white mb-8">
              Service &<br/>
              <span className="text-luxury-gold">Leistungen</span>
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              <div className="group relative border border-luxury-gold/20 p-8 transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold/5">
                <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">AUSSTELLUNG</h3>
                <p className="text-luxury-text text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  Auf zwei Etagen Ausstellung präsentieren wir Musterbäder u. ausgesuchte Materialien. Besuchen Sie unsere Bad und Fliesenausstellung und lassen Sie sich inspirieren.
                </p>
              </div>

              <div className="group relative border border-luxury-gold/20 p-8 transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold/5">
                <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">MARKENPRODUKTE</h3>
                <p className="text-luxury-text text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  Auf internationalen Märkten suchen wir Hersteller, die sich vom alltäglichen Einerlei absetzen – Designlabel mit innovativen und hochwertigen Produkten.
                </p>
              </div>

              <div className="group relative border border-luxury-gold/20 p-8 transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold/5">
                <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">BERATUNG</h3>
                <p className="text-luxury-text text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  Mit unserer langjährigen Erfahrung unterstützen wir Sie in der Auswahl der passenden Objekte und Materialien, geben wertvolle Hinweise und stehen Ihnen bei Fragen zur Seite.
                </p>
              </div>

              <div className="group relative border border-luxury-gold/20 p-8 transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold/5">
                <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">PLANUNG</h3>
                <p className="text-luxury-text text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  Die individuelle Planung von Bädern und Wohnbereichen ist unsere Stärke – wir setzen Ihre Wünsche zielgerichtet um und entwickeln überzeugende Raumkonzepte.
                </p>
              </div>

              <div className="group relative border border-luxury-gold/20 p-8 md:col-span-2 lg:col-span-2 transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold/5">
                <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">ARCHITEKTUR & HANDWERK</h3>
                <p className="text-luxury-text text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  Als Ansprechpartner für Handwerk und Architektur stehen wir als Fachhandel bei der Auswahl, Abwicklung und technischen Umsetzungen als kompetenter Partner unterstützend zur Seite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline as Architectural Elevation */}
      <section className="py-32 px-4 sm:px-8 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-luxury-white mb-8">
              Unternehmen &<br/>
              <span className="text-luxury-gold">Entwicklung</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="border-l-4 border-luxury-gold pl-8 pb-8">
                <div className="bg-luxury-gold/10 p-6 relative">
                  <h3 className="text-2xl font-light text-luxury-white mb-4">1994 - Fundament</h3>
                  <p className="text-luxury-text leading-relaxed mb-4">
                    1994 gründet Axel Fröhlich nach bestandener Meisterprüfung die Firma Axel Fröhlich Sanitär und Heizungsinstallationen.
                  </p>
                  <p className="text-luxury-text leading-relaxed">
                    Mit dem Bau einer eigenen Badausstellung wächst das Unternehmen in den Folgejahren.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="border-l-4 border-luxury-gold pl-8 pb-8">
                <div className="bg-luxury-gold/10 p-6 relative">
                  <h3 className="text-2xl font-light text-luxury-white mb-4">2005 - Erweiterung</h3>
                  <p className="text-luxury-text leading-relaxed mb-4">
                    2005 wird das Geschäftsfeld mit der Gründung einer Fliesenabteilung maßgebend erweitert und die Ausstellung entsprechend ausgebaut.
                  </p>
                  <p className="text-luxury-text leading-relaxed">
                    Im Fokus steht nun der Vertrieb einer breiten Produktpalette exklusiver Designlabel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-luxury-dark/50 p-8 relative border border-luxury-gold/20">
            <h3 className="text-2xl font-light text-luxury-white mb-6">3D-Planung & Präzision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-luxury-text leading-relaxed">
                Ein zentrales Merkmal ist der Fokus auf Planung bis ins kleinste Detail. Dabei kommt modernste 3D-Planungssoftware zum Einsatz, um eine möglichst realitätsnahe Visualisierung der Projekte zu ermöglichen.
              </p>
              <p className="text-luxury-text leading-relaxed">
                Die Kombination aus technischer Präzision, gestalterischem Anspruch und langjähriger Erfahrung macht Axel Fröhlich zu einem der gefragtesten Anbieter für exklusive Badplanungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values as Material Specifications */}
      <section className="py-32 px-4 sm:px-8 bg-luxury-dark/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-luxury-white mb-8">
              Design, Qualität &<br/>
              <span className="text-luxury-gold">Handwerkskunst</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-luxury-dark border border-luxury-gold/20 p-8 relative">
              <div className="w-16 h-16 bg-luxury-gold/10 mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-luxury-gold/50"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">DESIGN & ÄSTHETIK</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Die Balance zwischen Form, Funktion und Material – mit eigenem Anspruch an Design und Feingefühl.
              </p>
            </div>

            <div className="bg-luxury-dark border border-luxury-gold/20 p-8 relative">
              <div className="w-16 h-16 bg-luxury-gold/10 mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-luxury-gold/50"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">QUALITÄT & PRÄZISION</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Fachkompetenz und Erfahrung für emotionale Raumkonzepte – immer unter Berücksichtigung des Machbaren.
              </p>
            </div>

            <div className="bg-luxury-dark border border-luxury-gold/20 p-8 relative">
              <div className="w-16 h-16 bg-luxury-gold/10 mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-luxury-gold/50"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4 tracking-wider">MUT & INNOVATION</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Begeisterung und Kreativität gepaart mit dem Mut, neue Wege zu gehen und Visionen zu verwirklichen.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/kontakt">
              <Button 
                size="lg" 
                className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-light px-8 tracking-wider"
              >
                BERATUNGSTERMIN VEREINBAREN
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberUns;