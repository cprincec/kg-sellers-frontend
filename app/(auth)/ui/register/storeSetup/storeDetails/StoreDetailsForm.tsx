"use client";

import { IStoreDetailsFormDTO } from "@/app/(auth)/interface";
import { storeDetailsDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { storeDetailsSchema } from "@/app/(auth)/lib/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import StoreDetailsFormFields from "./StoreDetailsFomFields";
import { useEffect, useState } from "react";

const StoreDetailsForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IStoreDetailsFormDTO>({
        defaultValues: storeDetailsDefaultValues,
        resolver: yupResolver(storeDetailsSchema) as Resolver<IStoreDetailsFormDTO>,
    });

    const saveStoreDetails = () => {
        // navigateToNextStep();s
    };

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Skip rendering until the client has mounted

    return (
        <div>
            <h2 className="mb-4 text-sm md:text-base font-medium">STORE DETAILS</h2>
            <form onSubmit={handleSubmit(saveStoreDetails)} className="grid gap-5">
                <StoreDetailsFormFields control={control} errors={errors} />

                <FormNavButtons
                    cancelFunc={() => console.log("Store details changes cancelled")}
                    submitButtonText={"Save Changes"}
                />
            </form>
        </div>
    );
};

export default StoreDetailsForm;
