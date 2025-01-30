import { Input } from "@/components/ui/input";
import { ModifiedInputProps } from "@/interfaces/elements.interface";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

const ModifiedInput = ({
    placeholder,
    type,
    id,
    className,
    inputRef,
    value,
    onChange,
    onValueChange,
    isRequired,
    disabled,
    accept,
    label,
    labelClassNames,
}: ModifiedInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value);

        if (onValueChange) onValueChange(e);
    };

    return (
        <div className="grid gap-1 md:gap-2">
            {label && (
                <Label
                    className={`text-sm md:text-base text-kaiglo_grey-700 capitalize font-normal ${
                        labelClassNames && labelClassNames
                    }`}
                >
                    {label}
                    {isRequired && <span className="text-kaiglo_critical-error font-medium">*</span>}
                </Label>
            )}
            <div>
                {id === "phone" && (
                    <span className="absolute border-r border-kaiglo_grey-disabled text-kaiglo_grey-700 text-sm md:text-base w-[72px] rounded-l-lg ml-[1px] h-[46px] flex justify-center items-center border-0 mt-[1px]">
                        +234
                    </span>
                )}
                <Input
                    id={id}
                    ref={inputRef}
                    type={type}
                    accept={accept}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={cn("h-12 w-full", className)}
                    required={isRequired}
                    maxLength={id === "phone" ? 11 : undefined}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};
export default ModifiedInput;
