"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconFilter } from "@/public/icons/icons";
import Image from "next/image";
import { useState } from "react";
import { IFilterOption } from "../../../lib/interfaces/interface";
import FilterButtonDropDown from "./FIlterButtonDropDown";

const FilterButton = ({
    filterOptions,
    alignDropDown = "start",
}: {
    filterOptions: IFilterOption[];
    alignDropDown?: "start" | "center" | "end";
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    return (
        <Popover open={showDropDown} onOpenChange={setShowDropDown}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="py-3">
                    <div className="relative w-5 h-5">
                        <Image src={IconFilter} alt="filter" sizes="100%" fill />
                    </div>
                    <span className="hidden lg:block text-kaiglo_grey-500 text-base font-normal">
                        Filter by
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align={alignDropDown}
                className="w-[250px] md:w-[350px] bg-white p-0 shadow-[0px_2px_12px_0px_#00000014] "
            >
                {/* <FilterButtonDropDown filterOptions={filterOptions} setShowDropDown={setShowDropDown} /> */}
                <FilterButtonDropDown filterOptions={filterOptions} />
            </PopoverContent>
        </Popover>
    );
};

export default FilterButton;
