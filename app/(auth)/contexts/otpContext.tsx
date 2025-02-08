"use client";

import React, { createContext, SetStateAction, useState } from "react";

interface OtpContextType {
    showOtpModal: boolean;
    setShowOtpModal: React.Dispatch<SetStateAction<boolean>>;
    resetOtpModal: () => void;
}

interface OtpContextProviderProps {
    children: React.ReactNode;
}

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
