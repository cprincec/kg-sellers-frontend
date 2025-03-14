import { CheckMarkIcon } from "./stepper-icons";

const CompletedStep = ({ label, description }: { label: string; description: string }) => {
    return (
        <div className="flex items-center md:gap-x-3">
            <div className="md:w-12 md:h-12 md:flex md:justify-center md:items-center rounded-lg bg-kaiglo_success-800">
                <CheckMarkIcon className="p-1.5 md:p-0 w-9 md:w-6 h-9 md:h-6" />
            </div>
            <div className="hidden lg:grid md:gap-1 md:items-center">
                <h3 className="text-base font-medium text-kaiglo_grey-400">{label}</h3>
                <p className="text-sm text-kaiglo_grey-400">{description}</p>
            </div>
        </div>
    );
};
export default CompletedStep;
