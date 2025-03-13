import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="h-[600px] lg:h-[calc(100vh-100px)] flex items-center bg-cover bg-center bg-home-hero-mobile md:bg-home-hero-desktop">
            <div className="grid gap-14 max-w-[344px] md:max-w-[600px] lg:max-w-[850px] m-auto text-center">
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

                <Button className="justify-self-center px-6 md:px-8 py-4 md:py-6 md:text-2xl rounded-xl">
                    Start selling
                </Button>
            </div>
        </div>
    );
};

export default Hero;
