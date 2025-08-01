"use client";

import OrderHistoryTableWrapper from "./OrderHistoryTableWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { orderTabs } from "../lib/data";
import OrderHistoryToolsBar from "./OrderHistoryToolsBar";
import { Button } from "@/components/ui/button";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import useGetAllOrders from "../hooks/useGetAllOrders";
import useGetOrdersByStatus from "../hooks/useGetOrdersByStatus";
import useGetOrdersBySearchTerm from "../hooks/useGetOrdersBySearchTerm";

const OrderHistory = () => {
    // Data fetching is happening here instead of the wrapper to show the entire table (including toolbar) skeleton
    const { isFetchingOrders, orders, errorFetchingOrders } = useGetAllOrders();
    const { isFetchingOrdersBySearchTerm, ordersBySearchTerm, errorFetchingOrdersBySearchTerm } =
        useGetOrdersBySearchTerm();
    const { isFetchingOrdersByStatus, ordersByStatus, errorFetchingOrdersByStatus } = useGetOrdersByStatus();
    const searchParams = useSearchParams();
    const router = useRouter();
    const status = searchParams.get("tab")?.toUpperCase();
    const activeTab = searchParams.get("tab");
    const searchTerm = searchParams.get("searching-for")?.trim();
    const ordersResponse = searchTerm
        ? ordersBySearchTerm
        : status && status !== "ALL" && orderTabs.includes(status)
        ? ordersByStatus
        : orders;

    if (errorFetchingOrders || errorFetchingOrdersByStatus || errorFetchingOrdersBySearchTerm)
        return (
            <div className="grid items-center justify-center">
                <h2>There was an error fetching products.</h2>
                <Button variant={"critical_solid"}>Try again</Button>
            </div>
        );

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
                            {(isFetchingOrders ||
                                isFetchingOrdersByStatus ||
                                isFetchingOrdersBySearchTerm) && (
                                <div className="lg:mx-2">
                                    <TableSkeleton />
                                </div>
                            )}
                            
                            <OrderHistoryTableWrapper ordersResponse={ordersResponse} />
                        </TabsContent>
                    ))}
                </>
            </Tabs>
        </div>
    );
};
export default OrderHistory;
