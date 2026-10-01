"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { houseSpecials, menuCategories } from "@/data/menu";
import { site } from "@/data/site";

export function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <section id="menu" className="relative bg-stone-warm py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-leaf">The menu</p>
          <h2 className="font-display text-4xl leading-none tracking-tight text-forest md:text-6xl">
            Eat like you mean it.
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Daytime favourites from Uber Eats — plus the house specials we save for people who
            actually show up.
          </p>
        </motion.div>

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-forest text-stone-warm"
                    : "bg-transparent text-forest/70 ring-1 ring-forest/15 hover:ring-forest/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={category.id}
            className="divide-y divide-forest/10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {category.items.map((item, i) => (
              <motion.li
                key={item.name}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl text-forest md:text-2xl">{item.name}</h3>
                    {item.badge ? (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  {item.description ? (
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <p className="shrink-0 font-display text-lg text-forest">{item.price}</p>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-leaf">In-house only</p>
          <h3 className="font-display text-3xl text-forest md:text-4xl">
            The stuff Instagram can&apos;t deliver.
          </h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {houseSpecials.map((item, i) => (
              <motion.li
                key={item.name}
                className="border-l-2 border-gold/60 pl-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-display text-xl text-forest">{item.name}</h4>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted">
                    {item.price}
                  </span>
                </div>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                ) : null}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-14 flex flex-wrap gap-3">
          <a
            href={site.links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-stone-warm transition hover:bg-moss"
          >
            Order on Uber Eats
          </a>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-forest/20 px-7 py-3 text-sm uppercase tracking-[0.12em] text-forest transition hover:border-forest"
          >
            Follow {site.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
