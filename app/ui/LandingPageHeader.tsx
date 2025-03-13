import { Button, buttonVariants } from "@/components/ui/button";
import { IconLogoYellow, IconMenu } from "@/public/icons/icons";
import Image from "next/image";
import { homeNavLinks } from "../lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LandingPageHeader = () => {
    return (
        <div className="flex justify-between items-center px-4 lg:px-20 py-2 md:py-4 lg:py-6 mt-2">
            {/* Logo starts */}
            <Image
                src={IconLogoYellow}
                alt="kaiglo logo"
                className="w-[160px] lg:w-[218px] h-[28px] lg:h-[37px]"
            />
            {/* Logo ends */}

            {/* nav items starts */}
            <div className="hidden md:flex gap-4 lg:gap-6 justify-end items-center">
                <div className="flex gap-4 lg:gap-4">
                    {homeNavLinks.map((link) => {
                        const { name, href } = link;
                        return (
                            <Link
                                key={name}
                                href={href}
                                className="text-kaiglo_grey-900 text-base font-medium capitalize"
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>

                <div>
                    <Link
                        href={"/login"}
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-transparent text-kaiglo_success-base text-lg"
                        )}
                    >
                        Login
                    </Link>
                    <Link
                        href={"/register"}
                        className={cn(buttonVariants({ variant: "primary" }), "text-lg")}
                    >
                        Start Selling
                    </Link>
                </div>
            </div>
            {/* nav items ends */}

            {/* Menu icon starts */}
            <Button variant={"outline"} className="md:hidden p-1">
                <Image src={IconMenu} alt="Menu icon" className="w-6 h6" />
            </Button>
            {/* Menu icon ends */}
        </div>

        //  {/* Logo starts */}
        // {/* Logo ends */}
    );
};

export default LandingPageHeader;
