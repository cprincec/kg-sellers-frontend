"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { getOrderStatusType } from "../lib/utils/order.utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IOrder } from "../lib/interfaces/interface";
import { formatDateDMMMYYY } from "../../products/lib/utils/utils";

const OrderHistoryTableBody = ({ orders }: { orders: IOrder[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {orders.map((order, index: number) => (
                <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setSearchParams([{ "order-id": order.id }])}
                >
                    <TableCell className="p-3 text-base">{index + 1}</TableCell>
                    <TableCell className="p-3 text-sm">{order.id}</TableCell>
                    <TableCell className="p-3 text-sm text-wrap max-w-[500px]">
                        <div className="flex gap-1.5 items-center">
                            {order.orderItem.url && (
                                <Image
                                    src={order.orderItem.url}
                                    alt={order.orderItem.productName + "image"}
                                    width={48}
                                    height={48}
                                    className="flex-shrink-0 w-12 h-12 object-cover rounded-lg"
                                />
                            )}
                            <span className="mt-1.5">{order.orderItem.productName}</span>
                        </div>
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        {formatDateDMMMYYY(order.createdDate)}
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        ₦{order.orderItem.totalAmount.toLocaleString()}
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center capitalize">N/A</TableCell>
                    <TableCell className={"p-3 "}>
                        <div className="flex items-center justify-center">
                            <span
                                className={`inline-flex items-center justify-center rounded-lg capitalize text-sm font-medium px-3 py-1 ${getOrderStatusType(
                                    order.orderStatus
                                )}`}
                            >
                                {order.orderStatus}
                            </span>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default OrderHistoryTableBody;
