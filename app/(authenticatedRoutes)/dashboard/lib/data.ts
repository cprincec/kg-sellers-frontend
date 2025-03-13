"use client";
import { ImageProduct1, ImageProduct2 } from "@/public/images/images";
import { NavLink } from "./interface";
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

export const productsList = [
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
