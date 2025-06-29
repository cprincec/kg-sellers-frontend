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
        if (onChange) onChange(e.target.value);

        if (onValueChange) onValueChange(e);
    };

    return (
        <div className="grid gap-1 md:gap-2">
            {label && (
                <div className={cn("", labelContainerClassName)}>
                    <Label
                        className={cn(
                            "text-sm md:text-base text-kaiglo_grey-700 font-normal",
                            labelClassNames
                        )}
                    >
                        {label}
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
                    accept={accept}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={cn("h-12 w-full", className, `${id === "phone" && "pl-[75px]"}`)}
                    required={isRequired}
                    maxLength={id === "phone" ? 11 : undefined}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};
export default ModifiedInput;
