import { SellersHubLogo } from "@/components/shared/logos";
import Menu from "./Menu";
import Link from "next/link";

const SideBarContent = () => {
    return (
        <div className="flex flex-col gap-y-6">
            {/* Logo */}
            <Link href={"/"} className="px-3 lg:px-1 py-2 w-fit">
                <SellersHubLogo className="w-[85px] lg:w-[80px]" className2="w-[100px] lg:w-[86px]" />
            </Link>

            {/* Menu Items */}
            <Menu />
        </div>
    );
};
export default SideBarContent;
