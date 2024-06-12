'use client'

import React, { useEffect } from 'react';
import styles from './OurPurpose.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';
import { SlCup } from 'react-icons/sl';
import { BsStack } from 'react-icons/bs';
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
        transition: { delay: 0.9, duration: 0.6 }
    }
};

const iconVariants = {
    hover: { x: 5, scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
};

export default function OurPurpose() {
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
                initial="hidden"
                animate={controls}
            >
                <motion.h3
                    className={`${styles.textTitle} textTitle relative inline-block pb-2 text-xl mb-8 uppercase font-bold`}
                    custom={0}
                    variants={textVariants}
                >
                    Our Purpose
                </motion.h3>
                <motion.h2
                    className='uppercase text-5xl font-extrabold mb-8'
                    custom={1}
                    variants={textVariants}
                >
                    We Turn Ideas Into Works Of Art
                </motion.h2>
                <motion.button
                    className='inline-flex justify-center items-center gap-2 font-bold uppercase'
                    variants={buttonVariants}
                >
                    More About Us
                    <motion.span
                        className='bg-black p-2'
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <FaArrowRight className='text-white font-bold text-xl' />
                    </motion.span>
                </motion.button>
            </motion.div>
            <motion.div ref={ref} initial="hidden" animate={controls}>
                <motion.p custom={2} variants={textVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum, maxime molestias cum aperiam labore incidunt, dicta eius non tempora earum unde eum voluptates repudiandae illo magni facilis officiis! Voluptatem.
                </motion.p>
                <div className='flex justify-between mt-8'>
                    <motion.div custom={3} variants={textVariants}>
                        <div className='bg-black p-2 w-fit'>
                            <LuPencil className='text-white font-bold text-xl' />
                        </div>
                        <h2 className='text-xl mt-4 uppercase font-bold'>Architecture</h2>
                    </motion.div>
                    <motion.div custom={4} variants={textVariants}>
                        <div className='bg-black p-2 w-fit'>
                            <SlCup className='text-white font-bold text-xl' />
                        </div>
                        <h2 className='text-xl mt-4 uppercase font-bold'>Interiors</h2>
                    </motion.div>
                    <motion.div custom={5} variants={textVariants}>
                        <div className='bg-black p-2 w-fit'>
                            <BsStack className='text-white font-bold text-xl' />
                        </div>
                        <h2 className='text-xl mt-4 uppercase font-bold'>Planning</h2>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
