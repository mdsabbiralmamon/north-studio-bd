import Banner from '@/components/Shared/Banner/Banner';
import React from 'react';
import bannerImg from '@/app/images/sliderImages/building1.jpg';


const page = () => {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title='PORTFOLIO' />
            <div>
                <p className='max-w-xl mx-auto my-24 text-center'>Our Projects harness design and technology to create places where
                    people live, work, and heal.</p>

                <div className="container mx-auto p-4">
                    {/* <!-- Filter Buttons --> */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">All</button>
                        <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">Sustainable</button>
                        <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">Interior</button>
                        <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">Architecture</button>
                    </div>

                    {/* <!-- Grid of Projects --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <!-- Example Project Item --> */}
                        <div className="relative group">
                            <img src={bannerImg.src} alt="Project Image" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-green-500 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="font-bold">Vanguard Residential</span>
                                    <button className="mt-2 underline">Start a Project</button>
                                </div>
                        </div>
                        <div className="relative group">
                            <img src={bannerImg.src} alt="Project Image" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-green-500 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="font-bold">Vanguard Residential</span>
                                    <button className="mt-2 underline">Start a Project</button>
                                </div>
                        </div>
                        <div className="relative group">
                            <img src={bannerImg.src} alt="Project Image" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-green-500 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="font-bold">Vanguard Residential</span>
                                    <button className="mt-2 underline">Start a Project</button>
                                </div>
                        </div>
                        <div className="relative group">
                            <img src={bannerImg.src} alt="Project Image" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-green-500 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="font-bold">Vanguard Residential</span>
                                    <button className="mt-2 underline">Start a Project</button>
                                </div>
                        </div>
                        {/* <!-- Repeat for other items --> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;