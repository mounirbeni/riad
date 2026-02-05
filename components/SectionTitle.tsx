import clsx from 'clsx';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        'space-y-4',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.3em] text-olive">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-display text-charcoal dark:text-[#f5f1e9] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-charcoal/70 dark:text-[#f5f1e9]/70 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
