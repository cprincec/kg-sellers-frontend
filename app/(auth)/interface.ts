import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import { SetStateAction } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

// ============================================================================
// Authentication & Welcome Screen Interfaces
// ============================================================================

export interface LogoWithWelcomeTextProps {
    title: string;
    subtitle: string;
}

// ============================================================================
// OTP Related Interfaces
// ============================================================================

export interface OtpFormInputProps {
    email: string;
    phone: string;
    continueTo: string;
    actionText?: string;
    setShowOtpModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EnterOtpProps {
    actionText?: string;
    action?: () => void;
    actionLink?: string;
    showOtpModal: boolean;
    setShowOtpModal: React.Dispatch<SetStateAction<boolean>>;
    email: string;
    phone: string;
}

export interface OtpContextType {
    showOtpModal: boolean;
    setShowOtpModal: React.Dispatch<SetStateAction<boolean>>;
    resetOtpModal: () => void;
}

export interface OtpContextProviderProps {
    children: React.ReactNode;
}

export interface OtpTimerProps {
    email: string;
    phone: string;
}

// ============================================================================
// Store Setup Related Interfaces
// ============================================================================

/*********** STORE SETUP FORM DTO ***********/
export interface IStoreDetailsFormDTO {
    storeName: string;
    email: string;
    phone: string;
    address: string;
    logo: Blob | null; // logo can be Blob or null
    banner: Blob | null; // banner can be Blob or null, and optional
}

export interface StoreSetupContextDTO {
    currentStep: number;
    setCurrentStep: React.Dispatch<SetStateAction<number>>;
    navigateToPreviousStep: () => void;
    navigateToNextStep: ({ trigger, setShowConfirmAccountModal }: navigateTpNextStepProps) => void;
    navigateToSpecificStep: (step: number) => void;
    showOtpModal: boolean;
    setShowOtpModal: React.Dispatch<SetStateAction<boolean>>;
    resetOtpModal: () => void;
    // saveStoreSetup: (data: any) => void;
}

export interface StoreSetupContextProviderProps {
    children: React.ReactNode;
}

export interface navigateTpNextStepProps {
    trigger: () => Promise<boolean>;
    setShowConfirmAccountModal: React.Dispatch<SetStateAction<boolean>>;
}

// ============================================================================
// Account & Banking Related Interfaces
// ============================================================================

/*********** STORE SETUP FORM DTO ***********/
export interface IPaymentOptionFormDTO {
    beneficiaryName: string;
    accountNumber: string;
    bankName: string;
}

export interface ConfirmAccountModalProps {
    showConfirmAccountModal: boolean;
    setShowConfirmAccountModal: React.Dispatch<SetStateAction<boolean>>;
    navigateToSpecificStep?: (int: number) => void;
    getValues?: () => void;
    bankDetails?: {
        beneficiaryName: string;
        accountNumber: string;
        bankName: string;
    };
}

// ============================================================================
// Navigation & UI Component Interfaces
// ============================================================================

export interface SideBarModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

// ============================================================================
// Order Related Interfaces
// ============================================================================

export type OrderDetailProps = {
    order: IOrderDTO;
    showOrderDetail: boolean;
    setShowOrderDetail: React.Dispatch<React.SetStateAction<boolean>>;
};
