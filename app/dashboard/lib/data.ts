"use client";

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
