export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  details?: string[];
}

export interface FloorPlan {
  image: string;
  title: string;
  hotspots: Hotspot[];
}

export interface Photo {
  image: string;
  title: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  floorPlans: FloorPlan[];
  photos: Photo[];
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'masterbad-mit-ofen-und-sauna',
    title: 'Masterbad mit Ofen und Sauna',
    subtitle: 'Natursteinwaschtisch Fröhlich-Bad.de',
    category: 'Luxus',
    description: `Tauchen Sie ein in die traumhafte Welt dieser jungen Familie, die sich ihren Lebensmittelpunkt direkt an den idyllischen Weinbergen in der Nähe von Bad Kreuznach geschaffen hat.

Ein besonderes Highlight ist das Masterbad, das bewusst verwinkelt angelegt wurde, um ein Gefühl von Gemütlichkeit und Geborgenheit zu vermitteln. Diese Wellnessoase ist der ideale Ort für eine Auszeit vom hektischen Alltag.

In diesem verwinkelten, dennoch großzügigen Masterbad wurden Farben und Formen präzise aufeinander abgestimmt. Direkt am Eingang des Raumes erwartet Sie ein maßgefertigtes Waschbecken aus einem italienischen Naturstein Grigio di Tunisi welcher auf dem eleganten Unterschrank die farblich perfekt auf den Stein abgestimmt wurden und jede Menge an Stauraum bietet.

Die freistehende Badewanne ist vor der Fensterfront positioniert, dass die einen atemberaubenden Blick auf die umliegenden Weinberge ermöglicht. Die Wanne und Dusche werden elegant von einem Glas getrennt und erlaubt dadurch einen freien Blick ins Grüne. Durch das getönte Rauchglas wird dennoch ein Gefühl von Intimität und Schutz geschaffen. Die Armaturen von Fantini wurden farblich auf das Raumkonzept angepasst und greifen das moderne und dennoch zeitlose Design perfekt auf.

Das WC hingegen ist geschickt im hinteren Bereich des Raumes platziert – gut versteckt und dennoch leicht zugänglich.

Von der Sauna aus wird nicht nur der Blick ins Grüne gehalten sondern auch auf den eingebauten Petrolofen gegenüber der Sauna. Diese raffinierte Anordnung unterstreicht die Gemütlichkeit des Raumes auf besondere Weise.

In diesem einzigartigen Masterbad wird Ästhetik und Individualität auf die Spitze getrieben. Willkommen in einer Oase der Ruhe und des Wohlbefindens.`,
    floorPlans: [
      {
        image: '',
        title: 'Hauptgrundriss',
        hotspots: [
          {
            id: 'waschtisch',
            x: 15,
            y: 30,
            title: 'Maßgefertigter Natursteinwaschtisch',
            description: 'Italienischer Naturstein Grigio di Tunisi mit perfekt abgestimmtem Unterschrank',
            details: [
              'Material: Grigio di Tunisi Naturstein',
              'Maßanfertigung nach Raumgegebenheiten',
              'Eleganter Unterschrank mit viel Stauraum',
              'Farblich abgestimmte Oberflächen'
            ]
          },
          {
            id: 'badewanne',
            x: 75,
            y: 20,
            title: 'Freistehende Badewanne',
            description: 'Positioniert vor der Fensterfront mit Weinberg-Blick',
            details: [
              'Atemberaubender Blick auf Weinberge',
              'Freistehende Designwanne',
              'Optimale Positionierung zur Fensterfront',
              'Premium Badeerlebnis'
            ]
          },
          {
            id: 'glastrennwand',
            x: 60,
            y: 45,
            title: 'Elegante Glastrennwand',
            description: 'Getöntes Rauchglas zwischen Wanne und Dusche',
            details: [
              'Getöntes Rauchglas für Intimität',
              'Freier Blick ins Grüne',
              'Elegante Raumtrennung',
              'Schutz und Offenheit zugleich'
            ]
          },
          {
            id: 'armaturen',
            x: 70,
            y: 25,
            title: 'Fantini Armaturen',
            description: 'Farblich auf das Raumkonzept abgestimmte Armaturen',
            details: [
              'Marke: Fantini',
              'Farblich angepasst an Raumkonzept',
              'Modern und zeitlos',
              'Höchste Qualität und Design'
            ]
          },
          {
            id: 'sauna',
            x: 25,
            y: 75,
            title: 'Private Sauna',
            description: 'Mit Blick auf den Petrolofen und ins Grüne',
            details: [
              'Private Wellness-Sauna',
              'Blick auf Petrolofen gegenüber',
              'Blick ins Grüne',
              'Gemütliche Atmosphäre'
            ]
          },
          {
            id: 'petrolofen',
            x: 50,
            y: 85,
            title: 'Petrolofen',
            description: 'Eingebauter Ofen gegenüber der Sauna',
            details: [
              'Eingebauter Petrolofen',
              'Gegenüber der Sauna positioniert',
              'Verstärkt die Gemütlichkeit',
              'Warme, entspannende Atmosphäre'
            ]
          }
        ]
      }
    ],
    photos: Array.from({ length: 15 }, (_, i) => ({
      image: '',
      title: `Masterbad Detail ${i + 1}`,
      alt: `Detailaufnahme des Masterbads ${i + 1}`
    })),
    featured: true
  },
  {
    id: '2',
    slug: 'dunkles-gaeste-wc',
    title: 'Dunkles Gäste-WC',
    subtitle: 'Mut und Raffinesse vereint',
    category: 'Luxus',
    description: `Dieses einzigartig gestaltete Gäste WC überzeugt nicht nur mit Funktionalität, sondern vereint auch Mut und Raffinesse. Das WC wurde mit Bedacht konzipiert und bietet Zugang von zwei Seiten. Das Gästezimmer kann bequem vom Familienwohnzimmer aus erreicht werden, während das eigene Büro die Möglichkeit hat, dieses stilvolle WC auch für geschäftliche Gäste zu nutzen.

Ein zentrales Element dieses Raumes ist das von Antonio Lupi eingebaute und verputzte Waschbecken, das geschickt in die Wand integriert wurde. Um die Wirkung der weißen Innenfläche zu verstärken, wurden die übrigen Wände mit einer tiefen, dunklen Wandfarbe versehen. Diese Dunkelheit wird durch eine raffinierte Tapete an der Rückseite aufgegriffen und verstärkt. Durch das gewählte Motiv und die Papierartige Struktur der Tapete wird trotzdem eine gemütliche Atmosphäre geschaffen.

Die Gemütlichkeit wird weiter betont durch die geschickte Nutzung von indirekten Lichtquellen in dem kleinen Raum. Diese schaffen eine warme und einladende Atmosphäre, die das minimalistische Design aufwertet.

Die exklusiven Armaturen und passenden Accessoires von Fantini fügen sich nahtlos in das Gesamtbild ein. Durch ihre exklusive Beschichtung erhalten sie eine besondere Wirkung, die das Design und die Funktionalität harmonisch vereint. Insgesamt entsteht so ein Raum, der nicht nur ästhetisch ansprechend ist, sondern auch höchsten Komfort und vielseitige Nutzungsmöglichkeiten bietet.`,
    floorPlans: [
      {
        image: '',
        title: 'Penthouse Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 12 }, (_, i) => ({
      image: '',
      title: `Dunkles Gäste-WC Detail ${i + 1}`,
      alt: `Dunkles Gäste-WC Detail ${i + 1}`
    })),
    featured: true
  },
  {
    id: '3',
    slug: 'warmes-minimalbad-kupferakzente',
    title: 'Warmes Minimalbad mit Kupferakzenten',
    subtitle: 'Ruhe, Wärme und moderne Zurückhaltung',
    category: 'Luxus',
    description: `In einem privaten Wohnprojekt bei Frankfurt am Main entstand ein elegantes Badezimmer, das Ruhe, Wärme und moderne Zurückhaltung vereint. Die Gestaltung folgt einem minimalistischen Designkonzept, das durch gezielte Materialwahl und harmonische Lichtführung überzeugt.

Der dunkle Mosaikstein in der Dusche steht in kontrastreichem Dialog mit den hellen Wand- und Bodenfliesen in Natursteinoptik. Dabei entsteht eine spannungsreiche, aber ausgewogene Atmosphäre, die durch warme Kupferakzente bei Armaturen, Haken und Accessoires unterstrichen wird.

Ein maßgefertigter Waschtisch mit durchgehender Mineralgussfläche sorgt für klare Linien und maximale Funktionalität. Der große runde Spiegel greift die organische Formensprache auf, während zwei filigrane Pendelleuchten eine weiche Lichtstimmung erzeugen – ideal für entspannte Morgen- und Abendroutinen.

Das Designkonzept setzt auf maximale Raumwirkung bei minimaler Gestaltung – ein durch und durch modernes Bad, das durch seine stille Eleganz begeistert.`,
    floorPlans: [
      {
        image: '',
        title: 'Villa Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 10 }, (_, i) => ({
      image: '',
      title: `Minimalbad Detail ${i + 1}`,
      alt: `Warmes Minimalbad Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '4',
    slug: 'spa-bad-stein-bronze',
    title: 'Spa-Bad in Stein & Bronze',
    subtitle: 'Eleganz in Schichten',
    category: 'Luxus',
    description: `Dieses außergewöhnliche Badezimmerprojekt vereint die Wirkung eines Private Spas mit der architektonischen Präzision einer Galeriewohnung. Das Zentrum bildet eine freistehende Badewanne vor einer eindrucksvoll strukturierten Natursteinwand, die wie ein Kunstwerk inszeniert ist.

In der großzügigen Walk-in-Dusche wird dieselbe Steinfläche zur Bühne für ein minimalistisches Raumkonzept: warme Beige- und Sandtöne kontrastieren mit einem dunklen Deckenelement und filigranen Armaturen in gebürstetem Bronze. Eine maßgefertigte Sitzbank aus Naturmaterialien rundet die klare Linienführung ab.

Jedes Detail ist durchdacht: Die Regendusche verschmilzt mit der Decke, die Bedienelemente treten optisch zurück, und selbst die Nischen und Schubladen des Waschtischs sind formal wie funktional reduziert. Das Lichtkonzept – dezent, indirekt, akzentuierend – verleiht dem Raum Tiefe und Ruhe.

Ein Bad für Menschen, die nicht nur höchste Qualität suchen, sondern Atmosphäre. Dieses Raumkonzept steht exemplarisch für den Anspruch der Axel Fröhlich GmbH, Bäder in Erlebnisräume zu verwandeln – kompromisslos in Material, Wirkung und Funktion.`,
    floorPlans: [
      {
        image: '',
        title: 'Spa-Bad Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 8 }, (_, i) => ({
      image: '',
      title: `Spa-Bad Detail ${i + 1}`,
      alt: `Spa-Bad in Stein & Bronze Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '5',
    slug: 'saunaosase-unterm-dach',
    title: 'Saunaosase unterm Dach auf Maß',
    subtitle: 'Meisterwerk der Anpassung',
    category: 'Luxus',
    description: `In einem kleinen Dachstuhl in der Umgebung von Mainz wurde eine einzigartige Ruheoase geschaffen, wo jedes Detail individuell geplant und auf Maß angepasst wurde. Hier hat das Team von Axel-Fröhlich GmbH eine Saunalandschaft geschaffen, die perfekt in die architektonischen Gegebenheiten des Dachs integriert ist – ein Meisterwerk der Anpassung.

Das Innere der Sauna bietet nicht nur ausreichend Sitz- und Liegeflächen, sondern auch im angrenzenden Vorraum wurde für Komfort gesorgt. Hier trifft Funktionalität auf Ästhetik.

Ein Blickfang im Wellnesskonzept ist das freistehende Waschbecken von Antonio Lupi, das sich wertvoll in das Gesamtbild einfügt und höchste Qualität repräsentiert.

Das Lichtkonzept des Raums ist ebenso durchdacht wie ansprechend. Die indirekte Beleuchtung schafft eine warme und gemütliche Atmosphäre, perfekt abgestimmt auf die Stimmung des Raumes.

Die Kombination aus Natursteinoptik-Fliesen und leicht geöltem Holz verleiht dem Raum eine natürliche Wärme und eine zeitlose Eleganz. Jeder Zentimeter wurde dabei effektiv genutzt, und durch geschickte Integration von kleinen Nischen und Klappen wurde ein wahres Wunder an Stauraum geschaffen.

Dieses Wellness-Refugium im Altbau vereint meisterhaft Funktionalität, Individualität und ästhetischen in einem Raum der Entspannung.`,
    floorPlans: [
      {
        image: '',
        title: 'Saunaosase Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 6 }, (_, i) => ({
      image: '',
      title: `Saunaosase Detail ${i + 1}`,
      alt: `Saunaosase unterm Dach Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '6',
    slug: 'kunstvolles-bad-barockes-statement',
    title: 'Kunstvolles Bad mit barockem Statement',
    subtitle: 'Ausdruck von Haltung und Wertigkeit',
    category: 'Luxus',
    description: `In diesem außergewöhnlichen Badprojekt verschmelzen moderne Linienführung und klassische Ornamentik zu einem einzigartigen Raumkonzept. Der Blickfang: eine vollflächige Wandgestaltung im Stil barocker Textiltapeten, umgesetzt in hochauflösend strukturierter Fliese – dramatisch, edel, ikonisch.

Die klassische Ästhetik wird gezielt kontrastiert durch eine minimalistisch gehaltene Einrichtung: ein klar gezeichneter Waschtisch, eingelassene Nischen, eine fugenlos integrierte Bank in der Dusche. Warme Natursteinoberflächen bringen Ruhe in die Komposition und betonen den wohnlichen Charakter.

Besonderes Detail: eine feine Marmorstatue im Duschbereich, die dem Raum eine fast museale Wirkung verleiht – als wäre dieses Badezimmer selbst ein Kunstwerk. Gekrönt wird die Gestaltung durch dezente Bronze-Armaturen, die das Farbspiel aus Grau, Beige und Off-White harmonisch ergänzen.

Dieses Bad ist mehr als funktionaler Raum – es ist ein Ausdruck von Haltung, von Wertigkeit und von Mut zum Stil.`,
    floorPlans: [
      {
        image: '',
        title: 'Kunstvolles Bad Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 14 }, (_, i) => ({
      image: '',
      title: `Kunstvolles Bad Detail ${i + 1}`,
      alt: `Kunstvolles Bad mit barockem Statement Detail ${i + 1}`
    })),
    featured: false
  }
];