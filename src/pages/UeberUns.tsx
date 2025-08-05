import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

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
                Axel Fröhlich –
                <span className="text-luxury-gold block">Team und Service</span>
              </h1>
              <p className="text-lg sm:text-xl text-luxury-text mb-6 leading-relaxed">
                Innovative Ideen und Konzepte rund um die Bad- und Wohnarchitektur
              </p>
              <blockquote className="text-xl font-light text-luxury-gold italic border-l-2 border-luxury-gold pl-6 mb-8">
                „Wir lieben unsere Arbeit: lebendig, erlebbar und abwechslungsreich"
              </blockquote>
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

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              Unsere
              <span className="text-luxury-gold"> Philosophie</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-luxury-text leading-relaxed mb-8">
              Licht, Farbe, Form und Material – wir lieben die Arbeit mit besonderen Produkten, den eigenen Anspruch an Design, Qualität und Feingefühl, die Balance zu halten und den Mut neue Wege zu gehen.
            </p>
            <p className="text-lg text-luxury-text leading-relaxed mb-8">
              Wir verfügen über die notwendige Basis aus Fachkompetenz, Erfahrung, Begeisterung und Kreativität um emotionale Raumkonzepte zu schaffen. Immer unter Berücksichtigung des Machbaren ist unser persönlicher Arbeitsstil geprägt von der Verwendung ästhetischer Materialien, die funktional und stilvoll in unsere Planung und Gestaltung einfließen.
            </p>
            <p className="text-lg text-luxury-text leading-relaxed">
              Wir wollen Emotionen wecken, Visionen und Träume verwirklichen, abwechslungsreiche Räume mit Atmosphäre schaffen und mit Liebe zum Detail Ihre ganz persönliche Lebensqualität erhöhen. Wenn Sie als Kunde am Ende innehalten und lächeln, haben wir unser Ziel erreicht: <span className="text-luxury-gold">Freude</span>.
            </p>
          </div>

          <div className="text-center">
            <Link to="/inspiration">
              <Button 
                size="lg" 
                className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-light px-8"
              >
                Zu den Referenzen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              Service &
              <span className="text-luxury-gold"> Leistungen</span>
            </h2>
            <p className="text-lg text-luxury-text max-w-2xl mx-auto">
              Von der ersten Beratung bis zur finalen Umsetzung – wir begleiten Sie auf dem gesamten Weg zu Ihrem Traumbad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-luxury-dark/80 p-6 rounded-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <h3 className="text-xl font-light text-luxury-white mb-4">AUSSTELLUNG</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Auf zwei Etagen Ausstellung präsentieren wir Musterbäder u. ausgesuchte Materialien. Besuchen Sie unsere Bad und Fliesenausstellung und lassen Sie sich inspirieren.
              </p>
            </div>

            <div className="bg-luxury-dark/80 p-6 rounded-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <h3 className="text-xl font-light text-luxury-white mb-4">MARKENPRODUKTE & QUALITÄT</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Auf internationalen Märkten suchen wir Hersteller, die sich vom alltäglichen Einerlei absetzten – Designlabel mit innovativen und hochwertigen Produkten.
              </p>
            </div>

            <div className="bg-luxury-dark/80 p-6 rounded-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <h3 className="text-xl font-light text-luxury-white mb-4">BERATUNG</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Mit unserer langjährigen Erfahrung unterstützen wir Sie in der Auswahl der passenden Objekte und Materialien, geben wertvolle Hinweise und stehen Ihnen bei Fragen zur Seite.
              </p>
            </div>

            <div className="bg-luxury-dark/80 p-6 rounded-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors">
              <h3 className="text-xl font-light text-luxury-white mb-4">PLANUNG</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Die individuelle Planung von Bädern und Wohnbereichen ist unsere Stärke – wir setzten Ihre Wünsche zielgerichtet um und entwickeln überzeugende Raumkonzepte, angepasst an Ihr Budget.
              </p>
            </div>

            <div className="bg-luxury-dark/80 p-6 rounded-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-light text-luxury-white mb-4">ARCHITEKTUR & HANDWERK</h3>
              <p className="text-luxury-text text-sm leading-relaxed">
                Als Ansprechpartner für Handwerk und Architektur stehen wir als Fachhandel bei der Auswahl, Abwicklung und technischen Umsetzungen als kompetenter Partner unterstützend zur Seite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              Unternehmen &
              <span className="text-luxury-gold"> Philosophie</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-luxury-white mb-6">Unsere Geschichte</h3>
              <p className="text-luxury-text leading-relaxed mb-6">
                1994 gründet Axel Fröhlich nach bestandener Meisterprüfung die Firma Axel Fröhlich Sanitär und Heizungsinstallationen. Mit dem Bau einer eigenen Badausstellung wächst das Unternehmen in den Folgejahren.
              </p>
              <p className="text-luxury-text leading-relaxed mb-6">
                2005 wird das Geschäftsfeld mit der Gründung einer Fliesenabteilung maßgebend erweitert und die Ausstellung entsprechend ausgebaut. Im Fokus steht nun der Vertrieb einer breiten Produktpalette exklusiver Designlabel.
              </p>
              <p className="text-luxury-text leading-relaxed">
                Heute umfasst unser Angebot eine einzigartige Auswahl hochwertiger Badobjekte und feinster Materialien – alles aus einer Hand.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-luxury-white mb-6">3D-Planung & Präzision</h3>
              <p className="text-luxury-text leading-relaxed mb-6">
                Ein zentrales Merkmal ist der Fokus auf Planung bis ins kleinste Detail. Dabei kommt modernste 3D-Planungssoftware zum Einsatz, um eine möglichst realitätsnahe Visualisierung der Projekte zu ermöglichen.
              </p>
              <p className="text-luxury-text leading-relaxed">
                Ziel ist es, bereits vor der Umsetzung sämtliche Details und Materialien perfekt aufeinander abzustimmen – ohne physische Änderungen vornehmen zu müssen. Die Kombination aus technischer Präzision, gestalterischem Anspruch und langjähriger Erfahrung macht Axel Fröhlich zu einem der gefragtesten Anbieter für exklusive Badplanungen im deutschsprachigen Raum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-8 bg-luxury-dark/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-luxury-white mb-8">
              Design, Qualität &
              <span className="text-luxury-gold"> Handwerkskunst</span>
            </h2>
            <p className="text-lg text-luxury-text max-w-2xl mx-auto">
              Unser persönlicher Arbeitsstil ist geprägt von der Verwendung ästhetischer Materialien, die funktional und stilvoll in unsere Planung und Gestaltung einfließen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Design & Ästhetik</h3>
              <p className="text-luxury-text leading-relaxed">
                Die Balance zwischen Form, Funktion und Material – mit eigenem Anspruch an Design und Feingefühl.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Qualität & Präzision</h3>
              <p className="text-luxury-text leading-relaxed">
                Fachkompetenz und Erfahrung für emotionale Raumkonzepte – immer unter Berücksichtigung des Machbaren.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold/30 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-light text-luxury-white mb-4">Mut & Innovation</h3>
              <p className="text-luxury-text leading-relaxed">
                Begeisterung und Kreativität gepaart mit dem Mut, neue Wege zu gehen und Visionen zu verwirklichen.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/kontakt">
              <Button 
                size="lg" 
                className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-light px-8"
              >
                Beratungstermin vereinbaren
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