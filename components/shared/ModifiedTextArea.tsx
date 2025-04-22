import { ModifiedTextAreaProps } from "@/interfaces/elements.interface";
import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const ModifiedTextArea = ({
    value,
    onChange,
    placeholder,
    rows,
    isRequired,
    label,
    labelClassNames,
}: ModifiedTextAreaProps) => {
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
            <Textarea
                // className="w-full border p-3 rounded-md bg-transparent border-kaiglo_grey-500 focus:border-kaiglo_brand-base ring-offset-background placeholder:font-normal placeholder:text-kaiglo_grey-placeholder focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                className="p-3"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                required={isRequired}
            />
        </div>
    );
};

export default ModifiedTextArea;
