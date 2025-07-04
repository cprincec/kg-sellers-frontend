"use client";

import { Resolver, useForm } from "react-hook-form";
import { signUpResolver } from "@/lib/validations/resolvers";
import RegisterationFormFields from "./RegistrationFormFields";
import { IOtpDTO, IRegisterUserDTO } from "@/app/(auth)/lib/interfaces/interface";
import useRegisterUser from "@/app/(auth)/hooks/register/useRegisterUser";
import { useOtpContext } from "@/app/(auth)/contexts/otpContext";
import { useVerifyOtp } from "@/app/(auth)/hooks/useVerifyOtp";
import { signUpDefaultValues } from "@/app/(auth)/lib/validations/defaults";

const RegisterationForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterUserDTO>({
        defaultValues: signUpDefaultValues,
        resolver: signUpResolver as Resolver<IRegisterUserDTO>,
    });

    // get otp context methods for update
    const {
        setResendOTPMutationFunc,
        setOtpFormAction,
        setOtpFormActionIsPending,
        setResendOTPMutationFuncIsPending,
    } = useOtpContext();

    const { isRegisteringUser, registerUser } = useRegisterUser();
    const { verifyOtp, verifyingOtp } = useVerifyOtp("/register/store-setup");

    const onSubmit = (values: IRegisterUserDTO) => {
        registerUser(values);

        // for resending otp
        setResendOTPMutationFunc(() => () => registerUser(values));
        setResendOTPMutationFuncIsPending(isRegisteringUser);

        // handle user login after providing otp
        setOtpFormAction(() => (payload: IOtpDTO) => verifyOtp(payload));
        setOtpFormActionIsPending(verifyingOtp);
    };

    return (
        <div className="transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                <RegisterationFormFields control={control} errors={errors} signingUp={isRegisteringUser} />
            </form>
        </div>
    );
};

export default RegisterationForm;
