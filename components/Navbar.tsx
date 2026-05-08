"use client"

import { useState, useRef, useEffect } from "react";
import logo from '../assets/Group 220.png';
import Image from "next/image";
import '../app/globals.css'
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const navItems = [
        "IGO",
        "LAUNCHPAD",
        "STAKING",
        "FARMING",
        "CRYPTO",
        "DEFI",
        "WEB3",
        "IDO",
        "TOKEN",
        "NFT",
    ];

    // Effect to close the mobile menu when a click occurs outside of it
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [isMenuOpen]);

    // NEW: Effect to handle window resize and close mobile menu on desktop sizes
    useEffect(() => {
        const handleResize = () => {
            // Tailwind CSS 'lg' breakpoint is 1024px
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false); // Close the mobile menu if desktop view is active
            }
        };

        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize(); // Important for initial load on desktop sizes

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

    // Handler to close the mobile menu after a navigation link is clicked
    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="tw-relative tw-bg-[#101418] tw-py-4 tw-font-sans tw-z-50">
            <div className="tw-container tw-mx-auto tw-px-4 tw-flex tw-justify-between tw-items-center">
                {/* Logo Section */}
                <a href="/" className="tw-flex tw-items-center">
                    {/* <img
                        src=''
                        alt="BACKEDBY Quantum Logo"
                        className="h-10 sm:h-12"
                    /> */}
                    <Image
                        src={logo}
                        alt="Header Logo"
                        width={48} // ~w-12
                        height={48}
                        className="tw-object-contain"
                        priority
                    />
                    <div className="tw-flex tw-flex-col tw-font-bold tw-leading-tight tw-ml-3 sm:tw-ml-4">
                        <span className="tw-text-gray-300 tw-uppercase tw-text-xs sm:tw-text-base">
                            BACKEDBY
                        </span>
                        <span className="tw-bg-gradient-to-br tw-from-[#00BCD4] tw-to-[#99CC00] tw-text-transparent tw-bg-clip-text text-capitalize tw-text-xl sm:tw-text-2xl">
                            Quantum
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation Links - Hidden on smaller screens */}
                <div className="tw-hidden lg:tw-flex tw-items-center tw-space-x-8 xl:tw-space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            // href={`#${item.toLowerCase()}`}
                            href="/start-boarding"
                            className="tw-text-white/80 tw-hover:tw-text-sky-400 tw-transition-colors tw-duration-300 tw-uppercase tw-text-sm"
                        >
                            {item}
                        </a>
                    ))}

                    {/* Connect Wallet Button */}
                    {/* <a href="/start-boarding" className="tw-bg-blue-700 tw-text-black tw-px-6 tw-py-2 tw-rounded-full tw-font-medium tw-bg-[linear-gradient(99deg,rgb(222,248,76)_0%,rgb(90,223,137)_49.5495%,#36DAE5_100%)] tw-transition-colors tw-duration-300 tw-border-2 tw-border-sky-400">
                        Connect Wallet
                    </a> */}
                    <a
                        // Corrected href from original Framer site to relative path
                        href="/start-boarding"
                        className="tw-px-8 tw-py-3 tw-rounded-full tw-text-[rgb(20,20,20)] tw-font-semibold tw-text-lg
                tw-bg-[linear-gradient(99deg,rgb(222,248,76)_0%,rgb(90,223,137)_49.5495%,#36DAE5_100%)] /* Direct gradient */
                tw-hover:tw-scale-105 tw-transition-transform tw-duration-300 tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap
                tw-w-full sm:tw-w-auto" // Full width on mobile, auto on small screens
                        tabIndex={0}
                    >
                        Connect Wallet
                    </a>
                </div>

                {/* Mobile Hamburger Icon - Visible only on smaller screens */}
                <div className="lg:tw-hidden tw-flex tw-items-center">
                    <div
                        ref={buttonRef}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="tw-text-white focus:tw-outline-none tw-relative tw-w-12 tw-h-6"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        style={{ padding: "8px" }}
                    >
                        {/* Hamburger lines with animation for open/close state */}
                        <span
                            className={`tw-block tw-absolute tw-h-0.5 tw-w-full tw-bg-white tw-transition-all tw-duration-300 tw-ease-in-out ${isMenuOpen ? "tw-rotate-45 tw-translate-y-2.5" : "tw-top-0"
                                }`}
                        ></span>
                        <span
                            className={`tw-block tw-absolute tw-h-0.5 tw-w-full tw-bg-white tw-transition-all tw-duration-300 tw-ease-in-out ${isMenuOpen ? "tw-opacity-0" : "tw-top-1/2 -tw-translate-y-1/2"
                                }`}
                        ></span>
                        <span
                            className={`tw-block tw-absolute tw-h-0.5 tw-w-full tw-bg-white tw-transition-all tw-duration-300 tw-ease-in-out ${isMenuOpen ? "-tw-rotate-45 -tw-translate-y-2.5" : "tw-bottom-0"
                                }`}
                        ></span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Expands/collapses based on isMenuOpen state */}
            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                className={`lg:tw-hidden tw-absolute tw-top-full tw-left-0 tw-w-full tw-bg-gray-900 tw-py-4 tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden ${isMenuOpen ? "tw-max-h-screen tw-opacity-100" : "tw-max-h-0 tw-opacity-0"
                    }`}
            >
                <ul className="tw-flex tw-flex-col tw-items-center tw-space-y-4">
                    {navItems.map((item) => (
                        <li key={`mobile-${item}`}>
                            <a
                                href="/start-boarding"
                                className="tw-block tw-text-white tw-text-lg tw-py-2 tw-hover:tw-text-sky-400 tw-uppercase"
                                onClick={handleNavLinkClick}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/start-boarding" className="tw-bg-[linear-gradient(99deg,rgb(222,248,76)_0%,rgb(90,223,137)_49.5495%,#36DAE5_100%)] tw-text-black tw-px-6 tw-py-2 tw-rounded-full tw-font-medium tw-hover:tw-bg-blue-800 tw-transition-colors tw-duration-300 tw-w-full tw-mt-4 tw-border-2 tw-border-sky-400">
                            Connect Wallet
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;