import {
    ILoginUserDTO,
    IOtpDTO,
    IPaymentOptionDTO,
    IRegisterUserDTO,
    IStoreDetailsDTO,
} from "../interfaces/interface";

/*********** SIGN UP FORM DEFAULTS ***********/
export const signUpDefaultValues: IRegisterUserDTO = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    otpChannel: "ALL",
    platform: "WEB",
};

/*********** SIGN IN FORM DEFAULTS ***********/
export const signInDefaultValues: ILoginUserDTO = {
    email: "",
    phone: "",
    otpChannel: "ALL",
};

/*********** OTP FORM DEFAULTS ***********/
export const otpDefaultValues: IOtpDTO = {
    email: "",
    phone: "",
    otp: "",
};

export const storeDetailsDefaultValues: IStoreDetailsDTO = {
    storeName: "",
    email: "",
    phoneNumber: "",
    storeAddress: "",
    state: "",
    businessLogo: "",
    storeBanner: "",
};

// Default values for the "Store Details" step
export const paymentOptionDefaultValues: IPaymentOptionDTO = {
    accountNumber: "",
    bankId: "",
    beneficiaryName: "",
};
