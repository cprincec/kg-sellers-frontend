import { ControlledModifiedTextAreaProps } from "@/interfaces/controlledElements.interface";
import { Controller, FieldValues } from "react-hook-form";
import ModifiedTextArea from "../shared/ModifiedTextArea";

const ControlledModifiedTextArea = <TFormValue extends FieldValues>({
    name,
    placeholder,
    className,
    control,
    rules,
    error,
    rows,
    isRequired,
    label,
    labelClassNames,
}: ControlledModifiedTextAreaProps<TFormValue>) => {
    return (
        <div>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div>
                        <ModifiedTextArea
                            id={name}
                            name={name}
                            value={field.value}
                            onChange={field.onChange}
                            className={className}
                            placeholder={placeholder}
                            label={label}
                            labelClassNames={labelClassNames}
                            rows={rows}
                            isRequired={isRequired}
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

export default ControlledModifiedTextArea;
