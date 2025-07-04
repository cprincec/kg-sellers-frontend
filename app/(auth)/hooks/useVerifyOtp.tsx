"use client";

import { useMutation } from "@tanstack/react-query";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { AUTH_ROUTES, FALLBACK_URL } from "../lib/constants";
import { IOtpDTO } from "../lib/interfaces/interface";

/**
 * Custom hook to verify otp provided by user
 * navigates to callback url if authenticated
 */

export const useVerifyOtp = (callbackUrlParam?: string) => {
    const searchParams = useSearchParams();
    const searchCallback = searchParams.get("callbackUrl");

    // If 'callbackUrlParam' is provided when calling this hook, use it as callbackurl
    // Else, if there is a callback url in the search param, use that instead
    // Ensure the callback is not to login, register or recover-account pages
    // use the dashboard as fallback
    const validUrl = [callbackUrlParam, searchCallback].find(
        (url) => url?.trim() && !AUTH_ROUTES.includes(url?.trim())
    );
    const callbackUrl = validUrl || FALLBACK_URL;

    const { setModalContent, setShowModal } = useModalContext();

    const { mutate, isPending } = useMutation({
        mutationFn: (payload: IOtpDTO) => {
            return signIn("credentials", {
                email: payload.email,
                phone: payload.phone,
                otp: payload.otp,
                callbackUrl,
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
                return;
            }
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
