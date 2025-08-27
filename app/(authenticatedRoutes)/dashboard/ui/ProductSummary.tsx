import clsx from "clsx";
import { Fragment } from "react";
import { IconVerticalLine } from "@/public/icons/icons";
import Image from "next/image";
import Metric from "../../ui/metrics/Metric";
import useGetProductSummary from "../hooks/useGetProductSummary";
import { SectionError } from "@/app/ui/errors";
import { generateproductSummaryData } from "../lib/utils";
import { ProductSummarySkeleton } from "./skeletons";

const ProductSummary = ({ className, showEmptyState }: { className?: string; showEmptyState: boolean }) => {
    const {
        productSummary,
        isFetchingProductSummary,
        errorFetchingProductSummary,
        isRefetchingProductSummary,
        refetchProductSummary,
    } = useGetProductSummary();

    if (isFetchingProductSummary || isRefetchingProductSummary) return <ProductSummarySkeleton />;
    if (errorFetchingProductSummary)
        return <SectionError title="Error fetching product summary" retryFunction={refetchProductSummary} />;

    const productSummaryMock = productSummary ? generateproductSummaryData(productSummary) : [];

    return (
        <section
            className={clsx(
                "grid gap-2 lg:gap-0 py-3 rounded-xl lg:bg-white border border-kaiglo_grey-200",
                className && className
            )}
        >
            <h2 className="md:p-[12px_24px_12px_24px] px-2 pb-1 text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200 uppercase">
                PRODUCT SUMMARY
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 px-2 lg:px-4 lg:py-3">
                {productSummaryMock.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            tip={item.tip || ""}
                            variant={item.variant || ""}
                            showEmptyState={showEmptyState}
                            className="flex-1"
                        />

                        {/* divider */}
                        {index !== productSummaryMock.length - 1 && (
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
                ))}
            </div>
        </section>
    );
};

export default ProductSummary;
