import React from 'react';

// TypeCheck
type SkeletonsProps = {
    variant: 'card' | 'circle' | 'rectangle' | 'avatar';
};

const Skeletons: React.FC<SkeletonsProps> = ({ variant }) => {
    switch (variant) {
        case 'card':
            return (
                <div className="flex w-full h-full flex-col gap-4">
                    <div className="skeleton min-h-56 h-full w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            );
        case 'circle':
            return (
                <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
            );
        case 'rectangle':
            return (
                <div className="h-32 bg-gray-300 rounded w-full animate-pulse"></div>
            );
        case 'avatar':
            return (
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                </div>
            );
        default:
            return null;
    }
};

export default Skeletons;
