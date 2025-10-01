import { Controller, FieldValues, Control, FieldError, Path } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils/utils";

interface ControlledRadixSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    rules?: Record<string, unknown>;
    placeholder: string;
    error?: FieldError;
    options: string[];
    onChange?: (value: string) => void;
    required?: boolean;
    label?: string;
    labelClassNames?: string;
}

const ControlledRadixSelect = <TFormValue extends FieldValues>({
    name,
    placeholder,
    control,
    rules,
    error,
    options,
    onChange,
    required = false,
    label,
    labelClassNames,
}: ControlledRadixSelectProps<TFormValue>) => {
    return (
        <div>
            {label && (
                <Label
                    className={cn(
                        "text-sm md:text-base text-kaiglo_grey-700 font-normal capitalize",
                        labelClassNames
                    )}
                >
                    {label} {required && <span className="text-kaiglo_critical-error font-medium">*</span>}
                </Label>
            )}
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div>
                        <Select
                            name={name}
                            onValueChange={(value) => {
                                field.onChange(value);
                                if (onChange) onChange(value);
                            }}
                            value={field.value}
                            required={required}
                        >
                            <SelectTrigger className="h-12 w-full text-kaiglo_grey-900 first-letter:capitalize">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className="w-full">
                                    {options.map((option, index) => (
                                        <SelectItem
                                            key={`${option}-${index}`}
                                            value={option}
                                            className="min-w-full capitalize"
                                        >
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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

export default ControlledRadixSelect;
