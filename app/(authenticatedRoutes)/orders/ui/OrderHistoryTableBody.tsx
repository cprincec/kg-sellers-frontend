"use client";

import { OrderStatus } from "@/components/ui/order-status";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { getOrderStatusType } from "../lib/utils/order.utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IOrder } from "../lib/interfaces/interface";

const OrderHistoryTableBody = ({ orders }: { orders: IOrder[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {orders.map((order, index: number) => (
                <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setSearchParams([{ "order-index": index.toString() }])}
                >
                    <TableCell className="p-3 text-base">{index + 1}</TableCell>
                    <TableCell className="p-3 text-sm">{order.id}</TableCell>
                    <TableCell className="p-3 text-sm text-wrap max-w-[300px]">
                        <div className="grid grid-flow-col gap-1.5 items-center">
                            <Image
                                src={order.orderItem.url}
                                alt={order.orderItem.productName}
                                width={48}
                                height={48}
                            />
                            <span className="mt-1.5">{order.orderItem.productName}</span>
                        </div>
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">{order.createdDate}</TableCell>
                    <TableCell className="p-3 text-sm text-center">₦{order.orderItem.totalAmount}</TableCell>
                    <TableCell className="p-3 text-sm text-center capitalize">
                        {/* {order.paymentStatus} */}
                        Paid
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
