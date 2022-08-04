import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';

interface DescriptiveCategoryProps {
  isRtl?: boolean;
}

const categoryVariants: Variants = {
  offscreen: { x: -300 },
  onscreen: {
    x: 0,
    transition: { duration: 0.8 },
  },
};

const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 144;

export function DescriptiveCategory({
  isRtl = false,
}: DescriptiveCategoryProps) {
  return (
    <motion.section
      className={clsx('flex h-80', isRtl && 'flex-row-reverse')}
      initial="offscreen"
      viewport={{ once: true }}
      whileInView="onscreen"
    >
      {/* NOTE: chance of reusable components */}
      <div className="flex flex-1 items-center">
        <div className="px-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quam nobis corporis, facere architecto officia quibusdam cum libero
            vel at animi adipisci incidunt assumenda repudiandae sit nam,
            sapiente, maiores quaerat!
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center overflow-hidden border-l-4">
        <motion.div
          className="h-36 w-40 overflow-hidden rounded rounded-l-none"
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
              objectFit="cover"
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              alt="Dribble category selection"
              src="https://cdn.dribbble.com/userupload/2843076/file/original-cc769ce71f023bfddf9c5d82993ce285.jpg?compress=1&resize=800x600&vertical=top"
            />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
