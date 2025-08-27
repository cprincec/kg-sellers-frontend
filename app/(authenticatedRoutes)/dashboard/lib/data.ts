"use client";
import { ImageProduct1, ImageProduct2 } from "@/public/images/landingPage/images";
import { IProductPerformance, ISalesPerformanceChartData, NavLink } from "./interface";
import {
    IconBox,
    IconBoxActive,
    IconCog,
    IconCogActive,
    IconHome,
    IconHomeActive,
    IconTag,
    IconTagActive,
    IconTransaction,
    IconTransactionActive,
    IconWallet,
    IconWalletActive,
} from "@/public/icons/icons";

export const productsList: IProductPerformance[] = [
    {
        productName: "Black Polo T-shirt",
        orderId: "Order ID -KG10001",
        imageUrl: ImageProduct1,
        quantitySold: "15",
        amount: "₦240,000",
    },
    {
        productName: "Black Polo T-shirt",
        orderId: "Order ID -KG10002",
        imageUrl: ImageProduct2,
        quantitySold: "13",
        amount: "₦240,000",
    },
    {
        productName: "Black Polo T-shirt",
        orderId: "Order ID -KG10003",
        imageUrl: ImageProduct1,
        quantitySold: "12",
        amount: "₦240,000",
    },
    {
        productName: "Black Polo T-shirt",
        orderId: "Order ID -KG10004",
        imageUrl: ImageProduct2,
        quantitySold: "10",
        amount: "₦240,000",
    },
    {
        productName: "Black Polo T-shirt",
        orderId: "Order ID -KG10005",
        imageUrl: ImageProduct1,
        quantitySold: "6",
        amount: "₦240,000",
    },
];

export const links: NavLink[] = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: IconHome,
        activeIcon: IconHomeActive,
    },
    {
        name: "Products",
        href: "/products",
        icon: IconBox,
        activeIcon: IconBoxActive,
    },
    {
        name: "Orders",
        href: "/orders",
        icon: IconTag,
        activeIcon: IconTagActive,
    },
    {
        name: "Transactions",
        href: "/transactions",
        icon: IconTransaction,
        activeIcon: IconTransactionActive,
    },
    {
        name: "Wallet",
        href: "/wallet",
        icon: IconWallet,
        activeIcon: IconWalletActive,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: IconCog,
        activeIcon: IconCogActive,
    },
];

export const paths = ["/dashboard", "/products", "/orders", "/transactions", "/wallet", "/settings"];

export const salesPerformanceChartData: ISalesPerformanceChartData[] = [
    {
        day: "Mon",
        thisWeek: 80000,
        lastWeek: 40000,
    },
    {
        day: "Tue",
        thisWeek: 80000,
        lastWeek: 130000,
    },
    {
        day: "Wed",
        thisWeek: 80000,
        lastWeek: 50000,
    },
    {
        day: "Thu",
        thisWeek: 150000,
        lastWeek: 90000,
    },
    {
        day: "Fri",
        thisWeek: 230000,
        lastWeek: 80000,
    },
    {
        day: "Sat",
        thisWeek: 50000,
        lastWeek: 180000,
    },
    {
        day: "Sun",
        thisWeek: 100000,
        lastWeek: 240000,
    },
];
