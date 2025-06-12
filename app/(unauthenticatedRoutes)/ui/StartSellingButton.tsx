import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";

const StartSellingButton = ({ className }: { className?: string }) => {
    return (
        <Link
            href={"/register"}
            className={cn(
                buttonVariants({ variant: "primary" }),
                "justify-self-center px-6 md:px-8 py-4 md:py-6 text-xl font-bold rounded-xl",
                className
            )}
        >
            Start selling
        </Link>
    );
};
export default StartSellingButton;
