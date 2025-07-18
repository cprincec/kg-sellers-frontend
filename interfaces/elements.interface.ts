// import { ProductStatus } from "@/types/app.type";
// import { ButtonVariants } from "@/types/element.type";
import { Dispatch, ReactNode, SetStateAction } from "react";

/********** MODIFIED BUTTON PROPS ***********/
export interface ModifiedButtonProps {
    type: "button" | "submit" | "reset";
    value: string | ReactNode;
    variant?:
        | "primary"
        | "secondary"
        | "critical"
        | "critical_solid"
        | "outline"
        | "attention"
        | "attention_solid"
        | "purple"
        | "purple_solid"
        | "info"
        | "info_solid"
        | "ghost"
        | "link"
        | "accent";
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    id?: string;
}

/********** MODIFIED TOAST PROPS ***********/
export interface ModifiedToastProps {
    variant: "default" | "destructive" | null | undefined;
    title?: string | undefined;
    description?: string | undefined;
    altText: string;
    actionTitle?: string;
    actionExists: boolean;
    className: string;
}

/*********** MODIFIED INPUT PROPS ***********/
export interface ModifiedInputProps {
    id: string;
    type?: string;
    inputMode?: "url" | "search" | "text" | "email" | "none" | "tel" | "numeric" | "decimal" | undefined;
    placeholder?: string;
    value: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: React.ForwardedRef<HTMLInputElement>;
    label?: string;
    labelClassNames?: string;
    labelDescription?: React.ReactNode;
    labelContainerClassName?: string;
    isRequired?: boolean;
    disabled?: boolean;
    accept?: string;
}

/*********** MODIFIED TEXT AREA PROPS *********/
export interface ModifiedTextAreaProps {
    name: string;
    id: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
    labelClassNames?: string;
    className?: string;
    isRequired?: boolean;
    rows: number;
}

/*********** AUTH DIALOG PROPS ***********/
export interface AuthDialogProps {
    openAuthModal: boolean;
    setOpenAuthModal: Dispatch<SetStateAction<boolean>>;
    setShowOtpModal: Dispatch<SetStateAction<boolean>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setPhone: Dispatch<SetStateAction<string>>;
}

/*********** AUTH FORM PROPS ***********/
export interface AuthFormProps {
    showLogin: boolean;
    showReferraInput: boolean;
    setShowReferralInput: Dispatch<SetStateAction<boolean>>;
    setShowOtpModal?: Dispatch<SetStateAction<boolean>>;
    setOpenAuthModal?: Dispatch<SetStateAction<boolean>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setPhone: Dispatch<SetStateAction<string>>;
}

/****************** USER DROPDOWN MENU PROPS ******************/
export interface UserDropdownMenuProps {
    title: string;
    description?: string;
    icon?: string | ReactNode;
    onItemClick?: () => void;
    itemClassName?: string;
}
