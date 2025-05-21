"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { OrderDetailProps } from "@/app/(auth)/interface";
import { OrderStatus } from "@/components/ui/order-status";
import { PackageIcon } from "@/app/(auth)/ui/register/storeSetup/stepper/stepper-icons";
import { getOrderStatusType } from "../lib/utils/order.utils";
import OrderDetailsBody from "./OrderDetailsBody";

const OrderDetails = ({ order }: OrderDetailProps) => {
    return (
        <DialogContent
            className=""
            subClassName="w-[90%] md:w-[343px] m-auto outline-none px-4 py-4 rounded-2xl gap-0"
            data-testid="otp-dialog"
        >
            <DialogHeader>
                <DialogTitle className="w-0 h-0 min-w-0" />
                <DialogDescription />
            </DialogHeader>
            <div className="grid gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center border border-kaiglo_grey-200 rounded-lg">
                        <PackageIcon className="w-5 h-5" strokeColor="#344054" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm text-kaiglo_grey-700 font-medium">Order ID {order.orderId}</h2>
                        <OrderStatus className="self-start" status={getOrderStatusType(order.orderStatus)}>
                            {order.orderStatus}
                        </OrderStatus>
                    </div>
                </div>
                <OrderDetailsBody order={order} />
            </div>
        </DialogContent>
    );
};

export default OrderDetails;
