"use client";

import OrderHistoryTableWrapper from "./OrderHistoryTableWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tabs } from "../lib/data";
import OrderHistoryToolsBar from "./OrderHistoryToolsBar";

const OrderHistory = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const activeTab = searchParams.get("tab");
    const setActiveTab = (tab: string) => {
        if (!tab) return;

        const params = new URLSearchParams(searchParams);
        params.set("tab", tab);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="grid gap-2 md:gap-3 border border-kaiglo_grey-200 py-3 rounded-xl">
            <h3 className="text-base font-medium px-3 lg:py-3 lg:border-b border-kaiglo_grey-200">
                Order History
            </h3>

            <Tabs defaultValue={activeTab || "all"} className="grid gap-2 lg:gap-0">
                {/* TABS */}
                <TabsList className="hidden lg:flex items-center justify-start pt-0 bg-transparent rounded-none">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.label}
                            value={tab.value}
                            className="px-4 py-2"
                            onClick={() => setActiveTab(tab.value)}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <OrderHistoryToolsBar />

                {/* Tables */}
                <>
                    {tabs.map((tab) => (
                        <TabsContent key={`${tab.value}-orders`} value={tab.value} className="overflow-auto">
                            <OrderHistoryTableWrapper />
                        </TabsContent>
                    ))}
                </>
            </Tabs>
        </div>
    );
};
export default OrderHistory;
