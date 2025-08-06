"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import Loader from "@/app/ui/Loader";
import { PaymentOptionForm } from "./PaymentOptionForm";
import useGetAllBanks from "@/app/(auth)/hooks/register/storeSetup/useGetAllBanks";
import { showErrorToast } from "@/app/lib/utils/utils";

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

    if (isFetchingBanks) return <Loader />;
    if (!banks) showErrorToast({ title: "Error fetching banks", description: "Please refresh the page" });
    if (!onboardingData?.paymentOption || !banks) return null;
    if (!banks) showErrorToast({ title: "Error fetching banks", description: "Please refresh the page" });

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
