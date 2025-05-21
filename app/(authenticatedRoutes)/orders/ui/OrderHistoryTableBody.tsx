"use client";

import { OrderStatus } from "@/components/ui/order-status";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { getOrderStatusType } from "../lib/utils/order.utils";
import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const OrderHistoryTableBody = ({ orders }: { orders: IOrderDTO[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {orders.map((order: IOrderDTO, index: number) => (
                <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setSearchParams([{ "order-index": index.toString() }])}
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
