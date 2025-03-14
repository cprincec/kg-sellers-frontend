import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import Image from "next/image";

const OrderDetailsBody = ({ order }: { order: IOrderDTO }) => {
    return (
        <section className="grid gap-3">
            <h4 className="text-sm font-medium">Order details</h4>
            <div className="flex items-center gap-3">
                <Image src={order.productImage} alt={order.productName} width={64} height={64}></Image>
                <h5 className="text-sm text-kaiglo_grey-800 font-medium w-full">{order.productName}</h5>
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
    );
};
export default OrderDetailsBody;
