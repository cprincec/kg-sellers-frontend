"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IStoreSetupContext, StoreSetupContextProviderProps } from "../lib/interfaces/interface";
import useGetStoreInfo from "../hooks/register/storeSetup/useGetStoreInfo";
// import Loader from "@/app/ui/Loader";

const StoreSetupContext = createContext<IStoreSetupContext | undefined>(undefined);

const StoreSetupContextProvider: React.FC<StoreSetupContextProviderProps> = ({ children }) => {
    // Get current onboading step
    const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();
    const [currentStep, setCurrentStep] = useState<number>(1);

    useEffect(() => {
        if (storeInfo) setCurrentStep(storeInfo.onboardingStep ?? 1);
    }, [isFetchingStoreInfo]);

    // if (isFetchingStoreInfo) return <Loader />;

    return (
        <StoreSetupContext.Provider
            value={{
                currentStep,
                setCurrentStep,
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
