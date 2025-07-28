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
            setCurrentStep(storeInfo.onboardingStep ?? 1);

            const {
                storeName,
                address,
                bannerImage,
                profilePic,
                location,
                email,
                phoneNumber,
                categories,
                bankDetails,
                termsAndCondition,
            } = storeInfo;
            setOnboardingData({
                storeDetails: {
                    storeName,
                    storeAddress: address,
                    storeBanner: bannerImage,
                    businessLogo: profilePic,
                    state: location,
                    email,
                    phoneNumber,
                },
                productsCategories: { category: categories },
                paymentOption: bankDetails
                    ? {
                          bankId: bankDetails.bank.id,
                          beneficiaryName: bankDetails.account_name,
                          accountNumber: bankDetails.account_number,
                      }
                    : paymentOptionDefaultValues,
                acceptTerms: { acceptTerms: termsAndCondition },
            });
        } else {
            setOnboardingData({
                storeDetails: storeDetailsDefaultValues,
                productsCategories: { category: [] },
                paymentOption: paymentOptionDefaultValues,
                acceptTerms: { acceptTerms: false },
            });
        }
    }, []);

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
