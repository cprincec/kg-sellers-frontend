"use client";

import { useState } from "react";
import { MenuIcon, NotificationIcon } from "./ui/navigation/sidebar-icons";
import SideBarMobile from "./ui/navigation/SideBarMobile";
import PerformanceMetrics from "./ui/metrics/PerformanceMetrics";
import { useSearchParams } from "next/navigation";
import { BlackFridaySalesNotice, TermsOfContractNotice } from "./ui/icons";
import SalesSummary from "./ui/metrics/SalesSummary";
import ProductSummary from "./ui/metrics/ProductSummary";
import StorePerformance from "./ui/metrics/StorePerformance";

const Dashboard = () => {
    const searchParams = useSearchParams();

    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    const showEmptyState = searchParams.get("from") === "register";

    return (
        <div className="py-2 md:pt-0 grid gap-6">
            <section className="flex justify-between p-4 border-b border-kaiglo_grey-200">
                <div className="flex gap-2 items-center">
                    <div className="lg:hidden" onClick={() => setShowSideBar(true)}>
                        <MenuIcon />
                    </div>
                    <h1 className="font-medium text-lg">Overview</h1>
                </div>

                <div className="flex items-center gap-3">
                    <NotificationIcon />
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#D0F5FC] shadow-[0px_1px_2px_0px_#E4FBFF]">
                        <strong>IU</strong>
                    </div>
                </div>

                <SideBarMobile showModal={showSideBar} setShowModal={setShowSideBar} />
            </section>

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
