"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { site } from "@/data/site";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#vibe", label: "Vibe" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gold"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest-deep/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="font-display text-lg tracking-[0.2em] uppercase text-stone-warm md:text-xl"
          >
            Mercado
          </a>
          <ul className="flex items-center gap-4 sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs tracking-wide text-stone/80 transition hover:text-gold-soft sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gold-soft transition hover:bg-gold hover:text-forest-deep"
          >
            Order
          </a>
        </nav>
      </header>
    </>
  );
}
