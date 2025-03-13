import Hero from "./ui/Hero";
import LandingPageHeader from "./ui/LandingPageHeader";
import SellAcrossAllCategories from "./ui/SellAcrossAllCategories";
import WhatMakesKaigloDifferent from "./ui/WhatMakesKaigloDifferent/WhatMakesKaigloDifferent";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <LandingPageHeader />
            <Hero />
            <SellAcrossAllCategories />
            <WhatMakesKaigloDifferent />
        </div>
    );
};

export default Home;
