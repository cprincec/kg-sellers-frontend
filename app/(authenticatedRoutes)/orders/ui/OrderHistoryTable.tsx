"use client";

import { Table } from "@/components/ui/table";
import OrderHistoryTableHeader from "./OrderHistoryTableHeader";
import OrderHistoryTableBody from "./OrderHistoryTableBody";
import { IOrder } from "../lib/interfaces/interface";
import PaginationComponent from "@/components/shared/Pagination";
import { useModalContext } from "@/app/contexts/modalContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import OrderDetails from "./OrderDetails";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const OrderHistoryTable = ({
    orders,
    size,
    totalPages,
}: {
    orders: IOrder[];
    size: number;
    totalPages: number;
}) => {
    const searchParams = useSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { deleteSearchParams } = useUpdateSearchParams();
    const orderId = searchParams.get("order-id");

    useEffect(() => {
        if (orderId) {
            const order = orders.find((o) => o.id === orderId);
            if (order) {
                setModalContent(<OrderDetails order={order} />);
                setOnClose(() => () => deleteSearchParams(["order-id"]));
                setShowModal(true);
            }
        }
    }, [orderId, orders]);

    return (
        <div className="overflow-auto">
            <div className="mx-3">
                <Table className="w-[950px] lg:w-full">
                    <OrderHistoryTableHeader />
                    <OrderHistoryTableBody orders={orders} />
                </Table>
            </div>

            <PaginationComponent pageSize={size} totalPages={totalPages} className="mx-5" />
        </div>
    );
};

export default OrderHistoryTable;
