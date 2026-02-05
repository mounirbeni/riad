import type { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Booking | Riad Antara',
  description: 'Reserve your stay at Riad Antara with our simple booking request form.',
  openGraph: {
    title: 'Booking | Riad Antara',
    description: 'Reserve your stay at Riad Antara with our simple booking request form.'
  }
};

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 pb-20 pt-6 lg:px-0">
      <SectionTitle
        eyebrow="Booking"
        title="Reserve your sanctuary."
        subtitle="Submit a request and our reservations team will confirm availability within 24 hours."
        align="center"
      />
      <form className="space-y-6 rounded-3xl border border-charcoal/10 bg-white p-8 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            Check-in
            <input
              type="date"
              required
              className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
            />
          </label>
          <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            Check-out
            <input
              type="date"
              required
              className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
            />
          </label>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            Guests
            <select
              required
              className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
            </select>
          </label>
          <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            Suite Preference
            <select
              required
              className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
            >
              <option value="sahara-royale">Sahara Royale Suite</option>
              <option value="amber-courtyard">Amber Courtyard Suite</option>
              <option value="olive-garden">Olive Garden Suite</option>
              <option value="noor-terrace">Noor Terrace Suite</option>
            </select>
          </label>
        </div>
        <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
          Special requests
          <textarea
            rows={4}
            className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-warmwhite"
        >
          Submit Reservation Request
        </button>
      </form>
    </div>
  );
}
