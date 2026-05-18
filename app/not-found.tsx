import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold tracking-tight text-brand-coral">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-[15px] text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-brand-coral px-7 text-sm font-semibold text-white transition-all hover:bg-brand-coral/90"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center rounded-full border border-border px-7 text-sm font-semibold transition-colors hover:bg-muted"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
