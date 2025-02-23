"use client";

import { useEffect, useState } from "react";

import { GoogleButton } from "../ui/buttons";
import { LogoWithWelcomeText } from "../ui/shared/LogoWithWelcomeText";
import RegisterationForm from "../ui/register/RegisterationForm";
import { SIGNUP_TEXTS } from "@/lib/consts";
import SmilingWomanImage from "../ui/shared/SmilingWomanImage";
import TermsAndConditionsAndPrivacyPolicy from "../ui/shared/TermsAndConditionsAndPrivacyPolicy";

const Register = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Skip rendering until the client has mounted

    return (
        <div className="md:grid lg:grid-cols-2 md:h-full">
            <SmilingWomanImage />

            <div className="text-center mx-4 my-16 md:m-auto md:w-[70%] lg:w-[75%] md:max-lg:h-[80%] md:grid md:items-center">
                <section className="md:max-lg:pb-12 lg:my-4">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-8">
                            <LogoWithWelcomeText title={SIGNUP_TEXTS.title} subtitle={SIGNUP_TEXTS.subtitle} />

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <GoogleButton />

                                    <div className="flex items-center gap-1">
                                        <hr className="flex-1" />
                                        <p className="text-kaiglo_grey-700 text-sm font-medium">OR</p>
                                        <hr className="flex-1" />
                                    </div>
                                </div>

                                <RegisterationForm />
                            </div>
                        </div>
                    </div>

                    <TermsAndConditionsAndPrivacyPolicy />
                </section>
            </div>
        </div>
    );
};

export default Register;
