"use client";

import StoreDetailsForm from "./StoreDetailsForm";
import Loader from "@/app/ui/Loader";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { generateStoreDetailsDTO } from "@/app/(auth)/lib/utils/utils";
import { storeDetailsDefaultValues } from "@/app/(auth)/lib/validations/defaults";

const StoreDetailsFormWrapper = () => {
    const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();

    if (isFetchingStoreInfo) return <Loader />;

    const defaultValues = storeInfo ? generateStoreDetailsDTO(storeInfo) : storeDetailsDefaultValues;
    return <StoreDetailsForm defaultValues={defaultValues} />;
};

export default StoreDetailsFormWrapper;
