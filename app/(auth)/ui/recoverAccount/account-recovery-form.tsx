"use client";

import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { IAccountRecoveryFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { Controller, Resolver, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { signInDefaultValues } from "@/lib/validations/defaults";
import { signInResolver } from "@/lib/validations/resolvers";
import AccountRecoveryOtpModal from "./AccountRecoveryOtpModal";
import { Input } from "@/components/ui/input";

const AccountRecoveryForm = () => {
    const [recoveryChannel, setRecoveryChannel] = useState("email");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const {
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm<IAccountRecoveryFormDTO>({
        defaultValues: { ...signInDefaultValues },
        resolver: signInResolver as Resolver<IAccountRecoveryFormDTO>,
    });

    // temporal
    const recovering = false;
    const [showOtpModal, setShowOtpModal] = useState(false);

    const recoverAccount = (values: IAccountRecoveryFormDTO) => {
        console.log(values);

        // Handle attempt to bypass email or phone number
        if (recoveryChannel === "email") {
            if (!values.email) {
                setError("email", { type: "manual", message: "Email is required for account recovery." });
                return;
            }
            setEmail(values.email);
            setPhone("");
        } else {
            if (!values.phone) {
                setError("phone", {
                    type: "manual",
                    message: "Phone number is required for account recovery.",
                });
                return;
            }
            setPhone(values.phone);
            setEmail(""); // Reset email
        }

        setShowOtpModal(true);
    };

    useEffect(() => {
        setValue("otpChannel", recoveryChannel);
    }, [recoveryChannel, setValue]);

    return (
        <>
            <div className="pt-6 transition-all duration-300 ease-in-out">
                <form onSubmit={handleSubmit(recoverAccount)}>
                    <div className="grid grid-cols-1 space-y-4">
                        {/* Email */}
                        {recoveryChannel === "email" && (
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
                                    className="pl-20"
                                    data-testid="phone"
                                />
                            </div>
                        )}

                        <Controller
                            name="otpChannel"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    value={recoveryChannel} // Ensure it always has the correct value
                                    type="hidden" // Hidden input ensures it's submitted
                                />
                            )}
                        />
                    </div>

                    {/* Recovery method starts */}
                    <div className="text-right pt-2">
                        <button
                            type="button"
                            onClick={() =>
                                setRecoveryChannel((prevValue) => (prevValue === "email" ? "phone" : "email"))
                            }
                            className="text-kaiglo_brand-base font-medium"
                        >
                            {recoveryChannel === "email" ? "Use phone number instead" : "Use email instead"}
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
                <AccountRecoveryOtpModal
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
