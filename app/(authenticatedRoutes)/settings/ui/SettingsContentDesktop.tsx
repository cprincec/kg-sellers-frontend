"use client";

import StoreDetailsForm from "../../../(auth)/ui/register/storeSetup/storeDetails2/StoreDetailsForm";
import { PaymentOptionForm } from "../../../(auth)/ui/register/storeSetup/paymentOption/PaymentOptionForm";
import StoreVacationForm from "../ui/StoreVacation";
import TermsOfContractForm from "../../../(auth)/ui/register/storeSetup/termsOfContract/TermsOfContractForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "../lib/data";

const SettingsContentDesktop = ({
    activeTab,
    handleChangeActiveTab,
}: {
    activeTab: string;
    handleChangeActiveTab: (value: string) => void;
}) => {
    return (
        <Tabs
            defaultValue={activeTab || "store-information"}
            className="hidden lg:grid p-4 md:py-6 md:px-4 md:max-lg:bg-white"
        >
            {/* TABS */}
            <TabsList className="flex items-center justify-start pt-0 px-0 bg-transparent rounded-none">
                {tabs.map((tab) => {
                    const { label, value } = tab;

                    return (
                        <TabsTrigger
                            key={label + "-tab"}
                            value={value}
                            className="px-4 py-2"
                            onClick={() => handleChangeActiveTab(value)}
                        >
                            {label}
                        </TabsTrigger>
                    );
                })}
            </TabsList>

            {/* Tables */}
            <div className="py-6 lg:px-4">
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
    );
};
export default SettingsContentDesktop;
