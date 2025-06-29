/**********************************************************
 * This component will be changed during integration
 *********************************************************/

"use client";

import Stepper from "../../ui/register/storeSetup/stepper/Stepper";
import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { ArrowBackButton } from "../../ui/buttons";
import { SellersHubLogo } from "../../ui/logos";
import StoreDetailsForm from "../../ui/register/storeSetup/storeDetails/StoreDetailsForm";
import ProductCategoryForm from "../../ui/register/storeSetup/productCategory/ProductCategoryForm";
import { PaymentOptionForm } from "../../ui/register/storeSetup/paymentOption/PaymentOptionForm";
import TermsOfContractForm from "../../ui/register/storeSetup/termsOfContract/TermsOfContractForm";

const StoreSetup = () => {
    const { currentStep, setCurrentStep } = useStoreSetupContext();
    // const router = useRouter();
    // const { setModalContent } = useModalContext();

    // const currentResolver = storeSetupSchemas[currentStep];

    // const {
    //     control,
    //     trigger,
    //     getValues,
    //     formState: { errors },
    // } = useForm<IStoreSetupFormDTO>({
    //     defaultValues: storeSetupDefaultValues,
    //     shouldUnregister: false,
    //     resolver: yupResolver(currentResolver),
    // });

    // const saveStoreSetup = (data) => {
    //     console.log(data);
    //     router.push("/dashboard?from=register");
    // };

    return (
        <div className="">
            {/* Stepper */}
            <div className="hidden md:block md:fixed md:top-4 lg:top-6 md:left-4 lg:left-6 md:right-[60%] lg:right-[60%] md:bottom-4 lg:bottom-6 md:col-span-1 lg:col-span-2 md:bg-kaiglo_success-50 md:p-4 md:m-0 lg:m-0 rounded-md">
                <div className="md:sticky md:top-0 lg:top-0 md:flex md:flex-col md:gap-12 md:bg-kaiglo_success-50">
                    <div className="md:px-3 md:py-2 ">
                        <SellersHubLogo className="w-32 h-10" />
                    </div>
                    <div className="">
                        <Stepper currentStep={currentStep} />
                    </div>
                </div>
            </div>

            {/* forms */}
            <div className="md:w-[60%] lg:w-[57%] md:ml-auto p-4 md:px-8 md:py-10 lg:p-10 mt-4 md:space-y-8">
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
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                        value="Back"
                    />
                )}

                {/* Stepper starts icons starts */}
                <div className="py-8 px-4 md:hidden">
                    <Stepper currentStep={currentStep} />
                </div>
                {/* Stepper icons ends  */}
                <div className="">
                    {currentStep === 0 && <StoreDetailsForm />}
                    {currentStep === 1 && <ProductCategoryForm />}
                    {currentStep === 2 && (
                        <PaymentOptionForm submitButtonText="Next" cancelButtonText="Back" />
                    )}
                    {currentStep === 3 && <TermsOfContractForm />}

                    {/* <form> */}
                    {/* Form fields starts */}
                    {/* {currentStep === 0 && <StoreDetails formProps={{ control, errors }} />} */}
                    {/* {currentStep === 1 && <ProductCategory control={control} errors={errors} />} */}
                    {/* {currentStep === 2 && <PaymentOption control={control} errors={errors} />} */}
                    {/* {currentStep === 3 && <TermsOfContract />} */}
                    {/* Form fields ends */}

                    {/* Navigation Buttons starts*/}

                    {/* Small view navigation buttons starts */}
                    {/* <div className="grid md:hidden grid-flow-col items-center gap-3 mt-12">
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
                                    className="p-3 rounded-full font-normal text-kaiglo_grey-700 border-kaiglo_grey-disabled"
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
                                        setModalContent(
                                            <ConfirmAccountModal
                                                navigateToSpecificStep={navigateToSpecificStep}
                                                getValues={getValues}
                                            />
                                        );
                                        navigateToNextStep({ trigger });
                                    }}
                                >
                                    Next
                                </Button>
                            )}
                        </div> */}
                    {/* Small view navigation buttons ends */}

                    {/* Large view navigation buttons starts */}

                    {/* <div className="hidden md:flex items-center gap-3 mt-12">
                            {(currentStep === 0 || currentStep === 3) && (
                                <Link
                                    href="/"
                                    className="w-[120px] flex justify-center items-center p-3 rounded-full border border-kaiglo_grey-disabled text-kaiglo_grey-700"
                                >
                                    Cancel
                                </Link>
                            )}

                            <div className="flex items-center justify-end gap-3 ml-auto">
                                {currentStep !== 0 && (
                                    <Button
                                        type="button"
                                        variant={"outline"}
                                        className="w-[120px] p-3 rounded-full font-normal text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                                        onClick={navigateToPreviousStep}
                                    >
                                        Back
                                    </Button>
                                )}
                                {currentStep === 3 ? (
                                    <Button
                                        type="button"
                                        className="w-[120px] p-3 rounded-full"
                                        onClick={() => saveStoreSetup(getValues())}
                                    >
                                        I agree
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        className="w-[120px] p-3 rounded-full"
                                        onClick={() => {
                                            setModalContent(
                                                <ConfirmAccountModal
                                                    navigateToSpecificStep={navigateToSpecificStep}
                                                    getValues={getValues}
                                                />
                                            );
                                            navigateToNextStep({ trigger });
                                        }}
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </div> */}

                    {/* Large view navigation buttons ends */}

                    {/* Navigation Buttons ends*/}
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
};
export default StoreSetup;
