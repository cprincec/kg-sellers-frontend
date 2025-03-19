import LCHeroGridGallery from "./LCHeroGridGallery";

const Hero = () => {
    return (
        <div className="grid gap-6 md:gap-10 lg:gap-16 md:grid-cols-2 md:justify-between md:items-center px-4 md:px-16 lg:px-[120px] py-6 md:pt-8 md:pb-32">
            <div className="grid gap-4 md:max-lg:self-end">
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
