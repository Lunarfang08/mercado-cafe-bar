"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Visit() {
  return (
    <section id="visit" className="bg-stone-warm py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-leaf">Visit</p>
          <h2 className="font-display text-4xl leading-none text-forest md:text-5xl">
            Burton Road is calling.
          </h2>
          <p className="mt-4 text-muted">{site.hoursNote}</p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-leaf">Address</dt>
              <dd className="mt-2 text-lg text-forest">
                {site.address.line1}
                <br />
                {site.address.line2}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-leaf">Phone</dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="text-lg text-forest hover:text-leaf">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-leaf">Community</dt>
              <dd className="mt-2 text-muted">{site.stockportNote}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-stone-warm transition hover:bg-moss"
            >
              Open in Maps
            </a>
            <a
              href={site.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest/20 px-7 py-3 text-sm uppercase tracking-[0.12em] text-forest transition hover:border-forest"
            >
              Uber Eats
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest/20 px-7 py-3 text-sm uppercase tracking-[0.12em] text-forest transition hover:border-forest"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[320px] overflow-hidden bg-forest/5 md:min-h-[480px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <iframe
            title="Mercado Cafe Bar map"
            src={site.address.embedUrl}
            className="absolute inset-0 h-full w-full border-0 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
