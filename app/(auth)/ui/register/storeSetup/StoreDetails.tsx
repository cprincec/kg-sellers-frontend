import { StoreDetailsFormFields } from "./forms";

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
