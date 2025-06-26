"use client";

import { IOtpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { useMutation } from "@tanstack/react-query";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useVerifyOtp = (callbackUrl: string) => {
    const router = useRouter();
    const { setModalContent, setShowModal } = useModalContext();

    const { mutate, isPending } = useMutation({
        mutationFn: (payload: IOtpFormDTO) => {
            return signIn("credentials", {
                redirect: false,
                email: payload.email,
                phone: payload.phone,
                otp: payload.otp,
            });
        },
        onSuccess: (data) => {
            if (data?.status === 401) {
                showErrorToast({
                    title: "Unauthorized",
                    description: "Your OTP is invalid.",
                    showCloseButton: false,
                });
                return;
            }

            if (data?.status === 200) {
                showSuccessToast({
                    title: "Authentication Successful",
                    description: "You have successfully logged in",
                });
                setModalContent(null);
                setShowModal(false);
                router.replace(callbackUrl);
                return;
            }

            showErrorToast({ title: "Uh, oh! Something went wrong", showCloseButton: false });
        },
        onError: (error) => {
            handleError(error, "OTP verification failed: ", false);
        },
    });

    return {
        verifyOtp: mutate,
        verifyingOtp: isPending,
    };
};
