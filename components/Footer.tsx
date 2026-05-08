
"use client"
// src/components/Footer.tsx

import React, { useState } from 'react';
// Assuming 'logo' is correctly imported from your assets folder
// Social icons as specified in your import list for this iteration
import { FaInstagram, FaTiktok, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import '../app/globals.css'
import logo from '../assets/Group 220.png';
import Image from "next/image";
import Toast from './Toast';

// Arrow for the newsletter button (retained from your provided code)
const ArrowIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="tw-h-6 tw-w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');

    // Data for Quick Links, split into two logical columns as per the cropped image
    const quickLinksCol1 = ['IGO', 'LAUNCHPAD', 'STAKING', 'FARMING', 'CRYPTO', 'About US'];
    const quickLinksCol2 = ['DEFI', 'WEB3', 'IEO', 'IDO', 'TOKEN', 'GAMING', 'NFT'];

    // Data for Social Media platforms (as defined in your provided code)
    const socialPlatforms = [
        // { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
        // { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com' },
        // { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com' },
        // { name: 'X (Twitter)', icon: SiX, href: 'https://twitter.com' }, // Using SiX for X.com
        { name: 'Telegram', icon: FaTelegramPlane, href: 'https://t.me/backedbyquantumsuppport' },
    ];

    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            showToastMessage('Please enter an email address', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToastMessage('Email not correct. Please enter a valid email address', 'error');
            return;
        }

        // Email is valid
        showToastMessage('You will get all updates easily on your mail!', 'success');
        setEmail(''); // Clear the input after successful submission
    };

    // Show toast message
    const showToastMessage = (message: string, type: 'success' | 'error') => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
    };

    // Close toast
    const closeToast = () => {
        setShowToast(false);
    };

    return (
        <>
            <Toast
                message={toastMessage}
                type={toastType}
                isVisible={showToast}
                onClose={closeToast}
                duration={5000}
                position="top-right"
            />

            <footer className="tw-bg-[rgb(3,7,18)] tw-text-gray-300 tw-font-sans">
                <div className="tw-container tw-mx-auto tw-max-w-7xl
                          tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 {/* Maintain 4 columns for LG for distribution */}
                          tw-gap-y-12 md:tw-gap-y-16 lg:tw-gap-32 tw-px-[48px]">

                    {/* 1. Branding Section (Column 1) */}
                    {/* On mobile: 1 column. On tablet: 1 column. On desktop: 1 column */}
                    <div className="">
                        <div className="tw-flex tw-items-center tw-mb-6 tw-w-1/2">
                            {/* Logo image imported from your assets */}
                            <Image
                                src={logo}
                                alt="Header Logo"
                                width={48}
                                height={48}
                                className="tw-object-contain"
                            />
                            <span className="tw-text-white tw-text-3xl tw-font-bold tw-ml-3">BACKEDBY <span className="tw-text-green-400">Quantum</span></span>
                        </div>
                        <p className="tw-leading-relaxed tw-mb-8" style={{fontSize:"16px"}}>
                            Welcome to BackedByQuantum, your gateway to the world of Web3 trading! Our user-friendly platform empowers you to explore a wide range of popular cryptocurrencies
                        </p>

                        {/* Social Media Icons with circular background and hover effects */}
                        <div className="tw-flex tw-items-center tw-gap-4">
                            {socialPlatforms.map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${platform.name}`}
                                    className="tw-bg-gray-800 tw-rounded-full tw-px-3 tw-py-3 tw-text-white tw-text-[18px] tw-font-semibold
                               tw-hover:tw-bg-gray-700 tw-hover:tw-text-green-400
                               tw-transition-colors tw-duration-300 tw-flex tw-items-center tw-justify-center tw-gap-2"
                                >
                                    {platform.name}
                                    <platform.icon className="tw-h-5 tw-w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links Column (Column 2) */}
                    {/* On mobile: 1 column. On tablet: 1 column. On desktop: 1 column */}
                    <div className="">
                        <h3 className="tw-text-white tw-text-xl tw-text-center tw-font-bold tw-mb-8">Quick Links</h3>
                        {/* Inner flex container to create two columns for Quick Links links */}
                        <div className="tw-flex tw-flex-row tw-justify-center tw-gap-16">
                            <ul className="tw-space-y-4 tw-list-none"> {/* tw-list-none to remove default bullets */}
                                {quickLinksCol1.map((link) => (
                                    <li>
                                        <a
                                            href={link === 'About US' ? '/about-us' : '/start-boarding'}
                                            className="tw-hover:tw-text-white tw-transition-colors tw-duration-300 tw-text-sm tw-tracking-wider"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="tw-space-y-4 tw-list-none"> {/* tw-list-none to remove default bullets */}
                                {quickLinksCol2.map((link) => (
                                    <li key={link}>
                                        <a href="/start-boarding" className="tw-hover:tw-text-white tw-transition-colors tw-duration-300 tw-text-sm tw-tracking-wider">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 3. Empty Column (Filler for the 4-column grid, if needed, or remove if Quick Links spans) */}
                    {/* This `div` acts as a placeholder or can be omitted if Newsletter spans to fill the 3rd and 4th spots */}
                    {/* For this solution, Newsletter will span, so we don't need an explicit empty div here, 
                but the grid setup will effectively create the visual spacing. */}

                    {/* 4. Newsletter Section (Column 3 & 4 combined on LG screens) */}
                    {/* On mobile: 1 column. On tablet: spans 2 columns. On desktop: spans 2 columns to fill remaining space */}
                    <div className=""> {/* This spans the remaining columns on larger screens */}
                        <h3 className="tw-text-white tw-text-xl tw-font-bold tw-mb-8">Newsletter</h3>
                        <p className="tw-mb-8 tw-leading-relaxed tw-max-w-md" style={{fontSize:"16px"}}>
                            Welcome to BackedByQuantum your gateway to the world of Web3 trading! Our user-friendly platform
                        </p>
                        <form onSubmit={handleSubmit} className="tw-max-w-md">
                            <div className="tw-relative">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email..."
                                    aria-label="Email for newsletter"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="tw-w-full tw-bg-[#1e293b] tw-rounded-full tw-py-4 tw-pl-6 tw-pr-20 tw-text-white tw-placeholder-gray-400 tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500 tw-transition-shadow tw-duration-300"
                                />
                                <div
                                    onClick={handleSubmit}
                                    aria-label="Subscribe to newsletter"
                                    className="tw-absolute tw-right-1.5 tw-top-1 tw-bg-blue-600 tw-rounded-full tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-text-white tw-hover:tw-bg-blue-700 tw-transition-colors tw-duration-300"
                                >
                                    <ArrowIcon />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="tw-border-t tw-border-gray-700 tw-mt-16 tw-pt-8 tw-pb-4 tw-text-center tw-text-gray-400 tw-text-sm">
                    Copyright &copy;2024 <a href='/about-us' className='text-white'>BackedByQuantum</a>. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;