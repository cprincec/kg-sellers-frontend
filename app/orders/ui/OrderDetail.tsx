"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Image from "next/image";
import { OrderDetailProps } from "@/app/(auth)/interface";
import { OrderStatus } from "@/components/ui/order-status";
import { PackageIcon } from "@/app/(auth)/ui/register/storeSetup/stepper-icons";
import { getOrderStatusType } from "../utils";

/*******************************************************
 * When closing an order detail modal ,
 * remove the order index from the url
 ********************************************************/
const OrderDetail = ({ order, showOrderDetail, setShowOrderDetail }: OrderDetailProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Dialog
            open={showOrderDetail}
            onOpenChange={() => {
                // remove order index query string from url
                const params = new URLSearchParams(searchParams);
                params.delete("order-index");
                router.replace(`${pathname}?${params.toString()}`);

                // Close order detail modal
                setShowOrderDetail(false);
            }}
        >
            <DialogContent
                className="w-[90%] md:w-[343px] outline-none px-4 py-4 rounded-2xl gap-0"
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
                            <h2 className="text-sm text-kaiglo_grey-700 font-medium">
                                Order ID {order.orderId}
                            </h2>
                            <OrderStatus
                                className="self-start"
                                status={getOrderStatusType(order.orderStatus)}
                            >
                                {order.orderStatus}
                            </OrderStatus>
                        </div>
                    </div>
                    <section className="grid gap-3">
                        <h4 className="text-sm font-medium">Order details</h4>
                        <div className="flex items-center gap-3">
                            <Image
                                src={order.productImage}
                                alt={order.productName}
                                width={64}
                                height={64}
                            ></Image>
                            <h5 className="text-sm text-kaiglo_grey-800 font-medium w-full">
                                {order.productName}
                            </h5>
                        </div>
                        <div className="grid gap-3">
                            <div className="grid grid-cols-2 justify-between">
                                <p className="text-sm">Quantity</p>
                                <span className="font-medium text-sm text-right text-kaiglo_grey-900">
                                    {order.quantity}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 justify-between">
                                <p className="text-sm">Amount</p>
                                <span className="font-medium text-sm text-right text-kaiglo_grey-900">
                                    ₦{order.amount}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 justify-between">
                                <p className="text-sm">Order date</p>
                                <span className="font-medium text-sm text-right text-kaiglo_grey-900">
                                    {order.orderDate}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 justify-between">
                                <p className="text-sm">Delivery date</p>
                                <span className="font-medium text-sm text-right text-kaiglo_grey-900">
                                    {order.deliveryDate}
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDetail;
