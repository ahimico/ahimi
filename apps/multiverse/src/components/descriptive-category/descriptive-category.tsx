import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';

interface DescriptiveCategoryProps {
  isRtl?: boolean;
}

const categoryVariants: Variants = {
  offscreen: { x: -300 },
  onscreen: { x: 0, transition: { duration: 0.8 } },
};
const contentVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delay: 0.5,
      duration: 0.8,
    },
  },
};

export function DescriptiveCategory({
  isRtl = false,
}: DescriptiveCategoryProps) {
  return (
    <motion.section
      className={clsx('flex', isRtl && 'flex-row-reverse')}
      initial="offscreen"
      viewport={{ once: true }}
      whileInView="onscreen"
    >
      {/* NOTE: chance of reusable components */}
      <div className="flex flex-1 items-center">
        <motion.div className="px-4 py-6" variants={contentVariants}>
          {[...Array(1)].map(i => (
            <motion.p key={i + Math.random()}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quam nobis corporis, facere architecto officia quibusdam cum
              libero vel at animi adipisci incidunt assumenda repudiandae sit
              nam, sapiente, maiores quaerat!
            </motion.p>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-1 items-center overflow-hidden border-l-4">
        <motion.div
          className="relative aspect-[4/3] w-40 overflow-hidden rounded-lg rounded-l-none sm:w-60"
          variants={categoryVariants}
        >
          {/* TODO: should be linked to actual dribble artist */}
          <a
            title="Step into Infinity✨"
            target="_blank"
            rel="noreferrer noopener"
            href="https://dribbble.com/shots/18440916-Step-into-Infinity"
          >
            <Image
              className="object-center"
              objectFit="cover"
              layout="fill"
              alt="Dribble category selection"
              src="https://cdnb.artstation.com/p/assets/images/images/051/787/159/smaller_square/seongjin-untitled-001-copy.jpg?1658174081"
            />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
