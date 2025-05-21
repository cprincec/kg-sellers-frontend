"use client";

import { Resolver, useForm } from "react-hook-form";
import { ISignUpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import OtpModal from "../../otp/OtpModal";
import { signUpDefaultValues } from "@/lib/validations/defaults";
import { signUpResolver } from "@/lib/validations/resolvers";
import { useState } from "react";
import RegisterationFormFields from "./RegistrationFormFields";
import { useModalContext } from "@/app/contexts/modalContext";

const RegisterationForm = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { setShowModal, setModalContent } = useModalContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignUpFormDTO>({
        defaultValues: signUpDefaultValues,
        resolver: signUpResolver as Resolver<ISignUpFormDTO>,
    });

    // temporal
    const signingUp = false;

    const createAccount = (values: ISignUpFormDTO) => {
        setEmail(values.email);
        setPhone(values.phone);

        setModalContent(<OtpModal email={email} phone={phone} />);
        setShowModal(true);
    };

    return (
        <div className="transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(createAccount)} className="flex flex-col gap-10">
                <RegisterationFormFields control={control} errors={errors} signingUp={signingUp} />
            </form>
        </div>
    );
};
export default RegisterationForm;
