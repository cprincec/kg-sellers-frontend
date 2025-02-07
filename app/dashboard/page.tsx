"use client";

import { useState } from "react";
import { MenuIcon, NotificationIcon } from "./ui/navigation/sidebar-icons";
import SideBarMobile from "./ui/navigation/SideBarMobile";
import Metric from "./ui/metrics/Metric";
import PerformanceMetrics from "./ui/metrics/PerformanceMetrics";
import { useSearchParams } from "next/navigation";
import { BlackFridaySalesNotice, TermsOfContractNotice } from "./ui/icons";

const Dashboard = () => {
    const searchParams = useSearchParams();

    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    const empty = searchParams.get("from") === "register";

    const salesSummary = [
        {
            title: "COMPLETED SALES",
            body: "₦200,000",
            tip: "Processing sales are orders that have been placed by a user",
        },

        {
            title: "PROCESSING SALES",
            body: "₦100,000",
            tip: "Processing sales are orders that have been placed by a user",
        },
    ];

    const weeklyPerformance = [
        {
            title: "STORE VISITORS",
            body: "240",
            comparism: {
                value: "50%",
                isPositive: false,
                date: "last week",
            },
        },
        {
            title: "ORDERS",
            body: "150",
        },
        {
            title: "PRODUCT SALES",
            body: "₦3,900,000",
        },
        {
            title: "AVG. DAILY PRODUCT SALES",
            body: "30",
        },
    ];

    const productSummary = [
        {
            title: "ACTIVE INVENTORY",
            body: "100",
            tip: "Processing sales are orders that have been placed by a user",
        },

        {
            title: "LOW INVENTORY",
            body: "76",
            tip: "Processing sales are orders that have been placed by a user",
            variant: "warning",
        },
        {
            title: "OUT OF STOCK",
            body: "24",
            tip: "Processing sales are orders that have been placed by a user",
            variant: "error",
        },
    ];
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
                <section className="grid gap-3 p-2 rounded-xl bg-kaiglo_grey-50">
                    <h2 className="text-base text-kaiglo_grey-800 font-medium">SALES SUMMARY</h2>

                    <div className="grid gap-3">
                        {salesSummary.map((item) => (
                            <div key={item.title}>
                                <Metric
                                    title={item.title || ""}
                                    body={item.body || ""}
                                    tip={item.tip || ""}
                                    empty={empty}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Weekly Store Performance */}
                <section className="grid gap-3 p-2 rounded-xl bg-kaiglo_grey-50">
                    <h2 className="text-base text-kaiglo_grey-800 font-medium uppercase">
                        WEEKLY STORE PERFOMANCE
                    </h2>

                    <div className="grid gap-3">
                        {weeklyPerformance.map((item) => (
                            <div key={item.title}>
                                <Metric
                                    title={item.title || ""}
                                    body={item.body || ""}
                                    comparism={item.comparism || null}
                                    empty={empty}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Product Summary */}
                <section className="grid gap-3 p-2 rounded-xl bg-kaiglo_grey-50">
                    <h2 className="text-base text-kaiglo_grey-800 font-medium uppercase">PRODUCT SUMMARY</h2>

                    <div className="grid gap-3">
                        {productSummary.map((item) => (
                            <div key={item.title}>
                                <Metric
                                    title={item.title || ""}
                                    body={item.body || ""}
                                    tip={item.tip || ""}
                                    variant={item.variant || ""}
                                    empty={empty}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <PerformanceMetrics empty={empty} />
        </div>
    );
};

export default Dashboard;
