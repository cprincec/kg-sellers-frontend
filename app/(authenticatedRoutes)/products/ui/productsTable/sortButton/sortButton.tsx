"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconSortDesc } from "@/public/icons/icons";
import Image from "next/image";
import SortButtonDropDown from "./sortButtonDropDown";
import { useState } from "react";
import { ISortOption } from "../../../lib/interfaces/interface";

const SortButton2 = ({
    sortOptions,
    alignDropDown = "start",
    disabled,
}: {
    sortOptions: ISortOption[];
    alignDropDown?: "start" | "center" | "end";
    disabled?: boolean;
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    return (
        <Popover open={showDropDown} onOpenChange={setShowDropDown}>
            <PopoverTrigger asChild disabled={disabled}>
                <Button variant="outline">
                    <div className="relative w-5 h-5">
                        <Image src={IconSortDesc} alt="sort" sizes="100%" fill />
                    </div>
                    <span className="hidden lg:block text-kaiglo_grey-500 text-base font-normal">
                        Sort by
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align={alignDropDown}
                className="w-[160px] md:w-[200px] p-0 shadow-[0px_2px_12px_0px_#00000014] "
            >
                <SortButtonDropDown sortOptions={sortOptions} setShowDropDown={setShowDropDown} />
            </PopoverContent>
        </Popover>
    );
};

export default SortButton2;
