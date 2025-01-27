"use client";

import { useContext, useEffect, useState } from "react";
import StoreDetails from "../../ui/register/storeSetup/StoreDetails";
// import { ArrowBackButton } from "../../ui/buttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCategory from "../../ui/register/storeSetup/ProductCategory";
import PaymentOption from "../../ui/register/storeSetup/PaymentOption";
import { IStoreSetupFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { FieldErrors, useForm } from "react-hook-form";
import { storeSetupSchemas } from "@/lib/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeSetupDefaultValues } from "@/lib/validations/defaults";
import ConfirmAccountModal from "../../ui/register/storeSetup/ConfirmAccountModal";
import TermsOfContract from "../../ui/register/storeSetup/TermOfContract";
import Stepper from "../../ui/register/storeSetup/Stepper";
import { useRouter } from "next/navigation";
import { StoreSetupContext, useStoreSetupContext } from "@/contexts/storeSetupContext";
import { ArrowBackButton } from "../../ui/buttons";
import { Logo, SellersHubLogo } from "../../ui/logos";

const StoreSetup = () => {
    const { currentStep, navigateToNextStep, navigateToPreviousStep, navigateToSpecificStep } =
        useStoreSetupContext();
    const router = useRouter();
    // const [currentStep, setCurrentStep] = useState(0);
    const [showConfirmAccountModal, setShowConfirmAccountModal] = useState(false);

    const currentResolver = storeSetupSchemas[currentStep];

    console.log(currentStep);

    const {
        control,
        trigger,
        getValues,
        formState: { errors },
    } = useForm<IStoreSetupFormDTO>({
        defaultValues: storeSetupDefaultValues,
        shouldUnregister: false,
        resolver: yupResolver(currentResolver),
    });

    const saveStoreSetup = (data) => {
        console.log(data);
        router.push("/dashboard");
    };

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Skip rendering until the client has mounted

    return (
        <div className="md:grid md:grid-cols-5">
            <div className="hidden md:flex md:flex-col md:gap-12 md:col-span-2 md:bg-kaiglo_success-50 md:p-2 md:m-2 lg:m-8 lg:p-4 ">
                <div className="md:px-3 md:py-2 ">
                    <SellersHubLogo className="w-32 h-10" />
                </div>
                <div className="">
                    <Stepper currentStep={currentStep} />
                </div>
            </div>
            <div className="md:col-span-3 p-4 mt-4">
                {currentStep === 0 ? (
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
                        onClick={() => navigateToPreviousStep()}
                        value="Back"
                    />
                )}

                {/* Stepper starts icons starts */}
                <div className="py-8 px-4 md:hidden">
                    <Stepper currentStep={currentStep} />
                </div>
                {/* Stepper icons ends  */}
                <div className="">
                    <form>
                        {/* Form fields starts */}
                        {currentStep === 0 && <StoreDetails formProps={{ control, errors }} />}
                        {currentStep === 1 && <ProductCategory control={control} errors={errors} />}
                        {currentStep === 2 && <PaymentOption control={control} errors={errors} />}
                        {currentStep === 3 && <TermsOfContract />}
                        {/* Form fields ends */}

                        {/* Navigation Buttons starts*/}
                        <div className="grid grid-flow-col items-center gap-3 mt-12 ">
                            {currentStep === 0 || currentStep === 3 ? (
                                <Link
                                    href="/"
                                    className="flex justify-center items-center p-3 rounded-full border border-kaiglo_grey-disabled text-kaiglo_grey-700"
                                >
                                    Cancel
                                </Link>
                            ) : (
                                <Button
                                    type="button"
                                    variant={"outline"}
                                    className="p-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                                    onClick={navigateToPreviousStep}
                                >
                                    Back
                                </Button>
                            )}
                            {currentStep === 3 ? (
                                <Button
                                    type="button"
                                    className="p-3 rounded-full"
                                    onClick={() => saveStoreSetup(getValues())}
                                >
                                    I agree
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    className="p-3 rounded-full"
                                    onClick={() => {
                                        console.log(navigateToNextStep);
                                        navigateToNextStep({ trigger, setShowConfirmAccountModal });
                                    }}
                                >
                                    Next
                                </Button>
                            )}
                        </div>
                        {/* Navigation Buttons ends*/}
                    </form>

                    {showConfirmAccountModal && (
                        <ConfirmAccountModal
                            showConfirmAccountModal={showConfirmAccountModal}
                            setShowConfirmAccountModal={setShowConfirmAccountModal}
                            navigateToSpecificStep={navigateToSpecificStep}
                            getValues={getValues}
                            // beneficiaryName={getValues()?.beneficiaryName}
                            // accountNumber={getValues()?.accountNumber}
                            // bankName={getValues()?.bankName}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
export default StoreSetup;
