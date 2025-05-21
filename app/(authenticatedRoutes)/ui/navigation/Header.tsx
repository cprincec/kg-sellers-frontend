"use client";

import { IconMenu, IconNotification } from "@/public/icons/icons";

import Image from "next/image";
import { ProfileIcon } from "./sidebar-icons";
import SideBarMobile from "./SideBarMobile";
import { usePathname } from "next/navigation";
import { getHeaderTitleAndDescription } from "../../lib/utils";
import { Button } from "@/components/ui/button";
import Notification from "../Notification";
import { useModalContext } from "@/app/contexts/modalContext";

const Header = () => {
    const { setShowModal, setModalContent } = useModalContext();
    const pathname = usePathname();

    // only show header in primary routes
    if (pathname.split("/").length > 2) return null;

    const { title, description } = getHeaderTitleAndDescription(pathname.replace("/", "")); // remove the leading "/"

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 flex justify-between p-4 border border-kaiglo_grey-200">
            <div className="flex gap-2 items-center">
                <div
                    className="md:hidden mt-0.5"
                    onClick={() => {
                        setModalContent(<SideBarMobile />);
                        setShowModal(true);
                    }}
                >
                    <Image src={IconMenu} alt="menu" className="w-6 h-6 " />
                </div>
                <div>
                    <h1 className="font-medium text-lg md:text-2xl capitalize">{title}</h1>
                    <p className="hidden md:block">{description}</p>
                </div>
            </div>

            {/* Notifications and Profile buttons */}
            <div className="flex items-center gap-3">
                <Button
                    variant={"ghost"}
                    className="bg-transparent"
                    onClick={() => {
                        setModalContent(<Notification />);
                        setShowModal(true);
                    }}
                >
                    <Image src={IconNotification} alt="notification" className="w-4 md:w-5 h-4 md:h-5 " />
                </Button>

                <ProfileIcon />
            </div>
        </header>
    );
};

export default Header;
