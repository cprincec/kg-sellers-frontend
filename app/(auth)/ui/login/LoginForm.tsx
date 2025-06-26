"use client";

import { LOGIN_TEXTS, ROUTES } from "@/lib/consts";
import { useForm } from "react-hook-form";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { IOtpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import Link from "next/link";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { signInDefaultValues } from "@/lib/validations/defaults";
import { signInResolver } from "@/lib/validations/resolvers";
import { useSearchParams } from "next/navigation";
import { useVerifyOtp } from "../../hooks/useVerifyOtp";
import { useOtpContext } from "../../contexts/otpContext";
import { ILoginUserDTO } from "../../lib/interfaces/interface";
import useLoginUser from "../../hooks/login/useLoginUser";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const emailFromUrl = searchParams.get("email");
    const phoneFromUrl = searchParams.get("phone");

    // Get login values from url
    const defaultValues =
        emailFromUrl && phoneFromUrl
            ? {
                  email: emailFromUrl,
                  phone: phoneFromUrl.substring(4), // Remove leading country code if present
              }
            : signInDefaultValues;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginUserDTO>({
        defaultValues,
        resolver: signInResolver,
    });

    // get otp context methods for update
    const {
        setResendOTPMutationFunc,
        setOtpFormAction,
        setOtpFormActionIsPending,
        setResendOTPMutationFuncIsPending,
    } = useOtpContext();

    const { loginUser, isLoggingUser } = useLoginUser();
    const { verifyOtp, verifyingOtp } = useVerifyOtp("/dashboard");

    const login = (values: ILoginUserDTO) => {
        loginUser(values);

        // update otp context with functions to verify received otp and login user in
        setOtpFormAction(() => (payload: IOtpFormDTO) => verifyOtp(payload));
        setOtpFormActionIsPending(verifyingOtp);
        setResendOTPMutationFunc(() => () => loginUser(values));
        setResendOTPMutationFuncIsPending(isLoggingUser);
    };

    return (
        <div className="transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(login)} className="flex flex-col gap-10">
                <div className="grid md:gap-y-4 space-y-4 md:space-y-0">
                    {/* Email */}
                    <ControlledModifiedInput
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        placeholder="Email"
                        type="email"
                        error={errors.email}
                        isRequired={true}
                        data-testid="email"
                    />

                    {/* Phone */}
                    <div className="relative">
                        <ControlledModifiedInput
                            name="phone"
                            control={control}
                            rules={{ required: true }}
                            placeholder="Phone Number"
                            type="tel"
                            error={errors.phone}
                            isRequired={true}
                            data-testid="phone"
                        />
                    </div>

                    <div className="text-right">
                        <Link href={ROUTES.accountRecovery} className="text-kaiglo_brand-base font-medium">
                            {LOGIN_TEXTS.forgotCredentials}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <ModifiedButton
                        type="submit"
                        value={isLoggingUser ? "Please wait..." : "Login"}
                        className="w-full p-3 rounded-full font-medium"
                        disabled={isLoggingUser}
                        data-testid="login-submit-button"
                    />

                    {/* Registration Link */}
                    <p className="text-kaiglo_grey-700">
                        {LOGIN_TEXTS.dontHaveAccount}{" "}
                        <Link href={ROUTES.register} className="text-kaiglo_brand-base font-medium">
                            {LOGIN_TEXTS.createAccount}
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
