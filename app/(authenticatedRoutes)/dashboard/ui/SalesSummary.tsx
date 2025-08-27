import clsx from "clsx";
import { IconVerticalLine } from "@/public/icons/icons";
import Image from "next/image";
import { Fragment } from "react";
import Metric from "../../ui/metrics/Metric";
import useGetCompletedSales from "../../orders/hooks/useGetCompletedSales";
import useGetProcessingSales from "../../orders/hooks/useGetProcessingSales";
import { SalesSummarySkeleton } from "../../ui/skeletons";
import { generateSalesSummaryData } from "../../orders/lib/utils/order.utils";
import { SectionError } from "@/app/ui/errors";

const SalesSummary = ({ className, showEmptyState }: { className?: string; showEmptyState: boolean }) => {
    const {
        isFetchingCompletedSales,
        completedSales,
        errorFetchingCompletedSales,
        isRefetchingCompletedSales,
        refetchCompletedSales,
    } = useGetCompletedSales();
    const {
        isFetchingProcessingSales,
        processingSales,
        errorFetchingProcessingSales,
        isRefetchingProcessingSales,
        refetchProcessingSales,
    } = useGetProcessingSales();

    if (
        isFetchingCompletedSales ||
        isFetchingProcessingSales ||
        isRefetchingProcessingSales ||
        isRefetchingCompletedSales
    )
        return <SalesSummarySkeleton />;
    if (errorFetchingCompletedSales || errorFetchingProcessingSales)
        return (
            <SectionError
                title="Error fetching sales summary data"
                retryFunction={() => {
                    refetchCompletedSales();
                    refetchProcessingSales();
                }}
            />
        );

    const salesSummaryData =
        completedSales && processingSales ? generateSalesSummaryData(completedSales, processingSales) : [];

    return (
        <section
            className={clsx(
                "grid gap-2 lg:gap-0 py-3 md:py-4 rounded-xl lg:bg-white border border-kaiglo_grey-200",
                className && className
            )}
        >
            <h2 className="md:p-[8px_24px_12px_24px] px-2 pb-1 text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                SALES SUMMARY
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 px-2 lg:px-4 lg:py-3">
                {salesSummaryData.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            tip={item.tip || ""}
                            comparism={item.comparism}
                            showEmptyState={showEmptyState}
                            className="flex-1"
                            IsCurrency={item.isCurrency || false}
                        />

                        {/* divider */}
                        {index !== salesSummaryData.length - 1 && (
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

export default SalesSummary;
