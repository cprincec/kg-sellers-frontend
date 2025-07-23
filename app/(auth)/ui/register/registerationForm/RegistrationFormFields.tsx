import { ROUTES, SIGNUP_TEXTS } from "../../../lib/constants";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import Link from "next/link";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { Control, FieldErrors } from "react-hook-form";
import { IRegisterUserDTO } from "@/app/(auth)/lib/interfaces/interface";

const RegisterationFormFields = ({
    control,
    errors,
    signingUp,
}: {
    control: Control<IRegisterUserDTO>;
    errors: FieldErrors<IRegisterUserDTO>;
    signingUp: boolean;
}) => {
    return (
        <>
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
                    containerClassName="md:col-span-2"
                    type="email"
                    error={errors.email}
                    isRequired={true}
                    data-testid="email"
                />

                {/* Phone */}
                <div className="relative md:col-span-2">
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
            </div>

            <div className="flex flex-col gap-5">
                <ModifiedButton
                    type="submit"
                    value={signingUp ? "Please wait..." : "Create account"}
                    className="w-full p-3 rounded-full font-medium"
                    disabled={signingUp}
                    data-testid="signup-submit-button"
                />
                <p className="text-kaiglo_grey-700">
                    {SIGNUP_TEXTS.alreadyHaveAccount}{" "}
                    <Link href={ROUTES.login} className="text-kaiglo_brand-base font-medium">
                        {SIGNUP_TEXTS.login}
                    </Link>
                </p>
            </div>
        </>
    );
};
export default RegisterationFormFields;
