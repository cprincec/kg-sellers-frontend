// import { ControlledModifiedInputProps } from "@/interfaces/controlledElements.interface";
import { Controller } from "react-hook-form";
// import { Controller, FieldValues } from "react-hook-form";
import ModifiedInput from "@/components/shared/ModifiedInput";
import { cn } from "@/lib/utils";

const ControlledModifiedInput = ({
    name,
    label,
    placeholder,
    type,
    control,
    rules,
    error,
    isRequired,
    className,
    labelClassNames,
    onValueChange,
    disabled,
    containerClassName,
}) => {
    // }: ControlledModifiedInputProps<TFormValue>) => {

    return (
        <div className={containerClassName ? containerClassName : ""}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div>
                        <ModifiedInput
                            id={name}
                            type={type}
                            value={field.value}
                            onChange={field.onChange}
                            isRequired={isRequired}
                            className={cn("w-full", className)}
                            onValueChange={onValueChange}
                            placeholder={placeholder}
                            label={label}
                            labelClassNames={labelClassNames}
                            disabled={disabled}
                        />
                        {error && (
                            <p className="text-sm text-left mt-1 font-light text-kaiglo_critical-base">
                                {error.message}
                            </p>
                        )}
                    </div>
                )}
            />
        </div>
    );
};
export default ControlledModifiedInput;
