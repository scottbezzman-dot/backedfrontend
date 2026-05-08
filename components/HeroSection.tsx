"use client"

import React from 'react';
import '../app/globals.css';
import cryptoDevices from '../assets/cryptoDevice.png';
import Image from 'next/image';
import xrpLogo from '../assets/xrp-logo.png';
import tetherLogo from '../assets/tether.png';

const HeroHeader: React.FC = () => {
    return (
        <section className="tw-relative tw-overflow-hidden
                        tw-py-8 sm:tw-py-24 xl:tw-pb-[100px] /* Responsive vertical padding */
                        tw-min-h-screen tw-flex tw-items-center tw-justify-center /* Center content vertically if space allows */
                        tw-bg-[#101418] tw-text-white">

            {/* Background Pattern - Uses CDN image */}
            {/* Original HTML had multiple hidden variants for bg pattern for different screen sizes.
          For Tailwind, we can use one image and let CSS handle scaling, or define responsive visibility/sizing.
          Using a single image with object-cover and opacity for a subtle background. */}
            <div className="tw-absolute tw-inset-0 -tw-z-10 tw-opacity-30">
                <img
                    decoding="async"
                    src="https://framerusercontent.com/images/ZoO46Q0SHYWPmETAlOKdYbmEktE.png"
                    alt="bg pattern"
                    // object-cover ensures it covers the area, w-full h-full makes it fill its parent.
                    className="tw-w-full tw-h-full tw-object-cover"
                />
            </div>

            {/* Main Container - max-width and horizontal padding */}
            {/* This div acts as the main content wrapper, centering everything horizontally */}
            <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-relative tw-z-10">
                {/* Content full wrap - flex column, items centered for all screens */}
                <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
                    {/* Content block for text */}
                    <div className="tw-max-w-4xl tw-px-4"> {/* max-w limits width, px-4 provides internal padding */}
                        {/* Display Text */}
                        <div className="tw-mb-4"> {/* Responsive bottom margin for heading */}
                            <h1
                                className="tw-text-[24px] sm:tw-text-6xl md:tw-text-6xl lg:tw-text-7xl xl:tw-text-7xl 
             tw-font-bold  tw-leading-tight tw-tracking-tight tw-text-center tw-text-white "
                            >
                                Trusted Secure <span className="tw-text-[rgb(90,223,137)]">Web3</span> Crypto Exchange
                            </h1>

                        </div>
                        {/* Context paragraph */}
                        <div className="tw-mb-10 sm:tw-mb-12 md:tw-mb-16 lg:tw-mb-20"> {/* Responsive bottom margin for paragraph */}
                            <p className="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-white tw-max-w-2xl tw-mx-auto">
                                Experience peace of mind with our trusted and secure Web3 crypto exchange. Safeguard your assets
                                and embrace seamless transactions in the decentralized world. Join us for a worry-free trading
                            </p>
                        </div>
                    </div>

                    {/* Button Wrap - Stack on mobile, row on small screens and up, with responsive gap */}
                    <div className="tw-flex tw-flex-row tw-gap-2 sm:tw-gap-6 md:tw-gap-8
                          tw-mb-4 sm:tw-mb-16"> {/* Responsive bottom margin for button group */}
                        {/* Primary Gradient Button */}
                        <a
                            // Corrected href from original Framer site to relative path
                            href="/start-boarding"
                            className="tw-px-4 tw-py-2 sm:tw-px-8 sm:tw-py-3 tw-rounded-full tw-text-[rgb(20,20,20)] tw-font-semibold tw-text-lg
                tw-bg-[linear-gradient(99deg,rgb(222,248,76)_0%,rgb(90,223,137)_49.5495%,#36DAE5_100%)] /* Direct gradient */
                tw-hover:tw-scale-105 tw-transition-transform tw-duration-300 tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap
                tw-w-full sm:tw-w-auto" // Full width on mobile, auto on small screens
                            tabIndex={0}
                        >
                            Get Started
                        </a>

                        {/* Primary-Arrow1 Button */}
                        <a
                            // Corrected href from original Framer site to relative path
                            href="/start-boarding"
                            className="tw-px-4 tw-py-2 sm:tw-px-8 sm:tw-py-3 tw-rounded-full tw-text-white tw-font-semibold tw-text-lg
                tw-relative tw-group tw-inline-flex tw-items-center tw-justify-center tw-gap-2 /* group for hover, gap for text & icon */
                tw-border-[1.5px] tw-border-solid tw-border-[rgba(222,247,77,0.6)] /* Custom  */
                tw-bg-transparent tw-hover:tw-bg-gray-800 tw-transition-colors tw-duration-300 tw-whitespace-nowrap
                tw-w-full sm:tw-w-auto" // Full width on mobile, auto on small screens
                            tabIndex={0}
                        >
                            Explore
                            {/* Arrow icon and its background */}
                            <div className="tw-relative tw-w-8 tw-h-8 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-overflow-hidden
                tw-bg-[linear-gradient(128deg,rgb(222,248,76)_0%,rgb(33,212,225)_100%)]">
                                {/* Explore button arrow - Uses CDN image */}
                                <img
                                    decoding="async"
                                    src="https://framerusercontent.com/images/ngy1IpEcsZnZ2Mo0jrOre8Wk8.svg"
                                    alt="arrow icon"
                                    className="tw-w-4 tw-h-4 tw-object-contain tw-z-10"
                                />
                                {/* Arrow back (hover effect) */}
                                {/* This element expands on hover to create the "arrow back" effect */}
                                <div className="tw-absolute tw-inset-0 tw-rounded-full tw-bg-[rgba(222,248,76,0.44)] tw-scale-0 tw-group-hover:tw-scale-100 tw-transition-transform tw-duration-300 tw-origin-center"></div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Image wrap (Main Dashboard Image) - Uses CDN image */}
                {/* The original HTML had multiple SSR variants for this image; a single responsive img tag is usually sufficient with modern img attributes */}
                <div className="tw-relative tw-w-full tw-max-w-6xl tw-mx-auto tw-z-0 tw-mt-12 md:tw-mt-0"> {/* Relative for potential internal absolute positioning, max-w to control size, mx-auto to center, z-0 to stack correctly */}
                    <div className='tw-relative tw-w-full tw-h-auto'>
                      <Image 
                        src={cryptoDevices}
                        alt='statistics dashboard desktop'
                        style={{width: '100%', height: 'auto'}}
                      />
                    </div>
                </div>

                {/* Floating Crypto Icons - Positioned absolutely relative to the main container (div.container).
            Visibility controlled by breakpoints to avoid clutter on small screens.
            Sizes scale with breakpoints. Exact percentages might need fine-tuning
            based on your specific design goals and screen sizes.
            Animation classes added for visual flair. */}

                {/* Bitcoin (top-left) */}
                <div className="tw-absolute tw-top-[20%] tw-left-[5%]
                        tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 lg:tw-w-24 lg:tw-h-24
                        tw-animate-pulse tw-hidden md:tw-block"> {/* Hide on extra small screens */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/3ZdkAjBRU7fZ49d9ktystzLkU.svg"
                        alt="bitcoin icon"
                        className="tw-w-full tw-h-full tw-object-contain"
                    />
                </div>

                {/* Bitcoin Diamond 1 (top-right) */}
                <div className="tw-absolute tw-top-[10%] tw-right-[10%]
                        tw-w-12 tw-h-12 md:tw-w-16 md:tw-h-16 lg:tw-w-20 lg:tw-h-20
                        tw-animate-bounce tw-hidden md:tw-block" style={{ animationDuration: '3s' }}>
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/g7SkHIIZZrXE1QZOOweIJSPsVeU.svg"
                        alt="bitcoin diamond icon"
                        className="tw-w-full tw-h-full tw-object-contain"
                    />
                </div>

                {/* Bitcoin Diamond 2 (bottom-left) */}
                <div className="tw-absolute tw-top-[10%] tw-right-[1%]
                        tw-w-10 tw-h-10 md:tw-w-14 md:tw-h-14 lg:tw-w-18 lg:tw-h-18
                        tw-animate-pulse tw-hidden lg:tw-block" style={{ animationDelay: '0.5s' }}> {/* Hide on md screens and below */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/wDarZl4QiJ3qIRKVkEVluE0yE.svg"
                        alt="bitcoin diamond icon"
                        className="tw-w-full tw-h-full tw-object-contain"
                    />
                </div>

                {/* Bitcoin T (large, top-right of image) */}
                <div className="tw-absolute tw-top-1/4 tw-right-[5%]
                        tw-w-24 tw-h-24 md:tw-w-32 md:tw-h-32 lg:tw-w-40 lg:tw-h-40
                        tw-animate-spin-slow tw-hidden md:tw-block"> {/* Hide on extra small screens */}
                    {/* <img
                        decoding="async"
                        src="https://framerusercontent.com/images/ESqyW6qXru2MvWsGvcdZsAVvko.svg"
                        alt="bitcoin T icon"
                        className="tw-w-full tw-h-full tw-object-contain"
                    /> */}
                        <Image 
                            src={tetherLogo}
                            alt='tether'
                            style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                        />
                </div>

                {/* Bitcoin T (small, bottom-right) */}
                <div className="tw-absolute tw-top-[-10%] tw-left-[5%] /* Adjusted from original bottom-left for layout variety */
                        tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 lg:tw-w-24 lg:tw-h-24
                        tw-animate-spin-slow tw-hidden md:tw-block" style={{ animationDelay: '0.2s' }}> {/* Hide on extra small screens */}
                    <img
                        decoding="async"
                        src="https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg"
                        alt="bitcoin t icon"
                        className="tw-w-full tw-h-full tw-object-contain"
                    />
                </div>

                <div className="tw-absolute tw-top-[40%] tw-left-[7%] /* Adjusted from original bottom-left for layout variety */
                        tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 lg:tw-w-24 lg:tw-h-24
                        tw-animate-spin-slow tw-hidden md:tw-block" style={{ animationDelay: '0.2s' }}>
                        <Image 
                            src={xrpLogo}
                            alt='xrp'
                            style={{width: '100%', height: '100%', objectFit: 'contain'}}
                        />
                </div>
            </div>
        </section>
    );
};

export default HeroHeader;