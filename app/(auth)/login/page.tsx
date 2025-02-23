"use client";

import { GoogleButton } from "../ui/buttons";
import { LOGIN_TEXTS } from "@/lib/consts";
import LoginForm from "../ui/login/LoginForm";
import LogoWithWelcomeText from "../ui/common/LogoWithWelcomeText";
import SmilingWomanImage from "../ui/common/SmilingWomanImage";
import TermsAndConditionsAndPrivacyPolicy from "../ui/common/TermsAndConditionsAndPrivacyPolicy";
import { useSearchParams } from "next/navigation";

const Login = () => {
    const searchParams = useSearchParams();

    return (
        <div className="md:grid lg:grid-cols-2 md:h-full">
            {/* Left Side */}
            <SmilingWomanImage />

            {/* Right Side */}
            <div className="text-center mx-4 my-16 md:m-auto md:w-[70%] lg:w-[75%] md:max-lg:h-[80%] md:grid md:items-center">
                <section className="lg:my-4">
                    <div className="flex flex-col gap-8">
                        <LogoWithWelcomeText title={LOGIN_TEXTS.title} subtitle={LOGIN_TEXTS.subtitle} />

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5">
                                <GoogleButton />

                                <div className="flex items-center gap-1">
                                    <hr className="flex-1" />
                                    <p className="text-kaiglo_grey-700 text-sm font-medium">OR</p>
                                    <hr className="flex-1" />
                                </div>
                            </div>

                            <LoginForm
                                email={searchParams.get("email") || ""}
                                phone={searchParams.get("phone") || ""}
                            />
                        </div>
                    </div>

                    <TermsAndConditionsAndPrivacyPolicy />
                </section>
            </div>
        </div>
    );
};

export default Login;
