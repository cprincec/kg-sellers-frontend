import { ICompletedSales, OrderStatusTypes } from "../interfaces/interface";

export const getOrderStatusType = (status: OrderStatusTypes) => {
    const styles: Record<OrderStatusTypes, string> = {
        NEW: "bg-kaiglo_success-base text-white",
        CANCELLED_ORDER: "bg-kaiglo_critical-50 text-kaiglo_critical-600 border border-kaiglo_critical-200",
        CANCELLED_PAYMENT: "bg-kaiglo_critical-50 text-kaiglo_critical-600 border border-kaiglo_critical-200",
        PROCESSING: "bg-kaiglo_warning-25 text-kaiglo_warning-500 border border-kaiglo_warning-200",
        SHIPPED: "bg-kaiglo_info-25 text-kaiglo_info-base border border-kaiglo_info-base",
        DELIVERED: "bg-kaiglo_success-50 text-kaiglo_success-600",
        ACCEPTED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        AWAITING_PICK_UP: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        CARD_PAYMENT_FAILED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        CONFIRMED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        DECLINED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        DROPPED_AT_CHECKOUT: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        FAILED_PAYMENT_CONFIRMATION: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        FULFILLED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        NEW_WITH_ISSUE: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        PENDING: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        PENDING_PAYMENT: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        RETURNED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
        USSD_PAYMENT_FAILED: "bg-transparent text-kaiglo_grey-base border border-kaiglo_grey-base",
    };

    return styles[status] || "bg-transparent text-kaiglo_grey-base border-kaiglo_grey-base";
};

export const generateSalesSummaryData = (completedSales: ICompletedSales, processingSales: string) => {
    return [
        {
            title: "COMPLETED SALES",
            body: completedSales.currentWeekSales,
            tip: "Completed sales",
            comparism: {
                value: `${completedSales.percentageChange}%`,
                isPositive: completedSales.trend === "UP" ? true : false,
                date: "last week",
            },
            isCurrency: true,
        },

        {
            title: "PROCESSING SALES",
            body: processingSales,
            tip: "Processing sales are orders that have been placed by a user",
            isCurrency: true,
        },
    ];
};
