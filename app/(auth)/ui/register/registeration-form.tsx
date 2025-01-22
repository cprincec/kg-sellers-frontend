"use client";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { ISignUpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { Resolver, useForm } from "react-hook-form";
import { useState } from "react";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { signUpDefaultValues } from "@/lib/validations/defaults";
import { signUpResolver } from "@/lib/validations/resolvers";
import OtpModal from "../otp-modal";

const RegisterationForm = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignUpFormDTO>({
        defaultValues: signUpDefaultValues,
        resolver: signUpResolver as Resolver<ISignUpFormDTO>,
    });

    // const { signup, signingUp } = useSignUp({
    //     setShowOtpModal,
    //     setOpenAuthModal,
    // });

    // temporal
    const signingUp = false;
    const [showOtpModal, setShowOtpModal] = useState(false);

    const createAccount = (values: ISignUpFormDTO) => {
        setEmail(values.email);
        setPhone(values.phone);

        setShowOtpModal(true);

        // signup(values);
    };

    return (
        <div className="pt-6 transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(createAccount)}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:items-center md:justify-center space-y-4 md:space-y-0">
                    {/* Firstname */}
                    <ControlledModifiedInput
                        name="firstName"
                        control={control}
                        placeholder="First Name"
                        type="text"
                        error={errors.firstName}
                        isRequired={true}
                        rules={{ required: true }}
                        data-testid="firstName"
                    />

                    {/* Lastname */}
                    <ControlledModifiedInput
                        name="lastName"
                        control={control}
                        placeholder="Last Name"
                        type="text"
                        error={errors.lastName}
                        isRequired={true}
                        rules={{ required: true }}
                        data-testid="lastName"
                    />

                    {/* Email */}
                    <ControlledModifiedInput
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        placeholder="Email"
                        // containerClassName="md:col-span-2"
                        type="email"
                        error={errors.email}
                        isRequired={true}
                        data-testid="email"
                    />

                    {/* Phone */}
                    <div className="relative md:col-span-2">
                        <span className="absolute border-r border-kaiglo_grey-disabled text-kaiglo_grey-base text-base w-[72px] rounded-l-lg ml-[1px] h-[46px] flex justify-center items-center border-0 mt-[1px]">
                            +234
                        </span>
                        <ControlledModifiedInput
                            name="phone"
                            control={control}
                            rules={{ required: true }}
                            placeholder="Phone Number"
                            type="tel"
                            error={errors.phone}
                            isRequired={true}
                            className="pl-20"
                            data-testid="phone"
                        />
                    </div>
                </div>

                <ModifiedButton
                    type="submit"
                    value={signingUp ? "Please wait..." : "Create account"}
                    className="mt-12 w-full p-3 rounded-full font-medium"
                    disabled={signingUp}
                    data-testid="signup-submit-button"
                />
            </form>

            {showOtpModal && (
                <OtpModal
                    showOtpModal={showOtpModal}
                    setShowOtpModal={setShowOtpModal}
                    email={email}
                    phone={phone}
                />
            )}
        </div>
    );
};
export default RegisterationForm;
