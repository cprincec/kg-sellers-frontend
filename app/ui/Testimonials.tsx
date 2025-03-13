import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonialsData } from "../lib/data";

const Testimonials = () => {
    const { title, desc, testimonies } = testimonialsData;
    return (
        <article className="hidden md:grid gap-16 py-16 px-[120px]">
            <div className="grid gap-4 max-w-[898px] mx-auto text-center">
                <h2 className="text-[40px] leading-[48px] font-bold">{title}</h2>
                <p className="text-lg text-kaiglo_grey-600 font-medium">{desc}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {testimonies.map((aTestimony, index) => {
                    const { testimony, name, position, company } = aTestimony;

                    return (
                        <Card
                            key={name + "-" + index}
                            className="gap-0 px-4 py-6 bg-white border border-kaiglo_grey-100 shadow-[0px_4px_20px_0px_#0000000F]"
                        >
                            <CardHeader className="grid gap-2 p-0">
                                <CardTitle className="text-base font-medium text-kaiglo_grey-900">
                                    {testimony}
                                </CardTitle>
                                <CardDescription className="text-base text-[#344054] font-medium">
                                    {name}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-kaiglo_grey-base capitalize">
                                    {position ? `${position}, ${company}` : company}{" "}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </article>
    );
};

export default Testimonials;
