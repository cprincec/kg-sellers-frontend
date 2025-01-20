"use client";

import { useState } from "react";
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

export interface UseFormHookProps {
    control: Control<IStoreSetupFormDTO>;
    errors: FieldErrors<IStoreSetupFormDTO>;
}

const StoreSetup = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showConfirmAccountModal, setShowConfirmAccountModal] = useState(false);

    const navigateToPreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const navigateToNextStep = async () => {
        const stepIsValid = await trigger();
        if (stepIsValid) {
            if (currentStep === 3) confirmAccountDetails(); // Show confirm account details modal
            else setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const navigateToSpecificStep = (step: number) => {
        setCurrentStep(step);
    };

    const saveStoreSetup = (data) => {
        console.log(data);
    };

    const confirmAccountDetails = () => {};

    // const steps = [
    //     <StoreDetails key={0} navigateToNextStep={navigateToNextStep} />,
    //     <ProductCategory key={1} navigateToNextStep={navigateToNextStep} />,
    //     <PaymentOption key={2} navigateToNextStep={navigateToNextStep} />,
    // ];

    const currentResolver = storeSetupSchemas[currentStep];

    const {
        control,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<IStoreSetupFormDTO>({
        defaultValues: storeSetupDefaultValues,
        shouldUnregister: false,
        resolver: yupResolver(currentResolver),
    });

    return (
        <div className="p-4">
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
                    className="w-max bg-transparent"
                    onClick={() => navigateToSpecificStep(1)}
                    value="Back"
                />
            )}

            <div className="py-8">
                <form onSubmit={handleSubmit(saveStoreSetup)}>
                    {currentStep === 0 && <StoreDetails formProps={{ control, errors }} />}
                    {currentStep === 1 && <ProductCategory formProps={{ control, errors }} />}
                    {currentStep === 2 && <PaymentOption formProps={{ control, errors }} />}

                    {/* Navigation Buttons starts*/}
                    <div className="grid grid-flow-col items-center gap-3 my-6 ">
                        {currentStep === 0 ? (
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
                        {currentStep === 2 ? (
                            <Button type="submit" className="p-3 rounded-full">
                                Submit
                            </Button>
                        ) : (
                            <Button type="button" className="p-3 rounded-full" onClick={navigateToNextStep}>
                                Next
                            </Button>
                        )}
                    </div>
                    {/* Navigation Buttons ends*/}
                </form>

                {/* {steps.map((step, index) => {
                    return index + 1 === currentStep && step;
                })} */}
            </div>
        </div>
    );
};
export default StoreSetup;
