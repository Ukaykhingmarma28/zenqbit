import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  title: "Zenqbit — Software Solutions",
  description:
    "Web development, mobile apps, AI, IoT, and automation solutions for modern businesses.",
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
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
