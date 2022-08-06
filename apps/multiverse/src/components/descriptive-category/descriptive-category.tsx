import clsx from 'clsx';
import { m, Variants } from 'framer-motion';

import Image from 'next/image';

const categoryVariants: Variants = {
  offscreen: isRtl => ({ x: (isRtl ? 1 : -1) * 300 }),
  onscreen: { x: 0, transition: { duration: 0.8 } },
};
const contentVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { staggerChildren: 0.8, delay: 0.5, duration: 0.8 },
  },
};
interface DescriptiveCategoryProps {
  isRtl: boolean;
  aspectRatio: '4/3' | '1';
  description: string;
  url: string;
  icon: string;
  alt: string;
  artist: string;
}
export function DescriptiveCategory({
  isRtl = false,
  aspectRatio = '1',
  description = '',
  url,
  icon,
  alt,
  artist,
}: DescriptiveCategoryProps) {
  return (
    <m.section
      className={clsx('flex', isRtl && 'flex-row-reverse')}
      initial="offscreen"
      viewport={{ once: true }}
      whileInView="onscreen"
    >
      {/* NOTE: chance of reusable components */}
      <div
        className={clsx('flex flex-1 items-center justify-center', {
          'border-l-4': isRtl,
        })}
      >
        <m.div className="px-4 py-6" variants={contentVariants}>
          <h2>{icon}</h2>
          <p>{description}</p>
        </m.div>
      </div>
      <div
        className={clsx('flex flex-1 items-center overflow-hidden sm:py-6', {
          'justify-start border-l-4': !isRtl,
          'justify-end': isRtl,
        })}
      >
        <m.div
          variants={categoryVariants}
          custom={isRtl}
          className={clsx('relative w-40 overflow-hidden rounded-lg sm:w-48', {
            'rounded-l-none': !isRtl,
            'rounded-r-none': isRtl,
            'aspect-4/3': aspectRatio === '4/3',
            'aspect-square': aspectRatio === '1',
          })}
        >
          {/* TODO: should be linked to actual dribble artist */}
          <a
            title={alt}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex"
            href={artist}
          >
            <Image
              alt={alt}
              src={url}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </a>
        </m.div>
      </div>
    </m.section>
  );
}
