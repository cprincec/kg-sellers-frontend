import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { NoResultsIcon } from "../icons";
import SalesPerformanceChart from "./chart/SalesPerformanceChart";
import SalesPerformanceSkeleton from "@/app/ui/skeletons/dashboard/SalesPerformanceSkeleton";
import useGetSalesPerformance from "../../hooks/useGetSalesPerformance";
import { TableError } from "@/app/ui/errors";

const SalesPerformance = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const {
        salesPerformance,
        isFetchingSalesPerformance,
        errorFetchingSalesPerformance,
        isRefetchingSalesPerformance,
        refetchSalesPerformance,
    } = useGetSalesPerformance();

    if (isFetchingSalesPerformance || isRefetchingSalesPerformance) return <SalesPerformanceSkeleton />;
    if (errorFetchingSalesPerformance)
        return (
            <TableError
                title="Error fetching Sales performance data"
                retryFunction={refetchSalesPerformance}
            />
        );

    return (
        <div className="relative grid rounded-xl border border-kaiglo_grey-200 p-3">
            <div className=" flex justify-between items-start">
                <div className="grid gap-y-1">
                    <h3 className="text-sm text-kaiglo_grey-base lg:font-medium capitalize">
                        Sales Performance
                    </h3>
                    {!showEmptyState ? (
                        <div className="grid gap-1">
                            {salesPerformance && (
                                <p className="text-2xl text-kaiglo_grey-900 font-medium">
                                    ₦{salesPerformance.currentWeek.totalSales.toLocaleString()}
                                </p>
                            )}

                            <p className="flex items-center gap-1 text-sm text-kaiglo_grey-700 font-medium">
                                {salesPerformance?.trend === "UP" ? (
                                    <span className="flex items-center gap-0.5 text-kaiglo_success-light">
                                        <ArrowUp className="w-4 h-4" /> {salesPerformance?.percentageChange}%
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-0.5 text-kaiglo_critical-error">
                                        <ArrowDown className="w-4 h-4" /> {salesPerformance?.percentageChange}
                                        %
                                    </span>
                                )}
                                <span>from last week</span>
                            </p>
                        </div>
                    ) : (
                        <strong className="text-3xl text-kaiglo_grey-900">--</strong>
                    )}
                </div>

                {/* View Report Button */}
                {!showEmptyState && (
                    <Button type="button" disabled>
                        View report
                    </Button>
                )}
            </div>

            {/* Bar Chart */}
            {!showEmptyState ? (
                salesPerformance && (
                    <SalesPerformanceChart data={salesPerformance} className="mt-6 md:mt-10 lg:-mt-5" />
                )
            ) : (
                <NoResultsIcon
                    className="grid items-center justify-center -mt-8 py-6"
                    title="No results Yet"
                    description="Data will begin populating as soon as you commence making sales"
                />
            )}
        </div>
    );
};

export default SalesPerformance;
