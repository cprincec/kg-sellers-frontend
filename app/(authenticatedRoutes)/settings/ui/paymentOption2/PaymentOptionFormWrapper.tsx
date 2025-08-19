"use client";

import Loader from "@/app/ui/Loader";
import useGetAllBanks from "@/app/(auth)/hooks/register/storeSetup/useGetAllBanks";
import { paymentOptionDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import useGetStoreBankDetails from "../../hooks/useGetBankDetails";
import { PaymentOptionForm } from "./PaymentOptionForm";
import { SectionError } from "@/app/ui/errors";

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
    const {
        storeBankDetails,
        isFetchingStoreBankDetails,
        isRefetchingStoreBankDetails,
        errorFetchingStoreBankDetail,
        refetchStoreBankDetails,
    } = useGetStoreBankDetails();

    if (isFetchingStoreBankDetails || isFetchingBanks || isRefetchingStoreBankDetails) return <Loader />;
    if (errorFetchingStoreBankDetail)
        return (
            <SectionError
                title="Error fetching payment information."
                retryFunction={refetchStoreBankDetails}
            />
        );

    const defaultValues =
        (storeBankDetails && {
            accountNumber: storeBankDetails.accountNumber,
            bankId: storeBankDetails.bankId,
            beneficiaryName: storeBankDetails.beneficiaryName,
        }) ??
        paymentOptionDefaultValues;

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
