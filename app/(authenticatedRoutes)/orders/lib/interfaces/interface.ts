import { IStoreInfo } from "@/app/(auth)/lib/interfaces/interface";
import { UserResponse } from "@/app/(auth)/lib/interfaces/response.interface";
import { IProductPriceDetail } from "@/app/(authenticatedRoutes)/products/lib/interfaces/interface";

export interface ICompletedSales {
    currentWeekSales: string;
    lastWeekSales: string;
    percentageChange: number;
    trend: string;
}

export interface ISalesSummary {
    title: string;
    body: string | number;
    tip: string;
    comparism?: {
        value: string;
        isPositive: boolean;
        date: string;
    };
    isCurrency: boolean;
}

export interface Issue {
    createdDate: string;
    handler: UserResponse;
    id: string;
    issueAdditionMessage: string;
    issueSubject: string;
    resolutionMessage: string;
    resolutionTime: string;
    resolvedBy: UserResponse;
    status: string;
    store: IStoreInfo;
    transactionHistory: TransactionHistory;
    transactionRef: string;
}

interface Note {
    createdDate: string;
    id: string;
    noteText: string;
    updateDate: string;
    username: string;
}

export interface IOrderItem {
    category: string;
    color: string;
    fifthSubCategory: string;
    fourthSubCategory: string;
    price: number;
    productId: string;
    productName: string;
    quantity: string;
    secSubCategory: string;
    shippingCost: string;
    size: string;
    sku: string;
    subCategory: string;
    thirdSubCategory: string;
    totalAmount: number;
    url: string;
}

interface TransactionHistory {
    address: string;
    assignedTo: string;
    buyer: UserResponse;
    buyerEmail: string;
    buyerName: string;
    createdDate: string;
    gender: "FEMALE" | "MALE" | "OTHER";
    id: string;
    notes: Note[];
    orderItem: IOrderItem;
    orderNumber: string;
    orderStatus: "ACCEPTED" | "PENDING" | "REJECTED";
    paymentOption: string;
    phoneNumber: string;
    platform: string;
    productType: string;
    resolved: boolean;
    resolvedNote: string;
    seller: UserResponse;
    sellerName: string;
    state: string;
    token: string;
    txnReference: string;
    updatedDate: string;
}

export interface IOrder {
    address: string;
    appliedCoupon: string;
    appliedCouponAmount: string;
    buyer: string;
    createdDate: string;
    email: string;
    id: string;
    issue: Issue;
    orderItem: IOrderItem;
    orderNumber: string;
    orderRateStatus: boolean;
    orderStatus: OrderStatusTypes;
    paymentOption: string;
    platform: string;
    productPriceDetail: IProductPriceDetail;
    productType: string;
    shippingCost: string;
    storeId: string;
    storeName: string;
    txnReference: string;
    updatedDate: string;
    userId: string;
}

export type OrderStatusTypes =
    | "ACCEPTED"
    | "AWAITING_PICK_UP"
    | "CANCELLED_ORDER"
    | "CANCELLED_PAYMENT"
    | "CARD_PAYMENT_FAILED"
    | "CONFIRMED"
    | "DECLINED"
    | "DELIVERED"
    | "DROPPED_AT_CHECKOUT"
    | "FAILED_PAYMENT_CONFIRMATION"
    | "FULFILLED"
    | "NEW"
    | "NEW_WITH_ISSUE"
    | "PENDING"
    | "PENDING_PAYMENT"
    | "PROCESSING"
    | "RETURNED"
    | "SHIPPED"
    | "USSD_PAYMENT_FAILED";
