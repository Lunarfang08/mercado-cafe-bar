import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | West Didsbury`,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${syne.variable} ${instrument.variable}`}>
      <body className="font-body antialiased">
        <style>{`
          :root {
            --font-display: var(--font-syne), ui-sans-serif, system-ui, sans-serif;
            --font-body: var(--font-instrument), ui-sans-serif, system-ui, sans-serif;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
