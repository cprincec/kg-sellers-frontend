import { cn } from "@/lib/utils";
import { howItWorksData } from "../../lib/data";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const HowItWorks = () => {
    const { section, title, desc, cards } = howItWorksData;
    return (
        <article className="grid gap-6 md:gap-8 py-10 md:py-16 px-5 md:px-[120px] bg-kaiglo_grey-100">
            <section className="grid gap-4 text-center max-w-[750px] mx-auto">
                <h2
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "justify-self-center md:text-base md:font-medium text-kaiglo_success-700 border-kaiglo_success-700 rounded-[32px]"
                    )}
                    style={{
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06), 0px 0px 0px 1.2px #5FC6A4",
                    }}
                >
                    {section}
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold">{title}</h3>
                <p className="text-base lg:text-lg font-medium">{desc}</p>
            </section>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 lg:max-w-[1200px] mx-auto">
                {cards.map((card) => {
                    const { icon, heading, body } = card;

                    return (
                        <Card key={heading} className="bg-white shadow-none">
                            <CardHeader className="grid gap-6 justify-start px-4 py-5">
                                <Image src={icon} alt={heading + "image"} className="w-10 h-10" />
                                <div className="grid gap-4">
                                    <CardTitle className="text-xl font-bold text-kaiglo_grey-900">
                                        {heading}
                                    </CardTitle>
                                    <CardDescription className="text-base text-[#344054] font-medium">
                                        {body}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    );
                })}
            </div>
        </article>
    );
};

export default HowItWorks;
