/*********** TRANSACTION DTO **********************/
export interface ITransactionDTO {
    orderId: string;
    quantity: number;
    subTotal: string;
    rate: string;
    commission: string;
    status: string;
    date: string;
    payoutAmount: string;
}

export interface TransactionDetailProps {
    transaction: ITransactionDTO;
}
