'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { navigationLinks } from '@/data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldEnable = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldEnable);
    setDarkMode(shouldEnable);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled
          ? 'bg-warmwhite/90 shadow-soft backdrop-blur dark:bg-[#141311]/90'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-0">
        <Link href="/" className="text-lg font-display text-charcoal dark:text-[#f5f1e9]">
          Riad Antara
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-charcoal/80 transition hover:text-charcoal dark:text-[#f5f1e9]/70 dark:hover:text-[#f5f1e9]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full border border-charcoal/20 px-5 py-2 text-sm text-charcoal transition hover:border-charcoal dark:border-[#f5f1e9]/40 dark:text-[#f5f1e9]"
          >
            Book Your Stay
          </Link>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-olive">
            <button type="button" className="rounded-full border border-olive/40 px-3 py-1">
              EN
            </button>
            <span className="text-olive/60">FR / AR</span>
          </div>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="text-xs uppercase tracking-[0.25em] text-olive"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-charcoal dark:text-[#f5f1e9] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
          <span className="h-[2px] w-6 bg-charcoal dark:bg-[#f5f1e9]" />
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-charcoal/10 bg-warmwhite px-6 py-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#141311] lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-charcoal dark:text-[#f5f1e9]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="rounded-full border border-charcoal/30 px-5 py-2 text-center text-sm text-charcoal dark:border-[#f5f1e9]/40 dark:text-[#f5f1e9]"
                onClick={() => setOpen(false)}
              >
                Book Your Stay
              </Link>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-olive">
                <button type="button" className="rounded-full border border-olive/40 px-3 py-1">
                  EN
                </button>
                <span className="text-olive/60">FR / AR</span>
              </div>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="text-xs uppercase tracking-[0.25em] text-olive"
                aria-label="Toggle dark mode"
              >
                {darkMode ? 'Light' : 'Dark'}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
