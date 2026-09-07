/* ============================================
   CENTRALIZED SERVICES DATA
   Conversion-focused copy for all service pages.
   Single source of truth for homepage, services,
   footer, sitemap, and JSON-LD structured data.
   Includes sub-services with benefit-led copy.
   ============================================ */

export interface ServiceSummary {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
}

export interface SubService {
  id: string;
  slug: string;
  title: string;
  headline: string; // benefit-led headline
  bullets: string[]; // 2–3 key features & outcomes
  cta: string; // short call to action
  proof: string; // example client outcome / social proof line
  seoKeywords?: string[]; // optional keyword suggestions
  anchor?: string; // anchor id for internal linking (e.g. "#ecommerce-websites")
  image?: string;      // NEW — optional custom thumbnail
  imageAlt?: string;   // N
}

export interface ServiceDetail {
  id: string;
  slug: string;
  badge: string;
  title: string;
  lead: string;
  metaDescription: string;
  image: string;
  icon: string;
  shortDescription: string;
  visualHeading: string;
  visualParagraphs: string[];
  features: { icon: string; title: string; text: string }[];
  benefits: string[];
  processHeading: string;
  processText: string;
  processSteps: { number: string; title: string; text: string }[];
  price: string;
  priceLabel: string;
  infoList: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    image: string;
  };
   heroImage?: string;  // NEW — optional dedicated hero shot
  gallery?: string[];  // NEW — optional showcase strip images

  formSubject: string;

  // NEW: list of sub-services for each main service
  subServices: SubService[];
}

/* ============================================
   SERVICE SUMMARIES
   ============================================ */

export const services: ServiceSummary[] = [
  {
    id: "web-development",
    slug: "website-development",
    icon: "bi-globe2",
    title: "Website & Web Development",
    shortDescription:
      "Fast, professional websites, online stores, and web applications designed to build trust, attract customers, and turn more visits into inquiries and sales.",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing-seo",
    icon: "bi-graph-up-arrow",
    title: "Digital Marketing & SEO",
    shortDescription:
      "SEO, Google Ads, social media, content, and lead generation focused on helping the right customers find your business and take action.",
  },
  {
    id: "business-automation",
    slug: "business-automation",
    icon: "bi-diagram-3",
    title: "Business Automation",
    shortDescription:
      "Connect your business tools, automate repetitive work, reduce costly errors, and give your team more time for customers and growth.",
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    icon: "bi-cpu",
    title: "AI Solutions",
    shortDescription:
      "Practical AI chatbots, assistants, and intelligent workflows that reduce repetitive work, improve response times, and help your team work smarter.",
  },
  {
    id: "branding-design",
    slug: "branding-graphic-design",
    icon: "bi-palette",
    title: "Branding & Graphic Design",
    shortDescription:
      "Build a recognizable, professional identity with a consistent logo, visual system, and marketing materials designed to strengthen customer trust.",
  },
  {
    id: "business-strategy",
    slug: "business-digital-strategy",
    icon: "bi-lightbulb",
    title: "Business & Digital Strategy",
    shortDescription:
      "Turn research into direction with digital audits, competitor analysis, market insights, and a practical roadmap for smarter business growth.",
  },
];

/* ============================================
   SERVICE DETAIL DATA (with sub-services)
   ============================================ */

export const serviceDetails: Record<string, ServiceDetail> = {
  /* ==========================================
     1. WEBSITE & WEB DEVELOPMENT
     ========================================== */
  "website-development": {
    id: "web-development",
    slug: "website-development",
    badge: "Web Development",
    title: "Website & Web Development",
    lead:
      "Your website has seconds to earn a customer's attention. We build fast, professional websites that make your business easy to understand, easy to trust, and easy to contact or buy from.",
    metaDescription:
      "Professional website development. Fast, mobile-first business websites, e-commerce stores, landing pages, and web apps built to attract and convert customers.",
    image: "/assets/services/web-development.jpg",
    heroImage: "/assets/services/web-development.jpg",
    gallery: [
      "/assets/services/web-development-2.jpg",
      "/assets/services/web-development.jpg",
      "/assets/services/web-development-2.jpg",
    ],
    icon: "bi-globe2",
    shortDescription:
      "Fast, professional websites and web applications built to turn more visitors into inquiries, customers, and sales.",
    visualHeading: "Turn Your Website Into a Reason Customers Choose You",
    visualParagraphs: [
      "Potential customers decide in seconds. We deliver mobile-first builds that are fast, clear, and designed to convert.",
      "Content, trust signals, and a friction-free path to contact or purchase are the priority—so visitors become customers.",
      "Whether it's a business site, landing page, online store, or custom web application, we deliver a search-ready, speed-tested launch.",
    ],
    features: [
      {
        icon: "bi-phone",
        title: "Look Great on Every Screen",
        text: "Mobile-first design that prioritizes usability on phones and tablets where most customers begin their journey.",
      },
      {
        icon: "bi-search",
        title: "Built to Be Found",
        text: "SEO-friendly structure, semantic HTML, and schema to give search engines a clear understanding of your pages.",
      },
      {
        icon: "bi-speedometer2",
        title: "Keep Visitors Moving",
        text: "Performance tuning and optimized images to reduce load times and bounce rates.",
      },
      {
        icon: "bi-shop",
        title: "Sell Online With Confidence",
        text: "Secure payments, inventory workflows, and checkout UX designed to minimize friction and abandonment.",
      },
      {
        icon: "bi-laptop",
        title: "Built Around Your Business",
        text: "Custom web apps and portals that map directly to your processes and user needs.",
      },
      {
        icon: "bi-life-preserver",
        title: "Support Beyond Launch",
        text: "Post-launch care plans and regular updates to keep your site secure and effective.",
      },
    ],
    benefits: [
      "Turn more website visitors into inquiries and paying customers",
      "Create a professional first impression on every device",
      "Build a strong foundation for visibility in search",
      "Keep visitors engaged with faster page performance",
      "Make it simple for customers to contact you or buy online",
    ],
    processHeading: "From First Conversation to a Website Ready for Customers",
    processText:
      "You always know what comes next. We move from planning to design, development, testing, and launch with clear check-ins throughout the project.",
    processSteps: [
      {
        number: "01",
        title: "Discover & Plan",
        text: "We map your pages, customer journey, and priorities before we design.",
      },
      {
        number: "02",
        title: "Design & Build",
        text: "Mobile-first design and SEO-ready development based on your brand and goals.",
      },
      {
        number: "03",
        title: "Test & Launch",
        text: "Cross-device testing, performance checks, and scheduled launch.",
      },
      {
        number: "04",
        title: "Support & Improve",
        text: "Post-launch guidance and ongoing improvements as traffic arrives.",
      },
    ],
    price: "GH₵3,500",
    priceLabel: "Projects starting from",
    infoList: [
      "Typical 2–4 week timeline",
      "Dedicated project lead",
      "30 days of post-launch support",
      "Mobile-first, SEO-ready development",
    ],
    testimonial: {
      quote:
        "Our new site loads fast and actually brings in leads — best decision we made this year.",
      name: "Kwabena Mensah",
      role: "Founder, Mensah Furniture Co.",
      image: "/assets/img/person/person-m-2.webp",
    },
    formSubject: "Website Development Inquiry",

    // SUB-SERVICES
    subServices: [
      {
        id: "corporate-websites",
        slug: "corporate-websites",
        title: "Corporate Websites",
        headline:
          "A professional online headquarters that builds trust and generates qualified inquiries",
        bullets: [
          "Service-led pages and clear value messaging to shorten the buyer's decision.",
          "Mobile-first, accessible, and fast—plus integrated contact forms and analytics to track leads.",
        ],
        cta: "Request a site review",
        proof:
          "Example: Mensah Furniture — new corporate site that improved inbound inquiries and trust.",
        seoKeywords: ["corporate website", "business website", "professional website"],
        anchor: "#corporate-websites",
      },
      {
        id: "ecommerce-websites",
        slug: "ecommerce-websites",
        title: "Ecommerce Websites",
        headline:
          "Sell more online with fast, secure stores optimized for conversions and discovery",
        bullets: [
          "Optimized checkout, secure payments, shipping and inventory setups to reduce friction.",
          "Product SEO, structured data, and analytics to help customers find and buy your products.",
        ],
        cta: "Start your ecommerce project",
        proof:
          "Example: Asante Retail — ecommerce launch that significantly increased online revenue.",
        seoKeywords: [
          "ecommerce website",
          "online store development",
          "shopify development",
          "woocommerce developer",
        ],
        anchor: "#ecommerce-websites",
      },
      {
        id: "landing-pages",
        slug: "landing-pages",
        title: "Landing Pages",
        headline: "High-converting landing pages for campaigns, offers, and lead generation",
        bullets: [
          "Single-focus UX with fast load times, clear CTAs, and conversion tracking.",
          "Built for A/B testing, pixel integration, and quick campaign launches.",
        ],
        cta: "Build a landing page",
        proof: "Example: Campaign landing page that delivered 150 qualified leads in 4 weeks.",
        seoKeywords: ["landing page design", "lead generation landing page"],
        anchor: "#landing-pages",
      },
      {
        id: "web-applications",
        slug: "web-applications",
        title: "Web Applications & Portals",
        headline: "Custom web apps that match your processes and scale with your business",
        bullets: [
          "Secure user roles, workflows, and integrations with your existing systems.",
          "Built for maintainability, performance, and future growth.",
        ],
        cta: "Discuss a custom app",
        proof:
          "Example: Internal portal that automated tasks and reduced process time by over 50%.",
        seoKeywords: ["web application", "custom web app", "business portal"],
        anchor: "#web-applications",
      },
      {
        id: "redesign-migrations",
        slug: "website-redesign-migrations",
        title: "Website Redesign & Migrations",
        headline: "Migrate or redesign without losing SEO value and with measurable speed gains",
        bullets: [
          "SEO-safe migration, content mapping and redirects to preserve rankings.",
          "Design refresh that improves clarity, trust signals and page performance.",
        ],
        cta: "Plan my migration",
        proof:
          "Example: Seamless migration that maintained search rankings and improved page speed.",
        seoKeywords: ["website migration", "site redesign", "redesign and migration"],
        anchor: "#website-redesign-migrations",
      },
      {
        id: "cro-analytics",
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization (CRO) & Analytics",
        headline: "Turn more of your existing traffic into customers using data-driven CRO",
        bullets: [
          "Heatmaps, A/B testing and funnel analysis to uncover easy wins.",
          "Goal tracking and prioritized test roadmap to improve conversions steadily.",
        ],
        cta: "Improve conversions",
        proof:
          "Example: CRO tests that increased contact form submissions by more than 20%.",
        seoKeywords: ["conversion rate optimization", "CRO", "analytics for conversion"],
        anchor: "#conversion-rate-optimization",
      },
    ],
  },

  /* ==========================================
     2. DIGITAL MARKETING & SEO
     ========================================== */
  "digital-marketing-seo": {
    id: "digital-marketing",
    slug: "digital-marketing-seo",
    badge: "Digital Marketing & SEO",
    title: "Digital Marketing & SEO",
    lead:
      "We Help you reach the right audience, reduce marketing costs, measure results, build brand awareness, generate more leads & sales, and maintain a 24/7 online presence.",
    metaDescription:
      "SEO, Google Ads, social media marketing, content, and lead generation to reach qualified customers and measure what your marketing delivers.",
    image: "/assets/services/digital-marketing-seo.jpg",
    heroImage: "/assets/services/digital-marketing-seo.jpg",
    gallery: [
      "/assets/services/digital-marketing-seo-2.jpg",
      "/assets/services/digital-marketing-seo.jpg",
      "/assets/services/digital-marketing-seo-2.jpg",
    ],
    icon: "bi-graph-up-arrow",
    shortDescription:
      "Attract people who are ready to act with measurable SEO, Google Ads, social media, content, and lead-generation campaigns.",
    visualHeading: "Stop Chasing Attention. Start Attracting Customers.",
    visualParagraphs: [
      "We focus your marketing around the searches and audiences most likely to become customers.",
      "Campaigns are tracked and refined: you see what worked, where the budget went, and what we do next.",
    ],
    features: [
      {
        icon: "bi-search",
        title: "Get Found on Google",
        text: "Improve visibility in organic and local search for customers actively looking for your services.",
      },
      {
        icon: "bi-share",
        title: "Build an Audience That Knows You",
        text: "Social content, community management, and targeted campaigns to keep your brand top-of-mind.",
      },
      {
        icon: "bi-google",
        title: "Turn Ad Spend Into Opportunity",
        text: "Paid campaigns with focused targeting and measurable conversions.",
      },
      {
        icon: "bi-file-earmark-bar-graph",
        title: "Earn Trust With Useful Content",
        text: "Content that answers customer questions and builds credibility over time.",
      },
      {
        icon: "bi-person-rolodex",
        title: "Capture Better Leads",
        text: "Lead capture systems that qualify and route opportunities to your team reliably.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Know What Is Working",
        text: "Clear reporting showing results, insights and next steps.",
      },
    ],
    benefits: [
      "Reach customers actively searching for your services",
      "Generate and capture more qualified leads",
      "Build a stronger social presence",
      "Understand what your marketing budget is delivering",
      "Improve campaigns based on real performance",
    ],
    processHeading: "A Marketing Process Built Around Measurable Results",
    processText:
      "We research before spending, launch with clear goals, monitor performance closely, and refine campaigns using data.",
    processSteps: [
      {
        number: "01",
        title: "Audit & Research",
        text: "Market, audience and channel research to guide your budget.",
      },
      {
        number: "02",
        title: "Build the Strategy",
        text: "Campaigns and content aligned with measurable business goals.",
      },
      {
        number: "03",
        title: "Launch & Optimize",
        text: "Live campaigns with ongoing optimization and creative tests.",
      },
      {
        number: "04",
        title: "Report & Refine",
        text: "Monthly reports with lessons and next steps.",
      },
    ],
    price: "GH₵1,200/mo",
    priceLabel: "Plans starting from",
    infoList: [
      "Flexible month-to-month engagement",
      "Dedicated account manager",
      "Transparent performance and ROI tracking",
      "Clear monthly performance reports",
    ],
    testimonial: {
      quote:
        "We finally know what our marketing spend is actually doing. Leads are up and we can see exactly why.",
      name: "Ama Owusu",
      role: "Owner, Owusu Beauty Studio",
      image: "/assets/img/person/person-f-3.webp",
    },
    formSubject: "Digital Marketing Inquiry",
    subServices: [
      {
        id: "local-seo",
        slug: "local-seo-google-business",
        title: "Local SEO & Google Business Profile",
        headline: "Be the business locals find first — dominate local search and maps",
        bullets: [
          "Google Business Profile optimization, citation cleanup, and review strategy.",
          "Local keyword optimization and on-page signals to drive calls and visits.",
        ],
        cta: "Optimize my local presence",
        proof: "Example: Clinic that reached the map pack and saw a 40% increase in calls.",
        seoKeywords: ["local SEO", "Google My Business", "local search optimization"],
        anchor: "#local-seo",
      },
      {
        id: "technical-seo",
        slug: "technical-seo-site-audit",
        title: "Technical SEO & Site Audits",
        headline: "Fix hidden technical issues limiting your search visibility",
        bullets: [
          "Crawl and indexability audits, speed fixes, and structured data corrections.",
          "Prioritized technical roadmap for quick wins and sustained growth.",
        ],
        cta: "Run a technical SEO audit",
        proof: "Example: Technical fixes that delivered a 25% lift in organic sessions.",
        seoKeywords: ["technical SEO", "site audit", "crawl errors"],
        anchor: "#technical-seo",
      },
      {
        id: "content-marketing",
        slug: "content-marketing-blog-strategy",
        title: "Content Marketing & Blog Strategy",
        headline:
          "Attract qualified traffic with helpful content that builds trust and ranks",
        bullets: [
          "Keyword research, content calendar and on-page optimisation for search intent.",
          "Long-form resources and pillar pages designed to convert readers into customers.",
        ],
        cta: "Start a content plan",
        proof: "Example: Blog strategy that tripled organic traffic in six months.",
        seoKeywords: ["content marketing", "blog strategy", "content SEO"],
        anchor: "#content-marketing",
      },
      {
        id: "google-ads",
        slug: "google-ads-search-shopping",
        title: "Google Ads (Search & Shopping)",
        headline: "Drive immediate demand with targeted Google Ads that convert",
        bullets: [
          "Search and Shopping campaigns focused on ROI: keyword selection, ad copy testing and conversion tracking.",
          "Budget controls, remarketing, and continual bid optimization.",
        ],
        cta: "Launch Google Ads",
        proof: "Example: Google Ads campaign with 4:1 ROAS for an ecommerce client.",
        seoKeywords: ["google ads", "search ads", "shopping ads"],
        anchor: "#google-ads",
      },
      {
        id: "social-ads",
        slug: "social-media-ads-management",
        title: "Social Media Ads & Management",
        headline: "Turn social traffic into customers with targeted ads and consistent content",
        bullets: [
          "Audience segmentation, creative testing and retargeting funnels to lower CPL.",
          "Organic content strategy and community management to build trust and repeat visitors.",
        ],
        cta: "Grow on social",
        proof: "Example: Social campaign that reduced cost-per-lead by 35%.",
        seoKeywords: ["social media ads", "facebook ads", "instagram ads"],
        anchor: "#social-media-ads",
      },
      {
        id: "email-marketing",
        slug: "email-marketing-lead-nurture",
        title: "Email Marketing & Lead Nurturing",
        headline: "Nurture leads into customers with automated, personalized email journeys",
        bullets: [
          "Segmented welcome sequences, re-engagement flows and automated nurture paths.",
          "Optimized subject lines and CTAs with measurable conversion tracking.",
        ],
        cta: "Start an email funnel",
        proof: "Example: Nurturing sequences that increased MQL-to-customer conversion.",
        seoKeywords: ["email marketing", "lead nurturing", "email automation"],
        anchor: "#email-marketing",
      },
    ],
  },

  /* ==========================================
     3. BUSINESS AUTOMATION
     ========================================== */
  "business-automation": {
    id: "business-automation",
    slug: "business-automation",
    badge: "Business Automation",
    title: "Business Automation",
    lead:
      "Stop paying people to copy information between systems and chase repetitive tasks. We connect your business tools and automate routine work so your team can respond faster and focus on work that needs a human.",
    metaDescription:
      "Business automation services: connect tools, automate workflows, reduce manual work, and save hours per week with reliable integrations.",
    image: "/assets/services/business-automation.jpg",
    heroImage: "/assets/services/business-automation.jpg",
    gallery: [
      "/assets/services/business-automation-2.jpg",
      "/assets/services/business-automation.jpg",
      "/assets/services/business-automation-2.jpg",
    ],
    icon: "bi-diagram-3",
    shortDescription:
      "Connect your tools and automate repetitive work so your team saves time, reduces errors, and responds to customers faster.",
    visualHeading: "Give Your Team Back the Hours Lost to Repetitive Work",
    visualParagraphs: [
      "We map real workflows and replace repetitive steps with reliable automations.",
      "The result is fewer manual errors, faster responses and more time for strategic work.",
    ],
    features: [
      {
        icon: "bi-diagram-3",
        title: "Put Repetitive Work on Autopilot",
        text: "Automate lead capture, notifications, invoicing and other repeatable processes.",
      },
      {
        icon: "bi-plug",
        title: "Make Your Tools Work Together",
        text: "Connect forms, payments, CRMs, messaging apps and more so data flows reliably.",
      },
      {
        icon: "bi-chat-dots",
        title: "Follow Up Without the Chase",
        text: "Automated confirmations, reminders and follow-ups via email and messaging.",
      },
      {
        icon: "bi-speedometer",
        title: "See What Is Happening Now",
        text: "Live dashboards that give your team visibility without digging through systems.",
      },
      {
        icon: "bi-robot",
        title: "Add Intelligence Where It Helps",
        text: "AI-assisted automation for decisions that go beyond fixed rules.",
      },
      {
        icon: "bi-arrow-repeat",
        title: "Keep Customer Data in Sync",
        text: "Reduce conflicting records and maintain a single source of truth across tools.",
      },
    ],
    benefits: [
      "Recover hours spent on repetitive manual work",
      "Respond to leads and customers faster",
      "Reduce errors caused by re-entering information",
      "Keep important business data connected and consistent",
    ],
    processHeading: "Automate What Slows Your Team Down",
    processText:
      "We start with your actual workflows, identify repetitive steps, and replace them with reliable connected automations.",
    processSteps: [
      {
        number: "01",
        title: "Map the Real Workflow",
        text: "We trace how tasks and data move through your team and identify leak points.",
      },
      {
        number: "02",
        title: "Design the Automation",
        text: "We choose the right tools and steps based on your systems and budget.",
      },
      {
        number: "03",
        title: "Build & Test",
        text: "Workflows are built and tested against realistic scenarios before launch.",
      },
      {
        number: "04",
        title: "Monitor & Improve",
        text: "We tune automations as your team uses them to ensure reliability and value.",
      },
    ],
    price: "GH₵5,000",
    priceLabel: "Projects starting from",
    infoList: [
      "Typical 3–6 week timeline",
      "Business process mapping included",
      "Dashboard and reporting setup",
      "30 days of post-launch tuning",
    ],
    testimonial: {
      quote:
        "Tasks that used to take our team all afternoon now happen automatically. It has given us hours back every week.",
      name: "Kojo Boateng",
      role: "Operations Lead, Boateng Logistics",
      image: "/assets/img/person/person-m-2.webp",
    },
    formSubject: "Business Automation Inquiry",
    subServices: [
      {
        id: "crm-sales-automation",
        slug: "crm-sales-automation",
        title: "CRM & Sales Automation",
        headline:
          "Shorten sales cycles by automating lead capture, scoring and follow-up",
        bullets: [
          "CRM setup, custom pipelines, lead routing and automated reminders.",
          "Meeting scheduling and activity workflows that reduce human error.",
        ],
        cta: "Automate sales",
        proof:
          "Example: Lead routing automation that reduced response time to under 15 minutes.",
        seoKeywords: ["CRM automation", "sales automation", "lead routing"],
        anchor: "#crm-sales-automation",
      },
      {
        id: "invoicing-payments",
        slug: "invoicing-payments-automation",
        title: "Invoicing & Payments Automation",
        headline:
          "Get paid faster with automated invoices, reminders and payment reconciliation",
        bullets: [
          "Automatic invoice generation, payment links and reminder sequences.",
          "Reconciliation with accounting platforms to reduce manual entry.",
        ],
        cta: "Automate invoicing",
        proof: "Example: Automated reminders that lowered late payments by 40%.",
        seoKeywords: ["invoice automation", "payment automation", "billing automation"],
        anchor: "#invoicing-payments-automation",
      },
      {
        id: "scheduling-automation",
        slug: "booking-scheduling-automation",
        title: "Booking & Scheduling Automation",
        headline:
          "Reduce no-shows and administrative load with automated booking and reminders",
        bullets: [
          "Online booking, calendar sync, automated confirmations and reminders.",
          "Custom intake forms and calendar rules integrated with your CRM.",
        ],
        cta: "Automate bookings",
        proof:
          "Example: Scheduling automation that cut admin time by 60% and reduced no-shows.",
        seoKeywords: ["booking automation", "scheduling automation", "online booking"],
        anchor: "#booking-scheduling-automation",
      },
      {
        id: "internal-workflows",
        slug: "internal-workflows-task-automation",
        title: "Internal Workflows & Task Automation",
        headline: "Automate team handoffs, approvals and recurring admin tasks",
        bullets: [
          "Automated task creation, approval flows and status notifications.",
          "Integrations with collaboration tools and dashboards for visibility.",
        ],
        cta: "Streamline workflows",
        proof:
          "Example: Approval automation that cut internal processing time in half.",
        seoKeywords: ["workflow automation", "task automation", "process automation"],
        anchor: "#internal-workflows",
      },
      {
        id: "reporting-dashboards",
        slug: "reporting-dashboards-automation",
        title: "Reporting & Dashboards Automation",
        headline: "See real-time KPIs in one place—no manual data pulls",
        bullets: [
          "Custom dashboards, scheduled reports and consolidated data sources.",
          "Automated alerts for KPI shifts and easy sharing for stakeholders.",
        ],
        cta: "Build dashboards",
        proof:
          "Example: Dashboard that reduced weekly reporting from hours to minutes.",
        seoKeywords: ["automated reporting", "dashboard automation", "business intelligence"],
        anchor: "#reporting-dashboards-automation",
      },
      {
        id: "api-integrations",
        slug: "api-integrations-syncs",
        title: "API Integrations & Syncs",
        headline:
          "Connect systems reliably with robust integrations and synced data",
        bullets: [
          "Bi-directional syncs, error-handling and data mapping to avoid duplicates.",
          "Stable integrations that maintain a single source of truth across tools.",
        ],
        cta: "Connect my systems",
        proof:
          "Example: Integration that removed duplicate records and saved admin hours weekly.",
        seoKeywords: ["api integration", "systems integration", "data sync"],
        anchor: "#api-integrations",
      },
    ],
  },

  /* ==========================================
     4. AI SOLUTIONS
     ========================================== */
  "ai-solutions": {
    id: "ai-solutions",
    slug: "ai-solutions",
    badge: "AI Solutions",
    title: "AI Solutions",
    lead:
      "Put AI to work where it can actually save your business time. We build practical chatbots, assistants, lead-qualification tools, reporting solutions, and intelligent workflows around the way your team already works.",
    metaDescription:
      "Practical AI solutions: chatbots, content assistants, lead qualification, AI reporting and custom AI integrations built around your business.",
    image: "/assets/services/ai-solutions.jpg",
    heroImage: "/assets/services/ai-solutions.jpg",
    gallery: [
      "/assets/services/ai-solutions-2.jpg",
      "/assets/services/ai-solutions.jpg",
      "/assets/services/ai-solutions-2.jpg",
    ],
    icon: "bi-cpu",
    shortDescription:
      "Practical AI tools that answer customer questions, reduce repetitive work, speed up everyday tasks, and help your team make better use of information.",
    visualHeading: "Put AI to Work on Tasks That Actually Cost You Time",
    visualParagraphs: [
      "We focus on AI use-cases that produce clear, measurable value right away.",
      "Chatbots, assistants, and AI-powered workflows are designed to integrate with your existing tools and processes.",
    ],
    features: [
      {
        icon: "bi-chat-dots",
        title: "Answer Customers Around the Clock",
        text: "AI chat experiences that handle FAQs, order lookups and basic support outside business hours.",
      },
      {
        icon: "bi-pencil-square",
        title: "Get to the First Draft Faster",
        text: "Content assistants that speed up social posts, emails and other repeatable content.",
      },
      {
        icon: "bi-bar-chart",
        title: "Find the Information That Matters",
        text: "AI-assisted reporting and search to surface patterns without manual analysis.",
      },
      {
        icon: "bi-plug",
        title: "Fit AI Into Your Existing Business",
        text: "Custom integrations around your systems so AI is a helpful layer, not a separate tool.",
      },
      {
        icon: "bi-person-check",
        title: "Prioritize Better Leads",
        text: "AI-assisted lead qualification to route the best opportunities to your team quickly.",
      },
      {
        icon: "bi-gear",
        title: "Automate Smarter",
        text: "Combine AI and automation to handle tasks that need judgement, not just rules.",
      },
    ],
    benefits: [
      "Answer common customer questions 24/7",
      "Reduce repetitive work across the team",
      "Produce first drafts faster",
      "Give sales better context on leads",
      "Surface useful business information more efficiently",
    ],
    processHeading: "Start With the Problem, Then Build the AI",
    processText:
      "We identify where AI can deliver practical value, then design, test, launch and tune a solution around real workflows.",
    processSteps: [
      {
        number: "01",
        title: "Find the Right Use Case",
        text: "Identify repetitive tasks, data bottlenecks or customer interactions where AI helps most.",
      },
      {
        number: "02",
        title: "Design Around Your Workflow",
        text: "Plan the AI solution to fit existing tools, data and processes.",
      },
      {
        number: "03",
        title: "Build & Test",
        text: "Train and validate models or prompt flows on real business data and scenarios.",
      },
      {
        number: "04",
        title: "Launch & Tune",
        text: "Roll out with team training and refine with real-world feedback.",
      },
    ],
    price: "GH₵4,000",
    priceLabel: "Projects starting from",
    infoList: [
      "Typical 3–5 week timeline",
      "Designed around your existing tools",
      "Team training included",
      "30 days of post-launch tuning",
    ],
    testimonial: {
      quote:
        "Our AI chat tool now handles most of the repetitive questions our team used to answer by hand.",
      name: "Nana Yaw Asante",
      role: "Customer Experience Lead, Asante Retail Group",
      image: "/assets/img/person/person-m-8.webp",
    },
    formSubject: "AI Solutions Inquiry",
    subServices: [
      {
        id: "ai-chatbots",
        slug: "customer-support-chatbots",
        title: "Customer Support Chatbots",
        headline: "Resolve common customer questions instantly with reliable AI chat",
        bullets: [
          "24/7 chat on your website or WhatsApp that answers FAQs and supports order lookups.",
          "Seamless handoff to agents with context and conversation history.",
        ],
        cta: "Launch a chatbot",
        proof:
          "Example: Chatbot handling up to 60% of routine support queries, freeing agents for complex work.",
        seoKeywords: ["ai chatbot", "support chatbot", "whatsapp chatbot"],
        anchor: "#ai-chatbots",
      },
      {
        id: "ai-content-assistant",
        slug: "ai-content-assistants",
        title: "AI Content Assistants",
        headline: "Speed content creation with AI-assisted drafts and templates",
        bullets: [
          "Generate first drafts, social captions, emails and content briefs aligned to your voice.",
          "Quality controls and SEO-friendly prompts for on-brand output.",
        ],
        cta: "Try an AI assistant",
        proof:
          "Example: Content assistant that reduced first-draft time by 3x for a marketing team.",
        seoKeywords: ["ai content assistant", "content automation", "ai writer"],
        anchor: "#ai-content-assistants",
      },
      {
        id: "lead-scoring-ai",
        slug: "lead-qualification-scoring",
        title: "Lead Qualification & Scoring",
        headline:
          "Focus sales on the best leads using AI scoring and context-rich insights",
        bullets: [
          "Automated lead scoring based on intent signals, form responses and behaviour.",
          "Clear reasons and recommended next actions integrated into your CRM.",
        ],
        cta: "Qualify leads with AI",
        proof:
          "Example: AI scoring that increased qualified lead rates and improved sales efficiency.",
        seoKeywords: ["lead scoring ai", "ai lead qualification"],
        anchor: "#lead-qualification-scoring",
      },
      {
        id: "doc-data-extraction",
        slug: "document-data-extraction",
        title: "Document & Data Extraction",
        headline:
          "Turn invoices, forms and contracts into usable data automatically with AI",
        bullets: [
          "Extract fields from documents, validate entries and push data into your systems.",
          "Human-in-loop checks for accuracy and automated reconciliation.",
        ],
        cta: "Automate document processing",
        proof:
          "Example: Invoice extraction workflow that cut manual entry by 75%.",
        seoKeywords: ["document extraction ai", "ocr automation", "invoice OCR"],
        anchor: "#document-data-extraction",
      },
      {
        id: "ai-reporting",
        slug: "ai-powered-reporting",
        title: "AI-Powered Reporting & Insights",
        headline:
          "Get AI summaries and actionable insights from your data to make faster decisions",
        bullets: [
          "Natural-language summaries, anomaly detection and prioritized recommendations.",
          "Dashboards with AI-driven explanations and drill-downs.",
        ],
        cta: "Add AI reporting",
        proof:
          "Example: AI reports that surfaced churn drivers and suggested mitigation steps within one week.",
        seoKeywords: ["ai reporting", "ai analytics", "nlp insights"],
        anchor: "#ai-reporting",
      },
      {
        id: "custom-ai-integrations",
        slug: "custom-ai-integrations",
        title: "Custom AI Integrations",
        headline:
          "Embed AI into your systems with custom models and secure pipelines",
        bullets: [
          "Fine-tuning, model deployment and privacy-first engineering for production use.",
          "Integrations with your workflows and triggers to automate decisions.",
        ],
        cta: "Build a custom AI",
        proof:
          "Example: Custom AI that automated classification and reduced manual review time significantly.",
        seoKeywords: ["custom ai", "ai integration", "ai model deployment"],
        anchor: "#custom-ai-integrations",
      },
    ],
  },

  /* ==========================================
     5. BRANDING & GRAPHIC DESIGN
     ========================================== */
  "branding-graphic-design": {
    id: "branding-design",
    slug: "branding-graphic-design",
    badge: "Branding & Design",
    title: "Branding & Graphic Design",
    lead:
      "Build a brand customers can recognize, remember, and trust. We create a complete visual identity that keeps your business looking professional everywhere customers encounter it.",
    metaDescription:
      "Logo design, brand guidelines, social graphics and marketing assets to build a consistent, professional brand customers remember.",
    image: "/assets/services/branding-graphic-design.jpg",
    heroImage: "/assets/services/branding-graphic-design.jpg",
    gallery: [
      "/assets/services/branding-graphic-design-2.jpg",
      "/assets/services/branding-graphic-design.jpg",
      "/assets/services/branding-graphic-design-2.jpg",
    ],
    icon: "bi-palette",
    shortDescription:
      "Create a professional, recognizable identity with a logo, visual system, brand guidelines, and ready-to-use marketing assets.",
    visualHeading: "Look as Professional as the Business You Have Built",
    visualParagraphs: [
      "A consistent visual identity builds trust across every customer touchpoint.",
      "We deliver a complete system—logo, colors, type, imagery and practical guidelines—so your brand looks confident everywhere.",
    ],
    features: [
      {
        icon: "bi-palette",
        title: "Create a Look That Is Yours",
        text: "Distinctive logo and identity concepts developed specifically for your business.",
      },
      {
        icon: "bi-journal-bookmark",
        title: "Keep Your Brand Consistent",
        text: "Clear guidelines for colors, typography, imagery and logo usage.",
      },
      {
        icon: "bi-images",
        title: "Show Up Professionally on Social",
        text: "On-brand social graphics and templates to speed up publishing.",
      },
      {
        icon: "bi-file-earmark",
        title: "Make Every Marketing Piece Feel Connected",
        text: "Designs for print and digital that reinforce the same identity.",
      },
      {
        icon: "bi-grid-1x2",
        title: "Be Recognizable Everywhere",
        text: "Carry one coherent visual identity across channels and touchpoints.",
      },
      {
        icon: "bi-easel",
        title: "Present Your Business With Confidence",
        text: "Professional presentations and sales materials that communicate clearly and persuasively.",
      },
    ],
    benefits: [
      "Build stronger recognition and customer trust",
      "Look professional wherever customers encounter your business",
      "Create a distinctive identity instead of blending in",
      "Keep marketing consistent without an in-house design team",
    ],
    processHeading: "From Brand Idea to a Visual System You Can Actually Use",
    processText:
      "We learn your business, explore creative directions, refine the identity with feedback, and deliver usable assets and guidelines.",
    processSteps: [
      {
        number: "01",
        title: "Discover Your Brand",
        text: "We learn customers, competitors and the personality you want to convey.",
      },
      {
        number: "02",
        title: "Explore the Direction",
        text: "Initial concepts are tested and narrowed to a strong visual direction.",
      },
      {
        number: "03",
        title: "Design & Refine",
        text: "Identity refined into a cohesive system with practical assets.",
      },
      {
        number: "04",
        title: "Deliver & Guide",
        text: "Final files, guidelines and ready-to-use templates delivered to your team.",
      },
    ],
    price: "GH₵2,000",
    priceLabel: "Projects starting from",
    infoList: [
      "Typical 2–3 week timeline",
      "Complete logo and visual identity system",
      "Practical brand guideline document",
      "Ready-to-use marketing asset kit",
    ],
    testimonial: {
      quote:
        "Our new brand finally looks like the business we actually are. Customers comment on it constantly.",
      name: "Efua Danso",
      role: "Founder, Danso Skincare",
      image: "/assets/img/person/person-f-6.webp",
    },
    formSubject: "Branding & Design Inquiry",
    subServices: [
      {
        id: "logo-identity",
        slug: "logo-visual-identity",
        title: "Logo & Visual Identity",
        headline: "Create a memorable logo and identity that builds trust",
        bullets: [
          "Multiple concepts, vector files, and usage-ready deliverables for all channels.",
          "Color and type systems chosen to be distinctive and functional.",
        ],
        cta: "Design my logo",
        proof: "Example: Identity that raised brand perception and recognition in market tests.",
        seoKeywords: ["logo design", "visual identity", "brand identity"],
        anchor: "#logo-visual-identity",
      },
      {
        id: "brand-guidelines",
        slug: "brand-guidelines-strategy",
        title: "Brand Guidelines & Strategy",
        headline: "Keep your brand consistent with a practical, easy-to-use style guide",
        bullets: [
          "Usage rules, tone of voice notes and templates for digital and print.",
          "Examples and do/don't guidance for vendors and partners.",
        ],
        cta: "Get brand guidelines",
        proof: "Example: Guidelines that streamlined all external creative work.",
        seoKeywords: ["brand guidelines", "style guide", "brand strategy"],
        anchor: "#brand-guidelines",
      },
      {
        id: "marketing-collateral",
        slug: "marketing-collateral-print",
        title: "Marketing Collateral & Print",
        headline: "Turn ideas into polished marketing materials that convert",
        bullets: [
          "Flyers, brochures and print-ready files designed to highlight benefits and CTAs.",
          "Layouts optimized for readability and action across formats.",
        ],
        cta: "Order marketing collateral",
        proof: "Example: POS materials that increased footfall and conversions.",
        seoKeywords: ["marketing collateral", "print design", "brochure design"],
        anchor: "#marketing-collateral",
      },
      {
        id: "social-templates",
        slug: "social-digital-templates",
        title: "Social & Digital Design Templates",
        headline:
          "Publish consistently with on-brand social templates and reusable assets",
        bullets: [
          "Ready-to-use templates for posts, stories and ads to speed up publishing.",
          "Batch-ready files to support rapid creative testing and ad production.",
        ],
        cta: "Get social templates",
        proof:
          "Example: Templates that cut creative production time by 70% for a small marketing team.",
        seoKeywords: ["social templates", "digital templates", "social design"],
        anchor: "#social-templates",
      },
      {
        id: "packaging-design",
        slug: "packaging-product-design",
        title: "Packaging & Product Design",
        headline: "Design packaging that stands out on shelf and online",
        bullets: [
          "Structural concepts, artwork and supplier-ready dielines.",
          "Designs that communicate product benefits and strengthen brand recall.",
        ],
        cta: "Design packaging",
        proof: "Example: Packaging refresh that improved shelf visibility and conversion.",
        seoKeywords: ["packaging design", "product design", "dieline design"],
        anchor: "#packaging-design",
      },
      {
        id: "presentation-design",
        slug: "presentation-pitch-decks",
        title: "Presentation & Pitch Deck Design",
        headline: "Win meetings with clear, persuasive pitch decks and investor materials",
        bullets: [
          "Data-driven storytelling, polished visuals and speaker notes for confident delivery.",
          "Print-ready handouts and editable source files included.",
        ],
        cta: "Design my deck",
        proof: "Example: Investor deck that supported a successful fundraising round.",
        seoKeywords: ["pitch deck design", "presentation design", "investor deck"],
        anchor: "#presentation-design",
      },
    ],
  },

  /* ==========================================
     6. BUSINESS & DIGITAL STRATEGY
     ========================================== */
  "business-digital-strategy": {
    id: "business-strategy",
    slug: "business-digital-strategy",
    badge: "Digital Strategy",
    title: "Business & Digital Strategy",
    lead:
      "Before spending more on websites, marketing or technology, know what your business actually needs. We turn research and data into a prioritized digital roadmap you can act on.",
    metaDescription:
      "Business and digital strategy: audits, competitor research, technology recommendations and a practical roadmap for smarter growth.",
    image: "/assets/services/business-digital-strategy.jpg",
    heroImage: "/assets/services/business-digital-strategy.jpg",
    gallery: [
      "/assets/services/business-digital-strategy-2.jpg",
      "/assets/services/business-digital-strategy.jpg",
      "/assets/services/business-digital-strategy-2.jpg",
    ],
    icon: "bi-lightbulb",
    shortDescription:
      "Understand where you stand, uncover opportunities, and get a practical roadmap for making smarter digital and technology investments.",
    visualHeading: "Know What to Do Next Before You Spend More Getting There",
    visualParagraphs: [
      "We show where your digital investments will produce the best returns and what to prioritize first.",
      "You leave with a clear, prioritized roadmap connecting goals to measurable digital actions.",
    ],
    features: [
      {
        icon: "bi-clipboard-data",
        title: "See Your Digital Business Clearly",
        text: "Structured review of website, search visibility, social channels and reputation.",
      },
      {
        icon: "bi-binoculars",
        title: "Know What Competitors Are Doing",
        text: "Competitor positioning and opportunity analysis to guide differentiation.",
      },
      {
        icon: "bi-geo",
        title: "Understand the Market",
        text: "Market and customer research to uncover practical opportunities.",
      },
      {
        icon: "bi-diagram-3",
        title: "Build a Digital Roadmap",
        text: "Prioritized recommendations with milestones and measurable outcomes.",
      },
      {
        icon: "bi-tools",
        title: "Choose Technology With Confidence",
        text: "Tool comparisons and procurement guidance matched to requirements and budget.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Turn Goals Into Clear Next Steps",
        text: "Roadmaps that connect business goals to tactical digital projects.",
      },
    ],
    benefits: [
      "Make digital decisions based on research, not guesswork",
      "Prioritize technology investments around real business needs",
      "Understand competitors and market opportunities",
      "Get a clear action plan for digital improvements",
    ],
    processHeading: "Turn Questions Into a Clear, Actionable Roadmap",
    processText:
      "We combine audits, competitor research and practical business thinking to produce a prioritized roadmap you can act on.",
    processSteps: [
      {
        number: "01",
        title: "Audit & Analyze",
        text: "Comprehensive review of current digital presence and market position.",
      },
      {
        number: "02",
        title: "Research & Find Opportunities",
        text: "Customer, competitor and market analysis to uncover gaps and wins.",
      },
      {
        number: "03",
        title: "Build Your Roadmap",
        text: "Prioritized actions with timelines, costs and expected outcomes.",
      },
      {
        number: "04",
        title: "Implement & Measure",
        text: "We help execute and measure progress against the roadmap if required.",
      },
    ],
    price: "GH₵3,000",
    priceLabel: "Engagements starting from",
    infoList: [
      "Typical 2–4 week timeline",
      "Comprehensive digital audit report",
      "Competitor analysis included",
      "Prioritized, actionable strategy roadmap",
    ],
    testimonial: {
      quote:
        "The strategy audit showed us exactly where we were losing customers and what to fix first. It changed how we approach our entire digital presence.",
      name: "Adwoa Serwaa",
      role: "Managing Director, Serwaa Health Foods",
      image: "/assets/img/person/person-f-7.webp",
    },
    formSubject: "Digital Strategy Inquiry",
    subServices: [
      {
        id: "digital-audit-roadmap",
        slug: "digital-audits-roadmap",
        title: "Digital Audits & Roadmaps",
        headline:
          "Know your digital strengths and weaknesses with a clear audit and prioritized roadmap",
        bullets: [
          "Comprehensive site, SEO and channel audit with prioritized fixes.",
          "Actionable roadmap including timelines, costs and measurable outcomes.",
        ],
        cta: "Request an audit",
        proof:
          "Example: Audit that identified quick fixes which increased leads substantially.",
        seoKeywords: ["digital audit", "website audit", "digital roadmap"],
        anchor: "#digital-audits-roadmap",
      },
      {
        id: "competitor-research",
        slug: "competitor-market-research",
        title: "Competitor & Market Research",
        headline: "Find gaps competitors miss and capture more customers",
        bullets: [
          "Competitive positioning, pricing and channel analysis for actionable opportunities.",
          "Tactical recommendations to differentiate and win market share.",
        ],
        cta: "Analyze competitors",
        proof:
          "Example: Research that opened a new segment and increased market share for a product.",
        seoKeywords: ["competitor research", "market research", "competitive analysis"],
        anchor: "#competitor-market-research",
      },
      {
        id: "product-pricing",
        slug: "product-pricing-strategy",
        title: "Product & Pricing Strategy",
        headline:
          "Price and package your offerings for maximum uptake and better margins",
        bullets: [
          "Value-based pricing frameworks, packaging options and testing plans.",
          "Persona-driven pricing sensitivity analysis and A/B testing guidance.",
        ],
        cta: "Evaluate pricing",
        proof:
          "Example: Pricing changes that improved conversion and average order value.",
        seoKeywords: ["pricing strategy", "product strategy", "value-based pricing"],
        anchor: "#product-pricing-strategy",
      },
      {
        id: "go-to-market",
        slug: "go-to-market-launch-planning",
        title: "Go-to-Market & Launch Planning",
        headline: "Launch new products or services with a proven GTM playbook",
        bullets: [
          "Audience targeting, channel plan, creative assets and launch checklist.",
          "Measurement plan and post-launch optimization roadmap.",
        ],
        cta: "Plan my launch",
        proof:
          "Example: GTM plan that delivered 1,200 signups in the first month of launch.",
        seoKeywords: ["go-to-market", "launch planning", "product launch strategy"],
        anchor: "#go-to-market-launch-planning",
      },
      {
        id: "technology-selection",
        slug: "technology-selection-procurement",
        title: "Technology Selection & Procurement",
        headline:
          "Choose the right tools without costly mistakes—matched to scale and budget",
        bullets: [
          "Requirements mapping, vendor comparisons and proof-of-concept guidance.",
          "Integration and total cost analysis to prevent hidden expenses.",
        ],
        cta: "Choose tech with confidence",
        proof:
          "Example: Tool selection that reduced software costs and simplified operations.",
        seoKeywords: ["technology selection", "software procurement", "tool comparison"],
        anchor: "#technology-selection-procurement",
      },
      {
        id: "growth-kpi-roadmap",
        slug: "growth-kpi-roadmapping",
        title: "Growth & KPI Roadmapping",
        headline:
          "Turn growth goals into measurable KPIs and a clear action plan for the year",
        bullets: [
          "Goal-setting, KPI prioritization and quarterly roadmaps.",
          "Experimentation plans to deliver short-term wins and long-term growth.",
        ],
        cta: "Build a growth roadmap",
        proof:
          "Example: Roadmap that guided a 12-month growth program and lifted retention.",
        seoKeywords: ["growth strategy", "kpi roadmap", "growth roadmap"],
        anchor: "#growth-kpi-roadmapping",
      },
    ],
  },
};

/* ============================================
   SLUGS
   ============================================ */

export const SERVICE_SLUGS = Object.keys(serviceDetails);

/* ============================================
   RELATED SERVICES
   ============================================ */

export function getRelatedServices(
  currentSlug: string,
  count = 3
): ServiceSummary[] {
  return services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, count);
}
/* ============================================
   SUB-SERVICE HELPERS
   ============================================ */

/** Normalizes a sub-service anchor into a DOM id (strips leading "#"). */
export function getSubServiceAnchorId(sub: SubService): string {
  return (sub.anchor ?? `#${sub.slug}`).replace(/^#/, "");
}

/** Returns the sub-services for a given service slug. */
export function getSubServices(serviceSlug: string): SubService[] {
  return serviceDetails[serviceSlug]?.subServices ?? [];
}

/** Finds a single sub-service within a service (useful for deep links / future routes). */
export function getSubService(
  serviceSlug: string,
  subSlug: string
): SubService | undefined {
  return serviceDetails[serviceSlug]?.subServices.find((s) => s.slug === subSlug);
}

/** Flat list of every service/sub-service pair (sitemap, nav, future nested routes). */
export function getAllSubServicePaths(): { slug: string; subservice: string }[] {
  return Object.values(serviceDetails).flatMap((service) =>
    service.subServices.map((sub) => ({
      slug: service.slug,
      subservice: sub.slug,
    }))
  );
}
/* ============================================
   IMAGE RESOLUTION LAYER
   Central place to control every image used on
   service pages. Falls back deterministically so
   the UI never renders a broken image.
   ============================================ */

/** Shared pool used for fallbacks + showcase strips. All paths verified to exist. */
export const SERVICE_IMAGE_POOL: string[] = [
  "/assets/services/web-development.jpg",
  "/assets/services/digital-marketing-seo.jpg",
  "/assets/services/business-automation.jpg",
  "/assets/services/ai-solutions.jpg",
  "/assets/services/branding-graphic-design.jpg",
  "/assets/services/business-digital-strategy.jpg",
];

/**
 * Override images per sub-service id.
 * Drop real photography here as it becomes available —
 * anything not listed uses a stable pooled fallback.
 */
export const SUB_SERVICE_IMAGES: Record<string, string> = {
  // "ecommerce-websites": "/assets/img/services/ecommerce-store.webp",
  // "ai-chatbots": "/assets/img/services/ai-chatbot.webp",
};

/** Deterministic (SSR-safe) index from a string key. */
function stableIndex(key: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return length ? hash % length : 0;
}

/** Hero image for a service page. */
export function getServiceHeroImage(serviceSlug: string): string {
  const service = serviceDetails[serviceSlug];
  return service?.heroImage ?? service?.image ?? SERVICE_IMAGE_POOL[0];
}

/** Thumbnail for a sub-service card. */
export function getSubServiceImage(sub: SubService): string {
  return (
    sub.image ??
    SUB_SERVICE_IMAGES[sub.id] ??
    SERVICE_IMAGE_POOL[stableIndex(sub.id, SERVICE_IMAGE_POOL.length)]
  );
}

/** Descriptive alt text for a sub-service thumbnail. */
export function getSubServiceImageAlt(sub: SubService, serviceTitle: string): string {
  return sub.imageAlt ?? `${sub.title} — ${serviceTitle} by Digibiz Technologies`;
}

/** Showcase strip images, excluding the service's primary image. */
export function getServiceGallery(serviceSlug: string, count = 3): string[] {
  const service = serviceDetails[serviceSlug];
  if (service?.gallery?.length) return service.gallery.slice(0, count);

  const start = stableIndex(serviceSlug, SERVICE_IMAGE_POOL.length);
  const rotated = [
    ...SERVICE_IMAGE_POOL.slice(start),
    ...SERVICE_IMAGE_POOL.slice(0, start),
  ].filter((img) => img !== service?.image);

  return rotated.slice(0, count);
}