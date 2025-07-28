import { IOrderItem } from "../../orders/lib/interfaces/interface";
import { IPageable, ISort } from "../../products/lib/interfaces/interface";

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

export interface ITransaction {
    amount: number;
    buyerEmail: string;
    channel: string;
    commissionAmount: string;
    commissionPercentage: number;
    orderItem: IOrderItem;
    productName: string;
    productUrl: string;
    purpose: string;
    reference: string;
    sellerId: string;
    status: string;
    subTotal: number;
    tax: number;
    to: string;
    tranType: string;
}

export interface IGetAllTransactionsResponse {
    content: ITransaction[];
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
