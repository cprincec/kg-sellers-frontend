"use client";

import Link from "next/link";
import { BoxIcon, HomeIcon, MoneyExchangeIcon, SettingsIcon, TagIcon, WalletIcon } from "./sidebar-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathname = usePathname();

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
        { name: "Products", href: "/products", icon: BoxIcon },
        { name: "Orders", href: "/dashboard/orders", icon: TagIcon },
        { name: "Transactions", href: "/transactions", icon: MoneyExchangeIcon },
        { name: "Wallet", href: "/wallet", icon: WalletIcon },
        { name: "Settings", href: "/settings", icon: SettingsIcon },
    ];

    return (
        <ul className="grid gap-y-3">
            {links.map((link) => {
                const LinkIcon = link.icon;

                console.log(link.href, pathname);
                return (
                    <li
                        key={link.name}
                        className={clsx(
                            "group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium",
                            pathname === link.href && "bg-kaiglo_success-base text-white font-medium"
                        )}
                    >
                        <Link href={link.href} className="flex gap-3 items-center">
                            <LinkIcon
                                className={clsx(
                                    "font-normal",
                                    link.name === "Orders"
                                        ? "group-hover:fill-white"
                                        : "group-hover:stroke-white",
                                    link.href === pathname &&
                                        (link.name === "Orders" ? "fill-white" : "stroke-white")
                                )}
                            />
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
