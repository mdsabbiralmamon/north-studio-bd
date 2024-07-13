'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import sliderImage1 from '@/app/images/sliderImages/building1.jpg';
import sliderImage2 from '@/app/images/sliderImages/design1.jpg';
import sliderImage3 from '@/app/images/sliderImages/exterior1.jpg';
import sliderImage4 from '@/app/images/sliderImages/interior1.jpg';

import sponsor1 from '@/app/images/sponsorSlider/arvex.png'
import sponsor2 from '@/app/images/sponsorSlider/archive.png'
import sponsor3 from '@/app/images/sponsorSlider/shampan.png'
import sponsor4 from '@/app/images/sponsorSlider/bdnl.png'

import styles from './Hero.module.css';
import { FaArrowRight } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

export default function Hero() {
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];
  const texts = ['Building', 'Design', 'Exterior', 'Interior'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setAnimateText(true);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, texts.length]);

  useEffect(() => {
    if (animateText) {
      setAnimateText(false);
    }
  }, [animateText]);

  return (
    <div className="h-screen flex flex-col">
      <div className="relative w-full h-3/4 overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 2 }}
              >
                <Image src={image} layout="fill" objectFit="cover" alt={`slider image ${index + 1}`} />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className='relative bg-black w-full h-full bg-opacity-50 pt-8'>
          <div className='container mx-auto relative top-1/2 -translate-y-1/2'>
            <h2 className='text-5xl font-extrabold text-white'>An Architect Firm</h2>
            <h3 className='text-5xl font-extrabold text-white mt-4'>Specializing In</h3>
            <div className='flex items-center mt-4'>
              <motion.p
                className='dynamicText text-5xl font-extrabold text-white'
                key={currentTextIndex}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {texts[currentTextIndex]}
                <span className={styles.loadingDots}></span>
              </motion.p>
            </div>
            <p className='text-white max-w-3xl my-4'>We turn your imagination into work of art. Work with us for gaining excellence in every corners.</p>
            <button className=' text-white inline-flex justify-center items-center'>Learn More <FaArrowRight /></button>
          </div>
        </div>
      </div>
      <div className='flex flex-grow items-center cursor-pointer'>
        <Marquee  autoFill={true} pauseOnHover={true}>
          <Image  className='mx-8' src={sponsor1} alt='sponsor logo' height={200} />
          <Image  className='mr-32'  src={sponsor2} alt='sponsor logo' height={100} />
          <Image  className='mr-32' src={sponsor3} alt='sponsor logo' height={100} />
          <Image  className=''  src={sponsor4} alt='sponsor logo' height={150} />
        </Marquee>
      </div>
    </div>
  );
}
