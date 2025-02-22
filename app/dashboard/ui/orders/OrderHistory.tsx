"use client";

import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import SortBy from "./sort/SortBy";
import { CalendarIcon, DownloadIcon } from "./icons";
import OrderHistoryTableWrapper from "./OrderHistoryTableWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const OrderHistory = () => {
    const tabs = [
        { label: "All", value: "all" },
        { label: "New", value: "new" },
        { label: "Pending", value: "pending" },
        { label: "Shipped", value: "shipped" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Returned", value: "returned" },
    ];

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
            <h3 className="text-base font-medium lg:px-3 lg:py-3 lg:border-b border-kaiglo_grey-200">
                Order History
            </h3>

            <Tabs defaultValue={activeTab || "all"} className="grid gap-2 md:gap-5">
                {/* TABS */}
                <TabsList className="hidden md:flex items-center justify-start pt-0 border-b border-kaiglo_grey-200 bg-transparent rounded-none">
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

                <div className="grid grid-cols-[3fr_1fr] md:grid-cols-[3fr_1fr] lg:grid-cols-[35%_65%] gap-3 lg:px-3">
                    {/* Search bar */}
                    <SearchBar placeholder="Search" className="md:hidden" scroll={false} />
                    <SearchBar
                        placeholder="Search product by name or SKU"
                        className="hidden md:block"
                        scroll={false}
                    />

                    <div className="flex gap-3 justify-end lg:px-3">
                        {/* filter */}
                        <Button variant={"outline"}>
                            <CalendarIcon className="" />
                        </Button>

                        {/* Sort */}
                        <SortBy />

                        {/* Download */}
                        <Button className="text-base rounded-3xl hidden md:flex">
                            <DownloadIcon width="24px" height="24px" />
                            <span>Download</span>
                        </Button>
                    </div>
                </div>

                {/* Tables */}
                <>
                    {tabs.map((tab) => (
                        <TabsContent
                            key={`${tab.value}-orders`}
                            value={tab.value}
                            className="overflow-x-auto"
                        >
                            <OrderHistoryTableWrapper />
                        </TabsContent>
                    ))}
                </>
            </Tabs>
        </div>
    );
};
export default OrderHistory;
