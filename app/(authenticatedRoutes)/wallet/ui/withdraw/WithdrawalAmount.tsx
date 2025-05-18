import { Button, buttonVariants } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { IconDelete, IconNaira } from "@/public/icons/icons";

const WithdrawalAmount = () => {
    const [amount, setAmount] = useState("");
    const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0"];

    const handleKeyPress = (value: string) => {
        if (amount.length >= 9) return;

        setAmount((prev) => prev + value);
    };

    const handleBackspace = () => {
        setAmount((prev) => prev.slice(0, -1));
    };

    return (
        <DialogContent className="w-[90%] md:max-w-[410px] outline-none p-8 gap-4 rounded-2xl">
            <DialogHeader className="mb-0 pb-0">
                <DialogTitle className="text-xl text-kaiglo_grey-900 font-bold text-left mb-0 pb-0">
                    Amount
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
            {/* Amount Display */}
            <div className="w-full bg-[#F2F2F2] rounded-2xl p-7 flex items-center justify-start text-2xl font-medium gap-2">
                <Image src={IconNaira} alt="naira" width={49} height={72} />
                <div className="w-full max-w-[360px]">
                    <div className="text-[#757575] text-wrap text-4xl">{amount || ""}</div>
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
            <Link
                href={"/wallet?withdraw=otp"}
                className={cn(
                    buttonVariants({ variant: "primary" }),
                    "w-full text-white py-3 text-base font-medium"
                )}
            >
                Withdraw
            </Link>
        </DialogContent>
    );
};

export default WithdrawalAmount;
