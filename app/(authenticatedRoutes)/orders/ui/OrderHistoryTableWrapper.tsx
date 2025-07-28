"use client";

import { NoResultsIcon } from "../../dashboard/ui/icons";
import { IGetAllOrdersResponse } from "../lib/interfaces/response.interface";
import OrderHistoryTable from "./OrderHistoryTable";
import { useSearchParams } from "next/navigation";

const OrderHistoryTableWrapper = ({
    ordersResponse,
}: {
    ordersResponse: IGetAllOrdersResponse | undefined;
}) => {
    const searchParams = useSearchParams();
    const searchingFor = searchParams.get("searching-for");
    const activeTab = searchParams.get("tab");

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
