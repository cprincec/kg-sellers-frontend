"use client";

import { Control, FieldErrors } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { IAccountRecoveryDTO } from "../../lib/interfaces/interface";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const AccountRecoveryFormFields = ({
    control,
    errors,
    recoveryChannel,
    setRecoveryChannel,
}: {
    control: Control<IAccountRecoveryDTO, unknown, IAccountRecoveryDTO>;
    errors: FieldErrors<IAccountRecoveryDTO>;
    setRecoveryChannel: Dispatch<SetStateAction<string>>;
    recoveryChannel: string;
}) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
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
                    {recoveryChannel === "email" ? "Use phone number instead" : "Use email instead"}
                </button>
            </div>
            {/* Recovery method ends */}
        </div>
    );
};

export default AccountRecoveryFormFields;
