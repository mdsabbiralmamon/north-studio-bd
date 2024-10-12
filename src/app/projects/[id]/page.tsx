'use client';

import Banner from '@/components/Shared/Banner/Banner';
import React, { useEffect, useState } from 'react';
import errorProject from '@/app/images/error-project-loading.gif';
import Image from 'next/image';
import { useParams } from 'next/navigation';

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
            <h2 className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center text-5xl font-extrabold'>Loading Project...</h2>
        );
    }

    if (error) {
        return (
            <div>
                <div className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center'>
                    <div className='flex-col justify-center items-center'>
                        <h2 className='text-5xl font-extrabold'>Failed To Load Project...</h2>
                        <Image src={errorProject} alt="Error Loading Project" className='mx-auto h-20 w-20' />
                    </div>
                </div>
            </div>
        );
    }

    if (!project) {
        return <div>No project found.</div>; // Handle case where no project data is found
    }

    return (
        <div>
            {/* Banner Section */}
            <Banner bannerImg={project.image} banner_title={project.title} />

            {/* Project Details */}
            <div className="max-w-2xl mx-auto mt-10">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <img src={project.image} alt={project.title} className="mt-4 w-full h-auto" />
                <p className="mt-4">Category: {project.category}</p>
                <p className="mt-4">{project.description}</p>
                {/* Render other project details here */}
            </div>
        </div>
    );
};

export default Page;
