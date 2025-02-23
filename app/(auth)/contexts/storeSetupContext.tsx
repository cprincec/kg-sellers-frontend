"use client";

// import { useRouter } from "next/navigation";
import React, { SetStateAction, createContext, useContext, useState } from "react";
import { StoreSetupContextDTO, StoreSetupContextProviderProps, navigateTpNextStepProps } from "../interface";

const StoreSetupContext = createContext<StoreSetupContextDTO | undefined>(undefined);

const StoreSetupContextProvider: React.FC<StoreSetupContextProviderProps> = ({ children }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    // const router = useRouter();

    // const [email, setEmail] = useState<string>("");
    // const [phone, setPhone] = useState<string>("");

    const navigateToPreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const navigateToNextStep = async ({ trigger, setShowConfirmAccountModal }: navigateTpNextStepProps) => {
        console.log(trigger);
        const stepIsValid = await trigger(); // Validate visible form fields

        if (stepIsValid) {
            if (currentStep === 2) setShowConfirmAccountModal(true); // Confirm payment details
            else setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const navigateToSpecificStep = (step: number) => {
        setCurrentStep(step);
    };

    // const saveStoreSetup = (data: any) => {
    //     console.log(data);
    //     router.push("/dashboard");
    // };

    const resetOtpModal = () => {
        setShowOtpModal(false);
        // setEmail("");
        // setPhone("");
    };

    return (
        <StoreSetupContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                navigateToNextStep,
                navigateToSpecificStep,
                navigateToPreviousStep,
                showOtpModal,
                setShowOtpModal,
                resetOtpModal,
                // saveStoreSetup,
            }}
        >
            {children}
        </StoreSetupContext.Provider>
    );
};

const useStoreSetupContext = (): StoreSetupContextDTO => {
    const context = useContext(StoreSetupContext);
    if (!context) {
        throw new Error("useStoreSetupContext must be used within a StoreSetupContextProvider");
    }
    return context;
};

export { StoreSetupContextProvider, useStoreSetupContext };
