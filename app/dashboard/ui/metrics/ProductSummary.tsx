import clsx from "clsx";
import Metric from "./Metric";
import { Fragment } from "react";
import { IconVerticalLine } from "@/public/icons/icons";
import Image from "next/image";

const ProductSummary = ({ className, showEmptyState }: { className?: string; showEmptyState: boolean }) => {
    const productSummaryMock = [
        {
            title: "ACTIVE INVENTORY",
            body: "100",
            tip: "Processing sales are orders that have been placed by a user",
        },

        {
            title: "LOW INVENTORY",
            body: "76",
            tip: "Processing sales are orders that have been placed by a user",
            variant: "warning",
        },
        {
            title: "OUT OF STOCK",
            body: "24",
            tip: "Processing sales are orders that have been placed by a user",
            variant: "error",
        },
    ];
    return (
        <section
            className={clsx(
                "grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl lg:bg-white border border-kaiglo_grey-200",
                className && className
            )}
        >
            <h2 className="md:p-[12px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium md:border-b border-kaiglo_grey-200 uppercase">
                PRODUCT SUMMARY
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 lg:px-4 lg:py-3">
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
