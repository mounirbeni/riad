import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-charcoal px-10 py-14 text-warmwhite shadow-card">
      <div className="absolute inset-0 bg-hero-texture opacity-60" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-warmwhite/70">Private Reservations</p>
          <h3 className="text-3xl font-display">Your Marrakech retreat awaits.</h3>
          <p className="text-base text-warmwhite/70">
            Secure your suite, arrange a private hammam, or curate an experience itinerary with our concierge.
          </p>
        </div>
        <Link
          href="/booking"
          className="rounded-full bg-warmwhite px-6 py-3 text-sm font-medium text-charcoal"
        >
          Reserve Your Stay
        </Link>
      </div>
    </section>
  );
}
