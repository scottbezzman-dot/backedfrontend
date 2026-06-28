// src/components/PortfolioSection.tsx
import '../app/globals.css'
import home from '../assets/home.png'

// TypeScript interface for the properties of a single Step item
interface StepItemProps {
    number: string;
    title: string;
    description: string;
}

/**
 * Reusable component to display an individual step in the portfolio creation process.
 */
const StepItem: React.FC<StepItemProps> = ({ number, title, description }) => {
    return (
        <div className="tw-flex tw-items-start tw-gap-4 lg:tw-gap-6 tw-py-4 tw-transition-transform tw-duration-300 tw-ease-in-out tw-hover:tw-scale-[1.01]">
            {/* Number Icon/Wrap */}
            {/* tw-w-20 tw-h-20 for smaller screens, tw-w-24 tw-h-24 for medium+ */}
            <div className="tw-flex-shrink-0 tw-w-16 tw-h-16 sm:tw-w-24 sm:tw-h-24 tw-flex tw-items-center tw-justify-center
                      tw-rounded-full tw-border-[1.5px] tw-border-coiner-step-border-gray
                      tw-text-white tw-text-3xl sm:tw-text-4xl tw-font-semibold">
                {number}
            </div>

            {/* Content Wrap */}
            <div className="tw-flex-1 tw-pt-2"> {/* tw-pt-2 for slight vertical alignment adjustment */}
                <h4 className="tw-text-white tw-text-xl sm:tw-text-3xl tw-font-semibold tw-mb-2 tw-leading-tight">
                    {title}
                </h4>
                <p className="tw-text-white/70 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

/**
 * Main component for the "Create your cryptocurrency portfolio today" section.
 * It includes a main heading, descriptive text, a list of steps, and a dashboard image.
 */
const PortfolioSection: React.FC = () => {
    return (
        <section
            className="tw-relative tw-py-[40px] sm:tw-py-[100px] tw-px-[30px] tw-bg-coiner-super-dark-bg tw-font-sans tw-overflow-hidden"
        >
            {/* Background Pattern - Positioned absolutely behind other content */}


            {/* Main Content Container - Placed above the background pattern with z-index */}
            <div className="tw-relative tw-z-10 tw-container tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-items-center">
                {/* Heading and Description Section */}
                <div className="tw-text-center tw-mb-8 sm:tw-mb-16 tw-px-4"> {/* tw-px-4 for padding on very small screens */}
                    <h2 className="tw-text-white tw-text-[24px] sm:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-mb-4 tw-leading-tight">
                        Create your crypto currency portfolio today
                    </h2>
                    <p className="tw-text-white/80 tw-text-base sm:tw-text-lg sm:tw-text-xl tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                        Start building your cryptocurrency portfolio quickly today, seizing the opportunities of the digital asset market with BackedByQuantum. Join us now!
                    </p>
                </div>

                {/* Content Area: Steps List on Left, Dashboard Image on Right */}
                {/* Uses a grid to switch layout: single column on small, two columns on large screens */}
                <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-items-center tw-justify-center tw-w-full">
                    {/* Left Column: List of Steps */}
                    <div className="tw-flex tw-flex-col tw-gap-2 sm:tw-gap-8">
                        <StepItem
                            number="01"
                            title="Verify your identity"
                            description="Ensure security - verify your identity to access our full range of services with BackedByQuantum"
                        />
                        <StepItem
                            number="02"
                            title="Fund your account"
                            description="Boost your account - fund it quickly and securely to start trading with BackedByQuantum"
                        />
                        <StepItem
                            number="03"
                            title="Start trading"
                            description="Take the leap - start trading now and explore the world of crypto opportunities with BackedByQuantum."
                        />
                    </div>

                    {/* Right Column: Dashboard Image */}
                    <div className="tw-flex tw-justify-center lg:tw-justify-end"> {/* Centers on small, aligns right on large */}
                        <div className="tw-w-full tw-max-w-[550px] tw-aspect-[1190/989] tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl">
                            <img
                                decoding="async"
                                loading="lazy"
                                // src="https://framerusercontent.com/images/hSgICHJoLrknJoEucvrbyDwqFI.webp"
                                src={home.src}
                                alt="BackedByQuantum dashboard with portfolio statistics and market values"
                                className="tw-w-full tw-h-full tw-object-contain" // tw-object-cover to ensure image fills container without distortion
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;