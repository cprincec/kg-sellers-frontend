"use client";
import { LogoIcon } from "../ui/logos";
import { GoogleButton } from "../ui/buttons";
import LoginForm from "../ui/login/login-form";
import Link from "next/link";
import { Fragment, useContext } from "react";
import { OtpContext } from "@/contexts/otpContext";
import OtpModal from "../ui/otp-modal";

const Login = () => {
    return (
        <div className="md-min-h-[100vh] mx-4 my-16">
            <section className="text-center">
                <LogoIcon className="mx-auto rounded-lg p-4 shadow mb-8" />
                <div>
                    <h1 className="mb-2">Welcome to Kaiglo</h1>
                    <p>Enter your details to start selling</p>
                </div>

                {/* Google login */}
                <section className="my-6">
                    <GoogleButton />
                </section>

                <div className="flex items-center gap-2">
                    <hr className="flex-1" />
                    <p className="text-kaiglo_grey-700 text-sm font-medium">OR</p>
                    <hr className="flex-1" />
                </div>

                {/* Login form */}
                <LoginForm />

                <p className="text-kaiglo_grey-700 mt-4">
                    Don&#39;t have an account?{" "}
                    <Link href={"/register"} className="text-kaiglo_brand-base font-medium">
                        Create account
                    </Link>
                </p>

                <p className="text-kaiglo_grey-600 text-sm mt-6">
                    By continuing, you agree to Kaiglo’s{" "}
                    <Link href={"/terms-of-service"} className="text-kaiglo_info-base">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href={"/terms-of-service"} className="text-kaiglo_info-base">
                        Privacy Policy
                    </Link>
                </p>
            </section>
        </div>
    );
};

export default Login;
