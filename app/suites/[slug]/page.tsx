import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { SuiteGallery } from '@/components/SuiteGallery';
import { suites } from '@/data/suites';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return suites.map((suite) => ({ slug: suite.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const suite = suites.find((item) => item.slug === params.slug);
  if (!suite) {
    return { title: 'Suite | Riad Antara' };
  }
  return {
    title: `${suite.name} | Riad Antara`,
    description: suite.description,
    openGraph: {
      title: `${suite.name} | Riad Antara`,
      description: suite.description,
      images: [{ url: suite.images[0], width: 1200, height: 630 }]
    }
  };
}

export default function SuiteDetailPage({ params }: PageProps) {
  const suite = suites.find((item) => item.slug === params.slug);
  if (!suite) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-6 lg:px-0">
      <Link href="/suites" className="text-sm text-olive">
        ← Back to suites
      </Link>
      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <SuiteGallery images={suite.images} name={suite.name} />
        <div className="space-y-6">
          <SectionTitle
            eyebrow={suite.size}
            title={suite.name}
            subtitle={suite.description}
          />
          <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]">
            <p className="text-sm uppercase tracking-[0.3em] text-olive">Amenities</p>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
              {suite.amenities.map((amenity) => (
                <li key={amenity}>• {amenity}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between rounded-3xl border border-charcoal/10 bg-warmwhite p-6 dark:border-[#f5f1e9]/10 dark:bg-[#141311]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-olive">From</p>
              <p className="text-2xl font-display text-charcoal dark:text-[#f5f1e9]">{suite.priceFrom} / night</p>
            </div>
            <Link
              href="/booking"
              className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-warmwhite"
            >
              Book This Suite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
