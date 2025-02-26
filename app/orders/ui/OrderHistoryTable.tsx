"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import OrderDetail from "./OrderDetail";
import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import { OrderStatus } from "@/components/ui/order-status";
import { getOrderStatusType } from "../utils";

const OrderHistoryTable = ({ orders }: { orders: IOrderDTO[] }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    /*************************************************************************
     * If user was viewing an order detail modal before page reload
     * this will retrieve the order which the user was viewing prior to reload
     * and display that order
     ************************************************************************/
    const orderIndex = parseInt(searchParams.get("order-index") || "-1");
    const isValidIndex = orderIndex >= 0 && orderIndex < orders.length;

    const [showOrderDetail, setShowOrderDetail] = useState<boolean>(isValidIndex);

    /*****************************************************************************
     * Tracking the order detail that is opened improves user experience
     * Because the order detail view is a modal, if user was looking at an order detail before network outage or failure
     * upon page reload, user will still be presented with same order detail
     *****************************************************************************/
    const handleShowOrderDetail = (index: number) => {
        // Update url with order id
        const params = new URLSearchParams(searchParams);
        params.set("order-index", index.toString());
        router.replace(`${pathname}?${params.toString()}`);

        // Show detail
        setShowOrderDetail(true);
    };

    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full">
                <TableHeader>
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap">
                            S/N
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap">
                            Order ID
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap max-w-[300px]">
                            Product name
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Date of purchase
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Amount
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Payment
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Status
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order: IOrderDTO, index: number) => (
                        <TableRow
                            key={index}
                            className="cursor-pointer"
                            onClick={() => handleShowOrderDetail(index)}
                        >
                            <TableCell className="p-3 text-base">{index + 1}</TableCell>
                            <TableCell className="p-3 text-sm">{order.orderId}</TableCell>
                            <TableCell className="p-3 text-sm text-wrap max-w-[300px]">
                                <div className="grid grid-flow-col gap-1.5 items-center">
                                    <Image
                                        src={order.productImage}
                                        alt={order.productName}
                                        width={48}
                                        height={48}
                                    />
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
            </Table>

            {showOrderDetail && isValidIndex && (
                <OrderDetail
                    showOrderDetail
                    setShowOrderDetail={setShowOrderDetail}
                    order={orders[orderIndex]}
                />
            )}
        </div>
    );
};
export default OrderHistoryTable;
