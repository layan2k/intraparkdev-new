import HeroSection from "../../components/LandingPageComponents/HeroSection";
import OurProcess from "../../components/LandingPageComponents/OurProcessComponents/OurProcess";
import PreFooterSection from "../../components/LandingPageComponents/PreFooterSection";
import WhyInfo from "../../components/LandingPageComponents/WhyUsComponents/WhyInfo";


const MainComponent = () => {


    return (
        <div className="pt-16">
            <HeroSection />
            <WhyInfo />
            <OurProcess />
            <PreFooterSection />
        </div>

    );
}

export default MainComponent;