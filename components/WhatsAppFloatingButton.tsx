import Link from 'next/link';

export function WhatsAppFloatingButton() {
  return (
    <Link
      href="https://wa.me/212600000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-olive px-5 py-3 text-xs uppercase tracking-[0.3em] text-warmwhite shadow-card"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
