import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

interface WhatWeDoCardProps {
  number: string;
  Icon: React.ElementType;
  title: string;
  description: string;
  custom: number;
}

export default function WhatWeDoCard({
  number,
  Icon,
  title,
  description,
  custom,
}: WhatWeDoCardProps) {
  return (
    <motion.div
      className="whatWeDoCard relative border-[10px] border-gray-300 p-8 card rounded-none hover:border-black opacity-100 transition-all duration-300 ease-in-out group h-96 overflow-hidden"
      custom={custom}
      variants={textVariants}
    >
      <h2 className="text-3xl font-extrabold text-gray-300 group-hover:text-black opacity-100 transition-all duration-300 ease-in-out">
        {number}
      </h2>
      <div className="flex flex-col justify-center items-center my-4 group-hover:translate-y-8 transition-all duration-300">
        <p className="bg-black w-fit p-3">
          <Icon className="text-white" />
        </p>
        <h3 className="customTextBorder text-center p-2 text-3xl font-extrabold uppercase group-hover:translate-y-4 duration-300 ease-in-out">
          {title}
        </h3>
      </div>
      <p className="text-center mb-4 mt-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300">
        {description}
      </p>
      <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black text-white p-4">
        <FaArrowRight className="text-white" />
      </button>
    </motion.div>
  );
}
