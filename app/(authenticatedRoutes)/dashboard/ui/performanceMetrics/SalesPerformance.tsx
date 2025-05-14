import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { NoResultsIcon } from "../icons";
import { usePerformanceMetricsContext } from "../../contexts/performanceMetricsContext";
import SalesPerformanceChart from "./chart/SalesPerformanceChart";
import SalesPerformanceSkeleton from "@/app/ui/skeletons/dashboard/SalesPerformanceSkeleton";

const SalesPerformance = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const {
        loading,
        salesPerformance: { introData, chartData },
    } = usePerformanceMetricsContext();

    if (loading) return <SalesPerformanceSkeleton />;

    return (
        <div className="relative grid rounded-xl border border-kaiglo_grey-200 p-3">
            <div className=" flex justify-between items-start">
                <div className="grid gap-y-1">
                    <h3 className="text-sm text-kaiglo_grey-base lg:font-medium capitalize">
                        Sales Performance
                    </h3>
                    {!showEmptyState ? (
                        <div className="grid gap-1">
                            <p className="text-2xl text-kaiglo_grey-900 font-medium">{introData?.amount}</p>

                            <p className="flex items-center gap-1 text-sm text-kaiglo_grey-700 font-medium">
                                {introData?.isPositive ? (
                                    <span className="flex items-center gap-0.5 text-kaiglo_success-light">
                                        <ArrowUp className="w-4 h-4" /> {introData?.percentage}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-0.5 text-kaiglo_critical-error">
                                        <ArrowDown className="w-4 h-4" /> {introData?.percentage}
                                    </span>
                                )}
                                <span>from {introData?.date}</span>
                            </p>
                        </div>
                    ) : (
                        <strong className="text-3xl text-kaiglo_grey-900">--</strong>
                    )}
                </div>

                {/* View Report Button */}
                {!showEmptyState && (
                    <Button type="button" className="">
                        View report
                    </Button>
                )}
            </div>

            {/* Bar Chart */}
            {!showEmptyState ? (
                <SalesPerformanceChart data={chartData} className="mt-6 md:mt-10 lg:-mt-5" />
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
