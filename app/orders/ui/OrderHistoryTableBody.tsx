"use client";

import { OrderStatus } from "@/components/ui/order-status";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { getOrderStatusType } from "../utils/order.utils";
import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SetStateAction } from "react";

const OrderHistoryTableBody = ({
    orders,
    setShowOrderDetails,
}: {
    orders: IOrderDTO[];
    setShowOrderDetails: React.Dispatch<SetStateAction<boolean>>;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    /*****************************************************************************
     * Tracking the order detail that is opened improves user experience
     * Because the order detail view is a modal, if user was looking at an order detail before network outage or failure
     * upon page reload, user will still be presented with same order detail
     *****************************************************************************/
    const handleShowOrderDetails = (index: number) => {
        // Update url with order id
        const params = new URLSearchParams(searchParams);
        params.set("order-index", index.toString());
        router.replace(`${pathname}?${params.toString()}`);

        // Show detail
        setShowOrderDetails(true);
    };

    return (
        <TableBody>
            {orders.map((order: IOrderDTO, index: number) => (
                <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleShowOrderDetails(index)}
                >
                    <TableCell className="p-3 text-base">{index + 1}</TableCell>
                    <TableCell className="p-3 text-sm">{order.orderId}</TableCell>
                    <TableCell className="p-3 text-sm text-wrap max-w-[300px]">
                        <div className="grid grid-flow-col gap-1.5 items-center">
                            <Image src={order.productImage} alt={order.productName} width={48} height={48} />
                            <span className="mt-1.5">{order.productName}</span>
                        </div>
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">{order.dateOfPurchase}</TableCell>
                    <TableCell className="p-3 text-sm text-center">₦{order.amount}</TableCell>
                    <TableCell className="p-3 text-sm text-center capitalize">
                        {order.paymentStatus}
                    </TableCell>
                    <TableCell className={"p-3 "}>
                        <div className="flex items-center justify-center">
                            <OrderStatus status={getOrderStatusType(order.orderStatus)}>
                                {order.orderStatus}
                            </OrderStatus>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default OrderHistoryTableBody;
