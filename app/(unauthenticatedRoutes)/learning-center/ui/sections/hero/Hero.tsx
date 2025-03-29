import LCHeroGridGallery from "./LCHeroGridGallery";

const Hero = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid gap-6 md:gap-10 lg:gap-16 md:grid-flow-col lg:grid-cols-[50%_44%] md:justify-between md:items-center px-4 md:px-16 lg:px-0 py-6 md:pt-8 md:pb-24 lg:pb-36 overflow-hidden">
            <div className="grid gap-4 md:max-lg:self-end md:mt-14">
                <h1 className="text-xl md:text-2xl lg:text-[56px] lg:leading-[72px] md:font-extrabold lg:font-black">
                    Learn How to Navigate Our Platform with Ease
                </h1>
                <p className="text-sm md:text-base">
                    Whether you&#39;re a first-time user or need a refresher, our easy-to-follow tutorials and
                    step-by-step guides will walk you through everything from uploading products to managing
                    orders.
                </p>
            </div>

            {/* LC - Learning Center */}
            <LCHeroGridGallery />
        </div>
    );
};

export default Hero;
