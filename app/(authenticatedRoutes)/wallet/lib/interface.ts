export interface IWalletDTO {
    orderId: string;
    date: string;
    amount: string;
    status: string;
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

export interface PayoutDetailsProps {
    payout: IPayoutDTO;
    showPayoutDetail: boolean;
    setShowPayoutDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPayoutThresholdFormDTO {
    payoutThresholdAmount: string;
}

export interface FormNavButtonsProps {
    cancelButtonText?: string;
    submitButtonText?: string;
    cancelFunc: () => void;
    className?: string;
}
