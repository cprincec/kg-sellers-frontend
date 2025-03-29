import Image from "next/image";
import { ImageProduct1 } from "@/public/images/landingPage/images";
import { ITransactionDTO } from "../lib/interface";

const TransactionDetailsBody = ({ transaction }: { transaction: ITransactionDTO }) => {
    const { quantity, payoutAmount, rate, subTotal } = transaction;
    return (
        <div className="grid gap-3 lg:gap-6 px-3 lg:px-5">
            <section className="grid gap-3 lg:gap-4">
                <h4 className="text-base font-medium">Details</h4>
                <div className="flex items-center gap-3">
                    <Image src={ImageProduct1} alt="transaction product image" width={64} height={64}></Image>
                    <h5 className="text-sm md:text-base text-kaiglo_grey-800 font-medium w-full">
                        Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise
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
                            ₦4,000
                        </span>
                    </div>
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-sm md:text-base">Order date</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            12 August 2024
                        </span>
                    </div>
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-sm md:text-base">Delivery date</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            15 August 2024
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
                                ₦{parseFloat(subTotal).toLocaleString()}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 justify-between">
                            <p className="text-sm md:text-base`">Rate</p>
                            <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                                {rate}%
                            </span>
                        </div>
                        <div className="grid grid-cols-2 justify-between">
                            <p className="text-sm md:text-base">Commission</p>
                            <span className="font-medium text-sm md:text-base text-kaiglo_critical-600 text-right">
                                ₦4,000
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 justify-between px-3 py-4 border-t border-kaiglo_grey-200">
                        <p className="text-sm md:text-base">Payout amount</p>
                        <span className="font-medium text-sm md:text-base text-right text-kaiglo_grey-900">
                            ₦{parseFloat(payoutAmount).toLocaleString()}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default TransactionDetailsBody;
