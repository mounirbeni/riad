import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { spaOfferings } from '@/data/site';

export const metadata: Metadata = {
  title: 'Spa & Wellness | Riad Antara',
  description: 'Discover hammam rituals, massages, and wellness packages curated for deep restoration.',
  openGraph: {
    title: 'Spa & Wellness | Riad Antara',
    description: 'Discover hammam rituals, massages, and wellness packages curated for deep restoration.'
  }
};

export default function SpaPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-6 lg:px-0">
      <SectionTitle
        eyebrow="Spa & Wellness"
        title="Rituals of renewal, rooted in Moroccan tradition."
        subtitle="Our hammam and wellness suites invite you into slow, restorative rituals guided by expert therapists."
      />
      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-6">
          {spaOfferings.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]"
            >
              <h3 className="text-lg font-display text-charcoal dark:text-[#f5f1e9]">{item.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/spa.svg" alt="Spa & Wellness" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
