import * as yup from "yup";

/*********** STORE VACATION SCHEMA ***********/
export const storeVacationSchema = yup.object({
    isPaused: yup.boolean(),
    isDeleted: yup.boolean(),
});

/*********** ACCOUNT CHANGE REQUEST SCHEMA ***********/
export const accountChangeRequestSchema = yup.object({
    changeType: yup.string().required("Please select the type of change you want to make"),
    currentValue: yup.string().required("Please provide your current information"),
    requestedValue: yup.string().required("Please provide the new information you want"),
    reason: yup.string().required("Please provide a reason for this change"),
    additionalNotes: yup.string(),
});
