"use client";

import { LOGIN_TEXTS, ROUTES } from "@/lib/consts";
import { Resolver, useForm } from "react-hook-form";

import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { ISignInFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import Link from "next/link";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { OtpContext } from "@/app/(auth)/contexts/otpContext";
import OtpModal from "../otp/OtpModal";
import { signInDefaultValues } from "@/lib/validations/defaults";
import { signInResolver } from "@/lib/validations/resolvers";
import { useContext } from "react";

const LoginForm = ({ phone, email }: { phone?: string; email?: string }) => {
    // @ts-expect-error to be changed
    const { showOtpModal, setShowOtpModal } = useContext(OtpContext);

    const defaultValues = {
        ...signInDefaultValues,
        email: email ? email : signInDefaultValues.email,
        phone: phone ? phone : signInDefaultValues.phone,
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInFormDTO>({
        defaultValues: defaultValues,
        resolver: signInResolver as Resolver<ISignInFormDTO>,
    });

    // const { signup, signingUp } = useSignUp({
    //     setShowOtpModal,
    //     setOpenAuthModal,
    // });

    // temporal
    const signingUp = false;

    const login = (values: ISignInFormDTO) => {
        // setEmail(values.email);
        // setPhone(values.phone);
        console.log(values);
        setShowOtpModal(true);
        // signup(values);
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
                        value={signingUp ? "Please wait..." : "Login"}
                        className="w-full p-3 rounded-full font-medium"
                        disabled={signingUp}
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

            {showOtpModal && (
                <OtpModal
                    showOtpModal={showOtpModal}
                    setShowOtpModal={setShowOtpModal}
                    email={email || ""}
                    phone={phone || ""}
                />
            )}
        </div>
    );
};
export default LoginForm;
