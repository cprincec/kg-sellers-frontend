"use client";

import { IconCog, IconHelpCenter, IconLogout } from "@/public/icons/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { getProfileInitialsFromFullNameOrEmail } from "../../lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOutButton } from "@/app/(auth)/ui/buttons";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils/utils";

const ProfileIconWithDropDown = ({ contentClassName }: { contentClassName?: string }) => {
    const session = useSession();

    if (session.status === "loading")
        return <Skeleton className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full" />;

    if ((session.status === "authenticated" && !session.data) || !session.data?.user) return null;

    const { fullName, email, pictureUrl } = session.data?.user;

    return (
        <Popover>
            <PopoverTrigger asChild>
                {/* Button Showing initials */}
                <Button
                    type="button"
                    variant="ghost"
                    className="p-0 w-[34px] md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full lg:text-kaiglo_critical-700 bg-[#D0F5FC] lg:bg-kaiglo_attention-100 shadow-[0px_1px_2px_0px_#E4FBFF] uppercase"
                >
                    <ProfileIcon pictureUrl={pictureUrl} email={email} fullName={fullName} />
                </Button>
            </PopoverTrigger>

            <PopoverContent
                align="end"
                className={cn(
                    "min-w-[250px] md:max-w- p-0 bg-white border border-kaiglo_grey-200 shadow-[0px_8px_24px_0px_#00000014] rounded-2xl transition-all duration-300",
                    contentClassName
                )}
            >
                <div className="animate-slideDownFade min-w-0 w-full max-w-full">
                    <div className="flex gap-2 items-center px-2 py-3 border-b border-kaiglo_grey-200">
                        <div className="flex-shrink-0 w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full lg:text-kaiglo_critical-700 bg-[#D0F5FC] lg:bg-kaiglo_attention-100 shadow-[0px_1px_2px_0px_#E4FBFF] uppercase">
                            <ProfileIcon pictureUrl={pictureUrl} email={email} fullName={fullName} />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <h3 className="font-medium text-sm capitalize truncate">{fullName}</h3>
                            <p className="text-sm truncate" title={email}>
                                {email}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-2 px-2 py-3 font-medium text-sm text-kaiglo_grey-700">
                        <Link
                            href={"/settings"}
                            className="flex gap-2 items-center justify-start p-2 rounded-lg cursor-pointer hover:bg-kaiglo_grey-100"
                        >
                            <Image src={IconCog} alt="settings" className="w-5 h-5" /> Settings
                        </Link>
                        <div className="flex gap-2 items-center p-2 rounded-lg cursor-pointer hover:bg-kaiglo_grey-100">
                            <Image src={IconHelpCenter} alt="help-center" className="w-5 h-5" /> Help Center
                        </div>
                        {/* logout button */}
                        <LogOutButton className="flex gap-2 items-center justify-start p-2 rounded-lg cursor-pointer  hover:bg-kaiglo_grey-100 text-kaiglo_critical-base text-base bg-transparent">
                            <Image src={IconLogout} alt="logout" className="w-5 h-5" /> Log Out
                        </LogOutButton>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ProfileIconWithDropDown;

const ProfileIcon = ({
    pictureUrl,
    email,
    fullName,
}: {
    email: string;
    pictureUrl?: string;
    fullName?: string;
}) => {
    if (pictureUrl)
        return (
            <Image
                src={pictureUrl}
                alt={"Profile picture"}
                width={48}
                height={48}
                className="rounded-full object-cover"
            />
        );

    return <strong>{getProfileInitialsFromFullNameOrEmail(email, fullName)}</strong>;
};
