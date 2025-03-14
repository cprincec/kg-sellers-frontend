"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SideBarModalProps } from "@/app/(auth)/interface";
import Link from "next/link";
import { homeNavLinks } from "../lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LandingSideBarMobile = ({ showModal, setShowModal }: SideBarModalProps) => {
    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent
                className="z-[999] left-0 translate-x-0 h-full w-[80%] ml-0 px-4 py-10 sm:rounded-none outline-none"
                data-testid="sideNav-dialog"
                styleXBtn={true}
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

                        {/* register and login buttons starts */}
                        <div className="grid gap-6">
                            <Link
                                href={"/register"}
                                className={cn(
                                    buttonVariants({ variant: "primary" }),
                                    "text-sm font-medium rounded-full py-4 border border-kaiglo_success-base"
                                )}
                            >
                                START SELLING
                            </Link>
                            <Link
                                href={"/login"}
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "text-sm font-medium py-4 bg-transparent text-kaiglo_grey-900 border-kaiglo_grey-900 rounded-full"
                                )}
                            >
                                LOGIN
                            </Link>
                        </div>
                        {/* register and login buttons ends */}
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default LandingSideBarMobile;
