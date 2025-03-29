import {
    ImageLCHeroGridDesktop1,
    ImageLCHeroGridDesktop2,
    ImageLCHeroGridDesktop3,
    ImageLCHeroGridDesktop4,
    ImageLCHeroGridMobile1,
    ImageLCHeroGridMobile2,
    ImageLCHeroGridMobile3,
    ImageLCHeroGridMobile4,
    ImageLCHeroGridSparkleDesktop,
    ImageLCHeroGridSparkleMobile,
} from "@/public/images/landingPage/images";
import Image from "next/image";

const LCHeroGridGallery = () => {
    return (
        <div className="w-full h-full">
            <div className="md:hidden relative pr-3">
                <Image
                    src={ImageLCHeroGridSparkleMobile}
                    alt="sparkle"
                    className="absolute top-0 right-5 -translate-y-[33px] translate-x-[33px] w-[64px] h-[64px]"
                />
                <div className="grid grid-cols-2 gap-1">
                    <div className="flex flex-col gap-1">
                        <Image src={ImageLCHeroGridMobile1} alt="gallery 1" />
                        <Image src={ImageLCHeroGridMobile3} alt="gallery 2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image src={ImageLCHeroGridMobile2} alt="gallery 3" />
                        <Image src={ImageLCHeroGridMobile4} alt="gallery 4" />
                    </div>
                </div>
            </div>

            <div className="hidden md:block relative pr-2 translate-y-8 lg:translate-y-14">
                <Image
                    src={ImageLCHeroGridSparkleDesktop}
                    alt="sparkle"
                    width={250}
                    height={250}
                    className="md:max-lg:w-[177px] absolute top-0 right-5 -translate-y-[62px] translate-x-[110px] lg:-translate-y-[85px] lg:translate-x-[97px]"
                />
                <div className="flex gap-1">
                    <div className="flex flex-col gap-1">
                        <Image src={ImageLCHeroGridDesktop1} alt="gallery 1" width={233} height={179} />
                        <Image src={ImageLCHeroGridDesktop3} alt="gallery 2" width={233} height={286} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image src={ImageLCHeroGridDesktop2} alt="gallery 3" width={233} height={286} />
                        <Image src={ImageLCHeroGridDesktop4} alt="gallery 4" width={233} height={179} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LCHeroGridGallery;
