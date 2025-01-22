/*********** SIGN UP FORM DTO ***********/
export interface ISignUpFormDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  otpChannel: string;
  platform: string;
}

/*********** SIGN IN FORM DTO ***********/
export interface ISignInFormDTO {
  email: string;
  phone: string;
  otpChannel: string;
}

/*********** ACCOUNT RECOVERY FORM DTO ***********/
export interface AccountRecoveryBase {
  otpChannel: string;
  platform?: string;
}

export type IAccountRecoveryFormDTO = 
  | (AccountRecoveryBase & { email: string; phone?: string })
  | (AccountRecoveryBase & { phone: string; email?: string });


/*********** OTP FORM DTO ***********/
export interface IOtpFormDTO {
  email: string;
  phone: string;
  otp: string;
}

/*********** STORE SETUP FORM DTO ***********/
export type IStoreSetupFormDTO =
  | {
      storeName: string;
      address: string;
      email: string;
      phone: string;
      state: string;
      logo: Blob | null;
      banner?: Blob | null;
    }
  | {
      productCategories: string[];
    }
  | {
      beneficiaryName: string;
      accountNumber: string;
      bankName: string;
};


/*********** STORE SETUP FORM DTO ***********/
// export interface IStoreSetupFormDTO {
//       storeName: string;
//       address: string;
//       email: string;
//       phone: string;
//       state: string;
//       logo: string;
//       banner?: string;
//       productCategories: string[];  
//       beneficiaryName: string;
//       accountNumber: string;
//       bankName: string;
// };

