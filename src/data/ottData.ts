export type SpecialtyId =
  | 'chirurgie-dentaire'
  | 'chirurgie-viscerale-vasculaire'
  | 'chirurgie-cervico-faciale'
  | 'chirurgie-cutanee-suture'
  | 'rd-medtech'
  | 'enseignement-superieur'
  | 'enseignement-secondaire';

export interface ProductItem {
  id: string;
  name: string;
  shortName: string;
  h1Title: string;
  dimension: string;
  weight: string;
  priceHT: string;
  whyChooseHeading?: string;
  categoryLabel: string;
  specialties: SpecialtyId[];
  visualType: string;
  featuredOnHome?: boolean;
  summary: string;
  introHook: string;
  clinicalDescription: string;
  practicalBenefits: string[];
  anatomicalStructures: string[];
  protocols: string[];
  conservation: string;
  packaging: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  seoKeywords: string[];
}

export interface SpecialtyItem {
  id: SpecialtyId;
  number: string;
  title: string;
  shortTitle: string;
  cardHook: string;
  h1: string;
  subtitle: string;
  introHeading: string;
  audiences: string[];
  introParagraph1: string;
  introParagraph2: string;
  clinicalDomains: {
    title: string;
    items: string[];
  }[];
  logisticsHighlight: {
    title: string;
    points: { label: string; text: string }[];
  };
  technicalSpecs: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoKeywords: string[];
  visualType: string;
}

export interface BlogPost {
  id: string;
  num: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  targetKeywords: string[];
  relatedSpecialty: SpecialtyId;
  relatedProductIds: string[];
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'mandibule-porcine',
    name: 'Mâchoire inférieure de porc fraîche pour TP dentaire',
    shortName: 'Mandibule',
    h1Title: 'Mâchoire inférieure de porc fraîche pour TP dentaire',
    dimension: '30 cm',
    weight: '700 g',
    priceHT: '18,00 € H.T.',
    categoryLabel: 'Chirurgie Dentaire & Implantologie',
    specialties: ['chirurgie-dentaire', 'rd-medtech'],
    visualType: 'mandibule',
    featuredOnHome: true,
    summary:
      'Le modèle naturel de référence pour apprendre à poser des implants, décoller la gencive et suturer comme au cabinet.',
    introHook:
      'Vous cherchez où acheter des mâchoires de porc fraîches pour organiser un TP dentaire ou un séminaire d’implantologie ? Oubliez les mâchoires en résine dont la fausse gencive se déchire dès le premier nœud. Sur une vraie mâchoire inférieure de porc fraîche, chaque praticien retrouve immédiatement l’élasticité de la gencive sous le bistouri et la résistance réelle de l’os sous le foret.',
    clinicalDescription:
      'Commander un lot de mandibules porcines chez Oral Tech Training vous évite toute démarche en abattoir et tout nettoyage préalable. Préparées sur commande à Clermont-Ferrand, nos pièces arrivent rincées, sciées bien à plat et mises sous vide : vous ouvrez la caisse isotherme et vous les posez directement sur vos tables de travail.',
    practicalBenefits: [
      'Gencive ferme et souple qui retient parfaitement le fil de suture sous tension, contrairement au silicone',
      'Double densité osseuse (os cortical dur en surface et os spongieux au centre) pour sentir le vrai blocage de l’implant',
      'Base sciée bien droite garantissant une stabilité parfaite sur le plateau chirurgical pendant le forage',
    ],
    anatomicalStructures: [
      'Gencive attachée, muqueuse alvéolaire libre et périoste complet permettant le décollement de lambeaux',
      'Corticale osseuse épaisse et os spongieux trabéculaire proche d’une mandibule humaine',
      'Canal mandibulaire, pédicule vasculo-nerveux alvéolaire inférieur et émergence du nerf mentonnier',
      'Disponible en mandibule entière ou séparée en demi-mâchoire (hémi-mandibule) par participant',
    ],
    protocols: [
      'Séquence de forage et pose d’implants dentaires avec contrôle du couple d’insertion (stabilité primaire)',
      'Tracés d’incision, décollement de lambeaux d’épaisseur totale ou partielle et sutures gingivales',
      'Greffes de gencive et Régénération Osseuse Guidée (pose de membranes et clous de fixation)',
      'Extractions chirurgicales de dents incluses, alvéolectomie et chirurgie du bout de la racine',
    ],
    conservation:
      'Livrée fraîche (+2°C à +4°C). Peut être congelée dans son sachet sous vide pendant plusieurs mois.',
    packaging:
      'Sous vide à l’unité ou par binôme, expédiée en caisse isotherme.',
    faqs: [
      {
        question: 'Comment commander un lot de mâchoires de porc pour une formation dentaire ?',
        answer:
          'Indiquez-nous la date de votre atelier et le nombre de participants. Nous préparons vos mâchoires entières ou demi-mâchoires sur commande et vous livrons en frais 24h à 48h avant le début de la formation.',
      },
      {
        question: 'Faut-il prévoir une mâchoire entière ou une demi-mâchoire par dentiste ?',
        answer:
          'Une demi-mâchoire (hémi-mandibule) suffit largement pour poser 2 à 3 implants, décoller un grand lambeau et faire plusieurs points de suture par praticien, tout en optimisant le budget de votre formation.',
      },
    ],
    seoKeywords: [
      'où acheter des mâchoires de porc pour TP dentaire',
      'commander mandibule de porc fraîche implantologie',
      'lot de mâchoires de porc formation parodontologie',
    ],
  },
  {
    id: 'maxillaire-superieur',
    name: 'Mâchoire supérieure de porc',
    shortName: 'Maxillaire',
    h1Title: 'Mâchoire supérieure de porc',
    dimension: '28 cm',
    weight: '900 g',
    priceHT: '22,00 € H.T.',
    categoryLabel: 'Chirurgie Parodontale, Greffe au Palais & Sinus Lift',
    specialties: ['chirurgie-dentaire', 'chirurgie-cervico-faciale'],
    visualType: 'maxillaire',
    featuredOnHome: true,
    summary:
      'La pièce indispensable pour s’entraîner au soulevé de sinus (Sinus Lift) et au prélèvement de greffon de gencive au palais.',
    introHook:
      'Où commander des mâchoires supérieures de porc fraîches pour un cours de parodontologie ou de chirurgie implantaire avancée ? Lorsque votre programme inclut une greffe gingivale ou un soulevé de sinus, la mandibule ne suffit plus : seul le maxillaire supérieur offre un palais complet et de vraies cavités sinusiennes.',
    clinicalDescription:
      'Nos maxillaires sont sciés avec précision à Clermont-Ferrand pour préserver l’intégrité des sinus et toute l’épaisseur de la muqueuse palatine. Sur une seule pièce prête à l’emploi, chaque chirurgien-dentiste peut ouvrir un volet osseux latéral, décoller la membrane du sinus sans la percer, puis prélever un greffon au palais.',
    practicalBenefits: [
      'Membrane du sinus fine et élastique reproduisant toute la délicatesse d’un vrai Sinus Lift',
      'Muqueuse du palais épaisse avec reliefs palatins, idéale pour apprendre à prélever un greffon conjonctif',
      'Pièce rincée et parée sous vide, prête à poser sur le champ opératoire dès réception',
    ],
    anatomicalStructures: [
      'Voûte palatine entière recouverte d’une fibromuqueuse épaisse (site donneur pour les greffes)',
      'Cavité du sinus maxillaire tapissée par sa fine membrane (membrane de Schneider) intacte',
      'Arcade dentaire supérieure, crête alvéolaire et vestibule',
    ],
    protocols: [
      'Soulevé de sinus (Sinus Lift) par abord latéral ou par la crête osseuse, suivi du comblement',
      'Prélèvement de greffon épithélio-conjonctif ou de conjonctif enfoui au palais',
      'Chirurgie de recouvrement radiculaire par lambeau déplacé ou tunnelisation',
    ],
    conservation:
      'Conservation au frais (+2°C à +4°C) recommandée pour préserver toute l’élasticité de la membrane du sinus.',
    packaging: 'Sous vide à l’unité en caisse isotherme.',
    faqs: [
      {
        question: 'Peut-on associer une mâchoire supérieure et une mâchoire inférieure par participant ?',
        answer:
          'Tout à fait : de nombreux formateurs commandent un duo « 1 demi-mandibule + 1 demi-maxillaire » par dentiste afin de couvrir la pose d’implants, le sinus lift et la greffe au palais sur une même journée.',
      },
    ],
    seoKeywords: [
      'commander maxillaire de porc frais sinus lift',
      'mâchoire supérieure de porc greffe gingivale palais',
      'modèle biologique soulevé de sinus dentaire',
    ],
  },
  {
    id: 'coeur-vaisseaux',
    name: 'Cœur de porc frais entier',
    shortName: 'Coeur',
    h1Title: 'Cœur de porc frais entier',
    dimension: '30 cm',
    weight: '500 g',
    priceHT: '14,00 € H.T.',
    whyChooseHeading: 'Pourquoi choisir cette pièce pour vos dissections ?',
    categoryLabel: 'Chirurgie Cardiaque & Dissection Scientifique',
    specialties: [
      'chirurgie-viscerale-vasculaire',
      'enseignement-superieur',
      'enseignement-secondaire',
    ],
    visualType: 'coeur',
    featuredOnHome: true,
    summary:
      'Prélevé entier sans entaille sanitaire et avec de longs vaisseaux, prêt pour la dissection ou la suture vasculaire.',
    introHook:
      'Vous vous demandez où acheter des cœurs de porc entiers non coupés pour vos dissections ou vos ateliers de chirurgie ? En boucherie ou en abattoir classique, les cœurs sont systématiquement fendus en deux lors de l’inspection vétérinaire et les vaisseaux sont coupés au ras. Impossible alors de faire circuler de l’eau dans les cavités ou de suturer une artère.',
    clinicalDescription:
      'Pour vous permettre de commander un lot de cœurs de porc réellement exploitables, nous isolons chaque pièce sur chaîne sous statut scientifique. Les quatre cavités restent 100 % étanches et les gros vaisseaux sont conservés sur plusieurs centimètres : un gain de temps immédiat pour les professeurs de SVT, les universités et les écoles de chirurgie.',
    practicalBenefits: [
      'Cœur garanti non fendu : étanchéité complète des ventricules pour réussir l’expérience de circulation d’eau',
      'Artères et veines coupées longues pour brancher des tuyaux ou poser des clamps chirurgicaux sans difficulté',
      'Cavités soigneusement rincées et débarrassées des caillots avant la mise sous vide',
    ],
    anatomicalStructures: [
      'Oreillettes et ventricules droit et gauche intacts (sans coupure sanitaire)',
      'Crosse de l’aorte, artère pulmonaire et veines caves conservées sur plusieurs centimètres',
      'Valves cardiaques complètes (mitrale, tricuspide, sigmoïdes) avec cordages tendineux et piliers',
      'Réseau des artères coronaires nettement visible à la surface du muscle cardiaque',
    ],
    protocols: [
      'Entraînement aux sutures vasculaires et aux pontages coronariens sous loupes en école de chirurgie',
      'Étude, plastie et remplacement des valves cardiaques en simulation opératoire',
      'Dissection du cœur et mise en évidence du sens de circulation sanguine en cours de biologie (collège, lycée, licence, prépa BCPST)',
    ],
    conservation: 'Frais (+2°C à +4°C) ou congelable directement dans son sachet sous vide.',
    packaging: 'Sous vide à l’unité ou par lot pédagogique en caisse réfrigérée.',
    faqs: [
      {
        question: 'Où acheter des cœurs de porc non coupés pour un collège, un lycée ou une université ?',
        answer:
          'Nous livrons les établissements scolaires et universitaires partout en France. Nos cœurs sont garantis entiers (non fendus) pour réussir vos démonstrations de circulation et sont payables par mandat administratif Chorus Pro.',
      },
      {
        question: 'Quelle longueur de vaisseaux laissez-vous sur vos cœurs de porc ?',
        answer:
          'Nous conservons plusieurs centimètres sur l’aorte et l’artère pulmonaire pour vous permettre de poser des clamps chirurgicaux ou de raccorder des tuyaux d’eau.',
      },
    ],
    seoKeywords: [
      'où acheter cœur de porc entier non coupé',
      'commander lot de cœurs de porc dissection SVT',
      'cœur de porc frais gros vaisseaux chirurgie',
    ],
  },
  {
    id: 'rein-porcin',
    name: 'Rognon de porc frais entier',
    shortName: 'Rognon',
    h1Title: 'Rognon de porc frais entier',
    dimension: '30 cm',
    weight: '200 g',
    priceHT: '9,00 € H.T.',
    categoryLabel: 'Chirurgie Urologique & Cours de Biologie',
    specialties: [
      'chirurgie-viscerale-vasculaire',
      'enseignement-superieur',
      'enseignement-secondaire',
    ],
    visualType: 'rein',
    featuredOnHome: true,
    summary:
      'Rein entier à capsule intacte, livré avec ses vaisseaux et un uretère long pour l’urologie et la dissection.',
    introHook:
      'Besoin de commander des rognons de porc frais avec uretère et vaisseaux longs pour un cours d’urologie ou une dissection de biologie ? Par sa forme lisse, sa taille et son organisation interne, le rein de porc est le modèle le plus proche du rein humain — à condition de ne pas avoir été dépouillé de ses conduits lors de la découpe.',
    clinicalDescription:
      'Nos préparateurs prélèvent chaque rognon à la main afin de préserver sa fine enveloppe externe, son artère, sa veine rénale ainsi qu’un segment d’uretère de 10 à 15 cm. Vos pièces sont prêtes à rejoindre un simulateur de cœlioscopie (pelvi-trainer) ou les paillasses de vos étudiants.',
    practicalBenefits: [
      'Uretère préservé sur 10 à 15 cm (alors qu’il est systématiquement coupé à ras dans le commerce)',
      'Artère et veine rénales conservées pour exercer la dissection du hile et la pose de clamps',
      'Tissu frais souple et dense qui tient les points de suture sans se déchirer',
    ],
    anatomicalStructures: [
      'Capsule fibreuse externe lisse et non arrachée',
      'Hile rénal complet réunissant l’artère rénale, la veine rénale et le bassinet',
      'Uretère perméable de 10 à 15 cm permettant le passage d’une sonde',
      'Cortex rénal, zone médullaire (pyramides) et calices très nets à la coupe',
    ],
    protocols: [
      'Dissection des vaisseaux du rein et clampage sélectif en boîte de cœlioscopie (pelvi-trainer)',
      'Chirurgie partielle du rein (tumorectomie) et suture hémostatique du parenchyme',
      'Suture de l’uretère et entraînement à la pose de sonde urétérale JJ en urologie',
      'Coupe longitudinale pour observer l’anatomie interne du rein en enseignement scientifique',
    ],
    conservation: 'Frais (+2°C à +4°C).',
    packaging: 'Sous vide à l’unité ou par lot calibré.',
    faqs: [
      {
        question: 'Peut-on commander des rognons de porc avec des vaisseaux longs pour un pelvi-trainer ?',
        answer:
          'Oui, précisez-le lors de votre demande de devis : nos opérateurs sectionnent l’artère, la veine et l’uretère au plus long pour faciliter vos exercices en cœlioscopie.',
      },
    ],
    seoKeywords: [
      'commander rognon de porc frais avec uretère',
      'rein de porc dissection urologie',
      'lot de rognons de porc enseignement biologie',
    ],
  },
  {
    id: 'cervelle-porcine',
    name: 'Cervelle de porc frais sans formol',
    shortName: 'Cerveau',
    h1Title: 'Cervelle de porc frais sans formol',
    dimension: '20 cm',
    weight: '90 g',
    priceHT: '16,00 € H.T.',
    categoryLabel: 'Étude du Système Nerveux & Recherche',
    specialties: ['enseignement-superieur', 'enseignement-secondaire', 'rd-medtech'],
    visualType: 'cerveau',
    featuredOnHome: true,
    summary:
      'Cerveau complet avec hémisphères, cervelet et tronc cérébral. 100 % frais, sans odeur et sans vapeurs toxiques de formol.',
    introHook:
      'Vous cherchez où acheter des cervelles de porc fraîches sans formol pour vos enseignements de neurobiologie ou vos essais en laboratoire ? Extraire un cerveau entier sans écraser les hémisphères est délicat, et les pièces conservées au formol exposent inutilement les étudiants et préparateurs à des vapeurs toxiques.',
    clinicalDescription:
      'Chez Oral Tech Training, chaque encéphale est dégagé à froid avec soin pour conserver d’un seul tenant les deux hémisphères, le cervelet et le tronc cérébral. Expédié frais en barquette rigide individuelle — sans congélation ni produit chimique —, il offre une tenue parfaite pour réaliser des coupes franches.',
    practicalBenefits: [
      'Garanti 100 % sans formol : utilisation saine sur paillasse, sans odeur irritante ni hotte aspirante',
      'Spécimen complet réunissant les deux hémisphères cérébraux, le cervelet et le bulbe rachidien',
      'Protection en barquette rigide individuelle évitant tout écrasement pendant le transport',
    ],
    anatomicalStructures: [
      'Hémisphères cérébraux plissés (circonvolutions, sillons et fines méninges)',
      'Cervelet complet (arbre de vie) et tronc cérébral attachés',
      'Contraste naturel très net à la coupe entre la substance grise et la substance blanche',
    ],
    protocols: [
      'Coupes anatomiques longitudinales et transversales pour l’étude du cerveau en université, prépa BCPST ou lycée',
      'Identification des ventricules cérébraux, du corps calleux, du thalamus et du cervelet',
      'Essais R&D en neurochirurgie : insertion d’électrodes de stimulation profonde, de sondes ou de cathéters',
    ],
    conservation:
      'À conserver uniquement au réfrigérateur (+2°C à +4°C, ne jamais congeler) pour garder toute sa tenue à la coupe.',
    packaging: 'Barquette rigide antichoc en colis réfrigéré.',
    faqs: [
      {
        question: 'Pourquoi choisir une cervelle fraîche plutôt que congelée ou formolée ?',
        answer:
          'La congélation ramollit le tissu cérébral au dégel et empêche de faire des coupes nettes. Quant au formol, il est désormais banni ou restreint dans la plupart des établissements d’enseignement.',
      },
    ],
    seoKeywords: [
      'où acheter cervelle de porc fraîche dissection',
      'commander cerveau de porc sans formol biologie',
      'cervelle de porc fraîche enseignement',
    ],
  },
  {
    id: 'foie-porcin',
    name: 'Foie de porc frais',
    shortName: 'Foie',
    h1Title: 'Foie de porc frais',
    dimension: '12 cm',
    weight: '1500 g',
    priceHT: '19,00 € H.T.',
    categoryLabel: 'Chirurgie Viscérale & Tests R&D',
    specialties: ['chirurgie-viscerale-vasculaire', 'rd-medtech', 'enseignement-superieur'],
    visualType: 'foie',
    featuredOnHome: true,
    summary:
      'Foie complet avec sa vésicule biliaire intacte, prêt pour l’entraînement à la cœlioscopie et les tests de bistouris électriques.',
    introHook:
      'Comment commander un foie de porc frais avec sa vésicule biliaire intacte pour une séance de cœlioscopie ? Dans la filière alimentaire classique, la vésicule est systématiquement arrachée sur la chaîne d’abattage pour éviter toute amertume. Résultat : la pièce devient inutilisable pour entraîner les internes ou tester un dispositif médical.',
    clinicalDescription:
      'Sur simple demande, nos opérateurs prélèvent le foie de porc entier en préservant la vésicule biliaire pleine, son canal et ses vaisseaux. Vous disposez d’un modèle prêt à glisser dans un pelvi-trainer pour enseigner l’ablation de la vésicule, ou sur un banc d’essai R&D pour qualifier un bistouri électrique.',
    practicalBenefits: [
      'Vésicule biliaire entière et non percée permettant d’enseigner la chirurgie biliaire en conditions réelles',
      'Tissu frais conducteur idéal pour tester les bistouris électriques, les ultrasons, la radiofréquence ou les colles',
      'Dimensions adaptées aux boîtes de simulation cœlioscopique (pelvi-trainer) et à la chirurgie robotique',
    ],
    anatomicalStructures: [
      'Lobes hépatiques complets recouverts de leur enveloppe lisse (capsule de Glisson)',
      'Vésicule biliaire intacte logée dans son lit vésiculaire avec son canal cystique',
      'Pédicule hépatique réunissant la veine porte, l’artère hépatique et la voie biliaire principale',
    ],
    protocols: [
      'Ablation de la vésicule biliaire (cholécystectomie) sous cœlioscopie : dissection du triangle de Calot, pose de clips et section',
      'Résection et suture du tissu hépatique en formation de chirurgie viscérale',
      'Tests R&D d’énergies chirurgicales (électrochirurgie, thermofusion, radiofréquence, micro-ondes) et de patchs hémostatiques',
    ],
    conservation: 'Frais (+2°C à +4°C).',
    packaging: 'Sachet sous vide individuel haute résistance.',
    faqs: [
      {
        question: 'La vésicule biliaire est-elle toujours conservée sur vos foies de porc ?',
        answer:
          'Oui, tous nos foies destinés à la formation chirurgicale sont préparés avec leur vésicule biliaire intacte et non percée.',
      },
    ],
    seoKeywords: [
      'commander foie de porc avec vésicule biliaire',
      'foie de porc pelvi-trainer cœlioscopie',
      'foie de porc frais test bistouri électrique R&D',
    ],
  },
  {
    id: 'pied-de-porc',
    name: 'Pied de porc frais',
    shortName: 'Pied',
    h1Title: 'Pied de porc frais',
    dimension: '22 cm',
    weight: '450 g',
    priceHT: '7,50 € H.T.',
    whyChooseHeading: 'Pourquoi choisir cette pièce pour vos ateliers ?',
    categoryLabel: 'Ateliers de Suture & Réparation des Tendons',
    specialties: ['chirurgie-cutanee-suture', 'enseignement-superieur'],
    visualType: 'pied',
    summary:
      'Le support incontournable et économique pour apprendre les points de suture cutanés sous tension et la réparation des tendons.',
    introHook:
      'Vous cherchez où acheter des pieds de porc frais en lot pour organiser un atelier de suture en faculté de médecine, en IFSI ou en congrès ? Contrairement aux coussins en mousse ou en silicone qui se fendent dès qu’on serre le premier nœud, le pied de porc offre la vraie résistance d’une peau épaisse.',
    clinicalDescription:
      'Nos pieds de porc sont préparés sans brûler l’épiderme afin que l’aiguille courbe pénètre franchement dans le derme. Et pour les séances plus avancées, il suffit d’inciser un peu plus profondément pour accéder aux gaines et aux tendons et s’exercer à la chirurgie réparatrice de la main.',
    practicalBenefits: [
      'Derme dense qui impose le bon mouvement de rotation du poignet avec le porte-aiguille',
      'Excellente tenue des bords de la plaie permettant de serrer des nœuds chirurgicaux sous vraie tension',
      'Double usage sur une même pièce : suture de la peau en surface et suture des tendons en profondeur',
    ],
    anatomicalStructures: [
      'Épiderme et derme épais offrant une résistance mécanique très proche de la peau humaine',
      'Tissu sous-cutané permettant de décoller légèrement les berges de la plaie',
      'Tendons fléchisseurs et extenseurs solides coulissant dans leurs gaines',
    ],
    protocols: [
      'Points de suture cutanée : points simples séparés, point de Blair-Donati, point d’angle, point en X et surjet intradermique',
      'Réparation et suture des tendons profonds (points de Kessler, Bunnell)',
      'Biopsies cutanées au punch, retrait de lésions et pose d’agrafes aux urgences',
    ],
    conservation:
      'Frais (+2°C à +4°C) ou congelable par lots pour échelonner vos séances sur l’année.',
    packaging: 'Sous vide à l’unité ou par cartons de 10, 20, 50 ou 100 pièces.',
    faqs: [
      {
        question: 'Comment commander 50 ou 100 pieds de porc pour une faculté de médecine ou un IFSI ?',
        answer:
          'Indiquez-nous la date de votre séance et le nombre d’étudiants : nous conditionnons vos pièces sous vide par table ou par groupe et acceptons les bons de commande Chorus Pro.',
      },
    ],
    seoKeywords: [
      'où acheter des pieds de porc pour atelier suture',
      'commander lot de pieds de porc frais faculté médecine IFSI',
      'pied de porc entraînement suture',
    ],
  },
  {
    id: 'bloc-maxillo-mandibulaire',
    name: 'Bloc maxillo-mandibulaire complet',
    shortName: 'Bloc Maxillo',
    h1Title: 'Bloc maxillo-mandibulaire porcin frais avec articulation (ATM)',
    dimension: '32 cm',
    weight: '1600 g',
    priceHT: '38,00 € H.T.',
    categoryLabel: 'Chirurgie Maxillo-Faciale & Articulation (ATM)',
    specialties: ['chirurgie-dentaire', 'chirurgie-cervico-faciale', 'rd-medtech'],
    visualType: 'bloc-maxillo',
    summary:
      'Ensemble mâchoire du haut + mâchoire du bas articulées avec ATM pour la chirurgie maxillo-faciale et l’ostéosynthèse.',
    introHook:
      'Comment se procurer un bloc maxillo-mandibulaire complet avec son articulation intacte pour une formation de chirurgie maxillo-faciale ? Pour enseigner la réparation des fractures de la face ou la chirurgie de l’articulation temporo-mandibulaire (ATM), un os isolé ne reproduit ni l’ouverture de la bouche ni l’emboîtement des dents.',
    clinicalDescription:
      'Ce bloc réunit la mâchoire supérieure et la mâchoire inférieure articulées ensemble, avec leurs capsules articulaires et leurs muscles masticateurs. Les internes et chirurgiens opèrent en trois dimensions dans les conditions réelles du bloc opératoire : réduction de fractures, blocage intermaxillaire et vissage de mini-plaques en titane.',
    practicalBenefits: [
      'Articulation temporo-mandibulaire (ATM) fonctionnelle conservée avec son disque articulaire',
      'Épaisseur d’os idéale pour cintrer et visser des plaques et vis d’ostéosynthèse',
      'Restitue les vraies contraintes d’ouverture buccale et d’accès chirurgical en profondeur',
    ],
    anatomicalStructures: [
      'Articulation temporo-mandibulaire complète (condyle, ménisque articulaire, capsule)',
      'Mâchoire supérieure et mandibule complète maintenues en occlusion',
      'Muscles masticateurs (masséter, ptérygoïdiens) et tissus des joues conservés selon votre cahier des charges',
    ],
    protocols: [
      'Réduction de fractures mandibulaires et pose de plaques et vis d’ostéosynthèse',
      'Ostéotomies des mâchoires (chirurgie orthognathique) et chirurgie du menton',
      'Arthroscopie, lavage articulaire et abord chirurgical de l’ATM',
    ],
    conservation: 'Frais (+2°C à +4°C) ou congelé.',
    packaging: 'Sachet sous vide individuel haute résistance.',
    faqs: [
      {
        question: 'Le bloc est-il préparé avec ou sans la peau des joues ?',
        answer:
          'Nous adaptons le parage à votre cours : livré sans la peau (avec muscles et muqueuses) pour un accès direct à l’os, ou avec la peau pour travailler les voies d’abord du visage.',
      },
    ],
    seoKeywords: [
      'commander bloc maxillo-mandibulaire porcin',
      'modèle biologique chirurgie maxillo-faciale',
      'pièce anatomique ATM chirurgie orale',
    ],
  },
  {
    id: 'carre-peau-porcine',
    name: 'Carré de peau porcine sur-mesure',
    shortName: 'Peau',
    h1Title: 'Carré de peau de porc fraîche sur-mesure pour suture et lambeaux',
    dimension: '15 cm',
    weight: '300 g',
    priceHT: '12,00 € H.T.',
    categoryLabel: 'Dermatologie, Suture & Tests R&D',
    specialties: ['chirurgie-cutanee-suture', 'rd-medtech'],
    visualType: 'peau',
    summary:
      'Pièce de peau découpée bien à plat selon vos dimensions (10×10, 15×15, 20×30 cm) avec derme et couche sous-cutanée.',
    introHook:
      'Vous cherchez où acheter de la peau de porc fraîche découpée bien à plat pour un atelier de dermatologie, de chirurgie plastique ou des essais R&D ? Pour dessiner un lambeau cutané, retirer une lésion ou tester un dispositif médical, un carré de peau plat est beaucoup plus pratique que la surface arrondie d’un pied de porc.',
    clinicalDescription:
      'Nous découpons nos carrés de peau de porc fraîche aux dimensions exactes de vos plateaux chirurgicaux (10×10, 15×15, 20×30 cm). Chaque pièce conserve un épiderme souple, un derme dense et une couche régulière de tissu sous-cutané : les praticiens peuvent décoller la peau aux ciseaux et faire glisser leurs lambeaux avec un réalisme bluffant.',
    practicalBenefits: [
      'Repose naturellement bien à plat sur la table sans nécessiter d’étau ni de support de fixation',
      'Vrai plan de décollement sous-cutané permettant de mobiliser les bords de la plaie aux ciseaux',
      'Formats découpés à la demande pour vos ateliers pratiques ou vos cellules de test en laboratoire',
    ],
    anatomicalStructures: [
      'Épiderme non brûlé et derme d’épaisseur très proche de la peau humaine',
      'Couche de tissu adipeux sous-cutané (hypoderme) régulière autorisant le glissement des tissus',
      'Option de découpe incluant le plan musculaire sous-jacent sur demande',
    ],
    protocols: [
      'Tracé, décollement et transposition de lambeaux cutanés (plastie en Z, en W, lambeau de rotation ou d’avancement)',
      'Exérèse elliptique de lésions cutanées et fermeture esthétique en deux plans (points profonds + surjet intradermique)',
      'Biopsies au punch, électrocoagulation et cryothérapie en dermatologie interventionnelle',
      'Essais R&D de dispositifs médicaux : injectables, aiguilles, lasers dermatologiques, pansements et colles cutanées',
    ],
    conservation: 'Frais (+2°C à +4°C) ou congelé bien à plat sous vide.',
    packaging: 'Sous vide à plat, à l’unité ou par lots.',
    faqs: [
      {
        question: 'Quel format de carré de peau choisir pour un atelier de chirurgie cutanée ?',
        answer:
          'Le format 15×15 cm est le plus demandé par les formateurs : il offre l’espace idéal pour réaliser une exérèse, deux plasties de lambeaux et plusieurs lignes de suture par participant.',
      },
    ],
    seoKeywords: [
      'où acheter de la peau de porc fraîche pour suture',
      'commander carré de peau porcine dermatologie',
      'peau de porc fraîche test R&D médical',
    ],
  },
  {
    id: 'bloc-coeur-poumon-trachee',
    name: 'Bloc cœur-poumon-trachée',
    shortName: 'Cœur-Poumon',
    h1Title: 'Bloc cœur-poumon-trachée',
    dimension: '45 cm',
    weight: '4500 g',
    priceHT: '34,00 € H.T.',
    categoryLabel: 'Chirurgie Thoracique & Étude de la Respiration',
    specialties: [
      'chirurgie-viscerale-vasculaire',
      'enseignement-superieur',
      'enseignement-secondaire',
    ],
    visualType: 'bloc-coeur-poumon',
    summary:
      'Ensemble complet avec trachée, poumons non percés et cœur, prêt à être intubé et gonflé.',
    introHook:
      'Comment commander un bloc cœur-poumon-trachée de porc que l’on peut réellement gonfler sans fuite d’air ? En abattoir classique, les poumons sont très souvent percés par les crochets ou entaillés lors de la découpe, ce qui empêche toute démonstration de ventilation.',
    clinicalDescription:
      'Chez Oral Tech Training, nos opérateurs prélèvent chaque bloc thoracique avec précaution pour garder l’enveloppe des poumons (la plèvre) intacte. Que ce soit pour brancher un respirateur en école de chirurgie thoracique, passer un fibroscope dans les bronches ou gonfler les poumons devant vos élèves en SVT, les lobes se déploient parfaitement.',
    practicalBenefits: [
      'Poumons garantis non percés assurant un gonflement net dès qu’on insuffle de l’air dans la trachée',
      'Continuité anatomique complète réunissant le larynx, la trachée, les bronches, les poumons et le cœur',
      'Permet d’observer en un seul bloc tous les rapports entre le cœur et l’appareil respiratoire',
    ],
    anatomicalStructures: [
      'Voies aériennes complètes : larynx, trachée annelée, bifurcation trachéale (carène) et arbre bronchique',
      'Poumons droit et gauche multilobaires recouverts d’une plèvre lisse et étanche',
      'Cœur en place entre les deux poumons avec ses vaisseaux pulmonaires',
    ],
    protocols: [
      'Chirurgie thoracique : résection d’un lobe pulmonaire (lobectomie), agrafage et suture bronchique',
      'Pneumologie : endoscopie bronchique souple ou rigide, intubation sélective et retrait de corps étrangers',
      'Démonstration de la mécanique ventilatoire et dissection en cours de biologie (collège, lycée, université)',
    ],
    conservation: 'Frais (+2°C à +4°C) conseillé pour conserver toute l’élasticité des poumons.',
    packaging: 'Grand sachet sous vide individuel en caisse isotherme.',
    faqs: [
      {
        question: 'Peut-on vraiment gonfler les poumons avec une pompe ou un ballon insufflateur ?',
        answer:
          'Oui, chaque bloc est contrôlé avant sa mise sous vide afin que vous puissiez intuber la trachée et observer le gonflement complet des lobes pulmonaires.',
      },
    ],
    seoKeywords: [
      'commander bloc cœur-poumon-trachée frais',
      'acheter poumon de porc entier gonflable biologie',
      'bloc cœur poumon porc chirurgie thoracique',
    ],
  },
  {
    id: 'segment-digestif',
    name: 'Estomac et intestin de porc frais lavés',
    shortName: 'Tube digestif',
    h1Title: 'Estomac et intestin de porc frais lavés',
    dimension: '30 cm',
    weight: '600 g',
    priceHT: '15,00 € H.T.',
    categoryLabel: 'Chirurgie Digestive, Suture & Agrafage',
    specialties: ['chirurgie-viscerale-vasculaire', 'rd-medtech'],
    visualType: 'digestif',
    summary:
      'Estomacs et segments d’intestin entièrement vidés et rincés à l’eau claire, prêts pour la suture ou l’agrafage mécanique.',
    introHook:
      'Vous cherchez où acheter des estomacs ou des intestins de porc déjà lavés pour organiser un cours de chirurgie digestive ? Préparer une séance de suture ou d’agrafage ne devrait jamais imposer aux formateurs deux heures de vidange et de nettoyage de viscères avant l’arrivée des internes.',
    clinicalDescription:
      'Nos préparateurs réalisent tout le nettoyage en amont : chaque poche d’estomac ou segment d’intestin grêle est entièrement vidé, purgé et rincé à l’eau claire avant d’être scellé sous vide. Vos pièces arrivent propres et sans odeur gênante, prêtes à rejoindre vos pelvi-trainers en école de chirurgie ou d’IBODE.',
    practicalBenefits: [
      '100 % vidés et rincés à l’eau claire : installation immédiate sur table ou en boîte de cœlioscopie',
      'Paroi souple et résistante offrant une excellente tenue du fil de suture et des agrafes mécaniques',
      'Étanchéité de la suture facile à vérifier en fin d’exercice par injection d’eau',
    ],
    anatomicalStructures: [
      'Paroi digestive complète (séreuse, musculeuse, sous-muqueuse et muqueuse) idéale pour le surjet',
      'Segments d’intestin grêle de calibre régulier ou estomacs entiers avec œsophage et pylore',
      'Disponible avec les vaisseaux du mésentère (pour exercer la ligature vasculaire) ou paré',
    ],
    protocols: [
      'Sutures et anastomoses digestives manuelles (points séparés ou surjet extramuqueux)',
      'Manipulation des pinces d’agrafage mécanique linéaires et circulaires (formation des internes et IBODE)',
      'Chirurgie gastrique, valve anti-reflux et chirurgie bariatrique (sleeve, bypass) sous cœlioscopie',
    ],
    conservation: 'Frais (+2°C à +4°C) ou congelé sous vide.',
    packaging: 'Sous vide par segment calibré ou par poste opératoire.',
    faqs: [
      {
        question: 'Peut-on commander séparément des estomacs entiers et des longueurs d’intestin ?',
        answer:
          'Bien sûr. Précisez lors de votre demande de devis si vous souhaitez des poches gastriques entières ou des segments d’intestin grêle calibrés de 30 à 50 cm.',
      },
    ],
    seoKeywords: [
      'acheter intestin de porc lavé chirurgie digestive',
      'estomac de porc frais pelvi-trainer cœlioscopie',
      'intestin de porc suture agrafage IBODE',
    ],
  },
  {
    id: 'oeil-porcin-frais',
    name: 'Œil de porc frais à cornée transparente',
    shortName: 'Œil frais',
    h1Title: 'Œil de porc frais à cornée transparente',
    dimension: '3 cm',
    weight: '25 g',
    priceHT: '6,50 € H.T.',
    categoryLabel: 'Ophtalmologie & Dissection de l’Œil',
    specialties: [
      'chirurgie-cervico-faciale',
      'enseignement-superieur',
      'enseignement-secondaire',
    ],
    visualType: 'oeil',
    summary:
      'Prélevé à froid avant échaudage et jamais congelé : la cornée et le cristallin restent parfaitement transparents.',
    introHook:
      'Vous cherchez où acheter des yeux de porc frais à cornée bien transparente pour un Wet Lab d’ophtalmologie ou une dissection de SVT ? Dans un circuit d’abattage standard, le passage dans l’eau brûlante (+60°C) ou la moindre congélation blanchit définitivement la cornée, rendant l’œil inutilisable.',
    clinicalDescription:
      'Pour vous garantir une clarté parfaite, nos yeux de porc sont prélevés à froid immédiatement avant le bain d’échaudage et ne sont jamais congelés. Expédiés entre +2°C et +4°C en emballage humide protecteur, ils conservent une cornée limpide et un cristallin transparent sous le microscope opératoire comme en salle de classe.',
    practicalBenefits: [
      'Cornée claire et non voilée permettant de voir nettement l’iris et le cristallin sous microscope',
      'Expédition garantie sans congélation pour conserver le tonus naturel du globe oculaire',
      'Globe complet livré avec le départ du nerf optique et les insertions des muscles oculomoteurs',
    ],
    anatomicalStructures: [
      'Cornée transparente, limbe et chambre antérieure remplie d’humeur aqueuse',
      'Iris, pupille, cristallin souple et transparent et humeur vitrée',
      'Paroi externe blanche résistante (sclérotique), choroïde, rétine et nerf optique',
    ],
    protocols: [
      'Chirurgie de la cataracte : incisions cornéennes, découpe de la capsule (capsulorhexis) et phacoémulsification',
      'Points de suture microchirurgicaux de la cornée (fil nylon 10/0) et chirurgie du glaucome sous microscope',
      'Dissection de l’œil et observation des milieux transparents et de l’effet loupe du cristallin en biologie',
    ],
    conservation:
      'À conserver uniquement au réfrigérateur (+2°C à +4°C, ne jamais congeler). Utilisation conseillée dans les 24h à 48h après réception.',
    packaging: 'Conditionnement humide protecteur antichoc en caisse isotherme.',
    faqs: [
      {
        question: 'Comment commander un lot d’yeux de porc frais pour un CHU, une faculté ou un lycée ?',
        answer:
          'Indiquez-nous la date exacte de votre séance : les yeux sont prélevés à froid la veille de l’envoi pour vous garantir une cornée parfaitement claire le jour J.',
      },
    ],
    seoKeywords: [
      'où acheter des yeux de porc frais pour dissection',
      'commander œil de porc frais ophtalmologie',
      'lot d’yeux de porc cornée transparente Chorus Pro',
    ],
  },
  {
    id: 'larynx-trachee',
    name: 'Larynx et trachée de porc',
    shortName: 'Larynx',
    h1Title: 'Larynx et trachée de porc',
    dimension: '22 cm',
    weight: '350 g',
    priceHT: '14,00 € H.T.',
    categoryLabel: 'Chirurgie ORL & Trachéotomie d’Urgence',
    specialties: ['chirurgie-cervico-faciale'],
    visualType: 'larynx',
    summary:
      'Préparé avec la peau du cou pour s’entraîner à la trachéotomie d’urgence, ou nettoyé pour opérer les cordes vocales.',
    introHook:
      'Comment commander des larynx de porc frais pour organiser une formation de trachéotomie d’urgence ou de microchirurgie ORL ? Par la taille de ses cartilages et la souplesse de ses cordes vocales, le larynx porcin est le modèle biologique le plus proche du larynx humain.',
    clinicalDescription:
      'Nous préparons cette pièce de deux façons selon l’objectif de votre cours : soit en gardant la peau et les muscles du cou pour apprendre à palper les repères au doigt et réaliser une trachéotomie ou une cricothyroïdotomie d’urgence, soit parée pour être fixée sur support et opérer les cordes vocales sous microscope.',
    practicalBenefits: [
      'Version avec peau cervicale idéale pour palper les cartilages et pratiquer l’ouverture d’urgence des voies aériennes',
      'Cordes vocales souples et hydratées pour s’exercer à la chirurgie fine de la voix (phonochirurgie)',
      'Trachée attenante permettant de glisser une canule de trachéotomie ou une sonde d’intubation',
    ],
    anatomicalStructures: [
      'Os hyoïde, épiglotte et cartilages du larynx (thyroïde, cricoïde, aryténoïdes)',
      'Membrane crico-thyroïdienne nettement repérable au toucher entre les cartilages',
      'Cordes vocales souples et premiers anneaux de la trachée',
    ],
    protocols: [
      'Trachéotomie chirurgicale et cricothyroïdotomie d’urgence à travers la peau cervicale',
      'Microchirurgie des cordes vocales sous microscope opératoire (exérèse, injection, suture)',
      'Suture et reconstruction de la trachée et entraînement à la gestion des voies aériennes difficiles',
    ],
    conservation: 'Frais (+2°C à +4°C).',
    packaging: 'Sous vide individuel.',
    faqs: [
      {
        question: 'Comment choisir entre le larynx avec peau et le larynx nettoyé ?',
        answer:
          'Lors de votre demande de devis, précisez simplement « avec peau du cou » pour un atelier de trachéotomie d’urgence, ou « larynx paré » pour la chirurgie des cordes vocales.',
      },
    ],
    seoKeywords: [
      'commander larynx de porc frais ORL',
      'modèle biologique formation trachéotomie',
      'pièce anatomique chirurgie cordes vocales',
    ],
  },
  {
    id: 'demi-tete-oreille',
    name: 'Demi-tête de porc',
    shortName: 'Demi-tête',
    h1Title: 'Demi-tête de porc',
    dimension: '35 cm',
    weight: '2200 g',
    priceHT: '29,00 € H.T.',
    categoryLabel: 'ORL, Chirurgie de l’Oreille & Thanatopraxie',
    specialties: ['chirurgie-cervico-faciale', 'chirurgie-cutanee-suture'],
    visualType: 'demi-tete',
    summary:
      'Demi-tête coupée dans la longueur avec peau souple et oreille entière pour l’ORL, l’otoplastie et la thanatopraxie.',
    introHook:
      'Vous cherchez où acheter des demi-têtes de porc fraîches pour un cours d’endoscopie ORL, de chirurgie de l’oreille ou une école de thanatopraxie ? Sur une tête issue d’un abattoir classique, la peau est durcie par l’échaudage et la découpe écrase souvent l’intérieur du nez.',
    clinicalDescription:
      'Nos demi-têtes sont sélectionnées avant tout traitement thermique agressif et sciées proprement sur la ligne médiane. Elles offrent d’un côté un accès direct aux fosses nasales et aux sinus, et de l’autre une peau faciale souple avec un pavillon d’oreille complet : un support polyvalent prêt dès l’ouverture du sachet.',
    practicalBenefits: [
      'Peau du visage souple et non brûlée permettant les sutures esthétiques fines et les points invisibles',
      'Pavillon de l’oreille entier avec tout son cartilage pour s’entraîner à l’otoplastie et au prélèvement de greffons',
      'Coupe longitudinale nette exposant clairement les cornets nasaux et les sinus sans les écraser',
    ],
    anatomicalStructures: [
      'Peau et tissus mous du visage, joues, lèvres et reliefs osseux sous-jacents',
      'Oreille externe complète avec son cartilage élastique et son conduit auditif',
      'Fosses nasales en coupe médiane : cornets inférieur, moyen et supérieur, méats et cavités sinusiennes',
    ],
    protocols: [
      'Chirurgie esthétique et réparatrice de l’oreille (otoplastie) et récolte de cartilage pour la rhinoplastie',
      'Chirurgie endonasale sous caméra (endoscopie ORL) : chirurgie des cornets et ouverture des sinus',
      'Enseignement en écoles de thanatopraxie : restauration faciale, sutures dissimulées, ligatures et application de cires',
    ],
    conservation: 'Frais (+2°C à +4°C) ou congelé.',
    packaging: 'Sous vide individuel haute résistance.',
    faqs: [
      {
        question: 'Peut-on commander uniquement des oreilles de porc fraîches sans la demi-tête ?',
        answer:
          'Oui, nous préparons également des lots d’oreilles de porc fraîches seules, prélevées larges à la base avec tout leur cartilage, pour vos ateliers d’otoplastie ou de suture.',
      },
    ],
    seoKeywords: [
      'commander demi-tête de porc coupe sagittale',
      'acheter oreille de porc fraîche otoplastie',
      'pièce anatomique formation thanatopraxie',
    ],
  },
  {
    id: 'os-porcin-broye',
    name: 'Os de porc broyé',
    shortName: 'Os broyé',
    h1Title: 'Os de porc broyé',
    dimension: 'Calibré',
    weight: 'Sur demande',
    priceHT: '15,00 € H.T.',
    categoryLabel: 'Greffes Osseuses & Comblement de Sinus',
    specialties: ['chirurgie-dentaire', 'rd-medtech'],
    visualType: 'os-broye',
    summary:
      'Copeaux d’os naturel frais pour s’entraîner aux comblements osseux (ROG) et aux soulevés de sinus à moindre coût.',
    introHook:
      'Comment faire pratiquer le comblement osseux et le Sinus Lift à 20 dentistes sans exploser le budget de votre formation ? Ouvrir de vrais flacons de biomatériaux stériles destinés aux patients coûte une fortune, tandis que la semoule ou les billes en plastique n’offrent pas du tout la cohésion d’un vrai greffon.',
    clinicalDescription:
      'Acheter de l’os de porc broyé frais chez Oral Tech Training est la solution la plus réaliste et économique. Préparé en petits copeaux d’os naturel calibrés, il s’humidifie au sérum physiologique et se compacte à la spatule exactement comme de l’os autogène récolté au bloc opératoire.',
    practicalBenefits: [
      'Divise par dix votre budget pédagogique par rapport aux flacons de substituts osseux cliniques',
      'Vraie cohésion d’os naturel lorsqu’on l’hydrate et qu’on le foule dans la cavité osseuse ou sous le sinus',
      'Conditionné en petits sachets-doses individuels prêts à être distribués sur le plateau de chaque participant',
    ],
    anatomicalStructures: [
      'Copeaux et granules d’os cortico-spongieux de porc 100 % naturel et frais',
      'Granulométrie adaptée au comblement de sinus, d’alvéoles et aux greffes autour des implants',
    ],
    protocols: [
      'Régénération Osseuse Guidée (ROG) autour d’implants avec pose de membrane et fixation par pins ou vis',
      'Comblement de la cavité sous la membrane lors des exercices de Sinus Lift latéral ou crestal',
      'Préservation alvéolaire après extraction dentaire et comblement de défauts osseux',
    ],
    conservation: 'Frais (+2°C à +4°C) ou congelé en sachets-doses individuels.',
    packaging: 'Sachets sous vide calibrés par poste chirurgical.',
    faqs: [
      {
        question: 'Quelle quantité d’os broyé faut-il prévoir par dentiste pour un atelier ?',
        answer:
          'Un sachet de 5 à 10 grammes par participant suffit largement pour réaliser plusieurs comblements de sinus et greffes osseuses au cours de la journée.',
      },
    ],
    seoKeywords: [
      'acheter os de porc broyé implantologie',
      'copeaux osseux porcins exercice ROG sinus lift',
      'substitut osseux entraînement chirurgie dentaire',
    ],
  },
  {
    id: 'decoupe-sur-mesure',
    name: 'Vous n’avez pas trouvé votre produit ? Découpe sur-mesure',
    shortName: 'Découpe sur-mesure',
    h1Title: 'Vous n’avez pas trouvé votre produit ? Découpe sur-mesure',
    dimension: 'Sur-mesure',
    weight: 'Sur demande',
    priceHT: 'Sur devis H.T.',
    categoryLabel: 'Préparation Anatomique à la Demande & R&D',
    specialties: [
      'chirurgie-dentaire',
      'chirurgie-viscerale-vasculaire',
      'chirurgie-cervico-faciale',
      'chirurgie-cutanee-suture',
      'rd-medtech',
      'enseignement-superieur',
      'enseignement-secondaire',
    ],
    visualType: 'sur-mesure',
    summary:
      'Vous avez besoin d’un organe particulier, d’une dimension précise ou d’une coupe spéciale ? Nous le préparons sur cahier des charges.',
    introHook:
      'Vous cherchez un fournisseur capable de préparer une pièce anatomique porcine qui ne figure pas dans ce catalogue, ou coupée selon des dimensions bien précises ? Chez Oral Tech Training, nous ne vendons pas des produits figés : chaque commande est découpée à la main sur-mesure dans notre atelier partenaire de Clermont-Ferrand.',
    clinicalDescription:
      'Que vous souhaitiez commander une longue portion d’aorte, un segment de colonne vertébrale, une articulation complète (genou, épaule, hanche), une paroi abdominale ou des échantillons calibrés au centimètre près pour vos bancs d’essai R&D, nos préparateurs suivent scrupuleusement votre cahier des charges.',
    practicalBenefits: [
      'Prélèvement et découpe réalisés à la main selon vos dimensions exactes et votre spécialité',
      'Conservation à la demande de structures habituellement retirées (vaisseaux très longs, nerfs, muscles, peau)',
      'Conditionnement sous vide personnalisé par poste opératoire, par binôme ou par campagne de tests R&D',
    ],
    anatomicalStructures: [
      'Pièces osseuses et articulaires sur demande : rachis, gril costal, fémur, articulation du genou ou de l’épaule',
      'Axes vasculaires de grande longueur : aorte complète, carotides, bifurcation iliaque, veines caves',
      'Blocs multi-organes, appareil urogénital ou parois musculo-cutanées selon vos consignes',
    ],
    protocols: [
      'Bancs d’essai R&D MedTech, tests mécaniques et dossiers de validation réglementaire (marquage CE / FDA)',
      'Formations chirurgicales spécialisées (orthopédie, chirurgie du rachis, robotique, urologie, gynécologie)',
      'Projets de recherche académique en biomécanique ou en imagerie médicale',
    ],
    conservation:
      'Livraison en frais (+2°C à +4°C) ou congelé selon les besoins de votre protocole.',
    packaging: 'Mise sous vide sur-mesure et expédition express en caisse isotherme.',
    faqs: [],
    seoKeywords: [
      'découpe anatomique porcine sur-mesure',
      'fournisseur organes de porc R&D sur-mesure',
      'commande pièce anatomique spécifique chirurgie',
    ],
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'chirurgie-dentaire',
    number: '01',
    title: 'Chirurgie dentaire',
    shortTitle: 'Chirurgie dentaire',
    cardHook:
      'Mâchoires inférieures, supérieures et os broyé frais pour remplacer avantageusement les mâchoires en résine.',
    h1: 'Chirurgie dentaire & Implantologie',
    subtitle:
      'Vous cherchez où acheter des mâchoires de porc fraîches pour organiser un TP dentaire ou un séminaire d’implantologie ? Recevez vos lots prêts à l’emploi partout en France.',
    introHeading: 'Pourquoi opérer sur de vraies mâchoires fraîches plutôt que sur du plastique ?',
    audiences: [
      'Facultés de chirurgie dentaire & Diplômes Universitaires (DU) d’implantologie',
      'Organismes de formation continue & séminaires pratiques Hands-On',
      'Congrès dentaires et démonstrations de fabricants d’implants',
      'Sociétés scientifiques de parodontologie, d’endodontie et de chirurgie orale',
    ],
    introParagraph1:
      'Tous les formateurs en odontologie font le même constat : sur une mâchoire synthétique en résine, la fausse gencive en silicone se déchire dès qu’on serre un point de suture sous tension, et le foret chauffe dans le plastique sans jamais reproduire la différence entre l’os dur de surface et l’os spongieux.',
    introParagraph2:
      'Commander vos mâchoires de porc chez Oral Tech Training vous libère de toute la logistique : préparées sur commande à Clermont-Ferrand, nos mandibules, demi-mâchoires et maxillaires arrivent frais, rincés, sciés bien à plat et mis sous vide. Vous ouvrez vos caisses isothermes et vos confrères commencent immédiatement à pratiquer.',
    clinicalDomains: [
      {
        title: 'Implantologie & Greffes Osseuses',
        items: [
          'Forage et pose d’implants dentaires avec un ressenti fidèle de la densité osseuse et de la stabilité primaire',
          'Régénération Osseuse Guidée (ROG) avec notre os de porc broyé frais, pose de membranes et clous de fixation',
          'Soulevé de sinus (Sinus Lift) et décollement minutieux de la membrane du sinus aux curettes',
          'Prélèvement de greffons osseux sur la branche montante ou la symphyse',
        ],
      },
      {
        title: 'Parodontologie & Chirurgie Muco-Gingivale',
        items: [
          'Incisions franches au bistouri, décollement du périoste à la rugine et incisions de décharge',
          'Prélèvement de greffon de gencive (conjonctif enfoui ou épithélio-conjonctif) sur le palais du maxillaire',
          'Lambeaux déplacés, tunnelisation et sutures sous tension sans déchirure gingivale',
        ],
      },
      {
        title: 'Chirurgie Orale & Endodontie',
        items: [
          'Extractions chirurgicales de dents incluses, alvéolectomie et séparation de racines',
          'Chirurgie du bout de la racine (apicectomie) et repérage du nerf alvéolaire inférieur et du nerf mentonnier',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'Une logistique clé en main pour vos facultés et séminaires privés',
      points: [
        {
          label: 'Livraison directe sur le lieu du cours',
          text: 'Expédition en caisse isotherme (+2°C à +4°C) dans votre faculté, centre de congrès ou hôtel de séminaire.',
        },
        {
          label: 'Spécimens prêts à poser sur table',
          text: 'Aucune décongélation à anticiper le matin de la formation : vos mâchoires arrivent fraîches, souples et propres.',
        },
        {
          label: 'Devis sous 24h & Chorus Pro',
          text: 'Traitement rapide des bons de commande universitaires (Chorus Pro) comme des règlements d’organismes privés.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Base sciée bien à plat',
        description:
          'Le dessous de la mandibule est coupé droit afin que la pièce reste parfaitement stable sur le plateau pendant le forage.',
      },
      {
        title: 'Conditionnement par poste de travail',
        description:
          'Sachets sous vide à l’unité ou par binôme permettant d’installer une salle de 25 dentistes en quelques minutes.',
      },
      {
        title: 'Origine France & Statut C3',
        description:
          'Pièces issues de la filière porcine française, contrôlées par les services vétérinaires et certifiées Catégorie 3.',
      },
    ],
    faqs: [
      {
        question: 'Où acheter des mâchoires de porc fraîches pour une formation dentaire ou un séminaire Hands-On ?',
        answer:
          'Oral Tech Training livre partout en France des lots de 10 à plus de 100 mâchoires de porc fraîches calibrées, nettoyées et prêtes à l’emploi pour vos formations d’implantologie et de parodontologie.',
      },
      {
        question: 'Quelle pièce choisir pour un programme mêlant implantologie et greffe de gencive ?',
        answer:
          'Pour poser des implants et suturer des lambeaux, la demi-mâchoire inférieure (hémi-mandibule) est idéale. Si votre cours inclut un prélèvement au palais ou un sinus lift, associez-lui une mâchoire supérieure.',
      },
      {
        question: 'Quel délai prévoir pour réserver nos pièces anatomiques ?',
        answer:
          'Nous conseillons de réserver 2 à 3 semaines avant votre date. En cas d’urgence, nous livrons en 24h sur le secteur Clermont-Ferrand / Lyon / Saint-Étienne et en 48h dans le reste de la France.',
      },
    ],
    seoKeywords: [
      'où acheter des mâchoires de porc pour TP dentaire',
      'commander lot de mandibules de porc implantologie',
      'fournisseur mâchoires de porc formation dentaire',
    ],
    visualType: 'mandibule',
  },
  {
    id: 'chirurgie-viscerale-vasculaire',
    number: '02',
    title: 'Chirurgie vasculaire',
    shortTitle: 'Chirurgie vasculaire',
    cardHook:
      'Cœurs à vaisseaux longs, blocs cœur-poumons et tubes digestifs lavés prêts pour la simulation.',
    h1: 'Chirurgie vasculaire & Viscérale',
    subtitle:
      'Où commander des organes de porc frais, lavés et prélevés avec de longs vaisseaux pour vos séances de simulation chirurgicale ou de cœlioscopie ?',
    introHeading: 'Des viscères propres et des vaisseaux longs, prêts pour le centre de simulation',
    audiences: [
      'Écoles de chirurgie universitaires & centres de simulation médicale (CESSIM)',
      'Écoles d’infirmiers de bloc opératoire (IBODE)',
      'Internes de chirurgie vasculaire, cardiaque, thoracique, digestive et urologique',
      'Fabricants d’instruments de cœlioscopie, d’agrafeuses et de fils de suture',
    ],
    introParagraph1:
      'S’approvisionner auprès d’un abattoir classique pour une séance de chirurgie réserve souvent de mauvaises surprises : cœurs fendus en deux par l’inspection sanitaire, artères coupées au ras de l’organe, vésicules biliaires arrachées et intestins non vidés.',
    introParagraph2:
      'Chez Oral Tech Training, chaque pièce est préparée selon vos besoins opératoires : nous gardons un maximum de longueur sur l’aorte, les veines caves, l’uretère et les vaisseaux du rein, nous préservons la vésicule biliaire sur le foie, et nous vidons et rinçons entièrement chaque estomac et chaque intestin avant de les mettre sous vide.',
    clinicalDomains: [
      {
        title: 'Chirurgie Vasculaire & Cardiaque',
        items: [
          'Sutures artérielles et veineuses, pose de patchs et anastomoses vasculaires sous loupes',
          'Entraînement au pontage coronarien sur cœur de porc frais garanti non fendu',
          'Réparation ou remplacement des valves cardiaques et chirurgie de la crosse aortique',
        ],
      },
      {
        title: 'Chirurgie Digestive & Cœlioscopie',
        items: [
          'Anastomoses digestives à la main (surjet) ou avec des pinces d’agrafage mécanique linéaires et circulaires',
          'Ablation de la vésicule biliaire (cholécystectomie) sous cœlioscopie sur foie frais avec vésicule intacte',
          'Sutures gastriques et exercices de chirurgie bariatrique en boîte de cœlioscopie (pelvi-trainer)',
        ],
      },
      {
        title: 'Chirurgie Thoracique & Urologique',
        items: [
          'Lobectomie pulmonaire, agrafage et suture des bronches sur bloc cœur-poumon ventilable',
          'Dissection des vaisseaux du rein, clampage pédiculaire, néphrectomie partielle et suture de l’uretère',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'Conçu pour simplifier le travail des formateurs et préparateurs',
      points: [
        {
          label: 'Estomacs et intestins déjà lavés',
          text: 'Nos segments digestifs arrivent entièrement vidés et rincés à l’eau claire, sans odeur et prêts à entrer en salle de simulation.',
        },
        {
          label: 'Compatibles avec les bistouris électriques',
          text: 'Le tissu frais conduit naturellement le courant pour utiliser vos bistouris électriques, la thermofusion et les ultrasons.',
        },
        {
          label: 'Facturation Chorus Pro',
          text: 'Gestion administrative simple et rapide avec les CHU, facultés de médecine et écoles d’IBODE.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Pédicules vasculaires longs',
        description:
          'Artères, veines et uretères sont coupés à distance de l’organe pour poser facilement vos clamps chirurgicaux.',
      },
      {
        title: 'Élasticité naturelle du tissu frais',
        description:
          'Livraison réfrigérée (+2°C à +4°C) qui préserve toute la souplesse des parois artérielles et digestives.',
      },
      {
        title: 'Traçabilité sanitaire C3',
        description:
          'Certificat vétérinaire fourni conformément aux chartes d’hygiène des hôpitaux et universités.',
      },
    ],
    faqs: [
      {
        question: 'Où commander des organes de porc propres pour équiper des simulateurs de cœlioscopie (pelvi-trainers) ?',
        answer:
          'Oral Tech Training livre partout en France des foies avec vésicule intacte, des rognons à vaisseaux longs et des estomacs ou intestins lavés, prêts à être installés dans vos boîtes de cœlioscopie.',
      },
      {
        question: 'Faut-il rincer les estomacs et les intestins à la réception ?',
        answer:
          'Non : ils sont entièrement vidés, purgés et rincés à l’eau claire avant la mise sous vide. Vous pouvez les disposer directement sur vos postes de travail.',
      },
    ],
    seoKeywords: [
      'où acheter organes de porc pour pelvi-trainer',
      'commander cœur de porc gros vaisseaux chirurgie vasculaire',
      'fournisseur pièces anatomiques école de chirurgie IBODE',
    ],
    visualType: 'coeur',
  },
  {
    id: 'chirurgie-cervico-faciale',
    number: '03',
    title: 'Chirurgie cervico-faciale',
    shortTitle: 'Chirurgie cervico-faciale',
    cardHook:
      'Yeux frais à cornée claire, larynx pour trachéotomie et demi-têtes coupées dans la longueur.',
    h1: 'Chirurgie cervico-faciale, ORL & Ophtalmologie',
    subtitle:
      'Comment se procurer des yeux de porc frais jamais congelés à cornée transparente, des larynx complets et des demi-têtes à peau souple pour vos formations ?',
    introHeading: 'Un prélèvement à froid indispensable pour la microchirurgie et la reconstruction',
    audiences: [
      'Services hospitalo-universitaires (CHU) & internes d’ORL, d’Ophtalmologie et de Chirurgie Maxillo-Faciale',
      'Diplômes Universitaires de microchirurgie oculaire, de chirurgie de la voix et d’endoscopie nasale',
      'Écoles de thanatopraxie et formateurs en restauration faciale',
    ],
    introParagraph1:
      'En microchirurgie ophtalmologique comme en ORL, le mode de prélèvement change tout : un œil passé dans le bain d’échaudage de l’abattoir ou au congélateur présente une cornée blanche opaque inutilisable sous microscope, et une peau brûlée interdit toute suture esthétique fine.',
    introParagraph2:
      'Pour éviter cet écueil, nos yeux de porc sont prélevés à froid avant l’échaudage et expédiés uniquement en frais positif (+2°C à +4°C). Nos larynx et demi-têtes sont quant à eux préparés sur-mesure (avec peau cervicale ou parés) selon le déroulé exact de votre formation.',
    clinicalDomains: [
      {
        title: 'Microchirurgie Ophtalmologique',
        items: [
          'Chirurgie de la cataracte : incisions cornéennes, découpe du capsulorhexis et phacoémulsification sur cristallin clair',
          'Points de suture cornéens et scléraux au fil 10/0 sous microscope opératoire',
          'Chirurgie du glaucome (trabéculectomie) et greffes de cornée',
        ],
      },
      {
        title: 'ORL, Cordes Vocales & Trachéotomie',
        items: [
          'Trachéotomie chirurgicale et cricothyroïdotomie d’urgence sur larynx avec peau du cou',
          'Microchirurgie des cordes vocales sous microscope et suture de la trachée',
          'Chirurgie endonasale sous caméra sur demi-tête coupée proprement sur la ligne médiane',
        ],
      },
      {
        title: 'Chirurgie de l’Oreille & Thanatopraxie',
        items: [
          'Chirurgie des oreilles décollées (otoplastie) et prélèvement de cartilage sur pavillon auriculaire frais',
          'Formation en thanatopraxie : sutures restauratrices invisibles, ligatures et remodelage facial sur demi-tête',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'Fraîcheur garantie pour vos Wet Labs de microchirurgie',
      points: [
        {
          label: 'Yeux 100 % frais (zéro congélation)',
          text: 'Prélevés la veille de l’envoi et maintenus entre +2°C et +4°C en milieu humide pour garantir la transparence de la cornée.',
        },
        {
          label: 'Préparation à la demande',
          text: 'Larynx paré pour montage sur support ou larynx complet avec peau et muscles pour simuler l’urgence respiratoire.',
        },
        {
          label: 'Livraison partout en France',
          text: 'Approvisionnement régulier des CHU, facultés de médecine, congrès d’ophtalmologie et écoles de thanatopraxie.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Prélèvement à froid avant échaudage',
        description:
          'Préserve à la fois la clarté optique de la cornée et la souplesse naturelle de la peau du visage et de l’oreille.',
      },
      {
        title: 'Coupe médiane franche',
        description:
          'Demi-têtes sciées avec précision sans écraser les cornets nasaux ni les cavités des sinus.',
      },
      {
        title: 'Conformité vétérinaire C3',
        description:
          'Spécimens contrôlés et accompagnés de leur traçabilité sanitaire réglementaire.',
      },
    ],
    faqs: [
      {
        question: 'Comment garantir la transparence de la cornée des yeux de porc le jour du Wet Lab ?',
        answer:
          'Nous prélevons les yeux à froid avant échaudage la veille de l’expédition et les livrons entre +2°C et +4°C sans jamais les congeler. Utilisés sous 24h à 48h, ils gardent une cornée parfaitement transparente sous microscope.',
      },
      {
        question: 'Pourquoi les écoles de thanatopraxie utilisent-elles vos demi-têtes de porc ?',
        answer:
          'Prélevée sans brûlure thermique, la peau faciale porcine offre une épaisseur et une souplesse très proches du visage humain pour exercer les sutures invisibles et l’application de cires.',
      },
    ],
    seoKeywords: [
      'où acheter yeux de porc frais ophtalmologie',
      'commander larynx de porc formation trachéotomie',
      'demi-tête de porc ORL thanatopraxie',
    ],
    visualType: 'oeil',
  },
  {
    id: 'chirurgie-cutanee-suture',
    number: '04',
    title: 'Chirurgie cutanée',
    shortTitle: 'Chirurgie cutanée',
    cardHook:
      'Pieds de porc frais et carrés de peau découpés bien à plat pour apprendre les sutures, lambeaux et tendons.',
    h1: 'Chirurgie cutanée & Ateliers de Suture',
    subtitle:
      'Vous cherchez où acheter des pieds de porc frais ou des carrés de peau découpés à plat pour organiser un atelier de suture en faculté, en IFSI ou en congrès ?',
    introHeading: 'La vraie résistance du derme sous l’aiguille, bien loin des coussins en silicone',
    audiences: [
      'Facultés de médecine (externes, internes) & formations de médecine d’urgence',
      'IFSI, formations d’Infirmiers en Pratique Avancée (IPA) & écoles de sages-femmes',
      'Séminaires de dermatologie interventionnelle et de chirurgie plastique',
      'Congrès médicaux et associations étudiantes de chirurgie',
    ],
    introParagraph1:
      'Tous les formateurs qui ont déjà encadré un atelier de suture sur des tapis en mousse ou en silicone connaissent leurs limites : le plastique se déchire dès qu’on serre un nœud sous tension et ne permet aucun décollement sous-cutané.',
    introParagraph2:
      'La peau de porc fraîche offre une résistance à l’aiguille et une élasticité très proches de la peau humaine. Nous vous livrons soit des lots de pieds de porc prêts à l’emploi (idéals pour suturer sous tension et réparer les tendons), soit des carrés de peau découpés bien à plat selon vos dimensions (10×10, 15×15 ou 20×30 cm) pour dessiner et déplacer des lambeaux.',
    clinicalDomains: [
      {
        title: 'Points de Suture & Gestes d’Urgence',
        items: [
          'Points simples séparés, point matelassier de Blair-Donati, point d’angle et point hémostatique en X',
          'Surjet intradermique continu, points profonds inversés et affrontement sans tension des bords de la plaie',
        ],
      },
      {
        title: 'Dermatologie Chirurgicale & Lambeaux',
        items: [
          'Biopsies au punch, exérèses elliptiques et décollement sous-cutané aux ciseaux',
          'Tracé et déplacement de lambeaux locaux (plastie en Z, en W, rotation ou avancement) sur carré de peau plat',
        ],
      },
      {
        title: 'Réparation des Tendons',
        items: [
          'Abord des gaines et suture des tendons fléchisseurs et extenseurs sur pied de porc (points de Kessler, Bunnell)',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'De 10 à 200 pièces livrées prêtes à installer sur vos tables',
      points: [
        {
          label: 'Lots calibrés pour grandes promotions',
          text: 'Que vous formiez 15 internes ou 150 étudiants en médecine ou en IFSI, chaque participant dispose d’une pièce propre et régulière.',
        },
        {
          label: 'Carrés de peau découpés bien à plat',
          text: 'Nos carrés de peau conservent leur couche sous-cutanée pour reposer naturellement à plat sur la table.',
        },
        {
          label: 'Stockage souple',
          text: 'Livrés frais (+2°C à +4°C) sous vide, et congelables si vos séances s’étalent sur plusieurs semaines.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Peau souple non brûlée',
        description:
          'Préparation soignée afin que l’aiguille courbe pénètre franchement dans le derme sans tordre le porte-aiguille.',
      },
      {
        title: 'Vrai décollement sous-cutané',
        description:
          'La couche sous-cutanée permet d’apprendre à décoller les bords de la plaie aux ciseaux avant la suture en deux plans.',
      },
      {
        title: 'Conditionnement propre sous vide',
        description:
          'Distribution rapide et hygiénique en salle de cours universitaire ou en espace congrès.',
      },
    ],
    faqs: [
      {
        question: 'Faut-il choisir le pied de porc ou le carré de peau découpé à plat ?',
        answer:
          'Le pied de porc est très économique et idéal pour apprendre les points sous tension et la suture des tendons. Le carré de peau à plat (15×15 cm) offre un confort supérieur pour la dermatologie (biopsies, retrait de lésions) et les lambeaux cutanés.',
      },
      {
        question: 'Comment commander un lot de 50 ou 100 pièces pour une faculté ou un IFSI ?',
        answer:
          'Envoyez votre demande de devis en précisant l’effectif et la date : nous vous répondons sous 24h et acceptons les bons de commande administratifs Chorus Pro.',
      },
    ],
    seoKeywords: [
      'où acheter des pieds de porc pour atelier suture',
      'commander carré de peau porcine fraîche dermatologie',
      'lot de pieds de porc frais faculté médecine IFSI',
    ],
    visualType: 'pied',
  },
  {
    id: 'rd-medtech',
    number: '05',
    title: 'Recherche et développement',
    shortTitle: 'Recherche et développement',
    cardHook:
      'Pièces anatomiques préparées sur cahier des charges pour tester vos implants, robots et instruments médicaux.',
    h1: 'Recherche & Développement MedTech',
    subtitle:
      'Quel fournisseur d’organes et de tissus porcins frais choisir pour vos bancs d’essai R&D, validations précliniques et démonstrations chirurgicales ?',
    introHeading: 'Testez vos dispositifs médicaux sur tissu frais, dans le respect de la règle des 3R',
    audiences: [
      'Bureaux d’études MedTech & ingénieurs en R&D biomédicale',
      'Fabricants d’implants (dentaires, orthopédiques, rachidiens, cardiovasculaires)',
      'Laboratoires de recherche publics et académiques (CNRS, Inserm, CHU, écoles d’ingénieurs)',
      'Équipes cliniques et réglementaires (dossiers de marquage CE / FDA et sessions chirurgiens)',
    ],
    introParagraph1:
      'Pour mesurer la tenue d’une vis osseuse à l’arrachement, vérifier la diffusion thermique d’un bistouri électrique ou étalonner un robot chirurgical, les mousses synthétiques ne restituent ni la résistance ni la conductivité d’un vrai tissu vivant.',
    introParagraph2:
      'En lien direct avec notre atelier partenaire Distriporc à Clermont-Ferrand, nous découpons vos échantillons sur cahier des charges (épaisseur d’os, calibre vasculaire, surface de peau ou organe complet). Issus de la filière alimentaire contrôlée, ces tissus vous permettent d’enchaîner vos essais en laboratoire sans recourir à l’expérimentation sur animal vivant (principe éthique des 3R).',
    clinicalDomains: [
      {
        title: 'Essais Mécaniques & Implants',
        items: [
          'Mesure du couple de vissage, de la stabilité primaire et de la résistance à l’arrachement d’implants dentaires, rachidiens ou orthopédiques',
          'Qualification mécanique de fils de suture, agrafes, ancres ligamentaires, colles chirurgicales et patchs hémostatiques',
        ],
      },
      {
        title: 'Robotique, Énergies Chirurgicales & Capteurs',
        items: [
          'Tests de bistouris électriques, ultrasons, radiofréquence et lasers sur foie, rognon ou muscle frais',
          'Étalonnage de robots chirurgicaux, systèmes de navigation optique et capteurs de retour de force',
        ],
      },
      {
        title: 'Dossiers Réglementaires (CE / FDA) & Sessions KOL',
        items: [
          'Tests d’aptitude à l’utilisation par les praticiens pour vos dossiers réglementaires',
          'Fourniture de séries homogènes pour faire essayer vos nouveaux ancillaires aux chirurgiens référents (KOL)',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'Réactivité et traçabilité pour vos équipes d’ingénieurs',
      points: [
        {
          label: 'Découpe selon vos plans et cotes',
          text: 'Respect de vos dimensions et sélection de pièces de même gabarit pour garantir la régularité de vos mesures.',
        },
        {
          label: 'Livraison express 24h / 48h',
          text: 'Acheminement réfrigéré (+2°C à +4°C) pour enchaîner vos campagnes de tests au laboratoire sans attente.',
        },
        {
          label: 'Conformité 3R & Chorus Pro',
          text: 'Certificat sanitaire Catégorie 3 fourni et facturation adaptée aux entreprises MedTech, au CNRS et à l’Inserm.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Propriétés mécaniques et électriques préservées',
        description:
          'Tissus expédiés frais sans formol ni congélation pour garder leur souplesse et leur conductivité naturelle.',
      },
      {
        title: 'Lots réguliers d’une série à l’autre',
        description:
          'Sélection soignée des pièces pour assurer la reproductibilité de vos campagnes d’essais.',
      },
      {
        title: 'Interlocutrice dédiée & confidentialité',
        description:
          'Jessica Fauvey coordonne personnellement votre cahier des charges en toute confidentialité industrielle.',
      },
    ],
    faqs: [
      {
        question: 'Faut-il saisir un comité d’éthique animale pour utiliser vos tissus en R&D ?',
        answer:
          'Non. Nos pièces étant valorisées à partir d’animaux abattus dans la filière alimentaire contrôlée (sous-produits de Catégorie 3), elles ne relèvent pas de l’expérimentation sur animal vivant et s’inscrivent pleinement dans la démarche éthique des 3R.',
      },
      {
        question: 'Pouvez-vous façonner une pièce anatomique spécifique qui ne figure pas au catalogue ?',
        answer:
          'C’est le cœur de notre métier. Transmettez-nous vos besoins (type de tissu, dimensions, structures à conserver) : nous validons la faisabilité avec nos préparateurs et vous adressons un devis sous 24h.',
      },
    ],
    seoKeywords: [
      'fournisseur organes de porc R&D MedTech',
      'commander tissu biologique frais banc d’essai médical',
      'modèle porcin règle des 3R tests précliniques',
    ],
    visualType: 'foie',
  },
  {
    id: 'enseignement-superieur',
    number: '06',
    title: 'Enseignement Supérieur, Biologie & Écoles Vétérinaires',
    shortTitle: 'Universités, BCPST & ENV',
    cardHook:
      'Organes entiers (non fendus) et garantis sans formol pour les universités de biologie, prépas BCPST et écoles vétérinaires.',
    h1: 'Enseignement supérieur, BCPST & Écoles vétérinaires',
    subtitle:
      'Vous cherchez où commander des organes de porc frais, intacts et sans formol pour vos dissections en licence de biologie, prépa BCPST ou école vétérinaire ?',
    introHeading: 'Des spécimens intacts pour garantir la réussite de chaque dissection étudiante',
    audiences: [
      'Universités — UFR Sciences de la Vie (Licences et Masters de Biologie / Physiologie)',
      'Classes préparatoires aux grandes écoles BCPST (Agro-Véto)',
      'Écoles Nationales Vétérinaires (ENV) — anatomie et apprentissage chirurgical',
      'IUT Génie Biologique & BTS Biotechnologies / Analyses Biologiques',
    ],
    introParagraph1:
      'Les techniciens et enseignants universitaires connaissent bien la difficulté de trouver des organes intacts : les abattoirs livrent fréquemment des cœurs déjà fendus en deux, des vaisseaux coupés trop court ou des poumons percés qu’on ne peut plus gonfler.',
    introParagraph2:
      'Chez Oral Tech Training, chaque lot est préparé selon les exigences des programmes universitaires et des concours Agro-Véto : cœurs 100 % étanches avec vaisseaux longs, blocs cœur-poumons ventilables, rognons avec uretère long et cervelles fraîches garanties sans formol.',
    clinicalDomains: [
      {
        title: 'Anatomie & Physiologie (Licence / BCPST)',
        items: [
          'Cœur entier non fendu avec vaisseaux longs pour démontrer la circulation et observer les valves cardiaques',
          'Bloc cœur-poumon-trachée étanche pour gonfler les poumons et étudier les rapports cœur-poumons',
          'Rognon entier avec capsule, hile vasculaire et uretère pour l’étude de l’appareil urinaire',
        ],
      },
      {
        title: 'Étude du Cerveau & de l’Œil sans Formol',
        items: [
          'Cervelle fraîche non fixée (zéro formol) en barquette rigide pour les coupes cérébrales longitudinales et transversales',
          'Œil frais jamais congelé pour observer la cornée claire, le cristallin transparent et la rétine',
        ],
      },
      {
        title: 'Formation Chirurgicale en Écoles Vétérinaires (ENV)',
        items: [
          'Apprentissage des sutures cutanées, tendineuses et digestives sur tissus frais avant l’entrée en clinique',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'Une logistique calée sur votre calendrier semestriel',
      points: [
        {
          label: 'Livraisons échelonnées sur le semestre',
          text: 'Nous vous livrons en frais 24h à 48h avant chaque date programmée afin de ne pas saturer vos réfrigérateurs.',
        },
        {
          label: '100 % sans formol',
          text: 'Protégez la santé des étudiants, des enseignants-chercheurs et des personnels techniques de laboratoire.',
        },
        {
          label: 'Marchés publics & Chorus Pro',
          text: 'Traitement direct des bons de commande universitaires et dépôt dématérialisé des factures sur Chorus Pro.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Aucune entaille sanitaire destructrice',
        description:
          'Ventricules cardiaques intacts et plèvres pulmonaires préservées pour assurer le succès de vos manipulations.',
      },
      {
        title: 'Conditionnement par groupe d’étudiants',
        description:
          'Mise sous vide par nombre de binômes ou par salle pour accélérer la préparation des paillasses.',
      },
      {
        title: 'Origine France Catégorie 3',
        description:
          'Traçabilité vétérinaire complète conforme aux règles d’hygiène et de sécurité de l’enseignement supérieur.',
      },
    ],
    faqs: [
      {
        question: 'Peut-on planifier en une seule commande toutes nos livraisons du semestre universitaire ?',
        answer:
          'Oui, c’est le fonctionnement privilégié par les UFR de biologie et les prépas BCPST : vous nous transmettez votre calendrier semestriel avec un bon de commande global, et nous expédions chaque lot en frais juste avant chaque séance.',
      },
      {
        question: 'Vos cervelles et yeux de porc contiennent-ils du formol ou des conservateurs ?',
        answer:
          'Aucun. Toutes nos pièces sont livrées à l’état frais (+2°C à +4°C), sans formol ni conservateur toxique.',
      },
    ],
    seoKeywords: [
      'où acheter organes de porc frais dissection universitaire',
      'commander matériel dissection prépa BCPST',
      'fournisseur pièces anatomiques écoles vétérinaires Chorus Pro',
    ],
    visualType: 'cerveau',
  },
  {
    id: 'enseignement-secondaire',
    number: '07',
    title: 'Enseignement Secondaire — Dissections de SVT au Collège et au Lycée',
    shortTitle: 'Collèges & Lycées (SVT)',
    cardHook:
      'Cœurs entiers non coupés, poumons gonflables et yeux frais livrés directement au laboratoire de SVT.',
    h1: 'Dissections de SVT au Collège & au Lycée',
    subtitle:
      'Vous cherchez où acheter des cœurs de porc entiers non fendus, des poumons gonflables ou des yeux frais pour vos cours de SVT, payables via Chorus Pro ?',
    introHeading: 'Finie la tournée des boucheries avant vos séances de SVT',
    audiences: [
      'Lycées d’enseignement général et technologique (Spécialité SVT & filière STL)',
      'Collèges (programme de Sciences de la Vie et de la Terre)',
      'Professeurs de SVT, préparateurs et techniciens de laboratoire scolaire',
    ],
    introParagraph1:
      'Trouver des cœurs de porc entiers non coupés ou des yeux frais à cornée claire pour plusieurs classes relève souvent du parcours du combattant pour les professeurs et préparateurs de SVT : en boucherie ou en abattoir, les cœurs sont fendus en deux, ce qui empêche de réaliser l’expérience de circulation d’eau.',
    introParagraph2:
      'Oral Tech Training vous simplifie tout : sur simple bon de commande de votre établissement (paiement par mandat administratif Chorus Pro accepté), nous livrons directement au laboratoire de SVT en caisse isotherme des organes frais, rincés, mis sous vide et garantis intacts pour vos élèves.',
    clinicalDomains: [
      {
        title: 'Étude du Cœur & de la Circulation Sanguine',
        items: [
          'Cœur de porc entier non fendu avec vaisseaux longs pour brancher les tuyaux d’eau sans fuite et montrer le sens unique de circulation',
          'Mise en évidence très nette de la différence d’épaisseur entre ventricule gauche et ventricule droit, et observation des valves et cordages',
        ],
      },
      {
        title: 'Appareil Respiratoire & Ventilation',
        items: [
          'Bloc cœur-poumon-trachée étanche permettant de gonfler les poumons devant la classe',
          'Exploration de la trachée annelée, des bronches et de l’élasticité pulmonaire',
        ],
      },
      {
        title: 'Vision, Excrétion & Système Nerveux',
        items: [
          'Œil de porc frais jamais congelé pour observer la cornée transparente et l’effet loupe du cristallin',
          'Rognon entier avec uretère et cervelle fraîche 100 % sans formol protégée en barquette rigide',
        ],
      },
    ],
    logisticsHighlight: {
      title: 'Pensé pour les professeurs de SVT et les services d’intendance',
      points: [
        {
          label: 'Paiement par mandat administratif (Chorus Pro)',
          text: 'Dès réception du bon de commande signé par le chef d’établissement ou le gestionnaire, votre livraison est planifiée.',
        },
        {
          label: 'Sachets propres sous vide',
          text: 'Stockage facile dans le réfrigérateur du laboratoire de SVT ou au congélateur pour les classes de la semaine suivante.',
        },
        {
          label: 'Sécurité sanitaire pour les élèves',
          text: 'Organes issus d’animaux contrôlés propres à la consommation humaine, garantis sans formol.',
        },
      ],
    },
    technicalSpecs: [
      {
        title: 'Cœurs garantis non fendus',
        description:
          'Chaque cœur est vérifié afin que vos élèves réussissent le test de circulation d’eau et la dissection.',
      },
      {
        title: 'Livraison France entière',
        description:
          'Acheminement au laboratoire du collège ou du lycée 24h à 48h avant vos séances.',
      },
      {
        title: 'Optimisation du budget laboratoire',
        description:
          'Regroupez les besoins des différents enseignants de SVT de l’établissement pour mutualiser l’envoi isotherme.',
      },
    ],
    faqs: [
      {
        question: 'Comment commander des cœurs ou des yeux de porc avec le budget d’un collège ou d’un lycée public ?',
        answer:
          'Demandez votre devis en ligne et transmettez-le à votre service de gestion (intendance), qui nous retourne le bon de commande administratif. Nous livrons vos pièces avant le cours et déposons la facture directement sur Chorus Pro.',
      },
      {
        question: 'Peut-on congeler une partie des cœurs de porc si les classes sont réparties sur plusieurs semaines ?',
        answer:
          'Tout à fait : nos cœurs, rognons et poumons arrivent frais sous vide. Vous pouvez utiliser une première série immédiatement et placer les autres sachets au congélateur du laboratoire (seuls les yeux et les cervelles doivent impérativement rester au réfrigérateur entre +2°C et +4°C sans congélation).',
      },
    ],
    seoKeywords: [
      'où acheter cœur de porc entier dissection SVT',
      'commander yeux de porc frais collège lycée Chorus Pro',
      'fournisseur organes dissection SVT laboratoire scolaire',
    ],
    visualType: 'bloc-coeur-poumon',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'comment-jeter-eliminer-pieces-anatomiques-apres-tp',
    num: '01',
    slug: 'comment-jeter-eliminer-pieces-anatomiques-porcines-apres-utilisation-dasri',
    category: 'Hygiène & Déchets',
    readTime: '4 min',
    date: 'Avril 2026',
    title:
      'Comment jeter et éliminer les pièces anatomiques après votre séance pratique ?',
    excerpt:
      'OPCT pour les lames et aiguilles, circuit DASRI, sacs étanches en hôtel ou centre de congrès : les bons réflexes simples pour clôturer votre atelier sereinement.',
    image: '/assets/aistudio/entrainement_travaux_pratiques_sur_pie_ce_animale_e53316ee.webp',
    imageAlt: 'Plateau chirurgical et instruments lors d’un atelier pratique O.T.T.',
    targetKeywords: [
      'comment jeter organes porc après TP',
      'élimination déchets anatomiques post-TP DASRI',
      'gestion déchets wet lab dentaire',
    ],
    relatedSpecialty: 'chirurgie-dentaire',
    relatedProductIds: ['mandibule-porcine', 'pied-de-porc', 'coeur-vaisseaux'],
    sections: [
      {
        heading: '1. Premier réflexe : séparer les lames, forets et aiguilles',
        body: 'Avant toute chose, demandez à chaque participant de ne jamais laisser de lame de bistouri ni d’aiguille de suture plantée dans la pièce anatomique. Tous les objets piquants, coupants et tranchants doivent impérativement être jetés dans une boîte collectrice jaune (OPCT) posée sur la paillasse.',
      },
      {
        heading: '2. Éliminer les pièces biologiques via la filière adaptée',
        body: 'Une fois les consommables tranchants retirés, la gestion des pièces dépend de votre lieu d’accueil :',
        bullets: [
          'En faculté, CHU, école ou laboratoire : utilisez vos fûts et sacs DASRI habituels (ou votre circuit interne de déchets anatomiques)',
          'En congrès, hôtel ou organisme privé : vérifiez auprès d’un prestataire local de collecte DASRI (enlèvement ponctuel en fin de journée)',
          'En établissement scolaire (SVT) : suivez le protocole académique de collecte des déchets de laboratoire de votre intendance',
        ],
      },
      {
        heading: '3. Stockage provisoire et désinfection des surfaces',
        body: 'Si l’enlèvement n’a lieu que le lendemain matin, rassemblez les pièces dans des sacs résistants fermés hermétiquement et stockez-les au frais afin d’éviter toute odeur. Nettoyez ensuite les plateaux et paillasses avec votre détergent-désinfectant habituel de surface.',
      },
    ],
  },
  {
    id: 'comment-conserver-pieces-anatomiques-fraiches-ou-congelees',
    num: '02',
    slug: 'comment-conserver-pieces-anatomiques-porcines-frigo-congelation-decongelation',
    category: 'Conservation & Froid',
    readTime: '4 min',
    date: 'Avril 2026',
    title:
      'Frigo ou congélateur : comment conserver vos pièces anatomiques sans les abîmer ?',
    excerpt:
      'Durée de conservation entre +2°C et +4°C, pièces que l’on peut congeler sans risque et pièces à garder impérativement fraîches (yeux, cervelles).',
    image: '/assets/aistudio/rognon_de50b490.webp',
    imageAlt: 'Rognon de porc frais entier avec capsule intacte préparé sous vide',
    targetKeywords: [
      'comment conserver mâchoires de porc TP',
      'durée conservation organes porcins frigo',
      'peut-on congeler des pièces anatomiques porcines',
    ],
    relatedSpecialty: 'enseignement-superieur',
    relatedProductIds: ['mandibule-porcine', 'oeil-porcin-frais', 'cervelle-porcine'],
    sections: [
      {
        heading: '1. À la réception du colis : le réflexe réfrigérateur (+2°C à +4°C)',
        body: 'Nos colis isothermes maintiennent vos pièces à température dirigée pendant tout le transport express. Dès réception, ouvrez le carton et transférez immédiatement les sachets sous vide dans un réfrigérateur réglé entre +2°C et +4°C. Ne percez pas les sachets avant l’heure du cours.',
      },
      {
        heading: '2. Quelles pièces supportent la congélation — et lesquelles ne jamais congeler ?',
        body: 'Vous avez commandé un lot un peu plus large par sécurité ou vous étalez vos classes sur plusieurs semaines ? Voici la règle simple à retenir :',
        bullets: [
          'Peuvent être congelées plusieurs mois dans leur sachet sous vide intact : mandibules, maxillaires, os broyé, pieds de porc, carrés de peau, cœurs, rognons et foies',
          'À conserver UNIQUEMENT au frais (+2°C à +4°C), ne jamais congeler : yeux de porc (la congélation blanchit la cornée) et cervelles sans formol (ramollissement au dégel)',
        ],
      },
      {
        heading: '3. Comment décongeler proprement si vous aviez stocké un lot ?',
        body: 'Évitez absolument l’eau chaude ou le micro-ondes qui cuisent la muqueuse en surface. Sortez simplement vos sachets sous vide du congélateur 24 heures avant la séance et laissez-les décongeler doucement au réfrigérateur (+2°C à +4°C).',
      },
    ],
  },
  {
    id: 'abattoir-vs-fournisseur-specialise-pieces-anatomiques',
    num: '03',
    slug: 'abattoir-boucherie-ou-fournisseur-specialise-pieces-anatomiques-tp',
    category: 'Approvisionnement',
    readTime: '4 min',
    date: 'Mars 2026',
    title:
      'Abattoir, boucherie ou fournisseur spécialisé : pourquoi ça change tout pour vos cours ?',
    excerpt:
      'Cœurs fendus à l’inspection, vaisseaux coupés à ras, vésicule biliaire arrachée ou peau échaudée : pourquoi les circuits alimentaires bloquent vos travaux pratiques.',
    image: '/assets/aistudio/foie_deporc_5754621e.webp',
    imageAlt: 'Foie de porc frais multi-lobaire avec vésicule biliaire préservée',
    targetKeywords: [
      'alternative abattoir achat mâchoire de porc chirurgie',
      'où acheter cœur de porc entier pas coupé',
      'fournisseur pièces anatomiques porcines France',
    ],
    relatedSpecialty: 'enseignement-secondaire',
    relatedProductIds: ['coeur-vaisseaux', 'foie-porcin', 'rein-porcin'],
    sections: [
      {
        heading: '1. Les mauvaises surprises classiques de la filière boucherie',
        body: 'Un boucher ou un abattoir classique travaille pour l’assiette, pas pour la salle de dissection. En pratique, cela se traduit presque toujours par les mêmes blocages sur votre paillasse :',
        bullets: [
          'Cœurs fendus en deux par l’inspection vétérinaire : impossible de faire circuler l’eau dans les ventricules',
          'Vésicule biliaire arrachée sur les foies et uretères coupés au ras sur les rognons',
          'Peau passée à l’échaudage thermique : l’épiderme devient friable et craque sous l’aiguille de suture',
        ],
      },
      {
        heading: '2. Une préparation dédiée à la pédagogie avec Distriporc à Clermont-Ferrand',
        body: 'Chez Oral Tech Training, chaque lot est préparé spécifiquement selon votre cahier des charges. Les cavités restent entières, les vaisseaux sont gardés longs, les os mandibulaires sont sciés bien à plat et chaque pièce est rincée puis conditionnée sous vide pour vous éviter toute préparation préalable.',
      },
    ],
  },
  {
    id: 'estimer-quantites-machoires-porc-et-commander-chorus-pro',
    num: '04',
    slug: 'estimer-quantites-machoires-porc-formation-dentaire-chorus-pro',
    category: 'Organisation & Devis',
    readTime: '4 min',
    date: 'Mars 2026',
    title:
      'Combien de mâchoires prévoir par participant et comment commander via Chorus Pro ?',
    excerpt:
      'Mandibule entière vs demi-mandibule, duo mandibule + maxillaire pour sinus lift, délais de livraison J+1/48h et facturation administrative simplifiée.',
    image: '/assets/aistudio/IMG_2630_copie_2_72abc17e.webp',
    imageAlt: 'Mâchoire supérieure de porc préparée pour les ateliers de parodontologie et sinus lift',
    targetKeywords: [
      'commande mâchoire de porc en lot',
      'demi-mâchoire ou mâchoire entière formation dentaire',
      'fournisseur organes TP Chorus Pro',
    ],
    relatedSpecialty: 'chirurgie-dentaire',
    relatedProductIds: ['mandibule-porcine', 'maxillaire-superieur', 'decoupe-sur-mesure'],
    sections: [
      {
        heading: '1. Entière ou demi-mâchoire : calculer juste pour votre groupe',
        body: 'Inutile de surdimensionner votre budget si votre atelier ne dure qu’une demi-journée. Nos formateurs s’appuient généralement sur trois configurations éprouvées :',
        bullets: [
          '1 demi-mandibule par praticien : idéale pour poser 2 à 3 implants, réaliser un lambeau et travailler les sutures',
          '1 mandibule entière pour 2 (ou par participant en cursus long) : utile pour les prélèvements osseux ou le travail en binôme',
          'Duo 1 demi-mandibule + 1 demi-maxillaire : parfait pour couvrir l’implantologie, le Sinus Lift et la greffe au palais sur la même journée',
        ],
      },
      {
        heading: '2. Délais de commande et facturation publique sur Chorus Pro',
        body: 'Idéalement, réservez 2 semaines à l’avance ; pour une urgence, nous livrons dès le lendemain (J+1) sur Clermont-Ferrand, Lyon, Saint-Étienne et la Loire, et sous 2 jours ouvrés partout en France. Pour les facultés, CHU, lycées et laboratoires publics (CNRS, Inserm), nous acceptons les bons de commande administratifs avec dépôt de facture sur Chorus Pro.',
      },
    ],
  },
  {
    id: 'comment-preparer-pieces-anatomiques-30-minutes-avant-atelier',
    num: '05',
    slug: 'comment-preparer-machoires-et-organes-30-minutes-avant-atelier-pratique',
    category: 'Préparation Jour J',
    readTime: '4 min',
    date: 'Avril 2026',
    title:
      'Comment préparer vos mâchoires et organes 30 minutes avant l’arrivée des participants ?',
    excerpt:
      'Sortie du frigo, ouverture des sachets sous vide, hydratation au sérum physiologique et maintien sur le plateau : les gestes simples pour des pièces souples.',
    image: '/assets/aistudio/entrainement_ope_ration_sur_machoire_de_porc_3856aeaa.webp',
    imageAlt: 'Préparation d’une mâchoire de porc sur champ opératoire avant un atelier pratique',
    targetKeywords: [
      'comment préparer mâchoire de porc avant TP',
      'hydrater muqueuse porcine sérum physiologique',
      'installer pièces anatomiques plateau chirurgical',
    ],
    relatedSpecialty: 'chirurgie-dentaire',
    relatedProductIds: ['mandibule-porcine', 'maxillaire-superieur', 'pied-de-porc'],
    sections: [
      {
        heading: '1. Sortez les sachets du réfrigérateur 20 à 30 minutes avant le début',
        body: 'Une pièce qui sort tout droit du frigo à +2°C a une gencive ou une peau légèrement plus raide sous la lame. En posant vos sachets sous vide encore fermés sur les paillasses 20 à 30 minutes avant le début des exercices, les tissus reprennent toute leur souplesse naturelle sans chauffer.',
      },
      {
        heading: '2. Faut-il rincer les pièces à l’ouverture du sachet ?',
        body: 'Nos pièces sont déjà lavées et parées dans notre atelier de Clermont-Ferrand avant leur mise sous vide. À l’ouverture aux ciseaux, il suffit de les éponger rapidement avec une compresse ou du papier absorbant. Évitez de les laisser tremper dans l’eau du robinet, ce qui ramollirait les muqueuses.',
        bullets: [
          'Prévoyez une petite cupule de sérum physiologique (ou un spray d’eau salée) par table pour humidifier la gencive ou la cornée si la séance dure plus de 2 heures sous scialytique',
          'Posez chaque mâchoire sur un champ absorbant à envers plastifié pour garder la table sèche',
          'Pour les pieds de porc ou carrés de peau, deux bandes d’adhésif chirurgical ou un plateau antidérapant suffisent à bien caler la pièce pendant les nœuds',
        ],
      },
      {
        heading: '3. Pause déjeuner entre deux sessions : comment garder les pièces fraîches ?',
        body: 'Si le même lot sert le matin (incisions, poses d’implants) et l’après-midi (greffes, sutures), recouvrez simplement chaque pièce d’une compresse imbibée de sérum physiologique et replacez les plateaux au frais pendant la pause.',
      },
    ],
  },
  {
    id: 'autorisation-reglementation-recevoir-pieces-anatomiques-formation',
    num: '06',
    slug: 'faut-il-une-autorisation-pour-recevoir-des-pieces-anatomiques-porcines',
    category: 'Réglementation & Légal',
    readTime: '4 min',
    date: 'Avril 2026',
    title:
      'Faut-il une autorisation spéciale pour recevoir des pièces anatomiques en formation ?',
    excerpt:
      'Statut européen Catégorie 3, traçabilité vétérinaire et livraison en hôtel, cabinet ou faculté : ce que dit vraiment la réglementation sanitaire.',
    image: '/assets/aistudio/IMG_2631_copie_e7ebbe29.webp',
    imageAlt: 'Mandibule porcine entière contrôlée et préparée sur plateau par Oral Tech Training',
    targetKeywords: [
      'réglementation achat pièces anatomiques porcines',
      'autorisation sanitaire wet lab dentaire',
      'sous-produits animaux catégorie 3 enseignement',
    ],
    relatedSpecialty: 'enseignement-superieur',
    relatedProductIds: ['mandibule-porcine', 'coeur-vaisseaux', 'bloc-maxillo-mandibulaire'],
    sections: [
      {
        heading: '1. Ai-je le droit de faire livrer des mâchoires dans un hôtel ou un organisme privé ?',
        body: 'Oui, tout à fait. Contrairement aux pièces anatomiques humaines qui sont strictement réservées aux laboratoires d’anatomie universitaires habilités, les pièces porcines issues d’animaux déclarés propres à la consommation humaine peuvent être livrées dans une faculté, un organisme de formation privé, un cabinet ou un centre de congrès.',
      },
      {
        heading: '2. Que signifie le statut « Catégorie 3 à usage pédagogique » ?',
        body: 'Toutes les pièces préparées par Oral Tech Training et Distriporc proviennent d’abattoirs français agréés où chaque animal est contrôlé par les services vétérinaires. Elles circulent sous statut européen de sous-produits animaux de Catégorie 3 destinés à l’enseignement ou à la R&D :',
        bullets: [
          'Aucun risque sanitaire infectieux : les animaux sont issus de la filière alimentaire contrôlée',
          'Mention explicite sur le colis et le bon d’accompagnement : « Usage pédagogique / technique uniquement — Non destiné à la consommation humaine »',
          'Traçabilité complète du lot conservée par O.T.T. et jointe à votre livraison',
        ],
      },
      {
        heading: '3. Quels documents garder de votre côté ?',
        body: 'Conservez simplement notre bon de livraison et la facture avec le numéro de lot dans votre dossier de formation, ainsi que le bordereau d’élimination DASRI remis par votre collecteur en fin de séance. Vous êtes ainsi parfaitement en règle.',
      },
    ],
  },
  {
    id: 'livraison-refrigeree-hotel-congres-comment-ca-se-passe',
    num: '07',
    slug: 'comment-se-passe-la-livraison-refrigeree-en-hotel-congres-ou-faculte',
    category: 'Livraison & Réception',
    readTime: '4 min',
    date: 'Mars 2026',
    title:
      'Comment se passe la livraison réfrigérée en hôtel, congrès ou faculté ?',
    excerpt:
      'Tenue au froid du colis isotherme, livraison la veille à la réception de l’hôtel, suivi du transporteur et gestion des commandes urgentes.',
    image: '/assets/aistudio/entrainement_eb361c63.jpg',
    imageAlt: 'Chirurgien-dentiste en salle de séminaire lors d’un atelier pratique livré par O.T.T.',
    targetKeywords: [
      'livraison mâchoires de porc hôtel séminaire',
      'transport réfrigéré pièces anatomiques TP',
      'délai livraison organes porc travaux pratiques',
    ],
    relatedSpecialty: 'chirurgie-dentaire',
    relatedProductIds: ['mandibule-porcine', 'maxillaire-superieur', 'decoupe-sur-mesure'],
    sections: [
      {
        heading: '1. Se faire livrer la veille directement sur le lieu du séminaire',
        body: 'Quand vous animez une formation à Lyon, Paris, Bordeaux ou Marseille, vous n’avez pas envie de voyager dans le train avec une glacière. Nous expédions directement vos caisses isothermes à l’adresse de votre hôtel, du centre de congrès ou de la faculté, généralement la veille de votre atelier.',
      },
      {
        heading: '2. Comment être sûr que le colis arrive au bon service ?',
        body: 'Jessica Fauvey coordonne chaque expédition avec une étiquette de livraison ultra-précise pour éviter qu’un carton ne reste bloqué à un quai de déchargement :',
        bullets: [
          'Nom du séminaire ou du formateur référent + numéro de portable du contact sur place',
          'Caisse isotherme scellée avec plaques eutectiques maintenant le cœur du colis entre +2°C et +4°C pendant le transport',
          'Possibilité de demander à la cuisine ou à la conciergerie de l’hôtel de glisser les sachets sous vide en chambre froide dès réception',
        ],
      },
      {
        heading: '3. Et si j’ai un ajout de participants à la dernière minute ?',
        body: 'Un groupe qui passe de 12 à 18 inscrits trois jours avant la formation, cela arrive souvent. Appelez-nous directement : grâce à notre atelier de découpe à Clermont-Ferrand, nous pouvons réagir sous 24h sur l’axe Clermont / Lyon / Saint-Étienne et sous 48h dans toute la France.',
      },
    ],
  },
  {
    id: 'check-list-materiel-table-atelier-pratique-propre',
    num: '08',
    slug: 'quel-materiel-prevoir-sur-chaque-table-pour-un-atelier-pratique-propre',
    category: 'Check-list Formateur',
    readTime: '4 min',
    date: 'Mars 2026',
    title:
      'Quel matériel prévoir sur chaque table pour un atelier pratique propre et fluide ?',
    excerpt:
      'La check-list prête à cocher des formateurs : consommables par poste, protection des tables, taille des fils et lames, et organisation du rangement.',
    image: '/assets/aistudio/pied_de_porc_360bdd03.webp',
    imageAlt: 'Illustration d’un pied de porc préparé pour atelier de suture et chirurgie cutanée',
    targetKeywords: [
      'liste matériel TP chirurgie dentaire',
      'check-list organisation atelier suture',
      'quel fil et quelle lame pour mâchoire de porc',
    ],
    relatedSpecialty: 'chirurgie-cutanee-suture',
    relatedProductIds: ['pied-de-porc', 'carre-peau-porcine', 'mandibule-porcine'],
    sections: [
      {
        heading: '1. Ce qu’il faut disposer sur chaque poste avant d’ouvrir les portes',
        body: 'Une table bien préparée fait gagner 20 minutes sur le démarrage du cours et garde la salle impeccable. Voici la dotation type par participant (ou par binôme) :',
        bullets: [
          '1 alèse ou champ absorbant imperméable (40 × 60 cm) scotché aux coins de la table + 1 plateau inox ou barquette rigide',
          '2 paires de gants nitrile à la taille du participant + 1 masque et des lunettes ou loupes de protection',
          '1 manche de bistouri avec 2 à 3 lames neuves (lames n°15 ou 15c en dentaire, n°15 ou 11 en chirurgie cutanée et dissection) : l’os et la couenne émoussent vite la première lame',
          '3 à 4 sachets de fils de suture (4/0 ou 5/0 sur mâchoire porcine ; 3/0 ou 4/0 aiguille triangulaire sur pied de porc et carré de peau)',
        ],
      },
      {
        heading: '2. Le matériel collectif à répartir toutes les 2 ou 3 tables',
        body: 'Pas besoin d’encombrer chaque poste avec les collecteurs et flacons. Regroupez simplement au centre de la rangée : une boîte jaune OPCT bien visible pour les aiguilles et lames usagées, un flacon de sérum physiologique avec compresses, et un rouleau d’essuie-tout.',
      },
      {
        heading: '3. L’astuce qui fait gagner 30 minutes en fin de journée',
        body: 'Avant de poser la pièce anatomique, recouvrez la table d’une grande nappe de protection jetable par-dessus laquelle vous placez les champs individuels. En fin de séance, une fois les lames jetées dans la boîte OPCT et les pièces mises en sac DASRI, il ne vous reste plus qu’à replier la nappe : la salle est propre en dix minutes.',
      },
    ],
  },
  {
    id: 'machoire-porc-vs-resine-implantologie',
    num: '09',
    slug: 'machoire-porc-fraiche-vs-machoire-synthetique-resine-implantologie',
    category: 'Chirurgie Dentaire',
    readTime: '5 min',
    date: 'Mars 2026',
    title:
      'Mâchoire de porc fraîche vs mâchoire synthétique en résine : quel modèle choisir ?',
    excerpt:
      'Comparatif complet pour vos TP d’implantologie et de parodontologie : sensation tactile du forage osseux, tenue du lambeau gingival et coût réel par participant.',
    image: '/assets/aistudio/tp_machoire__7983f32b.jpeg',
    imageAlt:
      'Dentiste en formation sur une mâchoire de porc fraîche préparée par Oral Tech Training',
    targetKeywords: [
      'alternative mâchoire résine TP dentaire',
      'modèle animal vs modèle synthétique implantologie',
      'sensation tactile forage osseux et lambeau gingival',
      'coût TP chirurgie dentaire',
    ],
    relatedSpecialty: 'chirurgie-dentaire',
    relatedProductIds: ['mandibule-porcine', 'maxillaire-superieur', 'os-porcin-broye'],
    sections: [
      {
        heading: '1. Les limites des modèles synthétiques en résine pour la chirurgie réelle',
        body: 'Les mâchoires en résine ou en mousse polyuréthane sont utiles en première année pour visualiser une arcade. En revanche, dès qu’un praticien s’entraîne à la pose d’implant, au lambeau ou à la greffe gingivale, le synthétique trahit vite ses limites : la fausse gencive en silicone se déchire dès qu’on serre un nœud, et le plastique chauffe sous le foret sans restituer la vraie transition entre os dur en surface et os spongieux.',
      },
      {
        heading: '2. Sensation tactile du forage osseux et du lambeau gingival sur pièce fraîche',
        body: 'Sur une vraie mâchoire inférieure ou supérieure de porc fraîche, la différence est immédiate. Le chirurgien-dentiste retrouve exactement la résistance de la gencive attachée sous la lame 15c, le décollement propre du périoste au décolleur, puis le retour mécanique précis lors du forage implantaire et du contrôle de la stabilité primaire.',
        bullets: [
          'Une muqueuse et un périoste résistants qui retiennent les fils monofilament sous tension',
          'Une double densité osseuse (corticale + spongieuse) fidèle à la mâchoire humaine',
          'Des bases sciées bien droites par O.T.T. pour garantir une stabilité parfaite sur table',
        ],
      },
      {
        heading: '3. Quel coût réel pour votre TP de chirurgie dentaire ?',
        body: 'Contrairement aux idées reçues, choisir une alternative à la mâchoire en résine coûte souvent moins cher par participant. Là où un modèle synthétique multicouche dédié à l’implantologie et à la parodontologie dépasse facilement plusieurs dizaines d’euros l’unité, une demi-mandibule porcine prête à l’emploi permet de réaliser 2 à 3 poses d’implants, un lambeau complet et des sutures pour un budget maîtrisé.',
      },
    ],
  },
  {
    id: 'organes-frais-vs-congeles-dissection',
    num: '10',
    slug: 'pourquoi-privilegier-organes-porcins-frais-plutot-que-congeles-chirurgie',
    category: 'Qualité & Fraîcheur',
    readTime: '5 min',
    date: 'Février 2026',
    title:
      'Pourquoi privilégier des organes porcins frais plutôt que congelés pour vos TP ?',
    excerpt:
      'Différence organe frais vs congelé, altération des muqueuses et de la cornée au dégel, et conseils pratiques pour conserver vos pièces avant la séance.',
    image: '/assets/aistudio/coeur_de_porc_322bdad3.webp',
    imageAlt: 'Cœur de porc frais entier avec vaisseaux longs préparé par Oral Tech Training',
    targetKeywords: [
      'différence organe frais et congelé dissection',
      'altération muqueuse congélation TP',
      'comment conserver des pièces anatomiques fraîches avant un TP',
    ],
    relatedSpecialty: 'chirurgie-viscerale-vasculaire',
    relatedProductIds: ['coeur-vaisseaux', 'oeil-porcin-frais', 'cervelle-porcine'],
    sections: [
      {
        heading: '1. Ce que la congélation abîme vraiment sur les tissus et muqueuses',
        body: 'Lorsqu’on congèle un organe, l’eau contenue dans les cellules forme de petits cristaux de glace. Au moment du dégel, la muqueuse devient parfois plus friable, les tissus rendent de l’eau sur la paillasse et la cornée d’un œil devient totalement opaque. De même, une cervelle congelée ramollit et ne permet plus d’obtenir des coupes nettes.',
      },
      {
        heading: '2. Aucun temps de décongélation : ouvrez le colis, commencez la séance',
        body: 'Pour un formateur ou un préparateur de laboratoire, faire décongeler 30 mâchoires ou 40 cœurs la veille sans casser la chaîne du froid est souvent un casse-tête logistique. Avec le circuit court d’Oral Tech Training et de Distriporc à Clermont-Ferrand, vos pièces arrivent fraîches (+2°C à +4°C), souples et immédiatement prêtes à être posées sur les plateaux.',
        bullets: [
          'Cœur, foie et rognon à l’élasticité intacte pour tenir parfaitement les sutures vasculaires',
          'Cornée transparente préservée sur l’œil frais et tenue ferme sur la cervelle sans formol',
          'Zéro exsudat au déballage : poste de travail propre dès la première minute',
        ],
      },
      {
        heading: '3. Comment conserver des pièces anatomiques fraîches avant un TP ?',
        body: 'À réception de votre caisse isotherme, conservez simplement les sachets sous vide fermés au réfrigérateur entre +2°C et +4°C jusqu’au début de votre formation (nous planifions généralement la livraison 24h à 48h avant votre date). Et si des pièces robustes (mâchoires, pieds, cœurs) n’ont pas été ouvertes, vous pouvez les placer au congélateur pour une session ultérieure.',
      },
    ],
  },
  {
    id: 'organiser-wet-lab-atelier-hands-on',
    num: '11',
    slug: 'comment-organiser-wet-lab-atelier-hands-on-chirurgie-dentaire-logistique',
    category: 'Guide Pratique',
    readTime: '6 min',
    date: 'Février 2026',
    title:
      'Comment organiser un Wet Lab ou atelier Hands-On : logistique, hygiène et spécimens',
    excerpt:
      'Réglementation sanitaire Catégorie 3, achat des mâchoires sans passer par un abattoir, maintien au frais sur place et élimination des déchets en fin de journée.',
    image: '/assets/aistudio/mxl00736_copie_teal.jpg',
    imageAlt: 'Praticien équipé de loupes lors d’une formation pratique Oral Tech Training',
    targetKeywords: [
      'organiser un wet lab chirurgical',
      'réglementation sanitaire transport organes TP',
      'où acheter des mâchoires de porc pour TP dentaire',
      'élimination déchets anatomiques post-TP',
    ],
    relatedSpecialty: 'chirurgie-dentaire',
    relatedProductIds: ['mandibule-porcine', 'maxillaire-superieur', 'bloc-maxillo-mandibulaire'],
    sections: [
      {
        heading: '1. Où acheter des mâchoires et organes sans galérer avec un abattoir ?',
        body: 'La majorité des abattoirs ne vendent pas aux organismes de formation en petites ou moyennes séries, et livrent des pièces brutes non parées. En passant par Oral Tech Training, vous recevez des mâchoires lavées, sciées selon votre programme (entières ou demi-mâchoires) et emballées sous vide par table de travail.',
      },
      {
        heading: '2. Réglementation sanitaire et transport sous température dirigée',
        body: 'Toutes nos pièces proviennent d’animaux abattus en France, contrôlés ante et post-mortem par les services vétérinaires et déclarés propres à la consommation humaine. Elles voyagent sous statut européen de sous-produits animaux de Catégorie 3 destinés à l’enseignement et à la recherche, dans des colis isothermes maintenus entre +2°C et +4°C.',
        bullets: [
          'Traçabilité vétérinaire fournie avec votre expédition',
          'Aucune démarche complexe pour les facultés, congrès dentaires ou laboratoires MedTech',
          'Livraison directe sur le lieu du séminaire (hôtel, faculté, centre de congrès ou laboratoire)',
        ],
      },
      {
        heading: '3. Préparer la salle et gérer l’élimination des déchets post-TP',
        body: 'Prévoyez un réfrigérateur à proximité pour stocker les cartons jusqu’au matin de l’atelier, des champs opératoires absorbants sur les paillasses et une boîte jaune (OPCT) par table pour les lames et aiguilles. À la fin du Wet Lab, les pièces utilisées sont évacuées via la filière DASRI habituelle de votre structure ou de votre prestataire événementiel.',
      },
    ],
  },
  {
    id: 'exercices-suture-pied-de-porc-peau',
    num: '12',
    slug: 'quels-exercices-suture-chirurgie-cutanee-realiser-pied-de-porc-frais',
    category: 'Chirurgie Cutanée',
    readTime: '4 min',
    date: 'Janvier 2026',
    title:
      'Quels exercices de suture et chirurgie cutanée réaliser sur un pied de porc frais ?',
    excerpt:
      'Points simples, point de Blair-Donati, surjet intradermique et suture des tendons : pourquoi la peau porcine reste la référence pour apprendre à suturer.',
    image: '/assets/aistudio/suture.jpg',
    imageAlt: 'Exercice de suture chirurgicale au porte-aiguille sur tissu porcin frais',
    targetKeywords: [
      'apprendre à suturer sur pied de porc',
      'exercice suture point simple et Blair-Donati',
      'équivalence peau porcine peau humaine chirurgie',
    ],
    relatedSpecialty: 'chirurgie-cutanee-suture',
    relatedProductIds: ['pied-de-porc', 'carre-peau-porcine'],
    sections: [
      {
        heading: '1. Équivalence peau porcine / peau humaine : pourquoi ça change tout',
        body: 'La peau du porc possède une épaisseur d’épiderme et une densité de collagène très proches de celles de la peau humaine. Là où un coussin en silicone glisse sous la pince et se déchire au serrage, le pied de porc oblige l’étudiant à tourner franchement le poignet avec son porte-aiguille pour traverser le derme sans plier l’aiguille.',
      },
      {
        heading: '2. Les exercices incontournables du point simple au tendon profond',
        body: 'Sur un seul pied de porc frais non échaudé préparé par O.T.T., vous pouvez enchaîner plusieurs niveaux de difficulté au cours du même atelier :',
        bullets: [
          'Points simples séparés et nœuds chirurgicaux à la pince ou à la main',
          'Point de Blair-Donati et points en X pour affronter une plaie sous forte tension',
          'Surjet intradermique et décollement des berges au bistouri',
          'Abord chirurgical et suture des tendons fléchisseurs et extenseurs en profondeur',
        ],
      },
      {
        heading: '3. Pied de porc ou carré de peau à plat : lequel commander ?',
        body: 'Pour un atelier d’urgence ou de médecine générale axé sur les points simples, Blair-Donati et les tendons, le pied de porc reste le plus polyvalent et économique. Pour la dermatologie et les lambeaux de chirurgie plastique (plastie en Z, exérèse fusiforme), privilégiez notre carré de peau découpé bien à plat.',
      },
    ],
  },
];

export const HOME_FAQS = [
  {
    question: 'Puis-je commander un seul produit ?',
    answer:
      'Oui, mais les frais de transport réfrigéré restent les mêmes pour une seule pièce ou pour un petit lot. Nous vous conseillons donc de grouper plusieurs pièces ou mâchoires : mises sous vide, elles se conservent très bien au congélateur.',
  },
  {
    question: 'Est-il possible de demander des découpes spécifiques ?',
    answer:
      'Oui, nous réalisons des découpes sur-mesure selon vos besoins pédagogiques ou votre protocole de recherche.',
  },
  {
    question: 'Quel est le délai minimum pour une commande urgente ?',
    answer:
      'Clermont-Ferrand, Lyon, Saint-Étienne, Loire : livraison possible la veille pour le lendemain grâce à la proximité de notre atelier de découpe. Reste de la France : 2 jours ouvrés minimum.',
  },
  {
    question: 'Proposez-vous des produits issus d’autres animaux ?',
    answer:
      'Nous sommes spécialisés dans les pièces anatomiques porcines — choisies pour leur grande ressemblance avec l’anatomie humaine —, avec la possibilité d’étudier vos demandes particulières.',
  },
];
