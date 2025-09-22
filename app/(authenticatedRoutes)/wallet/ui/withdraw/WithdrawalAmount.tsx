"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils/utils";
import { useState } from "react";
import Image from "next/image";
import { IconDelete, IconNaira } from "@/public/icons/icons";
import useGetWithdrawalOTP from "../../hooks/useGetWithdrawalOTP";
import { useSession } from "next-auth/react";

const WithdrawalAmount = () => {
    const session = useSession();
    const [amount, setAmount] = useState("");
    const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0"];
    const { requestWithdrawalOTP, isRequestingWithdrawalOTP } = useGetWithdrawalOTP();

    const handleKeyPress = (value: string) => {
        if (value === "00" && amount.length >= 6) return;
        if ((!amount && (value === "0" || value === "00")) || amount.length >= 7) return;

        setAmount((prev) => prev + value);
    };

    const handleBackspace = () => {
        setAmount((prev) => prev.slice(0, -1));
    };

    return (
        <DialogContent className="min-w-[200px] w-[90%] md:min-w-[410px] md:w-[410px] m-auto outline-none p-8 gap-4 rounded-2xl">
            <DialogHeader className="mb-0 pb-0">
                <DialogTitle className="text-xl text-kaiglo_grey-900 font-bold text-left mb-0 pb-0">
                    Amount
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
            {/* Amount Display */}
            <div className="w-full bg-[#F2F2F2] rounded-2xl p-6 md:p-7 flex items-center justify-start text-2xl font-medium gap-2">
                <Image src={IconNaira} alt="naira" width={49} height={72} className="w-[38px] h-[38px]" />
                <div className="w-full">
                    <div className="text-[#757575] text-wrap text-4xl">
                        {amount ? parseFloat(amount).toLocaleString() : ""}
                    </div>
                </div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-4">
                {keypadNumbers.map((num) => (
                    <Button
                        key={num}
                        variant="ghost"
                        className="bg-transparent text-kaiglo_grey-base text-2xl px-0 py-2"
                        onClick={() => handleKeyPress(num)}
                    >
                        {num}
                    </Button>
                ))}
                <Button
                    variant="ghost"
                    className="text-kaiglo_grey-base bg-transparent px-0 py-2"
                    onClick={handleBackspace}
                >
                    <Image src={IconDelete} alt="delete" width={35.5} height={35.5} />
                </Button>
            </div>

            {/* Withdraw Button */}
            <Button
                className={cn(
                    buttonVariants({ variant: "primary" }),
                    "w-full text-white py-3 text-base font-medium"
                )}
                onClick={() => {
                    if (!amount) return;
                    if (!session || !session.data) {
                        console.error("withdrawal button clicked while no active session");
                        return;
                    }
                    requestWithdrawalOTP({
                        email: session.data.user.email,
                        phone: session.data.user.phone,
                        userId: session.data.user.id,
                        amount: parseFloat(amount),
                    });
                }}
                disabled={isRequestingWithdrawalOTP}
            >
                Withdraw
            </Button>
        </DialogContent>
    );
};

export default WithdrawalAmount;
