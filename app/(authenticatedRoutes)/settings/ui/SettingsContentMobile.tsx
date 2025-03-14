"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { settingsMobileContents, tabs } from "../lib/data";

const SettingsContentMobile = ({
    activeTab,
    handleChangeActiveTab,
}: {
    activeTab: string;
    handleChangeActiveTab: (value: string) => void;
}) => {
    return (
        <div className="grid lg:hidden gap-5 p-4 md:py-6 md:px-4 md:max-lg:bg-white">
            <div>
                <Select
                    onValueChange={(value: string) => handleChangeActiveTab(value)}
                    defaultValue={activeTab}
                >
                    <SelectTrigger className="text-kaiglo_grey-900">
                        <SelectValue className="text-base text-kaiglo_grey-900" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {tabs.map((tab) => {
                                const { label, value } = tab;

                                return (
                                    <SelectItem key={value + "-tab"} value={value}>
                                        {label}
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {settingsMobileContents.map((content) => {
                const id = content.id;
                const Component = content.component;
                const props = content.props;

                if (activeTab === id) return <Component key={id} {...props} />;
                else return null;
            })}
        </div>
    );
};

export default SettingsContentMobile;
