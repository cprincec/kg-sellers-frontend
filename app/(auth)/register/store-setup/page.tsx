"use client";

import Stepper from "../../ui/register/storeSetup/stepper/Stepper";
import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { ArrowBackButton } from "../../ui/buttons";
import { SellersHubLogo } from "../../ui/logos";
import TermsOfContractForm from "../../ui/register/storeSetup/termsOfContract/TermsOfContractForm";
import StoreDetailsFormWrapper from "../../ui/register/storeSetup/storeDetails/StoreDetailsFormWrapper";
import ProductsCategoriesFormWrapper from "../../ui/register/storeSetup/productsCategories/ProductsCategoriesFormWrapper";
import PaymentOptionFormWrapper from "../../ui/register/storeSetup/paymentOption/PaymentOptionFormWrapper";
import { MAX_ONBOARDING_STEP } from "@/lib/consts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";

const StoreSetup = () => {
    const router = useRouter();
    const { currentStep, setCurrentStep } = useStoreSetupContext();

    if (!currentStep) throw new Error("Storesetupprovider must be used in storesetup contect");

    useEffect(() => {
        // If the user has completed the onboarding, redirect to the dashboard
        if (currentStep >= MAX_ONBOARDING_STEP) return router.replace("/dashboard");
    }, [currentStep, router]);

    return (
        <div>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.75, type: "spring" }}
                className="hidden md:block md:fixed md:top-4 lg:top-6 md:left-4 lg:left-6 md:right-[60%] lg:right-[60%] md:bottom-4 lg:bottom-6 md:col-span-1 lg:col-span-2 md:bg-kaiglo_success-50 md:p-4 md:m-0 lg:m-0 rounded-md"
            >
                <div className="md:sticky md:top-0 lg:top-0 md:flex md:flex-col md:gap-12 md:bg-kaiglo_success-50">
                    <div className="md:px-3 md:py-2 ">
                        <SellersHubLogo className="w-32 h-10" />
                    </div>
                    <div className="">
                        <Stepper currentStep={currentStep} />
                    </div>
                </div>
            </motion.div>

            <div className="md:w-[60%] lg:w-[57%] md:ml-auto p-4 md:px-8 md:py-10 lg:p-10 mt-4 md:space-y-8">
                {currentStep === 1 ? (
                    <section>
                        <h1>Name, Welcome to Kaiglo SellersHub!</h1>
                        <p className="mt-1">
                            Kaiglo is for the one who longs for an easier and convenient way to sell anything
                            at anytime. Kaiglo is for you.
                        </p>
                    </section>
                ) : (
                    <ArrowBackButton
                        type="button"
                        variant="ghost"
                        className="w-max bg-transparent -ml-4 md:hidden"
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                        value="Back"
                    />
                )}

                {/* Stepper */}
                <div className="py-8 px-4 md:hidden">
                    <Stepper currentStep={currentStep} />
                </div>

                {/* forms */}
                <MotionConfig transition={{ duration: 0.75, type: "spring" }}>
                    <div className="">
                        {currentStep === 1 && <StoreDetailsFormWrapper />}
                        {currentStep === 2 && <ProductsCategoriesFormWrapper />}
                        {currentStep === 3 && (
                            <PaymentOptionFormWrapper submitButtonText="Next" cancelButtonText="Back" />
                        )}
                        {currentStep === 4 && <TermsOfContractForm />}
                    </div>
                </MotionConfig>
            </div>
        </div>
    );
};
export default StoreSetup;
