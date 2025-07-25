"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils/utils";

const ModifiedSelect3 = ({
    label,
    labelClassName,
    className,
    name,
    defaultValue,
    value,
    placeholder,
    options,
    onValueChange,
    isRequired,
}: {
    name: string;
    options: string[];
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    label?: string;
    labelClassName?: string;
    className?: string;
    itemClassName?: string;
    isRequired?: boolean;
    onValueChange: (value: string) => void;
}) => {
    const uniqueOptions = [...new Set(options)];

    return (
        <div>
            {label && (
                <Label
                    className={cn(
                        "text-sm md:text-base text-kaiglo_grey-700 font-normal capitalize",
                        labelClassName
                    )}
                >
                    {label} {isRequired && <span className="text-kaiglo_critical-error font-medium">*</span>}
                </Label>
            )}
            <Select
                name={name}
                onValueChange={(value) => {
                    // This null check will allow user to disselect value after
                    // already selecting one
                    onValueChange(value === "null" ? "" : value);
                }}
                defaultValue={defaultValue}
                value={value}
                required={isRequired}
            >
                <SelectTrigger className={cn("h-12 w-full text-kaiglo_grey-900 ", className)}>
                    <SelectValue placeholder={placeholder || `Select ${name}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="w-full">
                        {!isRequired && (
                            <SelectItem
                                value={"null"}
                                className="min-w-full text-kaiglo_grey-placeholder capitalize hover:!text-kaiglo_grey-placeholder"
                            >
                                Select {name}
                            </SelectItem>
                        )}

                        {uniqueOptions.map((option, index) => (
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
        </div>
    );
};
export default ModifiedSelect3;
