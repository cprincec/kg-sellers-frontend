import { IProductSummary, ISalesPerformance, ISalesPerformanceChartData } from "./interface";

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
