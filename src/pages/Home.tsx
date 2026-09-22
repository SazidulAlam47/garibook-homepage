import AppPromotion from "../components/HomePageSections/AppPromotion/AppPromotion";
import Blog from "../components/HomePageSections/Blog/Blog";
import CallToAction1 from "../components/HomePageSections/CallToAction1/CallToAction1";
import CallToAction2 from "../components/HomePageSections/CallToAction2/CallToAction2";
import FreedomSection from "../components/HomePageSections/FreedomSection/FreedomSection";
import HeroSection from "../components/HomePageSections/HeroSection/HeroSection";
import News from "../components/HomePageSections/News/News";
import RentalSection from "../components/HomePageSections/RentalSection/RentalSection";
import Reviews from "../components/HomePageSections/Reviews/Reviews";
import ServicesSection from "../components/HomePageSections/ServicesSection/ServicesSection";
import Stats from "../components/HomePageSections/Stats/Stats";
import TogetherSection from "../components/HomePageSections/TogetherSection/TogetherSection";

const Home = () => {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <HeroSection />
            <RentalSection />
            <Stats />
            <ServicesSection />
            <FreedomSection />
            <TogetherSection />
            <CallToAction1 />
            <AppPromotion />
            <News />
            <Reviews />
            <Blog />
            <CallToAction2 />
        </main>
    );
};

export default Home;
