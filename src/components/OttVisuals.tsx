import React from 'react';

/**
 * Image du cochon dans la Hero section (cochonsPlan de travail 12.webp)
 */
export const PigLineArt: React.FC<{ className?: string; strokeColor?: string }> = ({
  className = 'w-56 sm:w-64 h-auto',
}) => (
  <img
    src="/assets/aistudio/cochonsPlan_de_travail_12_9c2cfbd1.webp"
    alt="Silhouette anatomique porcine Oral Tech Training"
    className={`${className} object-contain select-none`}
  />
);

/**
 * Exact Solid Pig Silhouette for section headers & badges
 */
export const PigSolidIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-8' }) => (
  <svg
    viewBox="0 0 180 95"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M28 28 C21 28, 16 24, 14 22 C19 19, 27 19, 33 23 C48 16, 72 13, 99 14 C126 15, 146 22, 155 34 C159 39, 160 45, 158 52 C156 59, 151 64, 149 71 L146 86 C145 88, 142 88, 142 86 L140 73 C139 68, 136 65, 133 70 L129 85 C128 87, 125 87, 125 84 L126 69 C126 65, 118 64, 104 65 C89 66, 74 65, 64 63 L61 86 C60 88, 57 88, 57 86 L54 69 C53 66, 50 66, 49 70 L46 84 C45 86, 42 86, 42 84 L43 63 C35 60, 28 56, 22 51 C16 50, 11 49, 8 46 C5 44, 4 39, 5 36 C6 34, 10 33, 14 31 C18 29, 23 28, 28 28 Z" />
    <path
      d="M154 35 C160 33, 167 28, 168 22 C168 18, 164 16, 161 19 C159 22, 161 27, 166 27 C170 27, 174 23, 175 19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const WEBP_PRODUCT_MAP: Record<string, { src: string; alt: string }> = {
  mandibule: {
    src: '/assets/aistudio/machoire_du_bas_porc_8bdd0234.webp',
    alt: 'Mandibule porcine (mâchoire du bas)',
  },
  maxillaire: {
    src: '/assets/aistudio/machoire_du_haut_porc_10e9897f.webp',
    alt: 'Maxillaire supérieur de porc (mâchoire du haut)',
  },
  'demi-tete': {
    src: '/assets/aistudio/demi_te_te_be7a2c94.webp',
    alt: 'Demi-tête porcine en coupe sagittale',
  },
  coeur: {
    src: '/assets/aistudio/coeur_de_porc_c97a0c35.webp',
    alt: 'Cœur de porc frais avec gros vaisseaux',
  },
  rein: {
    src: '/assets/aistudio/rein_de_porc_03ccc9d1.webp',
    alt: 'Rein de porc frais',
  },
  cerveau: {
    src: '/assets/aistudio/cerveau_de_porc_22bd7489.webp',
    alt: 'Cerveau / encéphale de porc frais',
  },
  foie: {
    src: '/assets/aistudio/foie_de_porc_fc411455.webp',
    alt: 'Foie de porc frais multi-lobaire',
  },
  pied: {
    src: '/assets/aistudio/pied_de_porc_360bdd03.webp',
    alt: 'Pied de porc frais pour suture',
  },
  'bloc-coeur-poumon': {
    src: '/assets/aistudio/fressures_ca3ef7aa.webp',
    alt: 'Fressures / Bloc cœur-poumon-trachée de porc',
  },
  'os-broye': {
    src: '/assets/aistudio/os_de_porc_828c44e6.webp',
    alt: 'Os de porc frais',
  },
};

export interface ProductPhotoConfig {
  cardPrimary?: string;
  alt: string;
  gallery: {
    src: string;
    alt: string;
    label: string;
  }[];
}

export const PRODUCT_PHOTO_MAP: Record<string, ProductPhotoConfig> = {
  mandibule: {
    cardPrimary: '/assets/aistudio/machoire_du_bas_24243833.jpg',
    alt: 'Mâchoire inférieure de porc fraîche préparée par Oral Tech Training',
    gallery: [
      {
        src: '/assets/aistudio/machoire_du_bas_24243833.jpg',
        alt: 'Mandibule porcine fraîche entière préparée par Oral Tech Training',
        label: 'Vue anatomique',
      },
      {
        src: '/assets/aistudio/IMG_2631_copie_e7ebbe29.webp',
        alt: 'Arcade mandibulaire porcine complète sur table de préparation',
        label: 'Arcade complète',
      },
    ],
  },
  maxillaire: {
    cardPrimary: '/assets/aistudio/IMG_2630_copie_2_72abc17e.webp',
    alt: 'Maxillaire supérieur de porc frais (vue palatine, crêtes palatines et arcade dentaire)',
    gallery: [
      {
        src: '/assets/aistudio/IMG_2630_copie_2_72abc17e.webp',
        alt: 'Maxillaire supérieur de porc frais — vue rapprochée de la fibromuqueuse palatine',
        label: 'Vue palatine',
      },
      {
        src: '/assets/aistudio/mandibule_de_cochon_b671dc62.jpg',
        alt: 'Maxillaire supérieur de porc frais sur champ opératoire montrant la voûte palatine et l’instrumentation',
        label: 'Plateau chirurgical',
      },
      {
        src: '/assets/aistudio/entrainement_sur_machoires.jpeg',
        alt: 'Chirurgien-dentiste réalisant un prélèvement palatin sur maxillaire de porc frais',
        label: 'Atelier clinique',
      },
      {
        src: '/assets/aistudio/entrainement__copie_78e2b77f.webp',
        alt: 'Incision au bistouri sur muqueuse palatine porcine fraîche',
        label: 'Geste chirurgical',
      },
    ],
  },
  'bloc-maxillo': {
    cardPrimary: '/assets/aistudio/IMG_2631_copie_e7ebbe29.webp',
    alt: 'Complexe anatomique maxillo-mandibulaire porcin frais',
    gallery: [
      {
        src: '/assets/aistudio/IMG_2631_copie_e7ebbe29.webp',
        alt: 'Complexe maxillo-mandibulaire porcin frais avec branches montantes et condyles',
        label: 'Pièce anatomique',
      },
      {
        src: '/assets/aistudio/mandibule_de_cochon_b671dc62.jpg',
        alt: 'Préparation sur plateau opératoire avec moteur chirurgical et sutures',
        label: 'Plateau opératoire',
      },
      {
        src: '/assets/aistudio/entrainement_ope_ration_sur_machoire_de_porc_3856aeaa.webp',
        alt: 'Manipulation chirurgicale sur mâchoire porcine fraîche',
        label: 'Mise en situation',
      },
    ],
  },
  'demi-tete': {
    alt: 'Demi-tête et massif facial porcin frais',
    gallery: [],
  },
  coeur: {
    cardPrimary: '/assets/aistudio/coeur_de_porc_322bdad3.webp',
    alt: 'Cœur de porc frais entier non fendu avec gros vaisseaux',
    gallery: [
      {
        src: '/assets/aistudio/coeur_de_porc_322bdad3.webp',
        alt: 'Cœur de porc frais entier prélevé sans incision sanitaire avec crosse aortique',
        label: 'Photo réelle',
      },
    ],
  },
  rein: {
    cardPrimary: '/assets/aistudio/rognon_de50b490.webp',
    alt: 'Rognon / Rein de porc frais entier avec capsule lisse',
    gallery: [
      {
        src: '/assets/aistudio/rognon_de50b490.webp',
        alt: 'Rognon de porc frais entier avec capsule fibreuse et hile préservé',
        label: 'Photo réelle',
      },
    ],
  },
  cerveau: {
    cardPrimary: '/assets/aistudio/IMG_2883_copie_d96ce12e.webp',
    alt: 'Cervelle / Encéphale de porc frais garanti sans formol',
    gallery: [
      {
        src: '/assets/aistudio/IMG_2883_copie_d96ce12e.webp',
        alt: 'Encéphale de porc frais entier avec hémisphères cérébraux et cervelet',
        label: 'Photo réelle',
      },
    ],
  },
  foie: {
    cardPrimary: '/assets/aistudio/foie_deporc_5754621e.webp',
    alt: 'Foie de porc frais multi-lobaire avec capsule de Glisson intacte',
    gallery: [
      {
        src: '/assets/aistudio/foie_deporc_5754621e.webp',
        alt: 'Foie de porc frais multi-lobaire préparé pour la cœlioscopie et les essais R&D',
        label: 'Photo réelle',
      },
    ],
  },
  pied: {
    cardPrimary: '/assets/aistudio/piec_de_porc_9b47376e.webp',
    alt: 'Pied de porc frais non échaudé pour ateliers de suture cutanée et tendineuse',
    gallery: [
      {
        src: '/assets/aistudio/piec_de_porc_9b47376e.webp',
        alt: 'Pied de porc frais lavé avec épiderme et derme souples',
        label: 'Photo réelle',
      },
    ],
  },
  peau: {
    alt: 'Carré de peau porcine fraîche sur-mesure pour sutures et plastie cutanée',
    gallery: [],
  },
  'bloc-coeur-poumon': {
    alt: 'Bloc cœur-poumon-trachée porcin frais ventilable',
    gallery: [],
  },
  digestif: {
    alt: 'Estomac et intestin de porc frais intégralement vidés et lavés',
    gallery: [],
  },
  oeil: {
    alt: 'Œil de porc frais énucléé à froid à cornée transparente',
    gallery: [],
  },
  larynx: {
    alt: 'Larynx et trachée de porc frais pour chirurgie ORL et trachéotomie',
    gallery: [],
  },
  'os-broye': {
    alt: 'Copeaux d’os de porc broyé frais pour comblement sinusien et régénération osseuse',
    gallery: [],
  },
  'sur-mesure': {
    alt: 'Découpe anatomique porcine sur-mesure selon votre cahier des charges',
    gallery: [],
  },
};

/**
 * Carte produit avec la photo réelle affichée en premier par défaut
 * et l'apparition du pictogramme anatomique au survol (hover)
 */
export const ProductCardMedia: React.FC<{
  type: string;
}> = ({ type }) => {
  const photo = PRODUCT_PHOTO_MAP[type];

  return (
    <div className="aspect-square rounded-[22px] border border-[#141414]/20 bg-white p-7 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:border-[#01B6AF] group-hover:shadow-[0_20px_50px_rgba(1,182,175,0.12)]">
      {photo?.cardPrimary ? (
        <>
          <img
            src={photo.cardPrimary}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-105 transition-all duration-500 ease-out select-none"
            loading="lazy"
          />
          <TranslucentOrganVisual
            type={type}
            className="w-4/5 h-4/5 relative z-10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
          />
        </>
      ) : (
        <TranslucentOrganVisual
          type={type}
          className="w-4/5 h-4/5 transition-all duration-500 group-hover:scale-105"
        />
      )}
    </div>
  );
};

/**
 * Galerie de fiche produit : affiche les photos du spécimen (lorsqu'elles existent) suivies du pictogramme,
 * ou uniquement le pictogramme avec miniatures interactives le cas échéant.
 */
export const ProductDetailGallery: React.FC<{
  type: string;
  productName: string;
}> = ({ type, productName }) => {
  const photoConfig = PRODUCT_PHOTO_MAP[type];

  type MediaSlide =
    | { kind: 'photo'; src: string; alt: string; label: string }
    | { kind: 'pictogram'; label: string };

  const slides: MediaSlide[] = React.useMemo(() => {
    const list: MediaSlide[] = [];
    if (photoConfig?.gallery && photoConfig.gallery.length > 0) {
      photoConfig.gallery.forEach((item) => {
        list.push({
          kind: 'photo',
          src: item.src,
          alt: item.alt || productName,
          label: item.label,
        });
      });
      list.push({
        kind: 'pictogram',
        label: 'Schéma anatomique',
      });
    } else {
      list.push({
        kind: 'pictogram',
        label: 'Schéma anatomique',
      });
    }
    return list;
  }, [photoConfig, productName]);

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [type]);

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <div>
      {/* Visuel principal */}
      <div className="aspect-square rounded-[28px] border border-[#141414]/20 bg-white overflow-hidden relative flex items-center justify-center">
        {currentSlide.kind === 'photo' ? (
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            className="w-full h-full object-cover select-none transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full p-12 flex items-center justify-center">
            <TranslucentOrganVisual type={type} className="w-4/5 h-4/5" />
          </div>
        )}
      </div>

      {/* Miniatures de sélection */}
      {slides.length > 1 && (
        <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
          {slides.map((slide, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-[16px] border bg-white overflow-hidden flex items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#01B6AF] ring-2 ring-[#01B6AF]/25'
                    : 'border-[#141414]/20 opacity-75 hover:opacity-100 hover:border-[#01B6AF]/60'
                }`}
                title={slide.label}
              >
                {slide.kind === 'photo' ? (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full p-2.5 flex items-center justify-center">
                    <TranslucentOrganVisual type={type} className="w-full h-full" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

/**
 * Product & Specialty Visuals:
 * Uses the official WebP illustrations provided by O.T.T. when available,
 * and custom-drawn translucent multi-layered turquoise/petrol illustrations
 * matching the exact same graphic language for the remaining specimens.
 */
export const TranslucentOrganVisual: React.FC<{
  type: string;
  className?: string;
}> = ({ type, className = 'w-44 h-44' }) => {
  const webpAsset = WEBP_PRODUCT_MAP[type];

  if (webpAsset) {
    return (
      <img
        src={webpAsset.src}
        alt={webpAsset.alt}
        className={`${className} object-contain select-none`}
        loading="lazy"
      />
    );
  }

  switch (type) {
    case 'bloc-maxillo':
      // Articulated upper & lower jaws (ATM + occlusion) combining the exact translucent aesthetic of machoire_du_haut & machoire_du_bas
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bm-upper" x1="25" y1="35" x2="205" y2="145" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EF2E8" stopOpacity="0.82" />
              <stop offset="50%" stopColor="#14C4BC" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#036966" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="bm-lower" x1="40" y1="90" x2="195" y2="205" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5CE6DC" stopOpacity="0.78" />
              <stop offset="55%" stopColor="#01B6AF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#024644" stopOpacity="0.92" />
            </linearGradient>
            <radialGradient id="bm-tmj" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#012423" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#035451" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#01B6AF" stopOpacity="0" />
            </radialGradient>
            <filter id="bm-blur" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
          {/* Soft ambient glow behind the block */}
          <ellipse cx="116" cy="124" rx="78" ry="62" fill="#5CE6DC" fillOpacity="0.22" filter="url(#bm-blur)" />
          {/* Upper maxillary skull & nasal profile */}
          <path
            d="M34 56 C46 44, 78 52, 118 68 C156 83, 190 92, 206 96 C214 98, 218 112, 210 122 C198 130, 166 128, 132 126 C94 124, 58 118, 42 102 C30 88, 24 66, 34 56 Z"
            fill="url(#bm-upper)"
          />
          {/* Lower mandibular ramus & body in occlusion */}
          <path
            d="M46 78 C58 76, 68 92, 78 118 C88 142, 126 146, 164 142 C182 140, 194 132, 196 144 C198 158, 178 182, 142 186 C102 190, 66 176, 52 146 C40 120, 34 80, 46 78 Z"
            fill="url(#bm-lower)"
          />
          {/* Internal sinus & marrow cavity */}
          <path
            d="M54 74 C76 74, 114 86, 156 100 C172 105, 176 116, 158 120 C126 124, 84 116, 64 98 C50 86, 44 74, 54 74 Z"
            fill="#023836"
            fillOpacity="0.72"
            filter="url(#bm-blur)"
          />
          {/* TMJ / ATM Condyle articulation highlight */}
          <circle cx="58" cy="88" r="22" fill="url(#bm-tmj)" />
          {/* Occlusal dental line (upper & lower molars + canine) */}
          <path
            d="M98 122 C104 118, 110 126, 116 122 C122 118, 128 126, 134 122 C140 118, 146 126, 154 122 C162 118, 170 126, 178 118"
            stroke="#012423"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <path
            d="M102 134 C108 130, 114 138, 120 134 C126 130, 132 138, 138 134 C144 130, 150 138, 158 134 C168 130, 178 124, 184 112"
            stroke="#012423"
            strokeWidth="6.5"
            strokeLinecap="round"
            opacity="0.78"
          />
        </svg>
      );

    case 'digestif':
      // Translucent porcine stomach & curved duodenal/intestinal loop matching the exact WebP style
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dig-outer" x1="40" y1="45" x2="195" y2="195" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#72F5EC" stopOpacity="0.85" />
              <stop offset="48%" stopColor="#18CFC6" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#036B68" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="dig-loop" x1="65" y1="110" x2="190" y2="205" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3FE0D7" stopOpacity="0.78" />
              <stop offset="55%" stopColor="#019E98" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#023E3C" stopOpacity="0.92" />
            </linearGradient>
            <radialGradient id="dig-core" cx="48%" cy="46%" r="50%">
              <stop offset="0%" stopColor="#012221" stopOpacity="0.88" />
              <stop offset="65%" stopColor="#024947" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#01B6AF" stopOpacity="0" />
            </radialGradient>
            <filter id="dig-blur" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          {/* Esophageal inlet & pyloric outlet */}
          <path
            d="M108 38 C108 52, 112 64, 118 72"
            stroke="#5CE6DC"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.78"
          />
          {/* Gastric fundus & greater curvature */}
          <path
            d="M96 54 C58 52, 38 86, 46 126 C54 162, 92 178, 132 168 C166 158, 188 132, 182 104 C178 82, 154 78, 142 94 C132 108, 116 106, 114 88 C112 70, 116 55, 96 54 Z"
            fill="url(#dig-outer)"
          />
          {/* Duodenal & jejunal translucent loop */}
          <path
            d="M158 118 C184 122, 198 148, 184 174 C170 198, 126 204, 92 192 C66 182, 58 162, 74 152 C88 144, 108 158, 134 158 C154 158, 162 142, 150 130"
            fill="url(#dig-loop)"
          />
          {/* Deep gastric lumen & rugae shadow */}
          <ellipse cx="104" cy="118" rx="46" ry="34" transform="rotate(-12 104 118)" fill="url(#dig-core)" filter="url(#dig-blur)" />
          <path
            d="M72 96 C64 118, 78 144, 108 146 C134 148, 156 132, 158 114"
            stroke="#012827"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.55"
            filter="url(#dig-blur)"
          />
        </svg>
      );

    case 'oeil':
      // Translucent enucleated porcine eye globe with cornea dome, iris ring, lens & optic nerve in the exact WebP aesthetic
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="eye-sclera" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#84FAF2" stopOpacity="0.88" />
              <stop offset="45%" stopColor="#26D8CF" stopOpacity="0.82" />
              <stop offset="82%" stopColor="#02837E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#024442" stopOpacity="0.94" />
            </radialGradient>
            <linearGradient id="eye-cornea" x1="45" y1="60" x2="155" y2="155" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEFBF6" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#19C8C0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#035E5B" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="eye-vitreous" cx="55%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#012423" stopOpacity="0.88" />
              <stop offset="70%" stopColor="#03524F" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#01B6AF" stopOpacity="0" />
            </radialGradient>
            <filter id="eye-blur" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
          {/* Posterior optic nerve stalk */}
          <path
            d="M148 142 C166 154, 186 168, 198 182 C204 189, 192 202, 182 195 C166 184, 150 168, 134 156 Z"
            fill="#17C6BE"
            fillOpacity="0.78"
          />
          <path
            d="M152 150 C166 160, 180 172, 190 184"
            stroke="#023B39"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Main scleral globe */}
          <circle cx="118" cy="116" r="62" fill="url(#eye-sclera)" />
          {/* Anterior corneal dome bulge */}
          <path
            d="M74 74 C44 92, 44 138, 74 156 C96 142, 98 90, 74 74 Z"
            fill="url(#eye-cornea)"
          />
          {/* Internal vitreous & choroid shadow */}
          <circle cx="124" cy="118" r="46" fill="url(#eye-vitreous)" filter="url(#eye-blur)" />
          {/* Iris & Crystalline lens */}
          <ellipse cx="86" cy="115" rx="18" ry="32" transform="rotate(-8 86 115)" fill="#023836" fillOpacity="0.88" />
          <ellipse cx="82" cy="115" rx="9" ry="18" transform="rotate(-8 82 115)" fill="#011918" fillOpacity="0.95" />
          {/* Specular corneal highlight */}
          <ellipse cx="68" cy="98" rx="6" ry="12" transform="rotate(14 68 98)" fill="#BDFDF9" fillOpacity="0.72" />
        </svg>
      );

    case 'larynx':
      // Translucent porcine larynx, thyroid/cricoid cartilage, epiglottis & ringed trachea in exact WebP style
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lar-cart" x1="65" y1="35" x2="175" y2="195" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#76F7EE" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#18CEC5" stopOpacity="0.84" />
              <stop offset="100%" stopColor="#036663" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id="lar-trach" x1="85" y1="115" x2="155" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3CE0D7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#024442" stopOpacity="0.92" />
            </linearGradient>
            <filter id="lar-blur" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>
          {/* Epiglottis & Hyoid superior arch */}
          <path
            d="M84 48 C84 32, 156 32, 156 48 C156 64, 142 74, 120 74 C98 74, 84 64, 84 48 Z"
            fill="#68F2E8"
            fillOpacity="0.72"
          />
          {/* Tracheal cylinder with cartilaginous rings */}
          <rect x="90" y="114" width="60" height="86" rx="26" fill="url(#lar-trach)" />
          <g fill="#012928" fillOpacity="0.58">
            <rect x="94" y="132" width="52" height="7" rx="3.5" />
            <rect x="94" y="148" width="52" height="7" rx="3.5" />
            <rect x="94" y="164" width="52" height="7" rx="3.5" />
            <rect x="94" y="180" width="52" height="7" rx="3.5" />
          </g>
          {/* Thyroid cartilage shield */}
          <path
            d="M72 64 C92 56, 110 66, 120 72 C130 66, 148 56, 168 64 C176 86, 166 122, 148 128 C132 134, 108 134, 92 128 C74 122, 64 86, 72 64 Z"
            fill="url(#lar-cart)"
          />
          {/* Glottic core & vocal folds shadow */}
          <path
            d="M120 74 C102 82, 96 106, 106 122 C114 132, 126 132, 134 122 C144 106, 138 82, 120 74 Z"
            fill="#012423"
            fillOpacity="0.86"
            filter="url(#lar-blur)"
          />
          {/* Vocal cords V-shaped anatomical lumen */}
          <path
            d="M108 112 L120 84 L132 112"
            stroke="#7AF8EF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
        </svg>
      );

    case 'sur-mesure':
      // Custom anatomical cutting / Bespoke preparation pictogram in the exact translucent turquoise O.T.T. style
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sm-body" x1="30" y1="60" x2="210" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7CF8EF" stopOpacity="0.86" />
              <stop offset="52%" stopColor="#12C7BE" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#02524F" stopOpacity="0.92" />
            </linearGradient>
            <radialGradient id="sm-highlight" cx="48%" cy="48%" r="50%">
              <stop offset="0%" stopColor="#012423" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#025A57" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#01B6AF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Precision measurement frame */}
          <rect
            x="32"
            y="46"
            width="176"
            height="148"
            rx="22"
            stroke="#01B6AF"
            strokeWidth="2"
            strokeDasharray="6 6"
            opacity="0.55"
          />
          {/* Corner calibration marks */}
          <path
            d="M26 64 V40 H50 M190 40 H214 V64 M26 176 V200 H50 M190 200 H214 V176"
            stroke="#024442"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
          {/* Translucent anatomical specimen silhouette */}
          <path
            d="M52 104 C44 104, 38 99, 36 96 C42 92, 50 92, 58 97 C74 88, 102 84, 134 86 C164 88, 186 96, 196 110 C200 116, 202 124, 199 132 C196 140, 190 146, 188 154 L184 170 C183 172, 180 172, 180 170 L178 156 C177 150, 173 147, 170 152 L165 169 C164 171, 160 171, 160 168 L162 151 C162 146, 152 145, 136 146 C118 147, 101 146, 89 144 L86 170 C85 172, 81 172, 81 170 L78 151 C77 148, 73 148, 72 152 L68 168 C67 170, 64 170, 64 168 L65 144 C56 140, 48 135, 41 129 C34 128, 28 126, 25 123 C22 120, 21 115, 22 111 C24 109, 28 108, 33 106 C38 104, 45 104, 52 104 Z"
            fill="url(#sm-body)"
          />
          <ellipse cx="122" cy="118" rx="44" ry="24" fill="url(#sm-highlight)" />
          {/* Custom anatomical section planes */}
          <line x1="92" y1="68" x2="92" y2="176" stroke="#84FAF2" strokeWidth="2.5" strokeDasharray="5 5" />
          <line x1="146" y1="68" x2="146" y2="176" stroke="#84FAF2" strokeWidth="2.5" strokeDasharray="5 5" />
          <circle cx="92" cy="116" r="5" fill="#84FAF2" />
          <circle cx="146" cy="116" r="5" fill="#84FAF2" />
        </svg>
      );

    case 'peau':
    default:
      // Redesigned 3D Isometric Square Dermal Pad (Carré de peau porcine : Épiderme, Derme, Hypoderme + Suture chirurgicale)
      return (
        <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skin-epidermis" x1="36" y1="54" x2="204" y2="142" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9AFDF6" stopOpacity="0.92" />
              <stop offset="50%" stopColor="#26D9D0" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#04827D" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id="skin-dermis-left" x1="30" y1="106" x2="120" y2="178" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#17C8BF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#025E5B" stopOpacity="0.94" />
            </linearGradient>
            <linearGradient id="skin-dermis-right" x1="120" y1="144" x2="210" y2="112" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#036B67" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#013836" stopOpacity="0.96" />
            </linearGradient>
            <linearGradient id="skin-hypodermis-left" x1="30" y1="126" x2="120" y2="198" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#03524F" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#012423" stopOpacity="0.96" />
            </linearGradient>
            <linearGradient id="skin-hypodermis-right" x1="120" y1="164" x2="210" y2="132" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#012E2C" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#011716" stopOpacity="0.98" />
            </linearGradient>
            <filter id="skin-glow" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* Soft ambient shadow under the square skin pad */}
          <path
            d="M120 198 L34 152 L120 112 L206 152 Z"
            fill="#14C4BC"
            fillOpacity="0.2"
            filter="url(#skin-glow)"
          />

          {/* LAYER 3 (Bottom): Hypoderme / Tissu adipeux sous-cutané — Left & Right 3D faces */}
          <path
            d="M32 126 L120 168 L120 190 L32 148 Z"
            fill="url(#skin-hypodermis-left)"
          />
          <path
            d="M208 126 L120 168 L120 190 L208 148 Z"
            fill="url(#skin-hypodermis-right)"
          />
          {/* Subtle adipose lobules texture in hypodermis */}
          <g fill="#5CE6DC" fillOpacity="0.28">
            <ellipse cx="52" cy="147" rx="6" ry="3.5" transform="rotate(24 52 147)" />
            <ellipse cx="70" cy="156" rx="7" ry="3.8" transform="rotate(24 70 156)" />
            <ellipse cx="89" cy="165" rx="6.5" ry="3.5" transform="rotate(24 89 165)" />
            <ellipse cx="106" cy="173" rx="5.5" ry="3.2" transform="rotate(24 106 173)" />
            <ellipse cx="136" cy="172" rx="6" ry="3.2" transform="rotate(-24 136 172)" />
            <ellipse cx="156" cy="163" rx="6.5" ry="3.5" transform="rotate(-24 156 163)" />
            <ellipse cx="176" cy="153" rx="6" ry="3.5" transform="rotate(-24 176 153)" />
            <ellipse cx="192" cy="145" rx="5" ry="3" transform="rotate(-24 192 145)" />
          </g>

          {/* LAYER 2 (Middle): Derme dense — Left & Right 3D faces */}
          <path
            d="M32 104 L120 146 L120 168 L32 126 Z"
            fill="url(#skin-dermis-left)"
          />
          <path
            d="M208 104 L120 146 L120 168 L208 126 Z"
            fill="url(#skin-dermis-right)"
          />

          {/* LAYER 1 (Top): Épiderme — Isometric square surface ("Carré de peau") */}
          <path
            d="M120 62 L208 104 L120 146 L32 104 Z"
            fill="url(#skin-epidermis)"
          />
          {/* Crisp anatomical layer separation lines */}
          <path
            d="M32 104 L120 146 L208 104"
            stroke="#AEFBF6"
            strokeWidth="1.8"
            strokeOpacity="0.8"
          />
          <path
            d="M32 126 L120 168 L208 126"
            stroke="#5CE6DC"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />

          {/* Fusiform surgical incision & dermal depth in the center of the pad */}
          <path
            d="M74 102 C98 92, 142 94, 166 106 C142 116, 98 114, 74 102 Z"
            fill="#012423"
            fillOpacity="0.88"
          />
          <path
            d="M80 102 C102 96, 138 97, 160 106"
            stroke="#025E5B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Surgical suture stitches (Points simples) across the incision */}
          <g stroke="#011F1E" strokeWidth="2.6" strokeLinecap="round">
            <line x1="94" y1="93" x2="90" y2="110" />
            <line x1="111" y1="92" x2="107" y2="112" />
            <line x1="128" y1="93" x2="124" y2="113" />
            <line x1="145" y1="95" x2="141" y2="112" />
          </g>
          {/* Suture knots & entry points */}
          <g fill="#BDFDF9">
            <circle cx="94" cy="93" r="2" />
            <circle cx="90" cy="110" r="2" />
            <circle cx="111" cy="92" r="2" />
            <circle cx="107" cy="112" r="2" />
            <circle cx="128" cy="93" r="2" />
            <circle cx="124" cy="113" r="2" />
            <circle cx="145" cy="95" r="2" />
            <circle cx="141" cy="112" r="2" />
          </g>

          {/* Curved surgical needle & suture thread loop above the pad */}
          <path
            d="M141 112 C148 124, 168 120, 172 98 C175 82, 160 66, 144 72"
            stroke="#012423"
            strokeWidth="2"
            strokeDasharray="3 2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M142 74 C132 62, 144 46, 158 52"
            stroke="#E4FFFC"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

