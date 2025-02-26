"use client";

import { ImageProduct1 } from "@/public/images/images";
import { NoResultsIcon } from "../../dashboard/ui/icons";
import OrderHistoryTable from "./OrderHistoryTable";
import { useSearchParams } from "next/navigation";

/********
 * This component fetches orders
 * Filters the product for search results
 * Sorts the orders as needed
 * Renders the order history table with list of  filter or/and sorted orders
 */
const OrderHistoryTableWrapper = () => {
    const searchParams = useSearchParams();

    let orders = [
        {
            productImage: ImageProduct1,
            orderId: "KG-6445496452",
            productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
            dateOfPurchase: "01 Aug 2024",
            amount: "2,400",
            paymentStatus: "paid",
            orderStatus: "new",
            quantity: 4,
            orderDate: "12 August 2024",
            deliveryDate: "14 August 2024",
        },
        {
            productImage: ImageProduct1,
            orderId: "KG-6445496452",
            productName: "Bose Gold Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
            dateOfPurchase: "01 Aug 2024",
            amount: "2,300",
            paymentStatus: "paid",
            orderStatus: "cancelled",
            quantity: 1,
            orderDate: "12 August 2024",
            deliveryDate: "14 August 2024",
        },
        {
            productImage: ImageProduct1,
            orderId: "KG-6445496452",
            productName: "Bose Diamond Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
            dateOfPurchase: "01 Aug 2024",
            amount: "2,200",
            paymentStatus: "paid",
            orderStatus: "processing",
            quantity: 14,
            orderDate: "12 August 2024",
            deliveryDate: "14 August 2024",
        },
        {
            productImage: ImageProduct1,
            orderId: "KG-6445496452",
            productName: "Bose Red Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
            dateOfPurchase: "01 Aug 2024",
            amount: "2,100",
            paymentStatus: "paid",
            orderStatus: "shipped",
            quantity: 8,
            orderDate: "12 August 2024",
            deliveryDate: "14 August 2024",
        },
        {
            productImage: ImageProduct1,
            orderId: "KG-6445496452",
            productName: "Bose Green Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
            dateOfPurchase: "01 Aug 2024",
            amount: "2,000",
            paymentStatus: "paid",
            orderStatus: "delivered",
            quantity: 9,
            orderDate: "12 August 2024",
            deliveryDate: "14 August 2024",
        },
    ];

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
