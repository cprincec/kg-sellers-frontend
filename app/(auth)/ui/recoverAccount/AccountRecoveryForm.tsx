"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowBackLink } from "../buttons";
import { ROUTES } from "../../lib/constants";
import { IAccountRecoveryDTO, IOtpDTO } from "../../lib/interfaces/interface";
import useRecoverUserAccount from "../../hooks/recoverAccount/useRecoverAccount";
import useValidateAccountRecoveryOtp from "../../hooks/recoverAccount/useValidateAccountRecoveryOtp";
import { useOtpContext } from "../../contexts/otpContext";
import { useSearchParams } from "next/navigation";
import AccountRecoveryFormFields from "./AccountRecoveryFormFields";
import { Button } from "@/components/ui/button";
import { accountRecoveryDefaultValues } from "../../lib/validations/defaults";

const AccountRecoveryForm = () => {
    const searchParams = useSearchParams();
    const [recoveryChannel, setRecoveryChannel] = useState<string>(
        searchParams.get("recovery-channel") || "email"
    );
    const { recoverUserAccount, isRecoveringUserAccount } = useRecoverUserAccount();
    const {
        setResendOTPMutationFunc,
        setOtpFormAction,
        setOtpFormActionIsPending,
        setResendOTPMutationFuncIsPending,
    } = useOtpContext();

    const { isValidatingRecoveryOtp, validateRecoveryOtp } = useValidateAccountRecoveryOtp();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<IAccountRecoveryDTO>({
        defaultValues: accountRecoveryDefaultValues,
    });

    const recoverAccount = (values: IAccountRecoveryDTO) => {
        const { email, phone } = values;

        // Handle attempt to bypass email or phone number
        if (recoveryChannel === "email") {
            if (!email) {
                setError("email", { type: "required", message: "Email is required for account recovery." });
                return;
            }
        } else {
            if (!phone) {
                setError("phone", {
                    type: "required",
                    message: "Phone number is required for account recovery.",
                });
                return;
            }
        }

        // Get Otp for recovering user accout credentials
        recoverUserAccount(values);

        // update otp context with method to validate the received otp
        // and function to trigger resending of otp
        setOtpFormAction(() => (payload: IOtpDTO) => validateRecoveryOtp(payload));
        setOtpFormActionIsPending(isValidatingRecoveryOtp);
        setResendOTPMutationFunc(() => () => recoverUserAccount(values));
        setResendOTPMutationFuncIsPending(isRecoveringUserAccount);
    };

    return (
        <div className="pt-6 transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(recoverAccount)}>
                <div className="flex flex-col gap-10">
                    <AccountRecoveryFormFields
                        recoveryChannel={recoveryChannel}
                        setRecoveryChannel={setRecoveryChannel}
                        control={control}
                        errors={errors}
                    />

                    <div className="flex flex-col gap-5">
                        <Button
                            type="submit"
                            className="w-full h-12 p-3 rounded-full font-medium"
                            disabled={isRecoveringUserAccount}
                        >
                            {isRecoveringUserAccount ? "Please wait..." : "Send OTP"}
                        </Button>

                        <ArrowBackLink href={ROUTES.login} text={"Back to login"} className="mx-auto mt-4" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AccountRecoveryForm;
