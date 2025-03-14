"use client";

import Header from "../dashboard/ui/navigation/Header";
import AccountSummary from "./ui/AccountSummary";
import { tabs } from "./lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WalletHistoryTableWrapper from "./ui/walletTable/WalletHistoryTableWrapper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PayoutHistoryTableWrapper from "./ui/payoutTable/PayoutHistoryTableWrapper";
import OrderHistoryToolsBar from "../orders/ui/OrderHistoryToolsBar";

const Wallet = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const activeTab = searchParams.get("tab");

    const setActiveTab = (tab: string) => {
        if (!tab) return;

        const params = new URLSearchParams(searchParams);
        params.set("tab", tab);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="pb-4 grid gap-2 md:gap-1 lg:gap-0">
            <Header heading={"Wallet"} description={"Your current transactions activities."} />

            {/* <div className="grid"> */}
            <AccountSummary className=" px-3 md:pl-1 md:pr-1 md:max-lg:p-4 lg:px-0 md:max-lg:bg-white" />
            {/* </div> */}

            <div className="grid gap-4 py-4 lg:py-6">
                <Tabs defaultValue={activeTab || "wallet"} className="grid gap-2 lg:gap-4 px-4">
                    <div className="grid md:grid-cols-2 lg:justify-between lg:items-center gap-2 lg:gap-4 md:border-b border-kaiglo_grey-200">
                        <OrderHistoryToolsBar
                            showSort={false}
                            showAction={false}
                            className="px-0 justify-end border-none"
                        />

                        {/* TABS */}
                        <TabsList className="lg:order-first flex items-center justify-start pt-0 bg-transparent rounded-none">
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.label}
                                    value={tab.value}
                                    className="px-4 py-2"
                                    onClick={() => setActiveTab(tab.value)}
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Tables */}
                    <div className="overflow-x-auto">
                        {/* render the wallet history table by default
                        render the payout table based on active tab  */}
                        {tabs.map((tab) => {
                            if (tab.value === "payout")
                                return (
                                    <TabsContent
                                        key={`${tab.value}`}
                                        value={tab.value}
                                        className="overflow-auto"
                                    >
                                        <PayoutHistoryTableWrapper />
                                    </TabsContent>
                                );
                            else
                                return (
                                    <TabsContent
                                        key={`${tab.value}`}
                                        value={tab.value}
                                        className="overflow-auto"
                                    >
                                        <WalletHistoryTableWrapper />
                                    </TabsContent>
                                );
                        })}
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Wallet;
