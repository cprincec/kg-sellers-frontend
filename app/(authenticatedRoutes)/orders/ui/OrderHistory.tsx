"use client";

import OrderHistoryTableWrapper from "./OrderHistoryTableWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { orderTabs } from "../lib/data";
import OrderHistoryToolsBar from "./OrderHistoryToolsBar";

const OrderHistory = () => {
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab");
    const router = useRouter();

    return (
        <div className="grid gap-2 md:gap-3 border border-kaiglo_grey-200 py-3 rounded-xl">
            <h3 className="text-base font-medium px-3 lg:py-3 lg:border-b border-kaiglo_grey-200">
                Order History
            </h3>

            <Tabs value={activeTab || "ALL"} className="grid gap-2 lg:gap-0">
                {/* Tabs */}
                <TabsList className="hidden min-h-min lg:flex flex-wrap items-center justify-start pt-0 bg-transparent rounded-none">
                    <div>
                        {orderTabs.map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="px-4 py-2 lowercase first-letter:capitalize"
                                onClick={() => {
                                    router.replace(`/orders?tab=${tab}`);
                                }}
                            >
                                {tab === "CANCELLED_ORDER" ? "Cancelled" : tab}
                            </TabsTrigger>
                        ))}
                    </div>
                </TabsList>

                {/* ToolBar */}
                <OrderHistoryToolsBar />

                {/* Table */}
                <>
                    {orderTabs.map((tab) => (
                        <TabsContent key={`${tab}-orders`} value={tab} className="overflow-auto">
                            <OrderHistoryTableWrapper />
                        </TabsContent>
                    ))}
                </>
            </Tabs>
        </div>
    );
};
export default OrderHistory;
