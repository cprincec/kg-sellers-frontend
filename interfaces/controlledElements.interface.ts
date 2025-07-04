import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export interface Rule {
    required?: string | boolean;
    min?: string | number;
    max?: string | number;
}

/********** CONTROLLED MODIFIED INPUT ***********/
export interface ControlledModifiedInputProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    placeholder?: string;
    label?: string;
    labelDescription?: React.ReactNode;
    labelContainerClassName?: string;
    type?: string;
    inputMode?: "url" | "search" | "text" | "email" | "none" | "tel" | "numeric" | "decimal" | undefined;
    error?: FieldError;
    rules?: Rule;
    inputRef?: React.ForwardedRef<HTMLInputElement>;
    isRequired?: boolean;
    className?: string;
    labelClassNames?: string;
    containerClassName?: string;
    onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export interface ControlledModifiedSelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    rules: any;
    placeholder: string;
    error: any;
    options: string[];
    // onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChange?: (value: string) => void;
    required: boolean;
}

export interface ControlledModifiedTextAreaProps<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    rules: any;
    placeholder: string;
    error: any;
    rows: number;
    isRequired?: boolean;
    className?: string;
    label?: string;
    labelClassNames?: string;
}
