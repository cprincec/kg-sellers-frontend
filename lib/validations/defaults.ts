import {
    IOtpFormDTO,
    ISignInFormDTO,
    ISignUpFormDTO,
    IStoreSetupFormDTO,
} from "@/interfaces/dtos/auth.dto.interface";

/*********** SIGN UP FORM DEFAULTS ***********/
export const signUpDefaultValues: ISignUpFormDTO = {
    email: "kaiglo@gmail.com",
    firstName: "kaiglo",
    lastName: "kaiglo",
    phone: "917836476",
    otpChannel: "ALL",
    platform: "WEB",
};

/*********** SIGN IN FORM DEFAULTS ***********/
export const signInDefaultValues: ISignInFormDTO = {
    email: "kaiglo@gmail.com",
    phone: "917836476",
    otpChannel: "ALL",
};

/*********** OTP FORM DEFAULTS ***********/
export const otpDefaultValues: IOtpFormDTO = {
    email: "",
    phone: "",
    otp: "",
};

// Default values for the "Store Details" step
export const storeSetupDefaultValues: IStoreSetupFormDTO = {
    storeName: "Kaiglo",
    address: "Ojuelegba",
    email: "kaiglo@gmail.com",
    phone: "689708071968",
    state: "Lagos",
    logo: null,
    banner: undefined,
    productCategories: [],
    beneficiaryName: "Ademola Lookman",
    accountNumber: "11124455",
    bankName: "",
};
