import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  UsersRound,
  Settings2,
  Lightbulb,
  RefreshCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/services";
import { IndustriesSection } from "@/components/industries-section";
import { HeroFlow } from "@/components/hero-flow";
import { HeroSlider } from "@/components/hero-slider";
import { FeaturesShowcase } from "@/components/features-showcase";
import { JsonLd } from "@/components/json-ld";
import { getWebPageSchema } from "@/lib/schemas";

const processSteps = [
  {
    step: "Step 1",
    label: "Discovery & Strategy",
    title: "Understand your goals, map the roadmap",
    bullets: [
      "Free 30-min consultation to assess your project needs",
      "Technical scoping with timeline and cost estimates",
      "Architecture blueprint aligned with industry standards",
    ],
  },
  {
    step: "Step 2",
    label: "Team Assembly",
    title: "Right engineers, matched to your project",
    bullets: [
      "Hand-picked engineers matched to your tech stack",
      "Access to a vetted network of specialists when needed",
      "Dedicated project manager and progress dashboards",
    ],
  },
  {
    step: "Step 3",
    label: "Agile Development",
    title: "Build, test, iterate — every sprint",
    bullets: [
      "AI-assisted development for faster delivery",
      "Automated testing and continuous integration",
      "Code reviews following OWASP and ISO 27001 standards",
    ],
  },
  {
    step: "Step 4",
    label: "Launch & Scale",
    title: "Ship with confidence, grow without limits",
    bullets: [
      "Production deployment with monitoring from day one",
      "Performance optimization and predictive scaling",
      "Post-launch support and maintenance included",
    ],
  },
];


export default function Home() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema(
          "/",
          "Zenqbit — Custom Software, AI & IoT Solutions",
          "Zenqbit builds custom software, AI solutions, IoT systems, mobile apps, and automation for startups and enterprises in Malaysia and Bangladesh.",
        )}
      />

      <h1 className="sr-only">
        Zenqbit — Custom Software, AI &amp; IoT Solutions in Malaysia and Bangladesh
      </h1>

      {/* ── Hero (slider includes BS23-style background) ── */}
      <section className="relative overflow-hidden">
        <div className="animate-fade-up">
          <HeroSlider />
        </div>

        {/* Subtle curve at bottom — flatter on mobile so it doesn't look too round */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-12 w-full sm:h-20 lg:h-32"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,10 Q50,0 100,10 Z" className="fill-background" />
        </svg>
      </section>

      {/* ── About ── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-2 text-center lg:pb-32 lg:pt-2">
          {/* Section heading */}
          <div className="animate-fade-up mx-auto max-w-2xl">
            <Badge variant="outline" className="mb-4">
              How We Build
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From idea to launch <br/>
              <span className="text-brand-coral">
                end-to-end
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We connect every piece of the puzzle — design, development,
              deployment, and support — under one roof.
            </p>
          </div>

          {/* Animated flow diagram */}
          <div className="animate-fade-up delay-1 mt-12">
            <HeroFlow />
          </div>

          {/* Manifesto + Cards — reordered on mobile (cards first, text after) */}
          <div className="mt-16 flex flex-col">
            {/* ── Manifesto ── */}
            <div className="order-2 mx-auto max-w-2xl px-6 text-center mt-12 lg:order-1 lg:mt-0">
              <p className="animate-fade-up text-pretty text-lg font-medium leading-normal tracking-tight text-foreground sm:text-xl lg:text-2xl lg:leading-[1.45]">
                <span className="text-brand-coral">
                  Success is for those who go the extra mile.
                </span>{" "}
                We partner with you to build software that ships, scales, and earns trust long after launch.
              </p>
            </div>

            {/* Feature showcase cards */}
            <div className="order-1 lg:order-2">
              <FeaturesShowcase />
            </div>
          </div>
        </div>
      </section>



      {/* ── Core Capabilities ── */}
      <section id="capabilities" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="animate-fade-up mb-16 flex items-start justify-between gap-6 lg:mb-24">
            <h2 className="max-w-2xl text-[2rem] font-medium leading-[1.2] tracking-tight sm:text-4xl lg:text-[48px] lg:leading-[1.2]">
              How We Deliver
              <br />
              Results That Last
            </h2>
            <Link
              href="/contact"
              className="group mt-2 hidden shrink-0 items-center gap-2 text-base font-bold text-brand-coral transition-colors hover:text-brand-coral/80 dark:text-brand-coral dark:hover:text-brand-coral/80 sm:inline-flex"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* 3-column bento grid */}
          <div className="flex flex-col gap-12 lg:gap-12">
            {/* ── Row 1: Text | Image | Text ── */}
            <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr_1fr]">
              <div className="animate-fade-up delay-1">
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <UsersRound className="size-5 text-brand-coral" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight lg:text-[32px] lg:leading-[1.25]">
                  Staff Augmentation
                </h3>
                <Separator className="my-4 w-10 bg-brand-coral/40" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Instantly scale your team with vetted AI/cloud experts. Pay only for the talent you need, when you need it.
                </p>
              </div>
              <div className="hidden animate-fade-up delay-2 overflow-hidden rounded-2xl lg:block">
                <Image src="/service-1.png" alt="Custom software development team at work" width={600} height={400} className="h-full w-full object-cover" />
              </div>
              <div className="animate-fade-up delay-3">
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <Settings2 className="size-5 text-brand-coral" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight lg:text-[32px] lg:leading-[1.25]">
                  Managed Services
                </h3>
                <Separator className="my-4 w-10 bg-brand-coral/40" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  End-to-end support for your applications, infrastructure, and digital platforms — so you can shift focus from maintenance to innovation.
                </p>
              </div>
            </div>

            {/* ── Row 2: Image | Text | Image ── */}
            <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr_1fr]">
              <div className="hidden animate-fade-up delay-1 overflow-hidden rounded-2xl lg:block">
                <Image src="/service-2.png" alt="Rapid MVP prototyping process" width={600} height={400} className="h-full w-full object-cover" />
              </div>
              <div className="animate-fade-up delay-2 px-0 lg:px-8">
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <Rocket className="size-5 text-brand-coral" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight lg:text-[32px] lg:leading-[1.25]">
                  MVP Development
                </h3>
                <Separator className="my-4 w-10 bg-brand-coral/40" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Launch market-ready MVPs in 8–12 weeks. AI-accelerated builds with 40% faster iteration cycles.
                </p>
              </div>
              <div className="hidden animate-fade-up delay-3 overflow-hidden rounded-2xl lg:block">
                <Image src="/service-3.png" alt="Agile development sprint board" width={600} height={400} className="h-full w-full object-cover" />
              </div>
            </div>

            {/* ── Row 3: Text | Image | Text ── */}
            <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr_1fr]">
              <div className="animate-fade-up delay-1">
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <Lightbulb className="size-5 text-brand-coral" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight lg:text-[32px] lg:leading-[1.25]">
                  Technology Consulting
                </h3>
                <Separator className="my-4 w-10 bg-brand-coral/40" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.
                </p>
              </div>
              <div className="hidden animate-fade-up delay-2 overflow-hidden rounded-2xl lg:block">
                <Image src="/service-4.png" alt="Technology consulting and architecture planning" width={600} height={400} className="h-full w-full object-cover" />
              </div>
              <div className="animate-fade-up delay-3">
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <RefreshCcw className="size-5 text-brand-coral" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight lg:text-[32px] lg:leading-[1.25]">
                  Digital Transformation
                </h3>
                <Separator className="my-4 w-10 bg-brand-coral/40" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile link */}
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-base font-bold text-brand-coral"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section id="our-services" className="border-t bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="animate-fade-up mb-14 text-center">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to{" "}
              <span className="text-brand-coral">
                ship & scale
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From custom development to full digital transformation — we cover
              every stage of your product journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              const bgMap: Record<string, string> = {
                "web-development": "bg-[url('/services/web-mobile.png')] sm:bg-[url('/services/web-sm.png')] lg:bg-[url('/services/web-lg.png')] xl:bg-[url('/services/web-xl.png')]",
                "mobile-apps": "bg-[url('/services/app-mobile.png')] sm:bg-[url('/services/app-sm.png')] lg:bg-[url('/services/app-lg.png')] xl:bg-[url('/services/app-xl.png')]",
                "ai-solutions": "bg-[url('/services/ai-mobile.png')] sm:bg-[url('/services/ai-sm.png')] lg:bg-[url('/services/ai-lg.png')] xl:bg-[url('/services/ai-xl.png')]",
                "iot-solutions": "bg-[url('/services/iot-mobile.png')] sm:bg-[url('/services/iot-sm.png')] lg:bg-[url('/services/iot-lg.png')] xl:bg-[url('/services/iot-xl.png')]",
                "automation": "bg-[url('/services/auto-mobile.png')] sm:bg-[url('/services/auto-sm.png')] lg:bg-[url('/services/auto-lg.png')] xl:bg-[url('/services/auto-xl.png')]",
              };
              const bgImage = bgMap[service.slug] || "";
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`focus-ring group animate-fade-up delay-${Math.min(i + 1, 5)} block`}
                >
                  <Card className={`h-full overflow-hidden bg-right-top bg-no-repeat transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${bgImage}`}>
                    <CardHeader>
                      <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-brand-coral/10 transition-colors duration-200 group-hover:bg-brand-coral/15">
                        <Icon className="size-5 text-brand-coral" strokeWidth={2} />
                      </div>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        {service.title}
                        <ArrowRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60" />
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[11px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <IndustriesSection />

      {/* ── Development Excellence ── */}
      <section id="excellence" className="border-t py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left side */}
            <div className="animate-fade-up">
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[42px]">
                AI-Driven
                <br />
                Development Excellence
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                We combine cutting-edge AI tools with battle-tested engineering
                practices to deliver software that&apos;s faster, more reliable,
                and built to scale from day one.
              </p>

              {/* Image */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="/working-zenqbit.png"
                  alt="Team collaborating on development"
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>

            </div>

            {/* Right side — metrics */}
            <div className="animate-fade-up delay-2 flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  {
                    value: "98%",
                    label: "Client Retention",
                    desc: "Our clients stay because we deliver. Transparent communication and consistent results build lasting partnerships.",
                  },
                  {
                    value: "6+",
                    label: "Service Domains",
                    desc: "Web, AI, IoT, mobile, automation, and consulting — full-stack expertise across every major technology stack.",
                  },
                  {
                    value: "8+",
                    label: "Industry Verticals",
                    desc: "Deep domain knowledge across fintech, edtech, e-commerce, healthcare, telecom, retail, and more.",
                  },
                  {
                    value: "24/7",
                    label: "Support Coverage",
                    desc: "Two offices across Asia ensure round-the-clock availability for critical deployments and urgent fixes.",
                  },
                ].map((metric) => (
                  <div key={metric.label} className="group/metric">
                    <div className="flex items-start gap-6">
                      {/* Percentage */}
                      <div className="shrink-0 text-right">
                        <span className="text-[40px] font-bold leading-none tracking-tight text-brand-coral lg:text-[48px]">
                          {metric.value}
                        </span>
                      </div>
                      {/* Text */}
                      <div className="pt-1">
                        <h3 className="text-lg font-semibold">{metric.label}</h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                          {metric.desc}
                        </p>
                      </div>
                    </div>
                    <Separator className="mt-8" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="animate-fade-up mt-14 flex flex-col items-start gap-8 rounded-2xl border border-border/50 bg-muted/30 px-8 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
            {/* Left — 10X stat */}
            <div className="flex items-start gap-4 border-l-2 border-brand-coral pl-5">
              <div>
                <h3 className="text-xl font-bold">Ship Faster, Ship Better</h3>
                <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                  AI-assisted development combined with battle-tested engineering
                  practices — delivering reliable software on time, every sprint.
                </p>
              </div>
            </div>

            {/* Right — badges */}
            <div className="flex items-center gap-8 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-teal/10">
                  <CheckCircle2 className="size-5 text-brand-teal" />
                </div>
                <span className="text-sm font-semibold">100% IP Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-teal/10">
                  <CheckCircle2 className="size-5 text-brand-teal" />
                </div>
                <span className="text-sm font-semibold">Vetted Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack Banner ── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-brand-dark py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="animate-fade-up text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            <span className="text-brand-coral">Yes!</span> We cover your tech stack.
          </h2>
          <p className="animate-fade-up delay-1 mx-auto mt-3 max-w-md text-sm text-white/50">
            Our team has expertise in almost every programming language.
          </p>
        </div>

        {/* Scrolling tech names — row 1 */}
        <div className="animate-fade-up delay-2 relative mt-10 flex gap-8 overflow-hidden whitespace-nowrap py-3 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex shrink-0 animate-[scroll-left_25s_linear_infinite] items-center gap-8">
            {["PHP", "Rails", "Node.js", "Java", "Vue.js", "React", "Python", "Swift", "Kotlin", "Flutter", "Django", "Laravel"].map((t) => (
              <span key={t} className="text-2xl font-bold text-white/20 sm:text-3xl lg:text-4xl">{t}</span>
            ))}
          </div>
          <div aria-hidden className="flex shrink-0 animate-[scroll-left_25s_linear_infinite] items-center gap-8">
            {["PHP", "Rails", "Node.js", "Java", "Vue.js", "React", "Python", "Swift", "Kotlin", "Flutter", "Django", "Laravel"].map((t) => (
              <span key={t} className="text-2xl font-bold text-white/20 sm:text-3xl lg:text-4xl">{t}</span>
            ))}
          </div>
        </div>

        {/* Scrolling tech names — row 2 (reverse) */}
        <div className="relative flex gap-8 overflow-hidden whitespace-nowrap py-3 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex shrink-0 animate-[scroll-right_30s_linear_infinite] items-center gap-8">
            {["Golang", "Moodle", "Ionic", "Angular", "Next.js", "AWS", "Docker", "Kubernetes", "TypeScript", "PostgreSQL", "MongoDB", "Redis"].map((t) => (
              <span key={t} className="text-2xl font-bold text-white/20 sm:text-3xl lg:text-4xl">{t}</span>
            ))}
          </div>
          <div aria-hidden className="flex shrink-0 animate-[scroll-right_30s_linear_infinite] items-center gap-8">
            {["Golang", "Moodle", "Ionic", "Angular", "Next.js", "AWS", "Docker", "Kubernetes", "TypeScript", "PostgreSQL", "MongoDB", "Redis"].map((t) => (
              <span key={t} className="text-2xl font-bold text-white/20 sm:text-3xl lg:text-4xl">{t}</span>
            ))}
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="border-t py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="animate-fade-up mb-14 mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[44px]">
              From Idea to Launch,
              <br />
              Powered by AI
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              We blend human expertise with AI precision — delivering faster outcomes
              without compromising security.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-brand-dark px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark/90 dark:bg-white dark:text-brand-dark dark:hover:bg-white/90"
            >
              Schedule a Call
            </Link>
          </div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Horizontal line through dots (desktop) */}
            <div className="absolute left-[20px] right-[20px] top-[19px] hidden h-px bg-border lg:block" />

            {processSteps.map((item, i) => (
              <div
                key={item.step}
                className={`animate-fade-up delay-${Math.min(i + 1, 5)} relative`}
              >
                {/* Dot */}
                <div className="relative z-10 mb-5 flex size-10 items-center justify-center rounded-full border-2 border-brand-teal/30 bg-brand-teal/10 bg-background">
                  <span className="text-sm font-bold text-brand-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Label */}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-teal">
                  {item.step} — {item.label}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-lg font-bold tracking-tight">
                  {item.title}
                </h3>

                {/* Bullets */}
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-teal/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Global Offices ── */}
      <section className="border-t py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="animate-fade-up mb-10 text-2xl font-bold tracking-tight sm:text-3xl">
            Global Offices
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Bangladesh */}
            <div className="animate-fade-up delay-1 grid grid-cols-[1fr_auto] items-center overflow-hidden rounded-2xl border border-border/50 bg-card">
              <div className="p-8">
                <h3 className="text-xl font-bold">Bangladesh</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
                <div className="mt-4 space-y-1.5">
                  <Link
                    href="mailto:hello@zenqbit.com"
                    className="block text-sm text-brand-coral hover:underline"
                  >
                    hello@zenqbit.com
                  </Link>
                  <Link
                    href="tel:+8801805650587"
                    className="block text-sm text-brand-teal hover:underline"
                  >
                    +880 1805-650587
                  </Link>
                </div>
              </div>
              <Image src="/office-bangladesh.svg" alt="Zenqbit Dhaka, Bangladesh office" width={160} height={160} className="hidden h-full w-40 object-contain pr-4 sm:block" />
            </div>

            {/* Malaysia */}
            <div className="animate-fade-up delay-2 grid grid-cols-[1fr_auto] items-center overflow-hidden rounded-2xl border border-border/50 bg-card">
              <div className="p-8">
                <h3 className="text-xl font-bold">Malaysia</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Cyberjaya, Selangor 63000, Malaysia
                </p>
                <div className="mt-4 space-y-1.5">
                  <Link
                    href="mailto:hello@zenqbit.com"
                    className="block text-sm text-brand-coral hover:underline"
                  >
                    hello@zenqbit.com
                  </Link>
                  <Link
                    href="tel:+601168295384"
                    className="block text-sm text-brand-teal hover:underline"
                  >
                    +60 11-6829 5384
                  </Link>
                </div>
              </div>
              <Image src="/office-malaysia.svg" alt="Zenqbit Cyberjaya, Malaysia office" width={160} height={160} className="hidden h-full w-40 object-contain pr-4 sm:block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
