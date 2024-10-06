import React from 'react';
import bannerImg from '@/app/images/sliderImages/design1.jpg';
import Banner from '@/components/Shared/Banner/Banner';
import placeholderImage from '@/app/images/sliderImages/design1.jpg';
import Image from 'next/image';

const page = () => {
    return (
        <>
        <Banner bannerImg={bannerImg} banner_title='CONTACT US' />
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Side: Image */}
                <div className="relative hidden md:block">
                    <Image
                        src={placeholderImage.src}
                        alt="Building"
                        className="object-cover h-full w-full rounded-lg"
                        width={600}
                        height={800}
                    />
                    <button className="absolute bottom-10 left-10 bg-white text-gray-800 py-2 px-6 rounded-full shadow-lg">
                        Reach Out To Us
                    </button>
                </div>
                
                {/* Right Side: Form */}
                <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Let’s Get In Touch.
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Or just reach out manually to <a href="mailto:hr@northstudiobd.com" className="text-[#bf1e2e]">hr@northstudiobd.com</a>.
                    </p>

                    <form action="#" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name..."
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#bf1e2e] focus:border-[#bf1e2e]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name..."
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#bf1e2e] focus:border-[#bf1e2e]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#bf1e2e] focus:border-[#bf1e2e]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+44 (000) 000-0000"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#bf1e2e] focus:border-[#bf1e2e]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Enter your main text here..."
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#bf1e2e] focus:border-[#bf1e2e]"
                                rows={4}
                            ></textarea>
                            <p className="text-sm text-gray-500 text-right mt-1">300/300</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#bf1e2e] text-white py-3 rounded-md shadow-lg hover:bg-[#a71825]"
                        >
                            Submit Form →
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default page;