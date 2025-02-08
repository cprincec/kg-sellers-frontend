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
        <div className="pb-4 grid gap-6">
            {/* Header */}
            <Header />

            {searchParams.get("from") === "register" && <TermsOfContractNotice />}
            <BlackFridaySalesNotice />

            <div className="grid gap-5 px-4">
                {/* Sales Summary */}
                <SalesSummary showEmptyState={showEmptyState} />

                {/* Weekly Store Performance */}
                <StorePerformance showEmptyState={showEmptyState} />

                {/* Product Summary */}
                <ProductSummary showEmptyState={showEmptyState} />
            </div>

            <PerformanceMetrics showEmptyState={showEmptyState} />
        </div>
    );
};

export default Dashboard;
