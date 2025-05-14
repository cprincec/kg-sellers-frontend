"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
    IPerformanceMetricsContext,
    IProductPerformance,
    ISalesPerfomanceIntroData,
    ISalesPerformanceChartData,
} from "../lib/interface";
import { productsList, salesPerformanceChartData } from "../lib/data";

// Create context
const PerformanceMetricsContext = createContext<IPerformanceMetricsContext | undefined>(undefined);

// create context provider
const PerformanceMetricsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [introData, setIntroData] = useState<ISalesPerfomanceIntroData | null>(null);
    const [chartData, setChartData] = useState<ISalesPerformanceChartData[] | null>(null);
    const [productPerformanceData, setProductPerformanceData] = useState<IProductPerformance[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // initialize data
        setIntroData({
            amount: "₦309,000",
            percentage: "1.3%",
            date: "yesterday",
            isPositive: false,
        });

        setChartData([...salesPerformanceChartData]);
        setProductPerformanceData([...productsList]);
        setLoading(false);
    }, []);

    return (
        <PerformanceMetricsContext.Provider
            value={{
                salesPerformance: {
                    introData,
                    chartData,
                },
                productPerformanceData,
                loading,
            }}
        >
            {children}
        </PerformanceMetricsContext.Provider>
    );
};

const usePerformanceMetricsContext = (): IPerformanceMetricsContext => {
    const context = useContext(PerformanceMetricsContext);
    if (!context) {
        throw new Error(
            "usePerformanceMetricsContext must be used within an PPerformanceMetricsContextProvider"
        );
    }
    return context;
};

export { PerformanceMetricsContextProvider, usePerformanceMetricsContext };
