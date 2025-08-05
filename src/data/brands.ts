export interface Brand {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  specialties: string[];
  origin: string;
  established?: string;
  featured: boolean;
}

export const brandsData: Brand[] = [
  {
    id: "antonio-lupi",
    slug: "antonio-lupi",
    name: "Antonio Lupi",
    category: "Badmöbel & Design",
    shortDescription: "Designobjekte, die den höchsten Ansprüchen an Fertigung, Gestaltung und Funktionalität genügen.",
    fullDescription: "Antonio Lupi steht für italienische Designexzellenz im Badbereich. Das Unternehmen verbindet innovative Materialien mit zeitlosem Design und schafft so einzigartige Badlösungen für höchste Ansprüche.",
    specialties: ["Luxus-Waschtische", "Designer-Badmöbel", "Innovative Materialien", "Maßanfertigungen"],
    origin: "Italien",
    established: "1950",
    featured: true
  },
  {
    id: "boffi",
    slug: "boffi",
    name: "Boffi",
    category: "Badmöbel & Design",
    shortDescription: "Einzigartiges italienisches Design für Ihr Bad – ein Eyecatcher in jedem Badezimmer. Boffi Synonym für Innovation und Exzellenz.",
    fullDescription: "Boffi ist ein Synonym für Innovation und Exzellenz im italienischen Design. Das Unternehmen schafft einzigartige Badlösungen, die als echte Eyecatcher in jedem Badezimmer fungieren.",
    specialties: ["Italienisches Design", "Innovative Badlösungen", "Premium-Qualität", "Designikonen"],
    origin: "Italien",
    established: "1934",
    featured: true
  },
  {
    id: "domovari",
    slug: "domovari",
    name: "Domovari",
    category: "Badmöbel & Design",
    shortDescription: "Badeinrichtung auf Maß. Made in Germany.",
    fullDescription: "Domovari steht für deutsche Präzision und maßgeschneiderte Badlösungen. Jedes Stück wird individuell gefertigt und perfekt an die Bedürfnisse des Kunden angepasst.",
    specialties: ["Maßanfertigungen", "Deutsche Qualität", "Individuelle Lösungen", "Präzisionsarbeit"],
    origin: "Deutschland",
    featured: false
  },
  {
    id: "dornbracht",
    slug: "dornbracht",
    name: "Dornbracht",
    category: "Armaturen",
    shortDescription: "Entdecken Sie Luxus-Bäder und Premium Wellnessbereiche von Dornbracht. International vielfach ausgezeichnete Premium-Armaturen.",
    fullDescription: "Dornbracht ist international für seine ausgezeichneten Premium-Armaturen bekannt. Das Unternehmen schafft Luxus-Bäder und Premium-Wellnessbereiche von höchster Qualität.",
    specialties: ["Premium-Armaturen", "Wellness-Systeme", "Luxus-Bäder", "Internationale Auszeichnungen"],
    origin: "Deutschland",
    established: "1950",
    featured: true
  },
  {
    id: "fantini",
    slug: "fantini",
    name: "Fantini",
    category: "Armaturen",
    shortDescription: "Italienische Designarmaturen mit höchster Funktionalität und zeitlosem Stil.",
    fullDescription: "Fantini verbindet italienisches Design mit innovativer Technik. Die Armaturen zeichnen sich durch ihre Funktionalität und ihren zeitlosen Stil aus.",
    specialties: ["Design-Armaturen", "Italienisches Design", "Innovation", "Zeitloser Stil"],
    origin: "Italien",
    featured: false
  },
  {
    id: "vola",
    slug: "vola",
    name: "Vola",
    category: "Armaturen",
    shortDescription: "VOLA steht für perfekte skandinavische Handwerkskunst aus hochwertigsten Materialien. Gefertigt werden die Produkte in Horsens, Dänemark.",
    fullDescription: "VOLA verkörpert perfekte skandinavische Handwerkskunst. Alle Produkte werden in Horsens, Dänemark, aus hochwertigsten Materialien gefertigt und stehen für minimalistisches Design.",
    specialties: ["Skandinavisches Design", "Handwerkskunst", "Hochwertige Materialien", "Minimalismus"],
    origin: "Dänemark",
    established: "1968",
    featured: true
  },
  {
    id: "thg-paris",
    slug: "thg-paris",
    name: "THG Paris",
    category: "Armaturen",
    shortDescription: "Französische Luxus-Armaturen mit eleganten Details und zeitloser Eleganz.",
    fullDescription: "THG Paris steht für französische Eleganz und Luxus im Armaturenbereich. Die Produkte zeichnen sich durch ihre eleganten Details und zeitlose Schönheit aus.",
    specialties: ["Französischer Luxus", "Elegante Details", "Zeitlose Eleganz", "Handwerkskunst"],
    origin: "Frankreich",
    featured: false
  },
  {
    id: "mutina",
    slug: "mutina",
    name: "Mutina",
    category: "Fliesen & Mosaik",
    shortDescription: "Edelste Materialien und vielfältige Formen. Kombination aus modernsten Fertigungstechniken und traditioneller Handarbeit.",
    fullDescription: "Mutina vereint edelste Materialien mit vielfältigen Formen. Das Unternehmen kombiniert modernste Fertigungstechniken mit traditioneller Handarbeit für einzigartige Fliesenlösungen.",
    specialties: ["Edelste Materialien", "Moderne Fertigung", "Traditionelle Handarbeit", "Vielfältige Formen"],
    origin: "Italien",
    featured: true
  },
  {
    id: "sicis",
    slug: "sicis",
    name: "Sicis",
    category: "Fliesen & Mosaik",
    shortDescription: "Die italienische Mosaik Manufaktur Sicis ist international für beeindruckende Vielfalt an Glas- und Keramikmosaik bekannt.",
    fullDescription: "Sicis ist eine renommierte italienische Mosaik-Manufaktur, die international für ihre beeindruckende Vielfalt an Glas- und Keramikmosaiken bekannt ist.",
    specialties: ["Glasmosaik", "Keramikmosaik", "Manufaktur-Qualität", "Italienische Tradition"],
    origin: "Italien",
    featured: true
  },
  {
    id: "mosa",
    slug: "mosa",
    name: "Mosa",
    category: "Fliesen & Mosaik",
    shortDescription: "Das preisgekrönte Design Team steht für echte Innovation im Zusammenhang mit der Entwicklung zukunftsweisender Fliesenkollektionen.",
    fullDescription: "Mosa's preisgekröntes Design-Team steht für echte Innovation bei der Entwicklung zukunftsweisender Fliesenkollektionen. Das Unternehmen setzt Maßstäbe in der Branche.",
    specialties: ["Preisgekröntes Design", "Innovation", "Zukunftsweisende Kollektionen", "Design-Excellence"],
    origin: "Niederlande",
    featured: false
  },
  {
    id: "trend",
    slug: "trend",
    name: "Trend Group",
    category: "Fliesen & Mosaik",
    shortDescription: "Trend Group ist einer der weltweit führenden Hersteller von exklusiven Mosaiken verschiedensten Ausführungen, der diese sowohl traditionell von Hand als auch industriell fertigt.",
    fullDescription: "Die Trend Group gehört zu den weltweit führenden Herstellern exklusiver Mosaike. Das Unternehmen fertigt sowohl traditionell von Hand als auch industriell.",
    specialties: ["Exklusive Mosaike", "Handarbeit", "Industrielle Fertigung", "Weltweite Führung"],
    origin: "Italien",
    featured: false
  },
  {
    id: "effegibi",
    slug: "effegibi",
    name: "Effegibi",
    category: "Wellness & Sauna",
    shortDescription: "Hochwertige Design-Saunen für jeden Raum. Ihre persönliche Wellness-Oase.",
    fullDescription: "Effegibi spezialisiert sich auf hochwertige Design-Saunen für jeden Raum. Das Unternehmen schafft persönliche Wellness-Oasen mit italienischem Design und höchster Qualität.",
    specialties: ["Design-Saunen", "Wellness-Oasen", "Italienisches Design", "Maßgeschneiderte Lösungen"],
    origin: "Italien",
    featured: true
  },
  {
    id: "tubes",
    slug: "tubes",
    name: "Tubes Radiatori",
    category: "Heizkörper",
    shortDescription: "Seit 30 Jahren begeistert das italienische Unternehmen Tubes seine Kunden mit technologisch und architektonisch hochwertigen Heizkörpern und Handtuchwärmern.",
    fullDescription: "Seit 30 Jahren begeistert Tubes seine Kunden mit technologisch und architektonisch hochwertigen Heizkörpern und Handtuchwärmern aus Italien.",
    specialties: ["Design-Heizkörper", "Handtuchwärmer", "Technologie", "Architektonisches Design"],
    origin: "Italien",
    established: "1994",
    featured: false
  },
  {
    id: "antrax",
    slug: "antrax",
    name: "Antrax",
    category: "Heizkörper",
    shortDescription: "Entdecken Sie italienische Heizkörper mit außergewöhnlichem Design.",
    fullDescription: "Antrax steht für italienische Heizkörper mit außergewöhnlichem Design. Das Unternehmen verbindet Funktionalität mit ästhetischer Perfektion.",
    specialties: ["Außergewöhnliches Design", "Italienische Qualität", "Ästhetische Perfektion", "Funktionalität"],
    origin: "Italien",
    featured: false
  },
  {
    id: "glamora",
    slug: "glamora",
    name: "Glamora",
    category: "Wandgestaltung",
    shortDescription: "Glamora Creative Wallcoverings – ausdrucksstarke Wandmotive aus Italien.",
    fullDescription: "Glamora schafft ausdrucksstarke Wandmotive aus Italien. Die Creative Wallcoverings verwandeln jeden Raum in ein Kunstwerk.",
    specialties: ["Creative Wallcoverings", "Ausdrucksstarke Motive", "Italienisches Design", "Raumkunst"],
    origin: "Italien",
    featured: false
  },
  {
    id: "wall-deco",
    slug: "wall-deco",
    name: "Wall & Decò",
    category: "Wandgestaltung",
    shortDescription: "Premium Tapete für Außenwände und Fassaden mit dekorativem Erscheinungsbild.",
    fullDescription: "Wall & Decò spezialisiert sich auf Premium-Tapeten für Außenwände und Fassaden mit dekorativem Erscheinungsbild. Innovative Lösungen für die Wandgestaltung.",
    specialties: ["Premium-Tapeten", "Außenwände", "Fassaden", "Dekoratives Design"],
    origin: "Italien",
    featured: false
  },
  {
    id: "pibamarmi",
    slug: "pibamarmi",
    name: "Pibamarmi",
    category: "Naturstein",
    shortDescription: "Exklusive Natursteine und Marmore für luxuriöse Badgestaltung.",
    fullDescription: "Pibamarmi bietet exklusive Natursteine und Marmore für luxuriöse Badgestaltung. Höchste Qualität und einzigartige Materialien.",
    specialties: ["Natursteine", "Marmore", "Luxuriöse Gestaltung", "Exklusive Materialien"],
    origin: "Italien",
    featured: false
  }
];

export const brandCategories = [
  "Badmöbel & Design",
  "Armaturen", 
  "Fliesen & Mosaik",
  "Wellness & Sauna",
  "Heizkörper",
  "Wandgestaltung",
  "Naturstein"
];

export const getBrandsByCategory = (category: string) => {
  return brandsData.filter(brand => brand.category === category);
};

export const getBrandBySlug = (slug: string) => {
  return brandsData.find(brand => brand.slug === slug);
};

export const getFeaturedBrands = () => {
  return brandsData.filter(brand => brand.featured);
};