import { cn } from "@/lib/utils/utils";
import { IconArrowRight } from "@/public/icons/icons";
import Image from "next/image";
import { IProductCategoryDTO } from "../../../lib/interface";

const ProductCategoryCrumbs = ({
    categoryObject,
    className,
}: {
    categoryObject: IProductCategoryDTO;
    className?: string;
}) => {
    const categoryArray = Object.values(categoryObject);
    return (
        <div className="overflow-x-auto max-md:max-w-screen  lg:max-w-[750px]">
            <ul
                className={cn(
                    " flex md:flex-wrap gap-2 items-center px-2 py-1 bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg",
                    className
                )}
            >
                {categoryArray.map((category, index) => (
                    <li key={index} className="flex gap-2 items-center ">
                        <p className="w-max font-medium text-sm text-kaiglo_grey-800 px-1 truncate">
                            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                        </p>

                        {index < categoryArray.length - 1 && (
                            <div className="relative w-4 h-4 flex-shrink-0">
                                <Image src={IconArrowRight} alt="arrow" fill className="" />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductCategoryCrumbs;
