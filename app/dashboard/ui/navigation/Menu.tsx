"use client";

import { IconBox, IconBoxActive, IconCog, IconCogActive, IconHome, IconHomeActive, IconTag, IconTagActive, IconTransaction, IconTransactionActive, IconWallet, IconWalletActive } from "@/public/icons/icons";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface NavLink {
    name: string;
    href: string;
    icon: string;
    activeIcon: string;
    active: boolean;
}

const Menu = () => {
    const pathname = usePathname();
    const links: NavLink[] = [
        { name: "Dashboard", href: "/dashboard", icon: IconHome, activeIcon: IconHomeActive, active: pathname === "/dashboard" },
        { name: "Products", href: "/products", icon: IconBox, activeIcon: IconBoxActive, active: pathname === "/products" },
        { name: "Orders", href: "/dashboard/orders", icon: IconTag, activeIcon: IconTagActive, active: pathname === "/dashboard/orders" },
        { name: "Transactions", href: "/transactions", icon: IconTransaction, activeIcon: IconTransactionActive, active: pathname === "/transactions" },
        { name: "Wallet", href: "/wallet", icon: IconWallet, activeIcon: IconWalletActive, active: pathname === "/wallet" },
        { name: "Settings", href: "/settings", icon: IconCog, activeIcon: IconCogActive, active: pathname === "/settings" },
    ];

    return (
        <ul className="grid gap-y-3">
            {links.map((link) => {
                const iconSrc = link.active ? link.activeIcon : link.icon;

                return (
                    <li
                        key={link.name}
                        className={clsx(
                            "group rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium",
                            link.active && "bg-kaiglo_success-base text-white font-medium"
                        )}
                    >
                        <Link href={link.href} className="px-3 py-2 flex gap-3 items-center">
                            <div className="w-5 h-5">
                                <Image
                                    src={iconSrc}
                                    alt={link.name}
                                    className="font-light w-5 h-5 group-hover:hidden transition-opacity duration-200 ease-in-out"
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src={link.activeIcon}
                                    alt={link.name}
                                    className="font-light w-5 h-5 hidden group-hover:block transition-opacity duration-200 ease-in-out"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
