"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowBackLink } from "../buttons";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { ROUTES } from "@/lib/consts";
import { IAccountRecoveryDTO } from "../../lib/interfaces/interface";
import useRecoverUserAccount from "../../hooks/recoverAccount/useRecoverAccount";
import useValidateAccountRecoveryOtp from "../../hooks/recoverAccount/useValidateAccountRecoveryOtp";
import { useOtpContext } from "../../contexts/otpContext";
import { IOtpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useSearchParams } from "next/navigation";

const AccountRecoveryForm = () => {
    const { setSearchParams } = useUpdateSearchParams();
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

    // Use the verify OTP hook to handle OTP verification
    const { isValidatingRecoveryOtp, validateRecoveryOtp } = useValidateAccountRecoveryOtp();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<IAccountRecoveryDTO>({
        defaultValues: {
            email: "",
            phone: "",
        },
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
        setOtpFormAction(() => (payload: IOtpFormDTO) => validateRecoveryOtp(payload));
        setOtpFormActionIsPending(isValidatingRecoveryOtp);
        setResendOTPMutationFunc(() => () => recoverUserAccount(values));
        setResendOTPMutationFuncIsPending(isRecoveringUserAccount);
    };

    return (
        <>
            <div className="pt-6 transition-all duration-300 ease-in-out">
                <form onSubmit={handleSubmit(recoverAccount)}>
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 gap-3">
                            {/* Email */}
                            {recoveryChannel === "email" && (
                                <ControlledModifiedInput
                                    name="email"
                                    control={control}
                                    placeholder="Email"
                                    type="email"
                                    error={errors.email}
                                    rules={{ required: true }}
                                    isRequired={true}
                                />
                            )}

                            {/* Phone */}
                            {recoveryChannel === "phone" && (
                                <div className="relative">
                                    <ControlledModifiedInput
                                        name="phone"
                                        control={control}
                                        rules={{ required: true }}
                                        placeholder="Phone Number"
                                        type="tel"
                                        error={errors.phone}
                                        isRequired={true}
                                    />
                                </div>
                            )}

                            {/* Recovery method starts */}
                            <div className="text-right">
                                <button
                                    type="button"
                                    onClick={() => {
                                        const channel = recoveryChannel === "email" ? "phone" : "email";
                                        setRecoveryChannel(channel);
                                        setSearchParams([{ "recovery-channel": channel }]);
                                    }}
                                    className="text-kaiglo_brand-base font-medium"
                                >
                                    {recoveryChannel === "email"
                                        ? "Use phone number instead"
                                        : "Use email instead"}
                                </button>
                            </div>
                            {/* Recovery method ends */}
                        </div>

                        <div className="flex flex-col gap-5">
                            <ModifiedButton
                                type="submit"
                                value={isRecoveringUserAccount ? "Please wait..." : "Send OTP"}
                                className="w-full p-3 rounded-full font-medium"
                                disabled={isRecoveringUserAccount}
                            />

                            <ArrowBackLink
                                href={ROUTES.login}
                                text={"Back to login"}
                                className="mx-auto mt-4"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AccountRecoveryForm;
