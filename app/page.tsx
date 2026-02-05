import Image from 'next/image';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { SuiteCard } from '@/components/SuiteCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';
import { suites } from '@/data/suites';
import { experiences, galleryImages, locationHighlights, spaOfferings, testimonials } from '@/data/site';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-0">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="The Riad"
            title="An oasis of hush, light, and Moroccan craftsmanship."
            subtitle="Riad Antara is a twelve-suite retreat carved from a 19th-century residence. Every archway, lantern, and textile is curated for a quiet luxury that never feels forced."
          />
          <p className="text-base text-charcoal/70 dark:text-[#f5f1e9]/70">
            Our philosophy is simple: slow down, breathe deeper, and allow Marrakech to unfold around you. From hand-finished tadelakt walls to artisanal breakfast rituals, every detail is designed for unhurried moments.
          </p>
          <Link href="/contact" className="text-sm text-olive">
            Speak with our concierge
          </Link>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/about.svg" alt="Riad Antara courtyard" fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 lg:px-0">
        <SectionTitle
          eyebrow="Suites"
          title="Suites designed for quiet opulence."
          subtitle="Each suite is individually styled with Moroccan antiques, tactile textiles, and a serene palette of sand and charcoal."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {suites.slice(0, 3).map((suite) => (
            <SuiteCard key={suite.slug} suite={suite} />
          ))}
        </div>
        <Link href="/suites" className="text-sm text-olive">
          View all suites
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-0">
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/spa.svg" alt="Spa rituals" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Spa & Wellness"
            title="Restorative rituals inspired by the atlas." 
            subtitle="Our hammam and treatment suites are perfumed with eucalyptus and rose, delivering slow, grounding experiences."
          />
          <ul className="space-y-3 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            {spaOfferings.map((item) => (
              <li key={item.title}>
                <span className="text-charcoal dark:text-[#f5f1e9]">{item.title}</span> — {item.description}
              </li>
            ))}
          </ul>
          <Link href="/spa" className="text-sm text-olive">
            Explore wellness menu
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 lg:px-0">
        <SectionTitle
          eyebrow="Experiences"
          title="Curated journeys across Marrakech."
          subtitle="From private souk journeys to rooftop tasting menus, we design elegant itineraries around your rhythm."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]"
            >
              <h3 className="text-lg font-display text-charcoal dark:text-[#f5f1e9]">{experience.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">{experience.description}</p>
            </div>
          ))}
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/experience.svg" alt="Curated experiences" fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 lg:px-0">
        <SectionTitle
          eyebrow="Gallery"
          title="A glimpse inside Riad Antara."
          subtitle="Warm light, sculpted textures, and private courtyards designed for serenity."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(0, 6).map((image) => (
            <div key={image} className="relative h-56 overflow-hidden rounded-3xl shadow-soft">
              <Image src={image} alt="Riad Antara gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
        <Link href="/gallery" className="text-sm text-olive">
          View full gallery
        </Link>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 lg:px-0">
        <SectionTitle
          eyebrow="Testimonials"
          title="Words from discerning travelers."
          subtitle="Guests speak of our attentive service, curated interiors, and the gentle pace of life inside the riad."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-0">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Location"
            title="Tucked inside the historic medina."
            subtitle="Riad Antara sits within a quiet derb, just moments from Marrakech's most celebrated gardens and souks."
          />
          <ul className="space-y-2 text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            {locationHighlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
          <Link href="/contact" className="text-sm text-olive">
            See directions
          </Link>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/map.svg" alt="Map to Riad Antara" fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-0">
        <CTASection />
      </section>
    </div>
  );
}
