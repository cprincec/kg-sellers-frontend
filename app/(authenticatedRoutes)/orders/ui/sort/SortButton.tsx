"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SortDropDown from "./SortDropDown";
import Image from "next/image";
import { IconSortDesc } from "@/public/icons/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const SortButton = ({ alignDropDown = "start" }: { alignDropDown?: "start" | "center" | "end" }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const handleSort = (sortBy: string, sortRange: string) => {
        // Close the dropdown
        setShowDropDown(false);

        // Prevent sorting if the items are already sorted by user preference
        if (searchParams.get("sort-by") === sortBy && searchParams.get("sort-range") === sortRange) {
            return;
        }

        // Add sort options to url
        const params = new URLSearchParams(searchParams);
        if (sortRange && sortBy) {
            params.set("sort-by", sortBy);
            params.set("sort-range", sortRange);
        } else {
            params.delete("sort-by");
            params.delete("sort-range");
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <Popover open={showDropDown} onOpenChange={setShowDropDown}>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <div className="relative w-5 h-5">
                        <Image src={IconSortDesc} alt="sort" sizes="100%" fill />
                    </div>
                    <span className="hidden lg:block text-kaiglo_grey-500 text-base font-normal">Sort</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align={alignDropDown}
                className="w-[160px] p-0 shadow-[0px_2px_12px_0px_#00000014] "
            >
                <SortDropDown handleSort={handleSort} />
            </PopoverContent>
        </Popover>
    );
};
export default SortButton;
