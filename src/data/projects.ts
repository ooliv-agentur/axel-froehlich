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
    subtitle: 'Wellness-Oase mit Weinberg-Blick',
    category: 'Wellness',
    description: `Tauchen Sie ein in die traumhafte Welt dieser jungen Familie, die sich ihren Lebensmittelpunkt direkt an den idyllischen Weinbergen in der Nähe von Bad Kreuznach geschaffen hat.

Ein besonderes Highlight ist das Masterbad, das bewusst verwinkelt angelegt wurde, um ein Gefühl von Gemütlichkeit und Geborgenheit zu vermitteln. Diese Wellnessoase ist der ideale Ort für eine Auszeit vom hektischen Alltag.

In diesem verwinkelten, dennoch großzügigen Masterbad wurden Farben und Formen präzise aufeinander abgestimmt. Direkt am Eingang des Raumes erwartet Sie ein maßgefertigtes Waschbecken aus einem italienischen Naturstein Grigio di Tunisi welcher auf dem eleganten Unterschrank die farblich perfekt auf den Stein abgestimmt wurden und jede Menge an Stauraum bietet.

Die freistehende Badewanne ist vor der Fensterfront positioniert, dass die einen atemberaubenden Blick auf die umliegenden Weinberge ermöglicht. Die Wanne und Dusche werden elegant von einem Glas getrennt und erlaubt dadurch einen freien Blick ins Grüne. Durch das getönte Rauchglas wird dennoch ein Gefühl von Intimität und Schutz geschaffen. Die Armaturen von Fantini wurden farblich auf das Raumkonzept angepasst und greifen das moderne und dennoch zeitlose Design perfekt auf.

Das WC hingegen ist geschickt im hinteren Bereich des Raumes platziert – gut versteckt und dennoch leicht zugänglich.

Von der Sauna aus wird nicht nur der Blick ins Grüne gehalten sondern auch auf den eingebauten Petrolofen gegenüber der Sauna. Diese raffinierte Anordnung unterstreicht die Gemütlichkeit des Raumes auf besondere Weise.

In diesem einzigartigen Masterbad wird Ästhetik und Individualität auf die Spitze getrieben. Willkommen in einer Oase der Ruhe und des Wohlbefindens.`,
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop',
        title: 'Hauptgrundriss',
        hotspots: [
          {
            id: 'waschtisch',
            x: 25,
            y: 40,
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
            x: 60,
            y: 25,
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
            x: 70,
            y: 50,
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
            x: 65,
            y: 35,
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
            x: 85,
            y: 70,
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
            x: 75,
            y: 80,
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
      image: `https://images.unsplash.com/photo-${721322800607 + i}?q=80&w=1920&auto=format&fit=crop`,
      title: `Masterbad Detail ${i + 1}`,
      alt: `Detailaufnahme des Masterbads ${i + 1}`
    })),
    featured: true
  },
  {
    id: '2',
    slug: 'penthouse-muenchen',
    title: 'Penthouse München',
    subtitle: 'Luxus trifft Minimalismus',
    category: 'Luxus',
    description: '200m² Wellness-Oase mit freistehender Badewanne und Panoramablick. Ein außergewöhnliches Badprojekt im Herzen Münchens, das höchste Ansprüche an Design und Funktionalität erfüllt.',
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760&auto=format&fit=crop',
        title: 'Penthouse Grundriss',
        hotspots: [
          {
            id: 'penthouse-wanne',
            x: 50,
            y: 30,
            title: 'Designer Badewanne',
            description: 'Freistehende Luxuswanne mit Panoramablick',
            details: ['Premium Mineralwerkstoff', 'Panoramablick über München', 'Temperaturstabile Oberfläche']
          }
        ]
      }
    ],
    photos: Array.from({ length: 12 }, (_, i) => ({
      image: `https://images.unsplash.com/photo-${500375592092 + i}?q=80&w=1920&auto=format&fit=crop`,
      title: `Penthouse Detail ${i + 1}`,
      alt: `Penthouse München Detail ${i + 1}`
    })),
    featured: true
  },
  {
    id: '3',
    slug: 'villa-frankfurt',
    title: 'Villa Frankfurt',
    subtitle: 'Zeitlose Eleganz',
    category: 'Klassisch',
    description: 'Klassisches Design mit modernen Komfort-Features. Eine harmonische Verbindung von traditioneller Ästhetik und zeitgemäßer Funktionalität.',
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=4896&auto=format&fit=crop',
        title: 'Villa Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 10 }, (_, i) => ({
      image: `https://images.unsplash.com/photo-${721322800607 + i + 20}?q=80&w=1920&auto=format&fit=crop`,
      title: `Villa Detail ${i + 1}`,
      alt: `Villa Frankfurt Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '4',
    slug: 'loft-berlin',
    title: 'Loft Berlin',
    subtitle: 'Industrial Chic',
    category: 'Modern',
    description: 'Industrieller Stil mit hochwertigen Materialien. Ein außergewöhnliches Loft-Projekt, das urbane Ästhetik mit luxuriöser Ausstattung verbindet.',
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1500375592092-4095x5909?q=80&w=3945&auto=format&fit=crop',
        title: 'Loft Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 8 }, (_, i) => ({
      image: `https://images.unsplash.com/photo-${721322800607 + i + 40}?q=80&w=1920&auto=format&fit=crop`,
      title: `Loft Detail ${i + 1}`,
      alt: `Loft Berlin Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '5',
    slug: 'stadthaus-hamburg',
    title: 'Stadthaus Hamburg',
    subtitle: 'Clevere Raumnutzung',
    category: 'Kompakt',
    description: 'Maximaler Komfort auf kleinstem Raum. Eine intelligente Lösung für urbanes Wohnen mit durchdachten Details.',
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760&auto=format&fit=crop',
        title: 'Stadthaus Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 6 }, (_, i) => ({
      image: `https://images.unsplash.com/photo-${721322800607 + i + 60}?q=80&w=1920&auto=format&fit=crop`,
      title: `Stadthaus Detail ${i + 1}`,
      alt: `Stadthaus Hamburg Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '6',
    slug: 'residenz-koeln',
    title: 'Residenz Köln',
    subtitle: 'Private Spa-Welt',
    category: 'Wellness',
    description: 'Wellness-Bereich mit Sauna und Dampfbad. Ein privates Spa-Erlebnis in den eigenen vier Wänden.',
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=4896&auto=format&fit=crop',
        title: 'Residenz Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 14 }, (_, i) => ({
      image: `https://images.unsplash.com/photo-${721322800607 + i + 80}?q=80&w=1920&auto=format&fit=crop`,
      title: `Residenz Detail ${i + 1}`,
      alt: `Residenz Köln Detail ${i + 1}`
    })),
    featured: false
  },
  {
    id: '7',
    slug: 'apartment-stuttgart',
    title: 'Apartment Stuttgart',
    subtitle: 'Puristische Ästhetik',
    category: 'Modern',
    description: 'Klare Linien und natürliche Materialien. Ein minimalistisches Badkonzept, das durch seine Reduktion auf das Wesentliche besticht.',
    floorPlans: [
      {
        image: 'https://images.unsplash.com/photo-1500375592092-4095x5909?q=80&w=3945&auto=format&fit=crop',
        title: 'Apartment Grundriss',
        hotspots: []
      }
    ],
    photos: Array.from({ length: 9 }, (_, i) => ({
      image: `https://images.unsplash.com/photo-${721322800607 + i + 100}?q=80&w=1920&auto=format&fit=crop`,
      title: `Apartment Detail ${i + 1}`,
      alt: `Apartment Stuttgart Detail ${i + 1}`
    })),
    featured: false
  }
];