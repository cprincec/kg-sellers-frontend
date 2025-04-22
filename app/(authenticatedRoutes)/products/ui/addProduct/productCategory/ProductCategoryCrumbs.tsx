import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/public/icons/icons";
import Image from "next/image";

const ProductCategoryCrumbs = ({ className }: { className?: string }) => {
    return (
        <ul
            className={cn(
                "flex gap-2 items-center px-2 py-1 font-medium text-sm md:text-base bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg",
                className
            )}
        >
            <li className="p-1">Mens&#39;s fashion</li>
            <Image src={IconArrowRight} alt="arrow" />
            <li className="p-1">Shoes</li>
            <Image src={IconArrowRight} alt="arrow" className="" />
            <li className="p-1">Sneakers</li>
        </ul>
    );
};
export default ProductCategoryCrumbs;
