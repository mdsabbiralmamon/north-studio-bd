import Banner from '@/components/Shared/Banner/Banner';
import React from 'react';
import bannerImg from '@/app/images/sliderImages/interior1.jpg';

const page = () => {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='SERVICES' />
        </div>
    );
};

export default page;