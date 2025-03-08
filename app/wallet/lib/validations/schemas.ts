import * as yup from "yup";

/*********** PAYOUT THRESHOLD FORM SCHEMA ***********/
export const payoutThresholdSchema = yup.object({
    payoutThresholdAmount: yup.string().required("Payout threshold amount is required"),
});
