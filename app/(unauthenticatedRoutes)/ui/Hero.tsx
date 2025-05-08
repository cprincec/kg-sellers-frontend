import StartSellingButton from "./StartSellingButton";

const Hero = () => {
    return (
        <div className="h-[680px] md:h-[600px] lg:h-[calc(100vh-25vh)] lg:max-h-[800px] flex items-center justify-center bg-cover bg-bottom bg-home-hero-mobile md:bg-home-hero-desktop">
            <div className="grid gap-14 max-md:mx-4 max-w-[344px] md:max-w-[600px] lg:max-w-[850px] mx-auto -mt-24 text-center">
                <div className="grid gap-4">
                    <h1 className="text-white text-[40px] md:text-6xl leading-[48px] font-bold">
                        Sell Seamlessly, Grow Limitlessly
                    </h1>
                    <p className="text-white md:text-xl font-medium max-w-[800px]">
                        Kaiglo is the perfect place to grow your business. Our powerful tools and resources
                        will help you reach new customers, increase your sales, and take your brand to the
                        next level
                    </p>
                </div>

                <StartSellingButton />
            </div>
        </div>
    );
};

export default Hero;
