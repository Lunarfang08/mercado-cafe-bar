"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { gallery } from "@/data/gallery";

export function Vibe() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="vibe" ref={ref} className="bg-forest-deep text-stone-warm">
      <div className="relative h-[70vh] min-h-[420px] overflow-hidden md:h-[85vh]">
        <motion.div className="absolute inset-[-12%] will-change-transform" style={{ y }}>
          <Image
            src="/images/malaga.jpg"
            alt="A taste of Málaga chalkboard at Mercado"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-forest-deep/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
            <motion.h2
              className="font-display text-4xl leading-none md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Mi casa es
              <br />
              su casa.
            </motion.h2>
            <motion.p
              className="mt-5 max-w-md text-base text-stone/85 md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Latino/Mediterranean soul on Burton Road. Patio lights, puppy eyes, and coffee that
              Manchester voted for — twice.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-soft">The vibe</p>
            <h3 className="font-display text-3xl md:text-4xl">Come for the coffee. Stay for the chaos.</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((item, i) => (
            <motion.figure
              key={item.src}
              className={`relative overflow-hidden ${
                i % 5 === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto md:min-h-[420px]" : "aspect-square"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.6 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 to-transparent p-4 pt-12 text-sm text-stone/90">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
