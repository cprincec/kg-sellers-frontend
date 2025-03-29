import WhatMakesKaigloDifferentBody from "./WhatMakesKaigloDifferentBody";

const WhatMakesKaigloDifferent = () => {
    return (
        <div className="py-10 md:py-16 px-5 md:px-16 lg:px-[120px]">
            <article className="grid justify-center items-start gap-8 md:gap-12 lg:gap-16 max-w-[1050px] mx-auto">
                <div className="grid gap-4 text-center max-w-[750px] mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold">
                        What makes Kaiglo different
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-kaiglo_grey-700 text-center font-medium">
                        Kaiglo provides the right platform for sellers to promote their brand and store
                        online, allowing them to have personalized interaction with potential buyers.
                    </p>
                </div>

                <WhatMakesKaigloDifferentBody />
            </article>
        </div>
    );
};

export default WhatMakesKaigloDifferent;
