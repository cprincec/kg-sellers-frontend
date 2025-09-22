"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IWithdrawDTO, IWithdrawResponse } from "../lib/interface";
import { withdrawFromWalletEndpoint } from "../lib/endpoints";
import { useModalContext } from "@/app/contexts/modalContext";
import WithdrawalSuccessful from "../ui/withdraw/WithdrawalSuccessful";
import { useRouter } from "next/navigation";

const useWithdraw = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { setModalContent, setShowModal, setOnClose } = useModalContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IWithdrawDTO & { otp: string }) => {
            const { otp, ...body } = payload;
            return postRequest<IWithdrawDTO, IWithdrawResponse>({
                url: withdrawFromWalletEndpoint,
                payload: body,
                config: { headers: { "x-otp-key": otp } },
            });
        },
        onSuccess: (data) => {
            if (data.response.status !== "SUCCESSFUL") {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Update queries
            queryClient.refetchQueries({ queryKey: ["payout-data"] });
            queryClient.refetchQueries({ queryKey: ["account-summary"] });

            router.replace("/wallet?tab=payout");
            setModalContent(<WithdrawalSuccessful />);
            setOnClose(() => () => {
                setShowModal(false);
            });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error withdrawing amount");
        },
    });

    return {
        isWithdrawing: isPending,
        withdraw: mutate,
    };
};

export default useWithdraw;
