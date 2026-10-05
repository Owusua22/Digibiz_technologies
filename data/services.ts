/* ============================================
   CENTRALIZED SERVICES DATA
   Conversion-focused copy for all service pages.
   Single source of truth for homepage, services,
   footer, sitemap, and JSON-LD structured data.
   Includes sub-services with benefit-led copy.

   The catalogue is organised around Digibiz's six
   core service pillars, in the order they appear
   across the site:
     1. Web Development
     2. Mobile App Development
     3. Digital Marketing
     4. Graphic Design
     5. SEO
     6. Business & IT Solutions
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
  image?: string;      // optional custom thumbnail
  imageAlt?: string;   // optional custom thumbnail alt text
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
   heroImage?: string;  // optional dedicated hero shot
  gallery?: string[];  // optional showcase strip images

  formSubject: string;

  // list of sub-services for each main service
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
    title: "Web Development",
    shortDescription:
      "Fast, mobile-first business websites, online stores and web applications built to build trust and turn more visitors into inquiries and sales.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    icon: "bi-phone",
    title: "Mobile App Development",
    shortDescription:
      "Android, iOS and cross-platform mobile apps for Ghanaian businesses — designed, built, published and supported from one team.",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    icon: "bi-megaphone",
    title: "Digital Marketing",
    shortDescription:
      "Google Ads, social media, email and content campaigns focused on bringing in qualified leads and turning marketing spend into measurable results.",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    icon: "bi-palette",
    title: "Graphic Design",
    shortDescription:
      "Logos, brand systems and marketing artwork that give your business a consistent, professional look across every customer touchpoint.",
  },
  {
    id: "seo",
    slug: "seo-services",
    icon: "bi-search",
    title: "SEO",
    shortDescription:
      "Technical, on-page and local search optimisation so customers actively looking for what you sell find your business first.",
  },
  {
    id: "business-it-solutions",
    slug: "business-it-solutions",
    icon: "bi-diagram-3",
    title: "Business & IT Solutions",
    shortDescription:
      "Automation, managed IT support, cloud infrastructure and system integrations that keep your business running and your team productive.",
  },
];

/* ============================================
   SERVICE DETAIL DATA (with sub-services)
   ============================================ */

export const serviceDetails: Record<string, ServiceDetail> = {
  /* ==========================================
     1. WEB DEVELOPMENT
     ========================================== */
  "website-development": {
    id: "web-development",
    slug: "website-development",
    badge: "Web Development",
    title: "Web Development",
    lead:
      "Your website has seconds to earn a customer's attention. We build fast, professional websites that make your business easy to understand, easy to trust, and easy to contact or buy from.",
    metaDescription:
      "Professional web development in Ghana: fast mobile-first business websites, e-commerce stores, landing pages and web applications built to attract and convert customers.",
    image: "/assets/services/web-development.jpg",
    heroImage: "/assets/services/web-development.jpg",
    gallery: [
      "/assets/services/web-development-2.jpg",
      "/assets/services/web-development.jpg",
      "/assets/services/web-development-2.jpg",
    ],
    icon: "bi-globe2",
    shortDescription:
      "Fast, professional websites and web applications built to turn more visitors into inquiries, customers and sales.",
    visualHeading: "Turn Your Website Into a Reason Customers Choose You",
    visualParagraphs: [
      "Potential customers decide in seconds. We deliver mobile-first builds that are fast, clear and designed to convert.",
      "Content, trust signals and a friction-free path to contact or purchase are the priority — so visitors become customers.",
      "Whether it's a business site, landing page, online store or custom web application, we deliver a search-ready, speed-tested launch.",
    ],
    features: [
      {
        icon: "bi-phone",
        title: "Look Great on Every Screen",
        text: "Mobile-first design that prioritises usability on phones and tablets, where most customers begin their journey.",
      },
      {
        icon: "bi-search",
        title: "Built to Be Found",
        text: "SEO-friendly structure, semantic HTML and schema so search engines understand your pages clearly.",
      },
      {
        icon: "bi-speedometer2",
        title: "Keep Visitors Moving",
        text: "Performance tuning and optimised images to cut load times and reduce bounce rates.",
      },
      {
        icon: "bi-shop",
        title: "Sell Online With Confidence",
        text: "Secure Mobile Money, card and Paystack payments with checkout UX designed to reduce abandonment.",
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
      "You always know what comes next. We move from planning to design, development, testing and launch with clear check-ins throughout the project.",
    processSteps: [
      {
        number: "01",
        title: "Discover & Plan",
        text: "We map your pages, customer journey and priorities before we design.",
      },
      {
        number: "02",
        title: "Design & Build",
        text: "Mobile-first design and SEO-ready development based on your brand and goals.",
      },
      {
        number: "03",
        title: "Test & Launch",
        text: "Cross-device testing, performance checks and a scheduled launch.",
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
    formSubject: "Web Development Inquiry",

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
          "Mobile-first, accessible and fast — plus integrated contact forms and analytics to track leads.",
        ],
        cta: "Request a site review",
        proof:
          "Mensah Furniture's new corporate site improved inbound inquiries and trust.",
        seoKeywords: ["corporate website", "business website", "professional website"],
        anchor: "#corporate-websites",
      },
      {
        id: "ecommerce-websites",
        slug: "ecommerce-websites",
        title: "Ecommerce Websites",
        headline:
          "Sell more online with fast, secure stores optimised for conversions and discovery",
        bullets: [
          "Optimised checkout, secure Mobile Money and card payments, plus shipping and inventory setup.",
          "Product SEO, structured data and analytics to help customers find and buy your products.",
        ],
        cta: "Start your ecommerce project",
        proof:
          "Asante Retail's ecommerce launch significantly increased online revenue.",
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
        headline: "High-converting landing pages for campaigns, offers and lead generation",
        bullets: [
          "Single-focus UX with fast load times, clear calls to action and conversion tracking.",
          "Built for A/B testing, pixel integration and quick campaign launches.",
        ],
        cta: "Build a landing page",
        proof: "A campaign landing page that delivered 150 qualified leads in 4 weeks.",
        seoKeywords: ["landing page design", "lead generation landing page"],
        anchor: "#landing-pages",
      },
      {
        id: "web-applications",
        slug: "web-applications",
        title: "Web Applications & Portals",
        headline: "Custom web apps that match your processes and scale with your business",
        bullets: [
          "Secure user roles, workflows and integrations with your existing systems.",
          "Built for maintainability, performance and future growth.",
        ],
        cta: "Discuss a custom app",
        proof:
          "An internal portal that automated tasks and reduced process time by over 50%.",
        seoKeywords: ["web application", "custom web app", "business portal"],
        anchor: "#web-applications",
      },
      {
        id: "redesign-migrations",
        slug: "website-redesign-migrations",
        title: "Website Redesign & Migrations",
        headline:
          "Migrate or redesign without losing SEO value and with measurable speed gains",
        bullets: [
          "SEO-safe migration, content mapping and redirects to preserve rankings.",
          "Design refresh that improves clarity, trust signals and page performance.",
        ],
        cta: "Plan my migration",
        proof:
          "A seamless migration that maintained search rankings and improved page speed.",
        seoKeywords: ["website migration", "site redesign", "redesign and migration"],
        anchor: "#website-redesign-migrations",
      },
      {
        id: "cro-analytics",
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization & Analytics",
        headline:
          "Turn more of your existing traffic into customers using data-driven CRO",
        bullets: [
          "Heatmaps, A/B testing and funnel analysis to uncover easy wins.",
          "Goal tracking and a prioritised test roadmap to improve conversions steadily.",
        ],
        cta: "Improve conversions",
        proof:
          "CRO tests that increased contact form submissions by more than 20%.",
        seoKeywords: ["conversion rate optimization", "CRO", "analytics for conversion"],
        anchor: "#conversion-rate-optimization",
      },
    ],
  },

  /* ==========================================
     2. MOBILE APP DEVELOPMENT
     ========================================== */
  "mobile-app-development": {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    badge: "Mobile App Development",
    title: "Mobile App Development",
    lead:
      "Your customers carry a phone all day. We build Android, iOS and cross-platform apps that make it easy to buy, book, pay, track and stay in touch with your business.",
    metaDescription:
      "Mobile app development in Ghana: Android, iOS and cross-platform business apps designed, developed, published to the app stores and supported after launch.",
    image: "/assets/img/services/service_3.jpg",
    heroImage: "/assets/img/services/service_3.jpg",
    icon: "bi-phone",
    shortDescription:
      "Android, iOS and cross-platform mobile apps built for Ghanaian businesses and published to the app stores.",
    visualHeading: "Put Your Business in Your Customers' Pockets",
    visualParagraphs: [
      "Mobile-first buying habits are normal in Ghana. An app turns one-off visitors into repeat customers.",
      "We plan, design and build around the tasks your customers actually do on a phone — ordering, booking, paying or tracking.",
      "From first wireframe to app store approval, you get one team and clear progress updates.",
    ],
    features: [
      {
        icon: "bi-android",
        title: "Reach Android Users First",
        text: "Native Android apps tuned for the mid-range devices most Ghanaian customers use.",
      },
      {
        icon: "bi-apple",
        title: "Launch on iOS Too",
        text: "iPhone and iPad builds so you are not locked out of part of your market.",
      },
      {
        icon: "bi-phone-flip",
        title: "Build Once, Run Everywhere",
        text: "Cross-platform development that keeps one codebase and one release schedule.",
      },
      {
        icon: "bi-palette",
        title: "Designed for Small Screens",
        text: "App UI/UX that loads fast on slow connections and is easy to use with one thumb.",
      },
      {
        icon: "bi-cloud-arrow-up",
        title: "Ready for Local Payments",
        text: "Mobile Money, card and in-app payment flows designed for local buying behaviour.",
      },
      {
        icon: "bi-life-preserver",
        title: "Published & Supported",
        text: "Store submission, policy compliance, crash monitoring and post-launch updates.",
      },
    ],
    benefits: [
      "Give customers a fast, dedicated way to reach your business",
      "Support Mobile Money, card and in-app purchases in one place",
      "Increase repeat orders and loyalty through push notifications",
      "Own a direct communication channel without platform fees on every visit",
      "Build a product your team can improve without a full rebuild",
    ],
    processHeading: "From App Idea to a Live App Store Listing",
    processText:
      "Mobile projects are decided in a small number of well-run steps. You see the app working early, and every release is documented.",
    processSteps: [
      {
        number: "01",
        title: "Scope the Idea",
        text: "We define the users, the core tasks and the v1 feature set — and cut anything that can wait.",
      },
      {
        number: "02",
        title: "Design the Experience",
        text: "Wireframes and a clickable prototype so you can approve the app before it is built.",
      },
      {
        number: "03",
        title: "Build & Test",
        text: "Development in short cycles, tested on real devices and real networks before release.",
      },
      {
        number: "04",
        title: "Launch & Improve",
        text: "Store submission, analytics setup and iteration based on real user behaviour.",
      },
    ],
    price: "GH₵12,000",
    priceLabel: "Apps starting from",
    infoList: [
      "Typical 8–12 week timeline",
      "Android and iOS builds included",
      "Mobile Money and card payments supported",
      "60 days of post-launch support",
    ],
    testimonial: {
      quote:
        "Our ordering app cut the phone calls we used to handle every morning, and repeat orders went up in the first month.",
      name: "Nana Yaw Asante",
      role: "Operations Lead, Asante Retail Group",
      image: "/assets/img/person/person-m-8.webp",
    },
    formSubject: "Mobile App Development Inquiry",
    subServices: [
      {
        id: "android-apps",
        slug: "android-app-development",
        title: "Android App Development",
        headline: "Reach the widest Ghanaian smartphone audience with a reliable Android app",
        bullets: [
          "Native and hybrid builds tested on the mid-range Android devices customers actually own.",
          "Google Play submission, listing optimisation and staged rollouts.",
        ],
        cta: "Build my Android app",
        proof:
          "An Android ordering app that moved repeat orders off phone calls within weeks.",
        seoKeywords: [
          "android app development",
          "android developer ghana",
          "play store app",
        ],
        anchor: "#android-app-development",
      },
      {
        id: "ios-apps",
        slug: "ios-app-development",
        title: "iOS App Development",
        headline: "Bring your service to iPhone and iPad customers with a polished iOS experience",
        bullets: [
          "Swift-built apps that follow Apple's Human Interface Guidelines for a native feel.",
          "Apple App Store review handled end to end, including privacy declarations.",
        ],
        cta: "Build my iOS app",
        proof:
          "An iOS booking app adopted immediately by customers who had stopped using the website.",
        seoKeywords: ["ios app development", "iphone app developer", "swift app"],
        anchor: "#ios-app-development",
      },
      {
        id: "cross-platform-apps",
        slug: "cross-platform-app-development",
        title: "Cross-Platform Apps",
        headline: "One codebase, both app stores, and a faster roadmap to launch",
        bullets: [
          "Flutter and React Native builds that share logic across Android and iOS.",
          "One design system and one release cycle instead of two separate projects.",
        ],
        cta: "Go cross-platform",
        proof:
          "A cross-platform build that cut delivery time almost in half against two native apps.",
        seoKeywords: [
          "cross platform app development",
          "flutter development",
          "react native developer",
        ],
        anchor: "#cross-platform-app-development",
      },
      {
        id: "app-ui-ux",
        slug: "app-ui-ux-design",
        title: "App UI/UX Design",
        headline: "An app customers understand on the first try, even on a small screen",
        bullets: [
          "User flows, wireframes and a clickable prototype approved before development starts.",
          "Design systems and reusable components so new screens ship quickly later.",
        ],
        cta: "Design my app",
        proof:
          "A simplified onboarding flow that lifted first-session completion significantly.",
        seoKeywords: ["app ui design", "mobile app ux", "app wireframe design"],
        anchor: "#app-ui-ux-design",
      },
      {
        id: "app-store-launch",
        slug: "app-store-submission-launch",
        title: "App Store Submission & Launch",
        headline: "Get approved and published without store surprises",
        bullets: [
          "Store listing copy, screenshots, privacy policy and data-safety declarations prepared with you.",
          "Review rejections handled and resubmitted on your behalf.",
        ],
        cta: "Publish my app",
        proof:
          "First-time approval on both stores after a full pre-submission compliance check.",
        seoKeywords: [
          "app store submission",
          "play store publishing",
          "app launch",
        ],
        anchor: "#app-store-submission-launch",
      },
      {
        id: "app-support",
        slug: "app-maintenance-updates",
        title: "App Maintenance & Updates",
        headline: "Keep the app fast, secure and compatible as phones and OS versions change",
        bullets: [
          "Crash monitoring, dependency updates and Android/iOS version compatibility.",
          "Feature releases and fixes on a predictable monthly cycle.",
        ],
        cta: "Support my app",
        proof:
          "A maintenance plan that kept crash-free sessions high through an OS rollout.",
        seoKeywords: [
          "app maintenance",
          "app support",
          "mobile app updates",
        ],
        anchor: "#app-maintenance-updates",
      },
    ],
  },

  /* ==========================================
     3. DIGITAL MARKETING
     ========================================== */
  "digital-marketing": {
    id: "digital-marketing",
    slug: "digital-marketing",
    badge: "Digital Marketing",
    title: "Digital Marketing",
    lead:
      "We help you reach the right audience, cut wasted marketing spend, measure what actually works, and turn attention into leads and sales.",
    metaDescription:
      "Digital marketing in Ghana: Google Ads, social media, email and content campaigns built to generate qualified leads and prove return on every cedi spent.",
    image: "/assets/services/digital-marketing-seo.jpg",
    heroImage: "/assets/services/digital-marketing-seo.jpg",
    gallery: [
      "/assets/services/digital-marketing-seo-2.jpg",
      "/assets/services/digital-marketing-seo.jpg",
      "/assets/services/digital-marketing-seo-2.jpg",
    ],
    icon: "bi-megaphone",
    shortDescription:
      "Attract people who are ready to act with measurable Google Ads, social media, email and content campaigns.",
    visualHeading: "Stop Chasing Attention. Start Attracting Customers.",
    visualParagraphs: [
      "We focus your marketing around the audiences most likely to become customers.",
      "Campaigns are tracked and refined: you see what worked, where the budget went and what we do next.",
    ],
    features: [
      {
        icon: "bi-megaphone",
        title: "Reach The Right Audience",
        text: "Carefully targeted campaigns instead of broad, expensive reach that never converts.",
      },
      {
        icon: "bi-google",
        title: "Turn Ad Spend Into Opportunity",
        text: "Paid search and shopping campaigns with focused targeting and measured conversions.",
      },
      {
        icon: "bi-share",
        title: "Build An Audience That Knows You",
        text: "Social content and community management to keep your brand top-of-mind between purchases.",
      },
      {
        icon: "bi-envelope",
        title: "Follow Up Without the Chase",
        text: "Segmented welcome, nurture and re-engagement emails that convert leads into customers.",
      },
      {
        icon: "bi-file-earmark-bar-graph",
        title: "Know What Is Working",
        text: "Clear reporting showing results, insights and the next recommended action.",
      },
      {
        icon: "bi-person-rolodex",
        title: "Capture Better Leads",
        text: "Lead capture systems that qualify and route opportunities to your team reliably.",
      },
    ],
    benefits: [
      "Reach customers actively looking for what you sell",
      "Generate and capture more qualified leads",
      "Build a stronger and more consistent social presence",
      "Understand exactly what your marketing budget is delivering",
      "Improve campaigns continuously based on real performance",
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
        text: "Campaigns, offers and content aligned with measurable business goals.",
      },
      {
        number: "03",
        title: "Launch & Optimise",
        text: "Live campaigns with ongoing optimisation and creative tests.",
      },
      {
        number: "04",
        title: "Report & Refine",
        text: "Monthly reports with lessons learned and clear next steps.",
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
        id: "google-ads",
        slug: "google-ads-search-shopping",
        title: "Google Ads (Search & Shopping)",
        headline: "Drive immediate demand with targeted Google Ads that convert",
        bullets: [
          "Search and Shopping campaigns focused on return: keyword selection, ad copy testing and conversion tracking.",
          "Budget controls, remarketing and continual bid optimisation.",
        ],
        cta: "Launch Google Ads",
        proof: "A Google Ads campaign that returned 4:1 on ad spend for an ecommerce client.",
        seoKeywords: ["google ads", "search ads", "shopping ads", "ppc ghana"],
        anchor: "#google-ads",
      },
      {
        id: "social-media-management",
        slug: "social-media-management",
        title: "Social Media Management",
        headline: "Stay visible and credible on the platforms your customers actually use",
        bullets: [
          "Content calendars, community management and response handling across your channels.",
          "Organic growth tactics that build trust without depending on ad spend.",
        ],
        cta: "Manage my socials",
        proof: "Consistent posting that grew page followers and inbound DMs within two months.",
        seoKeywords: [
          "social media management",
          "social media agency ghana",
          "content calendar",
        ],
        anchor: "#social-media-management",
      },
      {
        id: "social-media-ads",
        slug: "social-media-advertising",
        title: "Social Media Advertising",
        headline: "Turn social traffic into customers with targeted ads and tested creative",
        bullets: [
          "Audience segmentation, creative testing and retargeting funnels to lower cost per lead.",
          "Budget split across Meta and other channels based on where your customers actually convert.",
        ],
        cta: "Advertise on social",
        proof: "A social campaign that reduced cost per lead by 35%.",
        seoKeywords: [
          "social media advertising",
          "facebook ads",
          "instagram ads",
        ],
        anchor: "#social-media-advertising",
      },
      {
        id: "email-marketing",
        slug: "email-marketing-lead-nurture",
        title: "Email Marketing & Lead Nurturing",
        headline: "Nurture leads into customers with automated, personalised email journeys",
        bullets: [
          "Segmented welcome sequences, re-engagement flows and automated nurture paths.",
          "Optimised subject lines and calls to action with measurable conversion tracking.",
        ],
        cta: "Start an email funnel",
        proof: "Nurturing sequences that increased lead-to-customer conversion.",
        seoKeywords: ["email marketing", "lead nurturing", "email automation"],
        anchor: "#email-marketing-lead-nurture",
      },
      {
        id: "content-marketing",
        slug: "content-marketing-campaigns",
        title: "Content Marketing",
        headline: "Useful content that answers customer questions and builds buying confidence",
        bullets: [
          "Content plans built around real customer questions and buying objections.",
          "Articles, social content and email built from one research base to save time and budget.",
        ],
        cta: "Plan my content",
        proof: "A content programme that produced steady leads without extra ad spend.",
        seoKeywords: [
          "content marketing",
          "content strategy",
          "content writing services",
        ],
        anchor: "#content-marketing-campaigns",
      },
      {
        id: "campaign-analytics",
        slug: "campaign-analytics-reporting",
        title: "Campaign Analytics & Reporting",
        headline: "Know which campaigns earn their budget and which need changing",
        bullets: [
          "GA4, call tracking and conversion setup so every lead source is attributable.",
          "Plain-language monthly reports with recommendations, not just charts.",
        ],
        cta: "Track my campaigns",
        proof: "Reporting that showed one channel driving most revenue and another wasting budget.",
        seoKeywords: [
          "marketing analytics",
          "campaign reporting",
          "ga4 tracking",
        ],
        anchor: "#campaign-analytics-reporting",
      },
    ],
  },

  /* ==========================================
     4. GRAPHIC DESIGN
     ========================================== */
  "graphic-design": {
    id: "graphic-design",
    slug: "graphic-design",
    badge: "Graphic Design",
    title: "Graphic Design",
    lead:
      "Build a brand customers can recognise, remember and trust. We create a complete visual identity that keeps your business looking professional everywhere customers meet it.",
    metaDescription:
      "Graphic design services in Ghana: logo design, brand identity systems, social media graphics, print marketing materials and pitch decks that look professional everywhere.",
    image: "/assets/services/branding-graphic-design.jpg",
    heroImage: "/assets/services/branding-graphic-design.jpg",
    gallery: [
      "/assets/services/branding-graphic-design-2.jpg",
      "/assets/services/branding-graphic-design.jpg",
      "/assets/services/branding-graphic-design-2.jpg",
    ],
    icon: "bi-palette",
    shortDescription:
      "Logos, brand systems and marketing artwork that give your business a consistent, professional look everywhere customers see it.",
    visualHeading: "Look as Professional as the Business You Have Built",
    visualParagraphs: [
      "A consistent visual identity builds trust across every customer touchpoint.",
      "We deliver a complete system — logo, colours, type, imagery and practical guidelines — so your brand looks confident everywhere.",
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
        text: "Clear guidelines for colours, typography, imagery and correct logo usage.",
      },
      {
        icon: "bi-images",
        title: "Show Up Professionally on Social",
        text: "On-brand social graphics and templates to speed up publishing every week.",
      },
      {
        icon: "bi-file-earmark",
        title: "Make Every Piece Feel Connected",
        text: "Designs for print and digital that reinforce the same identity.",
      },
      {
        icon: "bi-grid-1x2",
        title: "Be Recognisable Everywhere",
        text: "Carry one coherent visual identity across channels and touchpoints.",
      },
      {
        icon: "bi-easel",
        title: "Present Your Business With Confidence",
        text: "Professional presentations and sales materials that communicate clearly.",
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
      "We learn your business, explore creative directions, refine the identity with your feedback, and deliver usable assets and guidelines.",
    processSteps: [
      {
        number: "01",
        title: "Discover Your Brand",
        text: "We learn your customers, competitors and the personality you want to convey.",
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
    formSubject: "Graphic Design Inquiry",
    subServices: [
      {
        id: "logo-identity",
        slug: "logo-visual-identity",
        title: "Logo & Visual Identity",
        headline: "Create a memorable logo and identity that builds trust",
        bullets: [
          "Multiple concepts, vector files and usage-ready deliverables for every channel.",
          "Colour and type systems chosen to be distinctive and practical in print and on screen.",
        ],
        cta: "Design my logo",
        proof: "An identity that raised brand perception and recognition in customer feedback.",
        seoKeywords: ["logo design", "visual identity", "brand identity"],
        anchor: "#logo-visual-identity",
      },
      {
        id: "brand-guidelines",
        slug: "brand-guidelines-strategy",
        title: "Brand Guidelines & Strategy",
        headline: "Keep your brand consistent with a practical, easy-to-use style guide",
        bullets: [
          "Usage rules, tone-of-voice notes and templates for digital and print.",
          "Examples and do/don't guidance for vendors and partners.",
        ],
        cta: "Get brand guidelines",
        proof: "Guidelines that streamlined all external creative work for a busy in-house team.",
        seoKeywords: ["brand guidelines", "style guide", "brand strategy"],
        anchor: "#brand-guidelines",
      },
      {
        id: "social-design",
        slug: "social-digital-design",
        title: "Social & Digital Design",
        headline: "Publish consistently with on-brand social templates and reusable assets",
        bullets: [
          "Ready-to-use templates for posts, stories and ads to speed up publishing.",
          "Batch-ready files that support rapid creative testing and ad production.",
        ],
        cta: "Get social templates",
        proof: "Templates that cut creative production time by 70% for a small marketing team.",
        seoKeywords: ["social media design", "digital templates", "social graphics"],
        anchor: "#social-digital-design",
      },
      {
        id: "marketing-collateral",
        slug: "marketing-collateral-print",
        title: "Marketing Collateral & Print",
        headline: "Turn ideas into polished marketing materials that prompt action",
        bullets: [
          "Flyers, brochures, banners and print-ready files that highlight benefits and clear calls to action.",
          "Layouts optimised for readability and action across formats.",
        ],
        cta: "Order marketing collateral",
        proof: "Point-of-sale materials that increased footfall and in-store conversions.",
        seoKeywords: ["marketing collateral", "print design", "brochure design"],
        anchor: "#marketing-collateral",
      },
      {
        id: "packaging-design",
        slug: "packaging-product-design",
        title: "Packaging & Product Design",
        headline: "Design packaging that stands out on the shelf and online",
        bullets: [
          "Structural concepts, artwork and supplier-ready dielines.",
          "Designs that communicate product benefits and strengthen brand recall.",
        ],
        cta: "Design packaging",
        proof: "A packaging refresh that improved shelf visibility and conversion rates.",
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
        proof: "An investor deck that supported a successful fundraising round.",
        seoKeywords: ["pitch deck design", "presentation design", "investor deck"],
        anchor: "#presentation-pitch-decks",
      },
    ],
  },

  /* ==========================================
     5. SEO
     ========================================== */
  "seo-services": {
    id: "seo",
    slug: "seo-services",
    badge: "SEO",
    title: "SEO",
    lead:
      "When someone searches Google for what you sell, they should find you. We fix the technical issues holding your site back, then build content and authority that keeps you there.",
    metaDescription:
      "SEO services in Ghana: technical SEO audits, local SEO and Google Business Profile optimisation, on-page SEO, content SEO and link building for lasting organic growth.",
    image: "/assets/img/services/seo.jpg",
    heroImage: "/assets/img/services/seo.jpg",
    gallery: [
      "/assets/img/services/techseo.jpg",
      "/assets/img/services/seo.jpg",
      "/assets/img/services/digitalm.jpg",
    ],
    icon: "bi-search",
    shortDescription:
      "Technical, on-page and local search optimisation so customers searching for your services find your business first.",
    visualHeading: "Be the Business Customers Find on Google",
    visualParagraphs: [
      "Most customers start with a search. We make sure your business appears for the searches that lead to buying.",
      "SEO is not a trick or a shortcut — it is technical fixes, useful content and local relevance, compounding over time.",
    ],
    features: [
      {
        icon: "bi-search",
        title: "Rank for Buying Searches",
        text: "Focus on keywords your customers actually use when they are ready to spend.",
      },
      {
        icon: "bi-geo",
        title: "Win Local Visibility",
        text: "Google Business Profile and local SEO so nearby customers find you first.",
      },
      {
        icon: "bi-speedometer",
        title: "Fix What Blocks You",
        text: "Crawlability, indexation, Core Web Vitals and structured data cleaned up properly.",
      },
      {
        icon: "bi-file-earmark-bar-graph",
        title: "Publish Content That Helps",
        text: "Articles and landing pages written to answer real customer questions.",
      },
      {
        icon: "bi-link-45deg",
        title: "Build Genuine Authority",
        text: "Clean, relevant link building and digital PR — no spam or risky shortcuts.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Track And Improve",
        text: "Rank, traffic and conversion reporting with the next action always clear.",
      },
    ],
    benefits: [
      "Be found by customers already searching for your services",
      "Reduce dependence on paid advertising over time",
      "Build a local presence that drives calls, visits and enquiries",
      "Understand exactly which pages and keywords earn results",
    ],
    processHeading: "SEO Without the Mystery",
    processText:
      "We audit, fix, publish and build authority in a clear monthly cycle, and show you the numbers that matter.",
    processSteps: [
      {
        number: "01",
        title: "Audit & Benchmark",
        text: "Technical, content and competitor audit that sets a measurable starting point.",
      },
      {
        number: "02",
        title: "Fix & Optimise",
        text: "Priority technical fixes and on-page optimisation for pages that matter most.",
      },
      {
        number: "03",
        title: "Content & Authority",
        text: "Publishing schedule plus clean link building to grow relevance and trust.",
      },
      {
        number: "04",
        title: "Measure & Scale",
        text: "Rank, traffic and lead reporting, with work moved to the best-performing areas.",
      },
    ],
    price: "GH₵1,500/mo",
    priceLabel: "Retainers starting from",
    infoList: [
      "Flexible month-to-month engagement",
      "Technical fixes applied, not just advised",
      "Local and national SEO covered",
      "Monthly rank, traffic and lead reporting",
    ],
    testimonial: {
      quote:
        "We stopped paying for every customer. The enquiries that come through organic search each month are now the cheapest we get.",
      name: "Adwoa Serwaa",
      role: "Managing Director, Serwaa Health Foods",
      image: "/assets/img/person/person-f-7.webp",
    },
    formSubject: "SEO Inquiry",
    subServices: [
      {
        id: "technical-seo",
        slug: "technical-seo-site-audit",
        title: "Technical SEO & Site Audits",
        headline: "Fix hidden technical issues that limit your search visibility",
        bullets: [
          "Crawl and indexation audits, Core Web Vitals fixes and structured data corrections.",
          "A prioritised technical roadmap of quick wins and sustained improvements.",
        ],
        cta: "Run a technical SEO audit",
        proof: "Technical fixes that delivered a 25% lift in organic sessions.",
        seoKeywords: ["technical SEO", "site audit", "crawl errors", "core web vitals"],
        anchor: "#technical-seo-site-audit",
      },
      {
        id: "local-seo",
        slug: "local-seo-google-business-profile",
        title: "Local SEO & Google Business Profile",
        headline: "Be the business locals find first in search and on maps",
        bullets: [
          "Google Business Profile optimisation, citation cleanup and review strategy.",
          "Local keyword optimisation and on-page signals to drive calls, directions and visits.",
        ],
        cta: "Optimise my local presence",
        proof: "A clinic that reached the map pack and saw a 40% increase in calls.",
        seoKeywords: ["local SEO", "Google Business Profile", "local search optimisation"],
        anchor: "#local-seo-google-business-profile",
      },
      {
        id: "on-page-seo",
        slug: "on-page-seo-keyword-strategy",
        title: "On-Page SEO & Keyword Strategy",
        headline: "Make every important page answer a real customer search",
        bullets: [
          "Keyword research mapped to services, locations and buying intent.",
          "Titles, headings, internal links and page experience optimised page by page.",
        ],
        cta: "Improve my on-page SEO",
        proof: "Page-level optimisation that moved several service pages onto page one.",
        seoKeywords: ["on-page SEO", "keyword strategy", "page optimisation"],
        anchor: "#on-page-seo-keyword-strategy",
      },
      {
        id: "content-seo",
        slug: "content-seo-blog-strategy",
        title: "Content SEO & Blog Strategy",
        headline: "Attract qualified traffic with helpful content that ranks and sells",
        bullets: [
          "Search-intent research and a content calendar built around real customer questions.",
          "Long-form articles and pillar pages designed to convert readers into enquiries.",
        ],
        cta: "Start a content plan",
        proof: "A blog strategy that tripled organic traffic in six months.",
        seoKeywords: ["content SEO", "blog strategy", "topical authority"],
        anchor: "#content-seo-blog-strategy",
      },
      {
        id: "off-page-seo",
        slug: "off-page-seo-link-building",
        title: "Off-Page SEO & Link Building",
        headline: "Earn relevant authority from sources your customers already trust",
        bullets: [
          "Digital PR, directory cleanups and guest placements relevant to your industry.",
          "No bought spam networks or PBNs that risk penalties.",
        ],
        cta: "Build my authority",
        proof: "Clean link acquisition that grew referring domains without a single penalty.",
        seoKeywords: ["off-page SEO", "link building", "digital PR"],
        anchor: "#off-page-seo-link-building",
      },
      {
        id: "ecommerce-seo",
        slug: "ecommerce-seo",
        title: "Ecommerce SEO",
        headline: "Get your products found and bought on search and marketplaces",
        bullets: [
          "Product and category page optimisation with clean, unique product copy.",
          "Product structured data, Merchant Centre feeds and internal link architecture.",
        ],
        cta: "Rank my products",
        proof: "Category optimisation that grew non-brand organic revenue for a retailer.",
        seoKeywords: ["ecommerce SEO", "product SEO", "google merchant centre"],
        anchor: "#ecommerce-seo",
      },
    ],
  },

  /* ==========================================
     6. BUSINESS & IT SOLUTIONS
     ========================================== */
  "business-it-solutions": {
    id: "business-it-solutions",
    slug: "business-it-solutions",
    badge: "Business & IT Solutions",
    title: "Business & IT Solutions",
    lead:
      "Stop paying people to copy information between systems and chase repetitive tasks. We connect your tools, automate routine work and keep your technology secure and running.",
    metaDescription:
      "Business and IT solutions for Ghanaian companies: workflow automation, managed IT support, cloud and hosting, backups, cybersecurity and systems integration.",
    image: "/assets/services/business-automation.jpg",
    heroImage: "/assets/services/business-automation.jpg",
    gallery: [
      "/assets/services/business-automation-2.jpg",
      "/assets/services/business-automation.jpg",
      "/assets/services/business-automation-2.jpg",
    ],
    icon: "bi-diagram-3",
    shortDescription:
      "Automation, managed IT support, cloud infrastructure and system integrations that keep your business running and your team productive.",
    visualHeading: "Give Your Team Back the Hours Lost to Repetitive Work",
    visualParagraphs: [
      "We map real workflows and replace repetitive steps with reliable automations.",
      "The result is fewer manual errors, faster responses, systems that stay up, and more time for work that needs a human.",
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
        text: "Connect forms, payments, CRMs and messaging apps so data flows reliably.",
      },
      {
        icon: "bi-headset",
        title: "Support When You Need It",
        text: "Managed IT helpdesk and proactive maintenance so staff are never blocked.",
      },
      {
        icon: "bi-cloud-arrow-up",
        title: "Hosting That Stays Up",
        text: "Managed cloud hosting, domains, email and monitoring sized for your business.",
      },
      {
        icon: "bi-shield-check",
        title: "Secure and Backed Up",
        text: "Security hardening, access control and tested backups you can rely on.",
      },
      {
        icon: "bi-robot",
        title: "Automate Smarter",
        text: "AI-assisted workflows and assistants for decisions that go beyond fixed rules.",
      },
    ],
    benefits: [
      "Recover hours spent on repetitive manual work",
      "Respond to leads and customers faster",
      "Reduce errors caused by re-entering information",
      "Keep systems secure, backed up and running",
      "Keep important business data connected and consistent",
    ],
    processHeading: "Fix the Systems That Slow Your Team Down",
    processText:
      "We start with your actual workflows and current setup, identify the real bottleneck, and replace it with a reliable solution.",
    processSteps: [
      {
        number: "01",
        title: "Assess",
        text: "We review your workflows, tools, devices and risks to find the true bottleneck.",
      },
      {
        number: "02",
        title: "Design the Solution",
        text: "We recommend the right approach based on your systems, team and budget.",
      },
      {
        number: "03",
        title: "Build & Test",
        text: "Automations and integrations are tested against realistic scenarios before launch.",
      },
      {
        number: "04",
        title: "Support & Improve",
        text: "Ongoing monitoring, maintenance and tuning so the solution keeps paying for itself.",
      },
    ],
    price: "GH₵5,000",
    priceLabel: "Engagements starting from",
    infoList: [
      "Project and monthly support options",
      "Workflow and process mapping included",
      "Backups and security monitoring set up",
      "Response times agreed in writing",
    ],
    testimonial: {
      quote:
        "Tasks that used to take our team all afternoon now happen automatically, and the office systems finally stop breaking.",
      name: "Kojo Boateng",
      role: "Operations Lead, Boateng Logistics",
      image: "/assets/img/person/person-m-2.webp",
    },
    formSubject: "Business & IT Solutions Inquiry",
    subServices: [
      {
        id: "business-process-automation",
        slug: "business-process-automation",
        title: "Business Process Automation",
        headline: "Cut hours of manual work by automating the tasks your team repeats daily",
        bullets: [
          "Workflow mapping followed by automations for lead routing, invoicing, reminders and approvals.",
          "Spreadsheet, CRM, email and WhatsApp notifications that fire without anyone copying data.",
        ],
        cta: "Automate my processes",
        proof: "Lead-routing automation that cut response time to under 15 minutes.",
        seoKeywords: [
          "business process automation",
          "workflow automation",
          "operations automation",
        ],
        anchor: "#business-process-automation",
      },
      {
        id: "it-support",
        slug: "it-support-managed-services",
        title: "IT Support & Managed Services",
        headline: "A dependable IT team on call, so your staff never stop working",
        bullets: [
          "Helpdesk support for staff devices, email, accounts, printing and connectivity.",
          "Preventive maintenance, patching and user onboarding so problems are handled before they escalate.",
        ],
        cta: "Support my business",
        proof: "Managed support that removed repeat IT issues within the first month.",
        seoKeywords: [
          "IT support services",
          "managed IT services",
          "IT helpdesk ghana",
        ],
        anchor: "#it-support-managed-services",
      },
      {
        id: "cloud-hosting-infrastructure",
        slug: "cloud-hosting-infrastructure",
        title: "Cloud, Hosting & Infrastructure",
        headline: "Reliable hosting, domains and business email that stays online",
        bullets: [
          "Right-sized hosting with SSL, daily backups, uptime monitoring and staged rollouts.",
          "Business email setup and configuration so mail reaches customers, not spam folders.",
        ],
        cta: "Move my systems",
        proof: "A migration that improved site speed and removed recurring downtime.",
        seoKeywords: [
          "web hosting ghana",
          "cloud hosting",
          "business email setup",
        ],
        anchor: "#cloud-hosting-infrastructure",
      },
      {
        id: "cybersecurity-backups",
        slug: "cybersecurity-backups",
        title: "Cybersecurity, Backups & Recovery",
        headline: "Protect the data your business runs on and recover fast if something goes wrong",
        bullets: [
          "Access control, patching, malware protection and staff security habits.",
          "Automated backups with tested restores, so recovery is a plan rather than a hope.",
        ],
        cta: "Secure my business",
        proof: "Backup and hardening work that made recovery a routine, non-panic event.",
        seoKeywords: [
          "cybersecurity services",
          "business backup ghana",
          "data recovery",
        ],
        anchor: "#cybersecurity-backups",
      },
      {
        id: "ai-workflow-automation",
        slug: "ai-workflow-automation",
        title: "AI & Workflow Automation",
        headline: "Put practical AI to work on the tasks that actually cost you time",
        bullets: [
          "Website and WhatsApp assistants that answer FAQs and qualify leads around the clock.",
          "AI-assisted document handling, reporting and content drafts, integrated with your tools.",
        ],
        cta: "Automate with AI",
        proof: "A support assistant that handled most routine questions without extra headcount.",
        seoKeywords: [
          "AI automation",
          "whatsapp chatbot",
          "AI customer support",
        ],
        anchor: "#ai-workflow-automation",
      },
      {
        id: "systems-integration-consulting",
        slug: "systems-integration-consulting",
        title: "Systems Integration & IT Consulting",
        headline: "Know what to fix first, and what not to buy at all",
        bullets: [
          "Integrations between your existing systems so data moves without double entry.",
          "Independent recommendations on tools, processes and priorities that match your budget.",
        ],
        cta: "Review my IT setup",
        proof: "An IT review that removed duplicate tools and saved annual software spend.",
        seoKeywords: [
          "systems integration",
          "IT consulting ghana",
          "API integration",
        ],
        anchor: "#systems-integration-consulting",
      },
    ],
  },
};

/* ============================================
   SLUGS
   ============================================ */

export const SERVICE_SLUGS = Object.keys(serviceDetails);

/* ============================================
   LEGACY SERVICE SLUGS
   Previous service URLs kept alive so existing
   links, Search Console records and inbound
   traffic land on the matching pillar instead
   of a 404.
   ============================================ */

export const LEGACY_SERVICE_SLUGS: Record<string, string> = {
  "digital-marketing-seo": "digital-marketing",
  "branding-graphic-design": "graphic-design",
  "business-automation": "business-it-solutions",
  "ai-solutions": "business-it-solutions",
  "business-digital-strategy": "business-it-solutions",
};

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
  "/assets/img/services/service_3.jpg",
  "/assets/services/digital-marketing-seo.jpg",
  "/assets/services/branding-graphic-design.jpg",
  "/assets/img/services/seo.jpg",
  "/assets/services/business-automation.jpg",
];

/**
 * Override images per sub-service id.
 * Drop real photography here as it becomes available —
 * anything not listed uses a stable pooled fallback.
 */
export const SUB_SERVICE_IMAGES: Record<string, string> = {
  "ecommerce-websites": "/assets/img/services/ecommerce.jpg",
  "android-apps": "/assets/img/services/service_3.jpg",
  "ios-apps": "/assets/img/services/service_2.png",
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