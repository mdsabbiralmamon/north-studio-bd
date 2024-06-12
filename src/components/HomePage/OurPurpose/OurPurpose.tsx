import React from 'react'
import styles from './OurPurpose.module.css'
import { FaArrowRight } from 'react-icons/fa'
import { LuPencil } from 'react-icons/lu'
import { SlCup } from 'react-icons/sl'
import { BsStack } from 'react-icons/bs'
export default function OurPurpose() {
  return (
    <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
      <div>
        <h3 className={`${styles.textTitle} textTitle relative inline-block pb-2 text-xl mb-8 uppercase font-bold`}>Our Purpose</h3>
        <h2 className='uppercase text-5xl font-extrabold mb-8'>We Turn Ideas Into Works Of Art</h2>
        <button className='inline-flex justify-center items-center gap-2 font-bold uppercase'>More About Us <span className='bg-black p-2'><FaArrowRight className='text-white font-bold text-xl'/></span></button>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum, maxime molestias cum aperiam labore incidunt, dicta eius non tempora earum unde eum voluptates repudiandae illo magni facilis officiis! Voluptatem.</p>
        <div className='flex justify-between mt-8'>
            <div>
                <div className='bg-black p-2 w-fit'>
                <LuPencil className='text-white font-bold text-xl'/>
                </div>
                <h2 className='text-xl mt-4 uppercase font-bold'>Architecture</h2>
            </div>
            <div>
                <div className='bg-black p-2 w-fit'>
                <SlCup className='text-white font-bold text-xl'/>
                </div>
                <h2 className='text-xl mt-4 uppercase font-bold'>Interiors</h2>
            </div>
            <div>
                <div className='bg-black p-2 w-fit'>
                <BsStack className='text-white font-bold text-xl'/>
                </div>
                <h2 className='text-xl mt-4 uppercase font-bold'>Planing</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
