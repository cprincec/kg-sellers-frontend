import { Fragment } from "react";
import {
    CreditCardIcon,
    LicenseIcon,
    PackageIcon,
    StoreIcon,
    LineIcon,
    CheckMarkIcon,
    VerticalLineIcon,
} from "./stepper-icons";

const Stepper = ({ currentStep }: { currentStep: number }) => {
    const steps = [
        {
            label: "Store information",
            description: "Provide information about your store",
            icon: StoreIcon,
        },
        {
            label: "Product information",
            description: "Provide information about what you sell",
            icon: PackageIcon,
        },
        {
            label: "Bank Information",
            description: "Provide your bank information to get paid",
            icon: CreditCardIcon,
        },
        {
            label: "Terms of contract",
            description: "Ensure you read and accept these terms",
            icon: LicenseIcon,
        },
    ];

    return (
        <div className="flex md:flex-col justify-center md:justify-start items-center gap-2 md:gap-0">
            {steps.map((step, index) => {
                const { icon: Icon, label } = step;
                const isCurrent = index === currentStep;
                const isCompleted = index < currentStep;
                const isUpcoming = index > currentStep;

                return (
                    <Fragment key={label}>
                        {/* Step Icon */}
                        <div className="flex items-center justify-center md:justify-start">
                            {isCurrent && (
                                <div className="flex items-center md:gap-x-2">
                                    <Icon
                                        strokeColor="#008000"
                                        className="p-1.5 md:p-2 w-9 md:w-12 h-9 md:h-12 rounded-lg border-2 border-kaiglo_success-base bg-kaiglo_success-50"
                                    />
                                    <div className="hidden md:grid md:gap-1 md:items-center ">
                                        <h3 className="text-base font font-medium text-kaiglo_success-800">
                                            {step.label}
                                        </h3>
                                        <p className="text-sm text-kaiglo_success-800">{step.description}</p>
                                    </div>
                                </div>
                            )}
                            {isUpcoming && (
                                <div className="flex items-center">
                                    <Icon
                                        strokeColor="#98A2B3"
                                        className="w-8 h-8 p-1.5 rounded-lg bg-kaiglo_grey-50"
                                    />
                                    <div className="hidden md:grid md:gap-1 md:items-center">
                                        <h3 className="">{step.label}</h3>
                                        <p className="">{step.description}</p>
                                    </div>
                                </div>
                            )}
                            {isCompleted && (
                                <div className="flex items-center">
                                    <CheckMarkIcon className="p-1.5 w-9 h-9 rounded-lg bg-kaiglo_success-800" />
                                    <div className="hidden md:grid md:gap-1 md:items-center">
                                        <h3 className="">{step.label}</h3>
                                        <p className="">{step.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Step Separator */}
                        {index < steps.length - 1 && (
                            <div className="md:flex md:items-center md:justify-start">
                                <LineIcon
                                    className="w-10 h-1.5 md:hidden"
                                    strokeColor={isCompleted ? "#008000" : "#98A2B3"}
                                />
                                <VerticalLineIcon className="hidden md:block w-1.5 h-10 " />
                            </div>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Stepper;
