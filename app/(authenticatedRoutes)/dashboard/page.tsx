"use client";

import { useSearchParams } from "next/navigation";
import { BlackFridaySalesNotice, TermsOfContractNotice } from "./ui/icons";
import SalesSummary from "./ui/SalesSummary";
import ProductSummary from "./ui/ProductSummary";
import StorePerformance from "./ui/StorePerformance";
import PerformanceMetrics from "./ui/PerformanceMetrics";

const Dashboard = () => {
    const searchParams = useSearchParams();
    const showEmptyState = searchParams.get("from") === "register";

    return (
        <div className="pb-4 lg:pb-0 grid gap-3 md:gap-0 border lg:bg-kaiglo_grey-200">
            {searchParams.get("from") === "register" && <TermsOfContractNotice />}
            <BlackFridaySalesNotice />
            <div className="grid gap-5 lg:gap-1 px-3 md:pl-1 md:pr-1 lg:py-1">
                {/* Sales Summary */}
                <SalesSummary className="bg-kaiglo_grey-100" showEmptyState={showEmptyState} />

                {/* Weekly Store Performance */}
                <StorePerformance className="bg-kaiglo_grey-100" showEmptyState={showEmptyState} />

                {/* Product Summary */}
                <ProductSummary className="bg-kaiglo_grey-100" showEmptyState={showEmptyState} />

                <PerformanceMetrics showEmptyState={showEmptyState} />
            </div>
        </div>
    );
};

export default Dashboard;
