import Image from 'next/image';
import React from 'react';
import logo from '@/app/images/logo-full.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <div className='flex justify-start items-center'>
                            <Image src={logo.src} alt="North Studio Logo" width={240} height={160} />
                            {/* <h2 className="text-3xl font-extrabold text-nowrap text-northSecondaryBlack">North Studio </h2> */}
                        </div>
                        <p className='my-4'>
                            Explore and connect with the beauty of architectural design and innovation at North Studio. Let us bring your vision to life with creativity and precision.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/northstudio.bd" className="text-blue-500">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.youtube.com/@NorthStudiobd" className="text-red-500">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/northstudio.bd/" className="text-pink-600">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Service Links */}
                    <div>
                        <h3 className="font-bold text-lg text-[#bf1e2e] mb-4">Service</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Interior</a></li>
                            <li><a href="#">Exterior</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Redesign</a></li>
                            <li><a href="#">Consultation</a></li>
                        </ul>

                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="font-bold text-lg text-[#bf1e2e] mb-4">Useful Links</h3>
                        <ul className="space-y-2 ">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg text-[#bf1e2e] mb-4">Contact</h3>
                        <p className=" mb-2">
                            Need help or have a question? Find us at:
                        </p>
                        <p className=" mb-2">
                            <span className="font-semibold">Address:</span> House: 1, Road: 6, Block: L, Bot-Tola, Aftabnagar, Dhaka 1213
                        </p>
                        <p className=" mb-2">
                            <span className="font-semibold">Phone:</span> +880 1609 820 208
                        </p>
                        <p className="">
                            <span className="font-semibold">Email:</span> hr@northstudiobd.com
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-gray-500">
                    © 2023-24 North Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
