import Link from 'next/link';
import { navigationLinks } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-warmwhite py-12 dark:border-[#f5f1e9]/10 dark:bg-[#141311]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-3 lg:px-0">
        <div className="space-y-4">
          <p className="text-lg font-display text-charcoal dark:text-[#f5f1e9]">Riad Antara</p>
          <p className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            A luxury boutique riad in the heart of Marrakech, curated for intimate journeys and serene retreats.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-olive">Explore</p>
          <ul className="space-y-2 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
          <p className="text-xs uppercase tracking-[0.3em] text-olive">Contact</p>
          <p>Rue des Orangers, Medina, Marrakech</p>
          <p>+212 5 24 00 00 00</p>
          <p>reservations@riadantara.com</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-charcoal/60 dark:text-[#f5f1e9]/50 lg:px-0">
        © {new Date().getFullYear()} Riad Antara. All rights reserved.
      </div>
    </footer>
  );
}
