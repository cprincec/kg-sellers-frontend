"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconArrowDownRound, IconPlusSign } from "@/public/icons/icons";
import Image from "next/image";
import { useState } from "react";

const AddProductButton = ({ className }: { className?: string }) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    return (
        <div className={className}>
            <Popover open={showDropDown} onOpenChange={setShowDropDown}>
                <PopoverTrigger className="rounded-full data-[state=open]:!shadow" asChild>
                    <Button className="gap-2 py-3 px-4 text-sm md:text-base rounded-full border-none">
                        <Image src={IconPlusSign} alt="plus sign" />
                        Add Product
                        <Image src={IconArrowDownRound} alt="arrow down" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="rounded-xl p-0 py-2 w-min" align="start">
                    <div className="grid gap-2 w-full">
                        <Button variant={"ghost"} className="font-normal justify-start w-full bg-transparent">
                            Single Upload
                        </Button>
                        <Button variant={"ghost"} className="font-normal justify-start w-full bg-transparent">
                            Bulk Upload
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default AddProductButton;
