import { cn } from "@/lib/utils/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

type ModifiedSelect2Props<T extends { [K in keyof T]: string }> = {
    defaultValue?: string;
    name?: string;
    label?: string;
    labelClassNames?: string;
    placeholder: string;
    options: T[];
    valueKey: keyof T;
    labelKey: keyof T;
    onValueChange?: (value: string) => void;
    itemClassName?: string;
    isRequired?: boolean;
    className?: string;
};

const ModifiedSelect2 = <T extends { [K in keyof T]: string }>({
    label,
    labelClassNames,
    className,
    name,
    defaultValue,
    placeholder,
    options,
    valueKey,
    labelKey,
    onValueChange,
    itemClassName,
    isRequired = false,
}: ModifiedSelect2Props<T>) => {
    if (!options) return null;

    return (
        <div>
            {label && (
                <Label
                    className={cn(
                        "text-sm md:text-base text-kaiglo_grey-700 font-normal capitalize",
                        labelClassNames
                    )}
                >
                    {label} {isRequired && <span className="text-kaiglo_critical-error font-medium">*</span>}
                </Label>
            )}
            <Select
                name={name}
                defaultValue={defaultValue}
                onValueChange={onValueChange}
                required={isRequired}
            >
                <SelectTrigger className={cn("h-12 w-full text-kaiglo_grey-900 ", className)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="w-full">
                        {options.map((option) => (
                            <SelectItem
                                key={option[valueKey]}
                                value={option[valueKey]}
                                className={`min-w-full ${itemClassName || ""}`}
                            >
                                {option[labelKey]}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ModifiedSelect2;
