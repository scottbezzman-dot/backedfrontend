// src/components/DownloadSection.tsx
import '../app/globals.css'

/**
 * Component for the "Download and enjoy the experience" section.
 * Features a gradient background, a phone image, text, and app download buttons.
 */
const DownloadSection: React.FC = () => {
    return (
        <section className="tw-py-[40px] sm:tw-py-[100px] tw-px-[30px] tw-bg-coiner-super-dark-bg tw-font-sans tw-overflow-hidden">
            <div className="tw-container tw-max-w-7xl tw-mx-auto">
                {/* Main container with gradient background and rounded corners */}
                <div className="tw-bg-gradient-to-br tw-from-coiner-yellow-green tw-via-coiner-green tw-to-coiner-cyan
                        tw-rounded-[30px] tw-p-6 sm:tw-p-8 md:tw-p-12 lg:tw-p-16 tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-center tw-gap-12 lg:tw-gap-20">

                    {/* Left side: Mobile Phone Image */}
                    <div className="tw-flex-shrink-0 tw-w-full tw-max-w-[300px] sm:tw-max-w-[400px] lg:tw-max-w-[450px] tw-aspect-[655/700] lg:tw-w-1/2 tw-flex tw-items-center tw-justify-center">
                        <img
                            decoding="async"
                            loading="lazy"
                            src="https://framerusercontent.com/images/mSPUMKMOsmX81AzCQO3g1eiukj8.webp"
                            alt="Mobile phone displaying cryptocurrency exchange interface"
                            className="tw-w-full tw-h-full tw-object-contain"
                        />
                    </div>

                    {/* Right side: Content (Text and Buttons) */}
                    <div className="tw-flex-1 tw-text-center lg:tw-text-left">
                        <h3 className="tw-text-coiner-text-dark tw-text-[24px] sm:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-mb-4 tw-leading-tight">
                            {/* Download and enjoy the experience */}
                            Experience the Future of Decentralized Finance
                        </h3>
                        <p className="tw-text-coiner-text-dark tw-text-[15px] sm:tw-text-xl tw-leading-relaxed tw-mb-8">
                            {/* Don't miss out! Download now for an enjoyable app experience. Seize the opportunity to immerse yourself in seamless functionalities and endless possibilities. */}
                            Seamlessly trade, stake, and grow your assets with BackedByQuantum. Your gateway to secure, fast, and transparent crypto transactions.
                        </p>

                        {/* App Store Buttons */}
                        {/* <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center lg:tw-justify-start tw-items-center tw-gap-4">
                            <a
                                href="https://www.apple.com/in/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tw-w-[180px] tw-h-[60px] tw-flex tw-items-center tw-justify-center tw-rounded-full tw-overflow-hidden
                           tw-transition-transform tw-duration-300 tw-ease-in-out tw-hover:tw-scale-105"
                                aria-label="Download on the App Store"
                            >
                                <img
                                    decoding="async"
                                    src="https://framerusercontent.com/images/7MiyJs1CYjb7xXAkgUwkS5t2Q.png"
                                    alt="Download on the App Store"
                                    className="tw-w-full tw-h-full tw-object-cover"
                                />
                            </a>
                            <a
                                href="https://play.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tw-w-[180px] tw-h-[60px] tw-flex tw-items-center tw-justify-center tw-rounded-full tw-overflow-hidden
                           tw-transition-transform tw-duration-300 tw-ease-in-out tw-hover:tw-scale-105"
                                aria-label="Get it on Google Play"
                            >
                                <img
                                    decoding="async"
                                    src="https://framerusercontent.com/images/UaLWf2GGrquxylIIyeMSMZG62Bg.png"
                                    alt="Android App on Google Play"
                                    className="tw-w-full tw-h-full tw-object-cover"
                                />
                            </a>
                        </div> */}
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
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;