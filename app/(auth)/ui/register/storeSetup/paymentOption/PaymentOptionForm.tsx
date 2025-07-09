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
import useSavePaymentOption from "@/app/(auth)/hooks/register/storeSetup/useSavePaymentOption";
import { showErrorToast } from "@/app/lib/utils/utils";
import { motion } from "framer-motion";

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
    const { isSavingPaymentOption, savePaymentOption } = useSavePaymentOption();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentOptionDTO>({
        defaultValues,
        resolver: yupResolver(paymentoptionSchema),
    });

    const onSubmit = (values: IPaymentOptionDTO) => {
        const bankName = banks.find((bank) => bank.id === values.bankId)?.name;

        if (!bankName) {
            showErrorToast({ title: "Invalid bank selected", description: "Please choose a valid bank" });
            return;
        }

        setModalContent(
            <ConfirmAccountModal
                isSavingPaymentOption={isSavingPaymentOption}
                savePaymentOption={savePaymentOption}
                bankDetails={{ ...values, bankName }}
            />
        );

        setShowModal(true);
    };

    return (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} className="grid gap-6">
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
                <form onSubmit={handleSubmit(onSubmit)} className={cn("grid", variant ? "gap-5" : "gap-12")}>
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
        </motion.div>
    );
};
