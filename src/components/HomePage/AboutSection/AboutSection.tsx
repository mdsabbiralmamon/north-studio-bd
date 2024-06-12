'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import aboutImage from '@/app/images/homepage/aboutUS.jpg';
import styles from './AboutSection.module.css';
import { BsCaretRight } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6 }
    })
};

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.2, duration: 0.6 }
    }
};

const iconVariants = {
    hover: { x: 5, scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
};

export default function AboutSection() {
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
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
            <motion.div
                ref={ref}
                className="relative flex justify-center"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className='w-fit lg:p-8'>
                    <div className='relative w-[280px] md:w-[500px]'>
                        <Image src={aboutImage} alt='about us image' />
                        <div className={`${styles.photoBadge} absolute bottom-0 right-0 bg-white p-4 lg:p-16 font-semibold text-right uppercase`}>
                            <h2 className='text-7xl font-extrabold'>17</h2>
                            <h3>Years Of </h3>
                            <h3>Successful</h3>
                            <h3>Work</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div>
                <div className='flex justify-center items-center h-full p-8'>
                    <motion.div initial="hidden" animate={controls}>
                        <motion.h3
                            className={`${styles.aboutTextTitle} relative inline-block pb-2 text-xl mb-8 uppercase font-bold`}
                            custom={0}
                            variants={textVariants}
                        >
                            About Studio
                        </motion.h3>
                        <motion.h2
                            className='uppercase text-5xl font-extrabold mb-8'
                            custom={1}
                            variants={textVariants}
                        >
                            Great Experience
                        </motion.h2>
                        <motion.p
                            className='mb-8'
                            custom={2}
                            variants={textVariants}
                        >
                            North Studio Limited, an Architectural consultancy based in Dhaka since 2017, offers a comprehensive range of services including Architectural Design with 3D Modeling and Animation services. We also provide Structural Design, Graphics Design, Renovation Work. The firm is situated at Mohakhali, Dhaka.
                        </motion.p>
                        <motion.button
                            className='inline-flex justify-center items-center gap-2 my-4 font-bold uppercase'
                            variants={buttonVariants}
                        >
                            Watch Video 
                            <motion.span
                                className='bg-black p-2'
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <BsCaretRight className='text-white font-bold text-xl' />
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
