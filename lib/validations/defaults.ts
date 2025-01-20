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

export const storeSetupDefaultValues: IStoreSetupFormDTO =  {
  storeName: "kaiglo",
  address: "ojuelegba",
  email: "kaiglo@gmail.com",
  phone: "36768968527",
  state: "Abuja",
  logo: "logo",
  banner: "logo",
  category: ["Men's wear"],   
  beneficiaryName: "Ademola Lookman",
  accountNumber: "12565348347",
  bankName: "first bank of Nigeria",
}