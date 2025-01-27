"use client";
import { LogoIcon } from "../ui/logos";
import { GoogleButton } from "../ui/buttons";
import RegisterationForm from "../ui/register/registeration-form";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/images/auth/easy-wireless-yechnology-payment 1.png";
import { useEffect, useState } from "react";

const Register = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Skip rendering until the client has mounted
    return (
        // <div className="md:grid lg:grid-cols-2 lg:fixed">
        //     <div className="hidden lg:block lg:relative lg:w-[50vw] h-[100vh]">
        //         <Image src={image1} alt="easy-wireless-yechnology-payment 1" fill sizes="100%" />
        //     </div>
        //     <div className="md-min-h-[100vh] mx-4 my-16 md:my-4">
        //         <section className="text-center">
        //             <LogoIcon className="mx-auto rounded-lg p-4 shadow mb-8" />
        //             <div>
        //                 <h1 className="mb-2">Welcome to Kaiglo</h1>
        //                 <p>Enter your details to start selling</p>
        //             </div>

        //             {/* Google login */}
        //             <section className="my-6">
        //                 <GoogleButton />
        //             </section>

        //             <div className="flex items-center gap-2">
        //                 <hr className="flex-1" />
        //                 <p className="text-kaiglo_grey-700 text-sm font-medium">OR</p>
        //                 <hr className="flex-1" />
        //             </div>

        //             {/* Registration form */}
        //             <RegisterationForm />

        //             <p className="text-kaiglo_grey-700 mt-4">
        //                 Already have an account?{" "}
        //                 <Link href={"/login"} className="text-kaiglo_brand-base font-medium">
        //                     Log in
        //                 </Link>
        //             </p>

        //             <p className="text-kaiglo_grey-600 text-sm mt-6 md:mt-8">
        //                 By continuing, you agree to Kaiglo’s{" "}
        //                 <Link href={"/terms-of-service"} className="text-kaiglo_info-base">
        //                     Terms of Service
        //                 </Link>{" "}
        //                 and{" "}
        //                 <Link href={"/terms-of-service"} className="text-kaiglo_info-base">
        //                     Privacy Policy
        //                 </Link>
        //             </p>
        //         </section>
        //     </div>
        // </div>

        <div className="md:grid lg:grid-cols-2 md:h-full">
            <div className="relative hidden lg:block">
                <Image
                    src={image1}
                    alt="easy-wireless-yechnology-payment 1"
                    fill
                    sizes="100%"
                    className="object-fill"
                />
            </div>
            <div className="text-center mx-4 my-16 md:m-auto md:w-[70%] lg:w-[75%] md:max-lg:h-[80%] md:grid md:items-center">
                <section className="md:max-lg:pb-12">
                    <div>
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

                        {/* Registration form */}
                        <RegisterationForm />

                        <p className="text-kaiglo_grey-700 mt-4">
                            Already have an account?{" "}
                            <Link href={"/login"} className="text-kaiglo_brand-base font-medium">
                                Log in
                            </Link>
                        </p>
                    </div>
                    <p className="text-kaiglo_grey-600 text-sm mt-6 md:mt-8 text-center">
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
        </div>
    );
};

export default Register;
