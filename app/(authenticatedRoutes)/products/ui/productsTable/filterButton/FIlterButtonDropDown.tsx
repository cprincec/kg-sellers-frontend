"use client";

import { Button } from "@/components/ui/button";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IFilterOption } from "../../../lib/interface";
import { useState } from "react";
import ModifiedSelect2 from "@/components/shared/ModifiedSelect2";
import ModifiedInput from "@/components/shared/ModifiedInput";

const FilterButtonDropDown = ({
    filterOptions,
}: // setShowDropDown,
{
    filterOptions: IFilterOption[];
    // setShowDropDown: Dispatch<SetStateAction<boolean>>;
}) => {
    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const router = useRouter();

    // const handleFilterFunc = (FilterCategory: string, FilterValue: string) => {
    //     // Close the dropdown
    //     setShowDropDown(false);

    //     if (!FilterCategory || !FilterValue) return;

    //     // Prevent Filtering if the items are already Filtered by user preference
    //     if (
    //         searchParams.get("filter-category") === FilterCategory &&
    //         searchParams.get("filter-value") === FilterValue
    //     ) {
    //         return;
    //     }

    //     // Add Filter options to url
    //     const params = new URLSearchParams(searchParams);
    //     params.set("filter-category", FilterCategory);
    //     params.set("filter-value", FilterValue);

    //     router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    // };

    const [quantity, setQuantity] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);

    return (
        <div className="grid gap-8 p-4 animate-slideDownFade w-full">
            <div className="grid gap-4">
                {filterOptions.map((filterOption) => {
                    const { category, options } = filterOption;

                    return (
                        <ModifiedSelect2
                            key={category.value}
                            placeholder={category.label}
                            options={options}
                        />
                    );
                })}

                <ModifiedInput
                    type="number"
                    id="amount"
                    value={amount.toString()}
                    onChange={(value) => setAmount(parseInt(value))}
                />
                <ModifiedInput
                    type="number"
                    id="quantity"
                    value={quantity.toString()}
                    onChange={(value) => setQuantity(parseInt(value))}
                />
            </div>

            <div className="flex justify-between">
                <Button variant={"outline"} className="rounded-full md:px-8 md:py-3">
                    Reset
                </Button>
                <Button className="rounded-full md:px-8 md:py-3">Filter</Button>
            </div>
        </div>
    );
};

export default FilterButtonDropDown;
