"use client";

import { IPaymentOptionDTO, PaymentOptionFormProps } from "@/app/(auth)/lib/interfaces/interface";
import { paymentoptionSchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PaymentOptionFormFields from "./PaymentOptionFormFields";
import ConfirmAccountModal from "./ConfirmAccountModal";
import { useModalContext } from "@/app/contexts/modalContext";
import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { cn } from "@/lib/utils/utils";

export const PaymentOptionForm = ({
    banks,
    defaultValues,
    variant,
    submitButtonText = "Save Changes",
    cancelButtonText = "Cancel",
    showNote = true,
}: PaymentOptionFormProps) => {
    const { setShowModal, setModalContent } = useModalContext();
    const { setCurrentStep } = useStoreSetupContext();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentOptionDTO>({
        defaultValues,
        resolver: yupResolver(paymentoptionSchema),
    });

    const savePaymentOption = (values: IPaymentOptionDTO) => {
        // Because some banks have same id (Example: Access and Access - Diamond),
        // I attached the bank name to the bankId field value to enforce uniqueness
        // Upon form submission, I spilt the bankId to get the bank Id and bank name seperately
        const splitId = values.bankId.split("-");
        const bankName = splitId[1];
        const bankId = splitId[0];

        if (!bankName || !bankId) return;

        setModalContent(<ConfirmAccountModal bankDetails={{ ...values, bankName, bankId }} />);
        setShowModal(true);
    };

    return (
        <div className="grid gap-6">
            <div>
                <h2 className="mb-2 text-base md:text-xl font-bold">PREFERRED PAYMENT OPTION</h2>
                <p className="text-sm md:text-base">
                    Select the payment method, if applicable, of your choice, and ensure to provide all
                    required details. We&apos;ll review the validity of your documents upon submissions
                </p>
            </div>

            <div className="grid gap-4">
                <h3 className={cn("text-sm md:text-base font-normal", !variant && "lg:hidden")}>
                    Bank Account Details
                </h3>
                <form
                    onSubmit={handleSubmit(savePaymentOption)}
                    className={cn("grid", variant ? "gap-5" : "gap-12")}
                >
                    <PaymentOptionFormFields
                        control={control}
                        showNote={showNote}
                        errors={errors}
                        variant={variant}
                        banks={banks}
                    />

                    <FormNavButtons
                        cancelFunc={() => setCurrentStep((prev) => prev - 1)}
                        submitButtonText={submitButtonText}
                        cancelButtonText={cancelButtonText}
                        className="grid grid-cols-2 lg:w-fit lg:ml-auto"
                        cancelButtonClassName="p-3 lg:min-w-[150px]"
                        submitButtonClassName="p-3 lg:min-w-[150px]"
                    />
                </form>
            </div>
        </div>
    );
};
