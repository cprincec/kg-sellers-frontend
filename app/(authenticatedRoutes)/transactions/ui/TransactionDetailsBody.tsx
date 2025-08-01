import Image from "next/image";
import { ITransaction } from "../lib/interface";
import { format } from "date-fns";

const TransactionDetailsBody = ({ transaction }: { transaction: ITransaction }) => {
    const {
        orderItem: { quantity },
        amount,
        commissionPercentage,
        subTotal,
    } = transaction;
    return (
        <div className="grid gap-3 lg:gap-6 px-3 lg:px-5">
            <section className="grid gap-3 lg:gap-4">
                <h4 className="text-base font-medium">Details</h4>
                <div className="flex items-center gap-3">
                    <Image
                        src={transaction.productUrl}
                        alt={transaction.productName}
                        width={64}
                        height={64}
                    ></Image>
                    <h5 className="text-sm md:text-base text-kaiglo_grey-800 font-medium w-full">
                        {transaction.productName}
                    </h5>
                </div>
                <div className="grid gap-3">
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-sm md:text-base">Quantity</p>
                        <span className="font-medium text-sm text-right text-kaiglo_grey-900">
                            {quantity}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-sm md:text-base">Amount</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            ₦{transaction.orderItem.price.toLocaleString()}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-sm md:text-base">Order date</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            {format(transaction.orderDate, "dd MMMM yyyy")}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-sm md:text-base">Delivery date</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            {format(transaction.createdDate, "dd MMMM yyyy")}
                        </span>
                    </div>
                </div>
            </section>

            <section className="grid gap-3">
                <h4 className="text-base font-medium">Order Summary</h4>

                <div className="rounded-lg border border-kaiglo_grey-200">
                    <div className="grid gap-3 px-3 py-4">
                        <div className="grid grid-cols-2 justify-between">
                            <p className="text-sm md:text-base">Sub-total</p>
                            <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                                ₦{amount.toLocaleString()}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 justify-between">
                            <p className="text-sm md:text-base`">Rate</p>
                            <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                                {commissionPercentage}%
                            </span>
                        </div>
                        <div className="grid grid-cols-2 justify-between">
                            <p className="text-sm md:text-base">Commission</p>
                            <span className="font-medium text-sm md:text-base text-kaiglo_critical-600 text-right">
                                ₦{Number(transaction.commissionAmount).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 justify-between px-3 py-4 border-t border-kaiglo_grey-200">
                        <p className="text-sm md:text-base">Payout amount</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            ₦{subTotal.toLocaleString()}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default TransactionDetailsBody;
