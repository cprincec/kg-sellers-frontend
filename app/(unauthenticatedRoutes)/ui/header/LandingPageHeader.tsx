"use client";

import { Button } from "@/components/ui/button";
import { IconLogoYellow, IconMenu } from "@/public/icons/icons";
import Image from "next/image";
import Link from "next/link";
import LandingSideBarMobile from "../SideBarMobile";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

const LandingPageHeader = () => {
    const [showSideBar, setShowSideBar] = useState<boolean>(false);
    const pathname = usePathname();

    // Automatically close the sidebar on route change
    useEffect(() => {
        setShowSideBar(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 lg:px-0 py-[9px] md:py-4 lg:py-6 ">
                {/* Logo starts */}
                <Link href={"/"}>
                    <Image
                        src={IconLogoYellow}
                        alt="kaiglo logo"
                        className="w-[160px] lg:w-[218px] h-[28px] lg:h-[37px]"
                    />
                </Link>
                {/* Logo ends */}

                {/* nav items starts */}
                <NavLinks />
                {/* nav items ends */}

                {/* Menu icon starts */}
                <Button
                    type="button"
                    variant={"outline"}
                    className="md:hidden p-1"
                    onClick={() => setShowSideBar(true)}
                >
                    <Image src={IconMenu} alt="Menu icon" className="w-6 h6" />
                </Button>
                {showSideBar && (
                    <LandingSideBarMobile showModal={showSideBar} setShowModal={setShowSideBar} />
                )}
                {/* Menu icon ends */}
            </div>
        </header>
    );
};

export default LandingPageHeader;
