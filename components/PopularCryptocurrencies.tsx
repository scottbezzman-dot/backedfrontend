"use client"
import React, { useEffect, useState } from 'react';
import '../app/globals.css'
import apiClient from '@/lib/axios-config';
import xrpLogo from '../assets/xrp-logo.png';
import ADALogo from '../assets/ada.png';
import DOGELogo from '../assets/gode.png';
import HypeLogo from '../assets/hype.png';
import SolLogo from '../assets/solana.png';
import LeoLogo from '../assets/leo.png';
import TRXLogo from '../assets/trx.png';

// Data for popular cryptocurrencies, mirroring the image content
const cryptocurrencies = [
    {
        iconSrc: "https://framerusercontent.com/images/wDarZl4QiJ3qIRKVkEVluE0yE.svg", // Ethereum logo
        iconBlurBg: "tw-bg-blur-ethereum-blue",
        name: "Ethereum (ETH)",
        price: "Loading...",
        description: "Ethereum (ETH): A blockchain platform enabling smart contracts and decentralized applications, driving innovation",
        alt: "Ethereum logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg", // Litecoin logo
        iconBlurBg: "tw-bg-blur-litecoin-yellow",
        name: "Litecoin",
        price: "Loading...", // Price as shown in the original image for Litecoin
        description: "Litecoin: A peer-to-peer cryptocurrency, faster and with lower fees, designed to complement Bitcoin as digital silver",
        alt: "Litecoin logo",
    },
    {
        iconSrc: xrpLogo, // XRP Coin logo
        iconBlurBg: "tw-bg-blur-xrp-black",
        name: "XRP (Ripple)",
        price: "Loading...", // Placeholder price for XRP
        description: "XRP: A digital payment protocol designed for fast, low-cost international money transfers used by banks and payment providers.",
        alt: "XRP Coin logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/3ZdkAjBRU7fZ49d9ktystzLkU.svg", // Bitcoin logo
        iconBlurBg: "tw-bg-blur-bitcoin-orange",
        name: "Bitcoin (BTC)",
        price: "Loading...",
        description: "Bitcoin: The pioneering cryptocurrency, decentralized and secure, revolutionizing global finance keep use of coiner website",
        alt: "Bitcoin logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg", // Using Litecoin icon for Tether as per original HTML reference
        iconBlurBg: "tw-bg-blur-tether-green",
        name: "Tether (USDT)",
        price: "Loading...",
        description: "Tether: A stablecoin pegged to fiat currency, offering stability and facilitating seamless transactions in the crypto world",
        alt: "Tether logo",
    },
    {
        iconSrc: "https://framerusercontent.com/images/g7SkHIIZZrXE1QZOOweIJSPsVeU.svg", // Binance Coin logo
        iconBlurBg: "tw-bg-blur-binance-orange",
        name: "Binance (BNB)",
        price: "Loading...", // Placeholder price for Binance
        description: "Binance: The native cryptocurrency of Binance exchange, empowering users with discounts, utility, and an innovative ecosystem",
        alt: "Binance Coin logo",
    },
    {
        iconSrc: ADALogo, // Cardano Coin logo
        iconBlurBg: "tw-bg-blur-cardano-blue",
        name: "Cardano (ADA)",
        price: "Loading...", // Placeholder price for Cardano
        description: "Cardano: A proof-of-stake blockchain focused on scalability, sustainability, and supporting smart contracts for decentralized apps.",
        alt: "Cardano Coin logo",
    },
    {
        iconSrc: DOGELogo, // DOGE Coin logo
        iconBlurBg: "tw-bg-blur-doge-yellow",
        name: "Dogecoin (DOGE)",
        price: "Loading...", // Placeholder price for DOGE
        description: "Dogecoin: A meme-inspired cryptocurrency known for its community support, fast transactions, and widespread tipping culture.",
        alt: "Dogecoin Coin logo",
    },
    {
        iconSrc: HypeLogo, // Hyperliquid Coin logo
        iconBlurBg: "tw-bg-blur-hype-blue",
        name: "Hyperliquid (HYPE)",
        price: "Loading...", // Placeholder price for Hyperliquid
        description: "Hyperliquid: A next-generation decentralized exchange token focused on high-performance trading and deep on-chain liquidity.",
        alt: "Hyperliquid Coin logo",
    },
    {
        iconSrc: SolLogo, // Solana Coin logo
        iconBlurBg: "tw-bg-blur-solana-green",
        name: "Solana (SOL)",
        price: "Loading...", // Placeholder price for Solana
        description: "Solana: A high-performance blockchain supporting fast, low-cost transactions and scalable decentralized applications.",
        alt: "Solana Coin logo",
    },
    {
        iconSrc: LeoLogo, // Leo Coin logo
        iconBlurBg: "tw-bg-blur-leo-yellow",
        name: "Leo (Leo)",
        price: "Loading...", // Placeholder price for Leo
        description: "LEO: The utility token for the Bitfinex exchange, offering trading discounts and other platform benefits.",
        alt: "Leo Coin logo",
    },
    {
        iconSrc: TRXLogo, // Tron Coin logo
        iconBlurBg: "tw-bg-blur-tron-red",
        name: "Tron (TRX)",
        price: "Loading...", // Placeholder price for Tron
        description: "Tron: A blockchain platform focused on decentralized content sharing and applications, aiming to power the decentralized web.",
        alt: "Tron Coin logo",
    },

];

// TypeScript interface for the properties of a single CryptoCard
interface CryptoCardProps {
    crypto: typeof cryptocurrencies[0];
    livePrice?: string; // Ensures type safety based on our data structure
}

/**
 * Reusable component to render an individual cryptocurrency card.
 * The entire card is now clickable and redirects to a crypto-specific detail page.
 */
const CryptoCard: React.FC<CryptoCardProps> = ({ crypto, livePrice }) => {
    // Generate a friendly URL slug for redirection
    // Ensure the slug is URL-safe and consistent for navigation
    const cryptoSlug = crypto.name.toLowerCase().replace(/\s|\(|\)/g, '').replace(/&/g, 'and');

    return (
        // The entire card is now an anchor <a> element, making the whole area clickable.
        <a
            href={`/start-boarding`} // Dynamic link for redirection
            className="tw-relative tw-flex tw-flex-col tw-items-center p-4 sm:tw-p-8 tw-pt-16 tw-rounded-[40px] tw-bg-coiner-card-bg-primary tw-text-white
                 tw-w-[250px] tw-h-[380px] sm:tw-w-[320px] sm:tw-h-[450px] tw-overflow-hidden tw-group tw-cursor-pointer
                 tw-transition-transform tw-duration-300 tw-ease-in-out tw-hover:tw-scale-[1.03] tw-hover:tw-shadow-2xl"
            aria-label={`View details for ${crypto.name}`} // Accessibility label for the entire card link
        >

            {/* Blurred background element positioned behind the icon */}
            <div className={`tw-absolute tw-top-0 tw-left-1/2 -tw-translate-x-1/2 tw-w-40 tw-h-40 tw-rounded-full tw-filter tw-blur-[36px] tw-opacity-70 ${crypto.iconBlurBg}`}></div>

            {/* Crypto Icon Container - no longer a separate <a>, it's part of the parent card link */}
            <div
                className="tw-relative tw-z-10 tw-w-[80px] tw-h-[80px] tw-flex tw-items-center tw-justify-center tw-rounded-[30px] tw-shadow-lg tw-mb-6 tw-bg-transparent
                   tw-transform tw-transition-transform tw-duration-200 tw-ease-in-out tw-group-hover:tw-scale-105" // Use group-hover for hover effect
            >
                <img
                    decoding="async"
                    loading="lazy"
                    // src={crypto.iconSrc}
                    src={typeof crypto.iconSrc === "string" ? crypto.iconSrc : crypto.iconSrc.src}
                    alt={crypto.alt}
                    className="tw-w-full tw-h-full tw-object-contain tw-p-2" // tw-p-2 gives some internal padding to the SVG icon
                />
            </div>

            {/* Name and Price Section */}
            <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-text-center">
                <div className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-w-full tw-pb-4 tw-border-b tw-border-coiner-border-gray">
                    <h3 className="tw-text-xl md:tw-text-2xl tw-font-semibold tw-whitespace-nowrap">{crypto.name}</h3>
                    {/* <p className="tw-text-lg md:tw-text-xl tw-font-medium tw-text-white/90 tw-whitespace-nowrap">{crypto.price}</p> */}
                    <p className="tw-text-lg md:tw-text-xl tw-font-medium tw-text-white/90">
                        {livePrice ?? crypto.price}
                    </p>
                </div>

                {/* Description Text */}
                <p className="tw-text-sm md:tw-text-base tw-text-white/70 tw-mt-4 tw-leading-relaxed tw-flex-grow tw-text-center tw-line-clamp-4 overflow-hidden">
                    {crypto.description}
                </p>

                {/* Buy Now "Button" - now a span for styling, not a separate interactive element (<a> or <button>) */}
                {/* It acts as a visual cue but is part of the parent card's clickable area, adhering to HTML validity. */}
                <div className="tw-mt-4 sm:tw-mt-8 tw-w-full">
                    <span
                        className="tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-3 tw-rounded-full tw-text-white tw-text-base tw-font-medium
                       tw-border-[1.5px] tw-border-coiner-yellow-green/60 tw-group-hover:tw-bg-coiner-yellow-green/10
                       tw-transition-colors tw-duration-300 tw-ease-in-out tw-w-full"
                    // No href attribute here as the entire parent <a> tag handles the navigation
                    >
                        Buy Now
                    </span>
                </div>
            </div>
        </a>
    );
};

/**
 * The main "Popular Cryptocurrencies" section component.
 * Features a horizontal, infinitely scrolling list of crypto cards.
 */
const PopularCryptocurrencies: React.FC = () => {
    // Calculate a dynamic duration for the marquee animation based on the number of cards
    // This helps maintain a similar perceived speed regardless of the number of items.
    const marqueeDuration = cryptocurrencies.length * 8; // e.g., 5 cards * 8s = 40s total animation cycle
    const [prices, setPrices] = useState<{ [key: string]: number }>({});

    // useEffect(() => {
    //     const fetchCoins = async () => {
    //         try {
    //             const res = await apiClient.get("/api/wallet/get_wallets");
    //             setPrices(res.data.data);
    //         } catch (error) {
    //             console.error("Error fetching coins:", error);
    //         }
    //     };
    //     fetchCoins();
    // }, []);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await apiClient.get("/api/wallet/get_wallets");
                const priceMap: { [key: string]: number } = {};
                res.data.data.forEach((coin: any) => {
                    const key = coin.name ? coin.name.trim().toUpperCase() : "";
                    priceMap[key] = coin.current_value;
                });
                setPrices(priceMap);
            } catch (error) {
                console.error("Error fetching coins:", error);
            }
        };
        fetchCoins();
        const interval = setInterval(fetchCoins, 60000); // refresh every 1 min
        return () => clearInterval(interval);
    }, []);

    const nameToApiKey: { [key: string]: string } = {
        "Bitcoin (BTC)": "BTC",
        "Ethereum (ETH)": "ETH",
        "Litecoin": "LTC",
        "Tether (USDT)": "USDT",
        "Binance (BNB)": "BNB",
        "XRP (Ripple)": "XRP",
        "Dogecoin (DOGE)": "DOGE",
        "Hyperliquid (HYPE)": "HYPE",
        "Solana (SOL)": "SOL",
        "Leo (Leo)": "Leo",
        "Tron (TRX)": "TRX",
        "Cardano (ADA)": "ADA"
    };

    return (
        <section
            className="tw-py-[40px] sm:tw-py-[100px] tw-px-[30px] tw-bg-coiner-main-bg-dark tw-font-sans tw-overflow-hidden tw-relative"
        >
            {/* Section Heading and Description */}
            <div className="tw-text-center tw-mb-16 tw-px-4">
                <h2 className="tw-text-white tw-text-[24px] sm:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-mb-4">
                    Popular crypto currencies
                </h2>
                <p className="tw-text-white/80 tw-text-base sm:tw-text-lg sm:tw-text-xl tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                    Explore a variety of popular cryptocurrencies on our platform, empowering you to diversify your portfolio and stay ahead
                </p>
            </div>

            {/* Crypto Card Slider Container */}
            <div className="tw-relative tw-overflow-hidden tw-w-full sm:tw-py-8">
                {/* Left fade overlay */}
                <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-w-24 tw-bg-gradient-to-r tw-from-coiner-main-bg-dark tw-to-transparent tw-z-10 tw-pointer-events-none"></div>
                {/* Right fade overlay */}
                <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-w-24 tw-bg-gradient-to-l tw-from-coiner-main-bg-dark tw-to-transparent tw-z-10 tw-pointer-events-none"></div>

                {/* Inner track for marquee animation. Content is duplicated for seamless loop. */}
                <div
                    className="tw-flex tw-w-max tw-animate-marquee-rtl"
                    style={{ '--marquee-duration': `${marqueeDuration}s` } as React.CSSProperties} // Set CSS variable for animation duration
                >
                    {/* {cryptocurrencies.map((crypto, index) => (
                        <div key={`original-${index}`} className="tw-flex-shrink-0 tw-mx-4">
                            <CryptoCard crypto={crypto} />
                        </div>
                    ))}
                    {cryptocurrencies.map((crypto, index) => (
                        <div key={`duplicate-${index}`} className="tw-flex-shrink-0 tw-mx-4">
                            <CryptoCard crypto={crypto} />
                        </div>
                    ))} */}
                    {cryptocurrencies.map((crypto, index) => {
                        const apiKey = nameToApiKey[crypto.name];
                        const livePrice = apiKey && prices[apiKey]
                            ? `$${prices[apiKey].toLocaleString()}`
                            : crypto.price;

                        return (
                            <div key={index} className="tw-flex-shrink-0 tw-mx-4">
                                <CryptoCard crypto={{ ...crypto, price: livePrice }} />
                            </div>
                        );
                    })}

                    {cryptocurrencies.map((crypto, index) => {
                        const apiKey = nameToApiKey[crypto.name];
                        const livePrice = apiKey && prices[apiKey]
                            ? `$${prices[apiKey].toLocaleString()}`
                            : crypto.price;

                        return (
                            <div key={`duplicate-${index}`} className="tw-flex-shrink-0 tw-mx-4">
                                <CryptoCard crypto={{ ...crypto, price: livePrice }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PopularCryptocurrencies;