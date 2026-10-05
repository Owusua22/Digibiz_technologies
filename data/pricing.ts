export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceGHS: string;

  period: string;
  description: string;
  gifAsset: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaHref: string;
  deliveryTime: string;
  supportDuration: string;
}

export interface ServiceAddon {
  id: string;
  title: string;
  category: string;
  startingPrice: string;
  period?: string;
  description: string;
  icon: string;
  gifAsset?: string;
  deliverables: string[];
}

export interface PricingFaq {
  q: string;
  a: string;
}

export const THEME_GIFS = {
  coins: "/Salepush – SEO & Digital Marketing Theme_files/298-coins-flat.gif",
  chart: "/Salepush – SEO & Digital Marketing Theme_files/153-bar-chart-growth-flat-1.gif",
  layers: "/Salepush – SEO & Digital Marketing Theme_files/12-layers-flat-1.gif",
  globe: "/Salepush – SEO & Digital Marketing Theme_files/27-globe-flat.gif",
  puzzle: "/Salepush – SEO & Digital Marketing Theme_files/186-puzzle-flat.gif",
  rocket: "/Salepush – SEO & Digital Marketing Theme_files/rocket2c.png",
  priceBadge: "/Salepush – SEO & Digital Marketing Theme_files/h3_price.png",
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    badge: "For Small Businesses & Startups",
    priceGHS: "GH₵2,000",

    period: "one-time",
    description:
      "Essential digital presence built to give your business credibility, speed, and immediate local visibility.",
    gifAsset: THEME_GIFS.layers,
    features: [
      "Up to 5 custom-designed responsive pages",
      "Mobile-first, high-speed performance build",
      "Core on-page SEO & Google search indexing",
      "Interactive contact form with email notifications",
      "WhatsApp chat button & social media links",
      "Domain & business email setup assistance",
      "Basic security SSL & spam protection",
      "30 days post-launch support & training",
    ],
    notIncluded: [
      "Custom e-commerce & payment gateway",
      "Advanced workflow automation",
      "Monthly marketing management",
    ],
    ctaText: "Get Started with Starter",
    ctaHref: "/contact?plan=starter",
    deliveryTime: "1–2 weeks",
    supportDuration: "30 days support",
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    popular: true,
    priceGHS: "GH₵4,500",
 
    period: "one-time",
    description:
      "Complete digital growth package for expanding businesses looking to capture leads and outrank competitors.",
    gifAsset: THEME_GIFS.chart,
    features: [
      "Everything in Starter included",
      "Up to 12 custom responsive pages or service catalog",
      "Comprehensive SEO strategy & keyword targeting",
      "Google Analytics 4 & conversion event tracking",
      "Content Management System (CMS) / Blog setup",
      "Lead capture automation & CRM notification routing",
      "Custom interactive elements & animated UI",
      "Speed optimization (under 2s page load speed)",
      "60 days dedicated post-launch support",
    ],
    ctaText: "Choose Growth Plan",
    ctaHref: "/contact?plan=growth",
    deliveryTime: "2–4 weeks",
    supportDuration: "60 days support",
  },
  {
    id: "business",
    name: "Business",
    badge: "For Established Companies",
    priceGHS: "GH₵8,000",

    period: "one-time",
    description:
      "Robust e-commerce or custom web application engineered for high-volume transactions and seamless operations.",
    gifAsset: THEME_GIFS.puzzle,
    features: [
      "Everything in Growth included",
      "Full E-commerce store OR Custom Web Application",
      "Integrated Mobile Money (MoMo), Paystack & Card payments",
      "Automated order management & invoicing system",
      "Custom business workflow & third-party API integrations",
      "Customer account dashboard & database architecture",
      "Advanced caching, CDN & security firewall",
      "Staff onboarding & technical walkthrough session",
      "90 days priority maintenance & SLA support",
    ],
    ctaText: "Start Business Plan",
    ctaHref: "/contact?plan=business",
    deliveryTime: "4–6 weeks",
    supportDuration: "90 days priority support",
  },
  {
    id: "custom",
    name: "Custom / Enterprise",
    badge: "Tailored Architecture",
    priceGHS: "Custom",

    period: "tailored scope",
    description:
      "Bespoke software, mobile applications, multi-platform systems, and dedicated AI workflows built to your exact specifications.",
    gifAsset: THEME_GIFS.globe,
    features: [
      "Tailored mobile applications (iOS & Android)",
      "Custom AI assistants & workflow automation pipelines",
      "Multi-tenant / enterprise SaaS architecture",
      "Legacy system migration & API orchestration",
      "Custom database design & cloud infrastructure",
      "Dedicated senior engineers & project manager",
      "Continuous deployment & ongoing SLA retainer",
    ],
    ctaText: "Talk to Our Engineers",
    ctaHref: "/contact?plan=custom",
    deliveryTime: "Flexible roadmap",
    supportDuration: "Dedicated SLA",
  },
];

export const SERVICE_ADDONS: ServiceAddon[] = [
  {
    id: "website-maintenance",
    title: "Website Maintenance & Care",
    category: "Support & Security",
    startingPrice: "GH₵400",
    period: "/mo",
    description:
      "Keep your website secure, fast, and up-to-date with regular backups, security patches, and content updates.",
    icon: "bi-shield-check",
    gifAsset: THEME_GIFS.layers,
    deliverables: [
      "Weekly core & plugin updates",
      "Daily automated cloud backups",
      "Uptime monitoring & instant fix",
      "Monthly minor content changes",
    ],
  },
  {
    id: "digital-marketing-seo",
    title: "Digital Marketing & SEO Retainer",
    category: "Growth & Traffic",
    startingPrice: "GH₵1,200",
    period: "/mo",
    description:
      "Results-driven search engine optimization, Google Ads, and social campaigns built around measurable sales leads.",
    icon: "bi-graph-up-arrow",
    gifAsset: THEME_GIFS.chart,
    deliverables: [
      "Local & organic SEO optimization",
      "Google Search & Ads campaign management",
      "Social media strategy & creative posts",
      "Transparent monthly ROI reporting",
    ],
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    category: "Efficiency",
    startingPrice: "GH₵3,000",
    period: "one-time",
    description:
      "Eliminate repetitive manual tasks by seamlessly linking your CRM, forms, WhatsApp, spreadsheets, and accounting tools.",
    icon: "bi-diagram-3",
    gifAsset: THEME_GIFS.puzzle,
    deliverables: [
      "Complete workflow discovery & mapping",
      "Custom webhooks & API integrations",
      "Automated customer communication",
      "Internal operations dashboard",
    ],
  },
  {
    id: "branding-identity",
    title: "Branding & Visual Identity",
    category: "Design",
    startingPrice: "GH₵2,000",
    period: "one-time",
    description:
      "Create an authoritative, memorable brand identity system that commands respect and inspires customer confidence.",
    icon: "bi-palette",
    gifAsset: THEME_GIFS.globe,
    deliverables: [
      "Primary & secondary logo variations",
      "Comprehensive brand style guide",
      "Social media & marketing templates",
      "Print-ready stationary & invoice formats",
    ],
  },
  {
    id: "ai-assistant-tools",
    title: "Custom AI Assistant & Tools",
    category: "Intelligence",
    startingPrice: "GH₵4,000",
    period: "one-time",
    description:
      "Deploy smart 24/7 customer service chat bots and internal AI productivity tools trained on your business data.",
    icon: "bi-cpu",
    gifAsset: THEME_GIFS.coins,
    deliverables: [
      "Custom AI customer support bot",
      "Trained on your business FAQs & catalog",
      "WhatsApp / Website integration",
      "Automated lead qualification",
    ],
  },
];

export const PRICING_FAQS: PricingFaq[] = [
  {
    q: "Are there any hidden costs or surprise fees?",
    a: "No. At Digibiz Technologies, we believe in 100% transparent pricing. Before we begin, you receive a clear project scope and formal proposal outlining every deliverable and milestone. What you see is what you pay.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. For one-time projects (Starter, Growth, Business), we typically work on a milestone basis: 50% deposit upon project kickoff, and 50% upon successful testing and final launch.",
  },
  {
    q: "What if my project requires custom functionality?",
    a: "If your requirements don't fit directly into Starter, Growth, or Business, our Custom package is designed for you. We will assess your exact specifications and provide a tailored quote and development roadmap.",
  },
  {
    q: "Do you include domain registration and hosting?",
    a: "We assist you in selecting and configuring the best domain and cloud hosting infrastructure for your project. We can either host and manage it on your behalf or deploy directly to your preferred accounts.",
  },
  {
    q: "What kind of support is included after the website goes live?",
    a: "Every package includes dedicated post-launch support (from 30 to 90 days depending on the tier). We fix any emerging issues and train your team on how to manage your content. Ongoing maintenance plans are also available.",
  },
  {
    q: "How do I get started?",
    a: "Click on any 'Get Started' button or contact us directly via email at digibiztechnologies1@gmail.com or by phone/WhatsApp at +233 553 191 734. We will schedule a discovery consultation within 24 hours.",
  },
];
