import React from 'react';
import aboutHeroImg from '@/app/images/about/hero-banner.jpg';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div>
            <h2 className='customTextBorder p-2 text-5xl font-bold mb-8'>About</h2>
            <p>Founded in 2015, the goal of North Studio Ltd. is to create a sophisticated and authentic environment.</p>
            <Image className='w-full my-8' src={aboutHeroImg} alt='about hero image' />
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
                <p>We are a team of creative and forward-thinking individuals whose goal is to make each client{"'"}s vision a reality. We partner and collaborate with a architects, planners, designers, landscapers, etc to ensure success in each process throughout the duration of the project.</p>

                <p>It is our practice to be with our clients every step of the way from creating the blueprints, the designing, the budget to “putting everything together”. We ensure that we deliver exceptional spaces, while adhering to client{"'"}s affordability and timeline. We ensure that our approach aligns with our client{"'"}s objectives.</p>
            </div>
        </div>
    );
};

export default AboutUs;