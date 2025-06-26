"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ISortOption } from "../../../lib/interfaces/interface";
import { Dispatch, SetStateAction } from "react";

const SortButtonDropDown = ({
    sortOptions,
    setShowDropDown,
}: {
    sortOptions: ISortOption[];
    setShowDropDown: Dispatch<SetStateAction<boolean>>;
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSortFunc = (SortCategory: string, SortValue: string) => {
        // Close the dropdown
        setShowDropDown(false);

        if (!SortCategory || !SortValue) return;

        // Prevent Sorting if the items are already Sorted by user preference
        if (
            searchParams.get("sort-category") === SortCategory &&
            searchParams.get("sort-value") === SortValue
        ) {
            return;
        }

        // Add Sort options to url
        const params = new URLSearchParams(searchParams);
        params.set("sort-category", SortCategory);
        params.set("sort-value", SortValue);

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="grid gap-2 py-2 animate-slideDownFade w-full">
            {sortOptions.map((sortOption) => {
                const { category, options } = sortOption;

                return (
                    <div key={category.value}>
                        <h4 className="text-sm text-kaiglo_grey-800 font-medium px-2 py-1 capitalize">
                            {category.label}
                        </h4>
                        <ul>
                            {options.map((option) => (
                                <li key={option.value}>
                                    <Button
                                        type="button"
                                        variant={"ghost"}
                                        onClick={() => handleSortFunc(category.value, option.value)}
                                        className="w-full rounded-none justify-start px-4 py-1 text-sm text-kaiglo_grey-700 bg-white hover:bg-kaiglo_grey-200 font-normal cursor-pointer"
                                    >
                                        {option.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default SortButtonDropDown;
