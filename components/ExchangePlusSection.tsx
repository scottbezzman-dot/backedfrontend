import '../app/globals.css'

// Define the type for a feature item
interface FeatureItem {
    id: string;
    title: string;
    description: string;
}

// Data for the feature items on the right side
const featureItems: FeatureItem[] = [
    {
        id: "01",
        title: "Card-to-crypto purchases.",
        description: "Own crypto in minutes using your card",
    },
    {
        id: "02",
        title: "Margin leveraging.",
        description: "Maximize gains with margin trading with BackedByQuantum",
    },
    {
        id: "03",
        title: "Explore Promotions",
        description: "Giveaways, competitions, and more!",
    },
    {
        id: "04",
        title: "Maximize Savings",
        description: "Save more money, worry less with BackedByQuantum",
    },
];

const ExchangePlusSection: React.FC = () => {
    return (
        <section className="tw-relative tw-py-16 md:tw-py-24 tw-font-poppins tw-bg-[#0a0a0a]">
            <div className="tw-container tw-mx-auto tw-px-4">
                {/* Main container for the card and grid */}
                <div className="tw-bg-card-dark-bg tw-rounded-3xl tw-p-8 lg:tw-p-12 tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-gap-8 lg:tw-gap-12 tw-shadow-2xl">

                    {/* Left Gradient Card: "Exchange Plus!" */}
                    <div className="tw-w-full lg:tw-w-1/3 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-8 sm:tw-p-10 tw-rounded-2xl tw-text-center
                          tw-bg-gradient-to-br tw-from-primary-green tw-via-primary-yellow tw-to-primary-cyan tw-text-neutral-900
                          tw-shadow-lg tw-animate-fade-in-up [animation-delay:0.1s]">
                        <h2 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-mb-4 tw-leading-tight tw-text-black">
                            Exchange <br className="sm:tw-hidden" /> Plus!
                        </h2>
                        <p className="tw-text-base sm:tw-text-lg tw-mb-8 tw-max-w-sm">
                            Explore stop orders, deep liquidity, and more!
                        </p>
                        <a
                            href="#"
                            className="tw-inline-block tw-bg-white tw-text-neutral-900 tw-px-8 tw-py-4 tw-rounded-full tw-font-semibold
                         tw-hover:tw-text-neutral-900 tw-transition-colors tw-duration-300 tw-w-full tw-max-w-xs"
                        >
                            Try Now
                        </a>
                    </div>

                    {/* Right Features Grid */}
                    <div className="tw-w-full lg:tw-w-2/3 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12 tw-animate-fade-in-up [animation-delay:0.3s]">
                        {featureItems.map((item, index) => (
                            <div key={item.id} className="tw-flex tw-items-start tw-gap-4 tw-text-left">
                                {/* Circular Number */}
                                <div
                                    className="tw-w-14 tw-h-14 tw-min-w-[3.5rem] tw-rounded-full tw-bg-gray-700 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold tw-text-xl
                             tw-transition-colors tw-duration-300 tw-hover:tw-bg-primary-green" // Optional hover effect
                                >
                                    {item.id}
                                </div>
                                {/* Content Wrap */}
                                <div className="tw-flex-1">
                                    <h5 className="tw-font-bold tw-text-white tw-text-lg sm:tw-text-xl tw-mb-1">{item.title}</h5>
                                    <p className="tw-text-gray-400 tw-text-base">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExchangePlusSection;