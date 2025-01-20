import { StoreDetailsForm, StoreDetailsFormFields } from "./forms";
import { IStoreSetupFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { UseFormHookProps } from "@/app/(auth)/register/store-setup/page";

const StoreDetails = ({ formProps }: { formProps: UseFormHookProps }) => {
    return (
        <div>
            <h2 className="mb-4 text-xl font-bold">STORE DETAILS</h2>
            {/* <StoreDetailsForm navigateToNextStep={navigateToNextStep} /> */}
            <StoreDetailsFormFields formProps={formProps} />
        </div>
    );
};
export default StoreDetails;
