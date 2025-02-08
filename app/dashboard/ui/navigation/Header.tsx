import { useState } from "react";
import { MenuIcon, NotificationIcon } from "./sidebar-icons";
import SideBarMobile from "./SideBarMobile";

const Header = () => {
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/40 flex justify-between p-4 border-b border-kaiglo_grey-200 ">
            {/* Navigation Bar */}
            <SideBarMobile showModal={showSideBar} setShowModal={setShowSideBar} />

            <div className="flex gap-2 items-center">
                <div className="lg:hidden" onClick={() => setShowSideBar(true)}>
                    <MenuIcon />
                </div>
                <h1 className="font-medium text-lg">Overview</h1>
            </div>

            <div className="flex items-center gap-3">
                <NotificationIcon />
                <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#D0F5FC] shadow-[0px_1px_2px_0px_#E4FBFF]">
                    <strong>IU</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;
