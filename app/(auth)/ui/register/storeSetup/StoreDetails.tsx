import { StoreDetailsFormFields } from "./forms";
// import { UseFormHookProps } from "@/app/(auth)/register/store-setup/page";

// @ts-expect-error to be changed
const StoreDetails = ({ formProps }) => {
    return (
        <div>
            <h2 className="mb-4">STORE DETAILS</h2>
            {/* <StoreDetailsForm navigateToNextStep={navigateToNextStep} /> */}
            <StoreDetailsFormFields formProps={formProps} />
        </div>
    );
};
export default StoreDetails;
