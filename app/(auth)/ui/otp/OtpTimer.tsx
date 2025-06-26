"use client";

import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import React, { useEffect, useState } from "react";
import { OtpTimerProps } from "../../lib/interfaces/interface";
import { useOtpContext } from "../../contexts/otpContext";
import { Button } from "@/components/ui/button";

const OtpTimer: React.FC<OtpTimerProps> = () => {
    const { resendOTPMutationFunc, resendOTPMutationFuncIsPending } = useOtpContext();

    const initialTime = 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft === 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const handleResendOtp = () => {
        if (timeLeft > 0) return;

        if (resendOTPMutationFunc) {
            resendOTPMutationFunc();
        } else throw new Error("Some thing went wrong");

        setTimeLeft(initialTime);
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="w-12 font-bold">
                <CircularProgressbar
                    value={timeLeft}
                    maxValue={initialTime}
                    text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
                    styles={buildStyles({
                        pathColor: `green`,
                        textColor: "black",
                        trailColor: "#d6d6d6",
                    })}
                />
            </div>

            <p className="space-x-2 text-sm">
                <span>Did not get any code?</span>
                <span>
                    <Button
                        type="button"
                        variant={"ghost"}
                        className={`bg-transparent p-0 focus-visible:outline ${
                            timeLeft > 0
                                ? "text-kaiglo_grey-placeholder cursor-not-allowed"
                                : "text-kaiglo_brand-base cursor-pointer font-medium"
                        } text-base`}
                        onClick={handleResendOtp}
                        disabled={resendOTPMutationFuncIsPending}
                    >
                        Resend OTP
                    </Button>
                </span>
            </p>
        </div>
    );
};

export default OtpTimer;
