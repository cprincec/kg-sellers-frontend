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
            label: "Bank information",
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
        <div className="flex  md:grid justify-center lg:justify-start items-center gap-2 md:gap-0">
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
                                <div className="md:flex md:justify-start md:gap-x-3">
                                    <div className="md:w-12 md:h-12 rounded-lg border-2 border-kaiglo_success-base bg-kaiglo_success-50 flex items-center justify-center">
                                        <Icon
                                            strokeColor="#008000"
                                            className="p-1.5 md:p-0 w-9 md:w-6 lg:w-5 h-9 md:h-6 lg:h-5"
                                        />
                                    </div>
                                    <div className="hidden lg:grid lg:gap-1 lg:items-center ">
                                        <h3 className="text-base font-medium text-kaiglo_success-800">
                                            {step.label}
                                        </h3>
                                        <p className="text-sm text-kaiglo_success-800">{step.description}</p>
                                    </div>
                                </div>
                            )}

                            {isUpcoming && (
                                <div className="md:flex md:items-center md:gap-x-3">
                                    <div className="md:w-12 md:h-12 md:flex md:justify-center md:items-center">
                                        <Icon
                                            strokeColor="#98A2B3"
                                            className="w-8 md:w-6 lg:w-5 h-8 md:h-6 lg:h-5 p-1.5 md:p-0 rounded-lg bg-kaiglo_grey-50 md:bg-transparent"
                                        />
                                    </div>
                                    <div className="hidden lg:grid lg:gap-1 lg:items-center">
                                        <h3 className="text-base font-medium text-kaiglo_grey-400">
                                            {step.label}
                                        </h3>
                                        <p className="text-sm text-kaiglo_grey-400">{step.description}</p>
                                    </div>
                                </div>
                            )}
                            {isCompleted && (
                                <div className="flex items-center md:gap-x-3">
                                    <div className="md:w-12 md:h-12 md:flex md:justify-center md:items-center rounded-lg bg-kaiglo_success-800">
                                        <CheckMarkIcon className="p-1.5 md:p-0 w-9 md:w-6 h-9 md:h-6" />
                                    </div>
                                    <div className="hidden lg:grid md:gap-1 md:items-center">
                                        <h3 className="text-base font-medium text-kaiglo_grey-400">
                                            {step.label}
                                        </h3>
                                        <p className="text-sm text-kaiglo_grey-400">{step.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Step Separator */}
                        {index < steps.length - 1 && (
                            <div className="md:w-12 md:h-8 md:flex md:items-center md:justify-start">
                                <LineIcon
                                    className="w-10 h-1.5 md:hidden"
                                    strokeColor={isCompleted ? "#008000" : "#98A2B3"}
                                />
                                <VerticalLineIcon
                                    className="hidden md:block w-1.5 h-full md:mx-auto"
                                    strokeColor={isCompleted ? "#008000" : "#D0D5DD"}
                                />
                            </div>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Stepper;
