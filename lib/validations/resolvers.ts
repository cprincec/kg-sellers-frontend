import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, signInSchema, otpSchema } from "@/lib/validations/schemas";

/*********** SIGN UP FORM RESOLVER ***********/
export const signUpResolver = yupResolver(signUpSchema);

/*********** SIGN IN FORM RESOLVER ***********/
export const signInResolver = yupResolver(signInSchema);

/*********** ACCOUNT RECOVERY FORM RESOLVER ***********/
export const accountRecoveryResolver = yupResolver(signInSchema);

/*********** OTP FORM RESOLVER ***********/
export const otpResolver = yupResolver(otpSchema);
