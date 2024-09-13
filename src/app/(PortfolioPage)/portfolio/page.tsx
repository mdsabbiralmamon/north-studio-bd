'use client';

import Banner from '@/components/Shared/Banner/Banner';
import React, { useEffect, useState } from 'react';
import bannerImg from '@/app/images/sliderImages/interior1.jpg'

const Page = () => {
  // State to store fetched project data
  const [projects, setProjects] = useState<{ id: number; image: string; title: string; category: string }[]>([]);

  // Fetch project data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Generate a random height class for each project item
  const getRandomHeightClass = (): string => {
    const heightClasses: string[] = ['row-span-1', 'row-span-2'];
    return heightClasses[Math.floor(Math.random() * heightClasses.length)];
  };

  return (
    <div>
      <Banner bannerImg={bannerImg} banner_title='PORTFOLIO' />
      <div>
        <p className='max-w-xl mx-auto my-24 text-center'>
          Our Projects harness design and technology to create places where people live, work, and heal.
        </p>

        <div className="container mx-auto">
          {/* <!-- Filter Buttons --> */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className='customLine'></div>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">All</button>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">Exterior</button>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">Interior</button>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">Architecture</button>
            <div className='customLine'></div>
          </div>

          {/* <!-- Grid of Projects --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {projects.map((project) => (
              <div key={project.id} className={`relative group ${getRandomHeightClass()}`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-green-500 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-bold">{project.category}</span>
                  <button className="mt-2 underline">Start a Project</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
