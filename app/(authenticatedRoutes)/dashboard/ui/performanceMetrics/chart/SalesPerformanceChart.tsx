"use client";
import clsx from "clsx";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomTootip";
import { salesPerformanceChartData } from "../../../lib/data";

const SalesPerformanceChart = ({ className }: { className?: string }) => {
    const data = salesPerformanceChartData;
    return (
        <div className={clsx("grid gap-6 lg:gap-10", className && className)}>
            <div className="hidden lg:flex items-center gap-2 justify-end">
                <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-kaiglo_success-200 rounded-sm"></span>
                    <p className="text-sm text-kaiglo_grey-base">Last week</p>
                </div>

                <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-kaiglo_success-700 rounded-sm"></span>
                    <p className="text-sm text-kaiglo_grey-base">This week</p>
                </div>
            </div>

            <ResponsiveContainer width="100%" aspect={2} className="lg:pt-6">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: -15,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="5" vertical={false} stroke="#EAECF0" />
                    <XAxis
                        dataKey="day"
                        stroke="#EAECF0"
                        tick={{
                            stroke: "#667185",
                            style: {
                                fontWeight: 100,
                                fontSize: "12px",
                            },
                            dy: 8,
                        }}
                        tickLine={false}
                        className=""
                    />
                    <YAxis
                        stroke=""
                        tick={{
                            stroke: "#667185",
                            style: {
                                fontWeight: 100,
                                fontSize: "12px",
                            },
                        }}
                        tickFormatter={(value) => (value === 0 ? "0" : `${(value / 1000).toFixed(0)}k`)}
                        domain={["auto", 400000]}
                        // ticks={[0, 50000, 100000, 200000, 300000, 400000]}
                        className=""
                    />
                    {/* @ts-expect-error CustomTooltip */}
                    <Tooltip content={<CustomTooltip />} />
                    <Bar radius={[2, 2, 0, 0]} dataKey="thisWeek" fill="#027A48" />
                    <Bar radius={[2, 2, 0, 0]} dataKey="lastWeek" fill="#A6F4C5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesPerformanceChart;
