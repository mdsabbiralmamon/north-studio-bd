import Image from 'next/image';
import React from 'react';
import aboutImage from '@/app/images/homepage/aboutUS.jpg';
import styles from './AboutSection.module.css';
import { BsCaretRight } from 'react-icons/bs';

export default function AboutSection() {
    return (
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
            <div className="relative flex justify-center">
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
            </div>
            <div>
                <div className='flex justify-center items-center h-full p-8'>
                    <div>
                        <h3 className={`${styles.aboutTextTitle} relative inline-block pb-2 text-xl mb-8 uppercase font-bold`}>About Studio</h3>
                        <h2 className='uppercase text-5xl font-extrabold mb-8'>Great Experience</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id enim inventore tempore explicabo quisquam, est nam ratione, dolor accusantium recusandae fugit reiciendis vel rem temporibus ullam, voluptatum saepe placeat nobis.</p>
                        <button className='inline-flex justify-center items-center gap-2 my-4'>Watch Video <span className='bg-black p-2'><BsCaretRight className='text-white font-bold text-xl'/></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
