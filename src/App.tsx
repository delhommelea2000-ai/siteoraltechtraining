import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Search,
  Snowflake,
  Sparkles,
  Sliders,
  GraduationCap,
  Stethoscope,
  Microscope,
  FileCheck2,
  Building2,
  UserCheck,
  Star,
} from 'lucide-react';
import {
  PigLineArt,
  PigSolidIcon,
  TranslucentOrganVisual,
  ProductCardMedia,
  ProductDetailGallery,
} from './components/OttVisuals';
import {
  PRODUCTS,
  SPECIALTIES,
  BLOG_POSTS,
  SpecialtyId,
  ProductItem,
  SpecialtyItem,
  BlogPost,
} from './data/ottData';

type ViewState =
  | { page: 'home' }
  | { page: 'specialty'; id: SpecialtyId }
  | { page: 'product'; id: string }
  | { page: 'catalog' }
  | { page: 'about' }
  | { page: 'blog' }
  | { page: 'blog-post'; id: string }
  | { page: 'contact' }
  | { page: 'legal' };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function App() {
  const [view, setView] = useState<ViewState>({ page: 'home' });
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<'specialties' | 'products'>('products');

  // Home "Nos produits" expand toggle
  const [showAllHomeProducts] = useState(false);

  // Scroll-driven Services Bars
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
  const serviceRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Interactive Protocol Timeline
  const [activeProtocolStep, setActiveProtocolStep] = useState<number>(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState<boolean>(false);

  // Interactive Testimonials Carousel
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);

  // Catalog filter
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<'all' | SpecialtyId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openSpecialtyFaqIndex, setOpenSpecialtyFaqIndex] = useState<number | null>(0);

  // Refs & state to align the "Pourquoi..." block on the Product Sheet with the "Informations" block (or "Prix" block if long text above)
  const productLeftColRef = useRef<HTMLDivElement | null>(null);
  const productInfoBlockRef = useRef<HTMLDivElement | null>(null);
  const productPriceBlockRef = useRef<HTMLDivElement | null>(null);
  const productIntroBlockRef = useRef<HTMLDivElement | null>(null);
  const [whyBlockMarginTop, setWhyBlockMarginTop] = useState<number>(56);

  // Interactive B2B Quote Tray
  const [, setQuoteItems] = useState<Record<string, number>>({
    'mandibule-porcine': 15,
    'maxillaire-superieur': 10,
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    institution: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    deliveryDate: '',
    customSpecs: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setProductsMenuOpen(false);
    setMobileMenuOpen(false);
  }, [view]);

  // Scroll-driven highlight for Services section
  useEffect(() => {
    if (view.page !== 'home') return;

    const handleScroll = () => {
      const rows = serviceRowRefs.current;
      if (!rows.length) return;

      const viewportFocalY = window.innerHeight * 0.52;
      let closestIdx = 0;
      let minDistance = Infinity;

      rows.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rowCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(rowCenterY - viewportFocalY);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveServiceIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view.page]);

  // Auto-advance timeline animation
  useEffect(() => {
    if (view.page !== 'home' || isTimelinePaused) return;
    const timer = window.setInterval(() => {
      setActiveProtocolStep((prev) => (prev + 1) % 3);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [view.page, isTimelinePaused]);

  const navigateTo = (nextView: ViewState) => {
    setView(nextView);
  };

  const updateQuoteQty = (productId: string, delta: number) => {
    setQuoteItems((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + delta);
      const copy = { ...prev };
      if (next === 0) {
        delete copy[productId];
      } else {
        copy[productId] = next;
      }
      return copy;
    });
  };

  const homeDisplayedProducts = useMemo(() => {
    if (showAllHomeProducts) return PRODUCTS;
    return PRODUCTS.filter((p) => p.featuredOnHome);
  }, [showAllHomeProducts]);

  const filteredCatalogProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSpecialty =
        selectedCategoryFilter === 'all' || p.specialties.includes(selectedCategoryFilter);
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchesSpecialty && matchesSearch;
    });
  }, [selectedCategoryFilter, searchQuery]);

  const currentSpecialty: SpecialtyItem | undefined = useMemo(() => {
    if (view.page === 'specialty') {
      return SPECIALTIES.find((s) => s.id === view.id) || SPECIALTIES[0];
    }
    return undefined;
  }, [view]);

  const currentProduct: ProductItem | undefined = useMemo(() => {
    if (view.page === 'product') {
      return PRODUCTS.find((p) => p.id === view.id) || PRODUCTS[0];
    }
    return undefined;
  }, [view]);

  const currentBlogPost: BlogPost | undefined = useMemo(() => {
    if (view.page === 'blog-post') {
      return BLOG_POSTS.find((b) => b.id === view.id) || BLOG_POSTS[0];
    }
    return undefined;
  }, [view]);

  // Align the "Pourquoi choisir cette pièce" block with the "Informations principales" block
  // (or with the "Prix" block when there is a lot of text higher up) while keeping the left column sticky on scroll
  useEffect(() => {
    if (view.page !== 'product') return;

    const updateWhyBlockAlignment = () => {
      if (window.innerWidth < 1024) {
        setWhyBlockMarginTop(40);
        return;
      }
      const infoEl = productInfoBlockRef.current;
      const priceEl = productPriceBlockRef.current;
      const introEl = productIntroBlockRef.current;
      if (!infoEl || !priceEl || !introEl) return;

      // infoEl.offsetTop and priceEl.offsetTop are relative to productLeftColRef (positioned/sticky),
      // so they remain invariant regardless of window scroll position.
      const infoTop = infoEl.offsetTop;
      const priceTop = priceEl.offsetTop;
      const introHeight = introEl.offsetHeight;

      // Minimum generous spacing between the 1st "Demander un devis" button and the "Pourquoi" block
      const minGap = 56;

      if (introHeight + minGap <= infoTop) {
        setWhyBlockMarginTop(infoTop - introHeight);
      } else if (introHeight + 36 <= priceTop) {
        setWhyBlockMarginTop(priceTop - introHeight);
      } else {
        setWhyBlockMarginTop(minGap);
      }
    };

    updateWhyBlockAlignment();
    const timer = window.setTimeout(updateWhyBlockAlignment, 120);

    const ro = new ResizeObserver(() => {
      updateWhyBlockAlignment();
    });
    if (productLeftColRef.current) ro.observe(productLeftColRef.current);
    if (productIntroBlockRef.current) ro.observe(productIntroBlockRef.current);
    window.addEventListener('resize', updateWhyBlockAlignment);

    return () => {
      window.clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener('resize', updateWhyBlockAlignment);
    };
  }, [view, currentProduct]);

  // Dynamic SEO Title & Meta Description per page
  useEffect(() => {
    let title =
      'Oral Tech Training (O.T.T.) | Pièces Anatomiques Porcines pour Formation Chirurgicale & Dentaire';
    let description =
      'Fournisseur français de pièces anatomiques porcines fraîches calibrées pour la chirurgie dentaire, viscérale, cervico-faciale, la suture et la R&D MedTech. Origine 100 % France.';

    if (view.page === 'product' && currentProduct) {
      title = `${currentProduct.h1Title} | Oral Tech Training (O.T.T.)`;
      description = `${currentProduct.summary} ${currentProduct.introHook.slice(0, 110)}...`;
    } else if (view.page === 'specialty' && currentSpecialty) {
      title = `${currentSpecialty.h1} — Modèles Biologiques Porcins | O.T.T.`;
      description = currentSpecialty.subtitle;
    } else if (view.page === 'catalog') {
      title = 'Catalogue de Pièces Anatomiques Porcines Fraîches (15 Spécimens) | O.T.T.';
      description =
        'Découvrez nos 15 pièces anatomiques porcines fraîches préparées sur-mesure à Clermont-Ferrand : mandibules, maxillaires, cœurs, rognons, foies, yeux, peau et découpe à la demande.';
    } else if (view.page === 'blog') {
      title = 'Blog & Guides Cliniques Wet Lab, Suture et Implantologie | O.T.T.';
      description =
        'Conseils scientifiques et guides logistiques pour organiser vos séminaires chirurgicaux, dissections et sessions Hands-On sur modèles biologiques porcins frais.';
    } else if (view.page === 'blog-post' && currentBlogPost) {
      title = `${currentBlogPost.title} | Blog O.T.T.`;
      description = currentBlogPost.excerpt;
    } else if (view.page === 'about') {
      title = 'À Propos — Jessica Fauvey & Distriporc | Oral Tech Training (O.T.T.)';
      description =
        'Découvrez l’histoire d’Oral Tech Training à Clermont-Ferrand : le binôme entre Jessica Fauvey et Distriporc pour fournir des pièces anatomiques porcines fraîches et prêtes à l’emploi partout en France.';
    } else if (view.page === 'contact') {
      title = 'Demander un Devis Sur-Mesure (Chorus Pro Accepté) | Oral Tech Training';
      description =
        'Obtenez un devis sous 24h pour vos commandes de pièces anatomiques porcines fraîches. Livraison isotherme express partout en France, paiement Chorus Pro accepté.';
    } else if (view.page === 'legal') {
      title = 'Mentions Légales & Politique de Confidentialité | Oral Tech Training (O.T.T.)';
      description =
        'Mentions légales, informations légales de la SAS Oral Tech Training (Clermont-Ferrand), hébergement OVH SAS et gestion des données personnelles (RGPD).';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [view, currentProduct, currentSpecialty, currentBlogPost]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const testimonials = [
    {
      id: 'snif',
      institution: '11e congrès SNIF',
      author: 'Dr. Anne BENHAMOU — Présidente & Comité scientifique',
      quote:
        'La présidente Dr. Anne BENHAMOU, le comité scientifique et l’organisation tenions à vous remercier pour votre implication sans faille lors de ce 11ème congrès SNIF qui fut une réussite tant en termes de contenu que d’audience.',
      rating: '5/5',
      ratingLabel: 'ÉTOILES · CONGRÈS SCIENTIFIQUE',
    },
    {
      id: 'fide',
      institution: 'Institut de formation FIDE',
      author: 'Elisa Bailleux — Responsable Communication',
      quote:
        'Un petit mot pour dire que tout était PARFAIT ; Une livraison à l’heure des mâchoires en excellent état ! Je pense qu’on n’a jamais eu de si bonnes conditions. Un grand merci pour l’aide précieuse pour que ces sessions se passent bien.',
      rating: '5/5',
      ratingLabel: 'ÉTOILES · FORMATION CLINIQUE',
    },
  ];

  const protocolSteps = [
    {
      num: '01',
      title: 'Commande',
      subtitle: 'Devis sous 24h',
      description:
        'Une réservation simple : vous planifiez vos besoins selon votre calendrier de formation, vos ateliers pratiques ou vos projets de recherche.',
    },
    {
      num: '02',
      title: 'Préparation',
      subtitle: 'Découpe sur-mesure',
      description:
        'Les découpes sont réalisées par notre partenaire expert Distriporc, basé à Clermont-Ferrand, vous garantissant un fournisseur de tissu biologique 100 % français, réactif et en circuit court.',
    },
    {
      num: '03',
      title: 'Livraison',
      subtitle: 'Produit frais',
      description:
        'Les pièces arrivent fraîches et prêtes à l’emploi dès l’ouverture du colis. Aucun temps de décongélation à gérer pour le formateur : la mise en place est immédiate. Veillez simplement à disposer d’un frigo (+2°C à +4°C) à réception.',
    },
  ];

  const servicesList = [
    {
      title: 'Devis sur demande',
      description:
        'Livraison réfrigérée rapide partout en France. Zéro rupture de chaîne du froid, zéro formalité douanière.',
    },
    {
      title: 'Préparation sur-mesure',
      description:
        'Des découpes franches et calibrées (avec ou sans tissus mous) pour faciliter vos essais en laboratoire et vos séances de formation.',
    },
    {
      title: 'Interlocuteur unique',
      description:
        'Un suivi simple et direct, une facturation claire (Chorus Pro) et une traçabilité sanitaire complète pour les facultés, écoles et centres de recherche.',
    },
  ];

  const clientLogos = [
    {
      src: '/assets/aistudio/Straumann_Logo_RGB_44_noClaim_d7c39a9a.svg',
      alt: 'Straumann',
    },
    {
      src: '/assets/aistudio/geistlich-pharma-logo_88cf9d37.svg',
      alt: 'Geistlich Pharma',
    },
    {
      src: '/assets/aistudio/MyZimVie_d75ad663.svg',
      alt: 'ZimVie',
    },
    {
      src: '/assets/aistudio/logo_8f161093.svg',
      alt: 'Nobel Biocare',
    },
    {
      src: '/assets/aistudio/logo-fide-couleur_383e0efc.png',
      alt: 'Institut FIDE',
    },
    {
      src: '/assets/aistudio/new-acteon_8b029005.webp',
      alt: 'Acteon',
    },
    {
      src: '/assets/aistudio/te_le_chargement__9__ffb863f0.png',
      alt: 'Université Clermont Auvergne',
    },
    {
      src: '/assets/aistudio/UCAlogoQlarge-inverse_80ac96d9.png',
      alt: 'Université Côte d’Azur',
    },
    {
      src: '/assets/aistudio/LOGO-BIOTECH-e1635334042734_7b104fe8.png',
      alt: 'Biotech Dental',
    },
    {
      src: '/assets/aistudio/thumb_8379b94b.jpg',
      alt: 'Generation Implant',
    },
    {
      src: '/assets/aistudio/images__39__527b0470.jpeg',
      alt: 'DOM Implant',
    },
  ];

  const isProductsActive =
    view.page === 'specialty' || view.page === 'product' || view.page === 'catalog';
  const isBlogActive = view.page === 'blog' || view.page === 'blog-post';

  return (
    <div className="min-h-screen bg-white text-[#141414] flex flex-col selection:bg-[#01B6AF] selection:text-white">
      {/* =====================================================================
          HEADER — Tous les éléments réunis dans la capsule ronde (navbar.jpg)
          Position fixed pour que le fond de gauche de la Hero monte jusqu'en haut
          et passe sous la navbar
      ===================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-3 pointer-events-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-full px-5 sm:px-7 py-2.5 shadow-[0_10px_35px_rgba(20,20,20,0.09)] border border-[#141414]/8 flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark inside the rounded pill (Exact same O.T.T. typo & weight as Footer, always turquoise, black on hover) */}
            <button
              type="button"
              onClick={() => navigateTo({ page: 'home' })}
              className="flex items-center gap-3 text-left cursor-pointer group pl-1 shrink-0"
            >
              <span className="font-display text-2xl sm:text-[26px] font-normal tracking-[0.04em] leading-none text-[#01B6AF] group-hover:text-[#141414] transition-colors select-none">
                O.T.T.
              </span>
              <span className="inline-block h-3.5 w-[1px] bg-[#01B6AF]" />
              <span className="inline-block text-[10px] sm:text-[11.5px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#01B6AF] font-medium group-hover:text-[#141414] transition-colors whitespace-nowrap">
                Oral Tech Training
              </span>
            </button>

            {/* Zone 2: Navigation Items inside the same rounded pill */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              <button
                type="button"
                onClick={() => navigateTo({ page: 'home' })}
                className={`px-5 py-2 rounded-full text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                  view.page === 'home'
                    ? 'bg-[#01B6AF] text-white font-medium shadow-sm'
                    : 'text-[#141414] hover:text-[#01B6AF] font-normal'
                }`}
              >
                Accueil
              </button>

              {/* Produits Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsMenuOpen((v) => !v)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                    isProductsActive
                      ? 'bg-[#01B6AF] text-white font-medium shadow-sm'
                      : 'text-[#141414] hover:text-[#01B6AF] font-normal'
                  }`}
                  aria-expanded={productsMenuOpen}
                >
                  <span>Produits</span>
                  <span
                    className={`w-5 h-5 rounded-full text-[10.5px] font-semibold flex items-center justify-center ${
                      isProductsActive
                        ? 'bg-[#141414] text-white'
                        : 'bg-[#141414]/10 text-[#141414]'
                    }`}
                  >
                    15
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Airy Mega Menu */}
                {productsMenuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
                    <div className="w-[860px] bg-white border border-[#141414]/10 rounded-[28px] shadow-[0_32px_90px_rgba(1,182,175,0.16)] p-8 grid grid-cols-12 gap-8">
                      <div className="col-span-4 border-r border-[#141414]/10 pr-6 flex flex-col justify-between">
                        <div className="space-y-2">
                          <button
                            type="button"
                            onMouseEnter={() => setActiveMenuTab('products')}
                            onClick={() => setActiveMenuTab('products')}
                            className={`w-full text-left p-4 rounded-[18px] transition-all cursor-pointer ${
                              activeMenuTab === 'products'
                                ? 'bg-[#01B6AF] text-white'
                                : 'hover:bg-[#F5F9F9] text-[#141414]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[15px] font-medium">Par produits</span>
                              <ChevronRight className="w-4 h-4 opacity-80" />
                            </div>
                          </button>

                          <button
                            type="button"
                            onMouseEnter={() => setActiveMenuTab('specialties')}
                            onClick={() => setActiveMenuTab('specialties')}
                            className={`w-full text-left p-4 rounded-[18px] transition-all cursor-pointer ${
                              activeMenuTab === 'specialties'
                                ? 'bg-[#01B6AF] text-white'
                                : 'hover:bg-[#F5F9F9] text-[#141414]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[15px] font-medium">Par spécialité</span>
                              <ChevronRight className="w-4 h-4 opacity-80" />
                            </div>
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => navigateTo({ page: 'catalog' })}
                          className="inline-flex items-center gap-2 text-[13px] text-[#01B6AF] hover:underline font-medium pt-4 border-t border-[#141414]/10 cursor-pointer"
                        >
                          <span>Tout le catalogue (15 pièces)</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="col-span-8">
                        {activeMenuTab === 'specialties' ? (
                          <div className="grid grid-cols-2 gap-3">
                            {SPECIALTIES.map((spec) => (
                              <button
                                key={spec.id}
                                type="button"
                                onClick={() => navigateTo({ page: 'specialty', id: spec.id })}
                                className="group text-left p-3.5 rounded-[16px] hover:bg-[#F5F9F9] transition-all cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[14.5px] font-medium text-[#141414] group-hover:text-[#01B6AF]">
                                    {spec.shortTitle}
                                  </span>
                                  <span className="font-mono-numbers text-[11px] text-[#999999]">
                                    {spec.number}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-x-5 gap-y-2 max-h-[320px] overflow-y-auto pr-2">
                            {PRODUCTS.map((prod) => (
                              <button
                                key={prod.id}
                                type="button"
                                onClick={() => navigateTo({ page: 'product', id: prod.id })}
                                className="group flex items-center justify-between gap-3 py-2 px-3 rounded-[14px] hover:bg-[#F5F9F9] text-left transition-all cursor-pointer"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-8 h-8 rounded-[10px] bg-[#F5F9F9] group-hover:bg-white border border-[#141414]/8 group-hover:border-[#01B6AF]/40 flex items-center justify-center p-1 shrink-0 transition-all">
                                    <TranslucentOrganVisual
                                      type={prod.visualType}
                                      className="w-full h-full transition-transform duration-200 group-hover:scale-110"
                                    />
                                  </div>
                                  {prod.id === 'decoupe-sur-mesure' ? (
                                    <div className="flex flex-col min-w-0">
                                      <span className="text-[11px] leading-tight text-[#555555] truncate">
                                        Vous n’avez pas trouvé votre produit ?
                                      </span>
                                      <span className="text-[13.5px] font-medium text-[#01B6AF] group-hover:underline truncate">
                                        Découpe sur-mesure
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-[14px] font-normal text-[#141414] group-hover:text-[#01B6AF] transition-colors truncate">
                                      {prod.shortName}
                                    </span>
                                  )}
                                </div>
                                {prod.id !== 'decoupe-sur-mesure' && (
                                  <span className="font-mono-numbers text-[11px] text-[#01B6AF] whitespace-nowrap shrink-0">
                                    {prod.dimension} · {prod.weight}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => navigateTo({ page: 'about' })}
                className={`px-5 py-2 rounded-full text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                  view.page === 'about'
                    ? 'bg-[#01B6AF] text-white font-medium shadow-sm'
                    : 'text-[#141414] hover:text-[#01B6AF] font-normal'
                }`}
              >
                À propos
              </button>

              <button
                type="button"
                onClick={() => navigateTo({ page: 'blog' })}
                className={`px-5 py-2 rounded-full text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                  isBlogActive
                    ? 'bg-[#01B6AF] text-white font-medium shadow-sm'
                    : 'text-[#141414] hover:text-[#01B6AF] font-normal'
                }`}
              >
                Blog
              </button>

              <button
                type="button"
                onClick={() => navigateTo({ page: 'contact' })}
                className={`px-5 py-2 rounded-full text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                  view.page === 'contact'
                    ? 'bg-[#01B6AF] text-white font-medium shadow-sm'
                    : 'text-[#141414] hover:text-[#01B6AF] font-normal'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Numéro de téléphone 06 71 12 44 67 en turquoise dans la capsule ronde */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="tel:+33671124467"
                className="inline-flex items-center gap-2 border border-[#01B6AF] rounded-full px-4 py-2 text-[#01B6AF] hover:bg-[#01B6AF] hover:text-white transition-all whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-[14px] h-[14px] shrink-0" />
                <span className="text-[14px] leading-none font-medium tracking-[0.02em]">06 71 12 44 67</span>
              </a>
            </div>

            {/* Mobile Menu Button inside the rounded pill */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 border border-[#141414]/25 rounded-full text-[#141414]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 bg-white rounded-[28px] shadow-[0_20px_50px_rgba(20,20,20,0.12)] border border-[#141414]/10 px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-1.5 text-base">
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'home' })}
                  className={`text-left px-4 py-2.5 rounded-full ${
                    view.page === 'home' ? 'bg-[#01B6AF] text-white font-medium' : ''
                  }`}
                >
                  Accueil
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'catalog' })}
                  className={`text-left px-4 py-2.5 rounded-full ${
                    isProductsActive ? 'bg-[#01B6AF] text-white font-medium' : 'text-[#01B6AF]'
                  }`}
                >
                  Tous nos produits (15)
                </button>
                <div className="pl-4 border-l border-[#141414]/15 space-y-1.5 py-1">
                  {SPECIALTIES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => navigateTo({ page: 'specialty', id: s.id })}
                      className="block text-left text-[14.5px] text-[#444444] py-0.5"
                    >
                      {s.shortTitle}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'about' })}
                  className={`text-left px-4 py-2.5 rounded-full ${
                    view.page === 'about' ? 'bg-[#01B6AF] text-white font-medium' : ''
                  }`}
                >
                  À propos
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'blog' })}
                  className={`text-left px-4 py-2.5 rounded-full ${
                    isBlogActive ? 'bg-[#01B6AF] text-white font-medium' : ''
                  }`}
                >
                  Blog
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'contact' })}
                  className={`text-left px-4 py-2.5 rounded-full ${
                    view.page === 'contact' ? 'bg-[#01B6AF] text-white font-medium' : ''
                  }`}
                >
                  Contact
                </button>
                <a
                  href="tel:+33671124467"
                  className="inline-flex items-center justify-center gap-2 border border-[#01B6AF] rounded-full px-5 py-2.5 text-[#01B6AF] hover:bg-[#01B6AF] hover:text-white transition-all mt-2"
                >
                  <Phone className="w-[14px] h-[14px] shrink-0" />
                  <span className="text-[14px] leading-none font-medium tracking-[0.02em]">06 71 12 44 67</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================================
          MAIN CONTENT
      ===================================================================== */}
      <main
        className={`flex-grow ${
          view.page === 'home' ? '' : view.page === 'product' ? 'pt-20' : 'pt-24'
        }`}
      >
        {view.page === 'home' && (
          <>
            {/* ===============================================================
                SECTION 1 — HERO
                Partie gauche légèrement agrandie (54% / 46%), coupure nette sans dégradé,
                texte aligné avec la navbar, O.T.T. identique au footer.
            =============================================================== */}
            <section className="relative min-h-screen overflow-hidden bg-white z-20">
              {/* Full-bleed Left Background (58% width on lg+) — Photo réelle d'entraînement (entrainement.jpg) */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-[58%] bg-[#043538] overflow-hidden pointer-events-none z-0">
                <motion.img
                  initial={{ scale: 1.05, opacity: 0.9 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  src="/assets/aistudio/entrainement.jpg"
                  alt="Entraînement chirurgical pratique Oral Tech Training"
                  className="absolute inset-0 w-full h-full object-cover object-[54%_38%] select-none"
                />
                {/* Dégradé subtil assurant le contraste du texte O.T.T., de la localisation et des pilules d'action */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(3, 28, 30, 0.6) 0%, rgba(1, 182, 175, 0.1) 28%, rgba(4, 45, 48, 0.32) 65%, rgba(4, 45, 48, 0.85) 100%), linear-gradient(90deg, rgba(3, 28, 30, 0.32) 0%, transparent 55%, rgba(1, 182, 175, 0.2) 100%)',
                  }}
                />
              </div>

              {/* Surface blanche droite avec animation naturelle de glissement soyeux et ombre verticale douce */}
              <motion.div
                initial={{ x: '10%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block absolute inset-y-0 right-0 w-[42%] bg-white shadow-[-16px_0_32px_rgba(20,20,20,0.06)] border-l border-[#141414]/5 z-10 pointer-events-none"
              />

              {/* Unified 1280px Container so Hero aligns with Navbar and all sections at any screen width */}
              <div className="relative z-20 max-w-[1280px] mx-auto lg:px-12 min-h-screen grid grid-cols-1 lg:grid-cols-[58%_42%]">
                {/* Left Column (58%): Text aligned with Navbar O.T.T. via lg:pl-8 */}
                <div className="relative overflow-hidden lg:overflow-visible bg-[#043538] lg:bg-transparent flex flex-col justify-between pt-28 lg:pt-32 pb-12 px-6 md:px-12 lg:px-0 lg:pl-8 lg:pr-8 min-h-[540px] lg:min-h-screen z-10">
                  {/* Mobile-only background image — Photo réelle entraînement */}
                  <div className="lg:hidden absolute inset-0 bg-[#043538] overflow-hidden pointer-events-none">
                    <img
                      src="/assets/aistudio/entrainement.jpg"
                      alt="Entraînement chirurgical pratique Oral Tech Training"
                      className="absolute inset-0 w-full h-full object-cover object-[54%_38%] select-none"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(3, 28, 30, 0.62) 0%, rgba(1, 182, 175, 0.1) 28%, rgba(4, 45, 48, 0.35) 65%, rgba(4, 45, 48, 0.86) 100%)',
                      }}
                    />
                  </div>

                  {/* Top row */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 h-6 flex items-center"
                  >
                    <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-white/95 font-medium">
                      Clermont-Ferrand · France
                    </p>
                  </motion.div>

                  {/* Middle/Bottom O.T.T. — Exact same font-display, font-normal, tracking-[0.04em] as Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mt-auto mb-6"
                  >
                    <div className="font-display text-[4.75rem] sm:text-[6.5rem] xl:text-[7.75rem] font-normal tracking-[0.04em] text-white leading-none select-none">
                      O.T.T.
                    </div>
                  </motion.div>

                  {/* Bottom Horizontal Bar — Left Side (Locked height h-[44px]) */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 h-auto lg:h-[44px] flex flex-wrap lg:flex-nowrap items-center gap-2 xl:gap-2.5"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById('section-5-catalogue')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="h-[42px] inline-flex items-center border border-white/85 rounded-full px-3.5 xl:px-4 text-[12px] xl:text-[12.5px] text-white hover:bg-white hover:text-[#043538] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Spécimens anatomiques
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateTo({ page: 'about' })}
                      className="h-[42px] inline-flex items-center border border-white/85 rounded-full px-3.5 xl:px-4 text-[12px] xl:text-[12.5px] text-white hover:bg-white hover:text-[#043538] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Livraison en France
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById('section-6-specialites')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="h-[42px] inline-flex items-center border border-white/85 rounded-full px-3.5 xl:px-4 text-[12px] xl:text-[12.5px] text-white hover:bg-white hover:text-[#043538] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Idéal TP &amp; Formations
                    </button>
                  </motion.div>
                </div>

                {/* Right Column (42%): Animated sliding white block over the image with subtle vertical shadow */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="relative z-20 bg-white lg:bg-transparent shadow-[0_-12px_32px_rgba(0,0,0,0.08)] lg:shadow-none flex flex-col justify-between pt-12 lg:pt-32 pb-12 px-6 md:px-12 lg:px-0 lg:pl-[90px]"
                >
                  {/* Top & Middle Content: H1 avec saut de ligne après FOURNISSEUR */}
                  <div className="max-w-xl">
                    <h1 className="font-display text-4xl sm:text-5xl xl:text-[3.35rem] font-light tracking-[0.02em] text-[#141414] leading-[1.08] uppercase">
                      FOURNISSEUR<br />DE PIÈCES ANATOMIQUES PORCINES
                      <span className="ott-cursor-line" aria-hidden="true" />
                    </h1>

                    <div className="my-8">
                      <PigLineArt className="w-56 sm:w-64 h-auto text-[#141414]" />
                    </div>

                    <p className="font-body text-[16px] sm:text-[17px] leading-[1.65] text-[#444444] font-normal max-w-md">
                      Le premier partenaire biologique en France pour les centres de formations et les
                      laboratoires de R&amp;D.
                    </p>
                  </div>

                  {/* Bottom Horizontal Bar — Right Side (Locked height h-[44px], strictly aligned with Left capsules) */}
                  <div className="mt-10 lg:mt-auto h-auto lg:h-[44px] flex flex-wrap lg:flex-nowrap items-center gap-3 xl:gap-4">
                    <button
                      type="button"
                      onClick={() => navigateTo({ page: 'contact' })}
                      className="h-[42px] inline-flex items-center gap-2 border border-[#141414] rounded-full px-5 text-[12.5px] xl:text-[13px] font-normal text-[#141414] hover:bg-[#01B6AF] hover:border-[#01B6AF] hover:text-white transition-all whitespace-nowrap cursor-pointer"
                    >
                      <span>Devis sur-mesure</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => navigateTo({ page: 'catalog' })}
                      className="h-[42px] inline-flex items-center gap-2 rounded-full px-5 bg-[#01B6AF]/85 backdrop-blur-md border border-white/30 text-[12.5px] xl:text-[13px] font-medium text-white shadow-[0_8px_24px_rgba(1,182,175,0.28)] hover:bg-[#01B6AF] transition-all whitespace-nowrap cursor-pointer"
                    >
                      <span>Voir le catalogue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 2 — CHIFFRES CLÉS
                (Supprimé : "Chiffres Clés · Indicateur & Valeur")
            =============================================================== */}
            <section className="relative z-10 bg-white py-24 sm:py-28 border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="max-w-5xl"
                >
                  <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414] leading-[1.14] tracking-[-0.02em]">
                    <span className="block">Oral Tech Training,</span>
                    <span className="block lg:whitespace-nowrap">
                      Fournisseur d’organes porcins prêts à l’emploi
                    </span>
                  </h2>
                </motion.div>

                {/* 4 Vertical Hairline Columns */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-r border-[#141414]/15"
                >
                  {[
                    {
                      label: 'Expérience',
                      value: '30 ans',
                      sub: 'Savoir-faire au service de la formation',
                    },
                    {
                      label: 'Origine France',
                      value: '100 %',
                      sub: 'Filière française en circuit court',
                    },
                    {
                      label: 'Pièces découpées',
                      value: '99 k+',
                      sub: 'Pièces préparées sur-mesure',
                    },
                    {
                      label: 'Ateliers effectués',
                      value: '60 k',
                      sub: 'Formations et ateliers accompagnés',
                    },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={fadeUp}
                      className="border-l border-[#141414]/15 pl-8 pr-6 py-4 flex flex-col justify-between min-h-[200px]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-[1.5px] bg-[#01B6AF]" />
                        <span className="font-display text-[15px] font-normal text-[#141414]">
                          {stat.label}
                        </span>
                      </div>
                      <div className="font-display text-5xl sm:text-[64px] font-light text-[#01B6AF] tracking-[-0.03em] leading-none my-7">
                        {stat.value}
                      </div>
                      <p className="text-[13px] text-[#666666] font-body">{stat.sub}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ===============================================================
                FENÊTRE D'IMAGE FIXE — MÂCHOIRES EN SALLE DE TP (machoire.jpg)
                L'image reste fixe à l'écran tandis que la section "Ils nous font confiance"
                remonte et passe par-dessus au scroll (effet rideau).
            =============================================================== */}
            <div
              className="relative h-[440px] sm:h-[560px] lg:h-[660px] w-full overflow-hidden [clip-path:inset(0)]"
              aria-label="Salle de travaux pratiques sur mâchoires porcines Oral Tech Training"
            >
              <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <img
                  src="/assets/aistudio/machoire_f2b0aec1.jpg"
                  alt="Travaux pratiques de chirurgie dentaire sur mâchoires porcines Oral Tech Training"
                  className="w-full h-full object-cover object-center select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/10 via-transparent to-[#141414]/20" />
              </div>
            </div>

            {/* ===============================================================
                SECTION 3 — ILS NOUS FONT CONFIANCE (Passe au-dessus de l'image fixe)
            =============================================================== */}
            <section className="relative z-20 bg-white py-20 border-b border-[#141414]/10 overflow-hidden shadow-[0_-20px_50px_rgba(20,20,20,0.08)]">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-[11.5px] uppercase tracking-[0.2em] text-[#01B6AF] font-medium mb-3">
                    Clients
                  </p>
                  <h2 className="font-display text-2xl sm:text-4xl font-light text-[#141414] tracking-[-0.01em]">
                    Ils nous font confiance
                  </h2>
                </motion.div>

                <div className="mt-12 ott-logo-mask overflow-hidden py-4">
                  <div className="animate-ott-marquee items-center gap-14 sm:gap-20">
                    {[...clientLogos, ...clientLogos].map((logo, idx) => (
                      <div
                        key={`${logo.alt}-${idx}`}
                        className="flex items-center justify-center shrink-0 px-2"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="h-9 sm:h-12 w-auto max-w-[150px] object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 4 — ABANDONNEZ LE SOURCING ARTISANAL
                Titre placé au-dessus (comme "Des modèles biologiques pour chaque spécialité"),
                la partie bleue encadre simplement les cartes.
            =============================================================== */}
            <section className="py-24 sm:py-28 bg-white border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="max-w-3xl mx-auto text-center mb-16"
                >
                  <h2 className="font-display text-3xl sm:text-5xl font-light leading-[1.12] tracking-[-0.02em]">
                    <span className="text-[#141414] block">Abandonnez le sourcing artisanal</span>
                    <span className="text-[#01B6AF] block mt-1">de vos spécimens anatomiques.</span>
                  </h2>
                  <p className="font-body text-[16px] text-[#555555] leading-relaxed font-normal mt-5 max-w-2xl mx-auto">
                    Dites au revoir aux pièces inadaptées qui arrivent impropres aux ateliers de
                    dissection. Des tissus et organes porcins préparés spécifiquement pour les
                    professionnels de la santé.
                  </p>
                </motion.div>

                {/* Partie bleue qui encadre simplement les 3 cartes */}
                <div className="rounded-[36px] bg-[#01B6AF] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_28px_80px_rgba(1,182,175,0.20)]">
                  <div
                    aria-hidden="true"
                    className="w-[480px] h-[480px] rounded-full bg-white/12 blur-3xl absolute -top-36 -right-20 pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="w-[420px] h-[420px] rounded-full bg-[#043538]/20 blur-3xl absolute -bottom-36 -left-20 pointer-events-none"
                  />

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
                  >
                    {[
                      {
                        num: '01',
                        icon: Snowflake,
                        title: 'Produit frais',
                        desc: 'Emballages adaptés pour maintenir une chaîne de fraîcheur irréprochable.',
                      },
                      {
                        num: '02',
                        icon: Sliders,
                        title: 'Flexibilité des volumes',
                        desc: 'Envoi de petites et grandes quantités selon vos besoins.',
                      },
                      {
                        num: '03',
                        icon: Sparkles,
                        title: 'Découpe sur-mesure',
                        desc: 'Établissement de devis personnalisés pour chaque type de projet.',
                      },
                    ].map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.num}
                          variants={fadeUp}
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => navigateTo({ page: 'product', id: 'decoupe-sur-mesure' })}
                          className="rounded-[24px] bg-white/15 hover:bg-white hover:text-[#141414] backdrop-blur-md border border-white/30 p-8 flex flex-col justify-between min-h-[250px] transition-colors duration-300 group cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-8">
                            <div className="w-11 h-11 rounded-full bg-white text-[#01B6AF] group-hover:bg-[#01B6AF] group-hover:text-white flex items-center justify-center transition-colors">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="font-mono-numbers text-xs text-white/75 group-hover:text-[#01B6AF] transition-colors">
                              {item.num}
                            </span>
                          </div>

                          <div>
                            <h3 className="font-display text-xl font-normal text-white group-hover:text-[#141414] transition-colors">
                              {item.title}
                            </h3>
                            <p className="font-body text-[14.5px] text-white/90 group-hover:text-[#555555] mt-2 leading-relaxed transition-colors">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 5 — ACHAT D'ORGANES POUR TRAVAUX PRATIQUES
            =============================================================== */}
            <section id="section-5-catalogue" className="relative z-20 bg-white py-24 sm:py-28 border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
                >
                  <div>
                    <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414] tracking-[-0.02em]">
                      Achat d’organes pour travaux pratiques
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'catalog' })}
                    className="inline-flex items-center gap-3 bg-white border border-[#141414] rounded-full px-7 py-3 text-[13.5px] font-normal text-[#141414] hover:bg-[#141414] hover:text-white transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <span>Voir notre catalogue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>

                {/* Translucent Organ Cards Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                  {homeDisplayedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      onClick={() => navigateTo({ page: 'product', id: product.id })}
                      className="group cursor-pointer flex flex-col"
                    >
                      <ProductCardMedia type={product.visualType} />

                      <div className="mt-3.5 rounded-[16px] border border-[#141414]/20 bg-white px-4 py-3.5 transition-colors group-hover:border-[#01B6AF]">
                        <h3 className="font-display text-[17px] font-normal text-[#141414] truncate">
                          {product.shortName}
                        </h3>
                        <div className="w-full h-[1px] bg-[#141414]/15 my-2" />
                        <div className="flex items-center justify-between text-[13px] text-[#333333]">
                          <span>{product.dimension}</span>
                          <span className="text-[#01B6AF] font-mono-numbers text-[11.5px]">
                            {product.weight}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 6 — SERVICES
                Animation bleue déclenchée au scroll + icône stick validé (Check)
            =============================================================== */}
            <section className="bg-white py-24 sm:py-28 border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12"
                >
                  <div className="lg:col-span-6">
                    <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414] leading-[1.12] tracking-[-0.02em]">
                      Services
                    </h2>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-body text-[15px] text-[#666666] leading-relaxed max-w-lg lg:ml-auto">
                      Un accompagnement sur-mesure pour les universités, centres de simulation et
                      laboratoires de R&amp;D partout en France.
                    </p>
                  </div>
                </motion.div>

                {/* Scroll-driven Service Rows with Checkmark */}
                <div className="space-y-3.5">
                  {servicesList.map((srv, idx) => {
                    const isActive = activeServiceIdx === idx;
                    return (
                      <div
                        key={srv.title}
                        ref={(el) => {
                          serviceRowRefs.current[idx] = el;
                        }}
                        className={`rounded-[22px] px-7 sm:px-10 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center transition-all duration-500 ${
                          isActive
                            ? 'bg-[#01B6AF] text-white shadow-[0_18px_45px_rgba(1,182,175,0.20)]'
                            : 'bg-[#F6F9F9] text-[#141414]'
                        }`}
                      >
                        <div className="lg:col-span-4">
                          <h3 className="font-display text-xl sm:text-2xl font-light">
                            {srv.title}
                          </h3>
                        </div>
                        <div className="lg:col-span-7">
                          <p
                            className={`font-body text-[14.5px] leading-relaxed transition-colors duration-500 ${
                              isActive ? 'text-white/95' : 'text-[#555555]'
                            }`}
                          >
                            {srv.description}
                          </p>
                        </div>
                        <div className="lg:col-span-1 flex lg:justify-end">
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                              isActive
                                ? 'bg-white text-[#01B6AF] scale-105'
                                : 'bg-[#01B6AF] text-white'
                            }`}
                          >
                            <Check className="w-4 h-4 stroke-[2.5]" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 7 — DES MODÈLES BIOLOGIQUES POUR CHAQUE SPÉCIALITÉ
                Sans fond turquoise, même esthétique que les cartes de la section
                "Achat d'organes pour travaux pratiques", avec les 4 photos dédiées.
            =============================================================== */}
            <section id="section-6-specialites" className="bg-white py-24 sm:py-28 border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="max-w-2xl mx-auto text-center mb-16"
                >
                  <h2 className="font-display text-3xl sm:text-5xl font-light leading-[1.12] tracking-[-0.02em]">
                    <span className="text-[#141414] block">Des modèles biologiques</span>
                    <span className="text-[#01B6AF] block mt-1">pour chaque spécialité.</span>
                  </h2>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {[
                    {
                      num: '01',
                      id: 'rd-medtech' as SpecialtyId,
                      title: 'Laboratoire de R&D',
                      image: '/assets/aistudio/labo_rd_microscope.jpg',
                      desc: 'Testez vos innovations médicales (implants, biomatériaux, instruments) sur un tissu porcin frais aux propriétés très proches de celles de l’humain.',
                    },
                    {
                      num: '02',
                      id: 'chirurgie-dentaire' as SpecialtyId,
                      title: 'Chirurgie dentaire',
                      image: '/assets/aistudio/fs_3b9bff81.jpg',
                      desc: 'Organisez vos formations de chirurgie dentaire (implantologie, parodontologie, sinus lift et greffes osseuses) sans contrainte grâce à nos mâchoires fraîches prêtes à l’emploi.',
                    },
                    {
                      num: '03',
                      id: 'chirurgie-viscerale-vasculaire' as SpecialtyId,
                      title: 'Chirurgie générale',
                      image: '/assets/aistudio/entrainement_pratique_chirurgie_cef378c1.webp',
                      desc: 'Entraînez vos équipes aux gestes chirurgicaux (sutures, chirurgie vasculaire, digestive ou cœlioscopie) sur des organes frais lavés et préparés sur-mesure.',
                    },
                    {
                      num: '04',
                      id: 'enseignement-superieur' as SpecialtyId,
                      title: 'Enseignement',
                      image: '/assets/aistudio/mxl00736_copie_teal.jpg',
                      desc: 'Formez vos étudiants en médecine, biologie et écoles vétérinaires sur des organes entiers, garantis sans formol et livrés selon votre calendrier.',
                    },
                  ].map((card) => (
                    <motion.div
                      key={card.num}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => navigateTo({ page: 'specialty', id: card.id })}
                      className="group cursor-pointer flex flex-col"
                    >
                      <div className="aspect-square rounded-[22px] border border-[#141414]/20 bg-white overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:border-[#01B6AF] group-hover:shadow-[0_20px_50px_rgba(1,182,175,0.12)]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                          loading="lazy"
                        />
                      </div>

                      <div className="mt-3.5 rounded-[16px] border border-[#141414]/20 bg-white px-5 py-4 flex-1 flex flex-col transition-colors group-hover:border-[#01B6AF]">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display text-[19px] font-normal text-[#141414] group-hover:text-[#01B6AF] transition-colors">
                            {card.title}
                          </h3>
                          <span className="text-[#01B6AF] font-mono-numbers text-[12px] shrink-0">
                            {card.num}
                          </span>
                        </div>
                        <div className="w-full h-[1px] bg-[#141414]/15 my-2.5" />
                        <p className="font-body text-[13.5px] text-[#555555] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ===============================================================
                BANDEAU IMAGE — SUTURE CHIRURGICALE (suture.jpg)
                Placé au-dessus de "Simplifiez vos commandes publiques",
                recadré pour mieux voir la mâchoire (le support) tout en voyant la suture
            =============================================================== */}
            <div
              className="relative h-[260px] sm:h-[340px] lg:h-[420px] w-full overflow-hidden bg-[#141414]"
              aria-label="Atelier pratique de suture chirurgicale sur mâchoire porcine Oral Tech Training"
            >
              <img
                src="/assets/aistudio/suture.jpg"
                alt="Atelier pratique de suture chirurgicale sur mâchoire porcine Oral Tech Training"
                className="w-full h-full object-cover object-[48%_52%] select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/12 via-transparent to-[#141414]/15 pointer-events-none" />
            </div>

            {/* ===============================================================
                SECTION 8 — SIMPLIFIEZ VOS COMMANDES PUBLIQUES
                (Harmonisée avec l'esthétique exacte de "Abandonnez le sourcing artisanal")
            =============================================================== */}
            <section className="py-16 bg-white border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="rounded-[36px] bg-[#01B6AF] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-[0_28px_80px_rgba(1,182,175,0.22)]"
                >
                <div
                  aria-hidden="true"
                  className="w-[520px] h-[520px] rounded-full bg-white/12 blur-3xl absolute -top-40 -right-24 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="w-[420px] h-[420px] rounded-full bg-[#043538]/20 blur-3xl absolute -bottom-40 -left-20 pointer-events-none"
                />

                {/* Top Editorial Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end relative z-10">
                  <div className="lg:col-span-6">
                    <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-light text-white leading-[1.1] tracking-[-0.02em]">
                      Simplifiez vos commandes publiques
                    </h2>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="font-body text-[16px] text-white/95 leading-relaxed font-normal">
                      Nous acceptons les mandats administratifs et adaptons notre facturation
                      (Chorus Pro) aux exigences comptables des universités, des CHU et des centres
                      de recherche d’État (CNRS, Inserm).
                    </p>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-3 text-white/90 text-[13px] tracking-[0.08em] uppercase">
                    <PigSolidIcon className="w-7 h-4 text-white" />
                    <span>Universités · CHU · CNRS · Inserm · Écoles Vétérinaires</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'contact' })}
                    className="inline-flex items-center gap-3.5 bg-white text-[#141414] rounded-full pl-6 pr-2 py-2 text-[13.5px] font-medium hover:bg-[#141414] hover:text-white transition-all cursor-pointer group"
                  >
                    <span>Demander un devis Chorus Pro</span>
                    <span className="w-8 h-8 rounded-full bg-[#01B6AF] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
                </motion.div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 10 — TÉMOIGNAGES & AVIS CLIENTS (Carrousel non empilé)
            =============================================================== */}
            <section className="bg-white py-24 sm:py-28 border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left 4 Cols */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="lg:col-span-4 flex flex-col justify-between"
                  >
                    <div>
                      <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414] leading-[1.12] tracking-[-0.02em]">
                        Témoignages &amp; Avis Clients
                      </h2>
                      <p className="font-body text-[15px] text-[#666666] mt-4 leading-relaxed">
                        Découvrez les retours des congrès scientifiques et instituts de formation
                        accompagnés par Oral Tech Training.
                      </p>
                    </div>

                    <div className="mt-8">
                      <button
                        type="button"
                        onClick={() => navigateTo({ page: 'contact' })}
                        className="inline-flex items-center gap-2.5 border border-[#141414] rounded-full px-6 py-3 text-[13.5px] font-normal text-[#141414] hover:bg-[#01B6AF] hover:border-[#01B6AF] hover:text-white transition-all cursor-pointer"
                      >
                        <span>Nous contacter</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Right 8 Cols: Single-Card Carousel */}
                  <div className="lg:col-span-8">
                    <div className="overflow-hidden rounded-[28px]">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${activeTestimonialIdx * 100}%)` }}
                      >
                        {testimonials.map((item) => (
                          <div key={item.id} className="w-full shrink-0">
                            <div className="rounded-[28px] bg-[#F5FAFA] border border-[#01B6AF]/20 p-8 sm:p-12 flex flex-col justify-between min-h-[320px]">
                              <div>
                                <div className="font-display text-5xl leading-none text-[#01B6AF] select-none">
                                  “
                                </div>
                                <p className="font-body text-[17px] sm:text-[19px] leading-[1.65] text-[#141414] mt-3 font-normal">
                                  « {item.quote} »
                                </p>
                              </div>

                              <div className="mt-10 pt-6 border-t border-[#141414]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                                <div>
                                  <div className="font-display text-xl font-normal text-[#141414]">
                                    {item.institution}
                                  </div>
                                  <div className="font-body text-[14px] text-[#666666] mt-0.5">
                                    {item.author}
                                  </div>
                                </div>

                                <div className="sm:text-right shrink-0">
                                  <div className="font-display text-4xl sm:text-5xl font-light text-[#141414] tracking-tight leading-none">
                                    {item.rating}
                                  </div>
                                  <div
                                    className="flex items-center sm:justify-end gap-1 mt-2 text-[#01B6AF]"
                                    aria-label="5 étoiles sur 5"
                                  >
                                    {[0, 1, 2, 3, 4].map((starIdx) => (
                                      <Star
                                        key={starIdx}
                                        className="w-4 h-4 fill-[#01B6AF] text-[#01B6AF]"
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-between pt-5 px-1">
                      <div className="flex items-center gap-2">
                        {testimonials.map((t, idx) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setActiveTestimonialIdx(idx)}
                            aria-label={`Aller à l'avis ${idx + 1}`}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              activeTestimonialIdx === idx
                                ? 'w-8 bg-[#01B6AF]'
                                : 'w-2 bg-[#141414]/20 hover:bg-[#141414]/40'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveTestimonialIdx(
                              (prev) => (prev - 1 + testimonials.length) % testimonials.length
                            )
                          }
                          aria-label="Témoignage précédent"
                          className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center text-[#141414] hover:border-[#01B6AF] hover:text-[#01B6AF] transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)
                          }
                          aria-label="Témoignage suivant"
                          className="w-10 h-10 rounded-full border border-[#141414]/20 flex items-center justify-center text-[#141414] hover:border-[#01B6AF] hover:text-[#01B6AF] transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 11 — FOIRE AUX QUESTIONS (FAQ)
            =============================================================== */}
            <section className="bg-[#FAFBFB] py-24 sm:py-28 border-b border-[#141414]/10">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="lg:col-span-5"
                >
                  <p className="text-[11.5px] uppercase tracking-[0.2em] text-[#01B6AF] font-medium mb-3">
                    F.A.Q
                  </p>
                  <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414] leading-tight tracking-[-0.02em]">
                    Questions fréquentes
                  </h2>
                  <p className="font-body text-[15px] text-[#666666] mt-4 leading-relaxed">
                    Tout savoir sur la commande, la découpe sur-mesure et la livraison de vos pièces
                    anatomiques porcines.
                  </p>
                </motion.div>

                <div className="lg:col-span-7 divide-y divide-[#141414]/12 border-t border-b border-[#141414]/12">
                  {[
                    {
                      q: 'Puis-je acheter juste une pièce ?',
                      a: 'Oui, mais des frais de port conséquents seront à prévoir. Nous vous conseillons de prendre un colis de plusieurs pièces ou mâchoires : elles se conservent parfaitement au congélateur pendant plusieurs mois.',
                    },
                    {
                      q: 'Pouvez-vous réaliser des découpes spécifiques sur cahier des charges ?',
                      a: 'Oui, nous pouvons réaliser des découpes sur-mesure selon votre cahier des charges précis.',
                    },
                    {
                      q: 'J’ai une commande de dernière minute. Quel est le délai pour passer commande ?',
                      a: 'Zone Clermont-Ferrand, Lyon, Saint-Étienne, Loire : La veille pour le lendemain grâce à la proximité de notre partenaire logistique. En dehors de cette zone : 2 jours ouvrés minimum.',
                    },
                    {
                      q: 'En tant que fournisseur de tissu animal, proposez-vous des pièces anatomiques issues d’autres animaux ?',
                      a: 'Pour l’instant non, notre expertise se concentre exclusivement sur le porcin, mais nous pourrons élargir notre gamme ultérieurement.',
                    },
                  ].map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={faq.q} className="py-6">
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                        >
                          <h3 className="font-display text-lg sm:text-xl font-light text-[#141414] group-hover:text-[#01B6AF] transition-colors">
                            {faq.q}
                          </h3>
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              isOpen
                                ? 'bg-[#01B6AF] text-white'
                                : 'border border-[#141414]/25 text-[#141414] group-hover:border-[#01B6AF] group-hover:text-[#01B6AF]'
                            }`}
                          >
                            {isOpen ? (
                              <Minus className="w-3.5 h-3.5" />
                            ) : (
                              <Plus className="w-3.5 h-3.5" />
                            )}
                          </span>
                        </button>
                        {isOpen && (
                          <p className="font-body text-[15px] text-[#555555] mt-3.5 leading-relaxed pr-8">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ===============================================================
                SECTION 12 — PETITE SECTION "CONTACT" MINIMALISTE APRÈS LA FAQ
            =============================================================== */}
            <section className="bg-white py-20">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
              >
                <div>
                  <h2 className="font-display text-5xl sm:text-7xl font-extralight text-[#141414] tracking-[-0.03em] leading-none">
                    Contactez <span className="text-[#01B6AF] font-light">nous.</span>
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'contact' })}
                  className="inline-flex items-center gap-3.5 bg-[#141414] text-white rounded-full pl-7 pr-2.5 py-2.5 text-[14px] hover:bg-[#01B6AF] transition-all cursor-pointer self-start sm:self-auto group"
                >
                  <span>Demander un devis</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </motion.div>
            </section>
          </>
        )}

        {/* ===================================================================
            VIEW: SPECIALTY PAGE
        =================================================================== */}
        {view.page === 'specialty' && currentSpecialty && (
          <div className="bg-white">
            <section className="px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 pb-8 sm:pb-12">
              <div className="max-w-[1280px] mx-auto bg-[#01B6AF] text-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/80 mb-2.5">
                    <button
                      type="button"
                      onClick={() => navigateTo({ page: 'home' })}
                      className="hover:underline cursor-pointer"
                    >
                      Accueil
                    </button>
                    <span>/</span>
                    <span>Spécialité {currentSpecialty.number}</span>
                  </div>

                  <h1 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-light leading-[1.15] tracking-[-0.01em]">
                    {currentSpecialty.h1}
                  </h1>

                  <p className="font-body text-[14px] sm:text-[14.5px] text-white/90 mt-3 leading-relaxed max-w-xl">
                    {currentSpecialty.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => navigateTo({ page: 'contact' })}
                      className="inline-flex items-center gap-3 bg-white text-[#141414] rounded-full pl-5 pr-2 py-1.5 text-[13px] font-medium hover:bg-[#141414] hover:text-white transition-all cursor-pointer group"
                    >
                      <span>Obtenir un devis pour votre atelier</span>
                      <span className="w-7 h-7 rounded-full bg-[#01B6AF] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 bg-[#F6F8F7] rounded-[24px] p-7">
                <h2 className="text-[12px] uppercase tracking-[0.22em] text-[#01B6AF] mb-4 font-medium">
                  À qui s’adresse cette gamme ?
                </h2>
                <ul className="space-y-3 font-display text-lg text-[#141414]">
                  {currentSpecialty.audiences.map((aud) => (
                    <li key={aud} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#01B6AF] mt-2.5 shrink-0" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7 space-y-4 font-body text-[16px] text-[#444444] leading-relaxed">
                <h2 className="font-display text-2xl sm:text-3xl font-light text-[#141414] leading-snug">
                  {currentSpecialty.introHeading}
                </h2>
                <p className="text-[#141414] font-normal text-[16.5px]">
                  {currentSpecialty.introParagraph1}
                </p>
                <p>{currentSpecialty.introParagraph2}</p>
              </div>
            </section>

            <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414]">
                  Pièces anatomiques recommandées
                </h2>
                <PigSolidIcon className="w-12 h-7 text-[#01B6AF]" />
              </div>
              <div className="w-full h-[1px] bg-[#141414]/15 mt-4 mb-12" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter((p) => p.specialties.includes(currentSpecialty.id)).map(
                  (product) => (
                    <div
                      key={product.id}
                      onClick={() => navigateTo({ page: 'product', id: product.id })}
                      className="group flex flex-col cursor-pointer"
                    >
                      <ProductCardMedia type={product.visualType} />
                      <div className="mt-3.5 rounded-[16px] border border-[#141414]/20 bg-white p-4 group-hover:border-[#01B6AF]">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-xl font-normal text-[#141414]">
                            {product.shortName}
                          </h3>
                          <span className="font-mono-numbers text-xs text-[#01B6AF]">
                            {product.dimension} · {product.weight}
                          </span>
                        </div>
                        <div className="w-full h-[1px] bg-[#141414]/15 my-2.5" />
                        <p className="font-body text-[13.5px] text-[#555555] line-clamp-2">
                          {product.summary}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            <section className="bg-[#F6F8F7] py-20">
              <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <h2 className="font-display text-3xl sm:text-5xl font-light text-[#141414] mb-12">
                  Protocoles &amp; gestes chirurgicaux réalisables
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentSpecialty.clinicalDomains.map((dom) => (
                    <div key={dom.title} className="rounded-[26px] bg-white p-8">
                      <h3 className="font-display text-2xl font-normal text-[#141414] mb-4">
                        {dom.title}
                      </h3>
                      <ul className="space-y-3 font-body text-[14.5px] text-[#444444]">
                        {dom.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="text-[#01B6AF] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 border-b border-[#141414]/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-6 space-y-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#01B6AF] font-medium">
                    Qualité &amp; Logistique
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl font-light text-[#141414] leading-tight">
                    {currentSpecialty.logisticsHighlight.title}
                  </h2>
                  <ul className="space-y-4 pt-2">
                    {currentSpecialty.logisticsHighlight.points.map((pt) => (
                      <li key={pt.label} className="flex items-start gap-3.5 font-body text-[15px]">
                        <span className="w-5 h-5 rounded-full bg-[#01B6AF]/15 text-[#01B6AF] flex items-center justify-center text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <strong className="text-[#141414] font-medium">{pt.label} : </strong>
                          <span className="text-[#555555]">{pt.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 gap-4">
                  {currentSpecialty.technicalSpecs.map((spec) => (
                    <div
                      key={spec.title}
                      className="rounded-[20px] border border-[#141414]/15 bg-white p-6"
                    >
                      <h3 className="font-display text-xl font-normal text-[#141414]">
                        {spec.title}
                      </h3>
                      <p className="font-body text-[14.5px] text-[#555555] mt-1.5 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl sm:text-4xl font-light text-[#141414]">
                  Questions fréquentes
                </h2>
              </div>
              <div className="lg:col-span-7 divide-y divide-[#141414]/15 border-t border-b border-[#141414]/15">
                {currentSpecialty.faqs.map((f, idx) => {
                  const open = openSpecialtyFaqIndex === idx;
                  return (
                    <div key={f.question} className="py-5">
                      <button
                        type="button"
                        onClick={() => setOpenSpecialtyFaqIndex(open ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <h3 className="font-display text-xl font-light text-[#141414]">
                          {f.question}
                        </h3>
                        <span className="w-7 h-7 rounded-full border border-[#141414]/25 flex items-center justify-center shrink-0">
                          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>
                      {open && (
                        <p className="font-body text-[15px] text-[#555555] mt-3 leading-relaxed">
                          {f.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================
            VIEW: PRODUCT SHEET
            Au scroll, la colonne de gauche reste fixe (sticky) tandis que la
            colonne de droite défile avec animation fluide. Le 2e bouton
            "Demander un devis" est placé sous le bloc Conservation.
        =================================================================== */}
        {view.page === 'product' && currentProduct && (
          <>
            <section className="bg-white pt-10 sm:pt-14 pb-20 px-6 md:px-12 max-w-[1280px] mx-auto">
              <button
                type="button"
                onClick={() => navigateTo({ page: 'catalog' })}
                className="inline-flex items-center gap-2 text-[13.5px] text-[#01B6AF] hover:underline mb-8 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Retour aux produits</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
                {/* COLONNE DE GAUCHE FIXE AU SCROLL (Sticky) : Visuel + Informations produit + Prix */}
                <div
                  ref={productLeftColRef}
                  className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-3.5 relative"
                >
                  <ProductDetailGallery
                    key={currentProduct.id}
                    type={currentProduct.visualType}
                    productName={currentProduct.name}
                  />

                  {/* Informations principales */}
                  <div
                    ref={productInfoBlockRef}
                    className="rounded-[16px] border border-[#141414]/20 bg-white px-6 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-normal text-[#141414]">
                        {currentProduct.shortName}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#01B6AF] font-medium">
                        Origine France
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-[#141414]/15 my-2.5" />
                    <div className="flex items-center justify-between text-[15px] text-[#141414] font-mono-numbers">
                      <span>Cote : {currentProduct.dimension}</span>
                      <span>Poids : {currentProduct.weight}</span>
                    </div>
                  </div>

                  {/* Bloc prix : Prix à gauche (style Poids), montant à droite (style Origine France, ex: 38,00 € H.T.) */}
                  <div
                    ref={productPriceBlockRef}
                    className="rounded-[16px] border border-[#141414]/20 bg-white px-6 py-4 flex items-center justify-between"
                  >
                    <span className="text-[15px] text-[#141414] font-mono-numbers">
                      Prix
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#01B6AF] font-medium font-mono-numbers">
                      {currentProduct.priceHT}
                    </span>
                  </div>
                </div>

                {/* COLONNE DE DROITE DÉFILANTE AU SCROLL : Introduction, 1er CTA, Pourquoi (aligné avec Informations ou Prix), Utilisations/Caractéristiques, Conservation & 2e bouton devis */}
                <div className="lg:col-span-7 flex flex-col">
                  <motion.div
                    ref={productIntroBlockRef}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[#01B6AF] font-medium mb-2.5">
                      {currentProduct.categoryLabel}
                    </p>
                    <h1 className="font-display text-3xl sm:text-5xl font-light text-[#141414] leading-tight">
                      {currentProduct.h1Title}
                    </h1>

                    <div className="mt-5 space-y-4 font-body text-[16px] text-[#333333] leading-relaxed">
                      <p className="text-[#141414] font-normal">
                        {currentProduct.introHook}
                      </p>
                      <p className="text-[#444444]">
                        {currentProduct.clinicalDescription}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          updateQuoteQty(currentProduct.id, 5);
                          navigateTo({ page: 'contact' });
                        }}
                        className="inline-flex items-center gap-3 bg-[#01B6AF] text-white rounded-full px-7 py-3 text-[14px] font-medium hover:bg-[#043538] transition-all cursor-pointer"
                      >
                        <span>Demander un devis</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Bloc 1 — Pourquoi choisir cette pièce (aligné dynamiquement avec le bloc Informations ou le bloc Prix) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ marginTop: `${whyBlockMarginTop}px` }}
                    className="rounded-[16px] border border-[#141414]/20 bg-[#F6F8F7] px-6 py-5"
                  >
                    <h2 className="font-display text-2xl font-normal text-[#141414]">
                      {currentProduct.whyChooseHeading ||
                        'Pourquoi choisir cette pièce pour vos formations ?'}
                    </h2>
                    <div className="w-full h-[1px] bg-[#141414]/15 my-3" />
                    <ul className="space-y-2.5 font-body text-[14.5px] text-[#333333]">
                      {currentProduct.practicalBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="text-[#01B6AF] font-bold">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Blocs 2 & 3 — Exemple d'utilisation & Caractéristiques (fond blanc, contour noir fin, filet sous le titre) */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div className="rounded-[16px] border border-[#141414]/20 bg-white px-6 py-5">
                      <h2 className="font-display text-2xl font-normal text-[#141414]">
                        Exemple d’utilisation
                      </h2>
                      <div className="w-full h-[1px] bg-[#141414]/15 my-3" />
                      <ul className="space-y-2.5 font-body text-[14px] text-[#444444]">
                        {currentProduct.protocols.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <span className="text-[#01B6AF]">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[16px] border border-[#141414]/20 bg-white px-6 py-5">
                      <h2 className="font-display text-2xl font-normal text-[#141414]">
                        Caractéristiques
                      </h2>
                      <div className="w-full h-[1px] bg-[#141414]/15 my-3" />
                      <ul className="space-y-2.5 font-body text-[14px] text-[#444444]">
                        {currentProduct.anatomicalStructures.map((s) => (
                          <li key={s} className="flex items-start gap-2.5">
                            <span className="text-[#01B6AF]">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Bloc Conservation & Conditionnement */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="mt-6 rounded-[16px] border border-[#141414]/20 bg-white px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13.5px] font-body"
                  >
                    <div>
                      <strong className="text-[#141414] block mb-1">Conservation :</strong>
                      <span className="text-[#555555]">{currentProduct.conservation}</span>
                    </div>
                    <div>
                      <strong className="text-[#141414] block mb-1">Conditionnement :</strong>
                      <span className="text-[#555555]">{currentProduct.packaging}</span>
                    </div>
                  </motion.div>

                  {/* Deuxième bouton "Demander un devis" placé directement sous le bloc Conservation */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    className="mt-6 pt-1"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        updateQuoteQty(currentProduct.id, 5);
                        navigateTo({ page: 'contact' });
                      }}
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#01B6AF] text-white rounded-full px-7 py-4 text-[14.5px] font-medium hover:bg-[#043538] transition-all cursor-pointer shadow-sm group"
                    >
                      <span>Demander un devis</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

          {/* Section d'aide et d'informations pleine largeur (à l'instar de la section Contactez-nous de la page d'accueil) */}
          <section className="bg-[#FAFBFB] border-t border-[#141414]/10 py-20 sm:py-24">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[11.5px] uppercase tracking-[0.2em] text-[#01B6AF] font-medium mb-3">
                  Aide &amp; Informations
                </p>
                <h2 className="font-display text-4xl sm:text-6xl font-light text-[#141414] tracking-[-0.02em] leading-[1.12]">
                  Des questions ? <span className="text-[#01B6AF]">Notre blog vous répond.</span>
                </h2>
                <p className="font-body text-[15px] sm:text-[16px] text-[#555555] mt-4 leading-relaxed max-w-xl">
                  Retrouvez nos guides pratiques et conseils d’experts sur le choix des pièces anatomiques, la conservation au frais, la livraison réfrigérée partout en France et la facturation administrative Chorus Pro.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'blog' })}
                  className="inline-flex items-center gap-3.5 bg-[#141414] text-white rounded-full pl-7 pr-2.5 py-2.5 text-[14px] hover:bg-[#01B6AF] transition-all cursor-pointer group"
                >
                  <span>Consulter le blog</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </section>
        </>
      )}

        {/* ===================================================================
            VIEW: CATALOGUE COMPLET (15 Pièces)
        =================================================================== */}
        {view.page === 'catalog' && (
          <section className="bg-white py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-display text-5xl sm:text-7xl font-light text-[#141414]">
                Nos produits
              </h1>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#777777] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher une pièce..."
                    className="border border-[#141414]/30 rounded-full pl-10 pr-5 py-2 text-[13.5px] w-64 focus:outline-none focus:border-[#01B6AF]"
                  />
                </div>
                <PigSolidIcon className="w-14 h-8 text-[#01B6AF] hidden sm:block" />
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#141414]/15 mt-6 mb-10" />

            <div className="flex flex-wrap items-center gap-2.5 mb-12 text-[13px]">
              <button
                type="button"
                onClick={() => setSelectedCategoryFilter('all')}
                className={`rounded-full px-4 py-1.5 cursor-pointer transition-colors ${
                  selectedCategoryFilter === 'all'
                    ? 'bg-[#01B6AF] text-white'
                    : 'bg-[#F5F8F7] text-[#444444] hover:text-[#141414]'
                }`}
              >
                Tout voir (15)
              </button>
              {SPECIALTIES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(s.id)}
                  className={`rounded-full px-4 py-1.5 cursor-pointer transition-colors ${
                    selectedCategoryFilter === s.id
                      ? 'bg-[#01B6AF] text-white'
                      : 'bg-[#F5F8F7] text-[#444444] hover:text-[#141414]'
                  }`}
                >
                  {s.shortTitle}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredCatalogProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigateTo({ page: 'product', id: product.id })}
                  className="group flex flex-col cursor-pointer"
                >
                  <ProductCardMedia type={product.visualType} />
                  <div className="mt-3.5 rounded-[16px] border border-[#141414]/20 bg-white px-4 py-3.5 group-hover:border-[#01B6AF]">
                    <h2 className="font-display text-[19px] font-normal text-[#111111] truncate">
                      {product.shortName}
                    </h2>
                    <div className="w-full h-[1px] bg-[#141414]/15 my-2" />
                    <div className="flex items-center justify-between text-[13.5px] text-[#333333]">
                      <span>{product.dimension}</span>
                      <span className="font-mono-numbers text-[12px] text-[#01B6AF]">
                        {product.weight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            VIEW: À PROPOS (L'équipe, Protocole de commande, Atelier en préparation)
        =================================================================== */}
        {view.page === 'about' && (
          <div className="bg-white py-20 sm:py-24 px-6 md:px-12 max-w-[1280px] mx-auto space-y-24">
            {/* Section 1 : L'équipe derrière Oral Tech Training (avec image logo O.T.T.) */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="rounded-[28px] overflow-hidden border border-[#141414]/15 bg-[#F6F8F7]">
                  <img
                    src="/assets/aistudio/o.T_fac7bc51.jpg"
                    alt="Oral Tech Training — Fournisseur de pièces anatomiques porcines à Clermont-Ferrand"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#01B6AF] font-medium">
                  À propos
                </p>
                <h1 className="font-display text-4xl sm:text-5xl font-light text-[#141414] leading-[1.1] tracking-[-0.02em]">
                  Une équipe à taille humaine
                </h1>

                <div className="space-y-4 font-body text-[15.5px] text-[#444444] leading-relaxed pt-1">
                  <p>
                    Derrière O.T.T., il n’y a ni centre d’appels, ni plateforme anonyme. Il y a d’abord{' '}
                    <strong className="font-medium text-[#141414]">Jessica Fauvey</strong>, Présidente
                    d’Oral Tech Training et votre{' '}
                    <strong className="font-medium text-[#141414]">interlocutrice unique</strong>.
                    C’est elle qui note vos contraintes, vérifie les découpes avant le départ et
                    s’assure que le transporteur livre bien à l’heure de votre formation.
                  </p>
                  <p>
                    À ses côtés,{' '}
                    <strong className="font-medium text-[#141414]">Pascal Chabaud</strong>, Directeur
                    Général d’O.T.T. et dirigeant de{' '}
                    <strong className="font-medium text-[#141414]">Distriporc</strong> au 35 rue du
                    Charolais à Clermont-Ferrand, pilote l’atelier de préparation auvergnat. Ensemble,
                    ils garantissent une filière 100 % française en circuit court et la régularité des
                    pièces d’une session à l’autre — que vous commandiez 10 demi-mandibules ou 150
                    pieds de porc pour un congrès national.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-[18px] bg-[#F6F8F7] px-5 py-4">
                    <p className="font-display text-lg text-[#141414]">Jessica Fauvey</p>
                    <p className="text-[13px] text-[#01B6AF] font-medium">
                      Présidente &amp; Relation Clients
                    </p>
                  </div>
                  <div className="rounded-[18px] bg-[#F6F8F7] px-5 py-4">
                    <p className="font-display text-lg text-[#141414]">Pascal Chabaud</p>
                    <p className="text-[13px] text-[#01B6AF] font-medium">
                      Directeur Général · Expert Distriporc
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 : Comment se déroule votre commande chez O.T.T. ? */}
            <section
              id="section-7-protocole"
              className="pt-16 border-t border-[#141414]/15"
              onMouseEnter={() => setIsTimelinePaused(true)}
              onMouseLeave={() => setIsTimelinePaused(false)}
            >
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#01B6AF] font-medium mb-3">
                  De la commande à la paillasse
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-light text-[#141414] leading-[1.12] tracking-[-0.02em]">
                  Comment se déroule votre commande chez O.T.T. ?
                </h2>
              </div>

              {/* Light, Airy Animated Horizontal Timeline */}
              <div className="relative">
                <div className="hidden md:block absolute top-[20px] left-0 right-0 h-[1px] bg-[#141414]/12">
                  <div
                    className="h-[2px] -mt-[0.5px] bg-[#01B6AF] transition-all duration-700 ease-out"
                    style={{
                      width:
                        activeProtocolStep === 0
                          ? '33.33%'
                          : activeProtocolStep === 1
                          ? '66.66%'
                          : '100%',
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {protocolSteps.map((step, idx) => {
                    const isReached = idx <= activeProtocolStep;
                    const isCurrent = idx === activeProtocolStep;
                    return (
                      <div
                        key={step.num}
                        onClick={() => setActiveProtocolStep(idx)}
                        className="group cursor-pointer"
                      >
                        <div className="flex items-center mb-7">
                          <button
                            type="button"
                            onClick={() => setActiveProtocolStep(idx)}
                            className={`w-10 h-10 rounded-full font-mono-numbers text-xs flex items-center justify-center transition-all duration-300 cursor-pointer ${
                              isCurrent
                                ? 'bg-[#01B6AF] text-white ring-4 ring-[#01B6AF]/20 scale-105'
                                : isReached
                                ? 'bg-[#01B6AF] text-white'
                                : 'bg-white text-[#141414]/60 border border-[#141414]/20'
                            }`}
                          >
                            {step.num}
                          </button>
                        </div>

                        <p className="text-[11.5px] uppercase tracking-[0.2em] text-[#01B6AF] font-medium">
                          {step.subtitle}
                        </p>
                        <h3 className="font-display text-2xl font-light text-[#141414] mt-1.5 group-hover:text-[#01B6AF] transition-colors">
                          {step.title}
                        </h3>
                        <p className="font-body text-[15px] text-[#555555] mt-3 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Section 3 : Un atelier en préparation ou une question sur une découpe ? */}
            <section className="rounded-[28px] bg-[#FAFBFB] border border-[#141414]/15 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#01B6AF] font-medium mb-2.5">
                  On en parle simplement ?
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-light text-[#141414] leading-tight">
                  Un atelier en préparation ou une question sur une découpe ?
                </h2>
                <p className="font-body text-[15.5px] text-[#555555] mt-3 leading-relaxed">
                  Pas besoin d’avoir déjà figé toutes vos quantités. Écrivez-nous ou appelez Jessica
                  directement au <strong className="font-medium text-[#141414]">06 71 12 44 67</strong>{' '}
                  pour vérifier ce qui convient le mieux à votre programme ou explorer nos pièces
                  anatomiques.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'contact' })}
                  className="inline-flex items-center gap-3 bg-[#01B6AF] text-white rounded-full px-7 py-3.5 text-[14px] font-medium hover:bg-[#043538] transition-all cursor-pointer"
                >
                  <span>Échanger avec Jessica Fauvey</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'catalog' })}
                  className="inline-flex items-center gap-2.5 border border-[#141414]/30 bg-white text-[#141414] rounded-full px-6 py-3.5 text-[14px] hover:border-[#01B6AF] hover:text-[#01B6AF] transition-all cursor-pointer"
                >
                  <span>Découvrir le catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================
            VIEW: BLOG CLINIQUE
            Respecte exactement l'esthétique des cartes de la section
            "Des modèles biologiques pour chaque spécialité" avec images.
        =================================================================== */}
        {view.page === 'blog' && (
          <section className="bg-white py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#01B6AF] font-medium mb-2">
                  Conseils &amp; Guides Scientifiques
                </p>
                <h1 className="font-display text-5xl sm:text-6xl font-light text-[#141414]">
                  Le Blog O.T.T.
                </h1>
              </div>
              <PigSolidIcon className="w-14 h-8 text-[#01B6AF]" />
            </div>

            <div className="w-full h-[1px] bg-[#141414]/15 mt-6 mb-14" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {BLOG_POSTS.map((post) => (
                <motion.article
                  key={post.id}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => navigateTo({ page: 'blog-post', id: post.id })}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Bloc image supérieur (identique à "Des modèles biologiques pour chaque spécialité") */}
                  <div className="aspect-square rounded-[22px] border border-[#141414]/20 bg-white overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:border-[#01B6AF] group-hover:shadow-[0_20px_50px_rgba(1,182,175,0.12)]">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Bloc texte inférieur avec contour noir fin et filet de séparation sous le titre */}
                  <div className="mt-3.5 rounded-[16px] border border-[#141414]/20 bg-white px-5 py-4 flex-1 flex flex-col justify-between transition-colors group-hover:border-[#01B6AF]">
                    <div>
                      <div className="flex items-start justify-between gap-2.5">
                        <h2 className="font-display text-[18.5px] font-normal text-[#141414] group-hover:text-[#01B6AF] transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <span className="text-[#01B6AF] font-mono-numbers text-[12px] shrink-0 mt-0.5">
                          {post.num}
                        </span>
                      </div>

                      <div className="w-full h-[1px] bg-[#141414]/15 my-2.5" />

                      <p className="font-body text-[13.5px] text-[#555555] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#141414]/10 flex items-center justify-between text-[12px] text-[#555555]">
                      <span>
                        {post.category} · {post.readTime}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#01B6AF] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>
        )}

        {/* ===================================================================
            VIEW: ARTICLE DE BLOG
        =================================================================== */}
        {view.page === 'blog-post' && currentBlogPost && (
          <article className="bg-white py-24 px-6 md:px-12 max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => navigateTo({ page: 'blog' })}
              className="inline-flex items-center gap-2 text-[13.5px] text-[#01B6AF] hover:underline mb-8 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </button>

            <p className="text-[12px] uppercase tracking-[0.22em] text-[#01B6AF] font-medium mb-3">
              {currentBlogPost.category} · Lecture {currentBlogPost.readTime}
            </p>

            <h1 className="font-display text-3xl sm:text-5xl font-light text-[#141414] leading-tight">
              {currentBlogPost.title}
            </h1>

            <p className="font-body text-[17px] text-[#444444] mt-6 leading-relaxed">
              {currentBlogPost.excerpt}
            </p>

            <div className="my-8 rounded-[22px] border border-[#141414]/20 overflow-hidden aspect-[16/9] bg-[#F6F8F7]">
              <img
                src={currentBlogPost.image}
                alt={currentBlogPost.imageAlt}
                className="w-full h-full object-cover select-none"
              />
            </div>

            <div className="mt-10 space-y-10">
              {currentBlogPost.sections.map((sec) => (
                <div key={sec.heading} className="space-y-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    {sec.heading}
                  </h2>
                  <p className="font-body text-[15.5px] text-[#444444] leading-relaxed">
                    {sec.body}
                  </p>
                  {sec.bullets && (
                    <ul className="space-y-2 pt-2 font-body text-[15px] text-[#333333]">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="text-[#01B6AF]">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-[22px] border border-[#141414]/20 bg-[#F6F8F7] p-8">
              <h3 className="font-display text-2xl font-light text-[#141414]">
                Besoin de ces spécimens pour votre prochaine session ?
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigateTo({ page: 'contact' })}
                  className="bg-[#01B6AF] text-white rounded-full px-6 py-2.5 text-[13.5px] cursor-pointer"
                >
                  Demander un devis sur-mesure
                </button>
                <button
                  type="button"
                  onClick={() =>
                    navigateTo({ page: 'specialty', id: currentBlogPost.relatedSpecialty })
                  }
                  className="border border-[#141414] rounded-full px-6 py-2.5 text-[13.5px] cursor-pointer"
                >
                  Voir la spécialité dédiée
                </button>
              </div>
            </div>
          </article>
        )}

        {/* ===================================================================
            VIEW: CONTACT & DEVIS SUR-MESURE
        =================================================================== */}
        {view.page === 'contact' && (
          <section className="bg-white py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
            <div className="mb-16">
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#01B6AF] font-medium mb-3">
                Réponse sous 24h · Livraison France entière · Chorus Pro
              </p>
              <h1 className="font-display text-6xl sm:text-8xl font-extralight tracking-[-0.03em] leading-none text-[#141414]">
                Contactez <span className="text-[#01B6AF] font-light">nous.</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
              <div className="lg:col-span-7">
                {quoteSubmitted ? (
                  <div className="rounded-[28px] bg-[#F0FAFA] p-10">
                    <div className="w-12 h-12 rounded-full bg-[#01B6AF] text-white flex items-center justify-center mb-6">
                      <Check className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-3xl font-light text-[#141414]">
                      Demande envoyée avec succès
                    </h2>
                    <p className="font-body text-[15.5px] text-[#444444] mt-3 leading-relaxed">
                      Merci. Jessica Fauvey vous recontacte sous 24 heures ouvrées avec votre
                      proposition chiffrée sur-mesure.
                    </p>
                    <button
                      type="button"
                      onClick={() => setQuoteSubmitted(false)}
                      className="mt-8 border border-[#141414] rounded-full px-6 py-2.5 text-[13.5px] cursor-pointer"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] text-[#555555] mb-2">
                          Établissement / Faculté / Laboratoire *
                        </label>
                        <input
                          type="text"
                          required
                          value={quoteForm.institution}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, institution: e.target.value })
                          }
                          placeholder="Faculté, CHU, Organisme, MedTech..."
                          className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] text-[#555555] mb-2">
                          Votre nom &amp; prénom *
                        </label>
                        <input
                          type="text"
                          required
                          value={quoteForm.contactName}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, contactName: e.target.value })
                          }
                          placeholder="Dr. / Pr. / Responsable"
                          className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] text-[#555555] mb-2">
                          E-mail professionnel *
                        </label>
                        <input
                          type="email"
                          required
                          value={quoteForm.email}
                          onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                          placeholder="nom@etablissement.fr"
                          className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] text-[#555555] mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={quoteForm.phone}
                          onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                          placeholder="06 00 00 00 00"
                          className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] text-[#555555] mb-2">
                          Ville de livraison *
                        </label>
                        <input
                          type="text"
                          required
                          value={quoteForm.city}
                          onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                          placeholder="Ex: Clermont-Ferrand, Lyon, Paris..."
                          className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] text-[#555555] mb-2">
                          Date souhaitée de livraison / session
                        </label>
                        <input
                          type="date"
                          value={quoteForm.deliveryDate}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, deliveryDate: e.target.value })
                          }
                          className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] text-[#555555] mb-2">
                        Pièces souhaitées, quantités et consignes de découpe
                      </label>
                      <textarea
                        rows={4}
                        value={quoteForm.customSpecs}
                        onChange={(e) =>
                          setQuoteForm({ ...quoteForm, customSpecs: e.target.value })
                        }
                        placeholder="Indiquez vos pièces (ex: 20 hémi-mandibules fraîches, 10 cœurs non fendus...), vos cotes éventuelles ou si vous réglez via Chorus Pro."
                        className="w-full border border-[#141414]/25 rounded-[16px] px-4 py-3.5 text-[14.5px] focus:outline-none focus:border-[#01B6AF]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-4 bg-[#01B6AF] text-white rounded-full pl-7 pr-2.5 py-2.5 text-[14.5px] font-medium hover:bg-[#043538] transition-all cursor-pointer"
                    >
                      <span>Envoyer ma demande de devis</span>
                      <span className="w-9 h-9 rounded-full bg-white text-[#043538] flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-[28px] bg-[#F5F8F7] p-9">
                  <h2 className="font-display text-3xl font-light text-[#043538]">
                    Jessica Fauvey
                  </h2>
                  <p className="text-[15px] text-[#01B6AF] font-medium mt-1">
                    Directrice commerciale
                  </p>

                  <div className="my-6 h-[1px] bg-[#141414]/15" />

                  <div className="space-y-3.5 text-[15px] text-[#333333]">
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#01B6AF]" />
                      <a href="tel:+33671124467" className="hover:underline">
                        06 71 12 44 67
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#01B6AF]" />
                      <a href="mailto:contact@oraltt.fr" className="hover:underline">
                        contact@oraltt.fr
                      </a>
                    </p>
                    <p className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#01B6AF] mt-1 shrink-0" />
                      <span>35 rue du Charolais, 63100 Clermont-Ferrand</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#141414]/15 p-8">
                  <h3 className="font-display text-xl font-normal text-[#141414]">
                    Délais de livraison
                  </h3>
                  <p className="font-body text-[14.5px] text-[#555555] mt-2 leading-relaxed">
                    <strong>Clermont-Ferrand, Lyon, Saint-Étienne, Loire :</strong> livraison
                    possible la veille pour le lendemain (J+1).
                    <br />
                    <strong>Reste de la France :</strong> 2 jours ouvrés minimum.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            VIEW: MENTIONS LÉGALES (oraltt.fr/?page_id=3)
        =================================================================== */}
        {view.page === 'legal' && (
          <section className="bg-white py-20 sm:py-24 px-6 md:px-12 max-w-[1040px] mx-auto">
            <button
              type="button"
              onClick={() => navigateTo({ page: 'home' })}
              className="inline-flex items-center gap-2 text-[13.5px] text-[#01B6AF] hover:underline mb-8 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Retour à l’accueil</span>
            </button>

            <p className="text-[11px] uppercase tracking-[0.28em] text-[#01B6AF] font-medium mb-3">
              Informations réglementaires · LCEN &amp; RGPD
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-[#141414] leading-[1.08]">
              Mentions légales
            </h1>
            <p className="font-body text-[15.5px] text-[#555555] mt-5 leading-relaxed max-w-3xl">
              Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin
              2004 pour la confiance dans l’économie numérique (LCEN), il est porté à la connaissance
              des utilisateurs et visiteurs du site <strong className="font-medium text-[#141414]">oraltt.fr</strong>{' '}
              les présentes mentions légales. Le présent site est édité par la société{' '}
              <strong className="font-medium text-[#141414]">Oral Tech Training</strong>, SAS, SIREN :{' '}
              <span className="font-mono-numbers">943 095 992</span>.
            </p>

            <div className="w-full h-[1px] bg-[#141414]/15 my-10" />

            <div className="space-y-8">
              {/* 1. Éditeur du site */}
              <div className="rounded-[22px] border border-[#141414]/20 bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    1. Éditeur du site
                  </h2>
                  <span className="font-mono-numbers text-xs text-[#01B6AF]">01</span>
                </div>
                <div className="w-full h-[1px] bg-[#141414]/15 mb-5" />
                <p className="font-body text-[15px] text-[#444444] mb-5">
                  Le site <strong className="font-medium text-[#141414]">oraltt.fr</strong> est édité et
                  exploité par :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-body text-[14.5px] text-[#333333]">
                  <div>
                    <span className="text-[#666666]">Dirigeants :</span>{' '}
                    <strong className="font-medium text-[#141414]">
                      Jessica Fauvey &amp; Pascal Chabaud
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Statut juridique :</span>{' '}
                    <strong className="font-medium text-[#141414]">
                      SAS (Capital social : 500,00 €)
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Dénomination / Nom commercial :</span>{' '}
                    <strong className="font-medium text-[#141414]">Oral Tech Training (O.T.T.)</strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Directrice de la publication :</span>{' '}
                    <strong className="font-medium text-[#141414]">Jessica Fauvey</strong>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[#666666]">Adresse du siège social :</span>{' '}
                    <strong className="font-medium text-[#141414]">
                      35 Rue du Charolais, 63100 Clermont-Ferrand, France
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">SIREN / SIRET :</span>{' '}
                    <strong className="font-medium text-[#141414] font-mono-numbers">
                      943 095 992 00013
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Immatriculation :</span>{' '}
                    <strong className="font-medium text-[#141414]">
                      RNE / RCS de Clermont-Ferrand
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">N° TVA intracommunautaire :</span>{' '}
                    <strong className="font-medium text-[#141414] font-mono-numbers">
                      FR39943095992
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Contact e-mail :</span>{' '}
                    <a
                      href="mailto:contact@oraltt.fr"
                      className="text-[#01B6AF] hover:underline font-medium"
                    >
                      contact@oraltt.fr
                    </a>
                  </div>
                  <div>
                    <span className="text-[#666666]">Contact téléphone :</span>{' '}
                    <a
                      href="tel:+33671124467"
                      className="text-[#01B6AF] hover:underline font-medium font-mono-numbers"
                    >
                      06 71 12 44 67
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Hébergement du site */}
              <div className="rounded-[22px] border border-[#141414]/20 bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    2. Hébergement du site
                  </h2>
                  <span className="font-mono-numbers text-xs text-[#01B6AF]">02</span>
                </div>
                <div className="w-full h-[1px] bg-[#141414]/15 mb-5" />
                <p className="font-body text-[15px] text-[#444444] mb-4">
                  Le site est hébergé par la société <strong className="font-medium text-[#141414]">OVH SAS</strong> :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 font-body text-[14.5px] text-[#333333]">
                  <div>
                    <span className="text-[#666666]">Raison sociale :</span>{' '}
                    <strong className="font-medium text-[#141414]">OVH SAS</strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Adresse :</span>{' '}
                    <strong className="font-medium text-[#141414]">
                      2 rue Kellermann, 59100 Roubaix, France
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Site web :</span>{' '}
                    <strong className="font-medium text-[#141414]">www.ovhcloud.com</strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Contact :</span>{' '}
                    <strong className="font-medium text-[#141414]">
                      1007 (depuis la France) ou support en ligne
                    </strong>
                  </div>
                </div>
              </div>

              {/* 3. Conception et développement */}
              <div className="rounded-[22px] border border-[#141414]/20 bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    3. Conception et développement
                  </h2>
                  <span className="font-mono-numbers text-xs text-[#01B6AF]">03</span>
                </div>
                <div className="w-full h-[1px] bg-[#141414]/15 mb-5" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 font-body text-[14.5px] text-[#333333]">
                  <div>
                    <span className="text-[#666666]">Conception &amp; Webmastering :</span>{' '}
                    <strong className="font-medium text-[#141414]">Léa Delhomme</strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">SIRET :</span>{' '}
                    <strong className="font-medium text-[#141414] font-mono-numbers">
                      911 385 649
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#666666]">Contact :</span>{' '}
                    <a
                      href="mailto:hello@leadelhomme.fr"
                      className="text-[#01B6AF] hover:underline font-medium"
                    >
                      hello@leadelhomme.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* 4. Propriété intellectuelle */}
              <div className="rounded-[22px] border border-[#141414]/20 bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    4. Propriété intellectuelle
                  </h2>
                  <span className="font-mono-numbers text-xs text-[#01B6AF]">04</span>
                </div>
                <div className="w-full h-[1px] bg-[#141414]/15 mb-5" />
                <div className="space-y-3 font-body text-[15px] text-[#444444] leading-relaxed">
                  <p>
                    L’ensemble des contenus présents sur le site{' '}
                    <strong className="font-medium text-[#141414]">oraltt.fr</strong> (incluant de
                    façon non limitative : textes, photographies, maquettes, visuels, logos, icônes,
                    animations, éléments d’interface) est la propriété exclusive d’
                    <strong className="font-medium text-[#141414]">ORAL TECH TRAINING</strong>, sauf
                    mention contraire expresse (banques d’images sous licence, logos de partenaires ou
                    marques tierces).
                  </p>
                  <p>
                    Toute reproduction, représentation, diffusion ou adaptation, totale ou partielle,
                    sans l’autorisation écrite et préalable de l’éditeur est strictement interdite et
                    constituerait une contrefaçon sanctionnée par le Code de la propriété
                    intellectuelle.
                  </p>
                </div>
              </div>

              {/* 5. Données personnelles et cookies (RGPD) */}
              <div className="rounded-[22px] border border-[#141414]/20 bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    5. Données personnelles et cookies (RGPD)
                  </h2>
                  <span className="font-mono-numbers text-xs text-[#01B6AF]">05</span>
                </div>
                <div className="w-full h-[1px] bg-[#141414]/15 mb-5" />
                <p className="font-body text-[15px] text-[#444444] mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                  Informatique et Libertés :
                </p>
                <ul className="space-y-3 font-body text-[14.5px] text-[#444444] leading-relaxed">
                  <li>
                    <strong className="font-medium text-[#141414]">Responsable du traitement :</strong>{' '}
                    Jessica Fauvey (Oral Tech Training).
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414]">Données collectées :</strong> Les
                    informations transmises via les formulaires de contact et de demande de devis (nom,
                    prénom, établissement, e-mail, téléphone, ville de livraison) sont uniquement
                    destinées au traitement de vos demandes d’information ou de devis. Elles ne sont ni
                    vendues, ni cédées à des tiers.
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414]">Durée de conservation :</strong> Les
                    données sont conservées pendant la durée nécessaire à la gestion de la relation
                    commerciale (au maximum 3 ans à compter du dernier contact).
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414]">Vos droits :</strong> Vous bénéficiez
                    d’un droit d’accès, de rectification, de portabilité et de suppression de vos
                    données personnelles. Vous pouvez exercer ce droit à tout moment par simple message
                    à{' '}
                    <a
                      href="mailto:contact@oraltt.fr"
                      className="text-[#01B6AF] hover:underline font-medium"
                    >
                      contact@oraltt.fr
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414]">Cookies :</strong> Le site utilise
                    des cookies techniques indispensables à son bon affichage et à son fonctionnement.
                    Si des cookies d’analyse d’audience ou de contenus tiers sont ajoutés, votre
                    consentement préalable est recueilli.
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414]">Réclamation :</strong> En cas de
                    litige non résolu concernant le traitement de vos données, vous pouvez adresser une
                    réclamation auprès de la CNIL (<span className="font-medium">cnil.fr</span>).
                  </li>
                </ul>
              </div>

              {/* 6. Limitation de responsabilité */}
              <div className="rounded-[22px] border border-[#141414]/20 bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-2xl font-normal text-[#141414]">
                    6. Limitation de responsabilité
                  </h2>
                  <span className="font-mono-numbers text-xs text-[#01B6AF]">06</span>
                </div>
                <div className="w-full h-[1px] bg-[#141414]/15 mb-5" />
                <p className="font-body text-[15px] text-[#444444] leading-relaxed">
                  L’éditeur s’efforce de fournir sur le site des informations vérifiées et à jour.
                  Toutefois, il ne peut être tenu responsable d’éventuelles erreurs, omissions ou
                  indisponibilités temporaires du service dues à des opérations de maintenance ou à des
                  pannes techniques indépendantes de sa volonté.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* =====================================================================
          FOOTER — Reconstruit selon la référence "footer ott.jpg",
          strictement aligné sur la grille max-w-[1280px] mx-auto px-6 md:px-12
          des autres sections
      ===================================================================== */}
      <footer className="bg-ott-footer-ref text-white pt-20 pb-14">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          {/* 12-Column Grid strictly aligned with the sections above */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-12">
            {/* Col 1 (5 cols, aligned with FAQ & Contact left column): O.T.T. + Description + Square Mail Icon */}
            <div className="lg:col-span-5">
              <div className="font-display text-5xl sm:text-[54px] font-normal tracking-[0.04em] text-white leading-none select-none">
                O.T.T.
              </div>

              <p className="font-body text-[15px] font-light text-white/95 mt-5 leading-[1.5] max-w-[280px]">
                Fournisseur de pièces anatomiques porcines pour les centres de formations et
                laboratoires de recherches.
              </p>

              <div className="mt-7">
                <a
                  href="mailto:contact@oraltt.fr"
                  aria-label="Envoyer un e-mail à Oral Tech Training"
                  className="w-9 h-9 rounded-[4px] border border-white/80 inline-flex items-center justify-center text-white hover:bg-white hover:text-[#01B6AF] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2 (2 cols): Pages */}
            <div className="lg:col-span-2 pt-1">
              <h3 className="font-display text-[17px] font-medium text-white leading-none mb-5">
                Pages
              </h3>
              <ul className="space-y-2.5 text-[15px] font-light text-white/95">
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'home' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'catalog' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    Produits
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'about' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'blog' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'contact' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3 (3 cols): Contact */}
            <div className="lg:col-span-3 pt-1">
              <h3 className="font-display text-[17px] font-medium text-white leading-none mb-5">
                Contact
              </h3>
              <ul className="space-y-2.5 text-[15px] font-light text-white/95">
                <li>Jessica Fauvey</li>
                <li>
                  <a href="tel:+33671124467" className="hover:underline">
                    06 71 12 44 67
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@oraltt.fr" className="hover:underline">
                    contact@oraltt.fr
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 (2 cols): Mentions légales */}
            <div className="lg:col-span-2 pt-1">
              <h3 className="font-display text-[17px] font-medium text-white leading-none mb-5">
                Mentions légales
              </h3>
              <ul className="space-y-2.5 text-[15px] font-light text-white/95">
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'contact' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    CGV
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateTo({ page: 'legal' })}
                    className="hover:underline cursor-pointer text-left"
                  >
                    Mentions légales
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Horizontal Divider Line strictly aligned with the 1280px container */}
          <div className="w-full h-[1px] bg-white/80 my-8" />

          {/* Centered Copyright (footer ott.jpg) */}
          <p className="text-center text-[14.5px] font-light text-white">
            © 2026. Site créé par Léa Delhomme
          </p>
        </div>
      </footer>
    </div>
  );
}
