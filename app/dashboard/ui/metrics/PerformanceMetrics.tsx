import ProductPerformance from "./performanceMetrics/ProductPerformance";
import SalesPerformance from "./performanceMetrics/SalesPerformance";

const PerformanceMetrics = ({ showEmptyState }: { showEmptyState: boolean }) => {
    return (
        <div className="grid gap-3 px-4">
            <h2 className="uppercase text-base text-kaiglo_grey-800 font-medium">PERFROMANCE METRICS</h2>
            <div className="grid gap-6">
                <SalesPerformance showEmptyState={showEmptyState} />
                <ProductPerformance showEmptyState={showEmptyState} />
            </div>
        </div>
    );
};
export default PerformanceMetrics;
