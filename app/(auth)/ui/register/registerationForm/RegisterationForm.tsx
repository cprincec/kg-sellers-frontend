"use client";

import { Resolver, useForm } from "react-hook-form";
import { signUpDefaultValues } from "@/lib/validations/defaults";
import { signUpResolver } from "@/lib/validations/resolvers";
import RegisterationFormFields from "./RegistrationFormFields";
import { IRegisterUserDTO } from "@/app/(auth)/lib/interfaces/interface";
import useRegisterUser from "@/app/(auth)/hooks/register/useRegisterUser";

const RegisterationForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterUserDTO>({
        defaultValues: signUpDefaultValues,
        resolver: signUpResolver as Resolver<IRegisterUserDTO>,
    });

    const { isRegisteringUser, registerUser } = useRegisterUser();

    const onSubmit = (values: IRegisterUserDTO) => {
        console.log("RegisterationForm onSubmit", values);
        registerUser(values);
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
