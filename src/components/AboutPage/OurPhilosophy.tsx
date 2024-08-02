import React from 'react';
import DetailsCard from '../Shared/DetailsCard/DetailsCard';

// philosophy images
import mission from '@/app/images/about/philosophy/mission.jpg';
import vision from '@/app/images/about/philosophy/vission.jpg';
import values from '@/app/images/about/philosophy/values.jpg';

const OurPhilosophy = () => {
    return (
        <div className='text-center'>
            <h2 className='customTextBorder p-2 text-5xl font-bold text-center'>Our Philosophy</h2>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 my-8'>
                
                    <DetailsCard image={mission.src} title={'Our Mission'} description={'To create a space that is a unique representation of you or your business. Our goal is to have our thoughtful interiors provoke good emotions.'} />
                    <DetailsCard image={vision.src} title={'Our Vision'} description={'To become a single professional service for all your needs – from the planning, landscaping, architecture to interior design.'} />
                    <DetailsCard image={values.src} title={'Our Values'} description={'Our values is a reflection of our humble beginnings. Our cllents will always come first and our goal is to achieve their objectives.'} />
                
            </div>
        </div>
    );
};

export default OurPhilosophy;