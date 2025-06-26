"use client";

import { storeDetailsDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { storeDetailsSchema } from "@/app/(auth)/lib/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import StoreDetailsFormFields from "./StoreDetailsFomFields";
import { useRouter } from "next/navigation";
import useSaveStoreDetails from "@/app/(auth)/hooks/register/useSaveStoreDetails";
import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";

const StoreDetailsForm = () => {
    const router = useRouter();
    const { saveStoreDetails, isSavingStoreDetails } = useSaveStoreDetails();
    const { setCurrentStep, setOnboardingData, onboardingData } = useStoreSetupContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IStoreDetailsDTO>({
        defaultValues: onboardingData?.storeDetails || storeDetailsDefaultValues,
        resolver: yupResolver(storeDetailsSchema),
    });

    const onSubmit = (values: IStoreDetailsDTO) => {
        console.log(values);
        saveStoreDetails(values);
        setCurrentStep((prev: number) => prev + 1);
        setOnboardingData((prev) => ({ ...prev, storeDetails: values }));
    };

    return (
        <div>
            <h2 className="mb-4">STORE DETAILS</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                <StoreDetailsFormFields control={control} errors={errors} />
                <FormNavButtons
                    className="grid grid-cols-2 md:w-fit md:ml-auto"
                    cancelButtonText="Cancel"
                    cancelFunc={() => router.push("/")}
                    submitButtonText={"Next"}
                    disabled={isSavingStoreDetails}
                />
            </form>
        </div>
    );
};

export default StoreDetailsForm;
