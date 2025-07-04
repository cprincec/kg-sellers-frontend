import { Fragment } from "react";
import { steps } from "@/app/(auth)/lib/data";
import UpcomingStep from "./UpcomingStep";
import CurrentStep from "./CurrentStep";
import CompletedStep from "./CompletedStep";
import StepSeperator from "./StepSeperator";

const Stepper = ({ currentStep }: { currentStep: number }) => {
    return (
        <div className="flex  md:grid justify-center lg:justify-start items-center gap-2 md:gap-0">
            {steps.map((step, index) => {
                const { icon: Icon, label, description } = step;
                const isCurrent = index + 1 === currentStep;
                const isCompleted = index + 1 < currentStep;
                const isUpcoming = index + 1 > currentStep;

                return (
                    <Fragment key={label}>
                        {/* Step Icon */}
                        <div className="flex items-center justify-center md:justify-start">
                            {isCurrent && <CurrentStep label={label} description={description} Icon={Icon} />}
                            {isUpcoming && (
                                <UpcomingStep label={label} description={description} Icon={Icon} />
                            )}
                            {isCompleted && <CompletedStep label={label} description={description} />}
                        </div>

                        {/* Step Separator */}
                        {index < steps.length - 1 && <StepSeperator isCompleted={isCompleted} />}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Stepper;
