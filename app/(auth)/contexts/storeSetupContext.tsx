"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
    IOnboardingData,
    IStoreSetupContext,
    StoreSetupContextProviderProps,
    navigateTpNextStepProps,
} from "../lib/interfaces/interface";
import { useModalContext } from "@/app/contexts/modalContext";
import useGetOnboardingStep from "../hooks/register/useGetOnboardingStep";
import Loader from "@/app/ui/Loader";

const StoreSetupContext = createContext<IStoreSetupContext | undefined>(undefined);

const StoreSetupContextProvider: React.FC<StoreSetupContextProviderProps> = ({ children }) => {
    const { setShowModal } = useModalContext();

    // Get current onboading step
    const { onboardingStep, isFetchingOnBoardingStep } = useGetOnboardingStep();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [onboardingData, setOnboardingData] = useState<IOnboardingData | undefined>(undefined);

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

    useEffect(() => {
        if (onboardingStep) setCurrentStep(onboardingStep.onboardingStep);
    }, [onboardingStep]);

    // show loader until onboarding step has been fetched
    if (isFetchingOnBoardingStep) return <Loader />;

    return (
        <StoreSetupContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                onboardingData,
                setOnboardingData,
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

const useStoreSetupContext = (): IStoreSetupContext => {
    const context = useContext(StoreSetupContext);
    if (!context) {
        throw new Error("useStoreSetupContext must be used within a StoreSetupContextProvider");
    }
    return context;
};

export { StoreSetupContextProvider, useStoreSetupContext };
