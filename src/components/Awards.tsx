"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const items = [
  "Best Cafe 2025 & 2026",
  `${site.uberRating}★ on Uber Eats`,
  site.hygiene,
  "#1 Coffee MCR",
];

export function Awards() {
  return (
    <section className="border-y border-forest/10 bg-forest text-stone-warm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 overflow-hidden px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-4">
        <motion.p
          className="shrink-0 text-xs uppercase tracking-[0.28em] text-gold-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {site.tagline}
        </motion.p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
          {items.map((item, i) => (
            <motion.span
              key={item}
              className="text-sm text-stone/85"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
