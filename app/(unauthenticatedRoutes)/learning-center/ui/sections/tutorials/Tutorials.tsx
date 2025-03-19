import Image from "next/image";
import { tutorials } from "../../../lib/data";
import { Tutorial } from "../../../lib/interface";

export const Tutorials = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-16 lg:mt-6">
            {tutorials.map((tutorial: Tutorial, index: number) => {
                const { imageMobile, imageDesktop, title, steps, duration } = tutorial;

                return (
                    <article
                        key={"tutorial-" + index}
                        className="grid gap-6 content-start bg-white p-4 rounded-lg"
                    >
                        <>
                            <Image
                                src={imageMobile}
                                alt="tutorial image"
                                className="md:hidden w-full rounded-lg"
                            />
                            <Image
                                src={imageDesktop}
                                alt="tutorial image"
                                className="hidden md:block w-full rounded-lg"
                            />
                        </>

                        <h3 className="text-base lg:text-lg font-medium">{title}</h3>
                        <div className="flex justify-between self-end text-sm text-[#757575]">
                            <span>{duration} video</span>
                            <span>{steps} steps</span>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Tutorials;
