"use client";

import { useSearchParams } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Header from "../dashboard/ui/navigation/Header";
import StoreDetailsForm from "../(auth)/ui/register/storeSetup/StoreDetailsForm";
import { PaymentOptionForm } from "../(auth)/ui/register/storeSetup/PaymentOptionForm";
import StoreVacationForm from "./ui/StoreVacation";
import TermsOfContractForm from "../(auth)/ui/register/storeSetup/TermsOfContractForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "./lib/data";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const Settings = () => {
    const { setSearchParams } = useUpdateSearchParams();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab");

    // const setActiveTab = (tab: string) => {
    //     if (!tab) return;

    //     const params = new URLSearchParams(searchParams);
    //     params.set("tab", tab);
    //     router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    // };

    return (
        <DashboardLayout>
            <div className="grid gap-2 md:gap-1">
                <Header heading={"Settings"} />

                <div className="grid gap-5 px-3 md:py-6 md:px-4 md:max-lg:bg-white">
                    <Tabs defaultValue={activeTab || "store-information"} className="grid gap-2 lg:gap-0">
                        {/* TABS */}
                        <TabsList className="hidden lg:flex items-center justify-start pt-0 px-0 bg-transparent rounded-none">
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.label}
                                    value={tab.value}
                                    className="px-4 py-2"
                                    onClick={() => setSearchParams([{ tab: tab.value }])}
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Tables */}
                        <div className="py-6">
                            <TabsContent value={tabs[0].value} className="overflow-auto">
                                <StoreDetailsForm />
                            </TabsContent>
                            <TabsContent value={tabs[1].value} className="overflow-auto">
                                <StoreVacationForm />
                            </TabsContent>
                            <TabsContent value={tabs[2].value} className="overflow-auto">
                                <PaymentOptionForm showNote={false} />
                            </TabsContent>
                            <TabsContent value={tabs[3].value} className="overflow-auto">
                                <TermsOfContractForm showMainTitle={false} />
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;
