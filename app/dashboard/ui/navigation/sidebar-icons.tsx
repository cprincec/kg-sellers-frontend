"use client";

import { IconCog, IconHelpCenter, IconLogout } from "@/public/icons/icons";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";

// export const HomeIcon = ({ className }: IconProps) => {
//     return <Image src={IconHome} alt="home" className={`stroke-[#344054] ${className}`} />;
// };

// export const BoxIcon = ({ className }: IconProps) => {
//     return <Image src={IconBox} alt="box" className={`stroke-[#344054] ${className}`} />;
// };

// export const TagIcon = ({ className }: IconProps) => {
//     return <Image src={IconTag} alt="tag" className={`fill-[#344054] ${className}`} />;
// };

// export const TransactionIcon = ({ className }: IconProps) => {
//     return <Image src={IconTransaction} alt="money-exchange" className={`stroke-[#344054] ${className}`} />;
// };

// export const WalletIcon = ({ className }: IconProps) => {
//     return <Image src={IconWallet} alt="wallet" className={`stroke-[#344054] ${className}`} />;
// };

// export const SettingsIcon = ({ className }: IconProps) => {
//     return <Image src={IconCog} alt="settings" className={`stroke-[#344054] ${className}`} />;
// };

// export const NotificationIcon = ({ className }: IconProps) => {
//     return <Image src={IconNotification} alt="notification" className={className} />;
// };

// export const MenuIcon = ({ className }: IconProps) => {
//     return <Image src={IconMenu} alt="menu" className={className} />;
// };

export const ProfileIcon = () => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropDown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                type="button"
                variant="ghost"
                onClick={() => setShowDropDown((prev) => !prev)}
                className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex justify-center items-center rounded-full lg:text-kaiglo_critical-700 bg-[#D0F5FC] lg:bg-kaiglo_attention-100 shadow-[0px_1px_2px_0px_#E4FBFF]"
            >
                <strong>IU</strong>
            </Button>

            {showDropDown && (
                <div
                    className={clsx(
                        "z-20 absolute top-10 md:top-14 right-0 min-w-[250px] grid bg-white border border-kaiglo_grey-200 rounded-2xl shadow-[0px_8px_24px_0px_#00000014] transition-all duration-300",
                        "animate-slideDownFade"
                    )}
                >
                    <div className="flex gap-2 items-center px-2 py-3 border-b border-kaiglo_grey-200">
                        <div className="w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full lg:text-kaiglo_critical-700 bg-[#D0F5FC] lg:bg-kaiglo_attention-100 shadow-[0px_1px_2px_0px_#E4FBFF]">
                            <strong>IU</strong>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">Isaac Udom</h3>
                            <p className="text-sm">Samson@gmail.com</p>
                        </div>
                    </div>
                    <div className="grid gap-2 px-2 py-3 font-medium text-sm text-kaiglo_grey-700">
                        <div className="flex gap-2 items-center justify-start p-2 rounded-lg cursor-pointer hover:bg-kaiglo_grey-100">
                            <Image src={IconCog} alt="settings" className="w-5 h-5" /> Settings
                        </div>
                        <div className="flex gap-2 items-center p-2 rounded-lg cursor-pointer hover:bg-kaiglo_grey-100">
                            <Image src={IconHelpCenter} alt="help-center" className="w-5 h-5" /> Help Center
                        </div>
                        <div className="flex gap-2 items-center justify-start p-2 rounded-lg cursor-pointer  hover:bg-kaiglo_grey-100 text-kaiglo_critical-base">
                            <Image src={IconLogout} alt="logout" className="w-5 h-5" /> Log Out
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
