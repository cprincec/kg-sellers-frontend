"use client";
import Link from "next/link";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { ISignInFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { Resolver, useForm } from "react-hook-form";
import { useContext } from "react";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { signInDefaultValues } from "@/lib/validations/defaults";
import { signInResolver } from "@/lib/validations/resolvers";
import OtpModal from "../otp-modal";
import { OtpContext } from "@/contexts/otpContext";

const LoginForm = () => {
    // @ts-expect-error to be changed
    const { showOtpModal, setShowOtpModal } = useContext(OtpContext);

    // Temporal
    const email = "";
    const phone = "";

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInFormDTO>({
        defaultValues: signInDefaultValues,
        resolver: signInResolver as Resolver<ISignInFormDTO>,
    });

    // const { signup, signingUp } = useSignUp({
    //     setShowOtpModal,
    //     setOpenAuthModal,
    // });

    // temporal
    const signingUp = false;
    // const [showOtpModal, setShowOtpModal] = useState(false);

    const login = (values: ISignInFormDTO) => {
        // setEmail(values.email);
        // setPhone(values.phone);
        console.log(values);
        setShowOtpModal(true);
        // signup(values);
    };

    return (
        <div className="pt-6 transition-all duration-300 ease-in-out">
            <form onSubmit={handleSubmit(login)}>
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
                            className="pl-20"
                            data-testid="phone"
                        />
                    </div>
                </div>

                {/* forgort credentials starts */}
                <div className="text-right pt-2">
                    <Link href={"/recover-account"} className="text-kaiglo_brand-base font-medium">
                        Forgot your login credentials?
                    </Link>
                </div>
                {/* forgort credentials ends */}

                <ModifiedButton
                    type="submit"
                    value={signingUp ? "Please wait..." : "Login"}
                    className="mt-12 w-full p-3 rounded-full font-medium"
                    disabled={signingUp}
                    data-testid="login-submit-button"
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
export default LoginForm;
