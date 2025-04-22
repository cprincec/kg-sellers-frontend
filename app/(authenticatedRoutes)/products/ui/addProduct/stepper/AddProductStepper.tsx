import { cn } from "@/lib/utils";
import { IconLine35, IconStepComplete } from "@/public/icons/icons";
import Image from "next/image";
import { addProductSteps } from "../../../lib/data";

const AddProductStepper = ({ currentStep }: { currentStep: string }) => {
    const steps = addProductSteps;

    // Get the index of the current step
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

    return (
        <div className="w-full">
            <div className="flex gap-3 justify-center items-center py-1">
                {steps.map((step, index) => {
                    const isCurrentStep = currentStep === step.id;
                    const isCompletedStep = index < currentStepIndex;
                    return (
                        <div key={index} className="flex items-center gap-3 lg:gap-4">
                            <div className="flex gap-2 items-center">
                                {isCompletedStep ? (
                                    <Image
                                        src={IconStepComplete}
                                        alt={step.label}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 lg:w-8 lg:h-8"
                                    />
                                ) : (
                                    <Image
                                        src={isCurrentStep ? step.currentIcon : step.notCurrentIcon}
                                        alt={step.label}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 lg:w-8 lg:h-8"
                                    />
                                )}
                                <span
                                    className={cn(
                                        "hidden lg:inline text-base text-kaiglo_grey-400",
                                        isCurrentStep && "text-kaiglo_grey-700",
                                        isCompletedStep && "text-kaiglo_success-base"
                                    )}
                                >
                                    {step.label}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <Image src={IconLine35} alt={"seperator"} className="w-[60px] lg:w-10" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default AddProductStepper;
