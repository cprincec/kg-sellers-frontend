"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SalesPerformanceChart = () => {
    const months = [
        { short: "Jan", long: "January" },
        { short: "Feb", long: "February" },
        { short: "Mar", long: "March" },
        { short: "Apr", long: "April" },
        { short: "May", long: "May" },
        { short: "Jun", long: "June" },
        { short: "Jul", long: "July" },
        { short: "Aug", long: "August" },
        { short: "Sep", long: "September" },
        { short: "Oct", long: "October" },
        { short: "Nov", long: "November" },
        { short: "Dec", long: "December" },
    ];

    const currenMonthAndYear = months[new Date().getMonth()].short + " " + new Date().getFullYear();

    const CustomTooltip = ({ payload, active }: { payload: [{ value: number }]; active: boolean }) => {
        if (active) {
            return (
                <div className="transform-none">
                    <div className="relative bg-white rounded-lg p-2 grid gap-1.5">
                        <h3 className="font-medium text-xs text-kaiglo_grey-900">{currenMonthAndYear}</h3>
                        {payload.map((entry, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span
                                        className={`w-2 h-2 ${
                                            index % 2 === 0
                                                ? "bg-kaiglo_success-700"
                                                : "bg-kaiglo_success-200"
                                        } rounded-sm`}
                                    ></span>
                                    <p className="text-xs text-kaiglo_grey-500">
                                        {index % 2 === 0 ? "This week" : "Last week"}
                                    </p>
                                </div>
                                <span className="text-xs font-medium">₦{entry.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-white rotate-45"></div>
                </div>
            );
        }
    };

    const data = [
        {
            day: "Mon",
            thisWeek: 80000,
            lastWeek: 40000,
            amount: 400000,
        },
        {
            day: "Tue",
            thisWeek: 80000,
            lastWeek: 130000,
            amount: 400000,
        },
        {
            day: "Wed",
            thisWeek: 80000,
            lastWeek: 50000,
            amount: 400000,
        },
        {
            day: "Thu",
            thisWeek: 150000,
            lastWeek: 90000,
            amount: 400000,
        },
        {
            day: "Fri",
            thisWeek: 230000,
            lastWeek: 80000,
            amount: 400000,
        },
        {
            day: "Sat",
            thisWeek: 50000,
            lastWeek: 180000,
            amount: 400000,
        },
        {
            day: "Sun",
            thisWeek: 100000,
            lastWeek: 240000,
            amount: 400000,
        },
    ];
    return (
        <div className="lg:pt-6">
            <ResponsiveContainer width="100%" aspect={2} className="">
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
                            dy: 15,
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
                    <Tooltip content={<CustomTooltip />} />
                    <Bar radius={[2, 2, 0, 0]} dataKey="thisWeek" fill="#027A48" />
                    <Bar radius={[2, 2, 0, 0]} dataKey="lastWeek" fill="#A6F4C5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesPerformanceChart;
