import { ICompletedSales } from "../interfaces/interface";

export const getOrderStatusType = (status: string) => {
    switch (status.toLowerCase()) {
        case "cancelled":
            return "cancelled";
        case "processing":
            return "processing";
        case "shipped":
            return "shipped";
        case "delivered":
            return "delivered";
        default:
            return "new";
    }
};

export const generateSalesSummaryData = (completedSales: ICompletedSales, processingSales: string) => {
    return [
        {
            title: "COMPLETED SALES",
            body: completedSales.currentWeekSales,
            tip: "Completed sales",
            comparism: {
                value: `${completedSales.percentageChange}%`,
                isPositive: completedSales.percentageChange >= 0,
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
