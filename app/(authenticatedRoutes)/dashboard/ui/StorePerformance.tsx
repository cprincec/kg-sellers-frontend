import clsx from "clsx";
import { Fragment } from "react";
import Image from "next/image";
import { IconVerticalLine } from "@/public/icons/icons";
import Metric from "../../ui/metrics/Metric";
import useGetStorePerformance from "../hooks/useGetStorePerformance";
import { SectionError } from "@/app/ui/errors";
import { StorePerformanceSkeleton } from "./skeletons";
import { generateStorePerformanceData } from "../lib/utils";

const StorePerformance = ({ className, showEmptyState }: { className?: string; showEmptyState: boolean }) => {
    const {
        storePerformance,
        isFetchingStorePerformance,
        isRefetchingStorePerformance,
        refetchStorePerformance,
        errorFetchingStorePerformance,
    } = useGetStorePerformance();

    if (isFetchingStorePerformance || isRefetchingStorePerformance) return <StorePerformanceSkeleton />;
    if (errorFetchingStorePerformance)
        return (
            <SectionError
                title="Error fetching store performance data"
                retryFunction={refetchStorePerformance}
            />
        );

    const weeklyPerformance = storePerformance ? generateStorePerformanceData(storePerformance) : [];
    return (
        <section
            className={clsx(
                "grid gap-2 lg:gap-0 py-3 rounded-xl lg:bg-white border border-kaiglo_grey-200",
                className && className
            )}
        >
            <h2 className="md:p-[12px_24px_12px_24px] px-2 pb-1 text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200 uppercase">
                WEEKLY STORE PERFOMANCE
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 px-2 lg:px-4 lg:py-3">
                {weeklyPerformance.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            comparism={item.comparism}
                            showEmptyState={showEmptyState}
                            className="flex-1"
                            IsCurrency={item.isCurrency || false}
                        />

                        {/* divider */}
                        {index !== weeklyPerformance.length - 1 && (
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

export default StorePerformance;
