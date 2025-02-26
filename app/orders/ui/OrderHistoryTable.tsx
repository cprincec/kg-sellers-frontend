"use client";

import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import OrderHistoryTableHeader from "./OrderHistoryTableHeader";
import OrderHistoryTableBody from "./OrderHistoryTableBody";
import OrderDetails from "./OrderDetails";

const OrderHistoryTable = ({ orders }: { orders: IOrderDTO[] }) => {
    const searchParams = useSearchParams();

    /*************************************************************************
     * If user was viewing an order detail modal before page reload
     * this will retrieve the order which the user was viewing prior to reload
     * and display that order
     ************************************************************************/
    const orderIndex = parseInt(searchParams.get("order-index") || "-1");
    const isValidIndex = orderIndex >= 0 && orderIndex < orders.length;

    const [showOrderDetails, setShowOrderDetails] = useState<boolean>(isValidIndex);

    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full">
                <OrderHistoryTableHeader />
                <OrderHistoryTableBody orders={orders} setShowOrderDetails={setShowOrderDetails} />
            </Table>

            {showOrderDetails && isValidIndex && (
                <OrderDetails
                    showOrderDetail
                    setShowOrderDetail={setShowOrderDetails}
                    order={orders[orderIndex]}
                />
            )}
        </div>
    );
};
export default OrderHistoryTable;
