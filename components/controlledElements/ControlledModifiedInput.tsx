import { ControlledModifiedInputProps } from "@/interfaces/controlledElements.interface";
import { Controller, FieldValues } from "react-hook-form";
import ModifiedInput from "@/components/shared/ModifiedInput";
import { cn } from "@/lib/utils/utils";

const ControlledModifiedInput = <TFormValue extends FieldValues>({
    name,
    label,
    labelDescription,
    labelContainerClassName,
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
}: ControlledModifiedInputProps<TFormValue>) => {
    return (
        <div className={containerClassName ? containerClassName : ""}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div className="text-left">
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
                            labelDescription={labelDescription}
                            labelContainerClassName={labelContainerClassName}
                            labelClassNames={labelClassNames}
                            disabled={disabled}
                        />
                        {error && (
                            <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
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
