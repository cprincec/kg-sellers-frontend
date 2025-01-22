"use client";

import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { IAccountRecoveryFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { Resolver, useForm } from "react-hook-form";
import { useState } from "react";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { signInDefaultValues } from "@/lib/validations/defaults";
import { signInResolver } from "@/lib/validations/resolvers";
import OtpModal from "../otp-modal";

const AccountRecoveryForm = () => {
    const [recoverPhone, setRecoverPhone] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IAccountRecoveryFormDTO>({
        defaultValues: signInDefaultValues,
        resolver: signInResolver as Resolver<IAccountRecoveryFormDTO>,
    });

    // temporal
    const recovering = false;
    const [showOtpModal, setShowOtpModal] = useState(false);

    const recoverAccount = (values: IAccountRecoveryFormDTO) => {
        setShowOtpModal(true);
    };

    return (
        <>
            <div className="pt-6 transition-all duration-300 ease-in-out">
                <form onSubmit={handleSubmit(recoverAccount)}>
                    <div className="grid grid-cols-1 space-y-4">
                        {/* Email */}
                        {recoverPhone && (
                            <ControlledModifiedInput
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                placeholder="Email"
                                type="email"
                                error={errors.email}
                                isRequired={true}
                                data-testid="email"
                            />
                        )}

                        {/* Phone */}
                        {!recoverPhone && (
                            <div className="relative">
                                <span className="absolute border-r border-kaiglo_grey-disabled text-kaiglo_grey-base text-base w-[72px] rounded-l-lg ml-[1px] h-[46px] flex justify-center items-center border-0 mt-[1px]">
                                    +234
                                </span>
                                <ControlledModifiedInput
                                    name="phone"
                                    control={control}
                                    rules={{ required: true }}
                                    placeholder="Phone Number"
                                    type="tel"
                                    error={errors.phone}
                                    isRequired={true}
                                    className="pl-20"
                                    data-testid="phone"
                                />
                            </div>
                        )}
                    </div>

                    {/* Recovery method starts */}
                    <div className="text-right pt-2">
                        <button
                            type="button"
                            onClick={() => setRecoverPhone((prevValue) => !prevValue)}
                            className="text-kaiglo_brand-base font-medium"
                        >
                            {recoverPhone ? "Use phone number instead" : "Use email instead"}
                        </button>
                    </div>
                    {/* Recovery method ends */}

                    <ModifiedButton
                        type="submit"
                        value={recovering ? "Please wait..." : "Send OTP"}
                        className="mt-12 w-full p-3 rounded-full font-medium"
                        disabled={recovering}
                        data-testid="signup-submit-button"
                    />
                </form>
            </div>
            {showOtpModal && (
                <OtpModal
                    showOtpModal={showOtpModal}
                    setShowOtpModal={setShowOtpModal}
                    email={email}
                    phone={phone}
                />
            )}
        </>
    );
};

export default AccountRecoveryForm;
