import Image from "next/image";

const cards = [
  {
    title: "Clean, Scalable Code",
    description:
      "Every project ships with reviewed, tested, production-grade code.",
    image: "/code-preview.png",
    alt: "Code preview showing clean, production-grade code",
  },
  {
    title: "Project Delivery",
    description: "On-time delivery rate across all active projects.",
    image: "/project-delivery.png",
    alt: "Project delivery metrics showing 97% on-time rate and 15+ projects shipped",
  },
  {
    title: "Scale Your Team",
    description:
      "From 1 engineer to a full squad — spin up in weeks, not months.",
    image: "/team-scaling.png",
    alt: "Workflow diagram showing team scaling from company to Frontend, Backend, and QA teams",
  },
  {
    title: "Performance & Uptime",
    description: "Built for reliability — monitoring included from day one.",
    image: "/performance-uptime.png",
    alt: "Performance gauge showing 99.9% uptime SLA with response time and monitoring stats",
  },
  {
    title: "Security & Compliance",
    description: "Secure by default, audited regularly, fully certified.",
    image: "/security-compliance.png",
    alt: "Security & Compliance dashboard showing audit trail, vulnerability patching, and incident response metrics",
  },
  {
    title: "Modern Tech Stack",
    description:
      "We pick the right tool for the job — no lock-in, no legacy baggage.",
    image: "/tech-stack.png",
    alt: "Tech stack grid showing React, Next.js, Node.js, Python, AWS, Docker, PostgreSQL, TypeScript, and Kubernetes",
  },
];

export function FeaturesShowcase() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Image-based cards */}
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`animate-fade-up delay-${Math.min(i + 1, 5)} group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_1px_4px_0_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_0_rgb(0_0_0/0.08)]`}
        >
          <div className="px-5 pt-5 pb-2">
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {card.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {card.description}
            </p>
          </div>
          <div className="mt-auto px-3 pb-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={card.image}
                alt={card.alt}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
