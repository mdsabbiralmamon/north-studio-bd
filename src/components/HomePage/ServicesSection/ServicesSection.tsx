'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuPencil } from 'react-icons/lu';
import { MdAnimation } from 'react-icons/md';
import { SlCup } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import WhatWeDoCard from '@/components/Shared/WhatWeDoCard/WhatWeDoCard';
import Link from 'next/link';
import { BsCaretRight } from 'react-icons/bs';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.5, duration: 0.6 },
  },
};

const iconVariants = {
  hover: { x: 5, scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
};

export default function ServicesSection() {
  const controls = useAnimation();
  const buttonControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      buttonControls.start('visible');
    } else {
      controls.start('hidden');
      buttonControls.start('hidden');
    }
  }, [controls, buttonControls, inView]);

  return (
    <div className='p-8'>
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
      <div className="flex justify-center mt-8">
        <Link href="/services">
          <motion.button
            className="relative inline-flex items-center justify-start overflow-hidden font-bold uppercase px-8 py-4 bg-black text-white rounded-lg shadow-lg group"
            ref={ref}
            initial="hidden"
            animate={buttonControls}
            variants={buttonVariants}
            whileHover="hover"
          >
            <motion.span
              className="absolute inset-0 w-full h-full bg-black transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
              variants={iconVariants}
            ></motion.span>
            <motion.span
              className="relative flex items-center gap-2"
              initial={{ x: 0 }}
              whileHover={{ x: 10, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              <span className="relative z-10 group-hover:text-white">View All Services</span>
              <BsCaretRight className="text-xl group-hover:text-white" />
            </motion.span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
