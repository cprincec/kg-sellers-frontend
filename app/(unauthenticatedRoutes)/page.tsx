import AboutUs from "./ui/AboutUs";
import GotSomethingToSell from "./ui/GotSomethingToSell";
import Hero from "./ui/Hero";
import HowItWorks from "./ui/HowItWorks";
import SellAcrossAllCategories from "./ui/SellAcrossAllCategories";
import Testimonials from "./ui/Testimonials";
import WhatMakesKaigloDifferent from "./ui/WhatMakesKaigloDifferent/WhatMakesKaigloDifferent";

const Home = () => {
    return (
        <div>
            <Hero />
            <SellAcrossAllCategories />
            <WhatMakesKaigloDifferent />
            <AboutUs />
            <HowItWorks />
            <Testimonials />
            <GotSomethingToSell />
        </div>
    );
};

export default Home;
