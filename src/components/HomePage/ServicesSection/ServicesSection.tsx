'use client'

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { LuPencil } from 'react-icons/lu'
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }
  })
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
        className='text-center text-xl font-bold uppercase'
        ref={ref}
        initial="hidden"
        animate={controls}
        >
        <motion.h3 
          className='customTextBorder p-2'
          custom={0}
          variants={textVariants}
        >Services</motion.h3>
        <motion.h2 
          className='text-5xl my-4'
          custom={1}
          variants={textVariants}
          >What we do</motion.h2>
      </motion.div>
      <motion.div 
        className='grid gap-8 grid-cols-1 lg:grid-cols-3 my-24'
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className='whatWeDoCard relative border-[10px] border-gray-300 p-8 card rounded-none hover:border-black opacity-100 transition-all duration-300 ease-in-out group h-96 overflow-hidden'
          custom={2}
          variants={textVariants}
          >
          <h2 className='text-3xl font-extrabold text-gray-300 group-hover:text-black opacity-100 transition-all duration-300 ease-in-out'>01</h2>
          <div className='flex flex-col justify-center items-center my-4 group-hover:translate-y-8 transition-all duration-300'>
            <p className='bg-black w-fit p-3'><LuPencil className='text-white' /></p>
            <h3 className='customTextBorder text-center p-2 text-3xl font-extrabold uppercase group-hover:translate-y-4 duration-300 ease-in-out'>Interior Decor</h3>
          </div>
          <p className='text-center mb-4 mt-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa, exercitationem porro nesciunt suscipit ex corporis dignissimos, cupiditate</p>
          <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black text-white p-4'><FaArrowRight className='text-white' /></button>
        </motion.div>
        <motion.div 
          className='whatWeDoCard relative border-[10px] border-gray-300 p-8 card rounded-none hover:border-black opacity-100 transition-all duration-300 ease-in-out group h-96 overflow-hidden'
          custom={3}
          variants={textVariants}
          >
          <h2 className='text-3xl font-extrabold text-gray-300 group-hover:text-black opacity-100 transition-all duration-300 ease-in-out'>02</h2>
          <div className='flex flex-col justify-center items-center my-4 group-hover:translate-y-8 transition-all duration-300'>
            <p className='bg-black w-fit p-3'><LuPencil className='text-white' /></p>
            <h3 className='customTextBorder text-center p-2 text-3xl font-extrabold uppercase group-hover:translate-y-4 duration-300 ease-in-out'>Interior Decor</h3>
          </div>
          <p className='text-center mb-4 mt-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa, exercitationem porro nesciunt suscipit ex corporis dignissimos, cupiditate</p>
          <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black text-white p-4'><FaArrowRight className='text-white' /></button>
        </motion.div>
        <motion.div 
          className='whatWeDoCard relative border-[10px] border-gray-300 p-8 card rounded-none hover:border-black opacity-100 transition-all duration-300 ease-in-out group h-96 overflow-hidden'
          custom={4}
          variants={textVariants}
          >
          <h2 className='text-3xl font-extrabold text-gray-300 group-hover:text-black opacity-100 transition-all duration-300 ease-in-out'>03</h2>
          <div className='flex flex-col justify-center items-center my-4 group-hover:translate-y-8 transition-all duration-300'>
            <p className='bg-black w-fit p-3'><LuPencil className='text-white' /></p>
            <h3 className='customTextBorder text-center p-2 text-3xl font-extrabold uppercase group-hover:translate-y-4 duration-300 ease-in-out'>Interior Decor</h3>
          </div>
          <p className='text-center mb-4 mt-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa, exercitationem porro nesciunt suscipit ex corporis dignissimos, cupiditate</p>
          <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black text-white p-4'><FaArrowRight className='text-white' /></button>
        </motion.div>
      </motion.div>
    </div>
  )
}
