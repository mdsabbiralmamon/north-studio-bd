import Banner from '@/components/Shared/Banner/Banner'
import React from 'react'
import bannerImg from '@/app/images/sliderImages/interior1.jpg'

export default function page() {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='ARVEX' />
            <div className='container mx-auto '>
                <div className='my-24 text-center'>
                    <h2 className='customTextBorder p-2 text-5xl font-bold'>About Us</h2>
                    <p className='text-base font-normal lowercase first-letter:uppercase max-w-2xl mx-auto my-4'>Arvex specializes in crafting bespoke interior designs that harmonize aesthetics with functionality, tailored to elevate your living or working environment. With a dedicated focus on creativity and precision, we transform spaces into personalized reflections of your unique style and vision.</p>
                </div>
                <div className='my-24'>
                    
                </div>
            </div>
        </div>
    )
}
