"use client";

import { useEffect, useState } from "react";
import StoreDetails from "../../ui/register/storeSetup/StoreDetails";
import { ArrowBackButton } from "../../ui/buttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCategory from "../../ui/register/storeSetup/ProductCategory";
import PaymentOption from "../../ui/register/storeSetup/PaymentOption";
import { IStoreSetupFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import { Control, FieldErrors, useForm } from "react-hook-form";
import { storeSetupSchemas } from "@/lib/validations/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeSetupDefaultValues } from "@/lib/validations/defaults";
import ConfirmAccountModal from "../../ui/register/storeSetup/ConfirmAccountModal";
import TermsOfContract from "../../ui/register/storeSetup/TermOfContract";
import Stepper from "../../ui/register/storeSetup/Stepper";
import { useRouter } from "next/navigation";

const StoreSetup = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [showConfirmAccountModal, setShowConfirmAccountModal] = useState(false);

    const navigateToPreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const navigateToNextStep = async () => {
        const stepIsValid = await trigger(); // Validate visible form fields

        if (stepIsValid) {
            if (currentStep === 2) setShowConfirmAccountModal(true); // Confirm payment details
            else setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const navigateToSpecificStep = (step: number) => {
        setCurrentStep(step);
    };

    const saveStoreSetup = (data) => {
        console.log(data);
        router.push("/dashboard");
    };

    const currentResolver = storeSetupSchemas[currentStep];

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

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Skip rendering until the client has mounted

    return (
        <div className="p-4 mt-4">
            {currentStep === 0 ? (
                <section>
                    <h1>Name, Welcome to Kaiglo SellersHub!</h1>
                    <p className="mt-1">
                        Kaiglo is for the one who longs for an easier and convenient way to sell anything at
                        anytime. Kaiglo is for you.
                    </p>
                </section>
            ) : (
                <ArrowBackButton
                    type="button"
                    variant="ghost"
                    className="w-max bg-transparent -ml-4"
                    onClick={() => navigateToSpecificStep(0)}
                    value="Back"
                />
            )}

            {/* Stepper starts icons starts */}
            <Stepper currentStep={currentStep} />
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
                            <Button type="button" className="p-3 rounded-full" onClick={navigateToNextStep}>
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
                        beneficiaryName={getValues()?.beneficiaryName}
                        accountNumber={getValues()?.accountNumber}
                        bankName={getValues()?.bankName}
                    />
                )}
            </div>
        </div>
    );
};
export default StoreSetup;
