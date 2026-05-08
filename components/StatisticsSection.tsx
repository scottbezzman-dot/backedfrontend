"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import '../app/globals.css'

// =======================================================================
// IMPORTANT: REPLACE THESE PLACEHOLDER CDN URLs WITH YOUR ACTUAL IMAGE URLs
// You will need to create/upload these specific images to your CDN.
// - Crypto Icons (SVG or PNG)
// - Graph Images (PNG)
// =======================================================================
const BITCOIN_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/bitcoin-icon.png";
const ETHEREUM_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/ethereum-icon.png";
const LITECOIN_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/litecoin-icon.png";
const BINANCE_ICON_CDN_URL =
    "https://your-cdn-domain.com/images/binance-icon.png";

const GRAPH_GROWTH_UP_CDN_URL =
    "https://your-cdn-domain.com/images/growth-graph-up.png"; // Example for up-trend graph
const GRAPH_GROWTH_DOWN_CDN_URL =
    "https://your-cdn-domain.com/images/growth-graph-down.png"; // Example for down-trend graph
const GRAPH_BALANCE_CDN_URL =
    "https://your-cdn-domain.com/images/balance-graph.png"; // Graph for 'Your Balance' card
// =======================================================================

// Framer Motion Variants for animations
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15, // Stagger children elements
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

// Reusable Statistic Item Component
interface StatisticItemProps {
    value: string;
    label: string;
    isGreen?: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
    value,
    label,
    isGreen = false,
}) => (
    <motion.div
        variants={itemVariants}
        className="tw-border-b tw-border-gray-800 tw-pb-4 last:tw-border-b-0 last:tw-pb-0"
    >
        <p
            className={`tw-text-4xl tw-font-extrabold ${isGreen ? "tw-text-coiner-green" : "tw-text-white"
                } tw-mb-1`}
        >
            {value}
        </p>
        <p className="tw-text-light-text tw-text-base sm:tw-text-lg">{label}</p>
    </motion.div>
);

const StatisticsSection: React.FC = () => {
    return (
        <motion.section
            className="tw-bg-dark-background tw-text-white tw-py-8 sm:tw-py-20 lg:tw-py-24 tw-px-4 tw-font-inter tw-overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Animate when 30% of section is visible
            variants={sectionVariants}
        >
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 sm:tw-gap-12 lg:tw-gap-16 tw-items-center">
                {/* Left Content Block */}
                <div className="tw-flex tw-flex-col tw-text-center lg:tw-text-left">
                    <motion.h2
                        variants={itemVariants}
                        className="tw-text-[24px] sm:tw-text-5xl lg:tw-text-6xl tw-font-extrabold tw-leading-tight tw-mb-6"
                    >
                        Our statistics over the years
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="tw-text-base sm:tw-text-xl tw-text-light-text tw-mb-12 tw-max-w-xl tw-mx-auto lg:tw-mx-0"
                    >
                        Follow our remarkable growth journey over the years through
                        comprehensive statistics, reflecting our unwavering dedication to
                        excellence and customer satisfaction.
                    </motion.p>

                    <div className="tw-grid tw-grid-cols-2 tw-gap-y-8 sm:tw-gap-y-12 sm:tw-gap-x-8 tw-text-center lg:tw-text-left">
                        <StatisticItem value="250+" label="Happy Clients" />
                        <StatisticItem
                            value="90%"
                            label="Customer Satisfaction"
                            // isGreen={true}
                        />
                        <StatisticItem
                            value="5k"
                            label="Successful Project"
                            // isGreen={true}
                        />
                        <StatisticItem value="100%" label="Security Certification" />
                    </div>
                </div>

                {/* Right Visual Block - Crypto Cards */}
                <div className="tw-relative tw-w-full tw-h-[350px] sm:tw-h-[400px] lg:tw-h-[600px] tw-flex tw-justify-center tw-items-center">
                    {/* Large Card (Bitcoin, Ethereum, Litecoin, Binance) */}
                    <motion.div
                        variants={cardVariants}
                        className="tw-absolute tw-bg-card-bg tw-rounded-3xl tw-p-6 sm:tw-p-8 tw-w-[85%] tw-max-w-[420px] tw-shadow-2xl tw-z-10
                       -tw-rotate-6 tw-translate-x-4 -tw-translate-y-4 lg:tw-rotate-12 lg:tw-translate-x-12 lg:tw-translate-y-8"
                        style={{ originX: 0.5, originY: 0.5 }} // Center origin for rotation
                    >
                        {/* Bitcoin Row */}
                        <div className="tw-flex tw-items-center tw-justify-between tw-pb-4 tw-mb-4 tw-border-b tw-border-gray-200">
                            <div className="tw-flex tw-items-center">
                                {/* <img
                                    src={BITCOIN_ICON_CDN_URL}
                                    alt="Bitcoin"
                                    className="w-8 h-8 mr-3 rounded-full"
                                /> */}
                                <span className="tw-font-semibold tw-text-dark-text tw-text-lg">
                                    Bitcoin <span className="tw-text-gray-500 tw-text-sm">BTC</span>
                                </span>
                            </div>
                            <div className="tw-flex tw-items-center tw-text-coiner-green tw-font-medium">
                                6.5%
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="tw-h-4 tw-w-4 tw-ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Ethereum Row */}
                        <div className="tw-pb-4 tw-mb-4 tw-border-b tw-border-gray-200">
                            <div className="tw-flex tw-items-center tw-justify-between tw-mb-2">
                                <div className="tw-flex tw-items-center">
                                    {/* <img
                                        src={ETHEREUM_ICON_CDN_URL}
                                        alt="Ethereum"
                                        className="w-8 h-8 mr-3 rounded-full"
                                    /> */}
                                    <span className="tw-font-semibold tw-text-dark-text tw-text-lg">
                                        Ethereum <span className="tw-text-gray-500 tw-text-sm">ETH</span>
                                    </span>
                                </div>
                                <div className="tw-flex tw-items-center tw-text-coiner-green tw-font-medium">
                                    3.4%
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="tw-h-4 tw-w-4 tw-ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="tw-text-gray-500 tw-text-sm tw-mb-2">Price</p>
                            <div className="tw-flex tw-items-center tw-justify-between">
                                <p className="tw-text-dark-text tw-text-2xl tw-font-bold">
                                    $ 170,892.90
                                </p>
                                {/* <img
                                    src={GRAPH_GROWTH_UP_CDN_URL}
                                    alt="Growth Graph"
                                    className="tw-h-10 tw-w-24"
                                /> */}
                            </div>
                        </div>

                        {/* Litecoin Row */}
                        <div className="tw-flex tw-items-center tw-justify-between tw-pb-4 tw-mb-4 tw-border-b tw-border-gray-200">
                            <div className="tw-flex tw-items-center">
                                {/* <img
                                    src={LITECOIN_ICON_CDN_URL}
                                    alt="Litecoin"
                                    className="w-8 h-8 mr-3 rounded-full"
                                /> */}
                                <span className="tw-font-semibold tw-text-dark-text tw-text-lg">
                                    Litecoin <span className="tw-text-gray-500 tw-text-sm">LTC</span>
                                </span>
                            </div>
                            <div className="tw-flex tw-items-center tw-text-red-500 tw-font-medium">
                                2.5%
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="tw-h-4 tw-w-4 tw-ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Binance Row */}
                        <div className="tw-flex tw-items-center tw-justify-between">
                            <div className="tw-flex tw-items-center">
                                {/* <img
                                    src={BINANCE_ICON_CDN_URL}
                                    alt="Binance"
                                    className="w-8 h-8 mr-3 rounded-full"
                                /> */}
                                <span className="tw-font-semibold tw-text-dark-text tw-text-lg">
                                    Binance <span className="tw-text-gray-500 tw-text-sm">BNB</span>
                                </span>
                            </div>
                            <div className="tw-flex tw-items-center tw-text-coiner-green tw-font-medium">
                                4.3%
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="tw-h-4 tw-w-4 tw-ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Balance Card */}
                    <motion.div
                        variants={cardVariants}
                        className="tw-hidden sm:tw-block tw-absolute tw-bg-card-bg tw-rounded-3xl tw-p-6 sm:tw-p-8 tw-w-[70%] tw-max-w-[300px] tw-shadow-2xl tw-z-20
                       tw-rotate-6 -tw-translate-x-20 tw-translate-y-20 lg:tw-rotate-12 lg:tw-translate-x-28 lg:tw-translate-y-24"
                        style={{ originX: 0.5, originY: 0.5 }} // Center origin for rotation
                    >
                        <p className="tw-text-gray-500 tw-text-sm tw-mb-2">Your Balance</p>
                        <p className="tw-text-dark-text tw-text-3xl tw-font-bold tw-mb-4">3545.23</p>
                        <div className="tw-relative">
                            {/* <img
                                src={GRAPH_BALANCE_CDN_URL}
                                alt="Balance Graph"
                                className="tw-w-full tw-h-auto"
                            /> */}
                            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-items-center tw-bg-white tw-rounded-full tw-p-2 tw-pr-3 tw-shadow-md -tw-mb-3">
                                {/* <img
                                    src={ETHEREUM_ICON_CDN_URL}
                                    alt="Ethereum Small"
                                    className="w-5 h-5 mr-1"
                                /> */}
                                <span className="tw-text-coiner-green tw-text-xs tw-font-semibold">
                                    +6.58%
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default StatisticsSection;
