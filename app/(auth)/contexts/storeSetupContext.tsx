"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
    IOnboardingData,
    IStoreSetupContext,
    StoreSetupContextProviderProps,
} from "../lib/interfaces/interface";
import useGetStoreInfo from "../hooks/register/storeSetup/useGetStoreInfo";
import Loader from "@/app/ui/Loader";
import { paymentOptionDefaultValues, storeDetailsDefaultValues } from "../lib/validations/defaults";

const StoreSetupContext = createContext<IStoreSetupContext | undefined>(undefined);

const StoreSetupContextProvider: React.FC<StoreSetupContextProviderProps> = ({ children }) => {
    // Get current onboading step
    const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [onboardingData, setOnboardingData] = useState<IOnboardingData | null>(null);

    useEffect(() => {
        if (isFetchingStoreInfo) return;

        if (!isFetchingStoreInfo && storeInfo) {
            setCurrentStep(3);
            // setCurrentStep(storeInfo.onboardingStep);

            setOnboardingData((prev) => ({
                ...prev,
                storeDetails: {
                    storeName: storeInfo.storeName,
                    storeAddress: storeInfo.address,
                    storeBanner: storeInfo.bannerImage,
                    businessLogo: storeInfo.profilePic,
                    state: storeInfo.location,
                    email: storeInfo.email,
                    phoneNumber: storeInfo.phoneNumber,
                },
                productsCategories: { category: storeInfo.categories },
                paymentOption: storeInfo.bankDetails
                    ? { ...storeInfo.bankDetails }
                    : paymentOptionDefaultValues,
            }));
        } else {
            setOnboardingData({
                storeDetails: storeDetailsDefaultValues,
                productsCategories: { category: [] },
                paymentOption: paymentOptionDefaultValues,
                acceptTerms: { acceptTerms: false },
            });
        }
    }, [isFetchingStoreInfo, storeInfo]);

    if (isFetchingStoreInfo) return <Loader />;

    return (
        <StoreSetupContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                onboardingData,
                setOnboardingData,
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
