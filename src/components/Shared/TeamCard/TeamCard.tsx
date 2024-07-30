import React from 'react';
import './TeamCard.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

interface TeamCardProps {
    name: string;
    image: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, image, facebook, instagram, twitter, youtube }) => {
    return (
        <div>
            <div className="image-area">
                <div className="img-wrapper">
                    <Image src={image} alt={name} width={700} height={700} />
                    <h2>{name}</h2>
                    <ul>
                        {facebook && (
                            <li>
                                <a href={facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='text-3xl inline-flex justify-center items-center' />
                                </a>
                            </li>
                        )}
                        {instagram && (
                            <li>
                                <a href={instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='text-3xl inline-flex justify-center items-center' />
                                </a>
                            </li>
                        )}
                        {twitter && (
                            <li>
                                <a href={twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className='text-3xl inline-flex justify-center items-center' />
                                </a>
                            </li>
                        )}
                        {youtube && (
                            <li>
                                <a href={youtube} target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className='text-3xl inline-flex justify-center items-center' />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
