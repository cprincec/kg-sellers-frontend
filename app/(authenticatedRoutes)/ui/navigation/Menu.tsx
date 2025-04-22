"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { links, paths } from "../../dashboard/lib/data";
import { NavLink } from "../../dashboard/lib/interface";

const Menu = () => {
    const pathname = usePathname();
    const navLinks = links.map((link: NavLink, index) => ({
        ...link,
        active: pathname.startsWith(paths[index]),
    }));
    return (
        <ul className="grid gap-y-3 max-h-[calc(100vh-150px)] overflow-auto">
            {navLinks.map((link) => {
                const iconSrc = link.active ? link.activeIcon : link.icon;

                return (
                    <li
                        key={link.name}
                        className={clsx(
                            "group rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base/80 hover:text-white hover:font-medium",
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
