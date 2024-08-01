import Banner from '@/components/Shared/Banner/Banner'
import React from 'react'
import bannerImg from '@/app/images/sliderImages/interior1.jpg'
import TeamCard from '@/components/Shared/TeamCard/TeamCard'

// team images
import defaultFemale from '@/app/images/team/default-female.jpg';
import defaultMale from '@/app/images/team//deafault-male.png';
import rifat from '@/app/images/team/RIFAT.jpg';
import arafat from '@/app/images/team/Arafat.jpg';
import pranto from '@/app/images/team/PRANTO-2.jpg';
import rithim from '@/app/images/team/RITHIM.jpg';
import orny from '@/app/images/team/Orny.jpg';
import fahmi from '@/app/images/team/Fahmida.jpg';

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
                    <h2 className='customTextBorder p-2 text-3xl font-bold mb-12'>North Studio Managing Directors:</h2>
                    <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-fit mx-auto'>
                        <TeamCard name={'Rifat Ul Zaka Rakib(CEO)'} image={rifat.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Arafat Hossain'} image={arafat.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Najmus Sakib Pranto'} image={pranto.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                    </div>
                    <h2 className='customTextBorder p-2 text-3xl font-bold mt-24 mb-12'>North Studio Core Members:</h2>
                    <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-fit mx-auto'>
                        <TeamCard name={'Rithim Noor'} image={rithim.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Orny Sumaiya'} image={orny.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Rabaya Taposhi Irany'} image={defaultFemale.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Sadin Jerin Anamika'} image={defaultFemale.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Fahmida Marium'} image={fahmi.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Md. Shourov'} image={defaultMale.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                        <TeamCard name={'Tahrafi Sakib Faisal'} image={defaultMale.src} facebook={'#'} instagram={'#'} twitter={'#'} youtube={'#'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
