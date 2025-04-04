"use client";

import PerformanceMetrics from "./ui/metrics/PerformanceMetrics";
import { useSearchParams } from "next/navigation";
import { BlackFridaySalesNotice, TermsOfContractNotice } from "./ui/icons";
import SalesSummary from "./ui/metrics/SalesSummary";
import ProductSummary from "./ui/metrics/ProductSummary";
import StorePerformance from "./ui/metrics/StorePerformance";
import Header from "./ui/navigation/Header";

const Dashboard = () => {
    const searchParams = useSearchParams();

    const showEmptyState = searchParams.get("from") === "register";

    return (
        <div className="pb-4 grid gap-2 md:gap-1">
            <Header heading={"Overview"} description={"Track, manage your orders."} />

            {searchParams.get("from") === "register" && <TermsOfContractNotice />}
            <BlackFridaySalesNotice />

            <div className="grid gap-5 px-3 md:pl-1 md:pr-1 md:max-lg:p-4 lg:py-0 md:max-lg:bg-white">
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
