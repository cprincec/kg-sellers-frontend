"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IOrder } from "../lib/interfaces/interface";
import { cn } from "@/lib/utils/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { formatDateDMMMYYY } from "../../products/lib/utils/utils";

const OrderDetails = ({ order }: { order: IOrder }) => {
    return (
        <DialogContent
            className="w-[90%] md:w-[443px] m-auto outline-none px-3 py-3 rounded-2xl gap-3"
            data-testid="otp-dialog"
        >
            <DialogHeader>
                <DialogTitle className="text-base text-start text-kaiglo_grey-900 font-medium">
                    Order Details
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
            <hr />
            <div className="grid gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-1 text-sm">
                        <p>Order ID</p>
                        <h3 className="text-kaiglo_grey-800 font-medium">{order.id}</h3>
                    </div>

                    <p
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "px-2 py-1 bg-kaiglo_success-100 rounded-lg self-end"
                        )}
                    >
                        N/A
                    </p>
                </div>

                <div className="flex items-center gap-3 py-2">
                    {order.orderItem.url && (
                        <Image
                            src={order.orderItem.url}
                            alt={order.orderItem.productName}
                            width={48}
                            height={48}
                            className="flex-shrink-0 w-12 h-12 rounded-lg"
                        />
                    )}
                    <h4 className="text-sm text-kaiglo_grey-800 font-normal w-[65%]">
                        {order.orderItem.productName}
                    </h4>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-kaiglo_grey-500">Date of purchase</p>
                            <h5 className="text-sm text-kaiglo_grey-800 font-medium">
                                {formatDateDMMMYYY(order.createdDate)}
                            </h5>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-kaiglo_grey-500">Color</p>
                            <h5 className="text-sm text-kaiglo_grey-800 font-medium capitalize">
                                {order.orderItem.color}
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-kaiglo_grey-500">Amount paid</p>
                            <h5 className="text-sm text-kaiglo_grey-800 font-medium capitalize">
                                NGN {order.orderItem.totalAmount.toLocaleString()}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default OrderDetails;
