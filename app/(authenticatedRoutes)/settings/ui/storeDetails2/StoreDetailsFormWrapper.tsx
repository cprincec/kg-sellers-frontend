"use client";

import StoreDetailsForm from "./StoreDetailsForm";
import Loader from "@/app/ui/Loader";
import { storeDetailsDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import useGetStoreDetails from "../../hooks/useGetStoreDetails";

const StoreDetailsFormWrapper = () => {
    const { storeDetails, isFetchingStoreDetails } = useGetStoreDetails();

    if (isFetchingStoreDetails) return <Loader />;

    const defaultValues = storeDetails ?? storeDetailsDefaultValues;
    return <StoreDetailsForm defaultValues={defaultValues} />;
};

export default StoreDetailsFormWrapper;
