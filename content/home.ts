export const navigationContent = {
  brand: "POLYGON WINDOWS",
  links: [
    { label: "PRICE ESTIMATOR", href: "/estimator" },
    { label: "ABOUT", href: "/about" },
  ],
  ctaLabel: "CONTACT",
  ctaHref: "/contact",
} as const;

export const heroContent = {
  eyebrow: "REAL VALUE FOR HOMEOWNERS",
  titleLead: "LESS OVERHEAD",
  titleMain: "MORE VALUE",
  body: "POLYGON invests where it matters most — craftsmanship, long-term performance and customer experience — not unnecessary overhead that adds cost without adding value, and not a race to the lowest price built on scrap-grade aluminium, inferior glass or low-quality hardware.",
  primaryCta: "GET ESTIMATION",
  image: {
    // src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/hero-healing-architecture-nNx678wAmp8kyeLtMPE7U2.webp",
    src: "/images/cherry_blossom_watermark.jpg",
    alt: "Polygon Windows System",
  },
  badge: {
    label: "VIEW",
    value: "360°",
  },
} as const;

export const estimatorHeadlineContent = {
  heading: "Cheap can cost you more",
  subtext:
    "Lower upfront price often leads to higher long-term costs.",
} as const;

export const productGridContent = [
  {
    name: "Sliding Door",
    description: "Seamless indoor-outdoor flow with minimal sight lines.",
    image: {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/product-sliding-door-TAHofg3MvZkAeh2xbu6uJc.webp",
      alt: "Sliding Door",
    },
  },
  {
    name: "Slim Profile Fixed",
    description: "Maximum transparency and unobstructed views.",
    image: {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/product-fixed-window-HurCgmnP5CovAWAGMRbWQk.webp",
      alt: "Fixed Window",
    },
  },
  {
    name: "Hinged Door",
    description: "Controlled ventilation with weather protection.",
    image: {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/product-hinged-door-YFHjFxpNHEYBnBCxhVSfZ3.webp",
      alt: "Hinged Door",
    },
  },
  {
    name: "Curved System",
    description: "Smooth radius frames for architectural expression.",
    image: {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/product-curved-window-FTiXDgSFPYj8AvF68cT88C.webp",
      alt: "Curved Window",
    },
  },
  {
    name: "Casement Window",
    description: "Wide opening for natural ventilation and easy cleaning.",
    image: {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/product-fixed-window-HurCgmnP5CovAWAGMRbWQk.webp",
      alt: "Casement Window",
    },
  },
] as const;

export const painPointsContent = {
  eyebrow: "POLYGON — PERFORMANCE COMPARISON",
  title: "The difference is measurable. Not just visible.",
  description:
    "Compare standard aluminium systems against Polygon engineering across every performance dimension.",
  blocks: [
    {
      id: "air-quality",
      navLabel: "Air quality",
      title: "Low-Grade Coatings, Invisible Exposure",
      body: "Poorly controlled aluminium coatings may contain elevated VOC emissions or heavy metal residues. Over time, this may contribute to irritated nasal passages, unexplained headaches, and respiratory discomfort.",
      image: {
        src: "/images/issue_voc_red_yellow.png",
        alt: "VOC and coating quality",
      },
      solutionTitle: "Zero-VOC coatings. Air you can trust.",
      solutionBody:
        "Polygon profiles use Qualicoat-certified powder coating, tested to emit zero harmful compounds—so the air you breathe stays clean.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "Qualicoat certified — European coating standard",
        "Zero VOC emissions — independently verified",
        "25-year coating warranty — no fade, no peel",
      ],
      solutionCtaLabel: "Explore material quality",
      solutionCtaHref: "/estimator",
    },
    {
      id: "acoustic",
      navLabel: "Acoustic",
      title: "Noise Is a Physiological Stressor",
      body: "Uncontrolled external noise fragments deep sleep cycles. Chronic exposure increases stress load and cognitive fatigue.",
      image: {
        src: "/images/issue_noise_sleep.png",
        alt: "Noise and sleep disruption",
      },
      solutionTitle: "Acoustic glass. Silence by design.",
      solutionBody:
        "Polygon's laminated acoustic glazing reduces external noise by up to 42dB—the equivalent of turning a busy road into a quiet library.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "Up to 42dB — noise reduction rating",
        "Laminated acoustic glass — dual-density interlayer",
        "Thermally broken frames — eliminates sound bridges",
      ],
      solutionCtaLabel: "Explore acoustic systems",
      solutionCtaHref: "/estimator",
    },
    {
      id: "thermal",
      navLabel: "Thermal",
      title: "Temperature Drift = Energy Loss",
      body: "Non-thermal profiles transfer external heat directly indoors. This results in uneven temperature, higher energy usage, and reduced comfort.",
      image: {
        src: "/images/issue_energy_person.png",
        alt: "Energy loss through windows",
      },
      solutionTitle: "Thermally broken. Energy retained.",
      solutionBody:
        "Polygon's thermally broken aluminium profile separates interior and exterior metal with a polyamide barrier, reducing heat transfer by up to 70%.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "U-value 1.2 W/m²K — best-in-class thermal rating",
        "Low-E double glazing — reflects infrared heat",
        "Up to 40% energy saving — verified by WERS",
      ],
      solutionCtaLabel: "Explore thermal systems",
      solutionCtaHref: "/estimator",
    },
    {
      id: "security",
      navLabel: "Security",
      title: "Standard Systems Give Intruders an Edge",
      body: "Weak frames and single-point locking make forced entry easier. Flimsy hardware and thin profiles can be pried or forced, leaving your home and family exposed.",
      image: {
        src: "/images/issue_security_equal.png",
        alt: "Window and door security",
      },
      solutionTitle: "Multi-point locking. Peace of mind.",
      solutionBody:
        "Polygon systems use reinforced profiles and multi-point locking hardware tested to resist forced entry—so your home stays secure.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "Multi-point locking — tested to resist forced entry",
        "Reinforced profiles — robust hardware and frame design",
        "Certified security ratings — meet or exceed Australian standards",
      ],
      solutionCtaLabel: "Explore security systems",
      solutionCtaHref: "/estimator",
    },
    {
      id: "environmental",
      navLabel: "Environmental",
      title: "Environmental Hazard from Poor-Quality Aluminium",
      body: "Substandard or recycled aluminium profiles can contain impurities and inconsistent alloys. Poor anodising or coating leads to corrosion, staining, and premature failure—especially in coastal or high-humidity areas.",
      image: {
        src: "/images/issue_env.png",
        alt: "Environmental impact of poor-quality aluminium",
      },
      solutionTitle: "Marine-grade alloy. Built for the elements.",
      solutionBody:
        "Polygon specifies 6063-T5 aluminium and Qualicoat-certified finishes so profiles resist corrosion, UV, and moisture—year after year.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "6063-T5 alloy — consistent, corrosion-resistant aluminium",
        "Qualicoat certified — finish durability and adhesion",
        "Suitable for coastal — tested in aggressive environments",
      ],
      solutionCtaLabel: "Explore material quality",
      solutionCtaHref: "/estimator",
    },
    {
      id: "noise-office",
      navLabel: "Noise (office)",
      title: "Office and Street Noise Invades Your Space",
      body: "Traffic, construction, and general street noise bleed through standard glazing and frames. In home offices or front rooms, concentration and comfort suffer—every call and conversation competes with the outside world.",
      image: {
        src: "/images/issue_noise_office.png",
        alt: "Noise intrusion in workspace",
      },
      solutionTitle: "Acoustic glazing. Focus when it matters.",
      solutionBody:
        "Laminated acoustic glass and sealed frames cut external noise significantly—so you can work, meet, and relax without constant distraction.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "Laminated acoustic options — up to 42dB noise reduction",
        "Compression gaskets — no gaps for sound to leak",
        "Double or triple glazing — tune for your environment",
      ],
      solutionCtaLabel: "Explore acoustic systems",
      solutionCtaHref: "/estimator",
    },
    {
      id: "durability",
      navLabel: "Durability",
      title: "Cheap Windows Fail When You Need Them Most",
      body: "Low-grade hardware, thin extrusions, and poor finishing lead to sticking, corrosion, and wear. You replace or repair too soon—adding cost and hassle instead of long-term value.",
      image: {
        src: "/images/issue_durability.png",
        alt: "Window durability and longevity",
      },
      solutionTitle: "Built once. Lasting generations.",
      solutionBody:
        "Marine-grade aluminium, precision extrusion, and hardware rated for 100,000+ cycles mean Polygon systems are built to perform for decades.",
      standardLabel: "Polygon Standard:",
      bullets: [
        "6063-T5 alloy — marine-grade aluminium",
        "100,000-cycle hardware — tested beyond typical lifetime use",
        "50-year design life — structural warranty support",
      ],
      solutionCtaLabel: "Explore engineering",
      solutionCtaHref: "/estimator",
    },
  ],
} as const;

export const featureGridContent = {
  title: "Why Homeowners Choose Polygon",
  features: [
    "Lower energy bills with thermal break systems",
    "Better sleep with acoustic glazing options",
    "Healthier indoor air with low-VOC finishes",
    "Lasting value with durable, warrantied profiles",
    "Peace of mind with wind and water testing",
    "More light and views with slim sightlines",
    "Quieter, more comfortable living year-round",
    "One trusted partner from specification to install",
  ],
} as const;

export const healingLivingContent = {
  title: "Designed for Quiet Mornings and Undisturbed Nights",
  body: "Natural light without intrusion. Comfort without compromise. Polygon Windows creates protective boundaries that let you experience the world on your terms—with the peace of mind that comes from engineering precision and health-conscious design.",
  ctaLabel: "Explore Systems",
  image: {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663372502898/548bPj3wr3XkSkZDY6HRRh/lifestyle-calm-bedroom-PNwEXaKYyHsZha8RxPircB.webp",
    alt: "Calm bedroom interior",
  },
} as const;

export const processContent = {
  title: "Our Process",
  steps: [
    { step: "Consultation", desc: "Understand your vision and requirements" },
    { step: "Specification", desc: "Precise technical design and planning" },
    { step: "Manufacturing", desc: "Precision engineering and quality control" },
    { step: "Installation", desc: "Expert installation and commissioning" },
  ],
} as const;

export const closingManifestoContent = {
  title: "For Those Who Value What Lasts",
  body: "Polygon Windows represents a commitment to precision, health, and permanence. We engineer protective boundaries that honor both performance and wellbeing—quiet confidence in every frame.",
  primaryCta: "Explore Systems",
  secondaryCta: "Request Specification Pack",
} as const;

export const aboutContent = {
  contact: {
    heading: "Get in touch",
    subheading: "We’d love to hear about your project.",
    email: "sales@polygonwindows.com.au",
    phone: "+61 3 0000 0000",
    phoneLabel: "Phone",
    emailLabel: "Email",
  },
  company: {
    heading: "Our story",
    body: "Polygon Windows began with a simple belief: that homes deserve windows and doors that perform as well as they look. After years in architectural aluminium and fabrication, our founders saw a gap—between mass-market products that cut corners and ultra-premium brands that priced out everyday homeowners. We set out to partner with proven fabrication teams and offer precision-engineered systems at transparent, fair prices. Today we work with established manufacturers across Australia and Asia to bring you thermal break systems, acoustic glazing options, and low-VOC finishes—without the markup of a middleman. Every specification we offer is one we’d put in our own homes.",
  },
  founders: {
    heading: "Founders",
    people: [
      {
        name: "Eric Phung",
        role: "Co-founder & Technical Director",
        bio: " ",
      },
      {
        name: "Jessica Nguyen",
        role: "Co-founder & Operations",
        bio: "Jessica brings experience from project management and supply chain in construction. She ensures our partners meet our standards and that every order is tracked from specification to installation.",
      },
    ],
  },
} as const;

export const footerContent = {
  columns: [
    {
      title: "POLYGON",
      body: "Precision-engineered aluminium window and door systems designed for health, silence, and thermal balance.",
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "/about" },
        { label: "Price Estimator", href: "/estimator" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Certifications", href: "#" },
      ],
    },
  ],
  bottomLeft: "© 2026 Polygon Windows. All rights reserved.",
  bottomRight: "Engineering Calm. Protecting Wellbeing.",
} as const;
