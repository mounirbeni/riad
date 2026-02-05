import Image from 'next/image';
import Link from 'next/link';
import { Suite } from '@/data/suites';

type SuiteCardProps = {
  suite: Suite;
};

export function SuiteCard({ suite }: SuiteCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition hover:-translate-y-1 dark:bg-[#1a1916]">
      <div className="relative h-56">
        <Image
          src={suite.images[0]}
          alt={suite.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-olive">{suite.size}</p>
          <h3 className="text-xl font-display text-charcoal dark:text-[#f5f1e9]">{suite.name}</h3>
        </div>
        <ul className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
          {suite.features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            From <span className="text-charcoal dark:text-[#f5f1e9]">{suite.priceFrom}</span> / night
          </p>
          <Link href={`/suites/${suite.slug}`} className="text-sm text-olive">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
