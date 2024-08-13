import Banner from '@/components/Shared/Banner/Banner';
import React from 'react';
import bannerImg from '@/app/images/sliderImages/interior1.jpg';
import Heading from '@/components/ServicesPage/Heading';
import OurServices from '@/components/ServicesPage/OurServices';

const page = () => {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='SERVICES' />
            <div className='my-24 container mx-auto'>
                <Heading />
            </div>
            <div className='my-24 container mx-auto'>
                <OurServices />
            </div>
        </div>
    );
};

export default page;