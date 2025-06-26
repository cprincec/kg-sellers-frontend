/**
 * Custom hook for logging in a user.
 * Utilizes React Query for mutation handling.
 */

"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { ILoginUserDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import OtpModal from "../../ui/otp/OtpModal";
import { IRegisterUserResponse } from "../../lib/interfaces/response.interface";

const useLoginUser = () => {
    const { setModalContent, setShowModal } = useModalContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: ILoginUserDTO) => {
            return postRequest<ILoginUserDTO, IRegisterUserResponse>({
                url: "/auth/request-otp/current-user",
                payload,
            });
        },

        onSuccess: (data, variables) => {
            const { email, phone } = variables;

            if (!data || !data.response) {
                console.error("User login failed:", data);
                showErrorToast({ title: "Uh, oh! Something went wrong", description: "Try again" });
            }

            if (data.response.toLowerCase() !== "success") {
                showErrorToast({ title: "Uh, oh! Something went wrong", description: data.message });
                return;
            }

            showSuccessToast({
                title: "OTP Sent",
                description: "Your OTP has been sent successfully.",
                showCloseButton: false,
            });
            setModalContent(<OtpModal email={email} phone={phone} actionLink="/dashboard" />);
            setShowModal(true);
        },
        onError: (error) => {
            handleError(error, "User login failed: ", false);
        },
    });

    return {
        loginUser: mutate,
        isLoggingUser: isPending,
    };
};

export default useLoginUser;
