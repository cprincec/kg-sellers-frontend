import { SellersHubLogo } from "@/components/shared/logos";
import Menu from "./Menu";

const SideBarContent = () => {
    return (
        <div className="flex flex-col gap-y-6">
            {/* Logo */}
            <div className="px-3 py-2">
                <SellersHubLogo className="w-[85px]" className2="w-[100px]" />
            </div>

            {/* Menu Items */}
            <Menu />
        </div>
    );
};
export default SideBarContent;
