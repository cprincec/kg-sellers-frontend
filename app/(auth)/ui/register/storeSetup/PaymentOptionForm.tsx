"use client";

import { IPaymentOptionFormDTO } from "@/app/(auth)/interface";
import { paymentOptionDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { paymentoptionSchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/wallet/ui/payoutThreshold/FormNavButtons";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ConfirmAccountModal from "./ConfirmAccountModal";

export const PaymentOptionForm = ({ showNote = true }: { showNote?: boolean }) => {
    const [showConfirmAccountModal, setShowConfirmAccountModal] = useState(false);
    const [bankDetails, setBankDetails] = useState<IPaymentOptionFormDTO>(paymentOptionDefaultValues);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentOptionFormDTO>({
        defaultValues: paymentOptionDefaultValues,
        resolver: yupResolver(paymentoptionSchema),
    });

    const savePaymentOption = (values: IPaymentOptionFormDTO) => {
        setBankDetails(values);
        setShowConfirmAccountModal(true);
    };

    return (
        <div className="grid gap-6">
            <div className="grid gap-2">
                <h2 className="stext-sm md:text-base font-medium">PREFERRED PAYMENT OPTION</h2>
                <p>
                    Select the payment method, if applicable, of your choice, and ensure to provide all
                    required details. We&#39;ll review the validity of your documents upon submissions
                </p>
            </div>

            <div className="grid gap-4">
                <h3 className="text-base font-normal">Bank Account Details</h3>
                <form onSubmit={handleSubmit(savePaymentOption)} className="grid gap-5">
                    <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
                        {/* Beneficiary Name */}
                        <div className="">
                            <ControlledModifiedInput
                                label="Beneficiary name"
                                name="beneficiaryName"
                                control={control}
                                placeholder="Beneficiary Name"
                                type="text"
                                error={errors?.beneficiaryName}
                                isRequired={true}
                                className=""
                                rules={{ required: true }}
                                data-testid="beneficiaryName"
                            />
                            {showNote && (
                                <p className="text-xs text-[.65rem] leading-3 md:text-sm text-kaiglo_grey-700 mt-1 md:mt-2">
                                    Ensure that the account provided matches the account name
                                </p>
                            )}
                        </div>

                        {/* Account Number */}
                        <ControlledModifiedInput
                            label="Account number"
                            name="accountNumber"
                            control={control}
                            rules={{ required: true }}
                            placeholder="Bank Account Number"
                            type="number"
                            error={errors?.accountNumber}
                            isRequired={true}
                            data-testid="accountNumber"
                        />

                        {/* Bank Name */}
                        <ControlledModifiedInput
                            label="Bank name"
                            name="bankName"
                            control={control}
                            placeholder="Bank Name"
                            type="text"
                            error={errors?.bankName}
                            isRequired={true}
                            className=""
                            rules={{ required: true }}
                            data-testid="bankName"
                        />
                    </div>

                    <FormNavButtons
                        cancelFunc={() => console.log("payment option changes cancelled")}
                        submitButtonText={"Save Changes"}
                    />
                </form>
                {showConfirmAccountModal && (
                    <ConfirmAccountModal
                        showConfirmAccountModal={showConfirmAccountModal}
                        setShowConfirmAccountModal={setShowConfirmAccountModal}
                        bankDetails={bankDetails}
                    />
                )}
            </div>
        </div>
    );
};
