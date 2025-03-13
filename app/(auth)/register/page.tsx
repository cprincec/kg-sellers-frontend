import { GoogleButton } from "../ui/buttons";
import { LogoWithWelcomeText } from "../ui/shared/LogoWithWelcomeText";
import RegisterationForm from "../ui/register/registerationForm/RegisterationForm";
import { SIGNUP_TEXTS } from "@/lib/consts";
import SmilingWomanImage from "../ui/shared/SmilingWomanImage";
import TermsAndConditionsAndPrivacyPolicy from "../ui/shared/TermsAndConditionsAndPrivacyPolicy";

const Register = () => {
    return (
        <div className="grid lg:grid-cols-2 h-screen">
            <SmilingWomanImage />

            <section className="text-center py-4 mx-4 my-auto md:m-auto md:w-[70%] lg:w-[75%]">
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
    );
};

export default Register;
