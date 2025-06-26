"use client";

import { IOtpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { OtpContextProviderProps, IOtpContext } from "../lib/interfaces/interface";
import React, { createContext, useContext, useState } from "react";

const OtpContext = createContext<IOtpContext | undefined>(undefined);

const OtpContextProvider: React.FC<OtpContextProviderProps> = ({ children }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otpFormAction, setOtpFormAction] = useState<((payload: IOtpFormDTO) => void) | null>(null);
    const [resendOTPMutationFunc, setResendOTPMutationFunc] = useState<(() => void) | null>(null);
    const [otpFormActionIsPending, setOtpFormActionIsPending] = useState<boolean>(false);
    const [resendOTPMutationFuncIsPending, setResendOTPMutationFuncIsPending] = useState<boolean>(false);
    const resetOtpModal = () => {
        setShowOtpModal(false);
    };

    return (
        <OtpContext.Provider
            value={{
                showOtpModal,
                setShowOtpModal,
                resetOtpModal,
                otpFormAction,
                setOtpFormAction,
                otpFormActionIsPending,
                setOtpFormActionIsPending,
                resendOTPMutationFunc,
                setResendOTPMutationFunc,
                resendOTPMutationFuncIsPending,
                setResendOTPMutationFuncIsPending,
            }}
        >
            {children}
        </OtpContext.Provider>
    );
};

const useOtpContext = (): IOtpContext => {
    const context = useContext(OtpContext);
    if (!context) {
        throw new Error("useOtpContext must be used within a OtpContextProvider");
    }
    return context;
};

export { OtpContext, OtpContextProvider, useOtpContext };
