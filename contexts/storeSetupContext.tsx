"use client";

import React, { createContext, SetStateAction, useState } from "react";

// interface StoreSetupContextType {
//     showCon: boolean;
//     setShowOtpModal: React.Dispatch<SetStateAction<boolean>>;
//     resetOtpModal: () => void;
// }

interface StoreSetupContextProviderProps {
    children: React.ReactNode;
}

const StoreSetupContext = createContext<StoreSetupContextType | undefined>(undefined);

const StoreSetupContextProvider: React.FC<StoreSetupContextProviderProps> = ({ children }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const resetOtpModal = () => {
        setShowOtpModal(false);
        setEmail("");
        setPhone("");
    };

    return (
        <StoreSetupContext.Provider
            value={{
                showOtpModal,
                setShowOtpModal,
                resetOtpModal,
            }}
        >
            {children}
        </StoreSetupContext.Provider>
    );
};

export { StoreSetupContext, StoreSetupContextProvider };
