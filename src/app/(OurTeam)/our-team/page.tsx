import Banner from '@/components/Shared/Banner/Banner';
import React from 'react';
import bannerImg from '@/app/images/sliderImages/interior1.jpg';

export default function page() {
    return (
        <div>
            <Banner bannerImg={bannerImg} banner_title="OUR TEAM" />
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="my-24 text-center">
                    <h2 className="customTextBorder p-2 text-6xl font-extrabold text-gray-900">
                        Meet Our Team
                    </h2>
                    <p className="text-lg lg:text-xl font-medium text-gray-800 max-w-2xl mx-auto my-6">
                        We are a team of Architects, Interior Architects, and creative thinkers, focused on designing innovative and functional spaces that inspire.
                    </p>
                </div>

                {/* Partners Section */}
                <div className="my-24">
                    <h2 className="customTextBorder p-2 text-4xl font-bold text-gray-900 mb-12">
                        Partners
                    </h2>
                    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Rifat Ul Zaka Rakib</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Arafat Hossain</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Najmus Sakib Pranto</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Sadia Islam Mumu</p>
                    </div>

                    {/* Core Members Section */}
                    <h2 className="customTextBorder p-2 text-4xl font-bold text-gray-900 mt-24 mb-12">
                        Core Members
                    </h2>
                    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Sania Akter</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Rabaya Taposhi Irany</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Sadin Jerin Anamika</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Rithim Noor</p>
                    </div>

                    {/* Away Members Section */}
                    <h2 className="customTextBorder p-2 text-4xl font-bold text-gray-900 mt-24 mb-12">
                        Away but Always Our Family Member
                    </h2>
                    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Orny Sumaiya</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Fahmida Marium</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Tahrafi Sakib Faisal</p>
                        <p className="text-xl font-semibold text-gray-700 hover:text-black">Mahmudun Nabi Sourav</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
