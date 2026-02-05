import type { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import { GalleryGrid } from '@/components/GalleryGrid';
import { galleryImages } from '@/data/site';

export const metadata: Metadata = {
  title: 'Gallery | Riad Antara',
  description: 'Explore the gallery of Riad Antara, showcasing suites, courtyards, and rooftop moments.',
  openGraph: {
    title: 'Gallery | Riad Antara',
    description: 'Explore the gallery of Riad Antara, showcasing suites, courtyards, and rooftop moments.'
  }
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-6 lg:px-0">
      <SectionTitle
        eyebrow="Gallery"
        title="Quiet grandeur in every frame."
        subtitle="Light, texture, and craftsmanship define every corner of Riad Antara."
      />
      <GalleryGrid images={galleryImages} />
    </div>
  );
}
