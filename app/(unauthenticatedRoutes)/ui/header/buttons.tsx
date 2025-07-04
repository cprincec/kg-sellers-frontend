import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";

export const LoginAndRegisterButtons = ({ status }: { status: string }) => {
    if (status === "loading")
        return (
            <div className="grid gap-1 grid-flow-col">
                <Skeleton className="w-[82px] h-[44px]" />
                <Skeleton className="w-[140px] h-[44px]" />
            </div>
        );

    return (
        <>
            {/* Desktop */}
            <div className="hidden md:block">
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

            {/* Mobile */}
            <div className="grid md:hidden gap-6">
                <Link
                    href={"/register"}
                    className={cn(
                        buttonVariants({ variant: "primary" }),
                        "text-sm font-medium rounded-full py-4 border border-kaiglo_success-base"
                    )}
                >
                    START SELLING
                </Link>
                <Link
                    href={"/login"}
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "text-sm font-medium py-4 bg-transparent text-kaiglo_grey-900 border-kaiglo_grey-900 rounded-full"
                    )}
                >
                    LOGIN
                </Link>
            </div>
        </>
    );
};
