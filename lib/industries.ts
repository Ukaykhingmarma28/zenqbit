import {
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Store,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  tags: string[];
  color: string;
  tagColor: string;
  features: IndustryFeature[];
  useCases: IndustryUseCase[];
  faqs: IndustryFAQ[];
}

export const industries: Industry[] = [
  {
    icon: GraduationCap,
    name: "EdTech",
    slug: "edtech",
    tagline: "Empowering learners worldwide",
    description:
      "We build learning management systems, virtual classrooms, and assessment platforms that scale from hundreds to millions of learners across Southeast Asia and beyond. Our EdTech solutions integrate with Moodle, support live classes, automated grading, and compliance reporting — giving educators the tools to focus on teaching, not technology.",
    tags: ["LMS", "Moodle", "Live Classes", "Assessments", "Compliance"],
    color: "#d6e8f5",
    tagColor: "#bcd8ee",
    features: [
      {
        title: "Learning Management Systems",
        description:
          "Custom LMS platforms built on Moodle or from scratch — with course builders, progress tracking, gamification, and multi-tenant support for institutions.",
      },
      {
        title: "Live Virtual Classrooms",
        description:
          "Real-time video classrooms with screen sharing, breakout rooms, whiteboarding, and recording — integrated directly into your learning platform.",
      },
      {
        title: "Assessment & Grading",
        description:
          "Automated quiz engines, assignment submission portals, plagiarism detection, and AI-assisted grading that saves educators hours per week.",
      },
      {
        title: "Student Analytics",
        description:
          "Dashboards tracking engagement, completion rates, at-risk students, and learning outcomes — helping institutions make data-driven decisions.",
      },
      {
        title: "Mobile Learning Apps",
        description:
          "Offline-capable mobile apps that let students access courses, submit work, and participate in discussions from anywhere.",
      },
      {
        title: "Compliance & Accreditation",
        description:
          "Built-in compliance with FERPA, GDPR, and accreditation reporting requirements — generating audit-ready reports automatically.",
      },
    ],
    useCases: [
      {
        title: "University LMS Migration",
        description:
          "Migrated a 50,000-student university from legacy systems to a modern Moodle-based LMS with custom plugins for live proctored exams.",
      },
      {
        title: "Corporate Training Platform",
        description:
          "Built a multi-tenant training platform for a Fortune 500 company, onboarding 10,000+ employees across 12 countries with localized content.",
      },
      {
        title: "K-12 Virtual School",
        description:
          "End-to-end virtual school platform with live classes, parent portals, attendance tracking, and state compliance reporting.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our existing LMS?",
        answer:
          "Yes. We work with Moodle, Canvas, Blackboard, and custom LMS platforms. We can build plugins, extend functionality, or migrate your content to a new system while preserving student data and progress.",
      },
      {
        question: "How do you handle video at scale?",
        answer:
          "We use WebRTC for real-time video with adaptive bitrate streaming, and integrate with CDN providers for recorded content. Our architectures handle thousands of concurrent viewers without degradation.",
      },
      {
        question: "What about accessibility compliance?",
        answer:
          "All our EdTech platforms are built to WCAG 2.1 AA standards. We include screen reader support, keyboard navigation, captioning for video content, and high-contrast themes.",
      },
    ],
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    slug: "e-commerce",
    tagline: "Stores that convert and scale",
    description:
      "We transform online retail with Shopify, Magento, and WooCommerce solutions — plus fully custom storefronts for brands that need complete control. From custom themes and plugins to conversion optimization and analytics, we build e-commerce stores for businesses in Malaysia, South Asia, and globally that convert and scale.",
    tags: ["Shopify", "Magento", "WooCommerce", "Headless", "Marketplaces"],
    color: "#d4c8e8",
    tagColor: "#c0b0d8",
    features: [
      {
        title: "Custom Storefronts",
        description:
          "Branded shopping experiences on Shopify, Magento, WooCommerce, or fully headless architectures with React and Next.js.",
      },
      {
        title: "Marketplace Development",
        description:
          "Multi-vendor marketplaces with vendor onboarding, commission management, product approval workflows, and split payments.",
      },
      {
        title: "Conversion Optimization",
        description:
          "A/B testing, personalized recommendations, one-click checkout, and cart abandonment recovery that measurably increase revenue.",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Real-time inventory sync across channels, automated order routing, warehouse integration, and fulfillment tracking.",
      },
      {
        title: "Custom Plugins & Integrations",
        description:
          "Bespoke Shopify apps, Magento extensions, and WooCommerce plugins that add functionality the app store doesn't offer.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Custom dashboards tracking revenue, customer lifetime value, product performance, and marketing attribution across all channels.",
      },
    ],
    useCases: [
      {
        title: "D2C Fashion Brand",
        description:
          "Built a headless Shopify Plus storefront with AR try-on, reducing returns by 25% and increasing average order value by 18%.",
      },
      {
        title: "B2B Wholesale Platform",
        description:
          "Custom Magento marketplace connecting manufacturers with retailers — tiered pricing, bulk ordering, and net-30 payment terms.",
      },
      {
        title: "Subscription Box Service",
        description:
          "WooCommerce-based subscription platform with customizable boxes, flexible billing cycles, and automated fulfillment workflows.",
      },
    ],
    faqs: [
      {
        question: "Shopify, Magento, or WooCommerce — which should we choose?",
        answer:
          "Shopify is best for speed-to-market and brands under $10M revenue. Magento suits complex B2B/B2C hybrid businesses. WooCommerce works well if you're already invested in WordPress. We help you decide based on your catalog size, customization needs, and growth plans.",
      },
      {
        question: "Can you migrate our existing store?",
        answer:
          "Yes. We handle full platform migrations including product data, customer accounts, order history, SEO redirects, and design recreation. We plan migrations to minimize downtime — typically under 4 hours.",
      },
      {
        question: "Do you support headless commerce?",
        answer:
          "Yes. We build headless storefronts with Next.js or Remix on top of Shopify, Medusa, or Saleor backends. This gives you complete frontend freedom while keeping the reliability of a proven commerce engine.",
      },
    ],
  },
  {
    icon: HeartPulse,
    name: "Pharma & Healthcare",
    slug: "pharma-healthcare",
    tagline: "Regulation-first health technology",
    description:
      "We build compliant healthcare software for pharma companies, hospitals, and healthtech startups in Malaysia, Bangladesh, and beyond. From EHR integrations and telemedicine platforms to e-prescribing systems and clinical analytics — our solutions prioritize patient safety, data security, and regulatory compliance at every layer.",
    tags: ["HIPAA", "e-Prescripts", "Telemedicine", "EHR", "Compliance"],
    color: "#b5d9cc",
    tagColor: "#97c9bb",
    features: [
      {
        title: "Telemedicine Platforms",
        description:
          "HIPAA-compliant video consultations with scheduling, e-prescribing, clinical notes, and insurance verification — all in one platform.",
      },
      {
        title: "EHR/EMR Integration",
        description:
          "Seamless integration with Epic, Cerner, Allscripts, and other EHR systems using HL7 FHIR and custom APIs.",
      },
      {
        title: "E-Prescribing Systems",
        description:
          "Electronic prescription platforms with drug interaction checks, formulary management, and pharmacy network integration.",
      },
      {
        title: "Clinical Data Analytics",
        description:
          "Dashboards and reporting tools for clinical outcomes, population health metrics, and operational efficiency — built on de-identified patient data.",
      },
      {
        title: "Patient Portals",
        description:
          "Secure patient-facing apps for appointment booking, medical records access, lab results, and secure messaging with care teams.",
      },
      {
        title: "Compliance & Security",
        description:
          "End-to-end HIPAA, GDPR, and SOC 2 compliance — encryption at rest and in transit, audit logging, role-based access, and BAA-ready infrastructure.",
      },
    ],
    useCases: [
      {
        title: "Telehealth Startup",
        description:
          "Built a telemedicine platform from scratch — video visits, e-prescribing, and insurance billing — reaching 50,000 patients in the first year.",
      },
      {
        title: "Hospital Patient Portal",
        description:
          "Developed a white-label patient portal integrated with Epic EHR, serving 200+ clinics with appointment scheduling and secure messaging.",
      },
      {
        title: "Pharmaceutical Analytics",
        description:
          "Clinical trial data analytics platform processing 10M+ data points to accelerate drug development timelines.",
      },
    ],
    faqs: [
      {
        question: "Are your solutions HIPAA compliant?",
        answer:
          "Yes. HIPAA compliance is built into our architecture from day one — encryption, access controls, audit trails, and BAA agreements with all infrastructure providers. We also support SOC 2 and GDPR compliance.",
      },
      {
        question: "Can you integrate with our existing EHR?",
        answer:
          "We have experience integrating with Epic, Cerner, Allscripts, and other major EHR systems using HL7 FHIR, HL7 v2, and custom API protocols. We handle the complexity of healthcare interoperability.",
      },
      {
        question: "How do you handle PHI (Protected Health Information)?",
        answer:
          "PHI is encrypted at rest and in transit, stored only in BAA-covered infrastructure, and accessed only through role-based controls with full audit logging. We follow the principle of minimum necessary access.",
      },
    ],
  },
  {
    icon: Store,
    name: "Retail",
    slug: "retail",
    tagline: "Smart systems for modern retail",
    description:
      "We build smart retail systems that streamline inventory, enhance customer journeys, and optimize promotions for retailers in Malaysia, Bangladesh, and Southeast Asia. From POS systems and loyalty programs to supply chain visibility and omnichannel experiences — we help retailers compete in a digital-first world.",
    tags: ["POS", "Inventory", "CRM", "Loyalty", "Omnichannel"],
    color: "#e8cdb5",
    tagColor: "#d9b99a",
    features: [
      {
        title: "Point of Sale Systems",
        description:
          "Custom POS solutions with barcode scanning, payment processing, inventory lookup, and real-time sales reporting — cloud-synced across locations.",
      },
      {
        title: "Inventory Management",
        description:
          "Real-time inventory tracking across warehouses, stores, and online channels with automated reorder points and demand forecasting.",
      },
      {
        title: "Customer Loyalty Programs",
        description:
          "Points-based, tiered, and cashback loyalty systems with personalized offers, referral tracking, and integrated CRM.",
      },
      {
        title: "Omnichannel Experience",
        description:
          "Unified customer experience across online, mobile, and in-store — with buy-online-pickup-in-store (BOPIS) and shared cart functionality.",
      },
      {
        title: "Supply Chain Visibility",
        description:
          "End-to-end supply chain tracking from supplier to shelf — with automated purchase orders, delivery scheduling, and cost analytics.",
      },
      {
        title: "Promotions & Pricing",
        description:
          "Dynamic pricing engines, promotional campaign management, bundle offers, and markdown optimization powered by sales data.",
      },
    ],
    useCases: [
      {
        title: "Multi-Location Retail Chain",
        description:
          "Deployed cloud-based POS across 120+ stores with real-time inventory sync, reducing stockouts by 35% and overstock by 20%.",
      },
      {
        title: "Grocery Delivery Platform",
        description:
          "Built a same-day delivery platform with route optimization, real-time tracking, and dynamic pricing based on demand and distance.",
      },
      {
        title: "Fashion Retailer Loyalty",
        description:
          "Tiered loyalty program with personalized offers driving 40% increase in repeat purchases and 25% higher average order value.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our existing POS hardware?",
        answer:
          "Yes. Our POS software integrates with major hardware vendors — barcode scanners, receipt printers, payment terminals, and cash drawers. We also support tablet-based POS for pop-up and mobile retail.",
      },
      {
        question: "How do you handle multi-location inventory?",
        answer:
          "We implement real-time inventory synchronization across all locations and channels using event-driven architecture. Stock movements, sales, returns, and transfers are reflected instantly across the system.",
      },
      {
        question: "Do you support omnichannel returns?",
        answer:
          "Yes. Our systems support buy-online-return-in-store, cross-location returns, and automated refund processing — maintaining accurate inventory across all channels.",
      },
    ],
  },
  {
    icon: Code2,
    name: "Software & ITES",
    slug: "software-ites",
    tagline: "Custom software for complex problems",
    description:
      "We build custom enterprise software and IT-enabled services for companies in Malaysia, Bangladesh, and globally. SaaS platforms, internal tools, API ecosystems, and cloud-native applications — from legacy modernization to greenfield builds, our engineers solve complex technical problems with clean, scalable architecture.",
    tags: ["SaaS", "Enterprise", "Cloud", "API", "Microservices"],
    color: "#d4c8e8",
    tagColor: "#c0b0d8",
    features: [
      {
        title: "SaaS Platform Development",
        description:
          "Multi-tenant SaaS applications with subscription billing, usage metering, role-based access, and white-label capabilities.",
      },
      {
        title: "Enterprise Applications",
        description:
          "Mission-critical internal tools — workflow engines, approval systems, reporting dashboards, and operational management platforms.",
      },
      {
        title: "API Ecosystem",
        description:
          "Design, development, and management of RESTful and GraphQL API ecosystems with documentation, versioning, and developer portals.",
      },
      {
        title: "Legacy Modernization",
        description:
          "Migrate monolithic applications to microservices, containerized deployments, and cloud-native architectures without business disruption.",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "AWS, Azure, and GCP architecture design with infrastructure-as-code, CI/CD pipelines, and cost optimization.",
      },
      {
        title: "Data Engineering",
        description:
          "ETL pipelines, data warehouses, and real-time streaming architectures that turn raw data into actionable business intelligence.",
      },
    ],
    useCases: [
      {
        title: "HR SaaS Platform",
        description:
          "Built a multi-tenant HR platform handling payroll, leave management, and performance reviews for 500+ companies across 6 countries.",
      },
      {
        title: "Legacy ERP Migration",
        description:
          "Decomposed a 15-year-old monolithic ERP into 12 microservices, reducing deployment time from 4 hours to 8 minutes.",
      },
      {
        title: "Developer Platform",
        description:
          "API management platform with developer portal, sandbox environment, rate limiting, and usage analytics — serving 10,000+ API calls per minute.",
      },
    ],
    faqs: [
      {
        question: "How do you approach legacy modernization?",
        answer:
          "We use the strangler fig pattern — gradually replacing legacy components with modern services while keeping the old system running. This eliminates big-bang migration risk and delivers value incrementally.",
      },
      {
        question: "What cloud providers do you work with?",
        answer:
          "We work with AWS, Azure, and GCP. Most of our clients use AWS, but we're cloud-agnostic and choose based on your existing investments, compliance requirements, and specific service needs.",
      },
      {
        question: "Can you build multi-tenant SaaS applications?",
        answer:
          "Yes. We've built several multi-tenant platforms with tenant isolation, custom branding, tiered feature access, and usage-based billing. We choose between shared-database and database-per-tenant based on your compliance and performance requirements.",
      },
    ],
  },
  {
    icon: Rocket,
    name: "Startups",
    slug: "startups",
    tagline: "From zero to product-market fit",
    description:
      "We help startups in Malaysia, Bangladesh, and across Asia move fast without breaking things. Lean MVPs in 8–12 weeks, scalable architecture from day one, and the engineering discipline to iterate quickly toward product-market fit. With competitive rates from our Cyberjaya and Dhaka offices, we give early-stage teams enterprise-quality engineering at startup-friendly budgets.",
    tags: ["MVP", "Product-Market Fit", "Rapid Iteration", "Scalable"],
    color: "#b5d9cc",
    tagColor: "#97c9bb",
    features: [
      {
        title: "MVP Development",
        description:
          "Launch a market-ready product in 8–12 weeks. We scope ruthlessly, build what matters, and ship fast so you can validate with real users.",
      },
      {
        title: "Technical Co-Founding",
        description:
          "CTO-as-a-Service for non-technical founders — architecture decisions, tech stack selection, hiring your first engineers, and engineering culture.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Infrastructure that handles your first 100 users and your first 100,000 — without expensive rewrites. We build for growth from day one.",
      },
      {
        title: "Rapid Prototyping",
        description:
          "Clickable prototypes and proof-of-concepts in days, not weeks. Validate ideas with investors and users before committing to a full build.",
      },
      {
        title: "Pitch Deck Tech Sections",
        description:
          "Technical architecture diagrams, scalability plans, and security posture summaries that give investors confidence in your tech.",
      },
      {
        title: "Post-Funding Scale-Up",
        description:
          "After you raise, we help you scale — expanding the team, hardening infrastructure, and building the features that drive growth.",
      },
    ],
    useCases: [
      {
        title: "Pre-Seed HealthTech",
        description:
          "Built an MVP patient engagement app in 10 weeks that helped the founder raise $2M seed round on the strength of early traction.",
      },
      {
        title: "Series A SaaS",
        description:
          "Scaled a SaaS platform from 1,000 to 200,000 monthly active users after Series A — re-architecting for reliability without downtime.",
      },
      {
        title: "Marketplace Startup",
        description:
          "Launched a two-sided marketplace MVP with matching algorithm, messaging, and payments — achieving 5,000 users in 3 months.",
      },
    ],
    faqs: [
      {
        question: "How fast can you build an MVP?",
        answer:
          "Most MVPs take 8–12 weeks from kickoff to launch. Simple products with well-defined scope can ship in 6 weeks. We prioritize ruthlessly — building only what's needed to validate your core hypothesis.",
      },
      {
        question: "Do you take equity instead of cash?",
        answer:
          "We occasionally take equity alongside reduced fees for exceptional founding teams, but our primary model is fee-based. We're happy to discuss hybrid arrangements for the right opportunity.",
      },
      {
        question: "What happens after the MVP?",
        answer:
          "We can stay on as your development team, help you hire in-house engineers and hand off, or transition to an advisory role. Most of our startup clients keep us engaged through their first 2–3 funding rounds.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}
