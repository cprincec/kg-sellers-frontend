import { homeNavLinks } from "@/app/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavLinks = () => {
    return (
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
                <Link href={"/register"} className={cn(buttonVariants({ variant: "primary" }), "text-lg")}>
                    Start Selling
                </Link>
            </div>
        </div>
    );
};
export default NavLinks;
