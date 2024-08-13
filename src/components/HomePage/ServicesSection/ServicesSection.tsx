'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuPencil } from 'react-icons/lu';
import { MdAnimation } from 'react-icons/md';
import { SlCup } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import WhatWeDoCard from '@/components/Shared/WhatWeDoCard/WhatWeDoCard';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export default function ServicesSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        className="text-center text-xl font-bold uppercase"
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <motion.h3
          className="customTextBorder p-2"
          custom={0}
          variants={textVariants}
        >
          Services
        </motion.h3>
        <motion.h2
          className="text-5xl my-4"
          custom={1}
          variants={textVariants}
        >
          What we do
        </motion.h2>
      </motion.div>
      <motion.div
        className="grid gap-8 grid-cols-1 lg:grid-cols-3 my-24"
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <WhatWeDoCard
          number="01"
          Icon={LuPencil}
          title="Architecture"
          description="Architecture blends art and science to design and construct buildings that are functional and visually appealing."
          custom={2}
        />
        <WhatWeDoCard
          number="02"
          Icon={SlCup}
          title="Interior Decor"
          description="Interior decor involves arranging furniture, colors, and accessories to create attractive and functional indoor spaces."
          custom={3}
        />
        <WhatWeDoCard
          number="03"
          Icon={MdAnimation}
          title="Animation"
          description="Animation is the creation of moving images through a sequence of still pictures, used in entertainment and communication."
          custom={4}
        />
      </motion.div>
    </div>
  );
}
