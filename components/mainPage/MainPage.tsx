import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import BrandScroller from '../BrandScroller';
import ExchangePlusSection from '../ExchangePlusSection';
import FeaturesSection from '../FeaturesSection';
import StatisticsSection from '../StatisticsSection';
import HowItWorks from '../HowItWorks';
import PopularCryptocurrencies from '../PopularCryptocurrencies';
import PortfolioSection from '../PortfolioSection';
import YourMoneyYourChoice from '../YourMoneyYourChoice';
import DownloadSection from '../DownloadSection';
import Footer from '../Footer';

function MainPage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="bg-gray-900">
                <BrandScroller />
            </div>
            <ExchangePlusSection />
            <FeaturesSection />
            <StatisticsSection />
            <HowItWorks />
            <PopularCryptocurrencies />
            <PortfolioSection />
            <YourMoneyYourChoice />
            <DownloadSection />
            <Footer />
        </>
    );
}

export default MainPage;