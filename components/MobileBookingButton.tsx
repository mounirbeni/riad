import Link from 'next/link';

export function MobileBookingButton() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[90%] -translate-x-1/2 lg:hidden">
      <Link
        href="/booking"
        className="flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-warmwhite shadow-card"
      >
        Book Your Stay
      </Link>
    </div>
  );
}
