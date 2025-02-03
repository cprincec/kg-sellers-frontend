"use client";
import { LogoIcon } from "../ui/logos";
import { GoogleButton } from "../ui/buttons";
import LoginForm from "../ui/login/login-form";
import Link from "next/link";
import image1 from "@/public/images/auth/easy-wireless-yechnology-payment 1.1.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Login = () => {
    const searchParams = useSearchParams();

    return (
        <Suspense>
            <div className="md:grid lg:grid-cols-2 md:h-full">
                {/* Sidebar Image */}
                <div className="relative hidden lg:block">
                    <Image
                        src={image1}
                        alt="Easy wireless technology payment"
                        fill
                        sizes="100%"
                        className="object-contain"
                    />
                </div>

                {/* Login Form Section */}
                <div className="text-center mx-4 my-16 md:m-auto md:w-[70%] lg:w-[75%] md:max-lg:h-[80%] md:grid md:items-center">
                    <section>
                        <LogoIcon className="mx-auto rounded-lg p-4 shadow mb-8" />
                        <h1 className="mb-2">Welcome to Kaiglo</h1>
                        <p>Enter your details to start selling</p>

                        {/* Google Login */}
                        <section className="my-6">
                            <GoogleButton />
                        </section>

                        {/* Divider */}
                        <div className="flex items-center gap-2">
                            <hr className="flex-1" />
                            <p className="text-kaiglo_grey-700 text-sm font-medium">OR</p>
                            <hr className="flex-1" />
                        </div>

                        {/* Login Form */}
                        <LoginForm
                            email={searchParams.get("email") || ""}
                            phone={searchParams.get("phone") || ""}
                        />

                        {/* Registration Link */}
                        <p className="text-kaiglo_grey-700 mt-4">
                            Don&#39;t have an account?{" "}
                            <Link href="/register" className="text-kaiglo_brand-base font-medium">
                                Create account
                            </Link>
                        </p>

                        {/* Terms and Conditions */}
                        <p className="text-kaiglo_grey-600 text-sm mt-6">
                            By continuing, you agree to Kaiglo’s{" "}
                            <Link href="/terms-of-service" className="text-kaiglo_info-base">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy-policy" className="text-kaiglo_info-base">
                                Privacy Policy
                            </Link>
                        </p>
                    </section>
                </div>
            </div>
        </Suspense>
    );
};

export default Login;
