"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import OtpModal from "@/app/(auth)/ui/otp/OtpModal";
import { useOtpContext } from "@/app/(auth)/contexts/otpContext";
import useWithdraw from "./useWithdraw";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { IOtpDTO } from "@/app/(auth)/lib/interfaces/interface";
import { IGenericResponse } from "../../products/lib/interfaces/response.interface";
import { requestOTPForWalletWithdrawal } from "../lib/endpoints";

/**
 * Custom hook to request for OTP on withdrawal flow
 */

const useGetWithdrawalOTP = () => {
    const { storeInfo } = useGetStoreInfo();
    const { setModalContent, setShowModal } = useModalContext();
    const { isWithdrawing, withdraw } = useWithdraw();
    const {
        setOtpFormActionIsPending,
        setOtpFormAction,
        setResendOTPMutationFunc,
        setResendOTPMutationFuncIsPending,
    } = useOtpContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: { email: string; phone: string; userId: string; amount: number }) => {
            const { email, phone, userId } = payload;
            return getRequest<IGenericResponse>({
                url: requestOTPForWalletWithdrawal(email, phone, userId),
            });
        },
        onSuccess: (data, variables) => {
            if (data.response !== "success" || !storeInfo) {
                showErrorToast({ title: "Oh, something went wrong" });
                return;
            }

            setModalContent(
                <OtpModal
                    email={variables.email}
                    phone={variables.phone}
                    actionText="Confirm"
                    actionLink="/wallet?withdraw=successful"
                />
            );
            setShowModal(true);

            // update OTP context with functions to send withdrawal request after OTP confirmation
            setOtpFormAction(() => (payload: IOtpDTO) => {
                withdraw({
                    amount: variables.amount,
                    storeId: storeInfo.id,
                    otp: payload.otp,
                });
            });
            setOtpFormActionIsPending(isWithdrawing);
            setResendOTPMutationFunc(() => () => mutate(variables));
            setResendOTPMutationFuncIsPending(isPending);
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error requesting withdrawal otp");
        },
    });

    return {
        isRequestingWithdrawalOTP: isPending,
        requestWithdrawalOTP: mutate,
    };
};

export default useGetWithdrawalOTP;
