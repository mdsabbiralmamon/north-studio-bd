'use client';

import Banner from '@/components/Shared/Banner/Banner';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaCalendarAlt, FaUser, FaFolderOpen, FaClock, FaDollarSign, FaMapMarkerAlt, FaLink, FaCalendarCheck } from 'react-icons/fa';

interface Project {
    _id: string;
    title: string;
    image: string;
    category: string;
    description: string;
}

const Page = () => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    const { id } = useParams();

    // Function to fetch single project data with a delay
    const fetchProjectData = async () => {
        try {
            // Simulate a 5-second delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await fetch(`/api/projects/single-project?id=${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            const data = await response.json();
            setProject(data.project);
        } catch (error) {
            setError('Failed to fetch project data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch project data when the component mounts
    useEffect(() => {
        if (id) {
            fetchProjectData();
        }
    }, [id]);

    if (loading) {
        return (
            <div>
                <div className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <h2 className='text-5xl text-center font-extrabold'>Loading Project</h2>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <div className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center'>
                    <div className='flex-col justify-center items-center'>
                        <h2 className='text-5xl text-center font-extrabold'>Failed To Load Project...</h2>
                    </div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div>
                <div className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center'>
                    <div className='flex-col justify-center items-center'>
                        <h2 className='text-5xl text-center font-extrabold'>No Project Found...</h2>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* Banner Section */}
            <Banner bannerImg={project.image} banner_title={project.title} />

            {/* Project Details */}
            <div className="max-w-7xl mx-auto my-8 px-4">
                {/* Main Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Image Section */}
                    <div className="col-span-2">
                        <Image src={project.image} alt="Project Image" className="rounded-lg shadow-lg w-full" width={600} height={800} />
                    </div>

                    {/* Details Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className='text-xl font-bold mb-6 text-red-700'>Project Details:</h2>
                        <ul className="space-y-4">
                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaCalendarAlt className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">Start Date:</span>
                                    <span className="text-gray-900">2024-08-28</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaCalendarCheck className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">End Date:</span>
                                    <span className="text-gray-900">2024-08-28</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaUser className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">Client:</span>
                                    <span className="text-gray-900">Calvin Carlo</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaFolderOpen className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">Category:</span>
                                    <span className="text-gray-900">Architecture</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaClock className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">Duration:</span>
                                    <span className="text-gray-900">1 Month</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaDollarSign className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">Estimation:</span>
                                    <span className="text-gray-900">$1350</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">Place:</span>
                                    <span className="text-gray-900">New York, USA</span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center space-x-2">
                                    <FaLink className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-600">URL:</span>
                                    <a href="https://zozothemes.com/" className="text-blue-500">zozothemes.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold text-red-700">We’re Providing Quality Architecture Design</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We approach every project with fresh eyes, tailoring our designs to meet the unique needs and aspirations of our clients. By blending creativity with functionality, we create spaces that are not only visually striking but also highly practical. Our team stays ahead of industry trends, integrating the latest materials, technologies, and sustainable practices to deliver innovative solutions. Quality is in the details. Our meticulous attention to detail ensures that every aspect of the design is carefully considered and executed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
