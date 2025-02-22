"use client"

import React, { useState, useEffect } from 'react';
import logo from "@/app/images/logo-full.png";
import logoWhite from "@/app/images/logo-full-white.png";
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && lastScrollTop < 500) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
            setLastScrollTop(scrollTop);
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const navLinks = <>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/portfolio'>Portfolio</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/our-team'>Our Team</a></li>
    </>

    return (
        <div className={`navbar z-10 shadow-lg ${isScrolled ? 'navbar-fixed bg-white' : 'fixed top-0 text-white'} ${!isVisible ? 'navbar-hidden' : ''}`}>
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
                        isScrolled ? <Image className='h-10 w-full' src={logo} alt="north studio logo" /> : <Image className='h-10 w-full' src={logoWhite} alt="north studio logo" />
                    }
                    {/* <p className={`text-3xl font-extrabold text-nowrap ${isScrolled ? 'text-northSecondaryBlack' : 'text-white'}`}>North Studio </p> */}
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

            </div>
        </div>
    );
}
