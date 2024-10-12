'use client';

import Banner from '@/components/Shared/Banner/Banner';
import React, { useEffect, useState } from 'react';
import bannerImg from '@/app/images/sliderImages/interior1.jpg';
import Skeletons from '@/components/Shared/Skeletons/Skeletons';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [projects, setProjects] = useState<{ _id: number; images: string[]; title: string; category: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reloading, setReloading] = useState(false);
  const [heightClasses, setHeightClasses] = useState<string[]>([]); // New state for height classes
  const [skeletonHeightClasses, setSkeletonHeightClasses] = useState<string[]>([]); // New state for skeleton height classes

  // Skeleton array to show skeleton cards while loading
  const skeletonArray = Array.from({ length: 9 }, (_, index) => `Item ${index + 1}`);

  // Function to fetch projects with a 5-second delay
  const fetchProjects = async () => {
    setLoading(true); // Start loading state
    setError(''); // Reset any previous errors

    // Create a controller to handle fetch timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout after 10 seconds

    try {
      // Simulate delay before fetching
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Fetch data from API
      const response = await fetch('/api/projects', { signal: controller.signal });
      if (!response.ok) {
        throw new Error('Failed to fetch projects. Please try again.');
      }

      const data = await response.json();

      // Check if data is valid and contains the projects array
      if (data.projectsData && Array.isArray(data.projectsData)) {
        setProjects(data.projectsData); // Update state with fetched projects
      } else {
        throw new Error('Invalid data format received from server.');
      }

      setLoading(false); // Stop loading
    } catch (error) {
      setError('Failed to Load Projects. Please try again.'); // Set error message
      setLoading(false); // Stop loading even if there's an error
    } finally {
      clearTimeout(timeoutId); // Clear timeout
    }
  };

  // Function to reload projects (called when "Reload Projects" button is clicked)
  const reloadProjects = async () => {
    setReloading(true); // Start reloading animation
    await fetchProjects(); // Fetch projects with a 5-second delay
    setReloading(false); // Stop reloading animation
  };

  // Automatically fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Generate random height classes for projects after fetching
  useEffect(() => {
    if (projects.length > 0) {
      const randomHeightClasses = projects.map(() => getRandomHeightClass());
      setHeightClasses(randomHeightClasses);
    }
  }, [projects]);

  // Generate random height classes for skeletons before rendering
  useEffect(() => {
    const randomSkeletonHeightClasses = skeletonArray.map(() => getRandomHeightClass());
    setSkeletonHeightClasses(randomSkeletonHeightClasses);
  }, []);

  // Helper function to get random height class for masonry grid effect
  const getRandomHeightClass = (): string => {
    const heightClasses: string[] = ['row-span-1', 'row-span-2'];
    return heightClasses[Math.floor(Math.random() * heightClasses.length)];
  };

  return (
    <div>
      {/* Banner Section */}
      <Banner bannerImg={bannerImg} banner_title="PORTFOLIO" />

      {/* Introduction Text */}
      <div>
        <p className="max-w-xl mx-auto my-24 text-center">
          Our Projects harness design and technology to create places where people live, work, and heal.
        </p>

        {/* Projects Section */}
        <div className="container mx-auto">
          {/* Filter Buttons */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="customLine"></div>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">
              All
            </button>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">
              Exterior
            </button>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">
              Interior
            </button>
            <button className="text-gray-500 hover:text-gray-900 focus:text-gray-900 border-b-2 border-transparent focus:border-green-500">
              Animation
            </button>
            <div className="customLine"></div>
          </div>

          {/* Grid of Projects or Error/Reload Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {loading ? (
              // Show skeleton loading cards while fetching data
              skeletonArray.map((_, index) => (
                <div key={index} className={`relative group ${skeletonHeightClasses[index]}`}>
                  <Skeletons variant="card" />
                </div>
              ))
            ) : error ? (
              // Display error message and Reload button if there's an error
              <div className="flex col-span-3 justify-center items-center h-4/5">
                <div className="text-center">
                  <p>{error}</p>
                  <button
                    onClick={reloadProjects}
                    className="p-2 bg-red-700 text-white rounded mt-4"
                    disabled={reloading} // Disable button while reloading
                  >
                    {reloading ? (
                      <div className="flex items-center justify-center">
                        <span>Fetching...</span>
                        <div className="ml-2 border-4 border-t-4 border-white border-opacity-25 rounded-full w-5 h-5 animate-spin"></div>
                      </div>
                    ) : (
                      'Reload Projects'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              // Display fetched projects after data is loaded
              projects.map((project, index) => (
                <div key={project._id} className={`relative group rounded-lg shadow-lg ${heightClasses[index]}`}>
                  <Image src={project.images[0]} alt={project.title} className="w-full h-full object-cover rounded-lg" width={800} height={800} />
                  <div className="absolute rounded-b-lg bottom-0 left-0 w-full p-4 bg-red-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className=' flex justify-between items-center'>
                      <h2 className="font-bold">{project.title}</h2>
                      <Link href={`/projects/${project._id}`} className="mt-2 underline">View Details</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
