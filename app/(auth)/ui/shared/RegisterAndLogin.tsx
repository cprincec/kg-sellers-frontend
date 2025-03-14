import { LOGIN_TEXTS, SIGNUP_TEXTS } from "@/lib/consts";
import { GoogleButton } from "../buttons";
import SmilingWomanImage from "./SmilingWomanImage";
import TermsAndConditionsAndPrivacyPolicy from "./TermsAndConditionsAndPrivacyPolicy";
import { LogoWithWelcomeText } from "./LogoWithWelcomeText";
import RegisterationForm from "../register/registerationForm/RegisterationForm";
import LoginForm from "../login/LoginForm";

const RegisterAndLogin = ({ isLogin, isRegister }: { isLogin?: boolean; isRegister?: boolean }) => {
    return (
        <div className="grid lg:grid-cols-2 h-screen">
            <SmilingWomanImage />

            <section className="text-center py-4 mx-4 my-auto md:m-auto md:w-[70%] lg:w-[75%]">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-8">
                        <LogoWithWelcomeText
                            title={isRegister ? SIGNUP_TEXTS.title : LOGIN_TEXTS.title}
                            subtitle={isRegister ? SIGNUP_TEXTS.subtitle : LOGIN_TEXTS.subtitle}
                        />

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5">
                                <GoogleButton />

                                <div className="flex items-center gap-1">
                                    <hr className="flex-1" />
                                    <p className="text-kaiglo_grey-700 text-sm font-medium">OR</p>
                                    <hr className="flex-1" />
                                </div>
                            </div>

                            {isRegister && <RegisterationForm />}
                            {isLogin && <LoginForm />}
                        </div>
                    </div>
                </div>

                <TermsAndConditionsAndPrivacyPolicy />
            </section>
        </div>
    );
};

export default RegisterAndLogin;
