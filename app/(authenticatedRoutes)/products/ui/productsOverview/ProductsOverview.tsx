import { Fragment } from "react";
import { IconVerticalLine } from "@/public/icons/icons";
import Image from "next/image";
import { cn } from "@/lib/utils/utils";
import { generateProductsOverviewArray } from "../../lib/utils/utils";
import useGetProductsOverview from "../../hooks/useGetProductsOverview";
import { Skeleton } from "@/components/ui/skeleton";
import ProductsOverviewCard from "./ProductsOverviewCard";

const ProductsOverview = ({ className }: { className?: string }) => {
    // fetch product overview
    const { productsOverviewData, isFetchingProductsOverview } = useGetProductsOverview();
    const data = generateProductsOverviewArray(productsOverviewData);

    // loading state
    if (isFetchingProductsOverview) {
        return (
            <div className={cn("grid lg:flex lg:items-center gap-2 lg:py-3 border rounded-xl", className)}>
                {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className="min-h-[90px] w-full" />
                ))}
            </div>
        );
    }

    return (
        <div className={cn("grid lg:flex lg:items-center lg:py-3 border rounded-xl", className)}>
            {data.map((overViewItem, index) => {
                const isFirst = index === 0;
                const isLast = index === data.length - 1;

                return (
                    <Fragment key={overViewItem.title}>
                        <ProductsOverviewCard overViewItem={overViewItem} isFirst={isFirst} isLast={isLast} />

                        {/* divider */}
                        {index !== data.length - 1 && (
                            <div className="hidden lg:block">
                                <Image
                                    src={IconVerticalLine}
                                    alt="divider"
                                    width={1}
                                    height={10}
                                    className="bg-kaiglo_grey-200 w-[2px] h-[64px]"
                                />
                            </div>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};
export default ProductsOverview;
