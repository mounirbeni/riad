'use client';

import { useMemo, useState } from 'react';
import { Suite, suites } from '@/data/suites';
import { SuiteCard } from '@/components/SuiteCard';

const capacityOptions = [
  { label: 'All', value: 'all' },
  { label: '2 Guests', value: '2' },
  { label: '3 Guests', value: '3' }
];

const sizeOptions = [
  { label: 'All', value: 'all' },
  { label: '38 - 50 sqm', value: 'small' },
  { label: '51 - 70 sqm', value: 'medium' },
  { label: '71+ sqm', value: 'large' }
];

const sizeCategory = (suite: Suite) => {
  const numeric = Number(suite.size.replace(/[^0-9]/g, ''));
  if (numeric >= 71) return 'large';
  if (numeric >= 51) return 'medium';
  return 'small';
};

export function SuitesClient() {
  const [capacity, setCapacity] = useState('all');
  const [size, setSize] = useState('all');

  const filtered = useMemo(() => {
    return suites.filter((suite) => {
      const capacityMatch = capacity === 'all' || suite.capacity === Number(capacity);
      const sizeMatch = size === 'all' || sizeCategory(suite) === size;
      return capacityMatch && sizeMatch;
    });
  }, [capacity, size]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916] sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-olive">Filter</p>
          <p className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">Refine by capacity or suite size.</p>
        </div>
        <div className="flex flex-1 flex-wrap gap-4 sm:justify-end">
          <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            Capacity
            <select
              value={capacity}
              onChange={(event) => setCapacity(event.target.value)}
              className="mt-2 w-full min-w-[160px] rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-2 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
            >
              {capacityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-charcoal/70 dark:text-[#f5f1e9]/70">
            Suite Size
            <select
              value={size}
              onChange={(event) => setSize(event.target.value)}
              className="mt-2 w-full min-w-[160px] rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-2 text-sm text-charcoal dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
            >
              {sizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((suite) => (
          <SuiteCard key={suite.slug} suite={suite} />
        ))}
      </div>
    </div>
  );
}
