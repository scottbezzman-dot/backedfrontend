import React from 'react';
import '../app/globals.css'

// Import local logo files
import TrustWalletLogo from '../assets/wallet_logo/Trust-Wallet-Logo.png';
import LobstrLogo from '../assets/wallet_logo/LOBSTR-logo.png';
import ExodusLogo from '../assets/wallet_logo/exodus_logo.png';
import AtomicLogo from '../assets/wallet_logo/Automic-logo.png';
import MetaMaskLogo from '../assets/wallet_logo/MetaMask-Logo.png';
import CryptoLogo from '../assets/wallet_logo/crypto_logo.png';
import PillarLogo from '../assets/wallet_logo/Pillar_Logo__1.png';
import BitPayLogo from '../assets/wallet_logo/BitPay_logo.png';

// Base64 encoded SVG for the "B RAND" logo.
// This SVG is carefully designed to visually match the "B RAND" section
// in your original image, featuring a dark rectangular background with a
// white 'B' inside, followed by dark 'RAND' text.

// Define the array of brand logos using local imported images
const brandLogos = [
    { alt: "Trust Wallet", src: TrustWalletLogo.src },
    { alt: "Lobstr", src: LobstrLogo.src },
    { alt: "Exodus", src: ExodusLogo.src },
    { alt: "Atomic", src: AtomicLogo.src },
    { alt: "Meta Mask", src: MetaMaskLogo.src },
    { alt: "Crypto.com | Defi wallet", src: CryptoLogo.src },
    { alt: "Pillar", src: PillarLogo.src },
    { alt: "BitPay", src: BitPayLogo.src },
];

const BrandScroller: React.FC = () => {
    // To create a seamless infinite scroll, we duplicate the logos array.
    // This allows the animation to scroll through the first set, then transition
    // smoothly into the second set, effectively looping.
    const duplicatedLogos = [...brandLogos, ...brandLogos];

    return (
        <div className='tw-pt-[50px] sm:tw-pt-[75px] tw-bg-[#0a0a0a]'>
            <section
                className="tw-relative tw-w-full tw-overflow-hidden
                 tw-bg-gradient-to-r tw-from-[#DFFF5B] tw-to-[#00CED1]
                 tw-group"
            // You can control the animation speed here if needed, e.g.:
            // style={{ '--animation-duration': '40s' } as React.CSSProperties}
            >
                <div
                    // This div is the actual scrolling "track" for the logos.
                    // - `tw-flex tw-items-center`: Lays out logos horizontally and centers them vertically.
                    // - `tw-w-max`: Ensures the div is wide enough to contain all duplicated logos without wrapping.
                    // - `tw-animate-infinite-scroll`: Applies the custom animation defined in tailwind.config.js.
                    // - `group-hover:tw-animation-pause`: Pauses the scrolling animation when the user hovers
                    //   over the parent `section`.
                    className="tw-flex tw-items-center tw-w-max 
                   tw-animate-infinite-scroll 
                   group-hover:tw-animation-pause
                   tw-will-change-transform
                   tw-[transform:translateZ(0)]"
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index} // Using index as key is acceptable here since the list is static and for display.
                            className="tw-flex-shrink-0 
                       tw-mx-8 md:tw-mx-12 lg:tw-mx-16 
                       tw-flex tw-items-center tw-justify-center 
                       tw-h-16 sm:tw-h-16 lg:tw-h-20"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="tw-object-contain 
                         tw-h-[60px] sm:tw-h-[40px]"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default BrandScroller;