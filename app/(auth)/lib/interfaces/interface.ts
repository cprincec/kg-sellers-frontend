import { Dispatch, ReactNode, SetStateAction } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { IUserResponse } from "./response.interface";

// ============================================================================
// Authentication & Welcome Screen Interfaces
// ============================================================================

/***************** GOOGLE LOGIN ***************/
export interface ISocialAuthDTO {
    displayName: string;
    email: string;
    pictureUrl: string;
    platform?: string;
    provider: string;
}

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

export interface IOtpDTO {
    email: string;
    phone: string;
    otp: string;
}

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
    otpFormAction: ((payload: IOtpDTO) => void) | null;
    setOtpFormAction: Dispatch<SetStateAction<((payload: IOtpDTO) => void) | null>>;
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

export interface IStoreInfo {
    id: string;
    storeName: string;
    location: string;
    phoneNumber: string;
    storeSummary: IStoreSummary;
    storeRating: IStoreRating;
    profilePic: string;
    bannerImage?: string;
    owner: IUserResponse;
    createdDate: string;
    updatedDate: string;
    storeStatus: IStoreStatus;
    onboardingStep: number;
    email: string;
    address: string;

    // Optional fields
    storeUrl?: string;
    closestMarket?: unknown;
    category?: string;
    description?: string;
    visit?: number;
    pendingOrder?: number;
    stock?: number;
    sales?: number;
    bestSellingProducts?: unknown;
    recentBuyers?: unknown;
    coupons?: unknown;
    isFollowingStore?: boolean;
    bankDetails?: IBankDetails;
    storeIdentity?: unknown;
    newPhoneNumber?: string;
    isDeleted?: boolean;
    categories: string[];
    termsAndCondition?: string;
}

export interface IStoreSummary {
    successfulSales: number;
    productCount: number;
    followers: number;
}

export interface IStoreRatingBase {
    count: number;
    sum: number;
}

export interface IStoreQualityRating extends IStoreRatingBase {
    quality: number;
}

export interface IStoreDeliveryRating extends IStoreRatingBase {
    delivery: number;
}

export interface IStoreCommunicationRating extends IStoreRatingBase {
    communication: number;
}

export interface IStoreRating {
    qualityRating: IStoreQualityRating;
    deliveryRating: IStoreDeliveryRating;
    communicationRating: IStoreCommunicationRating;
    comment?: string;
}

export interface IStoreStatus {
    status: string;
    updatedDate: string;
    approvedBy?: string;
    note?: string;
}

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
    onboardingData: IOnboardingData | null;
    setOnboardingData: Dispatch<SetStateAction<IOnboardingData | null>>;
    navigateToPreviousStep?: () => void;
    navigateToNextStep?: ({ trigger }: navigateTpNextStepProps) => void;
    navigateToSpecificStep?: (step: number) => void;
    // saveStoreSetup: (data: any) => void;
}

export interface IOnboardingData {
    storeDetails?: IStoreDetailsDTO;
    productsCategories?: IProductsCategoriesDTO;
    paymentOption?: IPaymentOptionDTO;
    acceptTerms?: ITermsAndConditionsDTO;
}

export interface StoreSetupContextProviderProps {
    children: ReactNode;
}

export interface IProductsCategoriesDTO {
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

export interface IBank {
    code: string;
    id: string;
    logo: string;
    name: string;
    slug: string;
    ussd: string;
}

export interface IBankDetails {
    id: string;
    bank: IBank;
    account_number: string;
    account_name: string;
}

export interface IPaymentOptionDTO {
    accountNumber: string;
    bankId: string;
    beneficiaryName: string;
}

export type PaymentOptionFormProps = {
    banks: IBank[];
    defaultValues: IPaymentOptionDTO;
    variant?: string;
    submitButtonText?: string;
    cancelButtonText?: string;
    showNote?: boolean;
};

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
