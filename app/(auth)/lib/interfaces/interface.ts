import { IOrderDTO } from "@/interfaces/orders/orders.dto.interfaces";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { IOtpFormDTO } from "@/interfaces/dtos/auth.dto.interface";

// ============================================================================
// Authentication & Welcome Screen Interfaces
// ============================================================================

/*********** SIGN UP FORM DTO ***********/
export interface IRegisterUserDTO {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    otpChannel?: string;
    platform?: string;
}

/*********** SIGN IN FORM DTO ***********/
export interface ILoginUserDTO {
    email: string;
    phone: string;
    otpChannel?: string;
}

/*********** ACCOUNT RECOVERY FORM DTO ***********/
export interface IAccountRecoveryDTO {
    email: string;
    phone: string;
}

/*********** ACCOUNT RECOVERY OTP VALIDATION FORM DTO ***********/
export interface IAccountRecoveryOtpValidationDTO {
    otp: string;
    email: string;
    phoneNumber: string;
}

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
    continueTo?: string;
    actionText?: string;
}

export interface EnterOtpProps {
    actionText?: string;
    action?: () => void;
    actionLink?: string;
    email: string;
    phone: string;
}

export interface IOtpContext {
    showOtpModal: boolean;
    setShowOtpModal: Dispatch<SetStateAction<boolean>>;
    resetOtpModal: () => void;
    otpFormAction: ((payload: IOtpFormDTO) => void) | null;
    setOtpFormAction: Dispatch<SetStateAction<((payload: IOtpFormDTO) => void) | null>>;
    otpFormActionIsPending: boolean;
    setOtpFormActionIsPending: Dispatch<SetStateAction<boolean>>;
    resendOTPMutationFunc: (() => void) | null;
    setResendOTPMutationFunc: Dispatch<SetStateAction<(() => void) | null>>;
    resendOTPMutationFuncIsPending: boolean;
    setResendOTPMutationFuncIsPending: Dispatch<SetStateAction<boolean>>;
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
export interface IStoreDetailsDTO {
    storeName: string;
    email: string;
    phoneNumber: string;
    state: string;
    storeAddress: string;
    businessLogo: string;
    storeBanner?: string;
}

export interface IStoreSetupContext {
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
    onboardingData: IOnboardingData | undefined;
    setOnboardingData: Dispatch<SetStateAction<IOnboardingData | undefined>>;
    navigateToPreviousStep?: () => void;
    navigateToNextStep?: ({ trigger }: navigateTpNextStepProps) => void;
    navigateToSpecificStep?: (step: number) => void;
    // saveStoreSetup: (data: any) => void;
}

export interface IOnboardingData {
    storeDetails?: IStoreDetailsDTO;
    productCategory?: IProductCategoryDTO;
    paymentOption?: IPaymentOptionDTO;
    acceptTerms?: ITermsAndConditionsDTO;
}

export interface StoreSetupContextProviderProps {
    children: ReactNode;
}

export interface IProductCategoryDTO {
    category: string[];
}

export interface ITermsAndConditionsDTO {
    acceptTerms: boolean;
}

export interface navigateTpNextStepProps {
    trigger: () => Promise<boolean>;
}

// ============================================================================
// Account & Banking Related Interfaces
// ============================================================================

export interface IPaymentOptionDTO {
    beneficiaryName: string;
    accountNumber: string;
    bankName: string;
}

export interface ConfirmAccountModalProps {
    navigateToSpecificStep?: (int: number) => void;
    getValues?: () => void;
    bankDetails?: {
        beneficiaryName: string;
        accountNumber: string;
        bankName: string;
    };
    action: () => void;
}

// ============================================================================
// Navigation & UI Component Interfaces
// ============================================================================

export interface SideBarModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
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
};
