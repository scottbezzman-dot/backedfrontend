import '../app/globals.css'

// Define the type for a feature item
interface FeatureItem {
    iconSrc: string;
    altText: string;
    title: string;
    description: string;
}

// Data for the feature items
const featuresData: FeatureItem[] = [
    {
        iconSrc: "https://framerusercontent.com/images/8389I7JzD2kftdSXY1D0ndCVzY.svg",
        altText: "shield icon",
        title: "Trusted & Secure",
        description: "Embrace the peace of mind with our trusted & secure platform, ensuring your data protected",
    },
    {
        iconSrc: "https://framerusercontent.com/images/wVZSGXPFgyUEPeib3sp1s3Ipk.svg",
        altText: "setting icon",
        title: "Automatically",
        description: "Discover the power of automation with our cutting-edge technology, enabling processes",
    },
    {
        iconSrc: "https://framerusercontent.com/images/wvxL0QwUD3iavVFfjuxfdjPbALs.svg",
        altText: "graph icon",
        title: "Trade Algorithm",
        description: "Optimize your trades with our advanced algorithm, data-driven insights to make decisions",
    },
    {
        iconSrc: "https://framerusercontent.com/images/yB9dafg9u8oR2Pf03n4nKc7Yrh8.svg",
        altText: "headphone icon",
        title: "24/7 Support",
        description: "Enjoy round-the-clock support from our team, ensuring assistance whenever you need",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="tw-relative tw-py-16 md:tw-py-24 tw-font-poppins tw-bg-dark-background tw-overflow-hidden">
            {/* Background Pattern */}
            {/* Position this absolutely behind the content, adjust opacity */}
            <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-10 tw-pointer-events-none">
                <img
                    src="https://framerusercontent.com/images/ZnQJe5z2yS0keWBmLXWPafNy4.png"
                    alt="bg pattern"
                    className="tw-w-full tw-h-full tw-object-cover tw-object-center"
                />
            </div>

            <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
                {/* Heading and Subheading */}
                <div className="tw-text-center tw-mb-12 md:tw-mb-16 tw-max-w-3xl tw-mx-auto tw-animate-fade-in-up">
                    <h2 className="tw-text-[24px] sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-white tw-mb-4">
                        The best crypto features you won't find anywhere else
                    </h2>
                    <p className="tw-text-gray-300 tw-text-base sm:tw-text-lg">
                        Explore our platform's unparalleled crypto features, setting us apart with exclusive
                        offerings not found elsewhere. Join BackedByQuantum today itself.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index} // Using index is fine here as the list is static
                            className="tw-bg-feature-card-bg tw-rounded-xl tw-p-8 tw-text-center tw-flex tw-flex-col tw-items-center tw-justify-center
                         tw-shadow-lg tw-transform tw-hover:tw-scale-105 tw-transition-transform tw-duration-300 tw-ease-in-out
                         tw-animate-fade-in-up"
                            style={{ animationDelay: `${0.1 * index}s` }} // Staggered animation
                        >
                            {/* Icon */}
                            <div className="tw-w-16 tw-h-16 tw-mb-6 tw-flex tw-items-center tw-justify-center">
                                <img src={feature.iconSrc} alt={feature.altText} className="tw-w-full tw-h-full tw-object-contain" />
                            </div>
                            {/* Title */}
                            <h3 className="tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold tw-mb-2">{feature.title}</h3>
                            {/* Description */}
                            <p className="tw-text-gray-400 tw-text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;