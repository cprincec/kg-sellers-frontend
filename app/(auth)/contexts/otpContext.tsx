"use client";

import { OtpContextProviderProps, OtpContextType } from "../interface";
import React, { createContext, useState } from "react";

const OtpContext = createContext<OtpContextType | undefined>(undefined);

const OtpContextProvider: React.FC<OtpContextProviderProps> = ({ children }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    const resetOtpModal = () => {
        setShowOtpModal(false);
        // setEmail("");
        // setPhone("");
    };

    return (
        <OtpContext.Provider
            value={{
                showOtpModal,
                setShowOtpModal,
                resetOtpModal,
            }}
        >
            {children}
        </OtpContext.Provider>
    );
};

export { OtpContext, OtpContextProvider };
