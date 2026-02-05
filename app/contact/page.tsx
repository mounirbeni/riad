import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Riad Antara',
  description: 'Contact Riad Antara to arrange bespoke stays, private events, or concierge planning.',
  openGraph: {
    title: 'Contact | Riad Antara',
    description: 'Contact Riad Antara to arrange bespoke stays, private events, or concierge planning.'
  }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-6 lg:px-0">
      <SectionTitle
        eyebrow="Contact"
        title="Let us curate your stay in Marrakech."
        subtitle="Our concierge responds within 24 hours to craft suites, spa rituals, and experiences tailored to you."
      />
      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <ContactForm />
        <div className="space-y-6">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]">
            <p className="text-xs uppercase tracking-[0.3em] text-olive">Direct</p>
            <p className="mt-3 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">Rue des Orangers, Medina, Marrakech</p>
            <p className="mt-2 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">+212 5 24 00 00 00</p>
            <p className="mt-2 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">reservations@riadantara.com</p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl shadow-card">
            <Image src="/images/map.svg" alt="Map to Riad Antara" fill className="object-cover" />
          </div>
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-olive px-6 py-3 text-sm text-olive"
          >
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
