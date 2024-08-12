import Banner from '@/components/Shared/Banner/Banner';
import React from 'react';
import bannerImg from '@/app/images/sliderImages/building1.jpg';


const page = () => {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='PORTFOLIO' />
        </div>
    );
};

export default page;