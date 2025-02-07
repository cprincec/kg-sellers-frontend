import { SellersHubLogo } from "@/components/shared/logos";
import { BoxIcon, HomeIcon, MoneyExchangeIcon, SettingsIcon, TagIcon, WalletIcon } from "./sidebar-icons";
import Link from "next/link";

const SideBarContent = () => {
    return (
        <div className="flex flex-col gap-y-6">
            {/* Logo */}
            <div className="px-3 py-2">
                <SellersHubLogo className="w-[90px]" className2="w-[100px]" />
            </div>

            {/* Menu Items */}
            <ul className="grid gap-y-3">
                {/* dashboard */}
                <li className="group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium">
                    <Link href={"/dashboard"} className="flex gap-3 items-center">
                        <HomeIcon className="group-hover:stroke-white" /> DashBoard
                    </Link>
                </li>

                {/* products */}
                <li className="group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium">
                    <Link href={"/products"} className="flex gap-3 items-center">
                        <BoxIcon className="group-hover:stroke-white" /> Products
                    </Link>
                </li>

                {/* Orders */}
                <li className="group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium">
                    <Link href={"/orders"} className="flex gap-3 items-center">
                        <TagIcon className="group-hover:fill-white" /> Orders
                    </Link>
                </li>

                {/* Transactions */}
                <li className="group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium">
                    <Link href={"/transactions"} className="flex gap-3 items-center">
                        <MoneyExchangeIcon className="group-hover:stroke-white" /> Transactions
                    </Link>
                </li>

                {/* Wallet */}
                <li className="group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium">
                    <Link href={"/wallet"} className="flex gap-3 items-center">
                        <WalletIcon className="group-hover:stroke-white" /> Wallet
                    </Link>
                </li>

                {/* Settings */}
                <li className="group px-3 py-2.5 rounded-xl text-kaiglo_grey-700 text-base hover:bg-kaiglo_success-base hover:text-white hover:font-medium">
                    <Link href={"/settings"} className="flex gap-3 items-center">
                        <SettingsIcon className="group-hover:stroke-white" /> Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default SideBarContent;
