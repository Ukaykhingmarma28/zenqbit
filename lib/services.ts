import {
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Workflow,
  MessageSquareMore,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface UseCase {
  industry: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  longDescription: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  useCases: UseCase[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    icon: Globe,
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web apps built for speed, SEO, and conversions — from landing pages to full-scale platforms.",
    tags: ["React", "Next.js", "WordPress", "Shopify"],
    longDescription:
      "We craft high-performance websites across every major platform. Whether you need a content-driven WordPress site, a conversion-focused Shopify store, or a fully custom solution with React and Next.js — our team in Malaysia and Bangladesh delivers pixel-perfect results that load fast and rank well. With a team of skilled engineers and access to a vetted network of specialists, we scale to match your project needs.",
    features: [
      {
        title: "Custom Web Applications",
        description:
          "Full-stack web apps with React, Next.js, and Node.js — built for real-time data, complex workflows, and enterprise-grade security.",
      },
      {
        title: "E-Commerce Storefronts",
        description:
          "Shopify, WooCommerce, and custom storefronts optimized for conversion, with integrated payment gateways and inventory management.",
      },
      {
        title: "CMS & Content Platforms",
        description:
          "WordPress and headless CMS solutions that give your content team full control without sacrificing performance or SEO.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "Offline-capable, installable web apps that deliver native-like experiences on any device without app store friction.",
      },
      {
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs that connect your web platform to third-party services, CRMs, ERPs, and payment systems.",
      },
      {
        title: "Performance & SEO Optimization",
        description:
          "Core Web Vitals optimization, server-side rendering, and technical SEO to maximize your search rankings and load speeds.",
      },
    ],
    process: [
      {
        title: "Discovery & Architecture",
        description:
          "We map your requirements, define the tech stack, and create wireframes and a system architecture document.",
      },
      {
        title: "UI/UX Design",
        description:
          "High-fidelity mockups and interactive prototypes reviewed with your team before a single line of code is written.",
      },
      {
        title: "Agile Development",
        description:
          "Two-week sprints with demo sessions. You see progress continuously and can redirect priorities on the fly.",
      },
      {
        title: "QA & Launch",
        description:
          "Automated testing, cross-browser validation, performance audits, and zero-downtime deployment to production.",
      },
    ],
    useCases: [
      {
        industry: "E-Commerce",
        description:
          "Multi-vendor marketplace with real-time inventory sync, dynamic pricing, and integrated logistics tracking.",
      },
      {
        industry: "SaaS",
        description:
          "Subscription platform with role-based dashboards, usage analytics, and Stripe billing integration.",
      },
      {
        industry: "Education",
        description:
          "LMS portal with live video classes, automated assessments, and student progress tracking dashboards.",
      },
    ],
    faqs: [
      {
        question: "What tech stack do you recommend for new web projects?",
        answer:
          "For most projects, we recommend Next.js with React for the frontend and Node.js or Python for the backend. For content-heavy sites, WordPress or a headless CMS like Sanity works well. We choose based on your specific needs — performance requirements, team expertise, and long-term maintainability.",
      },
      {
        question: "How long does a typical web project take?",
        answer:
          "A marketing website takes 4–6 weeks. A custom web application ranges from 8–16 weeks depending on complexity. We provide detailed timelines during the discovery phase and ship incrementally so you see progress every sprint.",
      },
      {
        question: "Do you handle hosting and maintenance after launch?",
        answer:
          "Yes. We offer managed hosting on AWS, Vercel, or your preferred cloud provider, plus ongoing maintenance packages that cover security patches, performance monitoring, and feature updates.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Absolutely. We regularly take over existing projects — we start with a codebase audit to assess technical debt, then create a prioritized improvement roadmap alongside new feature development.",
      },
    ],
  },
  {
    icon: Smartphone,
    slug: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android that your users will love — fast, smooth, and reliable.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    longDescription:
      "From concept to App Store, we build mobile applications that feel native and perform beautifully. Our engineering teams in Cyberjaya and Dhaka work with React Native and Flutter for cross-platform efficiency, or go fully native when performance demands it. We understand the Southeast Asian and South Asian mobile landscape — high mobile penetration, diverse devices, and connectivity constraints.",
    features: [
      {
        title: "Cross-Platform Development",
        description:
          "React Native and Flutter apps that share a single codebase across iOS and Android — cutting development time by up to 40%.",
      },
      {
        title: "Native iOS & Android",
        description:
          "Swift/SwiftUI for iOS and Kotlin for Android when you need maximum performance, platform-specific UX, or deep hardware integration.",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Apps that work seamlessly without internet connectivity, syncing data automatically when the connection is restored.",
      },
      {
        title: "Push Notifications & Engagement",
        description:
          "Targeted push notifications, in-app messaging, and analytics-driven engagement features to maximize retention.",
      },
      {
        title: "App Store Optimization",
        description:
          "End-to-end ASO including metadata optimization, screenshot design, and A/B testing to maximize download rates.",
      },
      {
        title: "Backend & API Services",
        description:
          "Scalable backend infrastructure with real-time sync, authentication, and cloud functions to power your mobile experience.",
      },
    ],
    process: [
      {
        title: "Product Strategy",
        description:
          "We define your target users, map the feature set, and decide the right platform strategy — native, cross-platform, or hybrid.",
      },
      {
        title: "Prototyping & Design",
        description:
          "Interactive prototypes in Figma following Apple HIG and Material Design guidelines, validated with user testing.",
      },
      {
        title: "Iterative Development",
        description:
          "Bi-weekly builds deployed to TestFlight and internal testing tracks. You test real builds on real devices throughout.",
      },
      {
        title: "Launch & Growth",
        description:
          "App Store and Play Store submission, ASO optimization, crash monitoring setup, and post-launch analytics integration.",
      },
    ],
    useCases: [
      {
        industry: "E-Commerce",
        description:
          "Mobile shopping app with biometric authentication, real-time order tracking, and seamless payment integration.",
      },
      {
        industry: "Healthcare",
        description:
          "Patient-facing app with appointment booking, telemedicine video calls, and prescription management.",
      },
      {
        industry: "Retail",
        description:
          "Shopping app with AR product preview, personalized recommendations, and one-tap checkout.",
      },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "Cross-platform (React Native or Flutter) is ideal for most apps — it reduces cost by 30–40% with near-native performance. We recommend native only when you need heavy GPU processing, complex animations, or deep OS integration like HealthKit or ARKit.",
      },
      {
        question: "How do you handle app store approvals?",
        answer:
          "We manage the entire submission process for both App Store and Play Store, including compliance with their guidelines, metadata preparation, and handling any rejection feedback. Our approval rate on first submission is over 95%.",
      },
      {
        question: "What about ongoing updates and maintenance?",
        answer:
          "Mobile apps need regular updates for OS compatibility, security patches, and feature improvements. We offer retainer plans that cover all of this plus crash monitoring and performance optimization.",
      },
      {
        question: "Can you integrate with our existing backend?",
        answer:
          "Yes. We build mobile apps that connect to any backend via REST or GraphQL APIs. If your backend needs adjustments to support mobile-specific requirements, we handle that too.",
      },
    ],
  },
  {
    icon: BrainCircuit,
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "From chatbots to predictive analytics — we integrate AI to automate decisions and unlock insights.",
    tags: ["LLMs", "Computer Vision", "NLP", "ML Pipelines"],
    longDescription:
      "We help businesses across Malaysia, Bangladesh, and beyond harness AI practically — not as a buzzword, but as a real competitive advantage. From LLM-powered chatbots and document processing to computer vision and predictive analytics, we build AI systems that deliver measurable ROI. Our team integrates AI thoughtfully into your product, shipping measurable impact rather than science projects.",
    features: [
      {
        title: "LLM Integration & Fine-Tuning",
        description:
          "Custom chatbots, copilots, and document processing systems powered by GPT-4, Claude, and open-source models — fine-tuned on your data.",
      },
      {
        title: "Computer Vision",
        description:
          "Object detection, image classification, OCR, and video analytics for quality control, security, and automated inspection workflows.",
      },
      {
        title: "Predictive Analytics",
        description:
          "ML models that forecast demand, predict churn, detect fraud, and optimize pricing — trained on your historical data.",
      },
      {
        title: "NLP & Text Processing",
        description:
          "Sentiment analysis, entity extraction, document summarization, and multilingual text processing at scale.",
      },
      {
        title: "RAG & Knowledge Systems",
        description:
          "Retrieval-augmented generation systems that ground LLM responses in your proprietary documents, databases, and knowledge bases.",
      },
      {
        title: "MLOps & Model Monitoring",
        description:
          "End-to-end ML pipelines with automated training, versioning, A/B testing, and drift detection in production.",
      },
    ],
    process: [
      {
        title: "Data Assessment",
        description:
          "We audit your data sources, assess quality, and identify the highest-impact AI opportunities for your business.",
      },
      {
        title: "Proof of Concept",
        description:
          "A working prototype in 2–4 weeks that validates the approach against your real data before committing to a full build.",
      },
      {
        title: "Production Build",
        description:
          "Scalable AI infrastructure with proper data pipelines, model serving, and integration with your existing systems.",
      },
      {
        title: "Monitor & Improve",
        description:
          "Continuous monitoring of model performance, automated retraining pipelines, and iterative improvements based on production feedback.",
      },
    ],
    useCases: [
      {
        industry: "Customer Service",
        description:
          "AI chatbot handling 70% of support tickets autonomously, with smart escalation to human agents for complex issues.",
      },
      {
        industry: "Manufacturing",
        description:
          "Computer vision system for real-time defect detection on production lines, reducing quality issues by 85%.",
      },
      {
        industry: "Finance",
        description:
          "Fraud detection model analyzing transaction patterns in real-time, flagging suspicious activity with 99.2% accuracy.",
      },
    ],
    faqs: [
      {
        question: "Do we need a lot of data to get started with AI?",
        answer:
          "Not necessarily. For LLM-based solutions like chatbots and RAG systems, you can start with your existing documents and knowledge base. For custom ML models, we typically need a few thousand labeled examples — but we can help you build that dataset.",
      },
      {
        question: "How do you handle data privacy and security?",
        answer:
          "We can deploy models on your own infrastructure or private cloud — your data never leaves your environment. For cloud-based solutions, we implement encryption at rest and in transit, access controls, and audit logging.",
      },
      {
        question: "What's the typical ROI timeline for AI projects?",
        answer:
          "Most clients see measurable ROI within 3–6 months of deployment. Chatbots and document processing typically deliver the fastest returns. Predictive analytics projects take longer to train but often deliver the highest long-term value.",
      },
      {
        question: "Can AI solutions integrate with our existing software?",
        answer:
          "Yes. We build AI capabilities as microservices with clear APIs, so they plug into your existing tech stack — whether that's a CRM, ERP, internal tools, or customer-facing applications.",
      },
    ],
  },
  {
    icon: Cpu,
    slug: "iot-solutions",
    title: "IoT Solutions",
    description:
      "Connect devices, collect data, and control systems remotely with our end-to-end IoT platforms.",
    tags: ["Sensors", "Edge Computing", "Dashboards", "MQTT"],
    longDescription:
      "We design and deploy end-to-end IoT systems that connect the physical and digital worlds. Working with experienced R&D partners, we turn innovative IoT ideas into practical, real-world technology — custom hardware, firmware, and cloud platforms. From sensor selection and edge computing to real-time dashboards and alerting, our team builds the full stack with hands-on hardware engineering expertise.",
    features: [
      {
        title: "Device Integration & Protocols",
        description:
          "Seamless connectivity with MQTT, CoAP, HTTP, and Bluetooth protocols — supporting thousands of concurrent device connections.",
      },
      {
        title: "Edge Computing",
        description:
          "Local data processing at the edge for low-latency decision making, reducing bandwidth costs and enabling offline operation.",
      },
      {
        title: "Real-Time Dashboards",
        description:
          "Live monitoring dashboards with configurable alerts, historical trends, and anomaly detection for your entire device fleet.",
      },
      {
        title: "Predictive Maintenance",
        description:
          "ML-powered models that predict equipment failures before they happen, reducing downtime and maintenance costs.",
      },
      {
        title: "Fleet Management",
        description:
          "Over-the-air firmware updates, device provisioning, health monitoring, and remote configuration for large device deployments.",
      },
      {
        title: "Data Pipeline & Analytics",
        description:
          "Scalable time-series data ingestion, storage, and analytics — turning raw sensor data into actionable business intelligence.",
      },
    ],
    process: [
      {
        title: "Hardware Assessment",
        description:
          "We evaluate your existing hardware or recommend sensors, gateways, and connectivity options that fit your environment.",
      },
      {
        title: "Platform Architecture",
        description:
          "Cloud or on-premise IoT platform design with data models, security protocols, and integration points mapped out.",
      },
      {
        title: "Pilot Deployment",
        description:
          "Small-scale deployment with 10–50 devices to validate the full stack — sensors to dashboards — in real conditions.",
      },
      {
        title: "Scale & Optimize",
        description:
          "Roll out to full production with automated provisioning, monitoring, and continuous optimization of data pipelines.",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        description:
          "Smart factory system monitoring 200+ machines with predictive maintenance alerts, reducing unplanned downtime by 60%.",
      },
      {
        industry: "Agriculture",
        description:
          "Precision farming platform with soil sensors, weather data integration, and automated irrigation control.",
      },
      {
        industry: "Logistics",
        description:
          "Cold-chain monitoring with GPS tracking, temperature sensors, and real-time compliance alerts for pharmaceutical transport.",
      },
    ],
    faqs: [
      {
        question: "Do you provide the hardware or just the software?",
        answer:
          "We cover both. Our team includes engineers with deep R&D experience in hardware prototyping, firmware development, and Linux kernel customization. We also partner with component suppliers to source sensors, gateways, and edge devices. We handle the full integration — from hardware to cloud to dashboard.",
      },
      {
        question: "How do you handle IoT security?",
        answer:
          "Security is built into every layer: device authentication with certificates, encrypted communications (TLS/DTLS), network segmentation, and regular firmware security updates. We follow OWASP IoT guidelines.",
      },
      {
        question: "What cloud platforms do you work with?",
        answer:
          "We build on AWS IoT Core, Azure IoT Hub, and Google Cloud IoT — or deploy on-premise solutions when data sovereignty or latency requirements demand it.",
      },
      {
        question: "How many devices can your platform handle?",
        answer:
          "Our architectures are designed to scale from dozens to hundreds of thousands of devices. We use message brokers like MQTT with auto-scaling infrastructure to handle peak loads without dropping data.",
      },
    ],
  },
  {
    icon: Workflow,
    slug: "automation",
    title: "Automation",
    description:
      "Eliminate repetitive tasks and streamline operations with intelligent workflow automation.",
    tags: ["RPA", "Workflow", "Integration", "CI/CD"],
    longDescription:
      "We identify bottlenecks in your operations and automate them away. From RPA bots that handle data entry to end-to-end workflow orchestration, our teams in Malaysia and Bangladesh build automation solutions that save hours every week and scale with your business.",
    features: [
      {
        title: "Robotic Process Automation",
        description:
          "Software bots that handle repetitive tasks — data entry, invoice processing, report generation — with 99.9% accuracy.",
      },
      {
        title: "Workflow Orchestration",
        description:
          "End-to-end business process automation connecting multiple systems, teams, and approval chains into seamless workflows.",
      },
      {
        title: "System Integration",
        description:
          "Connect your CRM, ERP, accounting, and communication tools into a unified data flow — eliminating manual data transfer.",
      },
      {
        title: "CI/CD & DevOps Automation",
        description:
          "Automated build, test, and deployment pipelines that ship code faster with fewer errors and zero-downtime releases.",
      },
      {
        title: "Document Processing",
        description:
          "AI-powered extraction from invoices, contracts, and forms — automatically routing data to the right systems.",
      },
      {
        title: "Monitoring & Alerting",
        description:
          "Automated monitoring of business metrics, system health, and SLA compliance with intelligent escalation rules.",
      },
    ],
    process: [
      {
        title: "Process Audit",
        description:
          "We map your current workflows, identify bottlenecks, and calculate the ROI of automating each process.",
      },
      {
        title: "Automation Design",
        description:
          "Detailed workflow diagrams, integration architecture, and error-handling strategies — reviewed with your operations team.",
      },
      {
        title: "Build & Test",
        description:
          "Iterative development with parallel testing against real data. Each automation is validated end-to-end before going live.",
      },
      {
        title: "Deploy & Monitor",
        description:
          "Gradual rollout with human-in-the-loop validation, followed by full automation with continuous monitoring and alerting.",
      },
    ],
    useCases: [
      {
        industry: "Finance",
        description:
          "Automated accounts payable processing — invoice intake, validation, approval routing, and payment execution in minutes.",
      },
      {
        industry: "HR",
        description:
          "Employee onboarding automation handling account creation, document collection, training assignment, and equipment provisioning.",
      },
      {
        industry: "Operations",
        description:
          "Supply chain automation connecting supplier portals, inventory systems, and logistics platforms into a single workflow.",
      },
    ],
    faqs: [
      {
        question: "What processes are best suited for automation?",
        answer:
          "High-volume, rule-based, repetitive tasks deliver the best ROI — things like data entry, invoice processing, report generation, and employee onboarding. We help you prioritize based on time savings and error reduction potential.",
      },
      {
        question: "Will automation replace our employees?",
        answer:
          "No. Automation handles the tedious parts of the job so your team can focus on higher-value work — decision making, customer relationships, and strategy. Most clients redeploy saved hours rather than reduce headcount.",
      },
      {
        question: "How long until we see ROI?",
        answer:
          "Most automation projects pay for themselves within 3–6 months. Simple RPA bots can be deployed in 2–4 weeks. More complex workflow orchestrations take 6–12 weeks but deliver proportionally higher returns.",
      },
      {
        question: "What happens when an automated process fails?",
        answer:
          "Every automation includes error handling, retry logic, and escalation rules. When something can't be resolved automatically, it's routed to a human with full context. You get dashboards showing success rates and exception types.",
      },
    ],
  },
  {
    icon: MessageSquareMore,
    slug: "consulting",
    title: "Consulting",
    description:
      "Strategic technology consulting to align your tools with business goals — audits, roadmaps, and architecture.",
    tags: ["Tech Audits", "Architecture", "Strategy", "Digital Transformation"],
    longDescription:
      "Cut tech waste with our strategic audits. Based in Cyberjaya, Malaysia with engineering in Dhaka, Bangladesh, we assess your current stack, identify inefficiencies, and design a roadmap that aligns your technology investments with your business goals. We follow world-recognized standards like ISO 27001, OWASP, and WCAG — bringing enterprise-grade discipline to businesses of every size.",
    features: [
      {
        title: "Technology Audits",
        description:
          "Comprehensive review of your tech stack, infrastructure, and development practices — with prioritized recommendations.",
      },
      {
        title: "Architecture Design",
        description:
          "Scalable system architecture for new products or legacy modernization — microservices, event-driven, serverless, or hybrid.",
      },
      {
        title: "Digital Transformation Strategy",
        description:
          "Roadmap for modernizing your operations with cloud migration, process automation, and data-driven decision making.",
      },
      {
        title: "Team & Process Assessment",
        description:
          "Evaluate your engineering team structure, development workflows, and delivery processes — with actionable improvement plans.",
      },
      {
        title: "Vendor & Tool Selection",
        description:
          "Unbiased evaluation of platforms, tools, and vendors — we recommend what fits your needs, not what pays us commissions.",
      },
      {
        title: "Security & Compliance Review",
        description:
          "Gap analysis against industry standards (SOC 2, HIPAA, GDPR, ISO 27001) with a remediation roadmap.",
      },
    ],
    process: [
      {
        title: "Stakeholder Interviews",
        description:
          "We talk to your team — engineering, product, and leadership — to understand pain points, goals, and constraints.",
      },
      {
        title: "Deep-Dive Analysis",
        description:
          "Hands-on review of your codebase, infrastructure, data flows, and processes. We measure, not just observe.",
      },
      {
        title: "Findings & Roadmap",
        description:
          "A clear report with prioritized recommendations, effort estimates, and a phased implementation roadmap.",
      },
      {
        title: "Implementation Support",
        description:
          "We stay involved through execution — reviewing progress, adjusting the plan, and ensuring recommendations actually ship.",
      },
    ],
    useCases: [
      {
        industry: "Enterprise",
        description:
          "Legacy system modernization roadmap for a financial services firm — migrating from on-premise monoliths to cloud microservices.",
      },
      {
        industry: "Startup",
        description:
          "CTO-as-a-Service for a Series A startup — architecture decisions, hiring plan, and engineering culture setup.",
      },
      {
        industry: "Healthcare",
        description:
          "HIPAA compliance audit and remediation plan for a healthtech platform processing patient data across multiple regions.",
      },
    ],
    faqs: [
      {
        question: "How is consulting different from your development services?",
        answer:
          "Consulting is about strategy and decisions — what to build, which architecture to choose, where to invest. Development is the execution. Many clients start with consulting to de-risk their investment, then move to development with a clear plan.",
      },
      {
        question: "Can you help if we already have an in-house team?",
        answer:
          "Absolutely. Most of our consulting clients have engineering teams. We complement your team with specialized expertise, provide an outside perspective on architecture decisions, and help establish best practices.",
      },
      {
        question: "What does a typical engagement look like?",
        answer:
          "Most consulting engagements run 2–6 weeks. A tech audit takes 2–3 weeks. Architecture design runs 3–4 weeks. Digital transformation strategy is typically 4–6 weeks. We deliver actionable recommendations, not shelf-ware reports.",
      },
      {
        question: "Do you offer ongoing advisory retainers?",
        answer:
          "Yes. Many clients retain us for ongoing architecture reviews, technology decisions, and quarterly strategy sessions. This works well for companies scaling quickly and making frequent technical decisions.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
