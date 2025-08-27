"use client";

import { IPaymentOptionDTO, PaymentOptionFormProps } from "@/app/(auth)/lib/interfaces/interface";
import { paymentoptionSchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PaymentOptionFormFields from "./PaymentOptionFormFields";
import { useModalContext } from "@/app/contexts/modalContext";
import { cn } from "@/lib/utils/utils";
import { showErrorToast } from "@/app/lib/utils/utils";
import ConfirmAccountModal from "@/app/(auth)/ui/register/storeSetup/paymentOption/ConfirmAccountModal";
import useEditPaymentOption from "../../hooks/useEditPaymentOption";

export const PaymentOptionForm = ({
    banks,
    defaultValues,
    submitButtonText = "Save Changes",
    cancelButtonText = "Cancel",
}: PaymentOptionFormProps) => {
    const { setShowModal, setModalContent } = useModalContext();
    const { isEditingPaymentOption, editPaymentOption } = useEditPaymentOption();

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
                isSavingPaymentOption={isEditingPaymentOption}
                editPaymentOption={editPaymentOption}
                bankDetails={{ ...values, bankName }}
            />
        );

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
                <h3 className={cn("text-sm md:text-base font-normal")}>Bank Account Details</h3>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("grid", "gap-5")}>
                    <PaymentOptionFormFields control={control} errors={errors} banks={banks} />

                    <FormNavButtons
                        cancelFunc={() => {}}
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
