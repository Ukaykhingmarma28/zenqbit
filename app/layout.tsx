import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { SmoothScroll } from "@/components/smooth-scroll";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schemas";
import "./globals.css";

const uncutSans = localFont({
  src: [
    { path: "./fonts/uncut-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/uncut-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/uncut-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/uncut-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenqbit.com"),
  title: {
    default: "Zenqbit — Custom Software, AI & IoT Solutions",
    template: "%s | Zenqbit",
  },
  description:
    "Zenqbit builds custom software, AI, IoT, and mobile apps for startups and enterprises. Skilled engineers in Malaysia and Bangladesh.",
  keywords: [
    "software development company",
    "custom software Malaysia",
    "AI solutions Bangladesh",
    "IoT solutions",
    "mobile app development",
    "web development",
    "technology consulting",
    "software company Cyberjaya",
    "IT outsourcing Bangladesh",
  ],
  authors: [{ name: "Zenqbit", url: "https://zenqbit.com" }],
  creator: "Zenqbit",
  publisher: "Zenqbit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenqbit.com",
    siteName: "Zenqbit",
    title: "Zenqbit — Custom Software, AI & IoT Solutions",
    description:
      "Custom software, AI, IoT, mobile apps, and automation. Skilled engineers serving Malaysia, Bangladesh, and global clients.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zenqbit — Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zenqbit.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${uncutSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {/* TODO: Add analytics before launch — Google Analytics, Vercel Analytics, or similar */}
        {/* Example: <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" /> */}
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
