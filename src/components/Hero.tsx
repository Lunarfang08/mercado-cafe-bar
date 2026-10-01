"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/uber-hero.jpg"
          alt="Pastries, empanadas and focaccia at Mercado Cafe Bar"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 md:px-8 md:pb-20">
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.35em] text-gold-soft"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          West Didsbury · Manchester
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.03em] text-stone-warm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          MERCADO
        </motion.h1>

        <motion.p
          className="mt-5 max-w-md text-lg text-stone/90 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {site.headline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="#menu"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-forest-deep transition hover:bg-gold-soft"
          >
            See the menu
          </a>
          <a
            href="#visit"
            className="rounded-full border border-stone/40 px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-stone-warm transition hover:border-gold hover:text-gold-soft"
          >
            Find us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
