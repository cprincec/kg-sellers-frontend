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

export interface IPerformanceMetricsContext {
    salesPerformance: ISalesPerformance;
    productPerformanceData: IProductPerformance[] | null;
    loading: boolean;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISalesPerformance {
    introData: ISalesPerfomanceIntroData | null;
    chartData: ISalesPerformanceChartData[] | null;
}

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
    amount: number;
}

export interface IProductPerformance {
    productName: string;
    orderId: string;
    imageUrl: StaticImageData;
    quantitySold: string;
    amount: string;
}
