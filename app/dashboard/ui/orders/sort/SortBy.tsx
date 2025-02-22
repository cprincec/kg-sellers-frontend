"use client";

import { Button } from "@/components/ui/button";
import { SortDescIcon } from "../icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SortDropDown from "./SortDropDown";

const SortBy = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const sortDropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
            setShowDropDown(false);
        }
    };

    const handleSort = (sortBy: string, sortRange: string) => {
        // Close the dropdown
        setShowDropDown(false);

        // Prevent prevent sorting if the items are already sorted by user preference
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
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // Close sort dropdown when user click outside of it
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortDropdownRef} className="relative">
            <Button
                variant={"outline"}
                onClick={() => setShowDropDown((prev) => !prev)}
                className="flex items-center gap-2 p-3 bg-white hover:bg-kaiglo_grey-200 cursor-pointer"
            >
                <SortDescIcon className="w-8 h-8" />
                <span className="hidden md:block text-kaiglo_grey-500 text-base font-normal">Sort</span>
            </Button>

            {/* Dropdown */}
            <SortDropDown showDropDown={showDropDown} handleSort={handleSort} />
        </div>
    );
};
export default SortBy;
