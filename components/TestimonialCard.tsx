import clsx from 'clsx';

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
  className?: string;
};

export function TestimonialCard({ name, location, quote, className }: TestimonialCardProps) {
  return (
    <article className={clsx('rounded-3xl border border-charcoal/10 bg-white p-8 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]', className)}>
      <p className="text-sm uppercase tracking-[0.3em] text-olive">{location}</p>
      <p className="mt-4 text-base text-charcoal/80 dark:text-[#f5f1e9]/80">“{quote}”</p>
      <p className="mt-6 text-sm font-medium text-charcoal dark:text-[#f5f1e9]">{name}</p>
    </article>
  );
}
