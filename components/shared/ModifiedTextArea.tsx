import { ModifiedTextAreaProps } from "@/interfaces/elements.interface";
import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils/utils";

const ModifiedTextArea = ({
    id,
    name,
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
                    className={cn("text-sm md:text-base text-kaiglo_grey-700 font-normal", labelClassNames)}
                >
                    {label}
                    {isRequired && <span className="text-kaiglo_critical-error font-medium">*</span>}
                </Label>
            )}
            <Textarea
                name={name}
                id={id}
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
