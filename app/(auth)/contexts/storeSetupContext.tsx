"use client";

// import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";
import { StoreSetupContextDTO, StoreSetupContextProviderProps, navigateTpNextStepProps } from "../interface";
import { useModalContext } from "@/app/contexts/modalContext";

const StoreSetupContext = createContext<StoreSetupContextDTO | undefined>(undefined);

const StoreSetupContextProvider: React.FC<StoreSetupContextProviderProps> = ({ children }) => {
    const { setShowModal } = useModalContext();

    const [currentStep, setCurrentStep] = useState<number>(1);

    // const router = useRouter();

    // const [email, setEmail] = useState<string>("");
    // const [phone, setPhone] = useState<string>("");

    const navigateToPreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const navigateToNextStep = async ({ trigger }: navigateTpNextStepProps) => {
        const stepIsValid = await trigger(); // Validate visible form fields

        if (stepIsValid) {
            if (currentStep === 2) setShowModal(true); // Confirm payment details
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

    return (
        <StoreSetupContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                navigateToNextStep,
                navigateToSpecificStep,
                navigateToPreviousStep,
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
