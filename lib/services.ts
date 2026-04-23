import {
  Globe,
  Smartphone,
  BrainCircuit,
  Cpu,
  Workflow,
  MessageSquareMore,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  longDescription: string;
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
      "We craft high-performance websites across every major platform. Whether you need a content-driven WordPress site, a conversion-focused Shopify store, or a fully custom solution with React and Next.js — we deliver pixel-perfect results that load fast and rank well.",
  },
  {
    icon: Smartphone,
    slug: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android that your users will love — fast, smooth, and reliable.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    longDescription:
      "From concept to App Store, we build mobile applications that feel native and perform beautifully. We work with React Native and Flutter for cross-platform efficiency, or go fully native when performance demands it.",
  },
  {
    icon: BrainCircuit,
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "From chatbots to predictive analytics — we integrate AI to automate decisions and unlock insights.",
    tags: ["LLMs", "Computer Vision", "NLP", "ML Pipelines"],
    longDescription:
      "We help businesses harness AI practically — not as a buzzword, but as a real competitive advantage. From LLM-powered chatbots and document processing to computer vision and predictive analytics, we build AI systems that deliver measurable ROI.",
  },
  {
    icon: Cpu,
    slug: "iot-solutions",
    title: "IoT Solutions",
    description:
      "Connect devices, collect data, and control systems remotely with our end-to-end IoT platforms.",
    tags: ["Sensors", "Edge Computing", "Dashboards", "MQTT"],
    longDescription:
      "We design and deploy IoT systems that connect the physical and digital worlds. From sensor selection and edge computing to real-time dashboards and alerting — we build the full stack.",
  },
  {
    icon: Workflow,
    slug: "automation",
    title: "Automation",
    description:
      "Eliminate repetitive tasks and streamline operations with intelligent workflow automation.",
    tags: ["RPA", "Workflow", "Integration", "CI/CD"],
    longDescription:
      "We identify bottlenecks in your operations and automate them away. From RPA bots that handle data entry to end-to-end workflow orchestration — we build automation that saves hours every week.",
  },
  {
    icon: MessageSquareMore,
    slug: "consulting",
    title: "Consulting",
    description:
      "Strategic technology consulting to align your tools with business goals — audits, roadmaps, and architecture.",
    tags: ["Tech Audits", "Architecture", "Strategy", "Digital Transformation"],
    longDescription:
      "Cut tech waste with our strategic audits. We assess your current stack, identify inefficiencies, and design a roadmap that aligns your technology investments with your business goals for maximum ROI.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
