"use client"

// src/components/YourMoneyYourChoice.tsx
import { useState } from 'react';
import '../app/globals.css'
import btcChart from '../assets/btcChart.png';
import cardImg from '../assets/Card.png';
import cryptoWallets from '../assets/cryptoWallets.png';

// Data structure for each tab and its associated content
const tabSections = [
    {
        id: 'unlock-card',
        tabTitle: 'Unlock Your Card',
        tabIconSrc: 'https://framerusercontent.com/images/uWwXZ19U5VuSza6Zq9ejPTeJm8.svg', // Pie chart icon
        tabIconAlt: 'Pie chart icon for custom reports',
        tabIconBg: 'tw-bg-icon-reports-bg', // Yellow-green background
        contentImageSrc: cardImg, // Statistics image
        contentImageAlt: 'Bar chart showing analytics with income and outcome',
        mainHeading: "Unlock Your Card, Unlock Your Future",
        description: "Gain access to exclusive rewards and financial power. Choose from premium cards designed to elevate your growth, each offering unmatched value and security.",
        listItems: [
            "Black Card – Unlock with $20,000 XLM balance",
            "Silver Card – Unlock with $50,000 XLM balance",
            "Gold Card – Unlock with $100,000 XLM balance"
        ],
    },
    {
        id: 'easy-planner',
        tabTitle: 'Easy-to-use planner',
        tabIconSrc: 'https://framerusercontent.com/images/cEw6mxrAdwl7R5Q4VMGII9KF7tI.svg', // Handshake icon
        tabIconAlt: 'Handshake icon for easy-to-use planner',
        tabIconBg: 'tw-bg-icon-planner-bg', // Cyan background
        // Placeholder image. In a real app, you'd have a specific image for this tab.
        contentImageSrc: btcChart,
        contentImageAlt: 'Financial planning interface',
        mainHeading: "Effortlessly plan your financial strategy.",
        description: "Our intuitive tools help you set clear financial goals, monitor your progress, and adapt to market changes with confidence.",
        listItems: [
            "Intuitive Interface",
            "Flexible Planning Tools",
        ],
    },
    {
        id: 'global-community',
        tabTitle: 'Global community',
        tabIconSrc: 'https://framerusercontent.com/images/SD47MuB1LMDYqpvgOXdi8HsX6E.svg', // Globe icon
        tabIconAlt: 'Globe icon for global community',
        tabIconBg: 'tw-bg-icon-community-bg', // White background
        // Placeholder image. In a real app, you'd have a specific image for this tab.
        contentImageSrc: cryptoWallets,
        contentImageAlt: 'Diverse community members interacting',
        mainHeading: "Connect, learn, and grow with peers.",
        description: "Engage with a diverse, global community of traders and investors. Share insights, gain new perspectives, and enhance your trading journey.",
        listItems: [
            "Expert-Led Discussions",
            "Peer-to-Peer Learning",
        ],
    },
];

// Reusable component for a list item with a checkmark
const CheckListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="tw-flex tw-items-center tw-gap-3">
        <div className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-rounded-full tw-bg-check-black tw-flex tw-items-center tw-justify-center">
            <img
                src="https://framerusercontent.com/images/Y9xGdX9mecp48wwvXVkVvoDnrc.svg" // Checkmark icon
                alt="Green checkmark"
                className="tw-w-4 tw-h-4 tw-object-contain"
            />
        </div>
        <p className="tw-text-white/80 tw-text-base md:tw-text-lg tw-leading-relaxed">
            {text}
        </p>
    </li>
);

/**
 * Main component for the "Your Money...Your Choice" section.
 * Features tab-based content switching with responsiveness and animations.
 */
const YourMoneyYourChoice: React.FC = () => {
    // State to manage the currently active tab
    const [activeTab, setActiveTab] = useState(tabSections[0].id); // Default to the first tab

    // Find the content corresponding to the active tab
    const currentContent = tabSections.find((tab) => tab.id === activeTab);

    return (
        <section className="tw-py-[40px] sm:tw-py-[100px] tw-px-[30px] tw-bg-coiner-super-dark-bg tw-font-sans tw-overflow-hidden">
            <div className="tw-container tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-items-center">
                {/* Section Heading and Description */}
                <div className="tw-text-center tw-mb-8 sm:tw-mb-16 tw-px-4">
                    <h2 className="tw-text-white tw-text-[24px] sm:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-mb-4 tw-leading-tight">
                        Your Money...Your Choice
                    </h2>
                    <p className="tw-text-white/80 tw-text-base sm:tw-text-lg sm:tw-text-xl tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                        Empower yourself with financial freedom. Our platform puts you in charge of your money, enabling confident trading and investment decisions.
                    </p>
                </div>

                {/* Main Content Block: Tabs + Dynamic Content */}
                {/* This div applies the outer gradient border and main dark background */}
                <div className="tw-bg-gradient-to-br tw-from-coiner-gradient-start tw-to-coiner-gradient-end
                        tw-rounded-[40px] tw-p-4 sm:tw-p-6 lg:tw-p-10 tw-w-full">

                    {/* Tab Navigation Area */}
                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mb-8">
                        {tabSections.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tw-flex-1 tw-flex tw-items-center tw-gap-3 tw-px-3 tw-py-2 sm:tw-px-5 sm:tw-py-3 tw-rounded-2xl
                            tw-transition-all tw-duration-300 tw-ease-in-out tw-cursor-pointer
                            ${activeTab === tab.id ? 'tw-bg-coiner-tab-bg-active tw-border-2 tw-border-solid tw-border-yellow-400' : 'tw-bg-transparent tw-border-2 tw-border-solid tw-border-white'}
                            tw-hover:tw-scale-[1.03] tw-hover:tw-shadow-lg tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-coiner-yellow-green`}
                                aria-selected={activeTab === tab.id}
                                role="tab"
                            >
                                {/* Tab Icon */}
                                <div className={`tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-rounded-full ${tab.tabIconBg}`}>
                                    <img src={tab.tabIconSrc} alt={tab.tabIconAlt} className="tw-w-6 tw-h-6 tw-object-contain" />
                                </div>
                                {/* Tab Title */}
                                <h5 className="tw-text-white tw-text-[16px] sm:tw-text-xl tw-font-medium tw-whitespace-nowrap">
                                    {tab.tabTitle}
                                </h5>
                            </div>
                        ))}
                    </div>

                    {/* Dynamic Content Display Area */}
                    {currentContent && (
                        <div
                            key={currentContent.id} // Key changes to force re-render and trigger transition on content switch
                            className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12 tw-items-center
                         tw-transition-opacity tw-duration-500 tw-ease-in-out tw-opacity-100"
                            role="tabpanel"
                            aria-labelledby={`${currentContent.id}-tab`}
                        >
                            {/* Left Side: Content Image */}
                            <div className="tw-flex tw-justify-center lg:tw-justify-start">
                                <div className="tw-w-full tw-max-w-[500px] tw-aspect-[874/614] tw-rounded-2xl tw-overflow-hidden
                                tw-bg-coiner-tab-bg-active tw-p-4 sm:tw-p-6 lg:tw-p-8"> {/* Background color and padding from Framer HTML */}
                                    <img
                                        src={currentContent.contentImageSrc.src}
                                        alt={currentContent.contentImageAlt}
                                        // className="tw-w-full tw-h-full tw-object-contain"
                                        className={`tw-object-contain ${
                                          currentContent.id === 'global-community'
                                            ? 'tw-h-[120%]'
                                            : 'tw-h-full'
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Right Side: Text Content */}
                            <div className="tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-text-center lg:tw-text-left">
                                <h2 className="tw-text-white tw-text-[24px] sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-mb-4 tw-leading-tight">
                                    {currentContent.mainHeading}
                                </h2>
                                <p className="tw-text-white/80 tw-text-base sm:tw-text-lg tw-mb-6 tw-leading-relaxed">
                                    {currentContent.description}
                                </p>
                                <ul className="tw-space-y-4">
                                    {currentContent.listItems.map((item, index) => (
                                        <CheckListItem key={index} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default YourMoneyYourChoice;