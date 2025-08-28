import {
    IProductSummary,
    ISalesPerformance,
    ISalesPerformanceChartData,
    IStorePerformance,
} from "./interface";

export const generateproductSummaryData = (productSummary: IProductSummary) => {
    return [
        {
            title: "ACTIVE INVENTORY",
            body: productSummary.activeInventory,
            tip: "Active inventory",
        },

        {
            title: "LOW INVENTORY",
            body: productSummary.pendingInventory,
            tip: "Low inventory",
            variant: "warning",
        },
        {
            title: "OUT OF STOCK",
            body: productSummary.draftInventory,
            tip: "Out of stock",
            variant: "error",
        },
    ];
};

export function generateSalesPerformanceChartData(data: ISalesPerformance): ISalesPerformanceChartData[] {
    return data.currentWeek.dailyData.map((day, index) => ({
        day: day.dayOfWeek[0] + day.dayOfWeek.substring(1, 3),
        thisWeek: day.salesAmount,
        lastWeek: data.lastWeek.dailyData[index]?.salesAmount ?? 0,
    }));
}

export const generateStorePerformanceData = (storePerformance: IStorePerformance) => {
    return [
        {
            title: "STORE VISITORS",
            body: storePerformance.thisWeekStoreVisitors,
            comparism: {
                value: `${storePerformance.percentageChange}%`,
                isPositive: storePerformance.trend.toLowerCase() === "up",
                date: "last week",
            },
        },
        {
            title: "ORDERS",
            body: storePerformance.orders,
            isCurrency: false,
        },
        {
            title: "PRODUCT SALES",
            body: storePerformance.productSales,
            isCurrency: true,
        },
        {
            title: "AVG. DAILY PRODUCT SALES",
            body: storePerformance.avgDailyProductSales,
        },
    ];
};
