"use client";

import { Resolver, useForm } from "react-hook-form";

import { ISignUpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import OtpModal from "../../otp/OtpModal";
import { signUpDefaultValues } from "@/lib/validations/defaults";
import { signUpResolver } from "@/lib/validations/resolvers";
import { useState } from "react";
import RegisterationFormFields from "./RegistrationFormFields";

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
        <div className="transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(createAccount)} className="flex flex-col gap-10">
                <RegisterationFormFields control={control} errors={errors} signingUp={signingUp} />
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
