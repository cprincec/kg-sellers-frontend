import { ControlledModifiedSelectProps } from "@/interfaces/controlledElements.interface";
import { Controller, ControllerRenderProps, FieldValues } from "react-hook-form";
import ModifiedSelect from "../shared/ModifiedSelect";
import { useCallback } from "react";

const ControlledModifiedSelect2 = <TFormValue extends FieldValues>({
    name,
    placeholder,
    control,
    rules,
    error,
    options,
    onChange,
    required,
}: ControlledModifiedSelectProps<TFormValue>) => {
    const renderSelect = useCallback(
        ({ field }: { field: ControllerRenderProps<TFormValue> }) => (
            <div>
                <ModifiedSelect
                    options={options}
                    selectedValue={field.value}
                    onChange={(value) => (onChange ? onChange(value) : field.onChange(value))}
                    placeholder={placeholder}
                    required={required}
                />
                {error && (
                    <p className="text-[10px] mt-1 font-light text-kaiglo_critical-base">{error.message}</p>
                )}
            </div>
        ),
        [options, placeholder, required, error, onChange]
    );

    return (
        <div>
            <Controller name={name} control={control} rules={rules} render={renderSelect} />
        </div>
    );
};

export default ControlledModifiedSelect2;
