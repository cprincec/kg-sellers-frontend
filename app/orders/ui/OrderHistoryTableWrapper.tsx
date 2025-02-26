"use client";

import { NoResultsIcon } from "../../dashboard/ui/icons";
import OrderHistoryTable from "./OrderHistoryTable";
import { useSearchParams } from "next/navigation";
import { ordersList } from "../lib/data";

/******************************************************************************
 * This component fetches orders
 * Filters the product for search results
 * Sorts the orders as needed
 * Renders the order history table with list of  filterd or/and sorted orders
 ******************************************************************************/
const OrderHistoryTableWrapper = () => {
    const searchParams = useSearchParams();
    let orders = ordersList;

    const searchingFor = searchParams.get("searching-for");
    const sortBy = searchParams.get("sort-by");
    const sortRange = searchParams.get("sort-range");
    const activeTab = searchParams.get("tab");

    // Set custom message for order history results
    let noResultsMessage = "No results yet";
    if (searchingFor) noResultsMessage = `No results for ${searchingFor}`;
    else if (activeTab && activeTab !== "all") noResultsMessage = `You have no ${activeTab} orders`;

    // filter orders by search string
    if (searchingFor) {
        orders = orders.filter((order) =>
            order.productName.toLowerCase().includes(searchingFor.toLowerCase())
        );
    }

    // filter by order status
    if (activeTab) {
        orders = orders.filter((order) => {
            return activeTab === "all" || order.orderStatus.toLowerCase() === activeTab.toLowerCase();
        });
    }

    // sort by orders
    if (sortBy && sortRange) {
        // sort by amount
        if (sortBy.toLowerCase() === "amount") {
            if (sortRange.toLowerCase() === "low-to-high") {
                orders.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
            } else if (sortRange.toLowerCase() === "high-to-low") {
                orders.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
            }
        }

        // Sort by quantity
        if (sortBy.toLowerCase() === "quantity") {
            if (sortRange.toLowerCase() === "low-to-high") {
                orders.sort((a, b) => a.quantity - b.quantity);
            } else if (sortRange.toLowerCase() === "high-to-low") {
                orders.sort((a, b) => b.quantity - a.quantity);
            }
        }
    }

    return orders.length ? <OrderHistoryTable orders={orders} /> : <NoResultsIcon title={noResultsMessage} />;
};
export default OrderHistoryTableWrapper;
