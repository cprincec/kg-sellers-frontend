// ============================================================================
// Navigation & UI Component Interfaces
// ============================================================================

import { StaticImageData } from "next/image";

export interface NavLink {
    name: string;
    href: string;
    icon: string;
    activeIcon: string;
    active?: boolean;
}

// ============================================================================
// Perfomance Metrics Interfaces
// ============================================================================

export interface ISalesPerfomanceIntroData {
    amount: string;
    percentage: string;
    date: string;
    isPositive: boolean;
}
export interface ISalesPerformanceChartData {
    day: string;
    thisWeek: number;
    lastWeek: number;
}

export interface IProductPerformance {
    productName: string;
    orderId: string;
    imageUrl: StaticImageData;
    quantitySold: string;
    amount: string;
}

export interface ISalesPerformance {
    currentWeek: IWeekSales;
    lastWeek: IWeekSales;
    percentageChange: number;
    trend: string;
}

interface IWeekSales {
    dailyData: IDailySales[];
    totalSales: number;
    weekStartDate: string;
}

interface IDailySales {
    date: string;
    dayOfWeek: string;
    salesAmount: number;
}

// Weekly Store Performance interface
export interface IStorePerformance {
    avgDailyProductSales: string;
    lastWeekStoreVisitors: string;
    orders: string;
    percentageChange: number;
    productSales: string;
    thisWeekStoreVisitors: string;
    trend: string;
}

// Product Summary
export interface IProductSummary {
    activeInventory: string;
    draftInventory: string;
    pendingInventory: string;
}

// export interface IWeeklyStorePerformance {
//     leastSellingProducts: IProductPerformance[];
//     topSellingProducts: IProductPerformance[];
//     weekEndDate: string;
//     weekStartDate: string;
// }

// interface IProductPerformance {
//     amount: number;
//     productName: string;
//     qty: string;
//     sku: string;
// }
