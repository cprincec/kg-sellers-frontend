"use client";

import { useEffect } from "react";
import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import OrderHistoryTableHeader from "./OrderHistoryTableHeader";
import OrderHistoryTableBody from "./OrderHistoryTableBody";
import OrderDetails from "./OrderDetails";
import { useModalContext } from "@/app/contexts/modalContext";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const OrderHistoryTable = ({ orders }: { orders: IOrderDTO[] }) => {
    const searchParams = useSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { deleteSearchParams } = useUpdateSearchParams();

    const orderIndex = parseInt(searchParams.get("order-index") || "-1", 10);
    const isValidIndex = orderIndex >= 0 && orderIndex < orders.length;

    useEffect(() => {
        if (isValidIndex) {
            setModalContent(<OrderDetails order={orders[orderIndex]} />);
            setOnClose(() => () => deleteSearchParams(["order-index"]));
            setShowModal(true);
        }
    }, [isValidIndex, orderIndex, orders, setModalContent, setShowModal]);

    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full">
                <OrderHistoryTableHeader />
                <OrderHistoryTableBody orders={orders} />
            </Table>
        </div>
    );
};

export default OrderHistoryTable;
