"use client"

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from "@/app/images/logo.png";
import logoWhite from "@/app/images/logo-white.png";
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = <>
        <li><a href='/'>Home</a></li>
        <li><a>Architectural</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a href='/our-team'>Our Team</a></li>
    </>

    return (
        <div className={`navbar fixed ${isScrolled ? 'bg-white border-b border-b-gray-300' : 'transparent border-b text-white'} z-10`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    {
                        isScrolled ? <Image className='h-10 w-10' src={logo} alt="north studio logo" /> : <Image className='h-10 w-10' src={logoWhite} alt="north studio logo" />
                    }
                    <p className={`text-3xl font-extrabold ${isScrolled ? 'text-northSecondaryBlack' : 'text-white'}`}>North Studio </p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
}
