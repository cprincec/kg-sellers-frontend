import * as yup from "yup";

/*********** PAYOUT THRESHOLD FORM SCHEMA ***********/
export const payoutThresholdSchema = yup.object({
    payoutThresholdAmount: yup
        .number()
        .transform((value, originalValue) => {
            return originalValue === "" ? undefined : value;
        })
        .min(1000, "Minimum amount is ₦1000")
        .required("Payout threshold amount is required"),
});
