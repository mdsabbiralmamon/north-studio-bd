import React from 'react';
import Banner from '@/components/Shared/Banner/Banner';
import bannerImg from '@/app/images/sliderImages/exterior1.jpg';
import AboutUs from '@/components/AboutPage/AboutUs';
import OurPhilosophy from '@/components/AboutPage/OurPhilosophy';
import Parallax from '@/components/Shared/Parallax/Parallax';
import { FaHome } from 'react-icons/fa';
import { BsFillHouseAddFill, BsFillHouseGearFill, BsFillPeopleFill } from 'react-icons/bs';
import ClientsQuote from '@/components/AboutPage/ClientsQuote';

export default function Page() {
  return (
    <div>
      <Banner bannerImg={bannerImg} banner_title='ABOUT US' />
      <div className='container mx-auto my-24'>
        <AboutUs />
      </div>
      <div className='container mx-auto my-24'>
        <OurPhilosophy />
      </div>
      <div className='my-24'>
      <Parallax
        backgroundImage={bannerImg.src}
        info1={{ icon: <FaHome className='text-8xl' />, count: '750', title: 'Home Interior renovations' }}
        info2={{ icon: <BsFillHouseGearFill className='text-8xl' />, count: '300', title: 'House re-modelling' }}
        info3={{ icon: <BsFillHouseAddFill className='text-8xl' />, count: '120', title: 'Commercial rentals' }}
        info4={{ icon: <BsFillPeopleFill className='text-8xl' />, count: '1000', title: 'Happy Clients' }}
      />
      </div>
      <div className='my-24'>
        <ClientsQuote />
      </div>
    </div>
  );
}
