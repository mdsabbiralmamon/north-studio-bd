'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Banner from '@/components/Shared/Banner/Banner';
import { 
    FaCalendarAlt, 
    FaUser, 
    FaFolderOpen, 
    FaClock, 
    FaDollarSign, 
    FaMapMarkerAlt, 
    FaLink, 
    FaCalendarCheck 
} from 'react-icons/fa';

interface Project {
    _id: string;
    title: string;
    images: string[];
    category: string;
    description: string;
    startDate: string;
    endDate: string;
    client: string;
    duration: string;
    estimation: number;
    place: string;
    url: string;
}

const Page = () => {
    const { id } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');

    // Function to format date from ISO format to DD/MM/YYYY
    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    };

    // Fetch single project data
    const fetchProjectData = async () => {
        try {
            const response = await fetch(`/api/projects/single-project?id=${id}`);
            if (!response.ok) throw new Error('Failed to fetch project data');
            const data = await response.json();
            setProject(data.project);
        } catch (error) {
            setError('Failed to fetch project data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch project data on component mount
    useEffect(() => {
        if (id) fetchProjectData();
    }, [id]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    if (loading) {
        return (
            <LoadingState message="Loading Project" />
        );
    }

    if (error) {
        return (
            <ErrorState message="Failed To Load Project..." />
        );
    }

    if (!project) {
        return (
            <ErrorState message="No Project Found..." />
        );
    }

    return (
        <div>
            {/* Banner Section */}
            <Banner bannerImg={project.images[0]} banner_title={project.title} />

            {/* Project Details */}
            <div className="max-w-7xl mx-auto my-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Image Section */}
                    <div className="col-span-2">
                        <Image 
                            src={project.images[0]} 
                            alt="Project Image" 
                            className="rounded-lg shadow-lg w-full" 
                            width={800} 
                            height={600} 
                        />
                    </div>

                    {/* Details Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className='text-xl font-bold mb-6 text-red-700'>Project Details:</h2>
                        <ProjectDetails project={project} formatDate={formatDate} />
                    </div>
                </div>

                {/* Description Section */}
                <ProjectDescription project={project} />

                {/* Image Gallery Section */}
                <ImageGallery images={project.images} onImageClick={handleImageClick} />
            </div>

            {/* Fullscreen Modal */}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <Image 
                        src={selectedImage} 
                        alt="Fullscreen Image" 
                        className="object-contain" 
                        width={1200} 
                        height={800} 
                    />
                </Modal>
            )}
        </div>
    );
};

// Loading State Component
const LoadingState = ({ message }: { message: string }) => (
    <div className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center'>
        <h2 className='text-5xl text-center font-extrabold'>{message}</h2>
    </div>
);

// Error State Component
const ErrorState = ({ message }: { message: string }) => (
    <div className='skeleton rounded-none h-[545px] text-gray-400 flex justify-center items-center'>
        <h2 className='text-5xl text-center font-extrabold'>{message}</h2>
    </div>
);

// Project Details Component
const ProjectDetails = ({ project, formatDate }: { project: Project; formatDate: (isoDate: string) => string }) => (
    <ul className="space-y-4">
        {details.map((detail) => (
            <li key={detail.label}>
                <div className="flex items-center space-x-2">
                    {detail.icon}
                    <span className="text-gray-600">{detail.label}:</span>
                    <span className="text-gray-900">{detail.value(project, formatDate)}</span>
                </div>
            </li>
        ))}
    </ul>
);

// Project Details data
const details = [
    {
        label: 'Start Date',
        icon: <FaCalendarAlt className="h-5 w-5 text-gray-500" />,
        value: (project: Project, formatDate: (isoDate: string) => string) => formatDate(project.startDate),
    },
    {
        label: 'End Date',
        icon: <FaCalendarCheck className="h-5 w-5 text-gray-500" />,
        value: (project: Project, formatDate: (isoDate: string) => string) => formatDate(project.endDate),
    },
    {
        label: 'Client',
        icon: <FaUser className="h-5 w-5 text-gray-500" />,
        value: (project: Project) => project.client,
    },
    {
        label: 'Category',
        icon: <FaFolderOpen className="h-5 w-5 text-gray-500" />,
        value: (project: Project) => project.category,
    },
    {
        label: 'Duration',
        icon: <FaClock className="h-5 w-5 text-gray-500" />,
        value: (project: Project) => project.duration,
    },
    {
        label: 'Estimation',
        icon: <FaDollarSign className="h-5 w-5 text-gray-500" />,
        value: (project: Project) => `$${project.estimation}`,
    },
    {
        label: 'Place',
        icon: <FaMapMarkerAlt className="h-5 w-5 text-gray-500" />,
        value: (project: Project) => project.place,
    },
    {
        label: 'URL',
        icon: <FaLink className="h-5 w-5 text-gray-500" />,
        value: (project: Project) => (
            <a href={project.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                {project.url}
            </a>
        ),
    },
];

// Project Description Component
const ProjectDescription = ({ project }: { project: Project }) => (
    <div className="mt-8">
        <h2 className="text-3xl font-semibold text-red-700">{project.title}</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{project.description}</p>
    </div>
);

// Image Gallery Component
const ImageGallery = ({ images, onImageClick }: { images: string[]; onImageClick: (image: string) => void }) => (
    <div className="mt-10">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => onImageClick(image)}>
                    <Image 
                        src={image} 
                        alt={`Project Image ${index + 1}`} 
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" 
                        width={400} 
                        height={300} 
                    />
                </div>
            ))}
        </div>
    </div>
);

// Modal Component
const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
        <div className="relative w-full max-w-4xl p-4">
            <div className="absolute top-0 right-0 p-2">
                <button className="text-white" onClick={onClose}>✖</button>
            </div>
            {children}
        </div>
    </div>
);

export default Page;