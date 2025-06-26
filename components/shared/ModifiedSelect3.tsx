"use client";

import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const ModifiedSelect3 = ({
    name,
    defaultValue,
    placeholder,
    options,
    onValueChange,
    isRequired,
}: {
    name: string;
    defaultValue?: string;
    placeholder?: string;
    options: string[];
    itemClassName?: string;
    isRequired?: boolean;
    onValueChange: (value: string) => void;
}) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue || "");

    return (
        <Select
            name={name}
            onValueChange={(value) => {
                // This will allow user to diselect value after
                // already selecting one
                if (value === "null") {
                    onValueChange("");
                    setSelectedValue("");
                } else {
                    onValueChange(value);
                    setSelectedValue(value);
                }
            }}
            value={selectedValue}
        >
            <SelectTrigger className="w-full text-kaiglo_grey-900">
                <SelectValue placeholder={placeholder || `Select ${name}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="w-full">
                    {!isRequired && (
                        <SelectItem
                            value="null"
                            className="min-w-full text-kaiglo_grey-placeholder capitalize hover:!text-kaiglo_grey-placeholder"
                        >
                            Select {name}
                        </SelectItem>
                    )}

                    {options.map((option: string) => (
                        <SelectItem key={option} value={option} className="min-w-full capitalize">
                            {option}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
export default ModifiedSelect3;
