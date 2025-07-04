"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { IRegisterUserDTO } from "../../lib/interfaces/interface";
import { IRegisterUserResponse } from "../../lib/interfaces/response.interface";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import OtpModal from "../../ui/otp/OtpModal";

/**
 * Custom hook for requesting otp for new user during registration.
 */

const useRegisterUser = () => {
    const { setModalContent, setShowModal } = useModalContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IRegisterUserDTO) => {
            return postRequest<IRegisterUserDTO, IRegisterUserResponse>({
                url: "/auth/request-otp/new-user",
                payload,
            });
        },
        onSuccess: (data, variables) => {
            const { email, phone } = variables;

            if (!data || !data.response) {
                console.error("User registration failed:", data);
                showErrorToast({ title: "Uh, oh! Something went wrong", description: "Try again" });
            }

            if (data.response.toLowerCase() !== "success") {
                showErrorToast({ title: data.message });
                return;
            }

            showSuccessToast({
                title: "Your OTP has been sent successfully.",
                showCloseButton: false,
            });

            setModalContent(<OtpModal email={email} phone={phone} actionLink="/dashboard" />);
            setShowModal(true);
        },
        onError: (error) => {
            handleError(error, "User registration failed: ", false);
        },
    });

    return {
        registerUser: mutate,
        isRegisteringUser: isPending,
    };
};

export default useRegisterUser;
