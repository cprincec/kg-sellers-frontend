"use client";

import { storeDetailsSchema } from "@/app/(auth)/lib/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import StoreDetailsFormFields from "./StoreDetailsFomFields";
import { useRouter } from "next/navigation";
import useSaveStoreDetails from "@/app/(auth)/hooks/register/storeSetup/useSaveStoreDetails";
import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import { motion } from "framer-motion";

const StoreDetailsForm = ({ defaultValues }: { defaultValues: IStoreDetailsDTO }) => {
    const router = useRouter();
    const { saveStoreDetails, isSavingStoreDetails } = useSaveStoreDetails();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IStoreDetailsDTO>({
        defaultValues,
        resolver: yupResolver(storeDetailsSchema),
    });

    const onSubmit = (values: IStoreDetailsDTO) => {
        saveStoreDetails(values);
    };

    if (!defaultValues) throw new Error("Something went wrong");

    return (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }}>
            <h2 className="mb-4">STORE DETAILS</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                <StoreDetailsFormFields control={control} errors={errors} />
                <FormNavButtons
                    className="grid grid-cols-2 lg:w-fit lg:ml-auto"
                    cancelButtonClassName="p-3 lg:min-w-[150px]"
                    submitButtonClassName="p-3 lg:min-w-[150px]"
                    cancelButtonText="Cancel"
                    cancelFunc={() => router.push("/")}
                    submitButtonText={"Next"}
                    disabled={isSavingStoreDetails}
                />
            </form>
        </motion.div>
    );
};

export default StoreDetailsForm;
