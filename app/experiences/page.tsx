import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { experiences } from '@/data/site';

export const metadata: Metadata = {
  title: 'Experiences | Riad Antara',
  description: 'Explore curated cultural, culinary, and private experiences crafted by Riad Antara concierge.',
  openGraph: {
    title: 'Experiences | Riad Antara',
    description: 'Explore curated cultural, culinary, and private experiences crafted by Riad Antara concierge.'
  }
};

export default function ExperiencesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-6 lg:px-0">
      <SectionTitle
        eyebrow="Experiences"
        title="Marrakech through a refined lens."
        subtitle="We craft intimate itineraries that blend culture, gastronomy, and rooftop evenings in a private setting."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]"
          >
            <h3 className="text-lg font-display text-charcoal dark:text-[#f5f1e9]">{experience.title}</h3>
            <p className="mt-3 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">{experience.description}</p>
          </article>
        ))}
      </div>
      <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-card">
        <Image src="/images/experience.svg" alt="Riad experiences" fill className="object-cover" />
      </div>
    </div>
  );
}
