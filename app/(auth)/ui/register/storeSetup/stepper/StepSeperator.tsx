import { LineIcon, VerticalLineIcon } from "./stepper-icons";

const StepSeperator = ({ isCompleted }: { isCompleted: boolean }) => {
    return (
        <div className="md:w-12 md:h-8 md:flex md:items-center md:justify-start">
            <LineIcon className="w-10 h-1.5 md:hidden" strokeColor={isCompleted ? "#008000" : "#98A2B3"} />
            <VerticalLineIcon
                className="hidden md:block w-1.5 h-full md:mx-auto"
                strokeColor={isCompleted ? "#008000" : "#D0D5DD"}
            />
        </div>
    );
};
export default StepSeperator;
