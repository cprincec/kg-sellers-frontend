"use client";

import OrderHistory from "./ui/OrderHistory";
import SalesSummary from "../dashboard/ui/SalesSummary";
import useGetCompletedSales from "./hooks/useGetCompletedSales";
import { generateSalesSummaryData } from "./lib/utils/order.utils";
import { SalesSummarySkeleton } from "../ui/skeletons";
import useGetProcessingSales from "./hooks/useGetProcessingSales";

const Orders = () => {
    const { isFetchingCompletedSales, completedSales } = useGetCompletedSales();
    const { isFetchingProcessingSales, processingSales } = useGetProcessingSales();

    return (
        <div className="grid gap-6 px-3 md:p-4 lg:p-6 max-md:mt-4">
            {/* Sales Summary */}
            {(isFetchingCompletedSales || isFetchingProcessingSales) && <SalesSummarySkeleton />}
            {completedSales && processingSales && (
                <SalesSummary
                    salesSummaryData={generateSalesSummaryData(completedSales, processingSales)}
                    showEmptyState={false}
                />
            )}

            {/* Order History */}
            <OrderHistory />
        </div>
    );
};

export default Orders;
