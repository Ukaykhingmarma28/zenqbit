"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function MobileDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const handleClose = () => {
    setServicesOpen(false);
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[101] flex h-dvh w-[80%] max-w-[320px] flex-col bg-background shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" onClick={handleClose} className="focus-ring rounded-md">
            <Image
              src="/logo.svg"
              alt="Zenqbit"
              width={100}
              height={22}
              className="dark:invert"
            />
          </Link>
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full bg-muted/60 text-foreground transition-colors hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Separator */}
        <div className="mx-5 h-px bg-border" />

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
          {/* Services accordion */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-foreground transition-colors active:bg-muted"
          >
            Services
            <ChevronDown
              className={`size-4 text-muted-foreground transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ease-out ${
              servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-brand-coral/30 pl-2 pb-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={handleClose}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-muted-foreground transition-colors active:bg-muted"
                  >
                    <service.icon className="size-4 shrink-0 text-brand-coral" />
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClose}
              className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors active:bg-muted ${
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="px-5 pb-6 pt-3">
          <Button size="lg" className="w-full h-12 text-[15px]" onClick={handleClose}>
            Get Started
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </>,
    document.body,
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeAll = useCallback(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, []);

  // Close mega menu on outside click
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      megaRef.current &&
      !megaRef.current.contains(e.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(e.target as Node)
    ) {
      setMegaOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Close mega on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="focus-ring absolute left-4 top-4 z-[60] -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="focus-ring rounded-md">
            <Image
              src="/logo.svg"
              alt="Zenqbit"
              width={123}
              height={27}
              priority
              className="dark:invert"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {/* Services mega trigger */}
            <button
              ref={triggerRef}
              onClick={() => setMegaOpen(!megaOpen)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className={`focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:text-foreground ${
                pathname.startsWith("/services")
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Services
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:text-foreground ${
                  pathname === link.href
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs + hamburger */}
          <div className="flex items-center gap-3">
            <Button size="default" className="hidden sm:inline-flex">
              Get Started
            </Button>

            {/* Mobile hamburger */}
            <button
              className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>

        {/* ── Mega menu (desktop) ── */}
        {megaOpen && (
          <div
            ref={megaRef}
            className="animate-fade-down absolute inset-x-0 top-[calc(100%+8px)] z-40 mx-auto max-w-7xl px-6"
          >
            <div className="flex overflow-hidden rounded-xl border bg-background shadow-lg">
              {/* Left featured panel */}
              <div className="hidden w-72 shrink-0 border-r bg-muted/40 p-8 lg:block">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Featured
                </p>
                <h3 className="mt-4 text-sm font-semibold leading-snug">
                  End-to-End Digital Solutions for Modern Businesses
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  From idea to launch — we handle design, development, and
                  deployment so you can focus on growth.
                </p>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Get Started
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              {/* Right content */}
              <div className="flex-1 px-8 py-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Services
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={closeAll}
                      className="focus-ring group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-muted"
                    >
                      <service.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium group-hover:text-foreground">
                          {service.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground line-clamp-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer — portaled to body */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
