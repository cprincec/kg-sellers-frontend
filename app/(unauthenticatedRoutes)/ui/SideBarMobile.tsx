"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import { homeNavLinks } from "../../lib/data";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useModalContext } from "@/app/contexts/modalContext";
import { LoginAndRegisterButtons } from "./header/buttons";
import ProfileIconWithDropDown from "@/app/(authenticatedRoutes)/ui/navigation/ProfileIconWithDropDown";
import { useSession } from "next-auth/react";

const LandingSideBarMobile = () => {
    const pathname = usePathname();
    const session = useSession();
    const { setShowModal } = useModalContext();

    useEffect(() => {
        setShowModal(false);
    }, [pathname, setShowModal]);

    return (
        <DialogContent
            className="w-[80%] ml-0 px-4 py-10 sm:rounded-none outline-none"
            styleXBtn={true}
            animateSlide={true}
        >
            <DialogHeader className="gap-8">
                <DialogTitle className="w-0 h-0 opacity-0 hidden" />
                <DialogDescription />
                <div className="grid gap-4 px-3">
                    <div className="grid gap-2">
                        {homeNavLinks.map((link) => {
                            const { name, href } = link;
                            return (
                                <Link
                                    key={name}
                                    href={href}
                                    className="text-kaiglo_grey-900 text-lg font-normal capitalize"
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>

                    {session.status === "authenticated" ? (
                        <div>
                            <ProfileIconWithDropDown contentClassName="ml-4" />
                        </div>
                    ) : (
                        <LoginAndRegisterButtons status={session.status} />
                    )}
                </div>
            </DialogHeader>
        </DialogContent>
    );
};

export default LandingSideBarMobile;
