"use client";

import { IPaymentOptionFormDTO } from "@/app/(auth)/interface";
import { paymentOptionDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { paymentoptionSchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PaymentOptionFormFields from "./PaymentOptionFormFields";
import ConfirmAccountModal from "./ConfirmAccountModal";
import { useModalContext } from "@/app/contexts/modalContext";

export const PaymentOptionForm = ({ showNote = true }: { showNote?: boolean }) => {
    const { setShowModal, setModalContent } = useModalContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentOptionFormDTO>({
        defaultValues: paymentOptionDefaultValues,
        resolver: yupResolver(paymentoptionSchema),
    });

    const savePaymentOption = (values: IPaymentOptionFormDTO) => {
        setModalContent(<ConfirmAccountModal bankDetails={values} />);
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
                        submitButtonText={"Save Changes"}
                    />
                </form>
            </div>
        </div>
    );
};
