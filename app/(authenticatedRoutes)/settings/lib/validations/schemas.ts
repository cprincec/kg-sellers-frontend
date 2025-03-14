import * as yup from "yup";

/*********** STORE VACATION SCHEMA ***********/
export const storeVacationSchema = yup.object({
    isPaused: yup.boolean(),
    isDeleted: yup.boolean(),
});
