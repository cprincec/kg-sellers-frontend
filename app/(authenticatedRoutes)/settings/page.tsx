"use client";

import { useSearchParams } from "next/navigation";
import { tabs } from "./lib/data";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import SettingsContentMobile from "./ui/SettingsContentMobile";
import { useEffect, useState } from "react";
import SettingsContentDesktop from "./ui/SettingsContentDesktop";

const Settings = () => {
    const { setSearchParams } = useUpdateSearchParams();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get("tab") || tabs[0].value);

    const handleChangeActiveTab = (tab: string) => {
        setSearchParams([{ tab }]);
        setActiveTab(tab);
    };

    useEffect(() => {
        setActiveTab(searchParams.get("tab") || tabs[0].value);
    }, [searchParams]);

    return (
        <div className="grid gap-2 md:gap-1 lg:border lg:border-b-0">
            <SettingsContentMobile activeTab={activeTab} handleChangeActiveTab={handleChangeActiveTab} />
            <SettingsContentDesktop activeTab={activeTab} handleChangeActiveTab={handleChangeActiveTab} />
        </div>
    );
};

export default Settings;
