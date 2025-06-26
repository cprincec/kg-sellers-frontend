import { storeDetailsDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { storeDetailsSchema } from "@/app/(auth)/lib/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import StoreDetailsFormFields from "./StoreDetailsFomFields";

const StoreDetailsForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IStoreDetailsDTO>({
        defaultValues: storeDetailsDefaultValues,
        resolver: yupResolver(storeDetailsSchema),
    });

    const saveStoreDetails = () => {
        // navigateToNextStep();
        //
    };

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
