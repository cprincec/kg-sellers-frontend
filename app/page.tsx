import GotSomethingToSell from "./ui/GotSomethingToSell";
import Hero from "./ui/Hero";
import HowItWorks from "./ui/HowItWorks";
import LandingPageHeader from "./ui/LandingPageHeader";
import SellAcrossAllCategories from "./ui/SellAcrossAllCategories";
import Testimonials from "./ui/Testimonials";
import WhatMakesKaigloDifferent from "./ui/WhatMakesKaigloDifferent/WhatMakesKaigloDifferent";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <LandingPageHeader />
            <Hero />
            <SellAcrossAllCategories />
            <WhatMakesKaigloDifferent />
            <HowItWorks />
            <Testimonials />
            <GotSomethingToSell />
        </div>
    );
};

export default Home;
