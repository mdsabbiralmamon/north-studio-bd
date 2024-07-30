import Banner from '@/components/Shared/Banner/Banner'
import React from 'react'
import bannerImg from '@/app/images/sliderImages/interior1.jpg'

export default function page() {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='OUR TEAM' />
            <div className='container mx-auto '>
                <div className='my-24 text-center'>
                    <h2 className='customTextBorder p-2 text-5xl font-bold'>Meet Our Team</h2>
                    <p className='text-base font-normal lowercase first-letter:uppercase max-w-2xl mx-auto my-4'>We are a team of Architects, Planners, Creatives and forward-thinking individuals.</p>
                </div>
                <div className='my-24'>
                    
                </div>
            </div>
        </div>
    )
}
