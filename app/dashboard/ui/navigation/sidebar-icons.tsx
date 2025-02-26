"use client";

import { IconCog, IconHelpCenter, IconLogout } from "@/public/icons/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const ProfileIcon = () => {
    // const [showDropDown, setShowDropDown] = useState<boolean>(false);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant="ghost"
                    className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full lg:text-kaiglo_critical-700 bg-[#D0F5FC] lg:bg-kaiglo_attention-100 shadow-[0px_1px_2px_0px_#E4FBFF]"
                >
                    <strong>IU</strong>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align="end"
                className="min-w-[250px] p-0 bg-white border border-kaiglo_grey-200 shadow-[0px_8px_24px_0px_#00000014] rounded-2xl transition-all duration-300"
            >
                <div className="grid animate-slideDownFade w-full">
                    <div className="flex gap-2 items-center px-2 py-3 border-b border-kaiglo_grey-200">
                        <div className="w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full lg:text-kaiglo_critical-700 bg-[#D0F5FC] lg:bg-kaiglo_attention-100 shadow-[0px_1px_2px_0px_#E4FBFF]">
                            <strong>IU</strong>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">Isaac Udom</h3>
                            <p className="text-sm">Samson@gmail.com</p>
                        </div>
                    </div>
                    <div className="grid gap-2 px-2 py-3 font-medium text-sm text-kaiglo_grey-700">
                        <div className="flex gap-2 items-center justify-start p-2 rounded-lg cursor-pointer hover:bg-kaiglo_grey-100">
                            <Image src={IconCog} alt="settings" className="w-5 h-5" /> Settings
                        </div>
                        <div className="flex gap-2 items-center p-2 rounded-lg cursor-pointer hover:bg-kaiglo_grey-100">
                            <Image src={IconHelpCenter} alt="help-center" className="w-5 h-5" /> Help Center
                        </div>
                        <div className="flex gap-2 items-center justify-start p-2 rounded-lg cursor-pointer  hover:bg-kaiglo_grey-100 text-kaiglo_critical-base">
                            <Image src={IconLogout} alt="logout" className="w-5 h-5" /> Log Out
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
