"use client";

import { useState } from "react";
import { MenuIcon, NotificationIcon, ProfileIcon } from "./sidebar-icons";
import SideBarMobile from "./SideBarMobile";

const Header = ({ heading, description }: { heading: string; description: string }) => {
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 flex justify-between p-4 border-b border-kaiglo_grey-200 ">
            <div className="flex gap-2 items-center">
                <SideBarMobile showModal={showSideBar} setShowModal={setShowSideBar} />

                <div
                    className="md:hidden mt-0.5"
                    onClick={() => {
                        setShowSideBar(true);
                    }}
                >
                    <MenuIcon />
                </div>
                <div>
                    <h1 className="font-medium text-lg md:text-2xl capitalize">{heading}</h1>
                    <p className="hidden md:block">{description}</p>
                </div>
            </div>

            {/* Notifications and Profile buttons */}
            <div className="flex items-center gap-3">
                <NotificationIcon className="w-4 md:w-5 h-4 md:h-5 " />
                <ProfileIcon />
            </div>
        </header>
    );
};

export default Header;
