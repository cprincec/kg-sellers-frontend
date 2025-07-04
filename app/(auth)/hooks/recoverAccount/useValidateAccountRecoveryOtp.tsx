/**
 * Custom hook for validating OTP for recovering user credentials.
 */

"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { IAccountRecoveryOtpValidationDTO, IOtpDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { IRegisterUserResponse } from "../../lib/interfaces/response.interface";
import { useRouter } from "next/navigation";
import { useModalContext } from "@/app/contexts/modalContext";

const useValidateAccountRecoveryOtp = () => {
    const router = useRouter();
    const { setShowModal, setModalContent } = useModalContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IOtpDTO) => {
            if (!payload || (!payload.email && !payload.phone)) {
                throw new Error("Missing email or phone in payload");
            }

            return postRequest<IAccountRecoveryOtpValidationDTO, IRegisterUserResponse>({
                url: "/auth/recover-credential/validate-otp",
                payload: {
                    email: payload.email,
                    phoneNumber: payload.phone,
                    otp: payload.otp,
                },
            });
        },
        onSuccess: (data, variables) => {
            const { email, phone } = variables;
            if (!data || !data.response) {
                console.error("Account recovery failed:", data);
                showErrorToast({ title: "Uh, oh! Something went wrong", description: "Try again" });
            }

            const redirectUrl =
                email && !phone
                    ? `/login?email=${email}&phone=${data.response}`
                    : phone && !email
                    ? `/login?email=${data.response}&phone=${phone}`
                    : null;

            if (!redirectUrl) throw new Error("Some thing went wrong");

            showSuccessToast({
                title: "Account Recovered",
                description: data.message,
            });

            // redirect to login page with recovered user details in url
            // close modal
            router.push(redirectUrl);
            setShowModal(false);
            setModalContent(null);
        },
        onError: (error) => {
            handleError(error, "Account recovery OTP validation failed: ", false);
        },
    });

    return {
        validateRecoveryOtp: mutate,
        isValidatingRecoveryOtp: isPending,
    };
};

export default useValidateAccountRecoveryOtp;
