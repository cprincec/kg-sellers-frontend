"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AccountRecoveryIcon } from "../logos";
import { ArrowBackLink } from "../buttons";
import { EnterOtpProps } from "../../lib/interfaces/interface";
import OtpFormInput from "@/app/(auth)/ui/otp/OtpFormInput";
import { useSearchParams } from "next/navigation";

const AccountRecoveryOtpModal = ({ email, phone }: EnterOtpProps) => {
    const searchParams = useSearchParams();
    const otpChannel = searchParams.get("recovery-channel");

    return (
        <DialogContent
            className="w-[90%] md:w-[450px] m-auto outline-none px-4 py-8 rounded-2xl"
            data-testid="otp-dialog"
        >
            <div className="lg:px-8 space-y-4 text-center">
                <DialogHeader>
                    <DialogTitle className="text-lg text-center">
                        <AccountRecoveryIcon className="w-fit mx-auto mb-4" />
                        Check your phone
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>

                <div>
                    <p className="-mt-3">
                        We&apos;ve sent an OTP to recover your account to{" "}
                        <strong>
                            {otpChannel === "phone" &&
                                `+234${phone.charAt(0) === "0" ? phone.substring(1) : phone}`}
                            {otpChannel === "email" && email}
                        </strong>
                    </p>

                    <div className="flex lg:justify-center lg:mx-auto my-8">
                        <OtpFormInput email={email} phone={phone} />
                    </div>

                    <ArrowBackLink
                        href="/login"
                        text={"Back to login"}
                        className="mx-auto mt-4 justify-center"
                    />
                </div>
            </div>
        </DialogContent>
    );
};

export default AccountRecoveryOtpModal;
