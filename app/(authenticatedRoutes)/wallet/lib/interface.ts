import { IPageable, ISort } from "../../products/lib/interfaces/interface";

export interface IWallet {
    amount: number;
    buyerEmail: string;
    inEscrowDate: string;
    inWalletDate: string;
    orderNumber: string;
    sellerId: string;
    status: string;
}

export interface IGetWalletDataResponse extends IBasePaginatedDataResponse {
    content: IWallet[];
}

export interface IPayoutDTO {
    reference: string;
    date: string;
    amount: string;
    status: string;
    channel: string;
    bank: string;
    name: string;
    accountNumber: string;
    purpose: string;
}

export interface IPayout {
    accountDetails: {
        accountName: string;
        accountNumber: string;
        bankName: string;
    };
    amount: number;
    channel: string;
    createdDate: string;
    date: string;
    id: string;
    purpose: string;
    reference: string;
    status: string;
    storeId: string;
    updateDate: string;
}

export interface IGetPayoutDataResponse extends IBasePaginatedDataResponse {
    content: IPayout[];
}

export interface PayoutDetailsProps {
    payout: IPayout;
}

export interface IPayoutThresholdFormDTO {
    payoutThresholdAmount: number;
}

export interface FormNavButtonsProps {
    cancelButtonText?: string;
    submitButtonText?: string;
    cancelButtonClassName?: string;
    submitButtonClassName?: string;
    submitButtonType?: "button" | "submit" | "reset";
    showSubmitButton?: boolean;
    cancelFunc: () => void;
    submitButtonFunc?: () => void;
    className?: string;
    disabled?: boolean;
}

export interface IAccountSummary {
    active: boolean;
    availableBalance: number;
    createdDate: string;
    id: string;
    pendingBalance: number;
    updateDate: string;
}

export interface IGetAccountSummaryResponse {
    message: string;
    response: IAccountSummary;
}

export interface IBasePaginatedDataResponse {
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: IPageable;
    size: number;
    sort: ISort;
    totalElements: number;
    totalPages: number;
}
