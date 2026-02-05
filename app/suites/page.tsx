import type { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import { SuitesClient } from './SuitesClient';

export const metadata: Metadata = {
  title: 'Suites | Riad Antara',
  description: 'Explore the curated suites at Riad Antara, each designed with Moroccan craftsmanship and quiet luxury.',
  openGraph: {
    title: 'Suites | Riad Antara',
    description: 'Explore the curated suites at Riad Antara, each designed with Moroccan craftsmanship and quiet luxury.'
  }
};

export default function SuitesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-6 lg:px-0">
      <SectionTitle
        eyebrow="Suites"
        title="Private suites curated for intimate stays."
        subtitle="Every suite balances tactile materials, warm lighting, and quiet privacy with signature amenities."
      />
      <SuitesClient />
    </div>
  );
}
