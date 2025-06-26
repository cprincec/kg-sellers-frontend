"use client";

import { IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import { paymentOptionDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { paymentoptionSchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PaymentOptionFormFields from "./PaymentOptionFormFields";
import ConfirmAccountModal from "./ConfirmAccountModal";
import { useModalContext } from "@/app/contexts/modalContext";
import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";

export const PaymentOptionForm = ({
    submitButtonText = "Save Changes",
    cancelButtonText = "Cancel",
    showNote = true,
}: {
    submitButtonText?: string;
    cancelButtonText?: string;
    showNote?: boolean;
}) => {
    const { setShowModal, setModalContent } = useModalContext();
    const { setCurrentStep } = useStoreSetupContext();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentOptionDTO>({
        defaultValues: paymentOptionDefaultValues,
        resolver: yupResolver(paymentoptionSchema),
    });

    const savePaymentOption = (values: IPaymentOptionDTO) => {
        setModalContent(
            <ConfirmAccountModal action={() => setCurrentStep((prev) => prev + 1)} bankDetails={values} />
        );
        setShowModal(true);
    };

    return (
        <div className="grid gap-6">
            <div className="grid gap-2">
                <h2 className="text-base font-medium">PREFERRED PAYMENT OPTION</h2>
                <p>
                    Select the payment method, if applicable, of your choice, and ensure to provide all
                    required details. We&#39;ll review the validity of your documents upon submissions
                </p>
            </div>

            <div className="grid gap-4">
                <h3 className="text-base font-normal">Bank Account Details</h3>
                <form onSubmit={handleSubmit(savePaymentOption)} className="grid gap-5">
                    <PaymentOptionFormFields control={control} showNote={showNote} errors={errors} />

                    <FormNavButtons
                        cancelFunc={() => console.log("payment option changes cancelled")}
                        submitButtonText={submitButtonText}
                        cancelButtonText={cancelButtonText}
                    />
                </form>
            </div>
        </div>
    );
};
