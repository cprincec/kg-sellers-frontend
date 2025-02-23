"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { AccountRecoveryIcon } from "../logos";
import { ArrowBackLink } from "../buttons";
import { EnterOtpProps } from "../../interface";
import OtpFormInput from "@/app/(auth)/ui/OtpFormInput";

const AccountRecoveryOtpModal = ({ showOtpModal, setShowOtpModal, email, phone }: EnterOtpProps) => {
    const loginUrl = `/login?email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;

    return (
        <Dialog open={showOtpModal} onOpenChange={setShowOtpModal}>
            <DialogContent
                className="w-[90%] md:w-[450px] outline-none px-4 py-8 rounded-2xl"
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
                            <strong>{email ? email : `+234${phone}`}</strong>
                        </p>

                        <div className="flex lg:justify-center lg:mx-auto my-8">
                            <OtpFormInput
                                email={email}
                                phone={phone}
                                setShowOtpModal={setShowOtpModal}
                                continueTo={loginUrl}
                            />
                        </div>

                        <ArrowBackLink
                            href="/login"
                            text={"Back to login"}
                            className="mx-auto mt-4 justify-center"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AccountRecoveryOtpModal;
