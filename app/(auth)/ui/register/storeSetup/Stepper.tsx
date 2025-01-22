import { Fragment } from "react";
import {
    CreditCardIcon,
    LicenseIcon,
    PackageIcon,
    StoreIcon,
    LineIcon,
    CheckMarkIcon,
} from "./stepper-icons";

const Stepper = ({ currentStep }: { currentStep: number }) => {
    const steps = [
        {
            label: "Store Details",
            icon: StoreIcon,
        },
        {
            label: "Product Categories",
            icon: PackageIcon,
        },
        {
            label: "Payment Option",
            icon: CreditCardIcon,
        },
        {
            label: "Terms of Contract",
            icon: LicenseIcon,
        },
    ];

    return (
        <div className="flex justify-center items-center gap-2 py-8 px-4 sm:px-10">
            {steps.map((step, index) => {
                const { icon: Icon, label } = step;
                const isCurrent = index === currentStep;
                const isCompleted = index < currentStep;
                const isUpcoming = index > currentStep;

                return (
                    <Fragment key={label}>
                        {/* Step Icon */}
                        <div className="flex items-center">
                            {isCurrent && (
                                <Icon
                                    strokeColor="#008000"
                                    className="p-1.5 w-9 h-9 rounded-lg border-2 border-kaiglo_success-base bg-kaiglo_success-50"
                                />
                            )}
                            {isUpcoming && (
                                <Icon
                                    strokeColor="#98A2B3"
                                    className="w-8 h-8 p-1.5 rounded-lg bg-kaiglo_grey-50"
                                />
                            )}
                            {isCompleted && (
                                <CheckMarkIcon className="p-1.5 w-9 h-9 rounded-lg bg-kaiglo_success-800" />
                            )}
                        </div>

                        {/* Step Separator */}
                        {index < steps.length - 1 && (
                            <LineIcon
                                className="w-10 h-1.5"
                                strokeColor={isCompleted ? "#008000" : "#98A2B3"}
                            />
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Stepper;
