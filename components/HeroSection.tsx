'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-charcoal">
      <Image
        src="/images/hero.svg"
        alt="Riad Antara rooftop terrace"
        fill
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 pb-16 pt-32 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6 text-warmwhite"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-warmwhite/70">
            Riad Antara · Marrakech
          </p>
          <h1 className="text-4xl font-display leading-tight sm:text-5xl lg:text-6xl">
            A secluded palace of calm, ritual, and understated Moroccan luxury.
          </h1>
          <p className="text-base text-warmwhite/80 sm:text-lg">
            Twelve suites, a perfumed courtyard, and a rooftop sanctuary designed for quiet grandeur and intimate escape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-warmwhite px-6 py-3 text-sm font-medium text-charcoal transition hover:translate-y-[-2px]"
            >
              Book Your Stay
            </Link>
            <Link
              href="/suites"
              className="rounded-full border border-warmwhite/50 px-6 py-3 text-sm text-warmwhite transition hover:border-warmwhite"
            >
              Explore Suites
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
