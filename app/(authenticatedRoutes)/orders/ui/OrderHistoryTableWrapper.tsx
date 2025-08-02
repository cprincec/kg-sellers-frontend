"use client";

import { Button } from "@/components/ui/button";
import { NoResultsIcon } from "../../dashboard/ui/icons";
import OrderHistoryTable from "./OrderHistoryTable";
import { useSearchParams } from "next/navigation";
import useGetAllOrders from "../hooks/useGetAllOrders";
import useGetOrdersByStatus from "../hooks/useGetOrdersByStatus";
import useGetOrdersBySearchTerm from "../hooks/useGetOrdersBySearchTerm";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import { orderTabs } from "../lib/data";

const OrderHistoryTableWrapper = () => {
    const searchParams = useSearchParams();
    const searchingFor = searchParams.get("searching-for");
    const { isFetchingOrders, orders, errorFetchingOrders } = useGetAllOrders();
    const { isFetchingOrdersBySearchTerm, ordersBySearchTerm, errorFetchingOrdersBySearchTerm } =
        useGetOrdersBySearchTerm();
    const { isFetchingOrdersByStatus, ordersByStatus, errorFetchingOrdersByStatus } = useGetOrdersByStatus();
    const status = searchParams.get("tab")?.toUpperCase();
    const activeTab = searchParams.get("tab");
    const searchTerm = searchParams.get("searching-for")?.trim();
    const ordersResponse = searchTerm
        ? ordersBySearchTerm
        : status && status !== "ALL" && orderTabs.includes(status)
        ? ordersByStatus
        : orders;

    const ordersResponseIsLoading =
        isFetchingOrders || isFetchingOrdersByStatus || isFetchingOrdersBySearchTerm;

    // Set custom message for orders results
    let noResultsMessage = "You have no orders";
    if (searchingFor) noResultsMessage = `No results for ${searchingFor}`;
    else if (activeTab && activeTab.toUpperCase() !== "ALL")
        noResultsMessage = `You have no ${activeTab} orders`;

    // const sortBy = searchParams.get("sort-by");
    // const sortRange = searchParams.get("sort-range");

    // filter orders by search string
    // if (searchingFor) {
    //     orders = orders.filter((order) =>
    //         order.productName.toLowerCase().includes(searchingFor.toLowerCase())
    //     );
    // }

    // sort by orders
    // if (sortBy && sortRange) {
    //     // sort by amount
    //     if (sortBy.toLowerCase() === "amount") {
    //         if (sortRange.toLowerCase() === "low-to-high") {
    //             orders.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
    //         } else if (sortRange.toLowerCase() === "high-to-low") {
    //             orders.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
    //         }
    //     }

    //     // Sort by quantity
    //     if (sortBy.toLowerCase() === "quantity") {
    //         if (sortRange.toLowerCase() === "low-to-high") {
    //             orders.sort((a, b) => a.quantity - b.quantity);
    //         } else if (sortRange.toLowerCase() === "high-to-low") {
    //             orders.sort((a, b) => b.quantity - a.quantity);
    //         }
    //     }
    // }

    if (ordersResponseIsLoading)
        return (
            <div className="lg:mx-2">
                <TableSkeleton />
            </div>
        );

    if (errorFetchingOrders || errorFetchingOrdersByStatus || errorFetchingOrdersBySearchTerm)
        return (
            <div className="grid items-center justify-center">
                <h2>There was an error fetching products.</h2>
                <Button variant={"critical_solid"}>Try again</Button>
            </div>
        );

    return ordersResponse?.content.length ? (
        <OrderHistoryTable
            orders={ordersResponse.content}
            totalPages={ordersResponse.totalPages}
            size={ordersResponse.size}
        />
    ) : (
        <NoResultsIcon title={noResultsMessage} />
    );
};
export default OrderHistoryTableWrapper;
