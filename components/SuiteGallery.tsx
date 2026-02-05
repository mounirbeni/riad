'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

type SuiteGalleryProps = {
  images: string[];
  name: string;
};

export function SuiteGallery({ images, name }: SuiteGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-card">
        <Image src={images[active]} alt={name} fill className="object-cover" />
      </div>
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={clsx(
              'relative h-20 w-24 overflow-hidden rounded-2xl border transition',
              index === active
                ? 'border-olive'
                : 'border-transparent opacity-70 hover:opacity-100'
            )}
          >
            <Image src={image} alt={`${name} view ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
