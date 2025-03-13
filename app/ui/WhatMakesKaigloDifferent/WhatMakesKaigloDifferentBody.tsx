import Image from "next/image";
import { WMKDData } from "../../lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const WhatMakesKaigloDifferentBody = () => {
    return (
        <div className="grid gap-12 ">
            {/* WMKD - What Make Kaiglo Different */}
            {WMKDData.map((data, index) => {
                const { imageMobile, imageDesktop, title, stat, statDesc, body } = data;
                const isOdd = index % 2 !== 0;
                return (
                    <div
                        key={title}
                        className="grid md:grid-cols-2 gap-4 md:gap-8 md:items-center md:justify-center"
                    >
                        <Image src={imageMobile} alt="title Image" className="md:hidden w-full h-full" />
                        <Image
                            src={imageDesktop}
                            alt="title Image"
                            width={500}
                            height={500}
                            className="hidden md:block w-full h-full"
                        />

                        <div
                            className={cn(
                                "grid gap-6 py-4 bg-white",
                                isOdd && "md:order-first md:self-start"
                            )}
                        >
                            <h3
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "justify-self-start text-base text-kaiglo_success-700 font-medium py-3 px-4 border-[#5FC6A4] shadow-[0px_4px_12px_0px_#0000000F_0px_0px_0px_1.2px_#5FC6A4] rounded-[32px]"
                                )}
                                style={{
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06), 0px 0px 0px 1.2px #5FC6A4",
                                }}
                            >
                                {title}
                            </h3>

                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <h4 className="text-2xl lg:text-[32px] lg:leading-[40px] font-bold">
                                        {stat}
                                    </h4>
                                    <h5 className="text-base lg:text-lg text-kaiglo_grey-700 font-medium">
                                        {statDesc}
                                    </h5>
                                </div>
                                <p className="text-base lg:text-lg text-kaiglo_grey-700 font-medium">
                                    {body}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WhatMakesKaigloDifferentBody;
