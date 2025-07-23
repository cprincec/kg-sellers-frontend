"use client";

import { ModifiedInputProps } from "@/interfaces/elements.interface";
import { cn } from "@/lib/utils/utils";
import { Label } from "../ui/label";
import dynamic from "next/dynamic";

// Dynamic import is used here to prevent hyrdation errors
const Input = dynamic(() => import("@/components/ui/input").then((mod) => mod.Input), {
    ssr: false,
    loading: () => <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse" />,
});

const ModifiedInput = ({
    placeholder,
    type,
    inputMode,
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
    labelDescription,
    labelContainerClassName,
}: ModifiedInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            let input = e.target.value;
            if (inputMode === "numeric" && type !== "number") {
                // enforce digits only in number input fields
                // while treating the input field as text field
                // this is for input fields that only accept numbers but value types are strings
                input = input.replace(/[^0-9]/g, "");
            }

            onChange(input);
        }

        if (onValueChange) onValueChange(e);
    };

    return (
        <div className="grid gap-1 md:gap-2">
            {label && (
                <div className={cn("", labelContainerClassName)}>
                    <Label
                        className={cn(
                            "text-sm md:text-base text-kaiglo_grey-700 font-normal capitalize",
                            labelClassNames
                        )}
                    >
                        {label}{" "}
                        {isRequired && <span className="text-kaiglo_critical-error font-medium">*</span>}
                    </Label>
                    {labelDescription && <div>{labelDescription}</div>}
                </div>
            )}
            <div>
                {id === "phone" && (
                    <span className="absolute left-3 pr-3 mt-[1.5px] border-r border-kaiglo_grey-disabled text-kaiglo_grey-700 text-sm md:text-base rounded-l-lg h-[46px] flex justify-center items-center">
                        +234
                    </span>
                )}

                <Input
                    id={id}
                    ref={inputRef}
                    type={type}
                    inputMode={inputMode}
                    accept={accept}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={cn("h-12 w-full", className, `${id === "phone" && "pl-[75px]"}`)}
                    required={isRequired}
                    maxLength={id === "phone" ? 11 : id === "accountNumber" ? 10 : undefined}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};
export default ModifiedInput;
