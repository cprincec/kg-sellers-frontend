"use client";

import SAACSlideShow from "./SAACSlideShow";

const SellAcrossAllCategories = () => {
    return (
        <article className="grid gap-6 py-10 md:py-16 px-5 justify-center text-center max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold">
                Sell across all categories
            </h2>
            <SAACSlideShow />
        </article>
    );
};

export default SellAcrossAllCategories;
