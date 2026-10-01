import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep text-stone/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl tracking-[0.2em] uppercase text-stone-warm">
            Mercado
          </p>
          <p className="mt-2 text-sm">Cafe Bar · West Didsbury & Stockport</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href={site.phoneHref} className="hover:text-gold-soft">
            {site.phone}
          </a>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-soft"
          >
            {site.handle}
          </a>
          <a
            href={site.links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-soft"
          >
            Uber Eats
          </a>
        </div>
        <p className="text-xs text-stone/40">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
