import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const GotSomethingToSell = () => {
    return (
        <div className="px-5 py-10 md:px-16 md:py-16">
            <div className="flex items-center justify-center px-4 py-6 mx-auto min-h-[300px] md:min-h-[356px] bg-center bg-cover bg-home-GSTS-mobile md:bg-home-GSTS-desktop rounded-2xl md:rounded-[32px]">
                <div className="grid gap-[72px] text-center md:max-w-[460px]">
                    <h2 className="text-[32px] leading-[40px] md:text-[56px] md:leading-[72px] text-white">
                        Got something to sell?
                    </h2>
                    <Link
                        href={"/register"}
                        className={cn(
                            buttonVariants({ variant: "primary" }),
                            "text-xl font-medium justify-self-center px-6 md:px-8 py-4 md:py-6 md:text-xl rounded-xl"
                        )}
                    >
                        Start selling
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GotSomethingToSell;
