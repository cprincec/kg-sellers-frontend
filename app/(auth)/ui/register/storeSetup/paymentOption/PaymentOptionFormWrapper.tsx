"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import Loader from "@/app/ui/Loader";
import { PaymentOptionForm } from "./PaymentOptionForm";
import useGetAllBanks from "@/app/(auth)/hooks/register/storeSetup/useGetAllBanks";

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
    const { onboardingData } = useStoreSetupContext();
    const { banks, isFetchingBanks } = useGetAllBanks();

    if (!onboardingData?.paymentOption || isFetchingBanks) return <Loader />;
    if (!banks) throw new Error("Could not fetch banks");

    return (
        <PaymentOptionForm
            banks={banks}
            defaultValues={onboardingData.paymentOption}
            variant={variant}
            showNote={showNote}
            cancelButtonText={cancelButtonText}
            submitButtonText={submitButtonText}
        />
    );
};

export default PaymentOptionFormWrapper;
