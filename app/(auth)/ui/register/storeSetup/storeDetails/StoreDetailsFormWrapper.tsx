"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import StoreDetailsForm from "./StoreDetailsForm";
import Loader from "@/app/ui/Loader";

const StoreDetailsFormWrapper = () => {
    const { onboardingData } = useStoreSetupContext();

    if (!onboardingData?.storeDetails) return <Loader />;

    return <StoreDetailsForm defaultValues={onboardingData.storeDetails} />;
};

export default StoreDetailsFormWrapper;
