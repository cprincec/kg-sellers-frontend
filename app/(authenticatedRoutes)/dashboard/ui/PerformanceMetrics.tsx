import { cn } from "@/lib/utils/utils";
import ProductPerformance from "./performanceMetrics/ProductPerformance";
import SalesPerformance from "./performanceMetrics/SalesPerformance";

const PerformanceMetrics = ({
    showEmptyState,
    className,
}: {
    showEmptyState: boolean;
    className?: string;
}) => {
    return (
        <section
            className={cn(
                "grid gap-2 md:gap-0 py-3 px-2 md:px-0 rounded-xl bg-white lg:border border-kaiglo_grey-200",
                className
            )}
        >
            <h2 className="md:p-[12px_12px_12px_12px] text-base text-kaiglo_grey-800 font-medium md:border-b border-kaiglo_grey-200 uppercase">
                PERFORMANCE METRICS
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 lg:px-6 md:py-4 lg:mt-2">
                <SalesPerformance showEmptyState={showEmptyState} />
                <ProductPerformance showEmptyState={showEmptyState} />
            </div>
        </section>
    );
};
export default PerformanceMetrics;
