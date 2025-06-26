/**
 * Custom hook for Recovering user login credentials.
 * Utilizes React Query for mutation handling.
 */

"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { IAccountRecoveryDTO, ILoginUserDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import { IRegisterUserResponse } from "../../lib/interfaces/response.interface";
import AccountRecoveryOtpModal from "../../ui/recoverAccount/AccountRecoveryOtpModal";

const useRecoverUserAccount = () => {
    const { setModalContent, setShowModal } = useModalContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IAccountRecoveryDTO) => {
            return postRequest<ILoginUserDTO, IRegisterUserResponse>({
                url: "/auth/recover-credential",
                payload,
            });
        },
        onSuccess: (data, variables) => {
            const { email, phone } = variables;

            if (!data || !data.response) {
                console.error("No response during user account reccovery:", data);
                showErrorToast({ title: "Uh, oh! Something went wrong", description: "Try again" });
                return;
            }

            if (data.response?.toLowerCase() !== "success") {
                showErrorToast({ title: "Uh, oh! Something went wrong", description: data.message });
                return;
            }

            showSuccessToast({
                title: "OTP Sent",
                description: "Your OTP has been sent successfully.",
                showCloseButton: false,
            });

            setModalContent(<AccountRecoveryOtpModal email={email} phone={phone} />);
            setShowModal(true);
        },
        onError: (error) => {
            handleError(error, "User account recovery failed: ");
        },
    });

    return {
        recoverUserAccount: mutate,
        isRecoveringUserAccount: isPending,
    };
};

export default useRecoverUserAccount;
