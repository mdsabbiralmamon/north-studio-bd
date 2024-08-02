import Banner from '@/components/Shared/Banner/Banner';
import React from 'react';
import bannerImg from '@/app/images/sliderImages/exterior1.jpg';
import AboutUs from '@/components/AboutPage/AboutUs';
import OurPhilosophy from '@/components/AboutPage/OurPhilosophy';

export default function page() {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='ABOUT US' />
            <div className='container mx-auto my-24'>
                <AboutUs />
            </div>
            <div className='container mx-auto my-24'>
                <OurPhilosophy />
            </div>
        </div>
    )
}
