import React from 'react';
import './DetailsCard.css';
import Image from 'next/image';

interface DetailsCardProps {
    image: string;
    title: string;
    description: string;
}

const DetailsCard: React.FC<DetailsCardProps> = ({image, title, description}) => {
    return (
            <div className="cards">
                    <a href="#" className="card text-white">
                        <Image src={image} className="card__image" alt="Card Background" width={900} height={900} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                                    <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" fill="var(--surface-color)" />
                                </svg>
                                <div className="card__header-text">
                                    <h3 className="card__title text-xl font-bold">{title}</h3>
                                </div>
                            </div>
                            <p className="card__description text-justify">{description}</p>
                        </div>
                    </a>
            </div>
    )
}

export default DetailsCard;