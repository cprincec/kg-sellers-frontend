"use client";

import Loader from "@/app/ui/Loader";
import { PaymentOptionForm } from "./PaymentOptionForm";
import useGetAllBanks from "@/app/(auth)/hooks/register/storeSetup/useGetAllBanks";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { paymentOptionDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { generatePaymentOptionDTO } from "@/app/(auth)/lib/utils/utils";

const PaymentOptionFormWrapper = ({
    variant,
    submitButtonText,
    cancelButtonText,
    showNote,
}: {
    variant?: string;
    submitButtonText?: string;
    cancelButtonText?: string;
    showNote?: boolean;
}) => {
    const { banks, isFetchingBanks } = useGetAllBanks();
    const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();

    if (isFetchingStoreInfo || isFetchingBanks) return <Loader />;

    const defaultValues = storeInfo ? generatePaymentOptionDTO(storeInfo) : paymentOptionDefaultValues;
    return (
        <PaymentOptionForm
            banks={banks ?? []}
            defaultValues={defaultValues}
            variant={variant}
            showNote={showNote}
            cancelButtonText={cancelButtonText}
            submitButtonText={submitButtonText}
        />
    );
};

export default PaymentOptionFormWrapper;
