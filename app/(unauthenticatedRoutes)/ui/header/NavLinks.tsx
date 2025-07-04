import ProfileIconWithDropDown from "@/app/(authenticatedRoutes)/ui/navigation/ProfileIconWithDropDown";
import { homeNavLinks } from "@/app/lib/data";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { LoginAndRegisterButtons } from "./buttons";

const NavLinks = () => {
    const session = useSession();

    return (
        <div className="hidden md:flex gap-4 lg:gap-6 justify-end items-center">
            <div className="flex gap-4 lg:gap-4">
                {homeNavLinks.map((link) => {
                    const { name, href } = link;
                    return (
                        <Link
                            key={name}
                            href={href}
                            className="text-kaiglo_grey-900 text-base font-medium capitalize"
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>

            {session.status === "authenticated" ? (
                <ProfileIconWithDropDown />
            ) : (
                <LoginAndRegisterButtons status={session.status} />
            )}
        </div>
    );
};
export default NavLinks;
