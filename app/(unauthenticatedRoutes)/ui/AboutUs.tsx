import { cn } from "@/lib/utils";
import { aboutUsdata } from "../../lib/data";
import { buttonVariants } from "@/components/ui/button";

const AboutUs = () => {
    const { title, body, stats } = aboutUsdata;
    return (
        <div className="relative md:flex md:items-center md:justify-center px-4 py-6 max-md:pt-8 bg-[#06482D] lg:min-h-[500px]">
            <article className="lg:grid lg:gap-12">
                <div className="grid md:grid-cols-[2fr_3fr] lg:grid-cols-2 gap-6 md:gap-0 md:max-lg:px-4 md:max-lg:py-6 lg:max-w-[1200px] lg:max-h-[144px] lg:mx-auto">
                    <h2
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "justify-self-start md:justify-self-start md:self-start px-4 py-3 text-xl text-kaiglo_success-700 md:font-medium bg-kaiglo_success-50 rounded-[32px]"
                        )}
                    >
                        {title}
                    </h2>
                    <p className="text-xl text-white">{body}</p>
                </div>

                {/* Stats starts */}
                <div className="grid md:grid-cols-3 gap-6 lg:items-end">
                    {stats.map((stat) => {
                        const { desc, value } = stat;
                        return (
                            <div key={desc + "-stat"} className="grid gap-3 px-4 py-6">
                                <h3 className="text-[40px] leading-[48px] lg:text-5xl text-white font-bold">
                                    {value}
                                </h3>
                                <p className="text-xl text-white">{desc}</p>
                            </div>
                        );
                    })}
                </div>
                {/* Stats ends */}
            </article>

            {/* Background design starts */}
            <div className="md:hidden absolute top-[calc(50%-140px)] md:top-0 bottom-0 right-0 left-0 bg-center bg-cover bg-home-about-us-mobile"></div>
            <div className="hidden md:block absolute top-0 bottom-0 right-[67%] left-0 bg-center bg-cover bg-home-about-us-desktop-1"></div>
            <div className="hidden md:block absolute top-0 bottom-0 right-[33%] left-[33%] bg-center bg-cover bg-home-about-us-desktop-2"></div>
            <div className="hidden md:block absolute top-0 bottom-0 right-0 left-[67%] bg-center bg-cover bg-home-about-us-desktop-3"></div>
            {/* Background design ends */}
        </div>
    );
};

export default AboutUs;
