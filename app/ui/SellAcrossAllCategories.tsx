import { ImageSAAC1, ImageSAAC2, ImageSAAC3 } from "@/public/images/images";
import Image from "next/image";

const SellAcrossAllCategories = () => {
    return (
        <article className="grid gap-6 py-10 px-5 justify-center text-center max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-[40px] md:leading-[48px] font-bold">
                Sell across all categories
            </h2>

            <div className="grid grid-flow-col gap-8 justify-center items-center">
                <Image src={ImageSAAC1} alt="shirt" className="w-full h-full lg:w-[370px] lg:h-[450px]" />
                <Image src={ImageSAAC2} alt="backpack" className="hidden md:block w-full h-full" />
                <Image src={ImageSAAC3} alt="baby hoodie" className="hidden md:block w-full h-full" />
            </div>
        </article>
    );
};
export default SellAcrossAllCategories;
