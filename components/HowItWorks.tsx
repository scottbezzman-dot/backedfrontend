// src/components/HowItWorks.tsx
import '../app/globals.css'
import howWorks from '../assets/HowItWorksImage.png';

// TypeScript interface for FeatureCard props for type safety
interface FeatureCardProps {
    iconSrc: string;
    iconBgColorClass: string; // Tailwind utility class for the icon's background color
    title: string;
    description: string;
    alt: string; // Alt text for accessibility
}

/**
 * A reusable component for displaying a feature card with an icon, title, and description.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, iconBgColorClass, title, description, alt }) => {
    return (
        <>
            <a
                href="/start-boarding" // Replace with a relevant link if necessary, e.g., to a specific page
                className="tw-hidden tw-group sm:tw-flex tw-flex-col sm:tw-flex-row tw-items-start sm:tw-items-center tw-gap-4 tw-p-4 sm:tw-p-4 tw-rounded-[15px]
                 tw-bg-coiner-feature-card-bg-transparent tw-text-white
                 tw-transition-all tw-duration-300 tw-ease-in-out tw-hover:tw-scale-[1.02] tw-hover:tw-shadow-xl
                 tw-border-2 tw-border-solid tw-border-white tw-hover:tw-border-coiner-yellow-green/50 tw-cursor-pointer"
                aria-label={`${title} feature`} // Accessible label for the link
            >
                {/* Icon Wrapper: Fixed size, circular, with a dynamic background color */}
                <div className={`tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-flex-shrink-0 ${iconBgColorClass}`}>
                    <img
                        decoding="async"
                        loading="lazy"
                        src={iconSrc}
                        alt={alt}
                        className="tw-w-8 tw-h-8 tw-object-contain" // Icon image, slightly smaller than container for internal padding
                    />
                </div>

                {/* Text Content: Takes the remaining horizontal space */}
                <div className="tw-flex-1">
                    <h3 className="tw-text-xl md:tw-text-2xl tw-font-semibold tw-text-white tw-text-left">
                        {title}
                    </h3>
                    <p className="tw-text-sm md:tw-text-base tw-text-white/70 tw-mt-1 tw-text-left">
                        {description}
                    </p>
                </div>
            </a>
            <a
                href="/start-boarding" // Replace with a relevant link if necessary, e.g., to a specific page
                className="tw-group tw-flex tw-flex-col sm:tw-hidden tw-items-start sm:tw-items-center tw-gap-2 tw-p-4 sm:tw-p-4 tw-rounded-[15px]
                 tw-bg-coiner-feature-card-bg-transparent tw-text-white
                 tw-transition-all tw-duration-300 tw-ease-in-out tw-hover:tw-scale-[1.02] tw-hover:tw-shadow-xl
                 tw-border-2 tw-border-solid tw-border-white tw-hover:tw-border-coiner-yellow-green/50 tw-cursor-pointer"
                aria-label={`${title} feature`} // Accessible label for the link
            >
                {/* Icon Wrapper: Fixed size, circular, with a dynamic background color */}
                <div className='tw-flex tw-items-center tw-gap-2'>
                    <div className={`tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-flex-shrink-0 ${iconBgColorClass}`}>
                        <img
                            decoding="async"
                            loading="lazy"
                            src={iconSrc}
                            alt={alt}
                            className="tw-w-8 tw-h-8 tw-object-contain" // Icon image, slightly smaller than container for internal padding
                        />
                    </div>
                    <h3 className="tw-text-xl md:tw-text-2xl tw-font-semibold tw-text-white tw-text-left">
                        {title}
                    </h3>
                </div>

                {/* Text Content: Takes the remaining horizontal space */}
                <div className="tw-flex-1">
                    <p className="tw-text-sm md:tw-text-base tw-text-white/70 tw-mt-1 tw-text-left">
                        {description}
                    </p>
                </div>
            </a>
        </>
    );
};

/**
 * The main "How It Works" section component.
 * Displays a header, description, an illustrative image, and four feature cards.
 */
const HowItWorks: React.FC = () => {
    return (
        <section
            className="tw-py-[40px] sm:tw-py-[100px] tw-px-[30px] tw-min-h-screen tw-flex tw-items-center tw-justify-center
                 tw-bg-coiner-main-bg-dark tw-font-sans tw-overflow-hidden tw-relative tw-z-0"
        // The original Framer background gradient is complex. We're using the closest solid color.
        // If exact gradient replication is critical, it would require a custom CSS class.
        // Example for custom CSS: style={{ background: 'linear-gradient(0deg,#042318 -20.850262325032652%,rgba(4,35,24,0) 50.45045045045045%,#042318 117.76721149682928%)' }}
        >
            {/* Container for content, centers it and applies max-width */}
            <div className="tw-container tw-max-w-[1280px] tw-mx-auto tw-flex tw-flex-col tw-items-center">
                {/* Heading and Description Section */}
                <div className="tw-text-center tw-mb-6 sm:tw-mb-16 tw-px-4"> {/* tw-px-4 ensures padding on very small screens */}
                    <h2 className="tw-text-white tw-text-[24px] sm:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-mb-4">
                        How It Works
                    </h2>
                    <p className="tw-text-white/80 tw-text-base sm:tw-text-lg sm:tw-text-xl tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                        Discover how BackedByQuantum website simplifies crypto trading through user-friendly interfaces, secure transactions, and real-time market insights.
                    </p>
                </div>

                {/* Main Content Area: Image and Feature Cards */}
                {/* Uses a grid for responsive layout: single column on small screens, two columns on large screens */}
                <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12 tw-w-full tw-items-center">
                    {/* Left Column: Image with gradient background */}
                    <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-w-full tw-max-w-[450px] tw-mx-auto lg:tw-max-w-none
                          tw-h-[450px] lg:tw-h-[600px] xl:tw-h-[700px]
                          tw-rounded-[30px] tw-p-6 lg:tw-p-8 xl:tw-p-10
                          tw-overflow-hidden">
                        <img
                            decoding="async"
                            loading="lazy"
                            src={howWorks.src}
                            alt="Person holding a phone displaying BackedByQuantum app registration screen"
                            className="tw-w-full tw-h-full tw-object-contain"
                        />
                    </div>

                    {/* Right Column: Grid of Feature Cards */}
                    {/* Uses a nested grid: single column on very small, two columns on medium+ */}
                    <div className="tw-grid sm:tw-grid-cols-2 tw-gap-2 lg:tw-gap-8">
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/Stscs9t5uKA7zDjYR7OmUZvJ5aw.svg"
                            iconBgColorClass="tw-bg-icon-wallet-bg"
                            title="Create Wallet"
                            description="Create your secure digital wallet, safeguarding your cryptocurrencies"
                            alt="Wallet icon"
                        />
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/AznvkIe2Q43pi9RhQpcRsrdTWjk.svg"
                            iconBgColorClass="tw-bg-icon-account-bg"
                            title="Create Account"
                            description="Unlock possibilities, create an account to access trading platform"
                            alt="Briefcase icon representing account creation"
                        />
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/BcF21lguLQdkkC8tODe80eog58.svg"
                            iconBgColorClass="tw-bg-icon-register-bg"
                            title="Register"
                            description="Register to explore a world of crypto opportunity with platform"
                            alt="Person icon for registration"
                        />
                        <FeatureCard
                            iconSrc="https://framerusercontent.com/images/VQvK9xkczl83ySNyUKczIseFHo.svg"
                            iconBgColorClass="tw-bg-icon-trading-bg"
                            title="Start Trading"
                            description="Begin your crypto journey today by starting trading on our platform."
                            alt="Line graph icon for trading"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;